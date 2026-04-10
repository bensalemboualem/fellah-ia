import { z } from 'zod';

import { fileEnv } from '@/envs/file';
import { authedProcedure, router } from '@/libs/trpc/lambda';
import { FileS3 } from '@/server/modules/S3';

const INVALID_UPLOAD_PATHNAME_MESSAGE = 'Invalid upload pathname';
const MAX_UPLOAD_PATHNAME_LENGTH = 512;
const SAFE_PATH_SEGMENT_REGEX = /^[\dA-Za-z][\w.-]*$/;

const normalizePathname = (pathname: string) => pathname.trim().replaceAll('\\', '/');

const isAllowedUploadPathname = (pathname: string) => {
  if (!pathname || pathname.length > MAX_UPLOAD_PATHNAME_LENGTH) return false;
  if (pathname.startsWith('/') || pathname.endsWith('/')) return false;
  if (pathname.includes('//')) return false;

  const normalized = normalizePathname(pathname);
  const segments = normalized.split('/');
  if (segments.length < 2) return false;
  if (segments.some((segment) => !segment || segment === '.' || segment === '..')) return false;
  if (segments.some((segment) => !SAFE_PATH_SEGMENT_REGEX.test(segment))) return false;

  const allowedPrefixes = [fileEnv.NEXT_PUBLIC_S3_FILE_PATH, 'import_config', 'ragEval'];

  return allowedPrefixes.some(
    (prefix) => normalized === prefix || normalized.startsWith(`${prefix}/`),
  );
};

export const uploadRouter = router({
  createS3PreSignedUrl: authedProcedure
    .input(
      z.object({
        pathname: z.string().trim().refine(isAllowedUploadPathname, INVALID_UPLOAD_PATHNAME_MESSAGE),
      }),
    )
    .mutation(async ({ input }) => {
      const s3 = new FileS3();

      return await s3.createPreSignedUrl(normalizePathname(input.pathname));
    }),
});

export type FileRouter = typeof uploadRouter;
