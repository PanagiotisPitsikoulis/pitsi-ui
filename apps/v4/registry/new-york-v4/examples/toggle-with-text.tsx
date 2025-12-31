import { Italic } from "@/lib/icons"

import { Toggle } from "@/registry/new-york-v4/ui/toggle"

export default function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic />
      Italic
    </Toggle>
  )
}
