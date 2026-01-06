import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "gallery-4",
  type: "registry:block",
  description: "Filterable gallery with category tabs",
  categories: ["gallery", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "gallery",
    order: 8,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
