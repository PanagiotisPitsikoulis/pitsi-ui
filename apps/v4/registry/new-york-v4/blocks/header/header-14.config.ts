import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "header-14",
  type: "registry:block",
  description: "Travel agency header with integrated search bar",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  registryDependencies: ["button", "input"],
  categories: ["header", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "header",
    order: 1,
    palette: "azure",
    typography: "modern",
    tint: "tinted",
    forceLight: true,
  },
}
