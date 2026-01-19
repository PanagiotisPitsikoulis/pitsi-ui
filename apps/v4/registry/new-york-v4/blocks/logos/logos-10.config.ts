import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "logos-10",
  type: "registry:block",
  description: "Travel agency featured in press section",
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
