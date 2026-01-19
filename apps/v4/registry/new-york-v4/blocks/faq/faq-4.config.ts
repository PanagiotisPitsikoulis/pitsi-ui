import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "faq-4",
  type: "registry:block",
  description: "Card-style accordion FAQ with icons",
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
