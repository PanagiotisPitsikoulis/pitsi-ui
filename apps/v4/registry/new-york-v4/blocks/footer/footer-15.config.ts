import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "footer-15",
  type: "registry:block",
  description:
    "Travel footer with gradient background and text gradient opacity animation",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  registryDependencies: [],
  categories: ["footer", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "footer",
    order: 20,
    palette: "azure",
    typography: "modern",
    tint: "tinted",
  },
}
