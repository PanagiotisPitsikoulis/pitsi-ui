import { BorderBeam } from "@/registry/new-york-v4/ui/border-beam"

export default function BorderBeamDemo() {
  return (
    <div className="bg-card relative flex h-[200px] w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-lg border">
      <span className="text-4xl font-semibold">Border Beam</span>
      <BorderBeam size={200} duration={8} />
    </div>
  )
}
