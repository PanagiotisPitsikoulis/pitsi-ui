import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "products-8",
  type: "registry:block",
  description:
    "Featured tour packages with zoom parallax effect and hero layout",
  registryDependencies: ["button"],
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
