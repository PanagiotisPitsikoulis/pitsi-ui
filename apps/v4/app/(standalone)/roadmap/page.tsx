import { Metadata } from "next"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { CheckCircle2, Circle, Clock, ArrowRight } from "lucide-react"

const title = "Product Roadmap"
const description =
  "Track our progress and see what's coming next. We're committed to transparency and continuous improvement."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

interface RoadmapItem {
  title: string
  description: string
  date: string
  status: "completed" | "in-progress" | "planned"
  features: string[]
}

const roadmapData: RoadmapItem[] = [
  {
    title: "Base Release",
    description: "Initial public release with core features and foundation",
    date: "Nov 30, 2025",
    status: "in-progress",
    features: [
      "1000+ beautifully designed blocks",
      "80+ deeply themed components",
      "Full shadcn/ui API compatibility",
      "MCP server integration",
      "Payload CMS compatibility",
    ],
  },
  {
    title: "Advanced Themes Support",
    description: "Enhanced theming system with more customization options",
    date: "Dec 30, 2025",
    status: "planned",
    features: [
      "Deep theme system",
      "Decorations API",
      "Global styling presets",
      "30+ animation variants",
      "Advanced color palettes",
    ],
  },
  {
    title: "React Native Port",
    description: "Bring pitsi/ui to mobile with React Native support",
    date: "Feb 28, 2026",
    status: "planned",
    features: [
      "Cross-platform components",
      "Native performance optimization",
      "Design tutorials and resources",
      "Mobile-first examples",
      "Expo integration",
    ],
  },
  {
    title: "AI-Powered Design Tool",
    description:
      "Intelligent block recommendations and website composition assistant",
    date: "Mar 30, 2026",
    status: "planned",
    features: [
      "Graph database for block relationships",
      "Smart block recommendations",
      "Activity-based suggestions",
      "Auto-composition of blocks",
      "Design pattern analysis",
    ],
  },
  {
    title: "pitsi/ui Pencil",
    description: "Visual editor with AI integration for local development",
    date: "Apr 30, 2026",
    status: "planned",
    features: [
      "Visual website editing",
      "Real-time code synchronization",
      "AI-assisted modifications",
      "Local file system integration",
      "Component-level editing",
    ],
  },
  {
    title: "Bob Code & Bob Studio",
    description: "Advanced development tools and visual design studio",
    date: "May 30, 2026",
    status: "planned",
    features: [
      "Bob Code CLI tool",
      "Bob Studio visual editor",
      "Enhanced developer experience",
      "Team collaboration features",
      "Advanced workflow automation",
    ],
  },
]

function StatusIcon({ status }: { status: RoadmapItem["status"] }) {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="size-5 text-[var(--success)]" />
    case "in-progress":
      return <Clock className="size-5 text-[var(--warning)]" />
    case "planned":
      return <Circle className="size-5 text-muted-foreground" />
  }
}

function StatusBadge({ status }: { status: RoadmapItem["status"] }) {
  const variants = {
    completed: "success" as const,
    "in-progress": "warning" as const,
    planned: "outline" as const,
  }

  const labels = {
    completed: "Completed",
    "in-progress": "In Progress",
    planned: "Planned",
  }

  return <Badge variant={variants[status]}>{labels[status]}</Badge>
}

export default function RoadmapPage() {
  return (
    <div className="bg-page flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6 md:py-12 lg:px-8 lg:py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Product Roadmap
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
            Track our progress and see what's coming next. We're committed to
            transparency and continuous improvement.
          </p>
        </div>

        {/* Release Schedule Overview */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Release Schedule Overview</CardTitle>
            <CardDescription>
              Our commitment to delivering quality content on a consistent
              schedule
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col gap-2">
                <div className="text-muted-foreground text-sm font-medium">
                  Base Release
                </div>
                <div className="text-2xl font-bold">Nov 30, 2025</div>
                <div className="text-muted-foreground text-sm">
                  1000+ blocks + core features
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-muted-foreground text-sm font-medium">
                  Weekly Releases
                </div>
                <div className="text-2xl font-bold">100 blocks/week</div>
                <div className="text-muted-foreground text-sm">
                  Continuous content updates
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-muted-foreground text-sm font-medium">
                  Major Updates
                </div>
                <div className="text-2xl font-bold">Every month</div>
                <div className="text-muted-foreground text-sm">
                  New features and improvements
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[22px] top-0 h-full w-0.5 bg-border md:left-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {roadmapData.map((item, index) => (
              <div
                key={index}
                className="relative grid gap-6 md:grid-cols-2 md:gap-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-[18px] z-10 rounded-full bg-background p-1 md:left-1/2 md:-translate-x-1/2">
                  <StatusIcon status={item.status} />
                </div>

                {/* Content - alternating sides on desktop */}
                <div
                  className={cn(
                    "pl-16 md:pl-0",
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"
                  )}
                >
                  <Card className="transition-all hover:shadow-md">
                    <CardHeader>
                      <div
                        className={cn(
                          "mb-2 flex items-center gap-2",
                          index % 2 === 0 ? "md:flex-row-reverse md:justify-end" : ""
                        )}
                      >
                        <StatusBadge status={item.status} />
                        <span className="text-muted-foreground text-sm font-medium">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="text-base">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className={cn(
                              "flex items-start gap-2 text-sm",
                              index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
                            )}
                          >
                            <ArrowRight className="text-primary mt-0.5 size-4 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-accent/50 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">
                Want to influence our roadmap?
              </CardTitle>
              <CardDescription className="text-base">
                We're always listening to our community. Share your ideas and
                help shape the future of pitsi/ui.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg">Request a Feature</Button>
                <Button size="lg" variant="outline">
                  Join Discord
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
