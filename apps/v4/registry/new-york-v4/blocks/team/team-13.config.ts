import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "team-13",
  type: "registry:block",
  description:
    "Travel agency storytellers and photographers magazine-style layout",
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
