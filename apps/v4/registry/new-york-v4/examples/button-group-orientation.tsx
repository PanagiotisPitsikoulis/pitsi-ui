import { RiSubtractLine, RiAddLine } from '@remixicon/react'

import { Button } from "@/registry/new-york-v4/ui/button"
import { ButtonGroup } from "@/registry/new-york-v4/ui/button-group"

export default function ButtonGroupOrientation() {
  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="Media controls"
      className="h-fit"
    >
      <Button variant="outline" size="icon">
        <RiAddLine />
      </Button>
      <Button variant="outline" size="icon">
        <RiSubtractLine />
      </Button>
    </ButtonGroup>
  )
}
