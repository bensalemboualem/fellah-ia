import debug from 'debug';

import { auth } from '@/auth';
import { FileModel } from '@/database/models/file';
import { getServerDB } from '@/database/server';
import { getRedisConfig } from '@/envs/redis';
import { initializeRedis, isRedisEnabled } from '@/libs/redis';
import { FileService } from '@/server/services/file';

const log = debug('lobe-file:proxy');

type Params = Promise<{ id: string }>;

const FILE_PROXY_KEY_PREFIX = 'file-proxy:';
// Cache presigned URL for 4 minutes (URL expires in 5 minutes)
const PRESIGNED_URL_CACHE_TTL = 240;

const buildCacheKey = (id: string) => `${FILE_PROXY_KEY_PREFIX}${id}`;

interface CachedFileData {
  redirectUrl: string;
}

/**
 * File proxy service
 * GET /f/:id
 *
 * Features:
 * - Require an authenticated user
 * - Query database with a strict userId filter
 * - Generate access URL based on platform (desktop → local file, web → S3 presigned URL)
 * - Cache presigned URL in Redis to reduce S3 API calls
 * - Return 302 redirect
 */
export const GET = async (req: Request, segmentData: { params: Params }) => {
  try {
    const params = await segmentData.params;
    const { id } = params;

    log('File proxy request: %s', id);

    const session = await auth.api.getSession({ headers: req.headers });

    if (!session) {
      log('Unauthorized file proxy request: %s', id);
      return new Response('Unauthorized', {
        status: 401,
      });
    }

    // Get database connection
    const db = await getServerDB();
    const fileModel = new FileModel(db, session.user.id);
    const file = await fileModel.findById(id);

    if (!file) {
      log('File not found or not accessible: %s', id);
      return new Response('File not found', {
        status: 404,
      });
    }

    // Try to get cached presigned URL from Redis
    const redisConfig = getRedisConfig();
    const redisClient = isRedisEnabled(redisConfig) ? await initializeRedis(redisConfig) : null;

    const cacheKey = buildCacheKey(id);
    if (redisClient) {
      const cachedStr = await redisClient.get(cacheKey);
      const cached = cachedStr ? (JSON.parse(cachedStr) as CachedFileData) : null;
      if (cached?.redirectUrl) {
        log('Cache hit for file: %s', id);
        return Response.redirect(cached.redirectUrl, 302);
      }
      log('Cache miss for file: %s', id);
    }

    const fileService = new FileService(db, session.user.id);

    // Web: Generate S3 presigned URL (5 minutes expiry)
    const redirectUrl = await fileService.createPreSignedUrlForPreview(file.url, 300);
    log('Web S3 presigned URL generated (expires in 5 min)');

    // Cache the presigned URL in Redis
    if (redisClient) {
      await redisClient.set(cacheKey, JSON.stringify({ redirectUrl }), {
        ex: PRESIGNED_URL_CACHE_TTL,
      });
      log('Cached presigned URL for file: %s (TTL: %ds)', id, PRESIGNED_URL_CACHE_TTL);
    }

    // Return 302 redirect
    return Response.redirect(redirectUrl, 302);
  } catch (error) {
    console.error('File proxy error:', error);
    return new Response('Internal server error', {
      status: 500,
    });
  }
};
