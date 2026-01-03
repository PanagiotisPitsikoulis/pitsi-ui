import Balatro from "@/registry/new-york-v4/animations/balatro/balatro"

export default function BalatroDemo() {
  return (
    <div className="h-full w-full">
      <Balatro isRotate={false} mouseInteraction={true} pixelFilter={700} />
    </div>
  )
}
