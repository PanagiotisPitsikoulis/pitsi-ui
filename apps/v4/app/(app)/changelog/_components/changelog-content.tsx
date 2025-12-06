"use client"

import { Badge } from "@/registry/new-york-v4/ui/badge"

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

interface ChangelogContentProps {
  entries: ChangelogEntry[]
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

export function ChangelogContent({ entries }: ChangelogContentProps) {
  if (entries.length === 0) {
    return <p className="text-muted-foreground">No changelog entries found.</p>
  }

  return (
    <div className="space-y-12">
      {entries.map((entry) => (
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
                      href={`https://github.com/PanagiotisPitsikoulis/pitsi-ui/commit/${change.commit}`}
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
  )
}
