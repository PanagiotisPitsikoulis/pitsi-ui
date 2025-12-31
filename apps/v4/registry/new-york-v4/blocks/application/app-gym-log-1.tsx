"use client"

import * as React from "react"

import {
  Check,
  ChevronDown,
  Clock,
  Dumbbell,
  Minus,
  Plus,
  RotateCcw,
  X,
} from "@/lib/icons"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"

interface Set {
  id: string
  reps: number | null
  weight: number | null
  completed: boolean
}

interface Exercise {
  id: string
  name: string
  targetSets: number
  targetReps: string
  lastWeight: number
  sets: Set[]
  completed: boolean
}

const initialExercises: Exercise[] = [
  {
    id: "1",
    name: "Bench Press",
    targetSets: 5,
    targetReps: "5",
    lastWeight: 100,
    sets: [
      { id: "1-1", reps: 5, weight: 102.5, completed: true },
      { id: "1-2", reps: 5, weight: 102.5, completed: true },
      { id: "1-3", reps: 5, weight: 102.5, completed: true },
      { id: "1-4", reps: 5, weight: 102.5, completed: true },
      { id: "1-5", reps: 5, weight: 102.5, completed: true },
    ],
    completed: true,
  },
  {
    id: "2",
    name: "Incline DB Press",
    targetSets: 4,
    targetReps: "10-12",
    lastWeight: 32,
    sets: [
      { id: "2-1", reps: 12, weight: 32, completed: true },
      { id: "2-2", reps: 11, weight: 32, completed: true },
      { id: "2-3", reps: 10, weight: 32, completed: true },
      { id: "2-4", reps: null, weight: null, completed: false },
    ],
    completed: false,
  },
  {
    id: "3",
    name: "Overhead Press",
    targetSets: 5,
    targetReps: "5",
    lastWeight: 57.5,
    sets: [
      { id: "3-1", reps: null, weight: 60, completed: false },
      { id: "3-2", reps: null, weight: null, completed: false },
      { id: "3-3", reps: null, weight: null, completed: false },
      { id: "3-4", reps: null, weight: null, completed: false },
      { id: "3-5", reps: null, weight: null, completed: false },
    ],
    completed: false,
  },
  {
    id: "4",
    name: "Lateral Raises",
    targetSets: 3,
    targetReps: "12-15",
    lastWeight: 12,
    sets: [
      { id: "4-1", reps: null, weight: null, completed: false },
      { id: "4-2", reps: null, weight: null, completed: false },
      { id: "4-3", reps: null, weight: null, completed: false },
    ],
    completed: false,
  },
  {
    id: "5",
    name: "Tricep Pushdown",
    targetSets: 3,
    targetReps: "10-12",
    lastWeight: 25,
    sets: [
      { id: "5-1", reps: null, weight: null, completed: false },
      { id: "5-2", reps: null, weight: null, completed: false },
      { id: "5-3", reps: null, weight: null, completed: false },
    ],
    completed: false,
  },
]

interface AppGymLog1Props {
  onFinish?: () => void
}

export function AppGymLog1({ onFinish }: AppGymLog1Props) {
  const [exercises, setExercises] = React.useState(initialExercises)
  const [expandedExercise, setExpandedExercise] = React.useState<string | null>(
    "2"
  )
  const [elapsedTime, setElapsedTime] = React.useState(4920) // 1:22:00

  React.useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((t) => t + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
  }

  const completedExercises = exercises.filter((e) => e.completed).length
  const totalExercises = exercises.length

  const toggleSet = (exerciseId: string, setId: string) => {
    setExercises((prev) =>
      prev.map((ex) => {
        if (ex.id !== exerciseId) return ex
        const newSets = ex.sets.map((s) =>
          s.id === setId ? { ...s, completed: !s.completed } : s
        )
        return {
          ...ex,
          sets: newSets,
          completed: newSets.every((s) => s.completed),
        }
      })
    )
  }

  const updateSet = (
    exerciseId: string,
    setId: string,
    field: "reps" | "weight",
    value: number | null
  ) => {
    setExercises((prev) =>
      prev.map((ex) => {
        if (ex.id !== exerciseId) return ex
        return {
          ...ex,
          sets: ex.sets.map((s) =>
            s.id === setId ? { ...s, [field]: value } : s
          ),
        }
      })
    )
  }

  return (
    <div className="p-6">
      <div className="mx-auto max-w-3xl space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-foreground text-2xl font-bold tracking-tight">
              Push Day
            </h1>
            <p className="text-muted-foreground mt-1 flex items-center gap-2 text-sm">
              <Clock className="size-4" />
              <span className="tabular-nums">{formatTime(elapsedTime)}</span>
              <span>·</span>
              <span>
                {completedExercises}/{totalExercises} exercises
              </span>
            </p>
          </div>
          <Button onClick={onFinish} disabled={completedExercises === 0}>
            Finish Workout
          </Button>
        </div>

        {/* Exercises */}
        <div className="space-y-3">
          {exercises.map((exercise) => {
            const isExpanded = expandedExercise === exercise.id
            const completedSets = exercise.sets.filter(
              (s) => s.completed
            ).length

            return (
              <div
                key={exercise.id}
                className={cn(
                  "bg-card overflow-hidden rounded-xl shadow-sm transition-all",
                  isExpanded && "shadow-md"
                )}
              >
                {/* Exercise Header */}
                <button
                  onClick={() =>
                    setExpandedExercise(isExpanded ? null : exercise.id)
                  }
                  className="flex w-full items-center gap-3 p-4"
                >
                  <div
                    className={cn(
                      "flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors",
                      exercise.completed
                        ? "bg-emerald-500 text-white"
                        : "text-muted-foreground"
                    )}
                    style={
                      !exercise.completed
                        ? {
                            backgroundColor:
                              "color-mix(in srgb, var(--brand) 15%, transparent)",
                            color: "var(--brand)",
                          }
                        : undefined
                    }
                  >
                    {exercise.completed ? (
                      <Check className="size-4" />
                    ) : (
                      <Dumbbell className="size-4" />
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <p
                      className={cn(
                        "font-medium",
                        exercise.completed &&
                          "text-muted-foreground line-through"
                      )}
                    >
                      {exercise.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {completedSets}/{exercise.sets.length} sets · Target:{" "}
                      {exercise.targetReps} reps
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground text-sm tabular-nums">
                      {exercise.lastWeight}kg
                    </span>
                    <ChevronDown
                      className={cn(
                        "text-muted-foreground size-4 transition-transform",
                        isExpanded && "rotate-180"
                      )}
                    />
                  </div>
                </button>

                {/* Expanded Sets */}
                {isExpanded && (
                  <div className="border-t px-4 pt-3 pb-4">
                    <div className="space-y-2">
                      {/* Header */}
                      <div className="text-muted-foreground grid grid-cols-[auto_1fr_1fr_auto] gap-3 px-2 text-xs font-medium tracking-wide uppercase">
                        <span className="w-8">Set</span>
                        <span>Weight (kg)</span>
                        <span>Reps</span>
                        <span className="w-10"></span>
                      </div>

                      {/* Sets */}
                      {exercise.sets.map((set, index) => (
                        <div
                          key={set.id}
                          className={cn(
                            "grid grid-cols-[auto_1fr_1fr_auto] items-center gap-3 rounded-lg p-2 transition-colors",
                            set.completed && "bg-muted/50"
                          )}
                        >
                          <span
                            className={cn(
                              "flex size-8 items-center justify-center rounded-md text-sm font-medium tabular-nums",
                              set.completed
                                ? "bg-emerald-500/10 text-emerald-600"
                                : "bg-muted text-muted-foreground"
                            )}
                          >
                            {index + 1}
                          </span>
                          <Input
                            type="number"
                            placeholder={exercise.lastWeight.toString()}
                            value={set.weight ?? ""}
                            onChange={(e) =>
                              updateSet(
                                exercise.id,
                                set.id,
                                "weight",
                                e.target.value ? Number(e.target.value) : null
                              )
                            }
                            className="h-9 tabular-nums"
                            disabled={set.completed}
                          />
                          <Input
                            type="number"
                            placeholder={exercise.targetReps.split("-")[0]}
                            value={set.reps ?? ""}
                            onChange={(e) =>
                              updateSet(
                                exercise.id,
                                set.id,
                                "reps",
                                e.target.value ? Number(e.target.value) : null
                              )
                            }
                            className="h-9 tabular-nums"
                            disabled={set.completed}
                          />
                          <Button
                            variant={set.completed ? "ghost" : "default"}
                            size="icon"
                            className="size-9"
                            onClick={() => toggleSet(exercise.id, set.id)}
                            style={
                              !set.completed
                                ? { backgroundColor: "var(--brand)" }
                                : undefined
                            }
                          >
                            {set.completed ? (
                              <RotateCcw className="size-4" />
                            ) : (
                              <Check className="size-4" />
                            )}
                          </Button>
                        </div>
                      ))}

                      {/* Add Set Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-2 w-full"
                        onClick={() => {
                          setExercises((prev) =>
                            prev.map((ex) => {
                              if (ex.id !== exercise.id) return ex
                              return {
                                ...ex,
                                sets: [
                                  ...ex.sets,
                                  {
                                    id: `${ex.id}-${ex.sets.length + 1}`,
                                    reps: null,
                                    weight: null,
                                    completed: false,
                                  },
                                ],
                              }
                            })
                          )
                        }}
                      >
                        <Plus className="mr-1 size-3" /> Add Set
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Add Exercise */}
        <Button variant="outline" className="w-full">
          <Plus className="mr-2 size-4" /> Add Exercise
        </Button>
      </div>
    </div>
  )
}
