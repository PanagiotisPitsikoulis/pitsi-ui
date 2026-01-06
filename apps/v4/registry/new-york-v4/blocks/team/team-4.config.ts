import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "team-4",
  type: "registry:block",
  description: "Leadership section with smaller team grid",
  categories: ["team", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "team",
    order: 9,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
