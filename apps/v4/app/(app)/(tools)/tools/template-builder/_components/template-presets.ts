import type { TemplatePreset } from "./template-types"

export const templatePresets: TemplatePreset[] = [
  {
    id: "saas-landing",
    label: "SaaS Landing",
    description:
      "Modern SaaS product page with hero, features, pricing, and testimonials",
    category: "saas",
    sections: [
      "marketing-hero-section-hero-section-with-customer-logos",
      "marketing-features-grid-layout-feature-cards",
      "marketing-pricing-plans-pricing-table-with-toggle",
      "marketing-testimonial-testimonial-with-rating",
      "marketing-faq-simple-faq-section",
      "marketing-footer-simple-footer",
    ],
  },
  {
    id: "agency-portfolio",
    label: "Agency Portfolio",
    description: "Creative agency showcase with case studies and team section",
    category: "agency",
    sections: [
      "marketing-hero-section-hero-section-with-image",
      "marketing-about-us-section-about-us-template",
      "marketing-features-grid-layout-feature-cards",
      "marketing-testimonial-testimonial-with-rating",
      "marketing-cta-cta-section",
      "marketing-footer-simple-footer",
    ],
  },
  {
    id: "startup-minimal",
    label: "Startup Minimal",
    description: "Clean, minimal landing page for early-stage startups",
    category: "startup",
    sections: [
      "marketing-hero-section-hero-section-with-gradient",
      "marketing-features-grid-layout-feature-cards",
      "marketing-cta-cta-section",
      "marketing-footer-simple-footer",
    ],
  },
  {
    id: "ecommerce-store",
    label: "E-commerce Store",
    description: "Product-focused landing with gallery and testimonials",
    category: "ecommerce",
    sections: [
      "marketing-hero-section-hero-section-with-image",
      "marketing-features-grid-layout-feature-cards",
      "marketing-testimonial-testimonial-with-rating",
      "marketing-faq-simple-faq-section",
      "marketing-footer-simple-footer",
    ],
  },
  {
    id: "portfolio-personal",
    label: "Personal Portfolio",
    description: "Personal portfolio with about section and project showcase",
    category: "portfolio",
    sections: [
      "marketing-hero-section-hero-section-with-image",
      "marketing-about-us-section-about-us-template",
      "marketing-features-grid-layout-feature-cards",
      "marketing-cta-cta-section",
      "marketing-footer-simple-footer",
    ],
  },
]
