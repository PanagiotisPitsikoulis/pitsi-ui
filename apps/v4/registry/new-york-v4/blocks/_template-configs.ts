export interface TemplateConfig {
  slug: string
  name: string
  description: string
  heroBlock: string
  type: "service" | "application"
}

export const templateConfigs: TemplateConfig[] = [
  {
    slug: "service-plants",
    name: "Plant Shop",
    description: "Complete plant shop landing page with all sections",
    heroBlock: "hero-1",
    type: "service",
  },
  {
    slug: "service-travel",
    name: "Travel Agency",
    description: "Stunning travel agency landing page for tour operators",
    heroBlock: "hero-2",
    type: "service",
  },
  {
    slug: "service-boat",
    name: "Yacht Charter",
    description: "Luxury yacht charter landing page for marine services",
    heroBlock: "hero-3",
    type: "service",
  },
  {
    slug: "service-fitness",
    name: "Fitness Studio",
    description: "Boutique fitness studio landing page with high-energy design",
    heroBlock: "hero-5",
    type: "service",
  },
  {
    slug: "app-gym-tracker",
    name: "Gym Tracker",
    description: "Complete gym progressive overload tracker with two sidebars",
    heroBlock: "app-gym-today-1",
    type: "application",
  },
  {
    slug: "app-quiz",
    name: "Quiz App",
    description: "Complete quiz application template",
    heroBlock: "app-quiz-dashboard-1",
    type: "application",
  },
]
