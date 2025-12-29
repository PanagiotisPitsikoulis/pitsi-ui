"use client"

import * as React from "react"

import { type AppNavigationItem } from "@/lib/blocks/application.types"

import { AppCalendar1 } from "./app-calendar-1"
import { AppDashboard1 } from "./app-dashboard-1"
import { AppExercises1 } from "./app-exercises-1"
import { AppProgress1 } from "./app-progress-1"
import { AppSettings1 } from "./app-settings-1"
import { AppShell1 } from "./app-shell-1"
import { AppWorkoutLog1 } from "./app-workout-log-1"

const navigation: AppNavigationItem[] = [
  {
    name: "app-dashboard-1",
    label: "Dashboard",
    icon: "LayoutDashboard",
    shortcut: "1",
  },
  {
    name: "app-workout-log-1",
    label: "Log Workout",
    icon: "Dumbbell",
    shortcut: "2",
  },
  {
    name: "app-calendar-1",
    label: "Calendar",
    icon: "Calendar",
    shortcut: "3",
  },
  {
    name: "app-progress-1",
    label: "Progress",
    icon: "TrendingUp",
    shortcut: "4",
  },
  {
    name: "app-exercises-1",
    label: "Exercises",
    icon: "Library",
    shortcut: "5",
  },
  {
    name: "app-settings-1",
    label: "Settings",
    icon: "Settings",
    shortcut: "6",
  },
]

export function AppGymTracker() {
  const [activeView, setActiveView] = React.useState("app-dashboard-1")

  const handleNavigate = (viewName: string) => {
    setActiveView(viewName)
  }

  const handleLogWorkout = () => {
    setActiveView("app-workout-log-1")
  }

  const renderView = () => {
    switch (activeView) {
      case "app-dashboard-1":
        return <AppDashboard1 onLogWorkout={handleLogWorkout} />
      case "app-workout-log-1":
        return <AppWorkoutLog1 />
      case "app-calendar-1":
        return <AppCalendar1 />
      case "app-progress-1":
        return <AppProgress1 />
      case "app-exercises-1":
        return <AppExercises1 />
      case "app-settings-1":
        return <AppSettings1 />
      default:
        return <AppDashboard1 onLogWorkout={handleLogWorkout} />
    }
  }

  return (
    <AppShell1
      content={{
        appName: "Gym Tracker",
        navigation,
        user: {
          name: "John Doe",
          email: "john@example.com",
        },
        logo: {
          icon: "Dumbbell",
        },
      }}
      activeView={activeView}
      onNavigate={handleNavigate}
    >
      {renderView()}
    </AppShell1>
  )
}
