import Aurora from "@/registry/new-york-v4/animations/aurora/aurora"

export default function AuroraDemo() {
  return (
    <div className="h-full w-full">
      <Aurora colorStops={["#3b82f6", "#8b5cf6", "#3b82f6"]} />
    </div>
  )
}
