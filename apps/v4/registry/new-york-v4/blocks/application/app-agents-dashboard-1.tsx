"use client"

import {
  Activity,
  Bot,
  CheckCircle,
  Clock,
  Play,
  TrendingUp,
  Zap,
} from "lucide-react"

import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"

const stats = [
  { title: "Active Agents", value: "8", change: "3 running now", icon: Bot },
  { title: "Total Runs", value: "1,247", change: "+89 today", icon: Play },
  {
    title: "Success Rate",
    value: "94.2%",
    change: "+1.2% this week",
    icon: CheckCircle,
  },
  { title: "Tokens Used", value: "2.4M", change: "68% of limit", icon: Zap },
]

const recentRuns = [
  {
    agent: "Data Analyzer",
    status: "completed",
    duration: "2m 34s",
    tokens: 12400,
    time: "2 min ago",
  },
  {
    agent: "Content Writer",
    status: "running",
    duration: "1m 12s",
    tokens: 8200,
    time: "5 min ago",
  },
  {
    agent: "Code Reviewer",
    status: "completed",
    duration: "45s",
    tokens: 3100,
    time: "10 min ago",
  },
  {
    agent: "Email Responder",
    status: "failed",
    duration: "12s",
    tokens: 450,
    time: "15 min ago",
  },
]

const agents = [
  { name: "Data Analyzer", runs: 342, successRate: 96, lastRun: "2 min ago" },
  { name: "Content Writer", runs: 256, successRate: 92, lastRun: "5 min ago" },
  { name: "Code Reviewer", runs: 189, successRate: 98, lastRun: "10 min ago" },
  {
    name: "Email Responder",
    runs: 460,
    successRate: 89,
    lastRun: "15 min ago",
  },
]

const dailyRuns = [45, 62, 58, 78, 82, 95, 89]
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

interface AgentsDashboardProps {
  onNewAgent?: () => void
}

export function AppAgentsDashboard1({ onNewAgent }: AgentsDashboardProps) {
  const maxRuns = Math.max(...dailyRuns)
  const minRuns = Math.min(...dailyRuns)
  const range = maxRuns - minRuns

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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-foreground text-3xl font-bold tracking-tight">
              Dashboard
            </h1>
            <p className="text-muted-foreground">Monitor your AI agents</p>
          </div>
          <Button onClick={onNewAgent}>
            <Bot className="mr-2 size-4" />
            New Agent
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-muted-foreground text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="text-muted-foreground size-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-muted-foreground text-xs">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Daily Runs</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Agent executions this week
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">509</p>
                  <p className="text-muted-foreground flex items-center justify-end text-xs">
                    <TrendingUp className="mr-1 size-3" />
                    +18% from last week
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex h-[200px] items-end gap-2">
                {dailyRuns.map((runs, i) => (
                  <div
                    key={i}
                    className="flex flex-1 flex-col items-center gap-2"
                  >
                    <div className="relative flex w-full flex-col items-center">
                      <span className="text-muted-foreground mb-1 text-[10px]">
                        {runs}
                      </span>
                      <div
                        className="w-full rounded-t transition-all hover:opacity-80"
                        style={{
                          height: `${((runs - minRuns + 10) / (range + 20)) * 150}px`,
                          backgroundColor: "var(--brand)",
                          opacity: i === dailyRuns.length - 1 ? 1 : 0.5,
                        }}
                      />
                    </div>
                    <span className="text-muted-foreground text-xs">
                      {days[i]}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Top Agents</CardTitle>
              <p className="text-muted-foreground text-sm">By total runs</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {agents.map((agent) => (
                  <div key={agent.name} className="flex items-center gap-4">
                    <div className="bg-muted flex size-10 items-center justify-center rounded-lg">
                      <Bot className="text-muted-foreground size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{agent.name}</p>
                        <p className="font-bold">{agent.runs}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-muted-foreground text-xs">
                          {agent.successRate}% success
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {agent.lastRun}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Runs</CardTitle>
            <p className="text-muted-foreground text-sm">
              Latest agent executions
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentRuns.map((run, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-muted flex size-10 items-center justify-center rounded-lg">
                      <Bot className="text-muted-foreground size-5" />
                    </div>
                    <div>
                      <p className="font-medium">{run.agent}</p>
                      <p className="text-muted-foreground text-xs">
                        {run.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-medium">{run.duration}</p>
                      <p className="text-muted-foreground text-xs">
                        {run.tokens.toLocaleString()} tokens
                      </p>
                    </div>
                    <Badge variant={getStatusColor(run.status) as any}>
                      {run.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
