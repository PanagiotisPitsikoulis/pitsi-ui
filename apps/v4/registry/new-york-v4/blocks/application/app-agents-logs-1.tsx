"use client"

import * as React from "react"
import {
  AlertCircle,
  ChevronDown,
  Filter,
  Info,
  Pause,
  Play,
  RefreshCw,
  Search,
  Terminal,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu"
import { Input } from "@/registry/new-york-v4/ui/input"

const logs = [
  {
    timestamp: "14:32:18.456",
    level: "info",
    agent: "Data Analyzer",
    message:
      "Run completed successfully. Generated 5 insights from Q4 sales data.",
  },
  {
    timestamp: "14:32:15.123",
    level: "info",
    agent: "Data Analyzer",
    message: "Processing dataset with 15,000 rows...",
  },
  {
    timestamp: "14:31:45.789",
    level: "info",
    agent: "Data Analyzer",
    message: "Starting run with input: Analyze Q4 sales data",
  },
  {
    timestamp: "14:30:12.345",
    level: "info",
    agent: "Content Writer",
    message: "Generating blog post draft...",
  },
  {
    timestamp: "14:30:00.001",
    level: "info",
    agent: "Content Writer",
    message: "Starting run with input: Write blog post about AI",
  },
  {
    timestamp: "14:25:45.678",
    level: "info",
    agent: "Code Reviewer",
    message: "Run completed. Found 3 issues in PR #423.",
  },
  {
    timestamp: "14:25:30.234",
    level: "warn",
    agent: "Code Reviewer",
    message: "Large file detected (>1000 lines). Analysis may take longer.",
  },
  {
    timestamp: "14:25:00.567",
    level: "info",
    agent: "Code Reviewer",
    message: "Starting run with input: Review PR #423",
  },
  {
    timestamp: "14:20:12.890",
    level: "error",
    agent: "Email Responder",
    message: "Run failed: Rate limit exceeded. Please try again later.",
  },
  {
    timestamp: "14:20:00.123",
    level: "info",
    agent: "Email Responder",
    message: "Starting run with input: Draft response to complaint",
  },
  {
    timestamp: "14:15:21.456",
    level: "info",
    agent: "Data Analyzer",
    message: "Run completed. Generated 8 comparison charts.",
  },
  {
    timestamp: "14:15:00.789",
    level: "info",
    agent: "Data Analyzer",
    message: "Starting run with input: Compare monthly trends",
  },
]

export function AppAgentsLogs1() {
  const [search, setSearch] = React.useState("")
  const [levelFilter, setLevelFilter] = React.useState<string>("all")
  const [isPaused, setIsPaused] = React.useState(false)

  const filteredLogs = logs.filter((log) => {
    const matchesSearch =
      log.message.toLowerCase().includes(search.toLowerCase()) ||
      log.agent.toLowerCase().includes(search.toLowerCase())
    const matchesLevel = levelFilter === "all" || log.level === levelFilter
    return matchesSearch && matchesLevel
  })

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "error":
        return <AlertCircle className="size-4 text-red-500" />
      case "warn":
        return <AlertCircle className="size-4 text-yellow-500" />
      default:
        return <Info className="size-4 text-blue-500" />
    }
  }

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "error":
        return "destructive"
      case "warn":
        return "secondary"
      default:
        return "outline"
    }
  }

  return (
    <div className="p-4">
      <div className="mx-auto max-w-5xl space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-foreground text-3xl font-bold tracking-tight">
              Logs
            </h1>
            <p className="text-muted-foreground">
              Real-time agent execution logs
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsPaused(!isPaused)}
            >
              {isPaused ? (
                <Play className="size-4" />
              ) : (
                <Pause className="size-4" />
              )}
            </Button>
            <Button variant="outline" size="icon">
              <RefreshCw className="size-4" />
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Log Stream</CardTitle>
              {isPaused && <Badge variant="secondary">Paused</Badge>}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                <Input
                  placeholder="Search logs..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <Filter className="mr-2 size-4" />
                    {levelFilter === "all" ? "All Levels" : levelFilter}
                    <ChevronDown className="ml-2 size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setLevelFilter("all")}>
                    All Levels
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLevelFilter("info")}>
                    Info
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLevelFilter("warn")}>
                    Warning
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLevelFilter("error")}>
                    Error
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="bg-muted/50 max-h-[500px] overflow-y-auto rounded-lg border">
              <div className="divide-y">
                {filteredLogs.map((log, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex items-start gap-3 p-3 font-mono text-sm",
                      log.level === "error" && "bg-red-500/5",
                      log.level === "warn" && "bg-yellow-500/5"
                    )}
                  >
                    <span className="text-muted-foreground shrink-0 text-xs">
                      {log.timestamp}
                    </span>
                    <div className="shrink-0">{getLevelIcon(log.level)}</div>
                    <Badge
                      variant={getLevelBadge(log.level) as any}
                      className="shrink-0 text-xs"
                    >
                      {log.level.toUpperCase()}
                    </Badge>
                    <span className="shrink-0 font-medium">[{log.agent}]</span>
                    <span className="text-muted-foreground">{log.message}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">
                  {filteredLogs.length} entries
                </span>
                <span className="text-muted-foreground">
                  {logs.filter((l) => l.level === "error").length} errors
                </span>
                <span className="text-muted-foreground">
                  {logs.filter((l) => l.level === "warn").length} warnings
                </span>
              </div>
              <Button variant="ghost" size="sm">
                <Terminal className="mr-2 size-4" />
                Export Logs
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
