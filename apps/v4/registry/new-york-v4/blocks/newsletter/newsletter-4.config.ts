import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "newsletter-4",
  type: "registry:block",
  description: "Split panel newsletter with image",
  registryDependencies: ["button", "input"],
  categories: ["newsletter", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-plants",
    blockType: "newsletter",
    order: 14,
    palette: "sage",
    typography: "elegant",
    tint: "deep",
  },
}
