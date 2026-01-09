"use client"

import { useCallback } from "react"

import { cn } from "@/lib/utils"
import { GripVertical, Settings2, Trash2 } from "@/lib/icons"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Label } from "@/registry/new-york-v4/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"
import { Slider } from "@/registry/new-york-v4/ui/slider"

import type { CanvasImage, DeviceType } from "./types"
import { DEVICE_TYPES } from "./types"

interface ImageListProps {
  images: CanvasImage[]
  onUpdateImage: (id: string, updates: Partial<CanvasImage>) => void
  onDeleteImage: (id: string) => void
  onReorder?: (fromIndex: number, toIndex: number) => void
  selectedId?: string
  onSelect?: (id: string) => void
  className?: string
}

function ImageItem({
  image,
  isSelected,
  onUpdate,
  onDelete,
  onSelect,
}: {
  image: CanvasImage
  isSelected: boolean
  onUpdate: (updates: Partial<CanvasImage>) => void
  onDelete: () => void
  onSelect: () => void
}) {
  return (
    <div
      className={cn(
        "group flex items-center gap-2 rounded-lg border p-2 transition-colors",
        isSelected ? "border-brand bg-brand/5" : "border-border bg-background hover:border-muted-foreground/50"
      )}
      onClick={onSelect}
    >
      {/* Drag handle */}
      <div className="text-muted-foreground cursor-grab">
        <GripVertical className="size-4" />
      </div>

      {/* Thumbnail */}
      <div className="size-10 shrink-0 overflow-hidden rounded-md border">
        <img
          src={image.src}
          alt={image.name}
          className="size-full object-cover"
        />
      </div>

      {/* Name */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{image.name}</p>
        <p className="text-muted-foreground text-xs capitalize">
          {DEVICE_TYPES[image.device].label}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-7"
              onClick={(e) => e.stopPropagation()}
            >
              <Settings2 className="size-3.5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64" align="end" onClick={(e) => e.stopPropagation()}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-xs">Device Frame</Label>
                <Select
                  value={image.device}
                  onValueChange={(value: DeviceType) => onUpdate({ device: value })}
                >
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(DEVICE_TYPES).map(([key, { label }]) => (
                      <SelectItem key={key} value={key}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-xs">Device Color</Label>
                <Select
                  value={image.deviceColor}
                  onValueChange={(value: "light" | "dark") =>
                    onUpdate({ deviceColor: value })
                  }
                >
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="light">Light</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-xs">Shadow</Label>
                <Select
                  value={image.shadowIntensity}
                  onValueChange={(value: "none" | "subtle" | "medium" | "strong") =>
                    onUpdate({ shadowIntensity: value })
                  }
                >
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="subtle">Subtle</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="strong">Strong</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-xs">Scale: {image.scale}%</Label>
                <Slider
                  value={[image.scale]}
                  onValueChange={([value]) => onUpdate({ scale: value })}
                  min={50}
                  max={150}
                  step={5}
                />
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Button
          variant="ghost"
          size="icon"
          className="size-7 text-destructive hover:text-destructive"
          onClick={(e) => {
            e.stopPropagation()
            onDelete()
          }}
        >
          <Trash2 className="size-3.5" />
        </Button>
      </div>
    </div>
  )
}

export function ImageList({
  images,
  onUpdateImage,
  onDeleteImage,
  selectedId,
  onSelect,
  className,
}: ImageListProps) {
  const handleUpdate = useCallback(
    (id: string) => (updates: Partial<CanvasImage>) => {
      onUpdateImage(id, updates)
    },
    [onUpdateImage]
  )

  const handleDelete = useCallback(
    (id: string) => () => {
      onDeleteImage(id)
    },
    [onDeleteImage]
  )

  const handleSelect = useCallback(
    (id: string) => () => {
      onSelect?.(id)
    },
    [onSelect]
  )

  if (images.length === 0) {
    return null
  }

  return (
    <div className={cn("space-y-2", className)}>
      {images.map((image) => (
        <ImageItem
          key={image.id}
          image={image}
          isSelected={selectedId === image.id}
          onUpdate={handleUpdate(image.id)}
          onDelete={handleDelete(image.id)}
          onSelect={handleSelect(image.id)}
        />
      ))}
    </div>
  )
}
