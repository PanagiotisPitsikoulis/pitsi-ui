import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "logos-1",
  type: "registry:block",
  description: "Plant shop logo cloud section",
  categories: ["logos", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "logos",
    order: 3,
    palette: "sage",
    typography: "elegant",
    tint: "deep",
  },
}
