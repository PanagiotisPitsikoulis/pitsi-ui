import CurvedText from "@/registry/new-york-v4/animations/text-along-path/text-along-path"

export default function TextAlongPathDemo() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center p-8">
      <div className="space-y-12">
        <CurvedText
          text="Text Following an Arc Path"
          curve="arc"
          className="w-full"
        />
        <CurvedText
          text="Text Following a Wave Path"
          curve="wave"
          className="w-full"
        />
        <CurvedText text="Text in a Circle" curve="circle" className="w-full" />
      </div>
    </div>
  )
}
