"use client"

import {
  ArrowUpRight,
  Dumbbell,
  Flame,
  Plus,
  Target,
  TrendingUp,
  Trophy,
  Weight,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"

const stats = [
  {
    title: "This Week",
    value: "4 workouts",
    change: "+1 from last week",
    icon: Dumbbell,
  },
  {
    title: "Current Streak",
    value: "12 days",
    change: "Personal best!",
    icon: Flame,
  },
  {
    title: "PRs This Month",
    value: "6",
    change: "+2 from last month",
    icon: Trophy,
  },
  {
    title: "Total Volume",
    value: "24,500 kg",
    change: "+12% this week",
    icon: Weight,
  },
]

const exercises = [
  {
    name: "Bench Press",
    lastWeight: "100 kg",
    lastReps: "5×5",
    pr: "107.5 kg",
    trend: "up",
  },
  {
    name: "Squat",
    lastWeight: "140 kg",
    lastReps: "5×5",
    pr: "150 kg",
    trend: "up",
  },
  {
    name: "Deadlift",
    lastWeight: "160 kg",
    lastReps: "1×5",
    pr: "180 kg",
    trend: "up",
  },
  {
    name: "Overhead Press",
    lastWeight: "60 kg",
    lastReps: "5×5",
    pr: "65 kg",
    trend: "up",
  },
  {
    name: "Barbell Row",
    lastWeight: "80 kg",
    lastReps: "5×5",
    pr: "85 kg",
    trend: "up",
  },
]

// Bench press progression over 12 weeks (in kg)
const progressionData = [
  82.5, 85, 87.5, 87.5, 90, 92.5, 92.5, 95, 97.5, 100, 100, 102.5,
]
const weeks = [
  "W1",
  "W2",
  "W3",
  "W4",
  "W5",
  "W6",
  "W7",
  "W8",
  "W9",
  "W10",
  "W11",
  "W12",
]

const recentWorkouts = [
  {
    date: "Today",
    type: "Push Day",
    exercises: 5,
    volume: "4,200 kg",
    duration: "58 min",
  },
  {
    date: "Yesterday",
    type: "Pull Day",
    exercises: 6,
    volume: "5,100 kg",
    duration: "62 min",
  },
  {
    date: "2 days ago",
    type: "Leg Day",
    exercises: 5,
    volume: "6,800 kg",
    duration: "55 min",
  },
]

interface AppDashboard1Props {
  onLogWorkout?: () => void
}

export function AppDashboard1({ onLogWorkout }: AppDashboard1Props) {
  const maxWeight = Math.max(...progressionData)
  const minWeight = Math.min(...progressionData)
  const range = maxWeight - minWeight

  return (
    <div className="p-4">
      <div className="mx-auto max-w-5xl space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-foreground text-3xl font-bold tracking-tight">
              Dashboard
            </h1>
            <p className="text-muted-foreground">
              Track your gains. Beat your PRs. Get stronger.
            </p>
          </div>
          <Button onClick={onLogWorkout}>
            <Plus className="mr-2 size-4" />
            Log Workout
          </Button>
        </div>

        {/* Stats Grid */}
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

        {/* Chart and Exercises */}
        <div className="grid gap-4 lg:grid-cols-7">
          {/* Progression Chart */}
          <Card className="lg:col-span-4">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Bench Press Progression</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    12-week working weight trend
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">102.5 kg</p>
                  <p className="text-muted-foreground flex items-center justify-end text-xs">
                    <ArrowUpRight className="mr-1 size-3" />
                    <span>+20 kg</span>
                    <span className="ml-1">from start</span>
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex h-[280px] items-end gap-2">
                {progressionData.map((weight, i) => (
                  <div
                    key={i}
                    className="flex flex-1 flex-col items-center gap-2"
                  >
                    <div className="relative flex w-full flex-col items-center">
                      <span className="text-muted-foreground mb-1 text-[10px]">
                        {weight}
                      </span>
                      <div
                        className="w-full rounded-t transition-all hover:opacity-80"
                        style={{
                          height: `${((weight - minWeight + 10) / (range + 20)) * 200}px`,
                          backgroundColor: "var(--brand)",
                          opacity: i === progressionData.length - 1 ? 1 : 0.5,
                        }}
                      />
                    </div>
                    <span className="text-muted-foreground text-xs">
                      {weeks[i]}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Main Lifts */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Main Lifts</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Current working weights
                  </p>
                </div>
                <Target className="text-muted-foreground size-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {exercises.map((exercise) => (
                  <div key={exercise.name} className="flex items-center gap-4">
                    <div className="bg-muted flex size-10 items-center justify-center rounded-lg">
                      <Dumbbell className="text-muted-foreground size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{exercise.name}</p>
                        <p className="font-bold">{exercise.lastWeight}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-muted-foreground text-xs">
                          {exercise.lastReps}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          PR: {exercise.pr}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Workouts */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Workouts</CardTitle>
                <p className="text-muted-foreground text-sm">
                  Your training history
                </p>
              </div>
              <TrendingUp className="text-muted-foreground size-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-3">
              {recentWorkouts.map((workout, i) => (
                <div key={i} className="bg-muted/50 space-y-2 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{workout.type}</p>
                    <span className="text-muted-foreground text-xs">
                      {workout.date}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-lg font-bold">{workout.exercises}</p>
                      <p className="text-muted-foreground text-xs">exercises</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold">{workout.volume}</p>
                      <p className="text-muted-foreground text-xs">volume</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold">{workout.duration}</p>
                      <p className="text-muted-foreground text-xs">duration</p>
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
