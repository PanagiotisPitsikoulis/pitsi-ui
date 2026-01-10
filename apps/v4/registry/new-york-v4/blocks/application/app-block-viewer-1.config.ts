import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "app-block-viewer-1",
  type: "registry:block",
  description:
    "Block viewer with resizable preview, code panel, file tree, and device toggles",
  registryDependencies: [
    "badge",
    "button",
    "resizable",
    "separator",
    "tabs",
    "toggle-group",
  ],
  categories: ["application", "docs"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-library",
    blockType: "application",
    order: 5,
    palette: "neutral",
    typography: "modern",
    tint: "base",
  },
}
