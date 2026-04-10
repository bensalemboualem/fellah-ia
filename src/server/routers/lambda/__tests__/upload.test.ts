// @vitest-environment node
import { TRPCError } from '@trpc/server';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const { mockCreatePreSignedUrl } = vi.hoisted(() => ({
  mockCreatePreSignedUrl: vi.fn(),
}));

vi.mock('@/server/modules/S3', () => ({
  FileS3: vi.fn(() => ({
    createPreSignedUrl: mockCreatePreSignedUrl,
  })),
}));

import { uploadRouter } from '@/server/routers/lambda/upload';

describe('uploadRouter.createS3PreSignedUrl', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockCreatePreSignedUrl.mockResolvedValue('https://signed-upload.example.com');
  });

  it('should reject dangerous pathnames', async () => {
    const caller = uploadRouter.createCaller({ userId: 'user-a' } as any);

    await expect(
      caller.createS3PreSignedUrl({ pathname: '../secrets.txt' }),
    ).rejects.toBeInstanceOf(TRPCError);

    await expect(
      caller.createS3PreSignedUrl({ pathname: 'files/../../escape.txt' }),
    ).rejects.toBeInstanceOf(TRPCError);

    expect(mockCreatePreSignedUrl).not.toHaveBeenCalled();
  });

  it('should reject unexpected upload scopes', async () => {
    const caller = uploadRouter.createCaller({ userId: 'user-a' } as any);

    await expect(
      caller.createS3PreSignedUrl({ pathname: 'untrusted/path/file.txt' }),
    ).rejects.toBeInstanceOf(TRPCError);

    expect(mockCreatePreSignedUrl).not.toHaveBeenCalled();
  });

  it('should accept a valid product upload pathname', async () => {
    const caller = uploadRouter.createCaller({ userId: 'user-a' } as any);

    const result = await caller.createS3PreSignedUrl({
      pathname: 'files/1/550e8400-e29b-41d4-a716-446655440000.pdf',
    });

    expect(result).toBe('https://signed-upload.example.com');
    expect(mockCreatePreSignedUrl).toHaveBeenCalledWith(
      'files/1/550e8400-e29b-41d4-a716-446655440000.pdf',
    );
  });
});
