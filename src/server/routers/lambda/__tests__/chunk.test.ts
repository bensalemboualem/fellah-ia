// @vitest-environment node
import { TRPCError } from '@trpc/server';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const {
  mockEmbeddings,
  mockFileFindByIds,
  mockGetServerDB,
  mockGetXorPayload,
  mockSemanticSearchForChat,
} =
  vi.hoisted(() => ({
    mockEmbeddings: vi.fn(),
    mockFileFindByIds: vi.fn(),
    mockGetServerDB: vi.fn(),
    mockGetXorPayload: vi.fn(),
    mockSemanticSearchForChat: vi.fn(),
  }));

vi.mock('@/database/core/db-adaptor', () => ({
  getServerDB: mockGetServerDB,
}));

vi.mock('@lobechat/utils/server', () => ({
  getXorPayload: mockGetXorPayload,
}));

vi.mock('@/server/globalConfig', () => ({
  getServerDefaultFilesConfig: vi.fn(() => ({
    embeddingModel: {
      model: 'text-embedding-3-large',
      provider: 'openai',
    },
  })),
}));

vi.mock('@/server/modules/ModelRuntime', () => ({
  initModelRuntimeFromDB: vi.fn(() => ({
    embeddings: mockEmbeddings,
  })),
}));

vi.mock('@/database/models/asyncTask', () => ({
  AsyncTaskModel: vi.fn(() => ({})),
}));

vi.mock('@/database/models/chunk', () => ({
  ChunkModel: vi.fn(() => ({
    semanticSearchForChat: mockSemanticSearchForChat,
  })),
}));

vi.mock('@/database/models/document', () => ({
  DocumentModel: vi.fn(() => ({})),
}));

vi.mock('@/database/models/embedding', () => ({
  EmbeddingModel: vi.fn(() => ({})),
}));

vi.mock('@/database/models/file', () => ({
  FileModel: vi.fn(() => ({
    findByIds: mockFileFindByIds,
  })),
}));

vi.mock('@/database/models/message', () => ({
  MessageModel: vi.fn(() => ({})),
}));

vi.mock('@/server/services/chunk', () => ({
  ChunkService: vi.fn(() => ({})),
}));

vi.mock('@/server/services/document', () => ({
  DocumentService: vi.fn(() => ({})),
}));

import { chunkRouter } from '@/server/routers/lambda/chunk';

const createCaller = (serverDB: any, userId: string = 'user-a') => {
  mockGetServerDB.mockResolvedValue(serverDB);

  return chunkRouter.createCaller({
    authorizationHeader: 'Bearer test-token',
    userId,
  } as any);
};

describe('chunkRouter semanticSearchForChat', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    mockGetXorPayload.mockReturnValue({ apiKey: 'test-key' });
    mockEmbeddings.mockResolvedValue([[0.1, 0.2, 0.3]]);
    mockFileFindByIds.mockResolvedValue([]);
    mockSemanticSearchForChat.mockResolvedValue([
      {
        fileId: 'file-a',
        fileName: 'File A',
        id: 'chunk-a',
        similarity: 0.92,
        text: 'owned chunk',
      },
    ]);
  });

  it('should reject knowledge ids that are not owned by the current user', async () => {
    const knowledgeBasesFindMany = vi.fn().mockResolvedValue([{ id: 'kb-a' }]);
    const knowledgeBaseFilesFindMany = vi.fn();
    const caller = createCaller({
      query: {
        knowledgeBaseFiles: {
          findMany: knowledgeBaseFilesFindMany,
        },
        knowledgeBases: {
          findMany: knowledgeBasesFindMany,
        },
      },
    });

    const searchPromise = caller.semanticSearchForChat({
      knowledgeIds: ['kb-a', 'kb-b'],
      query: 'find something',
      topK: 5,
    });

    await expect(
      searchPromise,
    ).rejects.toBeInstanceOf(TRPCError);

    await expect(
      searchPromise,
    ).rejects.toMatchObject({
      code: 'FORBIDDEN',
      message: 'One or more knowledge bases are not accessible',
    });

    expect(knowledgeBasesFindMany).toHaveBeenCalledTimes(1);
    expect(knowledgeBaseFilesFindMany).not.toHaveBeenCalled();
    expect(mockSemanticSearchForChat).not.toHaveBeenCalled();
  });

  it('should resolve only the current user knowledge base files', async () => {
    mockFileFindByIds.mockResolvedValue([]);
    const knowledgeBasesFindMany = vi.fn().mockResolvedValue([{ id: 'kb-a' }]);
    const knowledgeBaseFilesFindMany = vi.fn().mockResolvedValue([
      { fileId: 'file-a', knowledgeBaseId: 'kb-a', userId: 'user-a' },
    ]);
    const caller = createCaller({
      query: {
        knowledgeBaseFiles: {
          findMany: knowledgeBaseFilesFindMany,
        },
        knowledgeBases: {
          findMany: knowledgeBasesFindMany,
        },
      },
    });

    const result = await caller.semanticSearchForChat({
      knowledgeIds: ['kb-a'],
      query: 'find something',
      topK: 5,
    });

    expect(knowledgeBasesFindMany).toHaveBeenCalledTimes(1);
    expect(knowledgeBaseFilesFindMany).toHaveBeenCalledTimes(1);
    expect(mockSemanticSearchForChat).toHaveBeenCalledWith({
      embedding: [0.1, 0.2, 0.3],
      fileIds: ['file-a'],
      query: 'find something',
      topK: 5,
    });
    expect(result.fileResults).toEqual([
      {
        fileId: 'file-a',
        fileName: 'File A',
        relevanceScore: 0.92,
        topChunks: [
          {
            id: 'chunk-a',
            similarity: 0.92,
            text: 'owned chunk',
          },
        ],
      },
    ]);
  });

  it('should reject direct file ids that are not owned by the current user', async () => {
    mockFileFindByIds.mockResolvedValue([{ id: 'file-a' }]);
    const caller = createCaller({
      query: {
        knowledgeBaseFiles: {
          findMany: vi.fn(),
        },
        knowledgeBases: {
          findMany: vi.fn(),
        },
      },
    });

    const searchPromise = caller.semanticSearchForChat({
      fileIds: ['file-a', 'file-b'],
      query: 'find something',
      topK: 5,
    });

    await expect(searchPromise).rejects.toMatchObject({
      code: 'FORBIDDEN',
      message: 'One or more files are not accessible',
    });

    expect(mockSemanticSearchForChat).not.toHaveBeenCalled();
  });
});
