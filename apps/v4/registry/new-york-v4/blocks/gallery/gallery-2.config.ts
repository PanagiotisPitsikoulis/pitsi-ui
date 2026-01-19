import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "gallery-2",
  type: "registry:block",
  description: "Masonry gallery with lightbox",
  registryDependencies: ["dialog"],
  categories: ["gallery", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-plants",
    blockType: "gallery",
    order: 8,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
