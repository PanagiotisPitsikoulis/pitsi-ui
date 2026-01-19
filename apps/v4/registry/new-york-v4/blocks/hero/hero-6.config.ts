import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "hero-6",
  type: "registry:block",
  description:
    "Stats-focused fitness hero with grid layout, credibility stats row, and parallax side image",
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
