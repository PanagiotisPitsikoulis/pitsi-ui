"use client"

import * as React from "react"
import {
  Bot,
  Calendar,
  ChevronDown,
  Clock,
  Filter,
  Search,
  Zap,
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

const runs = [
  {
    id: "run-001",
    agent: "Data Analyzer",
    status: "completed",
    startTime: "2024-01-20 14:32:15",
    duration: "2m 34s",
    tokens: 12400,
    input: "Analyze Q4 sales data",
    output: "Generated 5 insights",
  },
  {
    id: "run-002",
    agent: "Content Writer",
    status: "running",
    startTime: "2024-01-20 14:30:00",
    duration: "1m 12s",
    tokens: 8200,
    input: "Write blog post about AI",
    output: "In progress...",
  },
  {
    id: "run-003",
    agent: "Code Reviewer",
    status: "completed",
    startTime: "2024-01-20 14:25:00",
    duration: "45s",
    tokens: 3100,
    input: "Review PR #423",
    output: "Found 3 issues",
  },
  {
    id: "run-004",
    agent: "Email Responder",
    status: "failed",
    startTime: "2024-01-20 14:20:00",
    duration: "12s",
    tokens: 450,
    input: "Draft response to complaint",
    output: "Rate limit exceeded",
  },
  {
    id: "run-005",
    agent: "Data Analyzer",
    status: "completed",
    startTime: "2024-01-20 14:15:00",
    duration: "3m 21s",
    tokens: 15600,
    input: "Compare monthly trends",
    output: "Generated 8 charts",
  },
  {
    id: "run-006",
    agent: "Research Assistant",
    status: "completed",
    startTime: "2024-01-20 14:00:00",
    duration: "5m 45s",
    tokens: 24000,
    input: "Research AI regulations",
    output: "Summarized 12 papers",
  },
  {
    id: "run-007",
    agent: "Content Writer",
    status: "completed",
    startTime: "2024-01-20 13:45:00",
    duration: "4m 12s",
    tokens: 18500,
    input: "Write product description",
    output: "Created 3 variations",
  },
]

export function AppAgentsRuns1() {
  const [search, setSearch] = React.useState("")
  const [statusFilter, setStatusFilter] = React.useState<string>("all")
  const [selectedRun, setSelectedRun] = React.useState<string | null>(null)

  const filteredRuns = runs.filter((run) => {
    const matchesSearch =
      run.agent.toLowerCase().includes(search.toLowerCase()) ||
      run.input.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === "all" || run.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const selected = runs.find((r) => r.id === selectedRun)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "default"
      case "running":
        return "secondary"
      case "failed":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <div className="p-4">
      <div className="mx-auto max-w-5xl space-y-4">
        <div>
          <h1 className="text-foreground text-3xl font-bold tracking-tight">
            Runs
          </h1>
          <p className="text-muted-foreground">View agent execution history</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_350px]">
          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                <Input
                  placeholder="Search runs..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <Filter className="mr-2 size-4" />
                    {statusFilter === "all" ? "All Status" : statusFilter}
                    <ChevronDown className="ml-2 size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setStatusFilter("all")}>
                    All Status
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setStatusFilter("completed")}
                  >
                    Completed
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("running")}>
                    Running
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("failed")}>
                    Failed
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="space-y-2">
              {filteredRuns.map((run) => (
                <button
                  key={run.id}
                  onClick={() => setSelectedRun(run.id)}
                  className={cn(
                    "w-full rounded-lg border p-4 text-left transition-colors",
                    selectedRun === run.id
                      ? "border-foreground/20 bg-muted"
                      : "hover:bg-muted/50"
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="bg-muted flex size-10 items-center justify-center rounded-lg">
                        <Bot className="text-muted-foreground size-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{run.agent}</p>
                          <Badge variant={getStatusColor(run.status) as any}>
                            {run.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {run.input}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-4 text-xs">
                    <span className="text-muted-foreground flex items-center">
                      <Clock className="mr-1 size-3" />
                      {run.duration}
                    </span>
                    <span className="text-muted-foreground flex items-center">
                      <Zap className="mr-1 size-3" />
                      {run.tokens.toLocaleString()} tokens
                    </span>
                    <span className="text-muted-foreground flex items-center">
                      <Calendar className="mr-1 size-3" />
                      {run.startTime.split(" ")[1]}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {selected ? (
            <Card className="h-fit">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Run Details</CardTitle>
                  <Badge variant={getStatusColor(selected.status) as any}>
                    {selected.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Run ID</span>
                    <span className="font-mono text-xs">{selected.id}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Agent</span>
                    <span className="font-medium">{selected.agent}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Start Time</span>
                    <span className="font-medium">{selected.startTime}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{selected.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Tokens Used</span>
                    <span className="font-medium">
                      {selected.tokens.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-muted-foreground text-sm">Input</p>
                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-sm">{selected.input}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-muted-foreground text-sm">Output</p>
                  <div className="bg-muted rounded-lg p-3">
                    <p className="text-sm">{selected.output}</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  View Full Logs
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="flex h-[400px] items-center justify-center">
              <div className="text-center">
                <Clock className="text-muted-foreground mx-auto size-12" />
                <p className="text-muted-foreground mt-2 text-sm">
                  Select a run to view details
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
