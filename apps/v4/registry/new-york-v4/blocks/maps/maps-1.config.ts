import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "maps-1",
  type: "registry:block",
  description:
    "Basic interactive map with multiple office location markers and popups",
  dependencies: ["maplibre-gl", "next-themes"],
  registryDependencies: ["map"],
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
  meta: { iframeHeight: "550px" },
}
