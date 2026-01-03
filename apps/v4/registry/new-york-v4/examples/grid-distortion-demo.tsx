import GridDistortion from "@/registry/new-york-v4/animations/grid-distortion/grid-distortion"

export default function GridDistortionDemo() {
  return (
    <div className="h-full w-full">
      <GridDistortion imageSrc="https://picsum.photos/600/400" grid={15} />
    </div>
  )
}
