import Noise from "@/registry/new-york-v4/animations/noise/noise"

export default function NoiseDemo() {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-gray-900 to-gray-700">
      <Noise patternSize={250} patternAlpha={15} />
    </div>
  )
}
