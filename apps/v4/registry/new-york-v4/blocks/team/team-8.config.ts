import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "team-8",
  type: "registry:block",
  description: "Travel agency team grid with destination badges",
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
