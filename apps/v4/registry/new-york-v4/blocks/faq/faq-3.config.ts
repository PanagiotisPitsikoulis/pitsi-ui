import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "faq-3",
  type: "registry:block",
  description: "Searchable FAQ with highlight matching",
  registryDependencies: ["input"],
  categories: ["faq", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-plants",
    blockType: "faq",
    order: 11,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
