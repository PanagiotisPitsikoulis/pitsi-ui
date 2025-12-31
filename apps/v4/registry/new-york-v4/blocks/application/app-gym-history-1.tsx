"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Dumbbell } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

interface Workout {
  type: "push" | "pull" | "legs"
  exercises: number
  volume: string
  duration: string
}

const workoutData: Record<number, Workout> = {
  2: { type: "push", exercises: 5, volume: "4,200 kg", duration: "58 min" },
  4: { type: "pull", exercises: 6, volume: "5,100 kg", duration: "62 min" },
  6: { type: "legs", exercises: 5, volume: "6,800 kg", duration: "55 min" },
  8: { type: "push", exercises: 5, volume: "4,350 kg", duration: "60 min" },
  10: { type: "pull", exercises: 6, volume: "5,250 kg", duration: "65 min" },
  12: { type: "legs", exercises: 5, volume: "7,100 kg", duration: "58 min" },
  14: { type: "push", exercises: 5, volume: "4,500 kg", duration: "62 min" },
  16: { type: "pull", exercises: 6, volume: "5,400 kg", duration: "60 min" },
  18: { type: "legs", exercises: 5, volume: "7,300 kg", duration: "56 min" },
  20: { type: "push", exercises: 5, volume: "4,600 kg", duration: "59 min" },
  22: { type: "pull", exercises: 6, volume: "5,500 kg", duration: "63 min" },
  24: { type: "legs", exercises: 5, volume: "7,450 kg", duration: "57 min" },
}

const typeColors = {
  push: "bg-blue-500",
  pull: "bg-amber-500",
  legs: "bg-emerald-500",
}

const typeLabels = {
  push: "Push",
  pull: "Pull",
  legs: "Legs",
}

export function AppGymHistory1() {
  const [selectedDate, setSelectedDate] = React.useState<number | null>(24)
  const [currentMonth, setCurrentMonth] = React.useState(new Date(2024, 0, 1))

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate()
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay()
  const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1

  const monthName = currentMonth.toLocaleString("default", {
    month: "long",
    year: "numeric",
  })

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: adjustedFirstDay }, (_, i) => i)

  const selectedWorkout = selectedDate ? workoutData[selectedDate] : null

  // Calculate weekly volume trend
  const weeklyVolumes = [18500, 19200, 20100, 21100]

  return (
    <div className="p-6">
      <div className="mx-auto max-w-3xl space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-foreground text-2xl font-bold tracking-tight">
            History
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Your training history and workout calendar
          </p>
        </div>

        {/* Volume Trend */}
        <div className="bg-card rounded-xl p-4 shadow-sm">
          <p className="text-muted-foreground mb-3 text-[10px] font-medium tracking-wider uppercase">
            Weekly Volume Trend
          </p>
          <div className="flex h-16 items-end gap-2">
            {weeklyVolumes.map((vol, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className="w-full rounded-t transition-all"
                  style={{
                    height: `${(vol / Math.max(...weeklyVolumes)) * 100}%`,
                    backgroundColor:
                      i === weeklyVolumes.length - 1
                        ? "var(--brand)"
                        : "var(--muted)",
                  }}
                />
                <span className="text-muted-foreground text-[10px]">
                  W{i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-card rounded-xl p-5 shadow-sm">
          {/* Month Navigation */}
          <div className="mb-4 flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setCurrentMonth(
                  new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth() - 1,
                    1
                  )
                )
              }
            >
              <ChevronLeft className="size-4" />
            </Button>
            <h2 className="text-lg font-semibold">{monthName}</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setCurrentMonth(
                  new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth() + 1,
                    1
                  )
                )
              }
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>

          {/* Day Headers */}
          <div className="mb-2 grid grid-cols-7 gap-1">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div
                key={day}
                className="text-muted-foreground py-2 text-center text-xs font-medium"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1">
            {emptyDays.map((i) => (
              <div key={`empty-${i}`} className="aspect-square" />
            ))}
            {days.map((day) => {
              const workout = workoutData[day]
              const isSelected = selectedDate === day

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(day)}
                  className={cn(
                    "relative flex aspect-square flex-col items-center justify-center rounded-lg text-sm transition-colors",
                    isSelected ? "ring-2 ring-offset-2" : "hover:bg-muted",
                    workout && !isSelected && "bg-muted/50"
                  )}
                  style={
                    isSelected
                      ? ({
                          "--tw-ring-color": "var(--brand)",
                        } as React.CSSProperties)
                      : undefined
                  }
                >
                  <span
                    className={cn(
                      "tabular-nums",
                      isSelected && "font-semibold"
                    )}
                  >
                    {day}
                  </span>
                  {workout && (
                    <div
                      className={cn(
                        "absolute bottom-1 size-1.5 rounded-full",
                        typeColors[workout.type]
                      )}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Legend */}
          <div className="mt-4 flex justify-center gap-4">
            {Object.entries(typeLabels).map(([type, label]) => (
              <div key={type} className="flex items-center gap-1.5">
                <div
                  className={cn(
                    "size-2 rounded-full",
                    typeColors[type as keyof typeof typeColors]
                  )}
                />
                <span className="text-muted-foreground text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Day Details */}
        {selectedWorkout && (
          <div className="bg-card rounded-xl p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "size-3 rounded-full",
                    typeColors[selectedWorkout.type]
                  )}
                />
                <h3 className="font-semibold">
                  {typeLabels[selectedWorkout.type]} Day
                </h3>
              </div>
              <span className="text-muted-foreground text-sm">
                Jan {selectedDate}, 2024
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold tabular-nums">
                  {selectedWorkout.exercises}
                </p>
                <p className="text-muted-foreground text-xs">exercises</p>
              </div>
              <div>
                <p className="text-2xl font-bold tabular-nums">
                  {selectedWorkout.volume}
                </p>
                <p className="text-muted-foreground text-xs">volume</p>
              </div>
              <div>
                <p className="text-2xl font-bold tabular-nums">
                  {selectedWorkout.duration}
                </p>
                <p className="text-muted-foreground text-xs">duration</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
