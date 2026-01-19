import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "faq-2",
  type: "registry:block",
  description: "Two column FAQ with questions left, answers right",
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
