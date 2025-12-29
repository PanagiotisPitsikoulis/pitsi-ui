"use client"

import * as React from "react"
import {
  Bot,
  ChevronRight,
  Clock,
  MoreHorizontal,
  Play,
  Plus,
  Search,
  Settings,
  Trash,
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu"
import { Input } from "@/registry/new-york-v4/ui/input"

const agents = [
  {
    id: "1",
    name: "Data Analyzer",
    description: "Analyzes datasets and generates insights",
    status: "running",
    model: "Claude 3.5 Sonnet",
    totalRuns: 342,
    successRate: 96,
    lastRun: "2 min ago",
    avgDuration: "2m 15s",
  },
  {
    id: "2",
    name: "Content Writer",
    description: "Creates blog posts and marketing copy",
    status: "running",
    model: "Claude 3.5 Sonnet",
    totalRuns: 256,
    successRate: 92,
    lastRun: "5 min ago",
    avgDuration: "3m 45s",
  },
  {
    id: "3",
    name: "Code Reviewer",
    description: "Reviews pull requests and suggests improvements",
    status: "idle",
    model: "Claude 3 Opus",
    totalRuns: 189,
    successRate: 98,
    lastRun: "10 min ago",
    avgDuration: "1m 30s",
  },
  {
    id: "4",
    name: "Email Responder",
    description: "Drafts responses to customer emails",
    status: "idle",
    model: "Claude 3 Haiku",
    totalRuns: 460,
    successRate: 89,
    lastRun: "15 min ago",
    avgDuration: "45s",
  },
  {
    id: "5",
    name: "Research Assistant",
    description: "Gathers and summarizes research papers",
    status: "idle",
    model: "Claude 3.5 Sonnet",
    totalRuns: 128,
    successRate: 94,
    lastRun: "1 hour ago",
    avgDuration: "5m 20s",
  },
]

interface AgentsListProps {
  onNewAgent?: () => void
}

export function AppAgentsList1({ onNewAgent }: AgentsListProps) {
  const [search, setSearch] = React.useState("")
  const [selectedAgent, setSelectedAgent] = React.useState<string | null>(null)

  const filteredAgents = agents.filter(
    (agent) =>
      agent.name.toLowerCase().includes(search.toLowerCase()) ||
      agent.description.toLowerCase().includes(search.toLowerCase())
  )

  const selected = agents.find((a) => a.id === selectedAgent)

  return (
    <div className="p-4">
      <div className="mx-auto max-w-5xl space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-foreground text-3xl font-bold tracking-tight">
              Agents
            </h1>
            <p className="text-muted-foreground">Manage your AI agents</p>
          </div>
          <Button onClick={onNewAgent}>
            <Plus className="mr-2 size-4" />
            New Agent
          </Button>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_350px]">
          <div className="space-y-4">
            <div className="relative">
              <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
              <Input
                placeholder="Search agents..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>

            <div className="space-y-2">
              {filteredAgents.map((agent) => (
                <button
                  key={agent.id}
                  onClick={() => setSelectedAgent(agent.id)}
                  className={cn(
                    "w-full rounded-lg border p-4 text-left transition-colors",
                    selectedAgent === agent.id
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
                          <p className="font-medium">{agent.name}</p>
                          <Badge
                            variant={
                              agent.status === "running"
                                ? "default"
                                : "secondary"
                            }
                            className="text-xs"
                          >
                            {agent.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {agent.description}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="text-muted-foreground size-5" />
                  </div>
                  <div className="mt-3 flex items-center gap-4 text-xs">
                    <span className="text-muted-foreground">
                      {agent.totalRuns} runs
                    </span>
                    <span className="text-muted-foreground">
                      {agent.successRate}% success
                    </span>
                    <span className="text-muted-foreground flex items-center">
                      <Clock className="mr-1 size-3" />
                      {agent.lastRun}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {selected ? (
            <Card className="h-fit">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex size-12 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: "var(--brand)",
                        color: "#ffffff",
                      }}
                    >
                      <Bot className="size-6" />
                    </div>
                    <div>
                      <CardTitle>{selected.name}</CardTitle>
                      <Badge
                        variant={
                          selected.status === "running"
                            ? "default"
                            : "secondary"
                        }
                        className="mt-1"
                      >
                        {selected.status}
                      </Badge>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Settings className="mr-2 size-4" />
                        Configure
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Play className="mr-2 size-4" />
                        Run Now
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash className="mr-2 size-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-sm">
                  {selected.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Model</span>
                    <span className="font-medium">{selected.model}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Total Runs</span>
                    <span className="font-medium">{selected.totalRuns}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Success Rate</span>
                    <span className="font-medium">{selected.successRate}%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Avg Duration</span>
                    <span className="font-medium">{selected.avgDuration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Last Run</span>
                    <span className="font-medium">{selected.lastRun}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1">
                    <Play className="mr-2 size-4" />
                    Run
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Settings className="mr-2 size-4" />
                    Configure
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="flex h-[400px] items-center justify-center">
              <div className="text-center">
                <Bot className="text-muted-foreground mx-auto size-12" />
                <p className="text-muted-foreground mt-2 text-sm">
                  Select an agent to view details
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
