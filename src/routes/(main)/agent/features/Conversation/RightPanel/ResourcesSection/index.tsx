import { Flexbox, Text } from '@lobehub/ui';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import AgentDocumentsGroup from './AgentDocumentsGroup';

interface ResourcesSectionProps {
  onSelectDocument: (id: string | null) => void;
  selectedDocumentId: string | null;
}

const ResourcesSection = memo<ResourcesSectionProps>(({ onSelectDocument, selectedDocumentId }) => {
  const { t } = useTranslation('chat');

  return (
    <Flexbox data-testid="workspace-resources" gap={12} padding={16}>
      <Text strong>{t('workspacePanel.resources')}</Text>
      <AgentDocumentsGroup
        selectedDocumentId={selectedDocumentId}
        onSelectDocument={onSelectDocument}
      />
    </Flexbox>
  );
});

ResourcesSection.displayName = 'ResourcesSection';

export default ResourcesSection;
