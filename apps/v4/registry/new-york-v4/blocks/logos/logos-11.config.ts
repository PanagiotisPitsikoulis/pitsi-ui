import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "logos-11",
  type: "registry:block",
  description: "Travel partners carousel with descriptions",
  categories: ["logos", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "logos",
    order: 3,
    palette: "azure",
    typography: "modern",
    tint: "deep",
  },
}
