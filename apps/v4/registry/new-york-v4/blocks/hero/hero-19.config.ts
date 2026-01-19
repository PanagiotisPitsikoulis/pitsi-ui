import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "hero-19",
  type: "registry:block",
  description: "Travel bento hero with 4-column stat cards and pill navbar",
  registryDependencies: ["button", "hero-button"],
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
  },
}
