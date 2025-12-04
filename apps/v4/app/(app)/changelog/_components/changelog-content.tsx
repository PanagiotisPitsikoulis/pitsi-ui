"use client"

import { useState } from "react"

import { Badge } from "@/registry/new-york-v4/ui/badge"

type Project = "ui" | "cli"
type ChangeType = "major" | "minor" | "patch"

interface CliChange {
  type: ChangeType
  pr?: string
  author?: string
  description: string
}

interface CliChangelogEntry {
  version: string
  changeType: ChangeType
  changes: CliChange[]
}

interface UiChangelogEntry {
  version: string
  date: string
  title: string
  changes: string[]
}

interface ChangelogContentProps {
  uiEntries: UiChangelogEntry[]
  cliEntries: CliChangelogEntry[]
}

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

export function ChangelogContent({
  uiEntries,
  cliEntries,
}: ChangelogContentProps) {
  const [activeProject, setActiveProject] = useState<Project>("ui")

  return (
    <>
      <div className="mb-8 flex gap-2">
        <button
          onClick={() => setActiveProject("ui")}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            activeProject === "ui"
              ? "bg-foreground text-background"
              : "bg-muted text-muted-foreground hover:text-foreground"
          }`}
        >
          pitsi/ui
        </button>
        <button
          onClick={() => setActiveProject("cli")}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            activeProject === "cli"
              ? "bg-foreground text-background"
              : "bg-muted text-muted-foreground hover:text-foreground"
          }`}
        >
          CLI
        </button>
      </div>

      <div className="space-y-12">
        {activeProject === "ui" ? (
          uiEntries.length === 0 ? (
            <p className="text-muted-foreground">No changelog entries found.</p>
          ) : (
            uiEntries.map((entry) => (
              <article key={entry.version} className="relative">
                <div className="border-brand border-l-2 pl-4">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <Badge variant="outline" className="font-mono text-xs">
                      v{entry.version}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {entry.date}
                    </span>
                  </div>

                  <h2 className="display mb-2 text-xl tracking-tight md:text-2xl">
                    {entry.title}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {entry.changes.length} change
                    {entry.changes.length !== 1 ? "s" : ""} in this release
                  </p>
                </div>

                <ul className="mt-4 space-y-2 pl-8">
                  {entry.changes.map((change, idx) => (
                    <li
                      key={idx}
                      className="text-muted-foreground flex items-start gap-2 text-sm"
                    >
                      <span className="bg-muted-foreground mt-1.5 size-1.5 shrink-0 rounded-full" />
                      <span className="text-foreground">{change}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))
          )
        ) : cliEntries.length === 0 ? (
          <p className="text-muted-foreground">No changelog entries found.</p>
        ) : (
          cliEntries.slice(0, 20).map((entry) => (
            <article key={entry.version} className="relative">
              <div className="border-brand border-l-2 pl-4">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <Badge variant="outline" className="font-mono text-xs">
                    v{entry.version}
                  </Badge>
                  <TypeBadge type={entry.changeType} />
                </div>

                <h2 className="display mb-2 text-xl tracking-tight md:text-2xl">
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
                {entry.changes.slice(0, 8).map((change, idx) => (
                  <li
                    key={idx}
                    className="text-muted-foreground flex items-start gap-2 text-sm"
                  >
                    <span className="bg-muted-foreground mt-1.5 size-1.5 shrink-0 rounded-full" />
                    <span className="flex flex-col gap-1">
                      <span className="text-foreground">
                        {change.description}
                      </span>
                      {(change.pr || change.author) && (
                        <span className="text-muted-foreground/70 flex items-center gap-2 text-xs">
                          {change.pr && (
                            <a
                              href={`https://github.com/PanagiotisPitsikoulis/pitsi-ui/pull/${change.pr}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-foreground transition-colors"
                            >
                              #{change.pr}
                            </a>
                          )}
                          {change.author && (
                            <a
                              href={`https://github.com/${change.author}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-foreground transition-colors"
                            >
                              @{change.author}
                            </a>
                          )}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
                {entry.changes.length > 8 && (
                  <li className="text-muted-foreground pl-3.5 text-sm">
                    +{entry.changes.length - 8} more changes
                  </li>
                )}
              </ul>
            </article>
          ))
        )}
      </div>
    </>
  )
}
