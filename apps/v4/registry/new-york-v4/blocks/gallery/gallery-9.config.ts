import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "gallery-9",
  type: "registry:block",
  description:
    "Travel Instagram-style photo grid with lightbox and social features",
  categories: ["gallery", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "gallery",
    order: 8,
    palette: "azure",
    typography: "modern",
    tint: "tinted",
  },
}
