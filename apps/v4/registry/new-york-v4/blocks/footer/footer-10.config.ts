import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "footer-10",
  type: "registry:block",
  description:
    "Comprehensive multi-column footer with sections for documentation, pages, changelog, connect, legal, account, blocks, components, animations, and theme toggle",
  registryDependencies: ["button", "dropdown-menu"],
  categories: ["footer", "landing", "application"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-library",
    blockType: "footer",
    order: 99,
    palette: "neutral",
    typography: "modern",
    tint: "base",
  },
}
