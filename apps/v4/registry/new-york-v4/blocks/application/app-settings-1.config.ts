import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "app-settings-1",
  type: "registry:block",
  description:
    "Settings page with sidebar navigation, profile form, notifications, and appearance options",
  registryDependencies: [
    "avatar",
    "button",
    "card",
    "input",
    "label",
    "select",
    "separator",
    "switch",
    "textarea",
  ],
  categories: ["application", "dashboard"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-library",
    blockType: "application",
    order: 9,
    palette: "neutral",
    typography: "modern",
    tint: "base",
  },
}
