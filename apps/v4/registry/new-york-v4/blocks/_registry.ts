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
    readiness: "production",
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
    readiness: "production",
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
    readiness: "production",
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
    readiness: "production",
  },
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
    categories: ["hero", "service-fitness"],
    tier: "free",
    readiness: "production",
  },
  {
    name: "hero-5",
    type: "registry:block",
    description:
      "Full-bleed parallax fitness hero with dark overlay and centered content, video background style",
    dependencies: ["motion/react"],
    registryDependencies: ["button", "hero-button"],
    files: [
      {
        path: "blocks/hero/hero-5.tsx",
        type: "registry:block",
      },
    ],
    categories: ["hero", "service-fitness"],
    tier: "free",
    readiness: "production",
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
    readiness: "production",
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
    readiness: "production",
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
    readiness: "production",
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
    readiness: "production",
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
    readiness: "production",
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
    readiness: "production",
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
    readiness: "production",
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
    readiness: "production",
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
    readiness: "production",
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
    readiness: "production",
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
    readiness: "production",
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
    readiness: "production",
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
    readiness: "production",
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
    readiness: "production",
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
    readiness: "production",
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
    readiness: "production",
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
    readiness: "production",
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
    readiness: "production",
  },
  // Service Template: Plants
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
  // Service Template: Travel
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
  // Service Template: Boat
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
  // Service Template: Fitness
  {
    name: "service-fitness",
    type: "registry:block",
    description:
      "Professional personal training landing page template for fitness coaches",
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
        path: "blocks/service/service-fitness.tsx",
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
    name: "application-1",
    type: "registry:block",
    description:
      "Gym progressive overload tracker with lift progression chart and workout history",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "card", "utils"],
    files: [
      {
        path: "blocks/application/application-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application"],
    tier: "free",
    readiness: "production",
  },
  // Application Template: Gym Tracker
  {
    name: "app-gym-shell-1",
    type: "registry:block",
    description: "Two-sidebar gym tracker shell with navigation and stats",
    dependencies: ["lucide-react"],
    registryDependencies: ["sidebar", "avatar", "button", "separator", "utils"],
    files: [
      {
        path: "blocks/application/app-gym-shell-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application", "app-gym-tracker"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "app-gym-today-1",
    type: "registry:block",
    description:
      "Today view with personalized greeting, week progress, and upcoming sets",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "utils"],
    files: [
      {
        path: "blocks/application/app-gym-today-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application", "app-gym-tracker"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "app-gym-log-1",
    type: "registry:block",
    description: "Active workout logging with set tracking and timer",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "input", "utils"],
    files: [
      {
        path: "blocks/application/app-gym-log-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application", "app-gym-tracker"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "app-gym-history-1",
    type: "registry:block",
    description: "Calendar history view with workout indicators and details",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "utils"],
    files: [
      {
        path: "blocks/application/app-gym-history-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application", "app-gym-tracker"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "app-gym-gains-1",
    type: "registry:block",
    description: "Progress tracking with sparkline charts and PR history",
    dependencies: ["lucide-react"],
    registryDependencies: ["utils"],
    files: [
      {
        path: "blocks/application/app-gym-gains-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application", "app-gym-tracker"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "app-gym-library-1",
    type: "registry:block",
    description: "Exercise library with search, categories, and history",
    dependencies: ["lucide-react"],
    registryDependencies: ["input", "utils"],
    files: [
      {
        path: "blocks/application/app-gym-library-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application", "app-gym-tracker"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "app-gym-profile-1",
    type: "registry:block",
    description: "Profile and settings with preferences and stats",
    dependencies: ["lucide-react"],
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
    categories: ["application", "app-gym-tracker"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "app-gym-tracker",
    type: "registry:block",
    description: "Complete gym progressive overload tracker with two sidebars",
    dependencies: ["lucide-react"],
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
    categories: ["template", "application", "app-gym-tracker"],
    tier: "free",
    readiness: "beta",
    meta: {
      heroBlock: "app-gym-today-1",
      iframeHeight: "800px",
    },
  },
  // Application Template: Quiz App
  {
    name: "app-quiz-shell-1",
    type: "registry:block",
    description: "Application shell with sidebar navigation for quiz app",
    dependencies: ["lucide-react"],
    registryDependencies: ["sidebar", "avatar", "utils"],
    files: [
      {
        path: "blocks/application/app-quiz-shell-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application", "app-quiz"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "app-quiz-dashboard-1",
    type: "registry:block",
    description:
      "Quiz dashboard with stats, weekly accuracy chart, and recent quizzes",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "card", "utils"],
    files: [
      {
        path: "blocks/application/app-quiz-dashboard-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application", "app-quiz"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "app-quiz-browse-1",
    type: "registry:block",
    description: "Quiz browser with categories and difficulty filters",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge", "button", "card", "input", "utils"],
    files: [
      {
        path: "blocks/application/app-quiz-browse-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application", "app-quiz"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "app-quiz-active-1",
    type: "registry:block",
    description: "Active quiz interface with timer and question display",
    dependencies: ["lucide-react"],
    registryDependencies: ["button", "card", "utils"],
    files: [
      {
        path: "blocks/application/app-quiz-active-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application", "app-quiz"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "app-quiz-results-1",
    type: "registry:block",
    description: "Quiz results with score and question breakdown",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge", "button", "card", "utils"],
    files: [
      {
        path: "blocks/application/app-quiz-results-1.tsx",
        type: "registry:block",
      },
    ],
    categories: ["application", "app-quiz"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "app-quiz-settings-1",
    type: "registry:block",
    description: "Quiz settings with profile and preferences",
    dependencies: ["lucide-react"],
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
    categories: ["application", "app-quiz"],
    tier: "free",
    readiness: "beta",
  },
  {
    name: "app-quiz",
    type: "registry:block",
    description: "Complete quiz application template",
    dependencies: ["lucide-react"],
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
    categories: ["template", "application", "app-quiz"],
    tier: "free",
    readiness: "beta",
    meta: {
      heroBlock: "app-quiz-dashboard-1",
      iframeHeight: "800px",
    },
  },
]
