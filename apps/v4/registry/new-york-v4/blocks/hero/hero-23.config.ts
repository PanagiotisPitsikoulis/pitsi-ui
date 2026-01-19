import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "hero-23",
  type: "registry:block",
  description: "Boat bento hero with 3-column asymmetric grid and pill navbar",
  registryDependencies: ["button", "hero-button"],
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
  },
}
