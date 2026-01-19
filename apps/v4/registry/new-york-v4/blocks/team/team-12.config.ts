import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "team-12",
  type: "registry:block",
  description: "Travel agency regional experts with world map style layout",
  categories: ["team", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "team",
    order: 9,
    palette: "azure",
    typography: "modern",
    tint: "tinted",
  },
}
