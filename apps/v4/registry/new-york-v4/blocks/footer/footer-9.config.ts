import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "footer-9",
  type: "registry:block",
  description: "Component library footer with links and socials",
  dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
  categories: ["footer", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-library",
    blockType: "footer",
    order: 8,
    palette: "slate",
    typography: "modern",
    tint: "base",
  },
}
