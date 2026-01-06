import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "maps-2",
  type: "registry:block",
  description: "Contact page map with business info sidebar and location pin",
  dependencies: [
    "maplibre-gl",
    "next-themes",
    "@hugeicons/react",
    "@hugeicons/core-free-icons",
  ],
  registryDependencies: ["map"],
  categories: ["maps", "contact"],
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
}
