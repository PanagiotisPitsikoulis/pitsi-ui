import Shuffle from "@/registry/new-york-v4/animations/shuffle/shuffle"

export default function ShuffleDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Shuffle
        text="SHUFFLE ME"
        triggerOnHover={true}
        className="text-4xl font-bold"
      />
    </div>
  )
}
