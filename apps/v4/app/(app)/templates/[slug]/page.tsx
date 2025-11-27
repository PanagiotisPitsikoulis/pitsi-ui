import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Code, Maximize2 } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"

const templates = {
  "agency-2-about": {
    "name": "About",
    "description": "About page template"
  },
  "agency-2-blog-post-biofertilizer-can-restore-soil-health-naturally": {
    "name": "Blog Post - Biofertilizer Can Restore Soil Health Naturally",
    "description": "Blog Post - Biofertilizer Can Restore Soil Health Naturally page template"
  },
  "agency-2-blog": {
    "name": "Blog",
    "description": "Blog page template"
  },
  "agency-2-blog-post-science-behind-biogas": {
    "name": "Blog Post - Science Behind Biogas",
    "description": "Blog Post - Science Behind Biogas page template"
  },
  "agency-2-contact": {
    "name": "Contact",
    "description": "Contact page template"
  },
  "agency-2-home": {
    "name": "Home",
    "description": "Home page template"
  },
  "agency-2-privacy-policy": {
    "name": "Privacy Policy",
    "description": "Privacy Policy page template"
  },
  "agency-2-project-green-pastures-dairy-biogas-plant": {
    "name": "Project - Green Pastures Dairy Biogas Plant",
    "description": "Project - Green Pastures Dairy Biogas Plant page template"
  },
  "agency-2-project-nyeri-co-digestion-pilot": {
    "name": "Project - Nyeri Co Digestion Pilot",
    "description": "Project - Nyeri Co Digestion Pilot page template"
  },
  "agency-2-projects": {
    "name": "Projects",
    "description": "Projects page template"
  },
  "agency-2-project-savannah-agro-processing-biogas-retrofit": {
    "name": "Project - Savannah Agro Processing Biogas Retrofit",
    "description": "Project - Savannah Agro Processing Biogas Retrofit page template"
  },
  "agency-2-services": {
    "name": "Services",
    "description": "Services page template"
  },
  "agency-2-terms-and-conditions": {
    "name": "Terms And Conditions",
    "description": "Terms And Conditions page template"
  },
  "simple-3-about": {
    "name": "About",
    "description": "About page template"
  },
  "simple-3-contact": {
    "name": "Contact",
    "description": "Contact page template"
  },
  "simple-3-home": {
    "name": "Home",
    "description": "Home page template"
  }
}

export async function generateStaticParams() {
  return Object.keys(templates).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const template = templates[slug as keyof typeof templates]

  if (!template) {
    return {
      title: "Template Not Found",
    }
  }

  return {
    title: `${template.name} Template`,
    description: template.description,
  }
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const template = templates[slug as keyof typeof templates]

  if (!template) {
    notFound()
  }

  const previewUrl = `/templates/preview/${slug}`

  return (
    <div className="relative flex h-screen flex-col">
      {/* Top bar with controls */}
      <div className="bg-background/95 supports-[backdrop-filter]:bg-background/60 z-50 border-b backdrop-blur">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/templates">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Templates
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href={previewUrl} target="_blank">
                <Maximize2 className="mr-2 h-4 w-4" />
                Open in New Tab
              </Link>
            </Button>
            <Button variant="outline" size="sm">
              <Code className="mr-2 h-4 w-4" />
              View Code
            </Button>
          </div>
        </div>
      </div>

      {/* Template iframe */}
      <div className="flex-1 overflow-hidden bg-white">
        <iframe
          key={slug}
          src={previewUrl}
          className="h-full w-full border-0"
          title={`${template.name} Template Preview`}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads"
          loading="eager"
        />
      </div>
    </div>
  )
}
