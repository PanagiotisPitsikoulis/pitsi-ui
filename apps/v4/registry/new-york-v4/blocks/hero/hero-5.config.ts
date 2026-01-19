import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "hero-5",
  type: "registry:block",
  description:
    "Full-bleed parallax fitness hero with dark overlay and centered content, video background style",
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
