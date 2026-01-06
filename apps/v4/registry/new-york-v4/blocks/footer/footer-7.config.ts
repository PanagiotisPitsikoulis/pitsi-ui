import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "footer-7",
  type: "registry:block",
  description: "Comprehensive sitemap-style footer",
  registryDependencies: ["button", "input"],
  categories: ["footer", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "footer",
    order: 20,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
