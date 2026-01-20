import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "hero-8",
  type: "registry:block",
  description:
    "Bento grid fitness hero with stats, reversed layout, and larger image area",
  registryDependencies: ["button", "hero-button"],
  categories: ["hero", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-fitness",
    blockType: "hero",
    order: 2,
    palette: "neon",
    typography: "futuristic",
    tint: "tinted",
  },
}
