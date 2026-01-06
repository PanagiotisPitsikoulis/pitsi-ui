import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "cta-5",
  type: "registry:block",
  description: "Floating action bar CTA that appears on scroll",
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
