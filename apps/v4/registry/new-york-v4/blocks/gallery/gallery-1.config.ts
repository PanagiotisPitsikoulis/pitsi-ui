import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "gallery-1",
  type: "registry:block",
  description: "Plant shop gallery grid with decorative elements",
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
