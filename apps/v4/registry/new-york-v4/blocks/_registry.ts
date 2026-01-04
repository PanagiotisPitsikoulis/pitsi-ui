import { Registry } from "pitsi/schema"

// Block configuration for blocks-first architecture
// Each block defines its template, palette, typography, and display settings
export interface BlockConfig {
  template: string // Which template this block belongs to
  blockType: string // Type for grouping (hero, cta, features, etc.)
  order: number // Position in template (lower = earlier)
  palette: string // Color palette (neon, sage, azure, etc.)
  typography: string // Typography preset (futuristic, elegant, modern, etc.)
  tint?: "base" | "tinted" | "deep"
  forceLight?: boolean
  forceDark?: boolean
}

// Helper to create block config
function bc(
  template: string,
  blockType: string,
  order: number,
  palette: string,
  typography: string,
  tint: "base" | "tinted" | "deep" = "tinted",
  forceLight?: boolean,
  forceDark?: boolean
): BlockConfig {
  return {
    template,
    blockType,
    order,
    palette,
    typography,
    tint,
    forceLight,
    forceDark,
  }
}

export const blocks: Registry["items"] = [
  // ============================================
  // SERVICE-PLANTS TEMPLATE (sage + elegant)
  // ============================================
  {
    name: "header-1",
    type: "registry:block",
    description: "Plant shop header with navigation and CTA button",
    dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/header/header-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["header", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "header",
      1,
      "sage",
      "elegant",
      "tinted",
      true
    ),
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
    categories: ["hero", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "hero",
      2,
      "sage",
      "elegant",
      "tinted",
      true
    ),
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
    categories: ["logos", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "logos", 3, "sage", "elegant", "deep"),
  },
  {
    name: "features-1",
    type: "registry:block",
    description: "Plant shop features section with icons and center image",
    dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
    files: [
      {
        path: "blocks/features/features-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["features", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "features",
      4,
      "sage",
      "elegant",
      "tinted"
    ),
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
    categories: ["features", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "features",
      4,
      "sage",
      "elegant",
      "tinted"
    ),
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
    categories: ["features", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "features",
      4,
      "sage",
      "elegant",
      "tinted"
    ),
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
    categories: ["features", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "features",
      4,
      "sage",
      "elegant",
      "tinted"
    ),
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
    categories: ["features", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "features",
      4,
      "sage",
      "elegant",
      "tinted"
    ),
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
    categories: ["products", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "products",
      5,
      "sage",
      "elegant",
      "tinted"
    ),
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
    categories: ["pricing", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "pricing",
      6,
      "sage",
      "elegant",
      "tinted"
    ),
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
    categories: ["testimonials", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "testimonials",
      7,
      "sage",
      "elegant",
      "deep"
    ),
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
    categories: ["gallery", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "gallery",
      8,
      "sage",
      "elegant",
      "tinted"
    ),
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
    categories: ["team", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "team", 9, "sage", "elegant", "tinted"),
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
    categories: ["stats", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "stats", 10, "sage", "elegant", "deep"),
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
    categories: ["faq", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "faq", 11, "sage", "elegant", "tinted"),
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
    categories: ["blog", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "blog", 12, "sage", "elegant", "tinted"),
  },
  {
    name: "contact-1",
    type: "registry:block",
    description: "Plant shop contact form section",
    dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
    registryDependencies: ["button", "input", "textarea", "label"],
    files: [
      {
        path: "blocks/contact/contact-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["contact", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "contact",
      13,
      "sage",
      "elegant",
      "tinted"
    ),
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
    categories: ["newsletter", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "newsletter",
      14,
      "sage",
      "elegant",
      "deep"
    ),
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
    categories: ["cta", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "cta", 15, "sage", "elegant", "tinted"),
  },
  {
    name: "footer-1",
    type: "registry:block",
    description: "Plant shop footer with multiple columns and newsletter",
    dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
    registryDependencies: ["button", "input"],
    files: [
      {
        path: "blocks/footer/footer-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["footer", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "footer",
      20,
      "sage",
      "elegant",
      "tinted"
    ),
  },

  // ============================================
  // SERVICE-TRAVEL TEMPLATE (azure + modern)
  // ============================================
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
    categories: ["hero", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-travel",
      "hero",
      2,
      "azure",
      "modern",
      "tinted",
      true
    ),
  },

  // ============================================
  // SERVICE-BOAT TEMPLATE (azure + classic)
  // ============================================
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
    categories: ["hero", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-boat",
      "hero",
      2,
      "azure",
      "classic",
      "tinted",
      true
    ),
  },

  // ============================================
  // SERVICE-FITNESS TEMPLATE (neon + futuristic)
  // ============================================
  {
    name: "hero-4",
    type: "registry:block",
    description:
      "Split layout fitness hero with image left and content right, parallax effects",
    dependencies: ["motion/react"],
    registryDependencies: ["button", "hero-button", "spacer"],
    files: [
      {
        path: "blocks/hero/hero-4.tsx",
        type: "registry:block",
      },
    ],
    categories: ["hero", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-fitness",
      "hero",
      2,
      "neon",
      "futuristic",
      "tinted"
    ),
  },
  {
    name: "hero-5",
    type: "registry:block",
    description:
      "Full-bleed parallax fitness hero with dark overlay and centered content, video background style",
    dependencies: ["motion/react"],
    registryDependencies: [
      "button-neobrutalist",
      "hero-button-neobrutalist",
      "hero-button",
      "spacer",
    ],
    files: [
      {
        path: "blocks/hero/hero-5.tsx",
        type: "registry:block",
      },
    ],
    categories: ["hero", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-fitness",
      "hero",
      2,
      "neon",
      "futuristic",
      "tinted"
    ),
  },
  {
    name: "hero-6",
    type: "registry:block",
    description:
      "Stats-focused fitness hero with grid layout, credibility stats row, and parallax side image",
    dependencies: ["motion/react"],
    registryDependencies: ["button", "hero-button", "spacer"],
    files: [
      {
        path: "blocks/hero/hero-6.tsx",
        type: "registry:block",
      },
    ],
    categories: ["hero", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-fitness",
      "hero",
      2,
      "neon",
      "futuristic",
      "tinted"
    ),
  },
  {
    name: "hero-7",
    type: "registry:block",
    description:
      "Bento grid fitness hero with pill navbar, two-column layout, and side image",
    registryDependencies: ["button", "hero-button"],
    files: [
      {
        path: "blocks/hero/hero-7.tsx",
        type: "registry:block",
      },
    ],
    categories: ["hero", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-fitness",
      "hero",
      2,
      "neon",
      "futuristic",
      "tinted"
    ),
  },
  {
    name: "hero-8",
    type: "registry:block",
    description:
      "Bento grid fitness hero with stats, reversed layout, and larger image area",
    registryDependencies: ["button", "hero-button"],
    files: [
      {
        path: "blocks/hero/hero-8.tsx",
        type: "registry:block",
      },
    ],
    categories: ["hero", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-fitness",
      "hero",
      2,
      "neon",
      "futuristic",
      "tinted"
    ),
  },
  {
    name: "hero-9",
    type: "registry:block",
    description:
      "Asymmetric bento grid fitness hero with dual images and prominent title",
    registryDependencies: ["button", "hero-button"],
    files: [
      {
        path: "blocks/hero/hero-9.tsx",
        type: "registry:block",
      },
    ],
    categories: ["hero", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-fitness",
      "hero",
      2,
      "neon",
      "futuristic",
      "tinted"
    ),
  },
  {
    name: "features-6",
    type: "registry:block",
    description:
      "Fitness class types grid with intensity indicators and hover effects",
    registryDependencies: ["utils"],
    files: [
      {
        path: "blocks/features/features-6.tsx",
        type: "registry:block",
      },
    ],
    categories: ["features", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-fitness",
      "features",
      4,
      "neon",
      "futuristic",
      "tinted"
    ),
  },
  {
    name: "features-7",
    type: "registry:block",
    description:
      "Weekly class schedule with day tabs, booking buttons, and spots indicator",
    registryDependencies: ["button", "utils"],
    files: [
      {
        path: "blocks/features/features-7.tsx",
        type: "registry:block",
      },
    ],
    categories: ["features", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-fitness",
      "features",
      4,
      "neon",
      "futuristic",
      "tinted"
    ),
  },
  {
    name: "features-8",
    type: "registry:block",
    description: "Studio location with hours, contact info, amenities, and map",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/features/features-8.tsx",
        type: "registry:block",
      },
    ],
    categories: ["features", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-fitness",
      "features",
      4,
      "neon",
      "futuristic",
      "tinted"
    ),
  },
  {
    name: "team-2",
    type: "registry:block",
    description:
      "Coach profiles with specialties, certifications, and social links",
    registryDependencies: ["utils"],
    files: [
      {
        path: "blocks/team/team-2.tsx",
        type: "registry:block",
      },
    ],
    categories: ["team", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-fitness",
      "team",
      9,
      "neon",
      "futuristic",
      "tinted"
    ),
  },
  {
    name: "pricing-2",
    type: "registry:block",
    description:
      "Fitness membership pricing with tiers, features, and popular badge",
    registryDependencies: ["button", "utils"],
    files: [
      {
        path: "blocks/pricing/pricing-2.tsx",
        type: "registry:block",
      },
    ],
    categories: ["pricing", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-fitness",
      "pricing",
      6,
      "neon",
      "futuristic",
      "tinted"
    ),
  },
  {
    name: "stats-2",
    type: "registry:block",
    description:
      "Animated gym statistics with number counters and highlight section",
    registryDependencies: ["utils"],
    files: [
      {
        path: "blocks/stats/stats-2.tsx",
        type: "registry:block",
      },
    ],
    categories: ["stats", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-fitness",
      "stats",
      10,
      "neon",
      "futuristic",
      "deep"
    ),
  },
  {
    name: "testimonials-2",
    type: "registry:block",
    description:
      "Member testimonials with transformation stats and star ratings",
    registryDependencies: ["utils"],
    files: [
      {
        path: "blocks/testimonials/testimonials-2.tsx",
        type: "registry:block",
      },
    ],
    categories: ["testimonials", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-fitness",
      "testimonials",
      7,
      "neon",
      "futuristic",
      "deep"
    ),
  },
  {
    name: "footer-2",
    type: "registry:block",
    description:
      "Fitness footer with newsletter, navigation columns, and social links",
    registryDependencies: ["button", "input"],
    files: [
      {
        path: "blocks/footer/footer-2.tsx",
        type: "registry:block",
      },
    ],
    categories: ["footer", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-fitness",
      "footer",
      20,
      "neon",
      "futuristic",
      "tinted"
    ),
  },

  // ============================================
  // STANDALONE BLOCKS (no template, default styling)
  // Auth blocks - standalone, use modern defaults
  // ============================================
  {
    name: "auth-1",
    type: "registry:block",
    description: "Centered login form with social sign-in options",
    registryDependencies: ["button", "input", "label"],
    files: [
      {
        path: "blocks/auth/auth-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["auth"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("standalone", "auth", 50, "slate", "modern", "tinted"),
  },
  {
    name: "auth-2",
    type: "registry:block",
    description:
      "Signup form with name fields, terms checkbox, and social options",
    registryDependencies: ["button", "checkbox", "input", "label"],
    files: [
      {
        path: "blocks/auth/auth-2.tsx",
        type: "registry:block",
      },
    ],
    categories: ["auth"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("standalone", "auth", 50, "slate", "modern", "tinted"),
  },
  {
    name: "auth-3",
    type: "registry:block",
    description: "Forgot password form with email input",
    registryDependencies: ["button", "input", "label"],
    files: [
      {
        path: "blocks/auth/auth-3.tsx",
        type: "registry:block",
      },
    ],
    categories: ["auth"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("standalone", "auth", 50, "slate", "modern", "tinted"),
  },
  {
    name: "auth-4",
    type: "registry:block",
    description: "Split-screen login with image panel and testimonial",
    registryDependencies: ["button", "input", "label"],
    files: [
      {
        path: "blocks/auth/auth-4.tsx",
        type: "registry:block",
      },
    ],
    categories: ["auth"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("standalone", "auth", 50, "slate", "modern", "tinted"),
  },
  {
    name: "auth-5",
    type: "registry:block",
    description: "OTP verification with 6-digit code input",
    registryDependencies: ["button", "input", "utils"],
    files: [
      {
        path: "blocks/auth/auth-5.tsx",
        type: "registry:block",
      },
    ],
    categories: ["auth"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("standalone", "auth", 50, "slate", "modern", "tinted"),
  },
  {
    name: "auth-6",
    type: "registry:block",
    description: "Reset password form with requirements checklist",
    registryDependencies: ["button", "input", "label", "utils"],
    files: [
      {
        path: "blocks/auth/auth-6.tsx",
        type: "registry:block",
      },
    ],
    categories: ["auth"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("standalone", "auth", 50, "slate", "modern", "tinted"),
  },

  // ============================================
  // TEMPLATE ENTRIES (meta blocks)
  // ============================================
  {
    name: "service-plants",
    type: "registry:block",
    description: "Complete plant shop landing page template with all sections",
    registryDependencies: [
      "header-1",
      "hero-1",
      "logos-1",
      "features-1",
      "features-2",
      "features-3",
      "features-4",
      "features-5",
      "products-1",
      "pricing-1",
      "testimonials-1",
      "gallery-1",
      "team-1",
      "stats-1",
      "faq-1",
      "blog-1",
      "contact-1",
      "newsletter-1",
      "cta-1",
      "footer-1",
    ],
    files: [
      {
        path: "blocks/service/service-plants.tsx",
        type: "registry:block",
      },
    ],
    categories: ["template", "service"],
    tier: "free",
    readiness: "production",
    meta: {
      heroBlock: "hero-1",
    },
  },
  {
    name: "service-travel",
    type: "registry:block",
    description:
      "Stunning travel agency landing page template for tour operators",
    registryDependencies: ["hero-2"],
    files: [
      {
        path: "blocks/service/service-travel.tsx",
        type: "registry:block",
      },
    ],
    categories: ["template", "service"],
    tier: "free",
    readiness: "beta",
    meta: {
      heroBlock: "hero-2",
    },
  },
  {
    name: "service-boat",
    type: "registry:block",
    description:
      "Luxury yacht charter landing page template for marine services",
    registryDependencies: ["hero-3"],
    files: [
      {
        path: "blocks/service/service-boat.tsx",
        type: "registry:block",
      },
    ],
    categories: ["template", "service"],
    tier: "free",
    readiness: "beta",
    meta: {
      heroBlock: "hero-3",
    },
  },
  {
    name: "service-fitness",
    type: "registry:block",
    description:
      "Boutique fitness studio landing page with high-energy black & white design",
    registryDependencies: [
      "header-1",
      "hero-4",
      "hero-5",
      "hero-6",
      "hero-7",
      "hero-8",
      "hero-9",
      "features-6",
      "features-7",
      "team-2",
      "stats-2",
      "pricing-2",
      "testimonials-2",
      "features-8",
      "footer-2",
    ],
    files: [
      {
        path: "blocks/service/service-fitness.tsx",
        type: "registry:block",
      },
    ],
    categories: ["template", "service"],
    tier: "free",
    readiness: "production",
    meta: {
      heroBlock: "hero-5",
    },
  },

  // ============================================
  // APPLICATION TEMPLATE: GYM TRACKER (sage + modern)
  // ============================================
  {
    name: "app-gym-shell-1",
    type: "registry:block",
    description: "Two-sidebar gym tracker shell with navigation and stats",
    dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
    registryDependencies: ["sidebar", "avatar", "button", "separator", "utils"],
    files: [
      {
        path: "blocks/application/app-gym-shell-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "beta",
    blockConfig: bc("app-gym-tracker", "shell", 0, "sage", "modern", "base"),
  },
  {
    name: "app-gym-today-1",
    type: "registry:block",
    description:
      "Today view with personalized greeting, week progress, and upcoming sets",
    dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
    registryDependencies: ["button", "utils"],
    files: [
      {
        path: "blocks/application/app-gym-today-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "beta",
    blockConfig: bc("app-gym-tracker", "view", 1, "sage", "modern", "base"),
  },
  {
    name: "app-gym-log-1",
    type: "registry:block",
    description: "Active workout logging with set tracking and timer",
    dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
    registryDependencies: ["button", "input", "utils"],
    files: [
      {
        path: "blocks/application/app-gym-log-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "beta",
    blockConfig: bc("app-gym-tracker", "view", 2, "sage", "modern", "base"),
  },
  {
    name: "app-gym-history-1",
    type: "registry:block",
    description: "Calendar history view with workout indicators and details",
    dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
    registryDependencies: ["button", "utils"],
    files: [
      {
        path: "blocks/application/app-gym-history-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "beta",
    blockConfig: bc("app-gym-tracker", "view", 3, "sage", "modern", "base"),
  },
  {
    name: "app-gym-gains-1",
    type: "registry:block",
    description: "Progress tracking with sparkline charts and PR history",
    dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
    registryDependencies: ["utils"],
    files: [
      {
        path: "blocks/application/app-gym-gains-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "beta",
    blockConfig: bc("app-gym-tracker", "view", 4, "sage", "modern", "base"),
  },
  {
    name: "app-gym-library-1",
    type: "registry:block",
    description: "Exercise library with search, categories, and history",
    dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
    registryDependencies: ["input", "utils"],
    files: [
      {
        path: "blocks/application/app-gym-library-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "beta",
    blockConfig: bc("app-gym-tracker", "view", 5, "sage", "modern", "base"),
  },
  {
    name: "app-gym-profile-1",
    type: "registry:block",
    description: "Profile and settings with preferences and stats",
    dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
    registryDependencies: [
      "avatar",
      "button",
      "input",
      "label",
      "select",
      "separator",
      "switch",
      "utils",
    ],
    files: [
      {
        path: "blocks/application/app-gym-profile-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "beta",
    blockConfig: bc("app-gym-tracker", "view", 6, "sage", "modern", "base"),
  },
  {
    name: "app-gym-tracker",
    type: "registry:block",
    description: "Complete gym progressive overload tracker with two sidebars",
    dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
    registryDependencies: [
      "app-gym-shell-1",
      "app-gym-today-1",
      "app-gym-log-1",
      "app-gym-history-1",
      "app-gym-gains-1",
      "app-gym-library-1",
      "app-gym-profile-1",
    ],
    files: [
      {
        path: "blocks/application/app-gym-tracker.tsx",
        type: "registry:block",
      },
    ],
    categories: ["template", "application"],
    tier: "free",
    readiness: "beta",
    meta: {
      heroBlock: "app-gym-today-1",
      iframeHeight: "800px",
    },
  },

  // ============================================
  // APPLICATION TEMPLATE: QUIZ APP (violet + playful)
  // ============================================
  {
    name: "app-quiz-shell-1",
    type: "registry:block",
    description: "Application shell with sidebar navigation for quiz app",
    dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
    registryDependencies: ["sidebar", "avatar", "utils"],
    files: [
      {
        path: "blocks/application/app-quiz-shell-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "beta",
    blockConfig: bc("app-quiz", "shell", 0, "violet", "playful", "base"),
  },
  {
    name: "app-quiz-dashboard-1",
    type: "registry:block",
    description:
      "Quiz dashboard with stats, weekly accuracy chart, and recent quizzes",
    dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
    registryDependencies: ["button", "card", "utils"],
    files: [
      {
        path: "blocks/application/app-quiz-dashboard-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "beta",
    blockConfig: bc("app-quiz", "view", 1, "violet", "playful", "base"),
  },
  {
    name: "app-quiz-browse-1",
    type: "registry:block",
    description: "Quiz browser with categories and difficulty filters",
    dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
    registryDependencies: ["badge", "button", "card", "input", "utils"],
    files: [
      {
        path: "blocks/application/app-quiz-browse-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "beta",
    blockConfig: bc("app-quiz", "view", 2, "violet", "playful", "base"),
  },
  {
    name: "app-quiz-active-1",
    type: "registry:block",
    description: "Active quiz interface with timer and question display",
    dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
    registryDependencies: ["button", "card", "utils"],
    files: [
      {
        path: "blocks/application/app-quiz-active-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "beta",
    blockConfig: bc("app-quiz", "view", 3, "violet", "playful", "base"),
  },
  {
    name: "app-quiz-results-1",
    type: "registry:block",
    description: "Quiz results with score and question breakdown",
    dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
    registryDependencies: ["badge", "button", "card", "utils"],
    files: [
      {
        path: "blocks/application/app-quiz-results-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "beta",
    blockConfig: bc("app-quiz", "view", 4, "violet", "playful", "base"),
  },
  {
    name: "app-quiz-settings-1",
    type: "registry:block",
    description: "Quiz settings with profile and preferences",
    dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
    registryDependencies: [
      "avatar",
      "button",
      "card",
      "input",
      "label",
      "select",
      "separator",
      "switch",
      "utils",
    ],
    files: [
      {
        path: "blocks/application/app-quiz-settings-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "beta",
    blockConfig: bc("app-quiz", "view", 5, "violet", "playful", "base"),
  },
  {
    name: "app-quiz",
    type: "registry:block",
    description: "Complete quiz application template",
    dependencies: ["@hugeicons/react", "@hugeicons/core-free-icons"],
    registryDependencies: [
      "app-quiz-shell-1",
      "app-quiz-dashboard-1",
      "app-quiz-browse-1",
      "app-quiz-active-1",
      "app-quiz-results-1",
      "app-quiz-settings-1",
    ],
    files: [
      {
        path: "blocks/application/app-quiz.tsx",
        type: "registry:block",
      },
    ],
    categories: ["template", "application"],
    tier: "free",
    readiness: "beta",
    meta: {
      heroBlock: "app-quiz-dashboard-1",
      iframeHeight: "800px",
    },
  },

  // ============================================
  // MAPS BLOCKS (standalone)
  // ============================================
  {
    name: "maps-1",
    type: "registry:block",
    description:
      "Basic interactive map with multiple office location markers and popups",
    dependencies: ["maplibre-gl", "next-themes"],
    registryDependencies: ["map"],
    files: [
      {
        path: "blocks/maps/maps-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["maps"],
    tier: "free",
    readiness: "production",
    meta: {
      iframeHeight: "550px",
    },
    blockConfig: bc("standalone", "maps", 60, "slate", "modern", "tinted"),
  },
  {
    name: "maps-2",
    type: "registry:block",
    description: "Contact page map with business info sidebar and location pin",
    dependencies: [
      "maplibre-gl",
      "next-themes",
      "@hugeicons/react",
      "@hugeicons/core-free-icons",
    ],
    registryDependencies: ["map"],
    files: [
      {
        path: "blocks/maps/maps-2.tsx",
        type: "registry:block",
      },
    ],
    categories: ["maps", "contact"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("standalone", "maps", 60, "slate", "modern", "tinted"),
  },
  {
    name: "maps-3",
    type: "registry:block",
    description:
      "Store locator with searchable sidebar list and interactive map",
    dependencies: [
      "maplibre-gl",
      "next-themes",
      "@hugeicons/react",
      "@hugeicons/core-free-icons",
    ],
    registryDependencies: ["map", "button", "input", "scroll-area"],
    files: [
      {
        path: "blocks/maps/maps-3.tsx",
        type: "registry:block",
      },
    ],
    categories: ["maps"],
    tier: "free",
    readiness: "production",
    meta: {
      iframeHeight: "650px",
    },
    blockConfig: bc("standalone", "maps", 60, "slate", "modern", "tinted"),
  },
  {
    name: "maps-4",
    type: "registry:block",
    description:
      "Delivery tracking map with route visualization and status timeline",
    dependencies: [
      "maplibre-gl",
      "next-themes",
      "@hugeicons/react",
      "@hugeicons/core-free-icons",
    ],
    registryDependencies: ["map", "badge"],
    files: [
      {
        path: "blocks/maps/maps-4.tsx",
        type: "registry:block",
      },
    ],
    categories: ["maps", "application"],
    tier: "free",
    readiness: "production",
    meta: {
      iframeHeight: "550px",
    },
    blockConfig: bc("standalone", "maps", 60, "slate", "modern", "tinted"),
  },
  {
    name: "maps-5",
    type: "registry:block",
    description:
      "Real estate property listings map with price markers and detailed popups",
    dependencies: [
      "maplibre-gl",
      "next-themes",
      "@hugeicons/react",
      "@hugeicons/core-free-icons",
    ],
    registryDependencies: ["map", "badge", "button"],
    files: [
      {
        path: "blocks/maps/maps-5.tsx",
        type: "registry:block",
      },
    ],
    categories: ["maps"],
    tier: "free",
    readiness: "production",
    meta: {
      iframeHeight: "650px",
    },
    blockConfig: bc("standalone", "maps", 60, "slate", "modern", "tinted"),
  },

  // ============================================
  // ADDITIONAL HEADER BLOCKS (service-plants alternatives)
  // ============================================
  {
    name: "header-2",
    type: "registry:block",
    description: "Centered logo header with navigation split left/right",
    registryDependencies: ["button"],
    files: [{ path: "blocks/header/header-2.tsx", type: "registry:block" }],
    categories: ["header", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "header",
      1,
      "sage",
      "elegant",
      "tinted",
      true
    ),
  },
  {
    name: "header-3",
    type: "registry:block",
    description: "Transparent overlay header that becomes solid on scroll",
    registryDependencies: ["button"],
    files: [{ path: "blocks/header/header-3.tsx", type: "registry:block" }],
    categories: ["header", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "header",
      1,
      "sage",
      "elegant",
      "tinted",
      true
    ),
  },
  {
    name: "header-4",
    type: "registry:block",
    description: "Mega menu header with dropdown panels",
    registryDependencies: ["button"],
    files: [{ path: "blocks/header/header-4.tsx", type: "registry:block" }],
    categories: ["header", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "header",
      1,
      "sage",
      "elegant",
      "tinted",
      true
    ),
  },
  {
    name: "header-5",
    type: "registry:block",
    description: "Mobile-first hamburger header with full-screen overlay",
    registryDependencies: ["button"],
    files: [{ path: "blocks/header/header-5.tsx", type: "registry:block" }],
    categories: ["header", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "header",
      1,
      "sage",
      "elegant",
      "tinted",
      true
    ),
  },
  {
    name: "header-6",
    type: "registry:block",
    description: "Header with integrated search/command palette",
    registryDependencies: ["button", "dialog", "input"],
    files: [{ path: "blocks/header/header-6.tsx", type: "registry:block" }],
    categories: ["header", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "header",
      1,
      "sage",
      "elegant",
      "tinted",
      true
    ),
  },
  {
    name: "header-7",
    type: "registry:block",
    description: "Sticky shrinking header that shrinks on scroll",
    registryDependencies: ["button"],
    files: [{ path: "blocks/header/header-7.tsx", type: "registry:block" }],
    categories: ["header", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "header",
      1,
      "sage",
      "elegant",
      "tinted",
      true
    ),
  },
  {
    name: "header-8",
    type: "registry:block",
    description: "Double row header with top bar and main nav",
    registryDependencies: ["button"],
    files: [{ path: "blocks/header/header-8.tsx", type: "registry:block" }],
    categories: ["header", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "header",
      1,
      "sage",
      "elegant",
      "tinted",
      true
    ),
  },

  // ============================================
  // ADDITIONAL FOOTER BLOCKS (service-plants alternatives)
  // ============================================
  {
    name: "footer-3",
    type: "registry:block",
    description: "Minimal single row footer",
    files: [{ path: "blocks/footer/footer-3.tsx", type: "registry:block" }],
    categories: ["footer", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "footer",
      20,
      "sage",
      "elegant",
      "tinted"
    ),
  },
  {
    name: "footer-4",
    type: "registry:block",
    description: "Big CTA footer with ready to get started section",
    registryDependencies: ["button", "input"],
    files: [{ path: "blocks/footer/footer-4.tsx", type: "registry:block" }],
    categories: ["footer", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "footer",
      20,
      "sage",
      "elegant",
      "tinted"
    ),
  },
  {
    name: "footer-5",
    type: "registry:block",
    description: "Dark gradient footer with large brand statement",
    registryDependencies: ["button", "input"],
    files: [{ path: "blocks/footer/footer-5.tsx", type: "registry:block" }],
    categories: ["footer", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "footer",
      20,
      "sage",
      "elegant",
      "tinted"
    ),
  },
  {
    name: "footer-6",
    type: "registry:block",
    description: "App download footer with store badges and QR code",
    files: [{ path: "blocks/footer/footer-6.tsx", type: "registry:block" }],
    categories: ["footer", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "footer",
      20,
      "sage",
      "elegant",
      "tinted"
    ),
  },
  {
    name: "footer-7",
    type: "registry:block",
    description: "Comprehensive sitemap-style footer",
    registryDependencies: ["button", "input"],
    files: [{ path: "blocks/footer/footer-7.tsx", type: "registry:block" }],
    categories: ["footer", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "footer",
      20,
      "sage",
      "elegant",
      "tinted"
    ),
  },
  {
    name: "footer-8",
    type: "registry:block",
    description: "Social-focused footer with large icons and follower counts",
    files: [{ path: "blocks/footer/footer-8.tsx", type: "registry:block" }],
    categories: ["footer", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "footer",
      20,
      "sage",
      "elegant",
      "tinted"
    ),
  },

  // ============================================
  // ADDITIONAL CTA BLOCKS (service-plants alternatives)
  // ============================================
  {
    name: "cta-2",
    type: "registry:block",
    description: "Split layout CTA with image and gradient background",
    registryDependencies: ["button"],
    files: [{ path: "blocks/cta/cta-2.tsx", type: "registry:block" }],
    categories: ["cta", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "cta", 15, "sage", "elegant", "tinted"),
  },
  {
    name: "cta-3",
    type: "registry:block",
    description: "Full-width CTA banner with countdown timer",
    registryDependencies: ["button"],
    files: [{ path: "blocks/cta/cta-3.tsx", type: "registry:block" }],
    categories: ["cta", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "cta", 15, "sage", "elegant", "tinted"),
  },
  {
    name: "cta-4",
    type: "registry:block",
    description: "Card style CTA with centered content",
    registryDependencies: ["button"],
    files: [{ path: "blocks/cta/cta-4.tsx", type: "registry:block" }],
    categories: ["cta", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "cta", 15, "sage", "elegant", "tinted"),
  },
  {
    name: "cta-5",
    type: "registry:block",
    description: "Floating action bar CTA that appears on scroll",
    registryDependencies: ["button"],
    files: [{ path: "blocks/cta/cta-5.tsx", type: "registry:block" }],
    categories: ["cta", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "cta", 15, "sage", "elegant", "tinted"),
  },
  {
    name: "cta-6",
    type: "registry:block",
    description: "Exit intent modal overlay CTA",
    registryDependencies: ["button"],
    files: [{ path: "blocks/cta/cta-6.tsx", type: "registry:block" }],
    categories: ["cta", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "cta", 15, "sage", "elegant", "tinted"),
  },

  // ============================================
  // ADDITIONAL GALLERY BLOCKS (service-plants alternatives)
  // ============================================
  {
    name: "gallery-2",
    type: "registry:block",
    description: "Masonry gallery with lightbox",
    registryDependencies: ["dialog"],
    files: [{ path: "blocks/gallery/gallery-2.tsx", type: "registry:block" }],
    categories: ["gallery", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "gallery",
      8,
      "sage",
      "elegant",
      "tinted"
    ),
  },
  {
    name: "gallery-3",
    type: "registry:block",
    description: "Carousel gallery with thumbnail navigation",
    registryDependencies: ["button"],
    files: [{ path: "blocks/gallery/gallery-3.tsx", type: "registry:block" }],
    categories: ["gallery", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "gallery",
      8,
      "sage",
      "elegant",
      "tinted"
    ),
  },
  {
    name: "gallery-4",
    type: "registry:block",
    description: "Filterable gallery with category tabs",
    files: [{ path: "blocks/gallery/gallery-4.tsx", type: "registry:block" }],
    categories: ["gallery", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "gallery",
      8,
      "sage",
      "elegant",
      "tinted"
    ),
  },
  {
    name: "gallery-5",
    type: "registry:block",
    description: "Grid gallery with full-screen lightbox modal",
    registryDependencies: ["button", "dialog"],
    files: [{ path: "blocks/gallery/gallery-5.tsx", type: "registry:block" }],
    categories: ["gallery", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "gallery",
      8,
      "sage",
      "elegant",
      "tinted"
    ),
  },
  {
    name: "gallery-6",
    type: "registry:block",
    description: "Before/after comparison slider gallery",
    files: [{ path: "blocks/gallery/gallery-6.tsx", type: "registry:block" }],
    categories: ["gallery", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "gallery",
      8,
      "sage",
      "elegant",
      "tinted"
    ),
  },

  // ============================================
  // ADDITIONAL PRODUCTS BLOCKS (service-plants alternatives)
  // ============================================
  {
    name: "products-2",
    type: "registry:block",
    description: "Product card grid with rating, price, add to cart",
    registryDependencies: ["button"],
    files: [{ path: "blocks/products/products-2.tsx", type: "registry:block" }],
    categories: ["products", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "products",
      5,
      "sage",
      "elegant",
      "tinted"
    ),
  },
  {
    name: "products-3",
    type: "registry:block",
    description: "Featured hero product with grid below",
    registryDependencies: ["button"],
    files: [{ path: "blocks/products/products-3.tsx", type: "registry:block" }],
    categories: ["products", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "products",
      5,
      "sage",
      "elegant",
      "tinted"
    ),
  },
  {
    name: "products-4",
    type: "registry:block",
    description: "Horizontal product carousel with quick add",
    registryDependencies: ["button"],
    files: [{ path: "blocks/products/products-4.tsx", type: "registry:block" }],
    categories: ["products", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "products",
      5,
      "sage",
      "elegant",
      "tinted"
    ),
  },
  {
    name: "products-5",
    type: "registry:block",
    description: "Product list view with large images and stock status",
    registryDependencies: ["button"],
    files: [{ path: "blocks/products/products-5.tsx", type: "registry:block" }],
    categories: ["products", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "products",
      5,
      "sage",
      "elegant",
      "tinted"
    ),
  },
  {
    name: "products-6",
    type: "registry:block",
    description: "Product comparison layout with features",
    registryDependencies: ["button"],
    files: [{ path: "blocks/products/products-6.tsx", type: "registry:block" }],
    categories: ["products", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "products",
      5,
      "sage",
      "elegant",
      "tinted"
    ),
  },

  // ============================================
  // ADDITIONAL NEWSLETTER BLOCKS (service-plants alternatives)
  // ============================================
  {
    name: "newsletter-2",
    type: "registry:block",
    description: "Inline single horizontal row newsletter",
    registryDependencies: ["button", "input"],
    files: [
      { path: "blocks/newsletter/newsletter-2.tsx", type: "registry:block" },
    ],
    categories: ["newsletter", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "newsletter",
      14,
      "sage",
      "elegant",
      "deep"
    ),
  },
  {
    name: "newsletter-3",
    type: "registry:block",
    description: "Newsletter with benefits icons and social proof",
    registryDependencies: ["button", "input"],
    files: [
      { path: "blocks/newsletter/newsletter-3.tsx", type: "registry:block" },
    ],
    categories: ["newsletter", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "newsletter",
      14,
      "sage",
      "elegant",
      "deep"
    ),
  },
  {
    name: "newsletter-4",
    type: "registry:block",
    description: "Split panel newsletter with image",
    registryDependencies: ["button", "input"],
    files: [
      { path: "blocks/newsletter/newsletter-4.tsx", type: "registry:block" },
    ],
    categories: ["newsletter", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "newsletter",
      14,
      "sage",
      "elegant",
      "deep"
    ),
  },
  {
    name: "newsletter-5",
    type: "registry:block",
    description: "Popup card style newsletter with close button",
    registryDependencies: ["button", "input"],
    files: [
      { path: "blocks/newsletter/newsletter-5.tsx", type: "registry:block" },
    ],
    categories: ["newsletter", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "newsletter",
      14,
      "sage",
      "elegant",
      "deep"
    ),
  },
  {
    name: "newsletter-6",
    type: "registry:block",
    description: "Dark themed newsletter with email icon",
    registryDependencies: ["button", "input"],
    files: [
      { path: "blocks/newsletter/newsletter-6.tsx", type: "registry:block" },
    ],
    categories: ["newsletter", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "newsletter",
      14,
      "sage",
      "elegant",
      "deep"
    ),
  },

  // ============================================
  // ADDITIONAL FAQ BLOCKS (service-plants alternatives)
  // ============================================
  {
    name: "faq-2",
    type: "registry:block",
    description: "Two column FAQ with questions left, answers right",
    files: [{ path: "blocks/faq/faq-2.tsx", type: "registry:block" }],
    categories: ["faq", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "faq", 11, "sage", "elegant", "tinted"),
  },
  {
    name: "faq-3",
    type: "registry:block",
    description: "Searchable FAQ with highlight matching",
    registryDependencies: ["input"],
    files: [{ path: "blocks/faq/faq-3.tsx", type: "registry:block" }],
    categories: ["faq", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "faq", 11, "sage", "elegant", "tinted"),
  },
  {
    name: "faq-4",
    type: "registry:block",
    description: "Card-style accordion FAQ with icons",
    files: [{ path: "blocks/faq/faq-4.tsx", type: "registry:block" }],
    categories: ["faq", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "faq", 11, "sage", "elegant", "tinted"),
  },
  {
    name: "faq-5",
    type: "registry:block",
    description: "Tabbed categories FAQ with badge counts",
    files: [{ path: "blocks/faq/faq-5.tsx", type: "registry:block" }],
    categories: ["faq", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "faq", 11, "sage", "elegant", "tinted"),
  },
  {
    name: "faq-6",
    type: "registry:block",
    description: "FAQ with support team CTA and avatars",
    registryDependencies: ["button"],
    files: [{ path: "blocks/faq/faq-6.tsx", type: "registry:block" }],
    categories: ["faq", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "faq", 11, "sage", "elegant", "tinted"),
  },

  // ============================================
  // ADDITIONAL BLOG BLOCKS (service-plants alternatives)
  // ============================================
  {
    name: "blog-2",
    type: "registry:block",
    description: "Featured post with 3-column grid and read time badges",
    registryDependencies: ["button"],
    files: [{ path: "blocks/blog/blog-2.tsx", type: "registry:block" }],
    categories: ["blog", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "blog", 12, "sage", "elegant", "tinted"),
  },
  {
    name: "blog-3",
    type: "registry:block",
    description: "Blog list view with author avatars and dates",
    files: [{ path: "blocks/blog/blog-3.tsx", type: "registry:block" }],
    categories: ["blog", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "blog", 12, "sage", "elegant", "tinted"),
  },
  {
    name: "blog-4",
    type: "registry:block",
    description: "Magazine layout blog with hero, sidebar, grid",
    registryDependencies: ["button"],
    files: [{ path: "blocks/blog/blog-4.tsx", type: "registry:block" }],
    categories: ["blog", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "blog", 12, "sage", "elegant", "tinted"),
  },
  {
    name: "blog-5",
    type: "registry:block",
    description: "Minimal clean blog cards, text-focused",
    files: [{ path: "blocks/blog/blog-5.tsx", type: "registry:block" }],
    categories: ["blog", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "blog", 12, "sage", "elegant", "tinted"),
  },
  {
    name: "blog-6",
    type: "registry:block",
    description: "Blog with sidebar (newsletter, categories, recent, tags)",
    registryDependencies: ["button", "input"],
    files: [{ path: "blocks/blog/blog-6.tsx", type: "registry:block" }],
    categories: ["blog", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "blog", 12, "sage", "elegant", "tinted"),
  },

  // ============================================
  // ADDITIONAL CONTACT BLOCKS (service-plants alternatives)
  // ============================================
  {
    name: "contact-2",
    type: "registry:block",
    description: "Contact form with map placeholder and location info",
    registryDependencies: ["button", "input", "textarea"],
    files: [{ path: "blocks/contact/contact-2.tsx", type: "registry:block" }],
    categories: ["contact", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "contact",
      13,
      "sage",
      "elegant",
      "tinted"
    ),
  },
  {
    name: "contact-3",
    type: "registry:block",
    description: "Multi-channel contact with email, phone, chat cards",
    registryDependencies: ["button"],
    files: [{ path: "blocks/contact/contact-3.tsx", type: "registry:block" }],
    categories: ["contact", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "contact",
      13,
      "sage",
      "elegant",
      "tinted"
    ),
  },
  {
    name: "contact-4",
    type: "registry:block",
    description: "Simple centered contact form with subject dropdown",
    registryDependencies: ["button", "input", "textarea", "select"],
    files: [{ path: "blocks/contact/contact-4.tsx", type: "registry:block" }],
    categories: ["contact", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "contact",
      13,
      "sage",
      "elegant",
      "tinted"
    ),
  },
  {
    name: "contact-5",
    type: "registry:block",
    description: "Split dark/light contact panel layout",
    registryDependencies: ["button", "input", "textarea"],
    files: [{ path: "blocks/contact/contact-5.tsx", type: "registry:block" }],
    categories: ["contact", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "contact",
      13,
      "sage",
      "elegant",
      "tinted"
    ),
  },
  {
    name: "contact-6",
    type: "registry:block",
    description: "Office cards contact with multiple global locations",
    registryDependencies: ["button"],
    files: [{ path: "blocks/contact/contact-6.tsx", type: "registry:block" }],
    categories: ["contact", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "contact",
      13,
      "sage",
      "elegant",
      "tinted"
    ),
  },

  // ============================================
  // ADDITIONAL LOGOS BLOCKS (service-plants alternatives)
  // ============================================
  {
    name: "logos-2",
    type: "registry:block",
    description: "Marquee logo cloud with infinite scroll animation",
    files: [{ path: "blocks/logos/logos-2.tsx", type: "registry:block" }],
    categories: ["logos", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "logos", 3, "sage", "elegant", "deep"),
  },
  {
    name: "logos-3",
    type: "registry:block",
    description: "Grid logos with labels and descriptions",
    files: [{ path: "blocks/logos/logos-3.tsx", type: "registry:block" }],
    categories: ["logos", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "logos", 3, "sage", "elegant", "deep"),
  },
  {
    name: "logos-4",
    type: "registry:block",
    description: "Featured partners with case study links",
    registryDependencies: ["button"],
    files: [{ path: "blocks/logos/logos-4.tsx", type: "registry:block" }],
    categories: ["logos", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "logos", 3, "sage", "elegant", "deep"),
  },
  {
    name: "logos-5",
    type: "registry:block",
    description: "Logos with stats and industry breakdown",
    files: [{ path: "blocks/logos/logos-5.tsx", type: "registry:block" }],
    categories: ["logos", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "logos", 3, "sage", "elegant", "deep"),
  },
  {
    name: "logos-6",
    type: "registry:block",
    description: "Testimonial combo logos with short quotes",
    registryDependencies: ["button"],
    files: [{ path: "blocks/logos/logos-6.tsx", type: "registry:block" }],
    categories: ["logos", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "logos", 3, "sage", "elegant", "deep"),
  },

  // ============================================
  // ADDITIONAL TESTIMONIALS BLOCKS (service-plants alternatives)
  // ============================================
  {
    name: "testimonials-3",
    type: "registry:block",
    description: "Sliding carousel testimonials with navigation",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/testimonials/testimonials-3.tsx",
        type: "registry:block",
      },
    ],
    categories: ["testimonials", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "testimonials",
      7,
      "sage",
      "elegant",
      "deep"
    ),
  },
  {
    name: "testimonials-4",
    type: "registry:block",
    description: "Video testimonial cards with play overlay",
    files: [
      {
        path: "blocks/testimonials/testimonials-4.tsx",
        type: "registry:block",
      },
    ],
    categories: ["testimonials", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "testimonials",
      7,
      "sage",
      "elegant",
      "deep"
    ),
  },
  {
    name: "testimonials-5",
    type: "registry:block",
    description: "Rating-focused testimonials with aggregate score",
    files: [
      {
        path: "blocks/testimonials/testimonials-5.tsx",
        type: "registry:block",
      },
    ],
    categories: ["testimonials", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "testimonials",
      7,
      "sage",
      "elegant",
      "deep"
    ),
  },
  {
    name: "testimonials-6",
    type: "registry:block",
    description: "Case study testimonial cards with metrics",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/testimonials/testimonials-6.tsx",
        type: "registry:block",
      },
    ],
    categories: ["testimonials", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "testimonials",
      7,
      "sage",
      "elegant",
      "deep"
    ),
  },
  {
    name: "testimonials-7",
    type: "registry:block",
    description: "Social proof wall with tweet-style cards",
    files: [
      {
        path: "blocks/testimonials/testimonials-7.tsx",
        type: "registry:block",
      },
    ],
    categories: ["testimonials", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "testimonials",
      7,
      "sage",
      "elegant",
      "deep"
    ),
  },

  // ============================================
  // ADDITIONAL PRICING BLOCKS (service-plants alternatives)
  // ============================================
  {
    name: "pricing-3",
    type: "registry:block",
    description: "Feature comparison table pricing",
    registryDependencies: ["button"],
    files: [{ path: "blocks/pricing/pricing-3.tsx", type: "registry:block" }],
    categories: ["pricing", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "pricing",
      6,
      "sage",
      "elegant",
      "tinted"
    ),
  },
  {
    name: "pricing-4",
    type: "registry:block",
    description: "Monthly/yearly toggle pricing with savings badge",
    registryDependencies: ["button", "switch"],
    files: [{ path: "blocks/pricing/pricing-4.tsx", type: "registry:block" }],
    categories: ["pricing", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "pricing",
      6,
      "sage",
      "elegant",
      "tinted"
    ),
  },
  {
    name: "pricing-5",
    type: "registry:block",
    description: "Enterprise focus pricing with standard and custom tiers",
    registryDependencies: ["button"],
    files: [{ path: "blocks/pricing/pricing-5.tsx", type: "registry:block" }],
    categories: ["pricing", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "pricing",
      6,
      "sage",
      "elegant",
      "tinted"
    ),
  },
  {
    name: "pricing-6",
    type: "registry:block",
    description: "Usage-based pricing with calculator slider",
    registryDependencies: ["button", "slider"],
    files: [{ path: "blocks/pricing/pricing-6.tsx", type: "registry:block" }],
    categories: ["pricing", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "pricing",
      6,
      "sage",
      "elegant",
      "tinted"
    ),
  },
  {
    name: "pricing-7",
    type: "registry:block",
    description: "Horizontal pricing cards with icons",
    registryDependencies: ["button"],
    files: [{ path: "blocks/pricing/pricing-7.tsx", type: "registry:block" }],
    categories: ["pricing", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc(
      "service-plants",
      "pricing",
      6,
      "sage",
      "elegant",
      "tinted"
    ),
  },

  // ============================================
  // ADDITIONAL TEAM BLOCKS (service-plants alternatives)
  // ============================================
  {
    name: "team-3",
    type: "registry:block",
    description: "Team cards with social links on hover",
    files: [{ path: "blocks/team/team-3.tsx", type: "registry:block" }],
    categories: ["team", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "team", 9, "sage", "elegant", "tinted"),
  },
  {
    name: "team-4",
    type: "registry:block",
    description: "Leadership section with smaller team grid",
    files: [{ path: "blocks/team/team-4.tsx", type: "registry:block" }],
    categories: ["team", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "team", 9, "sage", "elegant", "tinted"),
  },
  {
    name: "team-5",
    type: "registry:block",
    description: "Carousel team with thumbnail navigation",
    registryDependencies: ["button"],
    files: [{ path: "blocks/team/team-5.tsx", type: "registry:block" }],
    categories: ["team", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "team", 9, "sage", "elegant", "tinted"),
  },
  {
    name: "team-6",
    type: "registry:block",
    description: "About page style team with story and values",
    files: [{ path: "blocks/team/team-6.tsx", type: "registry:block" }],
    categories: ["team", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "team", 9, "sage", "elegant", "tinted"),
  },
  {
    name: "team-7",
    type: "registry:block",
    description: "Minimal list team by department",
    files: [{ path: "blocks/team/team-7.tsx", type: "registry:block" }],
    categories: ["team", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "team", 9, "sage", "elegant", "tinted"),
  },

  // ============================================
  // ADDITIONAL STATS BLOCKS (service-plants alternatives)
  // ============================================
  {
    name: "stats-3",
    type: "registry:block",
    description: "Large counter stats with dark background",
    files: [{ path: "blocks/stats/stats-3.tsx", type: "registry:block" }],
    categories: ["stats", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "stats", 10, "sage", "elegant", "deep"),
  },
  {
    name: "stats-4",
    type: "registry:block",
    description: "Stats cards with icons and change indicators",
    files: [{ path: "blocks/stats/stats-4.tsx", type: "registry:block" }],
    categories: ["stats", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "stats", 10, "sage", "elegant", "deep"),
  },
  {
    name: "stats-5",
    type: "registry:block",
    description: "Timeline milestone stats",
    files: [{ path: "blocks/stats/stats-5.tsx", type: "registry:block" }],
    categories: ["stats", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "stats", 10, "sage", "elegant", "deep"),
  },
  {
    name: "stats-6",
    type: "registry:block",
    description: "Before/after comparison stats",
    files: [{ path: "blocks/stats/stats-6.tsx", type: "registry:block" }],
    categories: ["stats", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "stats", 10, "sage", "elegant", "deep"),
  },
  {
    name: "stats-7",
    type: "registry:block",
    description: "Infographic style stats with bar chart",
    files: [{ path: "blocks/stats/stats-7.tsx", type: "registry:block" }],
    categories: ["stats", "landing"],
    tier: "free",
    readiness: "production",
    blockConfig: bc("service-plants", "stats", 10, "sage", "elegant", "deep"),
  },
]
