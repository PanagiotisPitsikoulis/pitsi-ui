import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "logos-4",
  type: "registry:block",
  description: "Featured partners with case study links",
  registryDependencies: ["button"],
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
