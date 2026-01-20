import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "page-legal-1",
  type: "registry:block",
  description:
    "Legal page template for privacy policy, terms of service, and other legal content with two-column layout",
  registryDependencies: ["spacer"],
  categories: ["pages", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-library",
    blockType: "pages",
    order: 12,
    palette: "neutral",
    typography: "modern",
    tint: "base",
  },
}
