import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "hero-4",
  type: "registry:block",
  description:
    "Split layout fitness hero with image left and content right, parallax effects",
  dependencies: ["motion/react"],
  registryDependencies: ["button", "hero-button", "spacer"],
  categories: ["hero", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-fitness",
    blockType: "hero",
    order: 2,
    palette: "neon",
    typography: "futuristic",
    tint: "tinted",
  },
}
