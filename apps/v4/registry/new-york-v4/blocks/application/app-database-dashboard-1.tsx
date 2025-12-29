"use client"

import { Database, HardDrive, Plug, Table, TrendingUp } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"

const stats = [
  { title: "Total Tables", value: "24", change: "+2 this month", icon: Table },
  {
    title: "Total Rows",
    value: "1.2M",
    change: "+48K this week",
    icon: Database,
  },
  { title: "Active Connections", value: "8", change: "2 idle", icon: Plug },
  {
    title: "Storage Used",
    value: "4.2 GB",
    change: "68% of limit",
    icon: HardDrive,
  },
]

const recentQueries = [
  {
    query: "SELECT * FROM users WHERE...",
    duration: "124ms",
    rows: 1250,
    time: "2 min ago",
  },
  {
    query: "UPDATE products SET price...",
    duration: "45ms",
    rows: 1,
    time: "5 min ago",
  },
  {
    query: "INSERT INTO orders VALUES...",
    duration: "12ms",
    rows: 1,
    time: "8 min ago",
  },
]

const tables = [
  { name: "users", rows: 45230, size: "1.2 GB", lastUpdated: "2 min ago" },
  { name: "products", rows: 8450, size: "450 MB", lastUpdated: "1 hour ago" },
  { name: "orders", rows: 124500, size: "2.1 GB", lastUpdated: "5 min ago" },
  {
    name: "inventory",
    rows: 12300,
    size: "280 MB",
    lastUpdated: "3 hours ago",
  },
]

const queryVolume = [120, 145, 138, 165, 180, 195, 210]
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

interface DatabaseDashboardProps {
  onNewQuery?: () => void
}

export function AppDatabaseDashboard1({ onNewQuery }: DatabaseDashboardProps) {
  const maxVolume = Math.max(...queryVolume)
  const minVolume = Math.min(...queryVolume)
  const range = maxVolume - minVolume

  return (
    <div className="p-4">
      <div className="mx-auto max-w-5xl space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-foreground text-3xl font-bold tracking-tight">
              Overview
            </h1>
            <p className="text-muted-foreground">
              Monitor your database performance
            </p>
          </div>
          <Button onClick={onNewQuery}>New Query</Button>
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
                  <CardTitle>Query Volume</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Queries per day this week
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">1,153</p>
                  <p className="text-muted-foreground flex items-center justify-end text-xs">
                    <TrendingUp className="mr-1 size-3" />
                    +12% from last week
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex h-[200px] items-end gap-2">
                {queryVolume.map((volume, i) => (
                  <div
                    key={i}
                    className="flex flex-1 flex-col items-center gap-2"
                  >
                    <div className="relative flex w-full flex-col items-center">
                      <span className="text-muted-foreground mb-1 text-[10px]">
                        {volume}
                      </span>
                      <div
                        className="w-full rounded-t transition-all hover:opacity-80"
                        style={{
                          height: `${((volume - minVolume + 20) / (range + 40)) * 150}px`,
                          backgroundColor: "var(--brand)",
                          opacity: i === queryVolume.length - 1 ? 1 : 0.5,
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
              <CardTitle>Top Tables</CardTitle>
              <p className="text-muted-foreground text-sm">By row count</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tables.map((table) => (
                  <div key={table.name} className="flex items-center gap-4">
                    <div className="bg-muted flex size-10 items-center justify-center rounded-lg">
                      <Table className="text-muted-foreground size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{table.name}</p>
                        <p className="font-bold">
                          {table.rows.toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-muted-foreground text-xs">
                          {table.size}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {table.lastUpdated}
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
            <CardTitle>Recent Queries</CardTitle>
            <p className="text-muted-foreground text-sm">
              Latest executed queries
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentQueries.map((query, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-mono text-sm">{query.query}</p>
                    <p className="text-muted-foreground text-xs">
                      {query.time}
                    </p>
                  </div>
                  <div className="flex gap-4 text-right">
                    <div>
                      <p className="text-sm font-medium">{query.duration}</p>
                      <p className="text-muted-foreground text-xs">Duration</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{query.rows}</p>
                      <p className="text-muted-foreground text-xs">Rows</p>
                    </div>
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
