"use client"

import * as React from "react"

import { AppAgentsDashboard1 } from "@/registry/new-york-v4/blocks/application/app-agents-dashboard-1"
import { AppAgentsList1 } from "@/registry/new-york-v4/blocks/application/app-agents-list-1"
import { AppAgentsLogs1 } from "@/registry/new-york-v4/blocks/application/app-agents-logs-1"
import { AppAgentsRuns1 } from "@/registry/new-york-v4/blocks/application/app-agents-runs-1"
import { AppAgentsSettings1 } from "@/registry/new-york-v4/blocks/application/app-agents-settings-1"
import { AppAgentsShell1 } from "@/registry/new-york-v4/blocks/application/app-agents-shell-1"

type AgentsView = "dashboard" | "agents" | "runs" | "logs" | "settings"

export function AppAgents() {
  const [activeView, setActiveView] = React.useState<AgentsView>("dashboard")

  const handleNavigate = (view: string) => {
    setActiveView(view as AgentsView)
  }

  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return (
          <AppAgentsDashboard1 onNewAgent={() => setActiveView("agents")} />
        )
      case "agents":
        return <AppAgentsList1 onNewAgent={() => {}} />
      case "runs":
        return <AppAgentsRuns1 />
      case "logs":
        return <AppAgentsLogs1 />
      case "settings":
        return <AppAgentsSettings1 />
      default:
        return (
          <AppAgentsDashboard1 onNewAgent={() => setActiveView("agents")} />
        )
    }
  }

  return (
    <AppAgentsShell1 activeView={activeView} onNavigate={handleNavigate}>
      {renderContent()}
    </AppAgentsShell1>
  )
}
