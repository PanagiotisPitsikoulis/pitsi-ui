import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "app-component-preview-1",
  type: "registry:block",
  description:
    "Component preview with code tabs, readiness badges, and copy functionality",
  registryDependencies: ["badge", "button", "tabs"],
  categories: ["application", "docs"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-library",
    blockType: "application",
    order: 4,
    palette: "neutral",
    typography: "modern",
    tint: "base",
  },
}
