import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "team-1",
  type: "registry:block",
  description: "Plant shop team section with stacked avatars",
  categories: ["team", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "team",
    order: 9,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
