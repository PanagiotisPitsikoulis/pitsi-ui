import { TextureButton } from "@/registry/new-york-v4/ui/texture-button"
import {
  TextureCard,
  TextureCardContent,
  TextureCardDescription,
  TextureCardFooter,
  TextureCardHeader,
  TextureCardTitle,
  TextureSeparator,
} from "@/registry/new-york-v4/ui/texture-card"

export default function TextureCardDemo() {
  return (
    <TextureCard className="w-full max-w-sm">
      <TextureCardHeader>
        <TextureCardTitle>Pro Plan</TextureCardTitle>
        <TextureCardDescription>
          Perfect for growing teams and businesses.
        </TextureCardDescription>
      </TextureCardHeader>
      <TextureSeparator />
      <TextureCardContent>
        <div className="text-3xl font-bold">$29/mo</div>
        <ul className="mt-4 space-y-2 text-sm">
          <li>Unlimited projects</li>
          <li>Advanced analytics</li>
          <li>Priority support</li>
          <li>Custom integrations</li>
        </ul>
      </TextureCardContent>
      <TextureSeparator />
      <TextureCardFooter>
        <TextureButton className="w-full">Get Started</TextureButton>
      </TextureCardFooter>
    </TextureCard>
  )
}
