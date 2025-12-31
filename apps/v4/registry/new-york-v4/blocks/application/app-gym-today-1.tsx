"use client"

import { ArrowRight, Dumbbell, Flame, Trophy, Weight } from "@/lib/icons"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

const stats = [
  {
    label: "VOLUME",
    value: "24.5k",
    unit: "kg",
    change: "+12%",
    positive: true,
  },
  {
    label: "STREAK",
    value: "12",
    unit: "days",
    change: "Best!",
    positive: true,
  },
  {
    label: "PRs",
    value: "6",
    unit: "this month",
    change: "+2",
    positive: true,
  },
]

const weekDays = [
  { day: "Mon", completed: true, type: "push" },
  { day: "Tue", completed: true, type: "pull" },
  { day: "Wed", completed: false, type: null },
  { day: "Thu", completed: true, type: "legs" },
  { day: "Fri", completed: true, type: "push" },
  { day: "Sat", completed: false, type: null },
  { day: "Sun", completed: false, type: null },
]

const upcomingSets = [
  {
    exercise: "Bench Press",
    lastWeight: "100kg",
    targetWeight: "102.5kg",
    lastReps: "5×5",
    targetReps: "5×5",
    pr: "107.5kg",
  },
  {
    exercise: "Incline DB Press",
    lastWeight: "32kg",
    targetWeight: "32kg",
    lastReps: "4×10",
    targetReps: "4×12",
    pr: "36kg",
  },
  {
    exercise: "Overhead Press",
    lastWeight: "57.5kg",
    targetWeight: "60kg",
    lastReps: "5×5",
    targetReps: "5×5",
    pr: "65kg",
  },
  {
    exercise: "Lateral Raises",
    lastWeight: "12kg",
    targetWeight: "12kg",
    lastReps: "3×12",
    targetReps: "3×15",
    pr: "14kg",
  },
]

interface AppGymToday1Props {
  onLogWorkout?: () => void
}

export function AppGymToday1({ onLogWorkout }: AppGymToday1Props) {
  const hour = new Date().getHours()
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening"

  return (
    <div className="p-6">
      <div className="mx-auto max-w-3xl space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-foreground text-3xl font-bold tracking-tight">
            {greeting}, John
          </h1>
          <p className="text-muted-foreground mt-1">
            Push Day scheduled{" "}
            <span className="text-foreground">· 5 exercises</span>
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card rounded-xl p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-muted-foreground text-[10px] font-medium tracking-wider uppercase">
                {stat.label}
              </p>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl font-bold tabular-nums">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-sm">
                  {stat.unit}
                </span>
              </div>
              <p
                className={cn(
                  "mt-0.5 text-xs font-medium",
                  stat.positive ? "text-emerald-600" : "text-muted-foreground"
                )}
              >
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Week Progress */}
        <div className="bg-card rounded-xl p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-[10px] font-medium tracking-wider uppercase">
                Your Week
              </p>
              <p className="text-foreground mt-0.5 text-sm">
                <span className="font-semibold">4 of 5</span> workouts completed
              </p>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground text-xs">On track</p>
            </div>
          </div>
          <div className="flex gap-2">
            {weekDays.map((day) => (
              <div
                key={day.day}
                className="flex flex-1 flex-col items-center gap-2"
              >
                <div
                  className={cn(
                    "flex size-10 items-center justify-center rounded-lg transition-colors",
                    day.completed
                      ? "text-white"
                      : "bg-muted text-muted-foreground"
                  )}
                  style={
                    day.completed
                      ? { backgroundColor: "var(--brand)" }
                      : undefined
                  }
                >
                  {day.completed ? (
                    <Dumbbell className="size-4" />
                  ) : (
                    <span className="text-xs">—</span>
                  )}
                </div>
                <span className="text-muted-foreground text-xs">{day.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Sets */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-[10px] font-medium tracking-wider uppercase">
                Upcoming Sets
              </p>
              <p className="text-muted-foreground mt-0.5 text-sm">
                Progressive overload targets from last Push Day
              </p>
            </div>
            <Button variant="ghost" size="sm" onClick={onLogWorkout}>
              Start <ArrowRight className="ml-1 size-3" />
            </Button>
          </div>

          <div className="space-y-3">
            {upcomingSets.map((exercise) => (
              <div
                key={exercise.exercise}
                className="bg-card flex items-center gap-4 rounded-xl p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className="flex size-10 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--brand) 15%, transparent)",
                  }}
                >
                  <Dumbbell
                    className="size-5"
                    style={{ color: "var(--brand)" }}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate font-medium">{exercise.exercise}</p>
                    <div className="flex items-center gap-2 text-sm tabular-nums">
                      <span className="text-muted-foreground">
                        {exercise.lastWeight}
                      </span>
                      <ArrowRight className="text-muted-foreground size-3" />
                      <span className="font-semibold">
                        {exercise.targetWeight}
                      </span>
                    </div>
                  </div>
                  <div className="mt-0.5 flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">
                      {exercise.lastReps} → {exercise.targetReps}
                    </span>
                    <span className="text-muted-foreground">
                      PR: {exercise.pr}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
