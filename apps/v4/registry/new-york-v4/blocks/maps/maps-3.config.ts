import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "maps-3",
  type: "registry:block",
  description: "Store locator with searchable sidebar list and interactive map",
  dependencies: [
    "maplibre-gl",
    "next-themes",
    "@hugeicons/react",
    "@hugeicons/core-free-icons",
  ],
  registryDependencies: ["map", "button", "input", "scroll-area"],
  categories: ["maps"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "standalone",
    blockType: "maps",
    order: 60,
    palette: "slate",
    typography: "modern",
    tint: "tinted",
  },
  meta: { iframeHeight: "650px" },
}
