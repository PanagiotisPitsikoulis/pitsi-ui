import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "logos-5",
  type: "registry:block",
  description: "Logos with stats and industry breakdown",
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
