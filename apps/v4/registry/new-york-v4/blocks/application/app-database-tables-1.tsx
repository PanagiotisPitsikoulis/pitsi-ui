"use client"

import * as React from "react"
import { ChevronRight, Plus, Search, Table } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Input } from "@/registry/new-york-v4/ui/input"

const tables = [
  {
    name: "users",
    rows: 45230,
    columns: 12,
    size: "1.2 GB",
    lastUpdated: "2 min ago",
    status: "active",
  },
  {
    name: "products",
    rows: 8450,
    columns: 18,
    size: "450 MB",
    lastUpdated: "1 hour ago",
    status: "active",
  },
  {
    name: "orders",
    rows: 124500,
    columns: 15,
    size: "2.1 GB",
    lastUpdated: "5 min ago",
    status: "active",
  },
  {
    name: "inventory",
    rows: 12300,
    columns: 8,
    size: "280 MB",
    lastUpdated: "3 hours ago",
    status: "active",
  },
  {
    name: "customers",
    rows: 32100,
    columns: 14,
    size: "890 MB",
    lastUpdated: "10 min ago",
    status: "active",
  },
  {
    name: "transactions",
    rows: 89000,
    columns: 10,
    size: "1.8 GB",
    lastUpdated: "1 min ago",
    status: "active",
  },
  {
    name: "logs_archive",
    rows: 500000,
    columns: 6,
    size: "3.2 GB",
    lastUpdated: "1 day ago",
    status: "archived",
  },
  {
    name: "sessions",
    rows: 2400,
    columns: 5,
    size: "45 MB",
    lastUpdated: "30 sec ago",
    status: "active",
  },
]

interface DatabaseTablesProps {
  onSelectTable?: (tableName: string) => void
}

export function AppDatabaseTables1({ onSelectTable }: DatabaseTablesProps) {
  const [search, setSearch] = React.useState("")
  const [selectedTable, setSelectedTable] = React.useState<string | null>(null)

  const filteredTables = tables.filter((table) =>
    table.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleSelectTable = (tableName: string) => {
    setSelectedTable(tableName)
    onSelectTable?.(tableName)
  }

  const selected = tables.find((t) => t.name === selectedTable)

  return (
    <div className="p-4">
      <div className="mx-auto max-w-5xl space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-foreground text-3xl font-bold tracking-tight">
              Tables
            </h1>
            <p className="text-muted-foreground">
              Browse and manage database tables
            </p>
          </div>
          <Button>
            <Plus className="mr-2 size-4" />
            Create Table
          </Button>
        </div>

        <div className="relative">
          <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
          <Input
            placeholder="Search tables..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_350px]">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                All Tables ({filteredTables.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {filteredTables.map((table) => (
                  <button
                    key={table.name}
                    onClick={() => handleSelectTable(table.name)}
                    className={cn(
                      "flex w-full items-center gap-4 p-4 text-left transition-colors",
                      selectedTable === table.name
                        ? "bg-muted"
                        : "hover:bg-muted/50"
                    )}
                  >
                    <div className="bg-muted flex size-10 items-center justify-center rounded-lg">
                      <Table className="text-muted-foreground size-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{table.name}</p>
                        <Badge
                          variant={
                            table.status === "active" ? "default" : "secondary"
                          }
                        >
                          {table.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {table.rows.toLocaleString()} rows · {table.columns}{" "}
                        columns
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{table.size}</p>
                      <p className="text-muted-foreground text-xs">
                        {table.lastUpdated}
                      </p>
                    </div>
                    <ChevronRight className="text-muted-foreground size-4" />
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-base">Table Details</CardTitle>
            </CardHeader>
            <CardContent>
              {selected ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted flex size-12 items-center justify-center rounded-lg">
                      <Table className="text-muted-foreground size-6" />
                    </div>
                    <div>
                      <p className="font-semibold">{selected.name}</p>
                      <Badge
                        variant={
                          selected.status === "active" ? "default" : "secondary"
                        }
                      >
                        {selected.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-muted-foreground text-xs">Rows</p>
                      <p className="text-xl font-bold">
                        {selected.rows.toLocaleString()}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-muted-foreground text-xs">Columns</p>
                      <p className="text-xl font-bold">{selected.columns}</p>
                    </div>
                  </div>

                  <div className="space-y-2 border-t pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Size</span>
                      <span className="font-medium">{selected.size}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Last Updated
                      </span>
                      <span className="font-medium">
                        {selected.lastUpdated}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      View Data
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Query
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-muted-foreground py-8 text-center">
                  <Table className="mx-auto mb-2 size-8 opacity-30" />
                  <p className="text-sm">Select a table to view details</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
