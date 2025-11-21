import { Transforms3d } from "@/registry/new-york-v4/animations/transforms-3d/transforms-3d"

export default function Transforms3dDemo() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center p-8">
      <Transforms3d
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
        alt="Abstract 3D shapes"
        rotateX={30}
        rotateY={-5}
        rotateZ={15}
      />
    </div>
  )
}
