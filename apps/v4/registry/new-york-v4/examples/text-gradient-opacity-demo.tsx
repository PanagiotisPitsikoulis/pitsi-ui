import { TextGradientOpacity } from "@/registry/new-york-v4/animations/text-gradient-opacity/text-gradient-opacity"

export default function TextGradientOpacityDemo() {
  return (
    <div className="flex min-h-[800px] w-full items-center justify-center p-8">
      <TextGradientOpacity
        text="Scroll down to see this text reveal word by word with a beautiful gradient opacity effect"
        className="max-w-4xl"
      />
    </div>
  )
}
