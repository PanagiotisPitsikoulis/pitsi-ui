import CurvedLoop from "@/registry/new-york-v4/animations/curved-loop/curved-loop"

export default function CurvedLoopDemo() {
  return (
    <div className="h-full w-full">
      <CurvedLoop marqueeText="CURVED LOOP " speed={2} />
    </div>
  )
}
