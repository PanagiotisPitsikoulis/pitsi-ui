import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "newsletter-6",
  type: "registry:block",
  description: "Dark themed newsletter with email icon",
  registryDependencies: ["button", "input"],
  categories: ["newsletter", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "newsletter",
    order: 14,
    palette: "sage",
    typography: "elegant",
    tint: "deep",
  },
}
