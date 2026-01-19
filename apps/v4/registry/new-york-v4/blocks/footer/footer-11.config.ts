import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "footer-11",
  type: "registry:block",
  description:
    "Travel agency footer with newsletter, destinations, and multi-column navigation",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  registryDependencies: ["button", "input"],
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
