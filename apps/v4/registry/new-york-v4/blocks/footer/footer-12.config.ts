import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "footer-12",
  type: "registry:block",
  description:
    "Minimal centered travel footer with circular text animation and social links",
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
