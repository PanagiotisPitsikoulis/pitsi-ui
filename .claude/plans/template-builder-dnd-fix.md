# Template Builder Drag & Drop Fix Plan

## Problems Identified

### 1. Preview Drag is Buggy
**Root cause**: CSS `transform: scale(0.5)` on the preview container breaks dnd-kit's coordinate calculations. When dragging, dnd-kit calculates positions in the unscaled coordinate space, but the visual feedback is in the scaled space, causing a 2x mismatch.

**Solution**: Adjust the transform values from useSortable by dividing by PREVIEW_SCALE:
```tsx
const adjustedTransform = transform ? {
  ...transform,
  x: transform.x / PREVIEW_SCALE,
  y: transform.y / PREVIEW_SCALE,
} : null
```

### 2. Library to Preview Drag Not Working
**Root cause**: Library and Preview have separate DndContexts (or library has none), so items can't be dragged between them.

**Solution**:
- Create a shared DndContext wrapping both Library and Preview
- Library cards become draggable with `useDraggable`
- Preview sections remain sortable with `useSortable`
- Use `DragOverlay` to show dragged item preview
- On drop, if dragging from library, add section at drop position

### 3. Selection After Drag
**Solution**: In the drag end handler, find the new index of the dragged item and set it as selectedIndex.

### 4. Pill Size
**Solution**: Increase button sizes from `size-10` to `size-14` and icon sizes from `size-5` to `size-6`.

## Implementation Steps

### Step 1: Fix Preview Drag Scale Issue
- Modify `SortablePreviewSection` to adjust transform for scale
- Test that dragging in preview works correctly

### Step 2: Select Item After Drag
- Update `reorderSections` to accept and return the new index
- Set `selectedIndex` to the dropped item's new position

### Step 3: Make Pill Bigger
- Update button classes from `size-10` to `size-14`
- Update icon classes from `size-5` to `size-6`
- Adjust padding/gap as needed

### Step 4: Implement Library to Preview Drag
- Move DndContext to wrap entire tool (both sidebar and preview)
- Make library SectionCard draggable with `useDraggable`
- Add drop detection in preview
- When library item dropped on preview:
  - Find drop position using closestCenter collision
  - Insert new section at that position
- Use DragOverlay for visual feedback during drag

## Key Code Changes

### SortablePreviewSection Transform Fix
```tsx
const adjustedTransform = transform ? {
  ...transform,
  x: transform.x / PREVIEW_SCALE,
  y: transform.y / PREVIEW_SCALE,
} : null

const style = {
  transform: CSS.Transform.toString(adjustedTransform),
  transition,
  // ...
}
```

### Shared DndContext Structure
```tsx
<DndContext onDragEnd={handleGlobalDragEnd}>
  <ToolLayoutSidebar>
    {/* Library with draggable cards */}
  </ToolLayoutSidebar>
  <ToolLayoutPreview>
    <SortableContext items={...}>
      {/* Sortable preview sections */}
    </SortableContext>
  </ToolLayoutPreview>
  <DragOverlay>
    {/* Preview of dragged item */}
  </DragOverlay>
</DndContext>
```

### Selection After Drag
```tsx
const handleDragEnd = (event: DragEndEvent) => {
  const { active, over } = event
  if (over && active.id !== over.id) {
    const newSections = reorderSections(active.id, over.id)
    const newIndex = newSections.findIndex(s => s.instanceId === active.id)
    setSelectedIndex(newIndex)
  }
}
```
