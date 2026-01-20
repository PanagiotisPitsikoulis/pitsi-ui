import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "app-docs-viewer-1",
  type: "registry:block",
  description:
    "Documentation page viewer with table of contents, navigation, and copy functionality",
  registryDependencies: ["button", "sheet"],
  categories: ["application", "docs"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-library",
    blockType: "application",
    order: 3,
    palette: "neutral",
    typography: "modern",
    tint: "base",
  },
}
