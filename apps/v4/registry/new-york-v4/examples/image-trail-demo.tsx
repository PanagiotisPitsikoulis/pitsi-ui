import ImageTrail from "@/registry/new-york-v4/animations/image-trail/image-trail"

const images = [
  "https://picsum.photos/300/400?random=1",
  "https://picsum.photos/300/400?random=2",
  "https://picsum.photos/300/400?random=3",
  "https://picsum.photos/300/400?random=4",
  "https://picsum.photos/300/400?random=5",
  "https://picsum.photos/300/400?random=6",
]

export default function ImageTrailDemo() {
  return (
    <div className="h-full w-full">
      <ImageTrail items={images} variant={1} />
    </div>
  )
}
