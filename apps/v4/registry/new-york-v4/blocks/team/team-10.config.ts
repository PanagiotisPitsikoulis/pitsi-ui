import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "team-10",
  type: "registry:block",
  description: "Travel agency featured leader with team grid",
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
