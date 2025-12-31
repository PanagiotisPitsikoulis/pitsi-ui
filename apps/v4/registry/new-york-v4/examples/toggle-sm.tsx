import { Italic } from "@/lib/icons"
import { Toggle } from "@/registry/new-york-v4/ui/toggle"

export default function ToggleSm() {
  return (
    <Toggle size="sm" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  )
}
