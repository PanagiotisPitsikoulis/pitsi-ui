import StickerPeel from "@/registry/new-york-v4/animations/sticker-peel/sticker-peel"

export default function StickerPeelDemo() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <StickerPeel
        imageSrc="https://picsum.photos/200/200"
        width={200}
        rotate={15}
      />
    </div>
  )
}
