import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "logos-3",
  type: "registry:block",
  description: "Grid logos with labels and descriptions",
  categories: ["logos", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-plants",
    blockType: "logos",
    order: 3,
    palette: "sage",
    typography: "elegant",
    tint: "deep",
  },
}
