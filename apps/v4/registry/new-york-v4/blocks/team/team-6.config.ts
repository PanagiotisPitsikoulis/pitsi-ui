import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "team-6",
  type: "registry:block",
  description: "About page style team with story and values",
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
