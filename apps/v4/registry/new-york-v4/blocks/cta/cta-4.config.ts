import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "cta-4",
  type: "registry:block",
  description: "Card style CTA with centered content",
  registryDependencies: ["button"],
  categories: ["cta", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-plants",
    blockType: "cta",
    order: 15,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
