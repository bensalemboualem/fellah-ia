// @vitest-environment node
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { chunks, embeddings, fileChunks, files } from '../../schemas';
import { FileModel } from '../file';

describe('FileModel deletion integrity', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fail explicitly and stop file deletion when a related chunk deletion fails', async () => {
    const tx = {
      delete: vi.fn((table) => ({
        where: vi.fn(() => {
          if (table === embeddings) throw new Error('delete embeddings failed');
          return Promise.resolve(undefined);
        }),
      })),
      query: {
        files: {
          findFirst: vi.fn().mockResolvedValue({
            fileHash: 'hash-1',
            id: 'file-1',
          }),
        },
      },
      select: vi.fn((selection) => {
        if ('chunkId' in selection) {
          return {
            from: vi.fn(() => ({
              where: vi.fn().mockResolvedValue([{ chunkId: 'chunk-1' }]),
            })),
          };
        }

        return {
          from: vi.fn(() => ({
            where: vi.fn().mockResolvedValue([{ count: 0 }]),
          })),
        };
      }),
    };

    const db = {
      select: vi.fn(() => ({
        from: vi.fn(() => ({
          leftJoin: vi.fn(() => ({
            where: vi.fn().mockResolvedValue([]),
          })),
        })),
      })),
      transaction: vi.fn(async (callback) => callback(tx)),
    };

    const model = new FileModel(db as any, 'user-a');

    await expect(model.delete('file-1')).rejects.toThrow('delete embeddings failed');
    expect(tx.delete).toHaveBeenCalledWith(embeddings);
    expect(tx.delete).not.toHaveBeenCalledWith(files);
  });

  it('should continue to delete files successfully when related deletions succeed', async () => {
    const tx = {
      delete: vi.fn(() => ({
        where: vi.fn().mockResolvedValue(undefined),
      })),
      query: {
        files: {
          findFirst: vi.fn().mockResolvedValue({
            fileHash: 'hash-1',
            id: 'file-1',
          }),
        },
      },
      select: vi.fn((selection) => {
        if ('chunkId' in selection) {
          return {
            from: vi.fn(() => ({
              where: vi.fn().mockResolvedValue([{ chunkId: 'chunk-1' }]),
            })),
          };
        }

        return {
          from: vi.fn(() => ({
            where: vi.fn().mockResolvedValue([{ count: 0 }]),
          })),
        };
      }),
    };

    const db = {
      select: vi.fn(() => ({
        from: vi.fn(() => ({
          leftJoin: vi.fn(() => ({
            where: vi.fn().mockResolvedValue([]),
          })),
        })),
      })),
      transaction: vi.fn(async (callback) => callback(tx)),
    };

    const model = new FileModel(db as any, 'user-a');

    await expect(model.delete('file-1')).resolves.toEqual({
      fileHash: 'hash-1',
      id: 'file-1',
    });
    expect(db.select).toHaveBeenCalled();
    expect(tx.delete).toHaveBeenCalledWith(embeddings);
    expect(tx.delete).toHaveBeenCalledWith(chunks);
    expect(tx.delete).toHaveBeenCalledWith(fileChunks);
    expect(tx.delete).toHaveBeenCalledWith(files);
  });
});
