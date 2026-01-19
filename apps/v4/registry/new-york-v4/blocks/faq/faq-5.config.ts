import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "faq-5",
  type: "registry:block",
  description: "Tabbed categories FAQ with badge counts",
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
