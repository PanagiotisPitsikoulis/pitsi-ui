"use client"

import { ArrowDown, ArrowUp, Copy, GripVertical, Pencil, Trash2, Upload } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

import { ConfirmDialog } from "./confirm-dialog"

interface SavedItemBase {
  id: string
  name: string
}

interface SavedItemsListProps<T extends SavedItemBase> {
  /**
   * Array of saved items
   */
  items: T[]
  /**
   * Callback when an item is clicked/loaded
   */
  onLoad: (item: T) => void
  /**
   * Callback when an item is renamed
   */
  onRename: (id: string, name: string) => void
  /**
   * Callback when an item is deleted
   */
  onDelete: (id: string) => void
  /**
   * Callback when edit button is clicked (loads item for editing)
   */
  onEdit?: (item: T) => void
  /**
   * Callback when duplicate button is clicked
   */
  onDuplicate?: (item: T) => void
  /**
   * Callback when move up button is clicked
   */
  onMoveUp?: (index: number) => void
  /**
   * Callback when move down button is clicked
   */
  onMoveDown?: (index: number) => void
  /**
   * Custom render function for item preview (e.g., color swatch, shadow preview)
   */
  renderPreview?: (item: T) => React.ReactNode
  /**
   * Icon component to show in empty state
   */
  emptyIcon?: React.ReactNode
  /**
   * Main empty state text
   */
  emptyText?: string
  /**
   * Secondary empty state text
   */
  emptySubtext?: string
  /**
   * Always show action buttons instead of only on hover
   */
  alwaysShowActions?: boolean
  /**
   * Show grip icon for drag handle appearance
   */
  showGripIcon?: boolean
  /**
   * Show load button in actions
   */
  showLoadButton?: boolean
  className?: string
}

function SavedItemsList<T extends SavedItemBase>({
  items,
  onLoad,
  onRename,
  onDelete,
  onEdit,
  onDuplicate,
  onMoveUp,
  onMoveDown,
  renderPreview,
  emptyIcon,
  emptyText = "No saved items yet",
  emptySubtext = "Click the save button to save your current state",
  alwaysShowActions = false,
  showGripIcon = false,
  showLoadButton = false,
  className,
}: SavedItemsListProps<T>) {
  if (items.length === 0) {
    return (
      <div
        className={cn(
          "text-muted-foreground flex h-full flex-col items-center justify-center text-center text-sm",
          className
        )}
      >
        {emptyIcon && <div className="mb-4">{emptyIcon}</div>}
        <p>{emptyText}</p>
        <p className="text-xs">{emptySubtext}</p>
      </div>
    )
  }

  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className="group flex items-center gap-2 rounded-lg border bg-background p-2 shadow-xs"
        >
          {showGripIcon && (
            <GripVertical className="size-4 shrink-0 text-muted-foreground" />
          )}
          {renderPreview && (
            <div className="shrink-0">
              {renderPreview(item)}
            </div>
          )}
          <Input
            value={item.name}
            onChange={(e) => onRename(item.id, e.target.value)}
            className="h-7 min-w-0 flex-1 border-none bg-transparent px-1 text-sm font-medium shadow-none focus-visible:ring-0"
          />
          <div className={cn("flex items-center gap-0.5 transition-opacity", alwaysShowActions ? "opacity-100" : "opacity-0 group-hover:opacity-100")}>
            {showLoadButton && (
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <ConfirmDialog
                        trigger={
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-7 shrink-0 shadow-none"
                          >
                            <Upload className="size-3.5" />
                          </Button>
                        }
                        title="Load item?"
                        description="This will replace your current state with this saved item."
                        confirmText="Load"
                        onConfirm={() => onLoad(item)}
                      />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>Load</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {onEdit && (
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7 shrink-0 shadow-none"
                      onClick={() => onEdit(item)}
                    >
                      <Pencil className="size-3.5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Edit</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {onDuplicate && (
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7 shrink-0 shadow-none"
                      onClick={() => onDuplicate(item)}
                    >
                      <Copy className="size-3.5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Duplicate</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {onMoveUp && (
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7 shrink-0 shadow-none"
                      onClick={() => onMoveUp(index)}
                      disabled={index === 0}
                    >
                      <ArrowUp className="size-3.5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Move up</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {onMoveDown && (
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7 shrink-0 shadow-none"
                      onClick={() => onMoveDown(index)}
                      disabled={index === items.length - 1}
                    >
                      <ArrowDown className="size-3.5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Move down</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <ConfirmDialog
                      trigger={
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-7 shrink-0 shadow-none"
                        >
                          <Trash2 className="size-3.5" />
                        </Button>
                      }
                      title="Delete item?"
                      description="This will permanently delete this saved item. This action cannot be undone."
                      confirmText="Delete"
                      onConfirm={() => onDelete(item.id)}
                      destructive
                    />
                  </span>
                </TooltipTrigger>
                <TooltipContent>Delete</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      ))}
    </div>
  )
}

export { SavedItemsList }
export type { SavedItemsListProps, SavedItemBase }
