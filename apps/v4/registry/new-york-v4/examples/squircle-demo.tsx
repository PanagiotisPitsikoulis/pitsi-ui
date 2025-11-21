import { SquiCircleFilterStatic } from "@/registry/new-york-v4/ui/squircle"

export default function SquircleDemo() {
  return (
    <div className="relative flex items-center justify-center p-8">
      <SquiCircleFilterStatic />
      <div
        className="bg-primary h-32 w-32 rounded-2xl"
        style={{ filter: "url(#SkiperSquiCircleFilterLayout)" }}
      />
    </div>
  )
}
