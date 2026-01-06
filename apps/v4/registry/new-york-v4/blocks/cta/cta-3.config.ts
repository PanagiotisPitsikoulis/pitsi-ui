import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "cta-3",
  type: "registry:block",
  description: "Full-width CTA banner with countdown timer",
  registryDependencies: ["button"],
  categories: ["cta", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "cta",
    order: 15,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
