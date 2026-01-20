import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "hero-20",
  type: "registry:block",
  description: "Boat bento hero with split layout and pill navbar",
  registryDependencies: ["button", "hero-button"],
  categories: ["hero", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-boat",
    blockType: "hero",
    order: 2,
    palette: "azure",
    typography: "classic",
    tint: "tinted",
  },
}
