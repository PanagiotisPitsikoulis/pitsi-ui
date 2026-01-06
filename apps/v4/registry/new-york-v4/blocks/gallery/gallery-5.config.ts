import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "gallery-5",
  type: "registry:block",
  description: "Grid gallery with full-screen lightbox modal",
  registryDependencies: ["button", "dialog"],
  categories: ["gallery", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "gallery",
    order: 8,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
