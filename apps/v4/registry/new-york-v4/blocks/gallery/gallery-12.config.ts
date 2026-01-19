import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "gallery-12",
  type: "registry:block",
  description:
    "Travel category tabs with filterable destination gallery and booking cards",
  categories: ["gallery", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "gallery",
    order: 8,
    palette: "azure",
    typography: "modern",
    tint: "tinted",
  },
}
