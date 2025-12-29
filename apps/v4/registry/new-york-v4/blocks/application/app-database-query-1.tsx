"use client"

import * as React from "react"
import { Clock, Play, Table } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"

const queryHistory = [
  {
    query: "SELECT * FROM users LIMIT 10",
    duration: "45ms",
    time: "2 min ago",
  },
  { query: "SELECT COUNT(*) FROM orders", duration: "12ms", time: "5 min ago" },
  {
    query: "UPDATE products SET stock = stock - 1",
    duration: "8ms",
    time: "10 min ago",
  },
]

const mockResults = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    created_at: "2024-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    created_at: "2024-01-16",
  },
  {
    id: 3,
    name: "Bob Wilson",
    email: "bob@example.com",
    created_at: "2024-01-17",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    created_at: "2024-01-18",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie@example.com",
    created_at: "2024-01-19",
  },
]

export function AppDatabaseQuery1() {
  const [query, setQuery] = React.useState("SELECT * FROM users LIMIT 10")
  const [isRunning, setIsRunning] = React.useState(false)
  const [hasResults, setHasResults] = React.useState(true)

  const handleRunQuery = () => {
    setIsRunning(true)
    setTimeout(() => {
      setIsRunning(false)
      setHasResults(true)
    }, 500)
  }

  return (
    <div className="p-4">
      <div className="mx-auto max-w-5xl space-y-4">
        <div>
          <h1 className="text-foreground text-3xl font-bold tracking-tight">
            Query
          </h1>
          <p className="text-muted-foreground">
            Execute SQL queries on your database
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_300px]">
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">SQL Editor</CardTitle>
                  <Button onClick={handleRunQuery} disabled={isRunning}>
                    <Play className="mr-2 size-4" />
                    {isRunning ? "Running..." : "Run Query"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="min-h-[150px] font-mono text-sm"
                  placeholder="Enter your SQL query..."
                />
              </CardContent>
            </Card>

            {hasResults && (
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Results</CardTitle>
                    <p className="text-muted-foreground text-sm">
                      5 rows · 45ms
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="px-4 py-2 text-left font-medium">
                            id
                          </th>
                          <th className="px-4 py-2 text-left font-medium">
                            name
                          </th>
                          <th className="px-4 py-2 text-left font-medium">
                            email
                          </th>
                          <th className="px-4 py-2 text-left font-medium">
                            created_at
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockResults.map((row) => (
                          <tr key={row.id} className="border-b last:border-0">
                            <td className="px-4 py-2 font-mono">{row.id}</td>
                            <td className="px-4 py-2">{row.name}</td>
                            <td className="px-4 py-2">{row.email}</td>
                            <td className="px-4 py-2 font-mono">
                              {row.created_at}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-base">Query History</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {queryHistory.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setQuery(item.query)}
                  className="hover:bg-muted/50 w-full rounded-lg border p-3 text-left transition-colors"
                >
                  <p className="truncate font-mono text-xs">{item.query}</p>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-muted-foreground text-xs">
                      {item.duration}
                    </span>
                    <span className="text-muted-foreground flex items-center text-xs">
                      <Clock className="mr-1 size-3" />
                      {item.time}
                    </span>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
