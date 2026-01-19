import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "gallery-11",
  type: "registry:block",
  description: "Travel full-screen zoom gallery with destination showcase",
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
