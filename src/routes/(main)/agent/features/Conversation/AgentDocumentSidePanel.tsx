import { Button, Flexbox, Text } from '@lobehub/ui';
import { Spin } from 'antd';
import { createStaticStyles, cssVar } from 'antd-style';
import { memo, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import EditorTextArea from '@/features/EditorModal/TextArea';
import { useClientDataSWR } from '@/libs/swr';
import { agentDocumentService } from '@/services/agentDocument';
import { useAgentStore } from '@/store/agent';

const styles = createStaticStyles(({ css }) => ({
  container: css`
    flex: none;

    width: min(42vw, 560px);
    min-width: 320px;
    height: 100%;
    border-inline-start: 1px solid ${cssVar.colorBorderSecondary};
    border-inline-end: 1px solid ${cssVar.colorBorderSecondary};

    background: ${cssVar.colorBgContainer};

    transition:
      width 0.22s ${cssVar.motionEaseInOut},
      min-width 0.22s ${cssVar.motionEaseInOut},
      opacity 0.2s ${cssVar.motionEaseInOut},
      transform 0.22s ${cssVar.motionEaseInOut},
      border-color 0.2s ${cssVar.motionEaseInOut};
  `,
  hidden: css`
    pointer-events: none;

    transform: translateX(8px);

    overflow: hidden;

    width: 0;
    min-width: 0;
    border-inline-start-color: transparent;
    border-inline-end-color: transparent;

    opacity: 0;
  `,
  editor: css`
    flex: 1;
    min-height: 0;
    padding: 12px;
  `,
  footer: css`
    border-block-start: 1px solid ${cssVar.colorBorderSecondary};
  `,
  header: css`
    border-block-end: 1px solid ${cssVar.colorBorderSecondary};
  `,
}));

interface AgentDocumentSidePanelProps {
  onClose: () => void;
  selectedDocumentId: string | null;
}

const AgentDocumentSidePanel = memo<AgentDocumentSidePanelProps>(
  ({ selectedDocumentId, onClose }) => {
    const { t } = useTranslation('chat');
    const agentId = useAgentStore((s) => s.activeAgentId);
    const [draft, setDraft] = useState('');
    const [savedContent, setSavedContent] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    const { data, error, isLoading, mutate } = useClientDataSWR(
      agentId && selectedDocumentId
        ? ['workspace-agent-document-editor', agentId, selectedDocumentId]
        : null,
      () => agentDocumentService.readDocument({ agentId: agentId!, id: selectedDocumentId! }),
    );

    useEffect(() => {
      if (!data) return;
      setDraft(data.content);
      setSavedContent(data.content);
    }, [data]);

    useEffect(() => {
      // Reset editor state immediately when switching target documents.
      setDraft('');
      setSavedContent('');
    }, [selectedDocumentId]);

    const isDirty = useMemo(() => draft !== savedContent, [draft, savedContent]);
    const isDocumentReady = Boolean(data) && data?.id === selectedDocumentId;
    const shouldShowLoading = isLoading || !isDocumentReady;
    const isOpen = Boolean(selectedDocumentId);

    if (!agentId) return null;

    const saveDocument = async () => {
      if (!isDirty || isSaving || !selectedDocumentId) return;

      setIsSaving(true);
      try {
        await agentDocumentService.editDocument({
          agentId,
          content: draft,
          id: selectedDocumentId,
        });
        await mutate();
        setSavedContent(draft);
      } finally {
        setIsSaving(false);
      }
    };

    return (
      <Flexbox
        className={`${styles.container} ${!isOpen ? styles.hidden : ''}`}
        data-testid="workspace-document-panel"
      >
        {!isOpen ? null : (
          <>
            <Flexbox
              horizontal
              align={'center'}
              className={styles.header}
              justify={'space-between'}
              padding={12}
            >
              <Text strong>
                {data?.filename || data?.title || t('workspacePanel.documents.title')}
              </Text>
              <Flexbox horizontal gap={8}>
                <Button size={'small'} onClick={onClose}>
                  {t('workspacePanel.documents.close')}
                </Button>
                <Button
                  disabled={!isDirty || shouldShowLoading || Boolean(error)}
                  loading={isSaving}
                  size={'small'}
                  type={'primary'}
                  onClick={saveDocument}
                >
                  {t('workspacePanel.documents.save')}
                </Button>
              </Flexbox>
            </Flexbox>

            {shouldShowLoading && (
              <Flexbox horizontal align={'center'} gap={8} style={{ padding: 12 }}>
                <Spin size={'small'} />
                <Text type={'secondary'}>{t('workspacePanel.documents.loading')}</Text>
              </Flexbox>
            )}
            {error && (
              <Text style={{ padding: 12 }} type={'danger'}>
                {t('workspacePanel.documents.error')}
              </Text>
            )}

            {!shouldShowLoading && !error && data && (
              <>
                <Flexbox className={styles.editor}>
                  <EditorTextArea
                    style={{ height: '100%', resize: 'none' }}
                    value={draft}
                    onChange={setDraft}
                  />
                </Flexbox>
                <Flexbox className={styles.footer} padding={12}>
                  <Text type={'secondary'}>
                    {isDirty
                      ? t('workspacePanel.documents.unsaved')
                      : t('workspacePanel.documents.saved')}
                  </Text>
                </Flexbox>
              </>
            )}
          </>
        )}
      </Flexbox>
    );
  },
);

AgentDocumentSidePanel.displayName = 'AgentDocumentSidePanel';

export default AgentDocumentSidePanel;
