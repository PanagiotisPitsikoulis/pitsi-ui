import Dither from "@/registry/new-york-v4/animations/dither/dither"

export default function DitherDemo() {
  return (
    <div className="h-full w-full">
      <Dither waveSpeed={0.05} enableMouseInteraction={true} />
    </div>
  )
}
