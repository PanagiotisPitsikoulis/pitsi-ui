import { RiItalic } from '@remixicon/react'

import { Toggle } from "@/registry/new-york-v4/ui/toggle"

export default function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <RiItalic />
      Italic
    </Toggle>
  )
}
