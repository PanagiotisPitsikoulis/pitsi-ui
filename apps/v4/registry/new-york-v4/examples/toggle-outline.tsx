import { RiItalic } from '@remixicon/react'

import { Toggle } from "@/registry/new-york-v4/ui/toggle"

export default function ToggleOutline() {
  return (
    <Toggle variant="outline" aria-label="Toggle italic">
      <RiItalic />
    </Toggle>
  )
}
