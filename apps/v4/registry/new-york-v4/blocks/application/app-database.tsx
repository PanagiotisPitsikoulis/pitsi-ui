"use client"

import * as React from "react"

import { AppDatabaseDashboard1 } from "@/registry/new-york-v4/blocks/application/app-database-dashboard-1"
import { AppDatabaseQuery1 } from "@/registry/new-york-v4/blocks/application/app-database-query-1"
import { AppDatabaseSettings1 } from "@/registry/new-york-v4/blocks/application/app-database-settings-1"
import { AppDatabaseShell1 } from "@/registry/new-york-v4/blocks/application/app-database-shell-1"
import { AppDatabaseTables1 } from "@/registry/new-york-v4/blocks/application/app-database-tables-1"

type DatabaseView = "overview" | "tables" | "query" | "connections" | "settings"

export function AppDatabase() {
  const [activeView, setActiveView] = React.useState<DatabaseView>("overview")

  const handleNavigate = (view: string) => {
    setActiveView(view as DatabaseView)
  }

  const renderContent = () => {
    switch (activeView) {
      case "overview":
        return (
          <AppDatabaseDashboard1 onNewQuery={() => setActiveView("query")} />
        )
      case "tables":
        return <AppDatabaseTables1 />
      case "query":
        return <AppDatabaseQuery1 />
      case "connections":
        return <AppDatabaseTables1 />
      case "settings":
        return <AppDatabaseSettings1 />
      default:
        return (
          <AppDatabaseDashboard1 onNewQuery={() => setActiveView("query")} />
        )
    }
  }

  return (
    <AppDatabaseShell1 activeView={activeView} onNavigate={handleNavigate}>
      {renderContent()}
    </AppDatabaseShell1>
  )
}
