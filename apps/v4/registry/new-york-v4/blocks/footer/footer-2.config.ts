import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "footer-2",
  type: "registry:block",
  description:
    "Fitness footer with newsletter, navigation columns, and social links",
  registryDependencies: ["button", "input"],
  categories: ["footer", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-fitness",
    blockType: "footer",
    order: 20,
    palette: "neon",
    typography: "futuristic",
    tint: "tinted",
  },
}
