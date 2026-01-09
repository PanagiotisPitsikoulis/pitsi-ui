"use client"

import * as React from "react"

import { ImageIcon, Upload } from "@/lib/icons"
import { cn } from "@/lib/utils"

interface ImageUploadProps {
  onImagesAdded: (files: File[]) => void
  maxImages?: number
  currentCount?: number
  className?: string
}

const ACCEPTED_TYPES = ["image/png", "image/jpeg", "image/webp"]
const ACCEPTED_EXTENSIONS = ".png, .jpg, .jpeg, .webp"

export function ImageUpload({
  onImagesAdded,
  maxImages = 6,
  currentCount = 0,
  className,
}: ImageUploadProps) {
  const [isDragging, setIsDragging] = React.useState(false)
  const fileInputRef = React.useRef<HTMLInputElement>(null)
  const remainingSlots = maxImages - currentCount
  const isDisabled = remainingSlots <= 0

  const handleFiles = React.useCallback(
    (files: FileList | File[]) => {
      if (isDisabled) return

      const validFiles = Array.from(files)
        .filter((file) => ACCEPTED_TYPES.includes(file.type))
        .slice(0, remainingSlots)

      if (validFiles.length > 0) {
        onImagesAdded(validFiles)
      }
    },
    [isDisabled, remainingSlots, onImagesAdded]
  )

  const handleDragEnter = React.useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      if (!isDisabled) {
        setIsDragging(true)
      }
    },
    [isDisabled]
  )

  const handleDragLeave = React.useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDragOver = React.useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      if (!isDisabled) {
        setIsDragging(true)
      }
    },
    [isDisabled]
  )

  const handleDrop = React.useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)

      if (isDisabled) return

      const files = e.dataTransfer.files
      handleFiles(files)
    },
    [isDisabled, handleFiles]
  )

  const handleClick = React.useCallback(() => {
    if (!isDisabled && fileInputRef.current) {
      fileInputRef.current.click()
    }
  }, [isDisabled])

  const handleFileInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (files) {
        handleFiles(files)
      }
      // Reset input value so the same file can be selected again
      e.target.value = ""
    },
    [handleFiles]
  )

  // Handle clipboard paste
  React.useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (isDisabled) return

      const items = e.clipboardData?.items
      if (!items) return

      const imageFiles: File[] = []
      for (const item of items) {
        if (item.type.startsWith("image/")) {
          const file = item.getAsFile()
          if (file && ACCEPTED_TYPES.includes(file.type)) {
            imageFiles.push(file)
          }
        }
      }

      if (imageFiles.length > 0) {
        handleFiles(imageFiles)
      }
    }

    document.addEventListener("paste", handlePaste)
    return () => document.removeEventListener("paste", handlePaste)
  }, [isDisabled, handleFiles])

  const Icon = isDragging ? Upload : ImageIcon

  return (
    <div
      className={cn(
        "relative flex min-h-[200px] cursor-pointer flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed p-8 transition-colors",
        isDragging
          ? "border-primary bg-primary/5"
          : "border-muted-foreground/25 hover:border-muted-foreground/50",
        isDisabled && "pointer-events-none cursor-not-allowed opacity-50",
        className
      )}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleClick}
      role="button"
      tabIndex={isDisabled ? -1 : 0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          handleClick()
        }
      }}
      aria-disabled={isDisabled}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept={ACCEPTED_EXTENSIONS}
        multiple
        className="hidden"
        onChange={handleFileInputChange}
        disabled={isDisabled}
      />

      <Icon
        className={cn(
          "size-10 transition-colors",
          isDragging ? "text-primary" : "text-muted-foreground"
        )}
      />

      <div className="flex flex-col items-center gap-1 text-center">
        <p className="text-sm font-medium">
          {isDragging ? "Drop images here" : "Drop images here or click to upload"}
        </p>
        <p className="text-muted-foreground text-xs">
          PNG, JPG, WebP {remainingSlots > 0 && `(${remainingSlots} remaining)`}
        </p>
      </div>

      <p className="text-muted-foreground/60 text-xs">
        Or paste from clipboard (Cmd/Ctrl+V)
      </p>
    </div>
  )
}
