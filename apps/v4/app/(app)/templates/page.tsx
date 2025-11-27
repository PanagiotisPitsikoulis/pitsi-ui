import Link from "next/link"

const templateFamilies = [
  {
    "id": "agency-2",
    "name": "Agency 2",
    "description": "Website template collection from agency-2",
    "templates": [
      {
        "name": "About",
        "slug": "agency-2-about",
        "description": "About page template",
        "category": "Marketing"
      },
      {
        "name": "Blog Post - Biofertilizer Can Restore Soil Health Naturally",
        "slug": "agency-2-blog-post-biofertilizer-can-restore-soil-health-naturally",
        "description": "Blog Post - Biofertilizer Can Restore Soil Health Naturally page template",
        "category": "Content"
      },
      {
        "name": "Blog",
        "slug": "agency-2-blog",
        "description": "Blog page template",
        "category": "Content"
      },
      {
        "name": "Blog Post - Science Behind Biogas",
        "slug": "agency-2-blog-post-science-behind-biogas",
        "description": "Blog Post - Science Behind Biogas page template",
        "category": "Content"
      },
      {
        "name": "Contact",
        "slug": "agency-2-contact",
        "description": "Contact page template",
        "category": "Marketing"
      },
      {
        "name": "Home",
        "slug": "agency-2-home",
        "description": "Home page template",
        "category": "Landing Page"
      },
      {
        "name": "Privacy Policy",
        "slug": "agency-2-privacy-policy",
        "description": "Privacy Policy page template",
        "category": "Legal"
      },
      {
        "name": "Project - Green Pastures Dairy Biogas Plant",
        "slug": "agency-2-project-green-pastures-dairy-biogas-plant",
        "description": "Project - Green Pastures Dairy Biogas Plant page template",
        "category": "Portfolio"
      },
      {
        "name": "Project - Nyeri Co Digestion Pilot",
        "slug": "agency-2-project-nyeri-co-digestion-pilot",
        "description": "Project - Nyeri Co Digestion Pilot page template",
        "category": "Portfolio"
      },
      {
        "name": "Projects",
        "slug": "agency-2-projects",
        "description": "Projects page template",
        "category": "Portfolio"
      },
      {
        "name": "Project - Savannah Agro Processing Biogas Retrofit",
        "slug": "agency-2-project-savannah-agro-processing-biogas-retrofit",
        "description": "Project - Savannah Agro Processing Biogas Retrofit page template",
        "category": "Portfolio"
      },
      {
        "name": "Services",
        "slug": "agency-2-services",
        "description": "Services page template",
        "category": "Marketing"
      },
      {
        "name": "Terms And Conditions",
        "slug": "agency-2-terms-and-conditions",
        "description": "Terms And Conditions page template",
        "category": "Legal"
      }
    ]
  },
  {
    "id": "simple-3",
    "name": "Simple 3",
    "description": "Website template collection from simple-3",
    "templates": [
      {
        "name": "About",
        "slug": "simple-3-about",
        "description": "About page template",
        "category": "Marketing"
      },
      {
        "name": "Contact",
        "slug": "simple-3-contact",
        "description": "Contact page template",
        "category": "Marketing"
      },
      {
        "name": "Home",
        "slug": "simple-3-home",
        "description": "Home page template",
        "category": "Landing Page"
      }
    ]
  }
]

export default function TemplatesPage() {
  return (
    <div className="container py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Templates
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Production-ready templates built with pitsi/ui components. Start
            your next project with a solid foundation.
          </p>
        </div>

        <div className="space-y-16">
          {templateFamilies.map((family) => (
            <div key={family.id} className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">
                  {family.name}
                </h2>
                <p className="text-muted-foreground">{family.description}</p>
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {family.templates.map((template) => (
                  <div
                    key={template.slug}
                    className="group relative flex scroll-mt-20 flex-col gap-4"
                  >
                    <div className="overflow-hidden rounded-2xl border shadow-xs">
                      <div className="bg-background relative transition-all">
                        <div className="absolute right-3 top-3 z-10 rounded-full border bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                          {template.category}
                        </div>
                        <div data-slot="preview" className="overflow-hidden">
                          <div
                            data-align="center"
                            className="preview relative flex aspect-[4/3] w-full items-center justify-center"
                          >
                            <iframe
                              src={`/templates/preview/${template.slug}`}
                              className="pointer-events-none absolute inset-0 size-full border-0"
                              title={`${template.name} preview`}
                              sandbox="allow-scripts allow-same-origin"
                              loading="lazy"
                              style={{
                                transform: "scale(0.4)",
                                transformOrigin: "top left",
                                width: "250%",
                                height: "250%",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={`/templates/${template.slug}`}
                      className="group/link flex flex-col gap-1 px-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="group-hover/link:text-primary text-base font-medium transition-colors group-hover/link:underline">
                          {template.name}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {template.description}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
