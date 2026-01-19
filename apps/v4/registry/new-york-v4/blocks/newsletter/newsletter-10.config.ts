import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "newsletter-10",
  type: "registry:block",
  description: "Split layout travel newsletter with travel perks",
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
