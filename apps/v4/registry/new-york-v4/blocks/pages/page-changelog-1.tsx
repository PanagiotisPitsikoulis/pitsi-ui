"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

// Striped Background Component
function StripedBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className
      )}
    >
      <div className="container relative mx-auto h-full px-6">
        <div className="absolute inset-0 flex justify-between">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="bg-border/30 h-full w-px" />
          ))}
        </div>
      </div>
    </div>
  )
}

// Icon Component
function UploadIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-48", className)}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="40"
        y="60"
        width="120"
        height="100"
        rx="8"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M100 90 L100 130"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M85 105 L100 90 L115 105"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M70 60 L70 45 C70 40 74 36 79 36 L121 36 C126 36 130 40 130 45 L130 60"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  )
}

// Types
type ChangeType = "major" | "minor" | "patch"

interface Change {
  type: ChangeType
  commit?: string
  description: string
}

interface ChangelogEntry {
  version: string
  changeType: ChangeType
  changes: Change[]
}

// Type Badge Component
function TypeBadge({ type }: { type: ChangeType }) {
  const labels: Record<ChangeType, string> = {
    major: "Major",
    minor: "Minor",
    patch: "Patch",
  }

  return (
    <Badge variant="outline" className="font-mono text-xs">
      {labels[type]}
    </Badge>
  )
}

// Default content
const pageChangelog1Defaults = {
  label: "Updates",
  title: "Changelog",
  description: "All notable changes to our components and documentation.",
  backLink: { label: "Back to home", href: "/" },
  entries: [
    {
      version: "2.0.0",
      changeType: "major" as ChangeType,
      changes: [
        { type: "major" as ChangeType, description: "Complete redesign of the component library" },
        { type: "major" as ChangeType, description: "New theming system with CSS variables" },
        { type: "minor" as ChangeType, description: "Added 20 new components" },
      ],
    },
    {
      version: "1.5.0",
      changeType: "minor" as ChangeType,
      changes: [
        { type: "minor" as ChangeType, description: "Added dark mode support" },
        { type: "minor" as ChangeType, description: "Improved accessibility across all components" },
        { type: "patch" as ChangeType, description: "Fixed button hover states" },
      ],
    },
    {
      version: "1.4.2",
      changeType: "patch" as ChangeType,
      changes: [
        { type: "patch" as ChangeType, description: "Fixed modal close animation" },
        { type: "patch" as ChangeType, description: "Resolved tooltip positioning issues" },
      ],
    },
  ] as ChangelogEntry[],
  commitBaseUrl: "https://github.com/your-org/your-repo/commit/",
}

interface PageChangelog1Props {
  label?: string
  title?: string
  description?: string
  backLink?: { label: string; href: string }
  entries?: ChangelogEntry[]
  commitBaseUrl?: string
  className?: string
}

export function PageChangelog1({
  label = pageChangelog1Defaults.label,
  title = pageChangelog1Defaults.title,
  description = pageChangelog1Defaults.description,
  backLink = pageChangelog1Defaults.backLink,
  entries = pageChangelog1Defaults.entries,
  commitBaseUrl = pageChangelog1Defaults.commitBaseUrl,
  className,
}: PageChangelog1Props) {
  return (
    <div
      className={cn(
        "relative -mt-14 min-h-screen overflow-x-clip",
        className
      )}
    >
      <StripedBackground />

      <div className="relative z-10 container px-6">
        <Spacer size="6xl" sizeMobile="4xl" />

        <div className="grid grid-cols-6 gap-6">
          {/* Left Column - Sticky Sidebar */}
          <div className="col-span-6 lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              {/* Back Link */}
              <Link
                href={backLink.href}
                className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-2 text-sm transition-colors"
              >
                <ArrowLeft className="size-4" />
                {backLink.label}
              </Link>

              {/* Label */}
              <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase">
                {label}
              </p>

              <Spacer size="md" sizeMobile="sm" />

              {/* Title */}
              <h1 className="text-4xl font-bold leading-[0.9] tracking-tight md:text-5xl lg:text-6xl">
                {title}
              </h1>

              <Spacer size="lg" sizeMobile="md" />

              {/* Description */}
              <p className="text-muted-foreground text-base md:text-lg">
                {description}
              </p>

              <Spacer size="6xl" sizeMobile="2xl" />

              {/* Icon */}
              <div className="flex justify-center">
                <UploadIcon className="text-primary w-48" />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-span-6 lg:col-span-3 lg:col-start-4">
            {entries.length === 0 ? (
              <p className="text-muted-foreground">No changelog entries found.</p>
            ) : (
              <div className="space-y-12">
                {entries.map((entry) => (
                  <article key={entry.version} className="relative">
                    <div className="border-primary border-l-2 pl-4">
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <Badge variant="outline" className="font-mono text-xs">
                          v{entry.version}
                        </Badge>
                        <TypeBadge type={entry.changeType} />
                      </div>

                      <h2 className="mb-2 text-xl font-bold tracking-tight md:text-2xl">
                        {entry.changeType === "major"
                          ? "Major Release"
                          : entry.changeType === "minor"
                            ? "New Features & Improvements"
                            : "Bug Fixes & Patches"}
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        {entry.changes.length} change
                        {entry.changes.length !== 1 ? "s" : ""} in this release
                      </p>
                    </div>

                    <ul className="mt-4 space-y-3 pl-8">
                      {entry.changes.map((change, idx) => (
                        <li
                          key={idx}
                          className="text-muted-foreground flex items-start gap-2 text-sm"
                        >
                          <span className="bg-muted-foreground mt-1.5 size-1.5 shrink-0 rounded-full" />
                          <span className="flex flex-col gap-1">
                            <span className="text-foreground">{change.description}</span>
                            {change.commit && (
                              <a
                                href={`${commitBaseUrl}${change.commit}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground/70 hover:text-foreground font-mono text-xs transition-colors"
                              >
                                {change.commit.slice(0, 7)}
                              </a>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>

        <Spacer size="6xl" sizeMobile="4xl" />
      </div>
    </div>
  )
}
