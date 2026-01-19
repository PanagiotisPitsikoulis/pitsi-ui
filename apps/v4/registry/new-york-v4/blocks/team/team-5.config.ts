import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "team-5",
  type: "registry:block",
  description: "Carousel team with thumbnail navigation",
  registryDependencies: ["button"],
  categories: ["team", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-plants",
    blockType: "team",
    order: 9,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
