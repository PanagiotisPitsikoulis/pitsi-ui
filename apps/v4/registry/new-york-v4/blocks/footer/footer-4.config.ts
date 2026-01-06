import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "footer-4",
  type: "registry:block",
  description: "Big CTA footer with ready to get started section",
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
