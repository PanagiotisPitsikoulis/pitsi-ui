import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "hero-3",
  type: "registry:block",
  description:
    "Yacht charter hero section with parallax effects and knockout text",
  dependencies: ["motion/react"],
  registryDependencies: ["button", "hero-button", "spacer"],
  categories: ["hero", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-boat",
    blockType: "hero",
    order: 2,
    palette: "azure",
    typography: "classic",
    tint: "tinted",
    forceLight: true,
  },
}
