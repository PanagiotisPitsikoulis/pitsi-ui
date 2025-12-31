"use client"

import * as React from "react"

import { AppGymGains1 } from "./app-gym-gains-1"
import { AppGymHistory1 } from "./app-gym-history-1"
import { AppGymLibrary1 } from "./app-gym-library-1"
import { AppGymLog1 } from "./app-gym-log-1"
import { AppGymProfile1 } from "./app-gym-profile-1"
import { AppGymShell1 } from "./app-gym-shell-1"
import { AppGymToday1 } from "./app-gym-today-1"

export function AppGymTracker() {
  const [activeView, setActiveView] = React.useState("today")

  const handleNavigate = (viewName: string) => {
    setActiveView(viewName)
  }

  const handleLogWorkout = () => {
    setActiveView("log")
  }

  const handleFinishWorkout = () => {
    setActiveView("today")
  }

  const renderView = () => {
    switch (activeView) {
      case "today":
        return <AppGymToday1 onLogWorkout={handleLogWorkout} />
      case "log":
        return <AppGymLog1 onFinish={handleFinishWorkout} />
      case "history":
        return <AppGymHistory1 />
      case "gains":
        return <AppGymGains1 />
      case "library":
        return <AppGymLibrary1 />
      case "profile":
        return <AppGymProfile1 />
      default:
        return <AppGymToday1 onLogWorkout={handleLogWorkout} />
    }
  }

  return (
    <AppGymShell1 activeView={activeView} onNavigate={handleNavigate}>
      {renderView()}
    </AppGymShell1>
  )
}
