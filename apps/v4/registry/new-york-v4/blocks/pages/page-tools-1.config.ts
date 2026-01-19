import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "page-tools-1",
  type: "registry:block",
  description:
    "Tools listing page with hero section, isometric icons, and card grid layout",
  registryDependencies: ["button", "hero-button", "spacer"],
  categories: ["pages", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-library",
    blockType: "pages",
    order: 1,
    palette: "neutral",
    typography: "modern",
    tint: "base",
  },
}
