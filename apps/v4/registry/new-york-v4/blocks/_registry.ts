import { Registry } from "pitsi/schema"

export const blocks: Registry["items"] = [
  {
    name: "header-1",
    type: "registry:block",
    description: "Plant shop header with navigation and CTA button",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/header/header-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["header", "service-plants"],
    tier: "free",
  },
  {
    name: "hero-1",
    type: "registry:block",
    description:
      "Plant shop hero section with parallax effects and knockout text",
    dependencies: ["motion/react"],
    registryDependencies: ["button", "hero-button", "spacer"],
    files: [
      {
        path: "blocks/hero/hero-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["hero", "service-plants"],
    tier: "free",
  },
  {
    name: "hero-2",
    type: "registry:block",
    description:
      "Travel agency hero section with parallax effects and knockout text",
    dependencies: ["motion/react"],
    registryDependencies: ["button", "hero-button", "spacer"],
    files: [
      {
        path: "blocks/hero/hero-2.tsx",
        type: "registry:block",
      },
    ],
    categories: ["hero", "service-travel"],
    tier: "free",
  },
  {
    name: "hero-3",
    type: "registry:block",
    description:
      "Yacht charter hero section with parallax effects and knockout text",
    dependencies: ["motion/react"],
    registryDependencies: ["button", "hero-button", "spacer"],
    files: [
      {
        path: "blocks/hero/hero-3.tsx",
        type: "registry:block",
      },
    ],
    categories: ["hero", "service-boat"],
    tier: "free",
  },
  {
    name: "features-1",
    type: "registry:block",
    description: "Plant shop features section with icons and center image",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "blocks/features/features-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["features", "service-plants"],
    tier: "free",
  },
  {
    name: "features-2",
    type: "registry:block",
    description: "Plant shop features section variant 2",
    dependencies: ["motion/react"],
    files: [
      {
        path: "blocks/features/features-2.tsx",
        type: "registry:block",
      },
    ],
    categories: ["features", "service-plants"],
    tier: "free",
  },
  {
    name: "features-3",
    type: "registry:block",
    description: "Plant shop features section variant 3 with circle background",
    dependencies: ["motion/react"],
    files: [
      {
        path: "blocks/features/features-3.tsx",
        type: "registry:block",
      },
    ],
    categories: ["features", "service-plants"],
    tier: "free",
  },
  {
    name: "features-4",
    type: "registry:block",
    description: "Plant shop features section variant 4",
    dependencies: ["motion/react"],
    files: [
      {
        path: "blocks/features/features-4.tsx",
        type: "registry:block",
      },
    ],
    categories: ["features", "service-plants"],
    tier: "free",
  },
  {
    name: "features-5",
    type: "registry:block",
    description: "Plant shop features section variant 5",
    dependencies: ["motion/react"],
    files: [
      {
        path: "blocks/features/features-5.tsx",
        type: "registry:block",
      },
    ],
    categories: ["features", "service-plants"],
    tier: "free",
  },
  {
    name: "products-1",
    type: "registry:block",
    description: "Plant shop products grid showcasing best sellers",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/products/products-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["products", "service-plants"],
    tier: "free",
  },
  {
    name: "pricing-1",
    type: "registry:block",
    description: "Plant shop pricing section with animated cards",
    dependencies: ["motion/react"],
    registryDependencies: ["button", "utils"],
    files: [
      {
        path: "blocks/pricing/pricing-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["pricing", "service-plants"],
    tier: "free",
  },
  {
    name: "testimonials-1",
    type: "registry:block",
    description: "Plant shop testimonials with stacked cards effect",
    registryDependencies: ["utils"],
    files: [
      {
        path: "blocks/testimonials/testimonials-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["testimonials", "service-plants"],
    tier: "free",
  },
  {
    name: "gallery-1",
    type: "registry:block",
    description: "Plant shop gallery grid with decorative elements",
    files: [
      {
        path: "blocks/gallery/gallery-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["gallery", "service-plants"],
    tier: "free",
  },
  {
    name: "team-1",
    type: "registry:block",
    description: "Plant shop team section with stacked avatars",
    files: [
      {
        path: "blocks/team/team-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["team", "service-plants"],
    tier: "free",
  },
  {
    name: "stats-1",
    type: "registry:block",
    description: "Plant shop statistics section",
    files: [
      {
        path: "blocks/stats/stats-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["stats", "service-plants"],
    tier: "free",
  },
  {
    name: "logos-1",
    type: "registry:block",
    description: "Plant shop logo cloud section",
    files: [
      {
        path: "blocks/logos/logos-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["logos", "service-plants"],
    tier: "free",
  },
  {
    name: "faq-1",
    type: "registry:block",
    description: "Plant shop FAQ section with accordion",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "blocks/faq/faq-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["faq", "service-plants"],
    tier: "free",
  },
  {
    name: "blog-1",
    type: "registry:block",
    description: "Plant shop blog section with article cards",
    files: [
      {
        path: "blocks/blog/blog-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["blog", "service-plants"],
    tier: "free",
  },
  {
    name: "contact-1",
    type: "registry:block",
    description: "Plant shop contact form section",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "input", "textarea", "label"],
    files: [
      {
        path: "blocks/contact/contact-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["contact", "service-plants"],
    tier: "free",
  },
  {
    name: "newsletter-1",
    type: "registry:block",
    description: "Plant shop newsletter subscription section",
    registryDependencies: ["button", "input"],
    files: [
      {
        path: "blocks/newsletter/newsletter-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["newsletter", "service-plants"],
    tier: "free",
  },
  {
    name: "cta-1",
    type: "registry:block",
    description: "Plant shop call-to-action section",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/cta/cta-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["cta", "service-plants"],
    tier: "free",
  },
  {
    name: "footer-1",
    type: "registry:block",
    description: "Plant shop footer with multiple columns and newsletter",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "input"],
    files: [
      {
        path: "blocks/footer/footer-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["footer", "service-plants"],
    tier: "free",
  },
]
