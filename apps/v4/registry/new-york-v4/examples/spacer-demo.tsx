import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export default function SpacerDemo() {
  return (
    <div className="flex w-full max-w-md flex-col">
      <div className="bg-card border-border text-foreground flex h-12 w-full items-center justify-center rounded-md border font-medium shadow-sm">
        Box 1
      </div>
      <Spacer size="md" />
      <div className="bg-card border-border text-foreground flex h-12 w-full items-center justify-center rounded-md border font-medium shadow-sm">
        Box 2
      </div>
      <Spacer size="lg" />
      <div className="bg-card border-border text-foreground flex h-12 w-full items-center justify-center rounded-md border font-medium shadow-sm">
        Box 3
      </div>
    </div>
  )
}
