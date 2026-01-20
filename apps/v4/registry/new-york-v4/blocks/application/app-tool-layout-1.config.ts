import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "app-tool-layout-1",
  type: "registry:block",
  description:
    "Interactive tool layout with sidebar controls, preview panel, and mobile view toggle",
  registryDependencies: [
    "button",
    "card",
    "label",
    "scroll-area",
    "separator",
    "slider",
    "switch",
    "tabs",
  ],
  categories: ["application", "tools"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-library",
    blockType: "application",
    order: 8,
    palette: "neutral",
    typography: "modern",
    tint: "base",
  },
}
