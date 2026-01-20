"use client"

import * as React from "react"
import { Check, Clipboard, Code2, Eye } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs"

// Types
type ReadinessLevel = "alpha" | "beta" | "production"
type TierLevel = "free" | "pro"

interface CodeFile {
  filename: string
  language: string
  content: string
}

// Readiness Badge Component
function ReadinessIndicator({ readiness }: { readiness?: ReadinessLevel }) {
  if (!readiness) return null

  const config = {
    alpha: { label: "Alpha", variant: "secondary" as const },
    beta: { label: "Beta", variant: "outline" as const },
    production: { label: "Stable", variant: "default" as const },
  }

  const { label, variant } = config[readiness]

  return (
    <Badge variant={variant} className="text-xs">
      {label}
    </Badge>
  )
}

// Tier Badge Component
function TierIndicator({ tier }: { tier?: TierLevel }) {
  if (!tier || tier === "free") return null

  return (
    <Badge className="bg-primary/10 text-primary border-primary/20 border text-xs">
      Pro
    </Badge>
  )
}

// Copy Button
function CopyButton({ content }: { content: string }) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-8"
      onClick={handleCopy}
      aria-label={copied ? "Copied" : "Copy code"}
    >
      {copied ? <Check className="size-4" /> : <Clipboard className="size-4" />}
    </Button>
  )
}

// Code Block Component
function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="relative">
      <div className="absolute top-2 right-2">
        <CopyButton content={code} />
      </div>
      <pre className="bg-muted overflow-x-auto rounded-lg p-4 text-sm">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}

// Default data
const appComponentPreview1Defaults = {
  name: "button",
  readiness: "production" as ReadinessLevel,
  tier: "free" as TierLevel,
  align: "center" as const,
  justify: "center" as const,
  codeFiles: [
    {
      filename: "button.tsx",
      language: "tsx",
      content: `import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex gap-4">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}`,
    },
  ] as CodeFile[],
  component: (
    <div className="flex gap-4">
      <button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors">
        Default
      </button>
      <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors">
        Secondary
      </button>
      <button className="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors">
        Outline
      </button>
    </div>
  ),
}

interface AppComponentPreview1Props {
  name?: string
  readiness?: ReadinessLevel
  tier?: TierLevel
  align?: "center" | "start" | "end"
  justify?: "center" | "start" | "end"
  hideCode?: boolean
  component?: React.ReactNode
  codeFiles?: CodeFile[]
  className?: string
}

export function AppComponentPreview1({
  name = appComponentPreview1Defaults.name,
  readiness = appComponentPreview1Defaults.readiness,
  tier = appComponentPreview1Defaults.tier,
  align = appComponentPreview1Defaults.align,
  justify = appComponentPreview1Defaults.justify,
  hideCode = false,
  component = appComponentPreview1Defaults.component,
  codeFiles = appComponentPreview1Defaults.codeFiles,
  className,
}: AppComponentPreview1Props) {
  const [activeTab, setActiveTab] = React.useState<"preview" | "code">(
    "preview"
  )

  return (
    <div
      className={cn(
        "bg-background group relative flex flex-col overflow-hidden rounded-xl border shadow-sm",
        className
      )}
    >
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b px-4 py-2">
        <Tabs
          value={activeTab}
          onValueChange={(v) => setActiveTab(v as "preview" | "code")}
        >
          <TabsList className="h-8">
            <TabsTrigger value="preview" className="gap-2 px-3 text-xs">
              <Eye className="size-3.5" />
              Preview
            </TabsTrigger>
            {!hideCode && (
              <TabsTrigger value="code" className="gap-2 px-3 text-xs">
                <Code2 className="size-3.5" />
                Code
              </TabsTrigger>
            )}
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-2">
          <ReadinessIndicator readiness={readiness} />
          <TierIndicator tier={tier} />
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        {/* Preview */}
        {activeTab === "preview" && (
          <div
            data-align={align}
            data-justify={justify}
            className={cn(
              "preview bg-background relative flex h-[400px] w-full overflow-auto p-8 data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=start]:justify-start"
            )}
          >
            {component}
          </div>
        )}

        {/* Code */}
        {activeTab === "code" && !hideCode && (
          <div className="max-h-[500px] overflow-auto">
            {codeFiles.length === 1 ? (
              <CodeBlock
                code={codeFiles[0].content}
                language={codeFiles[0].language}
              />
            ) : (
              <Tabs defaultValue={codeFiles[0]?.filename}>
                <div className="border-b px-4">
                  <TabsList className="h-10 bg-transparent p-0">
                    {codeFiles.map((file) => (
                      <TabsTrigger
                        key={file.filename}
                        value={file.filename}
                        className="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:border-primary rounded-none border-b-2 border-transparent px-4 py-2 text-sm"
                      >
                        {file.filename}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                {codeFiles.map((file) => (
                  <TabsContent
                    key={file.filename}
                    value={file.filename}
                    className="m-0"
                  >
                    <CodeBlock code={file.content} language={file.language} />
                  </TabsContent>
                ))}
              </Tabs>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
