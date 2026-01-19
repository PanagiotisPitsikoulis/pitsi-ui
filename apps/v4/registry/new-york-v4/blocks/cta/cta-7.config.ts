import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "cta-7",
  type: "registry:block",
  description: "Component library CTA with gradient card",
  registryDependencies: ["button", "hero-button"],
  categories: ["cta", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-library",
    blockType: "cta",
    order: 7,
    palette: "slate",
    typography: "modern",
    tint: "base",
  },
}
