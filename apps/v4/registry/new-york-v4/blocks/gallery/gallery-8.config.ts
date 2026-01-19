import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "gallery-8",
  type: "registry:block",
  description: "Travel horizontal scroll gallery with destination cards",
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
