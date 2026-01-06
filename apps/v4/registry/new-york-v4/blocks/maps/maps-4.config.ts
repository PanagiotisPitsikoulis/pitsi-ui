import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "maps-4",
  type: "registry:block",
  description:
    "Delivery tracking map with route visualization and status timeline",
  dependencies: [
    "maplibre-gl",
    "next-themes",
    "@hugeicons/react",
    "@hugeicons/core-free-icons",
  ],
  registryDependencies: ["map", "badge"],
  categories: ["maps", "application"],
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
  meta: { iframeHeight: "550px" },
}
