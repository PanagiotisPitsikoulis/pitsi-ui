import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "newsletter-5",
  type: "registry:block",
  description: "Popup card style newsletter with close button",
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
