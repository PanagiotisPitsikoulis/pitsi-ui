import { Plus } from "@/lib/icons"
import { TextureButton } from "@/registry/new-york-v4/ui/texture-button"

export default function TextureButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <TextureButton variant="primary">Primary</TextureButton>
      <TextureButton variant="secondary">Secondary</TextureButton>
      <TextureButton variant="accent">Accent</TextureButton>
      <TextureButton variant="destructive">Destructive</TextureButton>
      <TextureButton variant="minimal">Minimal</TextureButton>
      <TextureButton variant="icon" size="icon">
        <Plus className="h-4 w-4" />
      </TextureButton>
    </div>
  )
}
