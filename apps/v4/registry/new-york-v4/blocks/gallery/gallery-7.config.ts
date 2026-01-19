import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "gallery-7",
  type: "registry:block",
  description: "Travel destination masonry grid with zoom parallax effect",
  categories: ["gallery", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "gallery",
    order: 8,
    palette: "azure",
    typography: "modern",
    tint: "tinted",
  },
}
