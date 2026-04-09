import { Checkbox, Flexbox, Icon, Tag } from '@lobehub/ui';
import { Progress } from 'antd';
import { createStaticStyles, cssVar, cx } from 'antd-style';
import { ChevronDown, ChevronUp, CircleArrowRight, ListTodo } from 'lucide-react';
import { memo, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useChatStore } from '@/store/chat';
import { selectTodosFromMessages } from '@/store/chat/slices/message/selectors/dbMessage';
import { messageMapKey } from '@/store/chat/utils/messageMapKey';

import { useAgentContext } from '../../useAgentContext';
import { normalizeTaskProgress } from './taskProgressAdapter';

const styles = createStaticStyles(({ css }) => ({
  collapsed: css`
    max-height: 0;
    padding-block: 0 !important;
    opacity: 0;
  `,
  count: css`
    font-family: ${cssVar.fontFamilyCode};
    font-size: 12px;
    color: ${cssVar.colorTextSecondary};
  `,
  expanded: css`
    max-height: 280px;
    opacity: 1;
  `,
  header: css`
    overflow: hidden;

    font-size: 13px;
    font-weight: 500;
    color: ${cssVar.colorText};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  itemRow: css`
    padding-block: 6px;
    padding-inline: 4px;
    border-block-end: 1px dashed ${cssVar.colorBorderSecondary};
    font-size: 13px;

    &:last-child {
      border-block-end: none;
    }
  `,
  listContainer: css`
    overflow: hidden;

    margin-block-start: 8px;
    padding-block: 4px;
    border-block-start: 1px solid ${cssVar.colorBorderSecondary};

    transition:
      max-height 0.25s ${cssVar.motionEaseInOut},
      opacity 0.2s ${cssVar.motionEaseInOut},
      padding 0.2s ${cssVar.motionEaseInOut};
  `,
  processingRow: css`
    display: flex;
    gap: 6px;
    align-items: center;
  `,
  textCompleted: css`
    color: ${cssVar.colorTextQuaternary};
    text-decoration: line-through;
  `,
  textProcessing: css`
    color: ${cssVar.colorText};
  `,
  textTodo: css`
    color: ${cssVar.colorTextSecondary};
  `,
}));

const ProgressSection = memo(() => {
  const { t } = useTranslation('chat');
  const context = useAgentContext();
  const [expanded, setExpanded] = useState(false);
  const chatKey = messageMapKey(context);
  const dbMessages = useChatStore((s) => s.dbMessagesMap[chatKey]);

  const progress = useMemo(
    () => normalizeTaskProgress(selectTodosFromMessages(dbMessages || [])),
    [dbMessages],
  );

  const total = progress.items.length;
  const completed = progress.items.filter((item) => item.status === 'completed').length;

  return (
    <Flexbox
      data-testid="workspace-progress"
      gap={8}
      padding={16}
      style={{ cursor: 'pointer' }}
      onClick={() => setExpanded((v) => !v)}
    >
      <Flexbox horizontal align={'center'} gap={8} justify={'space-between'}>
        <Flexbox horizontal align={'center'} gap={8} style={{ flex: 1, minWidth: 0 }}>
          <Icon icon={ListTodo} size={16} style={{ color: cssVar.colorPrimary, flexShrink: 0 }} />
          <span className={styles.header}>
            {progress.currentTask || t('workspacePanel.progress.allCompleted')}
          </span>
          <Tag size={'small'} style={{ flexShrink: 0 }}>
            <span className={styles.count}>
              {completed}/{total}
            </span>
          </Tag>
        </Flexbox>
        <Icon
          icon={expanded ? ChevronUp : ChevronDown}
          size={16}
          style={{ color: cssVar.colorTextTertiary, flexShrink: 0 }}
        />
      </Flexbox>

      <Progress percent={progress.completionPercent} showInfo={false} size={'small'} />

      <div className={cx(styles.listContainer, expanded ? styles.expanded : styles.collapsed)}>
        {progress.items.map((item) => {
          const isCompleted = item.status === 'completed';
          const isProcessing = item.status === 'processing';

          if (isProcessing) {
            return (
              <div className={cx(styles.itemRow, styles.processingRow)} key={item.id}>
                <Icon
                  icon={CircleArrowRight}
                  size={17}
                  style={{ color: cssVar.colorTextSecondary }}
                />
                <span className={styles.textProcessing}>{item.text}</span>
              </div>
            );
          }

          return (
            <Checkbox
              backgroundColor={cssVar.colorSuccess}
              checked={isCompleted}
              key={item.id}
              shape={'circle'}
              style={{ borderWidth: 1.5, cursor: 'default', pointerEvents: 'none' }}
              classNames={{
                text: cx(styles.textTodo, isCompleted && styles.textCompleted),
                wrapper: styles.itemRow,
              }}
              textProps={{
                type: isCompleted ? 'secondary' : undefined,
              }}
            >
              {item.text}
            </Checkbox>
          );
        })}
      </div>
    </Flexbox>
  );
});

ProgressSection.displayName = 'ProgressSection';

export default ProgressSection;
