import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "footer-14",
  type: "registry:block",
  description:
    "Travel footer with Aurora animation CTA section and modern navigation",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  registryDependencies: ["button"],
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
