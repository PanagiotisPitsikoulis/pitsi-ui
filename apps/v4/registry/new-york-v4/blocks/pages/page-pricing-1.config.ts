import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "page-pricing-1",
  type: "registry:block",
  description:
    "Pricing page with hero section, license type toggle, and tiered pricing cards",
  registryDependencies: ["button", "spacer"],
  categories: ["pages", "landing", "pricing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-library",
    blockType: "pages",
    order: 2,
    palette: "neutral",
    typography: "modern",
    tint: "base",
  },
}
