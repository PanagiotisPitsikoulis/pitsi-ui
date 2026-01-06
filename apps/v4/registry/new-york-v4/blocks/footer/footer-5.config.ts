import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "footer-5",
  type: "registry:block",
  description: "Dark gradient footer with large brand statement",
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
