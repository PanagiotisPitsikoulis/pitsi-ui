import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "products-7",
  type: "registry:block",
  description:
    "Travel destination cards grid with fade-in animations showcasing exotic locations",
  registryDependencies: ["button", "badge"],
  categories: ["products", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "products",
    order: 5,
    palette: "azure",
    typography: "modern",
    tint: "tinted",
  },
}
