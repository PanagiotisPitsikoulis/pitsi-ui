import GlassSurface from "@/registry/new-york-v4/animations/glass-surface/glass-surface"

export default function GlassSurfaceDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <GlassSurface width={200} height={80}>
        <span className="text-lg font-medium">Glass Effect</span>
      </GlassSurface>
    </div>
  )
}
