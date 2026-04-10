// @vitest-environment node
import { NextRequest } from 'next/server';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const {
  mockCreatePreSignedUrlForPreview,
  mockFindById,
  mockGetRedisConfig,
  mockGetServerDB,
  mockGetSession,
  mockInitializeRedis,
  mockIsRedisEnabled,
} = vi.hoisted(() => ({
  mockCreatePreSignedUrlForPreview: vi.fn(),
  mockFindById: vi.fn(),
  mockGetRedisConfig: vi.fn(),
  mockGetServerDB: vi.fn(),
  mockGetSession: vi.fn(),
  mockInitializeRedis: vi.fn(),
  mockIsRedisEnabled: vi.fn(),
}));

vi.mock('@/auth', () => ({
  auth: {
    api: {
      getSession: mockGetSession,
    },
  },
}));

vi.mock('@/database/server', () => ({
  getServerDB: mockGetServerDB,
}));

vi.mock('@/database/models/file', () => ({
  FileModel: vi.fn(() => ({
    findById: mockFindById,
  })),
}));

vi.mock('@/server/services/file', () => ({
  FileService: vi.fn(() => ({
    createPreSignedUrlForPreview: mockCreatePreSignedUrlForPreview,
  })),
}));

vi.mock('@/envs/redis', () => ({
  getRedisConfig: mockGetRedisConfig,
}));

vi.mock('@/libs/redis', () => ({
  initializeRedis: mockInitializeRedis,
  isRedisEnabled: mockIsRedisEnabled,
}));

import { GET } from './route';

describe('/f/[id] route', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    mockGetServerDB.mockResolvedValue({} as any);
    mockGetRedisConfig.mockReturnValue({});
    mockInitializeRedis.mockResolvedValue(null);
    mockIsRedisEnabled.mockReturnValue(false);
    mockCreatePreSignedUrlForPreview.mockResolvedValue('https://signed.example.com/file');
  });

  it('should return 401 when the request is anonymous', async () => {
    mockGetSession.mockResolvedValue(null);

    const response = await GET(new NextRequest('https://test.com/f/file-a'), {
      params: Promise.resolve({ id: 'file-a' }),
    });

    expect(response.status).toBe(401);
    expect(mockFindById).not.toHaveBeenCalled();
    expect(mockCreatePreSignedUrlForPreview).not.toHaveBeenCalled();
  });

  it('should return 404 when the authenticated user does not own the file', async () => {
    mockGetSession.mockResolvedValue({
      user: { id: 'user-a' },
    });
    mockFindById.mockResolvedValue(null);

    const response = await GET(new NextRequest('https://test.com/f/file-b'), {
      params: Promise.resolve({ id: 'file-b' }),
    });

    expect(response.status).toBe(404);
    expect(mockFindById).toHaveBeenCalledWith('file-b');
    expect(mockCreatePreSignedUrlForPreview).not.toHaveBeenCalled();
  });

  it('should redirect when the authenticated user owns the file', async () => {
    mockGetSession.mockResolvedValue({
      user: { id: 'user-a' },
    });
    mockFindById.mockResolvedValue({
      id: 'file-a',
      url: 'files/file-a.pdf',
      userId: 'user-a',
    });

    const response = await GET(new NextRequest('https://test.com/f/file-a'), {
      params: Promise.resolve({ id: 'file-a' }),
    });

    expect(response.status).toBe(302);
    expect(response.headers.get('location')).toBe('https://signed.example.com/file');
    expect(mockFindById).toHaveBeenCalledWith('file-a');
    expect(mockCreatePreSignedUrlForPreview).toHaveBeenCalledWith('files/file-a.pdf', 300);
  });
});
