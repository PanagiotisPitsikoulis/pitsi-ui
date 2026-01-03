import Stack from "@/registry/new-york-v4/animations/stack/stack"

const sampleCards = [
  <div
    key="1"
    className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white"
  >
    <span className="text-2xl font-bold">Card 1</span>
  </div>,
  <div
    key="2"
    className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-teal-600 text-white"
  >
    <span className="text-2xl font-bold">Card 2</span>
  </div>,
  <div
    key="3"
    className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-white"
  >
    <span className="text-2xl font-bold">Card 3</span>
  </div>,
  <div
    key="4"
    className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-white"
  >
    <span className="text-2xl font-bold">Card 4</span>
  </div>,
]

export default function StackDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Stack cards={sampleCards} randomRotation={true} />
    </div>
  )
}
