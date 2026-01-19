import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "newsletter-11",
  type: "registry:block",
  description: "Centered travel newsletter with benefits badges",
  registryDependencies: ["button", "input", "block-header"],
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
