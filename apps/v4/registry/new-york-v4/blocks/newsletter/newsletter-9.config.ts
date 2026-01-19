import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "newsletter-9",
  type: "registry:block",
  description: "Travel newsletter with destination image and subscription form",
  registryDependencies: ["button", "input"],
  categories: ["newsletter", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "newsletter",
    order: 14,
    palette: "azure",
    typography: "modern",
    tint: "deep",
  },
}
