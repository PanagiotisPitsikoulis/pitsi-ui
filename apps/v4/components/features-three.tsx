"use client"

import { Bold, Calendar, Italic, MoreHorizontal, Strikethrough, Underline } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Card } from "@/registry/new-york-v4/ui/card"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/new-york-v4/ui/toggle-group"

export default function FeaturesSection() {
  return (
    <section>
      <div className="py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div>
            <h2 className="text-foreground mt-4 text-4xl font-semibold">
              Personal AI, with you Anywhere
            </h2>
            <p className="text-muted-foreground mt-4 mb-12 text-lg text-balance">
              Quick AI lives a single hotkey away - ready to quickly appear as a
              floating window above your other apps. Get instant assistance
              whether you're browsing, coding, or writing documents.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card variant="soft" className="p-6">
              <div className="flex aspect-video items-center justify-center">
                <CodeIllustration className="w-full" />
              </div>
              <div className="text-center">
                <h3 className="text-foreground text-xl font-semibold">
                  Marketing Campaigns
                </h3>
                <p className="text-muted-foreground mt-4 text-lg text-balance">
                  Effortlessly plan and execute your marketing campaigns
                  organized.
                </p>
              </div>
            </Card>
            <Card variant="soft" className="p-6">
              <div className="flex aspect-video items-center justify-center">
                <ScheduleIllustation className="border" />
              </div>
              <div className="text-center">
                <h3 className="text-foreground text-xl font-semibold">
                  AI Meeting Scheduler
                </h3>
                <p className="text-muted-foreground mt-4 text-lg text-balance">
                  Effortlessly book and manage your meetings. Stay on top of
                  your schedule.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

type IllustrationProps = {
  className?: string
  variant?: "elevated" | "outlined" | "mixed"
}

export const ScheduleIllustation = ({
  className,
  variant = "elevated",
}: IllustrationProps) => {
  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "bg-background absolute flex -translate-x-1/8 -translate-y-[110%] items-center gap-2 rounded-lg p-1",
          {
            "shadow-black-950/10 shadow-lg": variant === "elevated",
            "border-foreground/10 border": variant === "outlined",
            "border-foreground/10 border shadow-md shadow-black/5":
              variant === "mixed",
          }
        )}
      >
        <Button size="sm" className="rounded-sm">
          <Calendar className="size-3" />
          <span className="text-sm font-medium">Schedule</span>
        </Button>
        <span className="bg-border block h-4 w-px"></span>
        <ToggleGroup type="multiple" size="sm" className="gap-0.5 *:rounded-md">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
          >
            <Strikethrough className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
        <span className="bg-border block h-4 w-px"></span>
        <Button size="icon" className="size-8" variant="ghost">
          <MoreHorizontal className="size-3" />
        </Button>
      </div>
      <span>
        <span className="bg-secondary text-secondary-foreground py-1">
          Tomorrow 8:30 pm
        </span>{" "}
        is our priority.
      </span>
    </div>
  )
}

export const CodeIllustration = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]",
        className
      )}
    >
      <ul className="text-muted-foreground mx-auto w-fit font-mono text-2xl font-medium">
        {["Images", "Variables", "Pages", "Components", "Styles"].map(
          (item, index) => (
            <li
              key={index}
              className={cn(
                index == 2 &&
                  "text-foreground before:absolute before:-translate-x-[110%] before:text-orange-500 before:content-['Import']"
              )}
            >
              {item}
            </li>
          )
        )}
      </ul>
    </div>
  )
}
