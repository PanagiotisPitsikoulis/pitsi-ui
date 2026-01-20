import { ArrowUpCircle } from "@/lib/icons"
import { Button } from "@/registry/new-york-v4/ui/button"

export default function ButtonIcon() {
  return (
    <Button variant="outline" size="icon" aria-label="Upload">
      <ArrowUpCircle />
    </Button>
  )
}
