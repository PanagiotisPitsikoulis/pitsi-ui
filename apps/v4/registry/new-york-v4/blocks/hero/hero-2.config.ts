import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "hero-2",
  type: "registry:block",
  description:
    "Travel agency hero section with parallax effects and knockout text",
  dependencies: ["motion/react"],
  registryDependencies: ["button", "hero-button", "spacer"],
  categories: ["hero", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "hero",
    order: 2,
    palette: "azure",
    typography: "modern",
    tint: "tinted",
    forceLight: true,
  },
}
