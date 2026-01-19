import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "cta-8",
  type: "registry:block",
  description: "Travel CTA with full-width parallax background image",
  registryDependencies: ["button"],
  categories: ["cta", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "cta",
    order: 15,
    palette: "azure",
    typography: "modern",
    tint: "tinted",
  },
}
