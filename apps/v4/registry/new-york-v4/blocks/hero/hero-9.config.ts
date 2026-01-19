import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "hero-9",
  type: "registry:block",
  description:
    "Asymmetric bento grid fitness hero with dual images and prominent title",
  registryDependencies: ["button", "hero-button"],
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
