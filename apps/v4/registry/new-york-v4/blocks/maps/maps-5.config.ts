import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "maps-5",
  type: "registry:block",
  description:
    "Real estate property listings map with price markers and detailed popups",
  dependencies: [
    "maplibre-gl",
    "next-themes",
    "@hugeicons/react",
    "@hugeicons/core-free-icons",
  ],
  registryDependencies: ["map", "badge", "button"],
  categories: ["maps"],
  tier: "free",
  readiness: "production",
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
