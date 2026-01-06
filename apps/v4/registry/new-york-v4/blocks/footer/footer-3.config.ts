import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "footer-3",
  type: "registry:block",
  description: "Minimal single row footer",
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
