import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "hero-16",
  type: "registry:block",
  description: "Travel bento hero with 2-column grid and pill navbar",
  registryDependencies: ["button", "hero-button"],
  categories: ["hero", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-travel",
    blockType: "hero",
    order: 2,
    palette: "azure",
    typography: "modern",
    tint: "tinted",
  },
}
