import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "team-3",
  type: "registry:block",
  description: "Team cards with social links on hover",
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
