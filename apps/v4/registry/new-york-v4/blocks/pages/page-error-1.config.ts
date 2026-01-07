import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "page-error-1",
  type: "registry:block",
  description:
    "Error page with two-column layout, error message, error digest display, and action buttons",
  registryDependencies: ["button", "spacer"],
  categories: ["pages", "error"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-library",
    blockType: "pages",
    order: 10,
    palette: "neutral",
    typography: "modern",
    tint: "base",
  },
}
