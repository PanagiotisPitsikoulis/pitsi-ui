"use client"

import { ArrowLeft, ArrowRight, ChevronDown } from "@/lib/icons"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"

export interface PreviewNavigationItem {
  key: string
  label: string
}

export interface PreviewNavigationProps {
  items: PreviewNavigationItem[]
  value: string
  onValueChange: (value: string) => void
}

export function PreviewNavigation({
  items,
  value,
  onValueChange,
}: PreviewNavigationProps) {
  const currentIndex = items.findIndex((item) => item.key === value)
  const currentItem = items[currentIndex]

  const goToPrevious = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1
    onValueChange(items[prevIndex].key)
  }

  const goToNext = () => {
    const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0
    onValueChange(items[nextIndex].key)
  }

  if (items.length === 0) return null

  return (
    <div className="flex items-center gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="shadow-2xs">
            {currentItem?.label ?? "Select..."}
            <ChevronDown className="ml-2 size-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-40 p-1" align="end">
          {items.map((item) => (
            <Button
              key={item.key}
              variant={value === item.key ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => onValueChange(item.key)}
            >
              {item.label}
            </Button>
          ))}
        </PopoverContent>
      </Popover>
      <div className="flex items-center rounded-md shadow-sm">
        <Button
          variant="outline"
          size="icon"
          className="bg-background size-8 shrink-0 rounded-r-none"
          onClick={goToPrevious}
          disabled={items.length <= 1}
        >
          <ArrowLeft className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-background -ml-px size-8 shrink-0 rounded-l-none"
          onClick={goToNext}
          disabled={items.length <= 1}
        >
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  )
}
