import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "footer-6",
  type: "registry:block",
  description: "App download footer with store badges and QR code",
  registryDependencies: ["qr-code"],
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
