import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "gallery-6",
  type: "registry:block",
  description: "Before/after comparison slider gallery",
  categories: ["gallery", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-plants",
    blockType: "gallery",
    order: 8,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
