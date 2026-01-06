import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "newsletter-2",
  type: "registry:block",
  description: "Inline single horizontal row newsletter",
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
