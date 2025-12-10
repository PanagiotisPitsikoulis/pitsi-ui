import { LayoutGrid, LayoutGridItem } from "@/components/layout/layout-grid"
import { StripeBgGuides } from "@/components/layout/striped-bg-guides"
import { BackLink } from "@/components/navigation/back-link"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

export interface LegalSection {
  title: string
  content: string
}

export interface LegalPageContent {
  lastUpdated: string
  sections: LegalSection[]
}

interface LegalPageProps {
  title: string
  description: string
  content: LegalPageContent
}

function renderParagraph(paragraph: string, pIndex: number) {
  // Handle list items
  if (paragraph.startsWith("- ")) {
    const items = paragraph.split("\n")
    return (
      <ul key={pIndex} className="my-4 list-disc space-y-2 pl-6">
        {items.map((item, i) => (
          <li key={i} className="text-muted-foreground">
            {item.replace(/^-\s/, "").replace(/\*\*([^*]+)\*\*/g, "$1")}
          </li>
        ))}
      </ul>
    )
  }

  // Handle bold text
  if (paragraph.includes("**")) {
    const parts = paragraph.split(/(\*\*[^*]+\*\*)/)
    return (
      <p key={pIndex} className="text-muted-foreground mb-4 leading-relaxed">
        {parts.map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={i} className="text-foreground font-semibold">
                {part.replace(/\*\*/g, "")}
              </strong>
            )
          }
          return part
        })}
      </p>
    )
  }

  // Regular paragraph
  return (
    <p key={pIndex} className="text-muted-foreground mb-4 leading-relaxed">
      {paragraph}
    </p>
  )
}

export function LegalPage({ title, description, content }: LegalPageProps) {
  return (
    <div className="relative -mt-[56px] min-h-screen overflow-x-clip">
      <StripeBgGuides columnCount={6} animated={false} />

      <div className="relative z-10 container px-6">
        <Spacer size="6xl" sizeMobile="4xl" />
        <LayoutGrid>
          <LayoutGridItem span={6} spanLg={2}>
            <div className="lg:sticky lg:top-24">
              <BackLink href="/">Back to home</BackLink>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <time className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                  Last updated: {content.lastUpdated}
                </time>
              </div>
              <Spacer size="sm" sizeMobile="xs" />
              <h1 className="display text-3xl leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
                {title}
              </h1>
              <Spacer size="md" sizeMobile="sm" />
              <p className="text-muted-foreground text-base md:text-lg">
                {description}
              </p>
            </div>
          </LayoutGridItem>

          <LayoutGridItem span={6} spanLg={3} className="lg:col-start-4">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {content.sections.map((section, index) => (
                <div key={index} className="mb-10">
                  <h2 className="display mb-4 text-xl tracking-tight md:text-2xl">
                    {section.title}
                  </h2>
                  {section.content
                    .split("\n\n")
                    .map((paragraph, pIndex) =>
                      renderParagraph(paragraph, pIndex)
                    )}
                </div>
              ))}
            </div>
          </LayoutGridItem>
        </LayoutGrid>
        <Spacer size="6xl" sizeMobile="4xl" />
      </div>
    </div>
  )
}
