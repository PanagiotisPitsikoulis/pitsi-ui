"use client"

import * as React from "react"
import {
  Check,
  ChevronDown,
  Dumbbell,
  Minus,
  Plus,
  Timer,
  Trash2,
  X,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"

const exerciseLibrary = [
  { id: "bench", name: "Bench Press", category: "Chest", lastWeight: 100 },
  { id: "squat", name: "Squat", category: "Legs", lastWeight: 140 },
  { id: "deadlift", name: "Deadlift", category: "Back", lastWeight: 160 },
  { id: "ohp", name: "Overhead Press", category: "Shoulders", lastWeight: 60 },
  { id: "row", name: "Barbell Row", category: "Back", lastWeight: 80 },
  { id: "pullup", name: "Pull-ups", category: "Back", lastWeight: 0 },
  { id: "dips", name: "Dips", category: "Chest", lastWeight: 0 },
  { id: "curl", name: "Barbell Curl", category: "Arms", lastWeight: 35 },
]

const workoutTypes = [
  { id: "push", name: "Push Day", exercises: ["bench", "ohp", "dips"] },
  {
    id: "pull",
    name: "Pull Day",
    exercises: ["deadlift", "row", "pullup", "curl"],
  },
  { id: "legs", name: "Leg Day", exercises: ["squat"] },
  { id: "custom", name: "Custom Workout", exercises: [] },
]

interface WorkoutSet {
  id: string
  weight: number
  reps: number
  completed: boolean
}

interface WorkoutExercise {
  id: string
  exerciseId: string
  sets: WorkoutSet[]
}

export function AppWorkoutLog1() {
  const [selectedWorkoutType, setSelectedWorkoutType] =
    React.useState<string>("")
  const [workoutStarted, setWorkoutStarted] = React.useState(false)
  const [workoutExercises, setWorkoutExercises] = React.useState<
    WorkoutExercise[]
  >([])
  const [elapsedTime, setElapsedTime] = React.useState(0)

  // Timer effect
  React.useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (workoutStarted) {
      interval = setInterval(() => {
        setElapsedTime((prev) => prev + 1)
      }, 1000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [workoutStarted])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const startWorkout = () => {
    if (!selectedWorkoutType) return

    const workoutType = workoutTypes.find((w) => w.id === selectedWorkoutType)
    if (!workoutType) return

    const exercises: WorkoutExercise[] = workoutType.exercises.map((exId) => {
      const exercise = exerciseLibrary.find((e) => e.id === exId)
      return {
        id: crypto.randomUUID(),
        exerciseId: exId,
        sets: [
          {
            id: crypto.randomUUID(),
            weight: exercise?.lastWeight || 0,
            reps: 5,
            completed: false,
          },
          {
            id: crypto.randomUUID(),
            weight: exercise?.lastWeight || 0,
            reps: 5,
            completed: false,
          },
          {
            id: crypto.randomUUID(),
            weight: exercise?.lastWeight || 0,
            reps: 5,
            completed: false,
          },
        ],
      }
    })

    setWorkoutExercises(exercises)
    setWorkoutStarted(true)
    setElapsedTime(0)
  }

  const addExercise = (exerciseId: string) => {
    const exercise = exerciseLibrary.find((e) => e.id === exerciseId)
    if (!exercise) return

    setWorkoutExercises((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        exerciseId,
        sets: [
          {
            id: crypto.randomUUID(),
            weight: exercise.lastWeight,
            reps: 5,
            completed: false,
          },
          {
            id: crypto.randomUUID(),
            weight: exercise.lastWeight,
            reps: 5,
            completed: false,
          },
          {
            id: crypto.randomUUID(),
            weight: exercise.lastWeight,
            reps: 5,
            completed: false,
          },
        ],
      },
    ])
  }

  const removeExercise = (exerciseWorkoutId: string) => {
    setWorkoutExercises((prev) =>
      prev.filter((e) => e.id !== exerciseWorkoutId)
    )
  }

  const addSet = (exerciseWorkoutId: string) => {
    setWorkoutExercises((prev) =>
      prev.map((e) => {
        if (e.id !== exerciseWorkoutId) return e
        const lastSet = e.sets[e.sets.length - 1]
        return {
          ...e,
          sets: [
            ...e.sets,
            {
              id: crypto.randomUUID(),
              weight: lastSet?.weight || 0,
              reps: lastSet?.reps || 5,
              completed: false,
            },
          ],
        }
      })
    )
  }

  const updateSet = (
    exerciseWorkoutId: string,
    setId: string,
    field: "weight" | "reps" | "completed",
    value: number | boolean
  ) => {
    setWorkoutExercises((prev) =>
      prev.map((e) => {
        if (e.id !== exerciseWorkoutId) return e
        return {
          ...e,
          sets: e.sets.map((s) => {
            if (s.id !== setId) return s
            return { ...s, [field]: value }
          }),
        }
      })
    )
  }

  const removeSet = (exerciseWorkoutId: string, setId: string) => {
    setWorkoutExercises((prev) =>
      prev.map((e) => {
        if (e.id !== exerciseWorkoutId) return e
        return {
          ...e,
          sets: e.sets.filter((s) => s.id !== setId),
        }
      })
    )
  }

  const totalVolume = workoutExercises.reduce((total, exercise) => {
    return (
      total +
      exercise.sets
        .filter((s) => s.completed)
        .reduce((sum, s) => sum + s.weight * s.reps, 0)
    )
  }, 0)

  const completedSets = workoutExercises.reduce(
    (total, e) => total + e.sets.filter((s) => s.completed).length,
    0
  )

  const totalSets = workoutExercises.reduce(
    (total, e) => total + e.sets.length,
    0
  )

  if (!workoutStarted) {
    return (
      <div className="p-4">
        <div className="mx-auto max-w-5xl space-y-4">
          <div>
            <h1 className="text-foreground text-3xl font-bold tracking-tight">
              Log Workout
            </h1>
            <p className="text-muted-foreground">Start a new workout session</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Choose Workout Type</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                {workoutTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedWorkoutType(type.id)}
                    className={cn(
                      "flex items-center justify-between rounded-lg border p-4 text-left transition-colors",
                      selectedWorkoutType === type.id
                        ? "border-foreground/30 bg-muted"
                        : "hover:bg-muted/50"
                    )}
                  >
                    <div>
                      <p className="font-medium">{type.name}</p>
                      <p className="text-muted-foreground text-sm">
                        {type.exercises.length > 0
                          ? type.exercises
                              .map(
                                (id) =>
                                  exerciseLibrary.find((e) => e.id === id)?.name
                              )
                              .join(", ")
                          : "Build your own workout"}
                      </p>
                    </div>
                    {selectedWorkoutType === type.id && (
                      <Check className="text-foreground size-5" />
                    )}
                  </button>
                ))}
              </div>

              <Button
                onClick={startWorkout}
                disabled={!selectedWorkoutType}
                className="w-full"
              >
                <Dumbbell className="mr-2 size-4" />
                Start Workout
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4">
      <div className="mx-auto max-w-5xl space-y-4">
        {/* Header with timer */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-foreground text-3xl font-bold tracking-tight">
              {workoutTypes.find((w) => w.id === selectedWorkoutType)?.name}
            </h1>
            <p className="text-muted-foreground">
              {completedSets} / {totalSets} sets completed
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="flex items-center gap-2 text-2xl font-bold">
                <Timer className="text-muted-foreground size-5" />
                {formatTime(elapsedTime)}
              </div>
              <p className="text-muted-foreground text-sm">
                Volume: {totalVolume.toLocaleString()} kg
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setWorkoutStarted(false)
                setWorkoutExercises([])
                setElapsedTime(0)
              }}
            >
              <X className="mr-2 size-4" />
              End
            </Button>
          </div>
        </div>

        {/* Exercise cards */}
        <div className="space-y-4">
          {workoutExercises.map((workoutExercise) => {
            const exercise = exerciseLibrary.find(
              (e) => e.id === workoutExercise.exerciseId
            )
            if (!exercise) return null

            return (
              <Card key={workoutExercise.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-muted flex size-10 items-center justify-center rounded-lg">
                        <Dumbbell className="text-muted-foreground size-5" />
                      </div>
                      <div>
                        <CardTitle className="text-base">
                          {exercise.name}
                        </CardTitle>
                        <p className="text-muted-foreground text-xs">
                          {exercise.category}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeExercise(workoutExercise.id)}
                    >
                      <Trash2 className="text-destructive size-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {/* Header row */}
                  <div className="text-muted-foreground grid grid-cols-[auto_1fr_1fr_auto] gap-3 px-1 text-xs font-medium">
                    <div className="w-8">Set</div>
                    <div>Weight (kg)</div>
                    <div>Reps</div>
                    <div className="w-16"></div>
                  </div>

                  {/* Sets */}
                  {workoutExercise.sets.map((set, setIndex) => (
                    <div
                      key={set.id}
                      className={cn(
                        "grid grid-cols-[auto_1fr_1fr_auto] items-center gap-3 rounded-lg p-1",
                        set.completed && "bg-muted/50"
                      )}
                    >
                      <div className="text-muted-foreground w-8 text-center text-sm font-medium">
                        {setIndex + 1}
                      </div>
                      <Input
                        type="number"
                        value={set.weight}
                        onChange={(e) =>
                          updateSet(
                            workoutExercise.id,
                            set.id,
                            "weight",
                            parseFloat(e.target.value) || 0
                          )
                        }
                        className="h-9"
                        disabled={set.completed}
                      />
                      <Input
                        type="number"
                        value={set.reps}
                        onChange={(e) =>
                          updateSet(
                            workoutExercise.id,
                            set.id,
                            "reps",
                            parseInt(e.target.value) || 0
                          )
                        }
                        className="h-9"
                        disabled={set.completed}
                      />
                      <div className="flex w-16 gap-1">
                        <Button
                          variant={set.completed ? "default" : "outline"}
                          size="icon"
                          className="size-9"
                          onClick={() =>
                            updateSet(
                              workoutExercise.id,
                              set.id,
                              "completed",
                              !set.completed
                            )
                          }
                        >
                          <Check className="size-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-9"
                          onClick={() => removeSet(workoutExercise.id, set.id)}
                        >
                          <Minus className="size-4" />
                        </Button>
                      </div>
                    </div>
                  ))}

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addSet(workoutExercise.id)}
                    className="w-full"
                  >
                    <Plus className="mr-2 size-3" />
                    Add Set
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Add exercise */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Select onValueChange={addExercise}>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Add exercise..." />
                </SelectTrigger>
                <SelectContent>
                  {exerciseLibrary.map((exercise) => (
                    <SelectItem key={exercise.id} value={exercise.id}>
                      {exercise.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Finish workout button */}
        <Button className="w-full" size="lg" disabled={completedSets === 0}>
          <Check className="mr-2 size-5" />
          Finish Workout
        </Button>
      </div>
    </div>
  )
}
