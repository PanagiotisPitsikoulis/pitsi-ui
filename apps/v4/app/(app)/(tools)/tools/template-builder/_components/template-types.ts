export type SectionCategory =
  | "hero"
  | "features"
  | "testimonials"
  | "pricing"
  | "stats"
  | "cta"
  | "faq"
  | "team"
  | "footer"
  | "contact"
  | "blog"
  | "about"
  | "how-it-works"
  | "gallery"
  | "clients"

export interface SectionMeta {
  id: string
  category: SectionCategory
  label: string
}

export interface TemplateSection {
  instanceId: string
  sectionId: string
}

export interface ComposedTemplate {
  id: string
  name: string
  sections: TemplateSection[]
  createdAt: number
}

export interface TemplatePreset {
  id: string
  label: string
  description: string
  category: "saas" | "agency" | "portfolio" | "ecommerce" | "startup"
  sections: string[]
}
