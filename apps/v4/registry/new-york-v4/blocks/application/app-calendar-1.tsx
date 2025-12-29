"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Dumbbell, Flame } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"

// Mock workout data
const workoutHistory: Record<
  string,
  { type: string; exercises: number; volume: number }
> = {
  "2024-01-02": { type: "Push", exercises: 5, volume: 4200 },
  "2024-01-04": { type: "Pull", exercises: 6, volume: 5100 },
  "2024-01-05": { type: "Legs", exercises: 5, volume: 6800 },
  "2024-01-08": { type: "Push", exercises: 5, volume: 4350 },
  "2024-01-10": { type: "Pull", exercises: 6, volume: 5200 },
  "2024-01-12": { type: "Legs", exercises: 5, volume: 7100 },
  "2024-01-15": { type: "Push", exercises: 5, volume: 4500 },
  "2024-01-17": { type: "Pull", exercises: 6, volume: 5350 },
  "2024-01-19": { type: "Legs", exercises: 5, volume: 7200 },
  "2024-01-22": { type: "Push", exercises: 5, volume: 4650 },
  "2024-01-24": { type: "Pull", exercises: 6, volume: 5500 },
  "2024-01-26": { type: "Legs", exercises: 5, volume: 7400 },
  "2024-01-29": { type: "Push", exercises: 5, volume: 4800 },
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay()
}

function formatDateKey(year: number, month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
}

export function AppCalendar1() {
  const [currentDate, setCurrentDate] = React.useState(new Date(2024, 0, 1)) // January 2024 for demo
  const [selectedDate, setSelectedDate] = React.useState<string | null>(null)

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
    setSelectedDate(null)
  }

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
    setSelectedDate(null)
  }

  // Calculate stats for the month
  const monthWorkouts = Object.entries(workoutHistory).filter(([date]) => {
    const d = new Date(date)
    return d.getFullYear() === year && d.getMonth() === month
  })

  const totalWorkouts = monthWorkouts.length
  const totalVolume = monthWorkouts.reduce((sum, [, w]) => sum + w.volume, 0)

  // Calculate streak
  const calculateStreak = () => {
    const today = new Date(2024, 0, 29) // Mock "today" for demo
    let streak = 0
    let currentDay = new Date(today)

    while (true) {
      const key = formatDateKey(
        currentDay.getFullYear(),
        currentDay.getMonth(),
        currentDay.getDate()
      )
      if (workoutHistory[key]) {
        streak++
        currentDay.setDate(currentDay.getDate() - 1)
      } else {
        // Allow one rest day
        currentDay.setDate(currentDay.getDate() - 1)
        const prevKey = formatDateKey(
          currentDay.getFullYear(),
          currentDay.getMonth(),
          currentDay.getDate()
        )
        if (workoutHistory[prevKey]) {
          continue
        }
        break
      }
      if (streak > 30) break // Safety limit
    }
    return streak
  }

  const streak = calculateStreak()

  // Generate calendar days
  const calendarDays: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null)
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  const selectedWorkout = selectedDate ? workoutHistory[selectedDate] : null

  return (
    <div className="p-4">
      <div className="mx-auto max-w-5xl space-y-4">
        {/* Header */}
        <div>
          <h1 className="text-foreground text-3xl font-bold tracking-tight">
            Calendar
          </h1>
          <p className="text-muted-foreground">Track your workout schedule</p>
        </div>

        {/* Stats row */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="bg-muted flex size-10 items-center justify-center rounded-lg">
                  <Dumbbell className="text-muted-foreground size-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{totalWorkouts}</p>
                  <p className="text-muted-foreground text-sm">
                    Workouts this month
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="bg-muted flex size-10 items-center justify-center rounded-lg">
                  <Flame className="text-muted-foreground size-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{streak}</p>
                  <p className="text-muted-foreground text-sm">Day streak</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="bg-muted flex size-10 items-center justify-center rounded-lg">
                  <span className="text-muted-foreground text-sm font-bold">
                    kg
                  </span>
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {(totalVolume / 1000).toFixed(1)}k
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Total volume (kg)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          {/* Calendar */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Button variant="ghost" size="icon" onClick={prevMonth}>
                  <ChevronLeft className="size-5" />
                </Button>
                <CardTitle className="text-lg">
                  {MONTHS[month]} {year}
                </CardTitle>
                <Button variant="ghost" size="icon" onClick={nextMonth}>
                  <ChevronRight className="size-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Day headers */}
              <div className="mb-2 grid grid-cols-7 gap-1">
                {DAYS.map((day) => (
                  <div
                    key={day}
                    className="text-muted-foreground py-2 text-center text-xs font-medium"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, i) => {
                  if (day === null) {
                    return <div key={`empty-${i}`} className="aspect-square" />
                  }

                  const dateKey = formatDateKey(year, month, day)
                  const workout = workoutHistory[dateKey]
                  const isSelected = selectedDate === dateKey
                  const isToday = dateKey === "2024-01-29" // Mock today

                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDate(workout ? dateKey : null)}
                      className={cn(
                        "relative flex aspect-square flex-col items-center justify-center gap-0.5 rounded-lg text-sm transition-colors",
                        workout && "cursor-pointer",
                        !workout && "text-muted-foreground cursor-default",
                        isSelected && "ring-foreground/20 ring-2 ring-offset-2",
                        isToday && "font-bold",
                        workout && !isSelected && "bg-muted",
                        workout && isSelected && "bg-foreground text-background"
                      )}
                    >
                      <span>{day}</span>
                      {workout && <Dumbbell className="size-3" />}
                    </button>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Selected workout details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Workout Details</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedWorkout ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted flex size-12 items-center justify-center rounded-lg">
                      <Dumbbell className="text-muted-foreground size-6" />
                    </div>
                    <div>
                      <p className="font-semibold">
                        {selectedWorkout.type} Day
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {selectedDate}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground text-sm">
                        Exercises
                      </span>
                      <span className="font-medium">
                        {selectedWorkout.exercises}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground text-sm">
                        Total Volume
                      </span>
                      <span className="font-medium">
                        {selectedWorkout.volume.toLocaleString()} kg
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-muted-foreground py-8 text-center">
                  <Dumbbell className="mx-auto mb-2 size-8 opacity-30" />
                  <p className="text-sm">Select a workout day to see details</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
