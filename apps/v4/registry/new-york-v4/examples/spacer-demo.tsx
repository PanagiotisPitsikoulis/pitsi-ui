import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export default function SpacerDemo() {
  return (
    <div className="flex flex-col">
      <div className="bg-primary h-8 w-full rounded" />
      <Spacer size="md" />
      <div className="bg-primary h-8 w-full rounded" />
      <Spacer size="lg" />
      <div className="bg-primary h-8 w-full rounded" />
    </div>
  )
}
