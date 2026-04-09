# WorkflowCollapse UI Alignment with Thinking Component

**Date:** 2026-04-09
**Status:** Approved

## Goal

Align `WorkflowCollapse` visual style and interaction with the `Thinking` component for consistent UI across collapsible panels in the conversation view.

## Part 1: Title Bar Alignment

### File: `WorkflowCollapse.tsx`

#### 1. Streaming Icon

- **Before:** `NeuralNetworkLoading` (custom SVG component)
- **After:** `Loader2Icon` with `Icon` component's `spin` prop + `cssVar.colorTextDescription` color (identical to `Thinking/StatusIndicator.tsx`)

#### 2. Streaming Text

- **Before:** `inspectorTextStyles.root` (static `colorTextSecondary`, ellipsis)
- **After:** `shinyTextStyles.shinyText` (shimmer gradient animation, same as `Thinking/Title.tsx` streaming state)

#### 3. Completed Text

- **Before:** `inspectorTextStyles.root` with inline `<span>` for summary + duration
- **After:** `Text type="secondary"` from `@lobehub/ui` for summary text; duration still in `colorTextQuaternary` span

#### 4. Completed Icon (unchanged)

- `Check` (green) / `X` (red) in `Block` variant="outlined" — kept as-is since Thinking has no success/error states

#### 5. Import Changes

- Remove: `NeuralNetworkLoading`, `inspectorTextStyles`
- Add: `shinyTextStyles` from `@/styles`, `Text` from `@lobehub/ui`, `Loader2Icon` from `lucide-react`

## Part 2: Inner Item Style Unification

### File: `WorkflowExpandedList.tsx`

- `blockContent` padding-inline: `30px 8px` → `32px 8px`
- `blockContent` padding-block: `2px` → `3px`

### File: `WorkflowReasoningLine.tsx`

- Font size: `12px` → `13px`
- Padding-inline: `30px 8px` → `32px 8px`
- Padding-block: `2px` → `3px`
- Add `font-style: italic` to differentiate from tool lines

### File: `WorkflowToolLine.tsx`

- `root` padding-block: `4px` → `3px`
- `root` gap: `6px` → `8px` (so icon 16px + gap 8px + padding 8px = 32px, aligning with reasoning/content indent)
- `statusIcon` height: `24px` → `16px`
- Remove `getToolColor` function — tool name color becomes `cssVar.colorTextSecondary` (muted, uniform)

## Part 3: Streaming Scroll Behavior

### File: `WorkflowCollapse.tsx` + `WorkflowExpandedList.tsx`

#### State Machine

| State                             | Trigger            | Next State               |
| --------------------------------- | ------------------ | ------------------------ |
| streaming + constrained (default) | user clicks title  | streaming + expanded     |
| streaming + constrained           | all tools complete | collapsed                |
| streaming + expanded              | all tools complete | collapsed                |
| collapsed                         | user clicks title  | expanded (no max-height) |

#### Implementation

- **streaming + constrained:** `WorkflowExpandedList` wrapped in `ScrollShadow` from `@lobehub/ui` with `max-height: min(40vh, 320px)`. Use `useAutoScroll` hook (same as Thinking) to auto-scroll to bottom on new items.
- **streaming + expanded:** User clicked during streaming → remove `max-height`, no `ScrollShadow`, show all items. Track via `userExpandedRef` (already exists).
- **collapsed:** Accordion collapsed after streaming completes (existing behavior).
- **expanded:** User clicks collapsed accordion → expand without max-height constraint (existing behavior).

#### Key Detail

- `constrained` state is only active during streaming AND user has not clicked to expand
- Once user clicks during streaming, `userExpandedRef = true` → switch to unconstrained mode
- `ScrollShadow` offset and size: `12` (same as Thinking)

## Out of Scope

- Component extraction or shared abstraction
- WorkflowToolDetail styling
- Debug panel styling
