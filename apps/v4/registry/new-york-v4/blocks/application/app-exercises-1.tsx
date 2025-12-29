"use client"

import * as React from "react"
import { ChevronRight, Dumbbell, Plus, Search, TrendingUp } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Input } from "@/registry/new-york-v4/ui/input"

// Exercise library with categories
const exercises = [
  // Chest
  {
    id: "bench",
    name: "Bench Press",
    category: "Chest",
    equipment: "Barbell",
    pr: 107.5,
    lastWeight: 100,
    sessions: 48,
  },
  {
    id: "incline-bench",
    name: "Incline Bench Press",
    category: "Chest",
    equipment: "Barbell",
    pr: 85,
    lastWeight: 80,
    sessions: 32,
  },
  {
    id: "dips",
    name: "Dips",
    category: "Chest",
    equipment: "Bodyweight",
    pr: 20,
    lastWeight: 15,
    sessions: 28,
  },
  {
    id: "db-fly",
    name: "Dumbbell Fly",
    category: "Chest",
    equipment: "Dumbbell",
    pr: 22.5,
    lastWeight: 20,
    sessions: 24,
  },

  // Back
  {
    id: "deadlift",
    name: "Deadlift",
    category: "Back",
    equipment: "Barbell",
    pr: 180,
    lastWeight: 160,
    sessions: 44,
  },
  {
    id: "row",
    name: "Barbell Row",
    category: "Back",
    equipment: "Barbell",
    pr: 85,
    lastWeight: 80,
    sessions: 40,
  },
  {
    id: "pullup",
    name: "Pull-ups",
    category: "Back",
    equipment: "Bodyweight",
    pr: 15,
    lastWeight: 10,
    sessions: 36,
  },
  {
    id: "lat-pulldown",
    name: "Lat Pulldown",
    category: "Back",
    equipment: "Cable",
    pr: 70,
    lastWeight: 65,
    sessions: 30,
  },

  // Legs
  {
    id: "squat",
    name: "Squat",
    category: "Legs",
    equipment: "Barbell",
    pr: 150,
    lastWeight: 140,
    sessions: 46,
  },
  {
    id: "leg-press",
    name: "Leg Press",
    category: "Legs",
    equipment: "Machine",
    pr: 280,
    lastWeight: 260,
    sessions: 28,
  },
  {
    id: "rdl",
    name: "Romanian Deadlift",
    category: "Legs",
    equipment: "Barbell",
    pr: 120,
    lastWeight: 110,
    sessions: 32,
  },
  {
    id: "leg-curl",
    name: "Leg Curl",
    category: "Legs",
    equipment: "Machine",
    pr: 55,
    lastWeight: 50,
    sessions: 26,
  },

  // Shoulders
  {
    id: "ohp",
    name: "Overhead Press",
    category: "Shoulders",
    equipment: "Barbell",
    pr: 65,
    lastWeight: 60,
    sessions: 42,
  },
  {
    id: "lateral-raise",
    name: "Lateral Raise",
    category: "Shoulders",
    equipment: "Dumbbell",
    pr: 15,
    lastWeight: 12.5,
    sessions: 34,
  },
  {
    id: "face-pull",
    name: "Face Pull",
    category: "Shoulders",
    equipment: "Cable",
    pr: 35,
    lastWeight: 30,
    sessions: 28,
  },

  // Arms
  {
    id: "curl",
    name: "Barbell Curl",
    category: "Arms",
    equipment: "Barbell",
    pr: 40,
    lastWeight: 35,
    sessions: 30,
  },
  {
    id: "tricep-ext",
    name: "Tricep Extension",
    category: "Arms",
    equipment: "Cable",
    pr: 45,
    lastWeight: 40,
    sessions: 28,
  },
  {
    id: "hammer-curl",
    name: "Hammer Curl",
    category: "Arms",
    equipment: "Dumbbell",
    pr: 20,
    lastWeight: 17.5,
    sessions: 24,
  },
]

const categories = ["All", "Chest", "Back", "Legs", "Shoulders", "Arms"]
const equipmentTypes = [
  "All",
  "Barbell",
  "Dumbbell",
  "Bodyweight",
  "Cable",
  "Machine",
]

export function AppExercises1() {
  const [search, setSearch] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [selectedEquipment, setSelectedEquipment] = React.useState("All")
  const [selectedExercise, setSelectedExercise] = React.useState<
    (typeof exercises)[0] | null
  >(null)

  const filteredExercises = exercises.filter((exercise) => {
    const matchesSearch = exercise.name
      .toLowerCase()
      .includes(search.toLowerCase())
    const matchesCategory =
      selectedCategory === "All" || exercise.category === selectedCategory
    const matchesEquipment =
      selectedEquipment === "All" || exercise.equipment === selectedEquipment
    return matchesSearch && matchesCategory && matchesEquipment
  })

  // Group by category
  const groupedExercises = filteredExercises.reduce(
    (acc, exercise) => {
      if (!acc[exercise.category]) {
        acc[exercise.category] = []
      }
      acc[exercise.category].push(exercise)
      return acc
    },
    {} as Record<string, typeof exercises>
  )

  return (
    <div className="p-4">
      <div className="mx-auto max-w-5xl space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-foreground text-3xl font-bold tracking-tight">
              Exercises
            </h1>
            <p className="text-muted-foreground">
              Browse and manage your exercise library
            </p>
          </div>
          <Button>
            <Plus className="mr-2 size-4" />
            Add Exercise
          </Button>
        </div>

        {/* Search and filters */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
            <Input
              placeholder="Search exercises..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Equipment filter */}
        <div className="flex gap-2 overflow-x-auto">
          {equipmentTypes.map((equipment) => (
            <Badge
              key={equipment}
              variant={selectedEquipment === equipment ? "default" : "outline"}
              className={cn(
                "cursor-pointer",
                selectedEquipment === equipment && "border-transparent"
              )}
              onClick={() => setSelectedEquipment(equipment)}
            >
              {equipment}
            </Badge>
          ))}
        </div>

        {/* Exercise list */}
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          <div className="space-y-6">
            {Object.entries(groupedExercises).map(
              ([category, categoryExercises]) => (
                <div key={category}>
                  <h2 className="text-muted-foreground mb-3 text-sm font-medium">
                    {category}
                  </h2>
                  <div className="space-y-2">
                    {categoryExercises.map((exercise) => (
                      <button
                        key={exercise.id}
                        onClick={() => setSelectedExercise(exercise)}
                        className={cn(
                          "flex w-full items-center gap-4 rounded-lg border p-4 text-left transition-colors",
                          selectedExercise?.id === exercise.id
                            ? "border-foreground/30 bg-muted"
                            : "hover:bg-muted/50"
                        )}
                      >
                        <div className="bg-muted flex size-10 items-center justify-center rounded-lg">
                          <Dumbbell className="text-muted-foreground size-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-medium">
                            {exercise.name}
                          </p>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                              {exercise.equipment}
                            </Badge>
                            <span className="text-muted-foreground text-xs">
                              {exercise.sessions} sessions
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{exercise.lastWeight} kg</p>
                          <p className="text-muted-foreground text-xs">
                            PR: {exercise.pr} kg
                          </p>
                        </div>
                        <ChevronRight className="text-muted-foreground size-4" />
                      </button>
                    ))}
                  </div>
                </div>
              )
            )}

            {filteredExercises.length === 0 && (
              <div className="text-muted-foreground py-12 text-center">
                <Dumbbell className="mx-auto mb-3 size-12 opacity-30" />
                <p>No exercises found</p>
                <p className="text-sm">Try adjusting your filters</p>
              </div>
            )}
          </div>

          {/* Exercise detail panel */}
          <Card className="sticky top-6 h-fit">
            <CardHeader>
              <CardTitle className="text-base">Exercise Details</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedExercise ? (
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-muted flex size-14 items-center justify-center rounded-lg">
                      <Dumbbell className="text-muted-foreground size-7" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold">
                        {selectedExercise.name}
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="secondary">
                          {selectedExercise.category}
                        </Badge>
                        <Badge variant="outline">
                          {selectedExercise.equipment}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-muted-foreground text-xs">
                        Current Weight
                      </p>
                      <p className="text-2xl font-bold">
                        {selectedExercise.lastWeight} kg
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-muted-foreground text-xs">
                        Personal Record
                      </p>
                      <p className="text-2xl font-bold">
                        {selectedExercise.pr} kg
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 border-t pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground text-sm">
                        Total Sessions
                      </span>
                      <span className="font-medium">
                        {selectedExercise.sessions}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground text-sm">
                        Progress to PR
                      </span>
                      <span className="flex items-center font-medium">
                        <TrendingUp className="mr-1 size-4" />
                        {(
                          (selectedExercise.lastWeight / selectedExercise.pr) *
                          100
                        ).toFixed(0)}
                        %
                      </span>
                    </div>
                  </div>

                  <Button className="w-full" variant="outline">
                    View History
                  </Button>
                </div>
              ) : (
                <div className="text-muted-foreground py-8 text-center">
                  <Dumbbell className="mx-auto mb-2 size-8 opacity-30" />
                  <p className="text-sm">Select an exercise to view details</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
