"use client"

import * as React from "react"
import { Dumbbell, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/registry/new-york-v4/ui/input"

interface Exercise {
  name: string
  category: string
  equipment: string
  lastWeight: string
  pr: string
  sessions: number
}

const exercises: Exercise[] = [
  // Chest
  {
    name: "Bench Press",
    category: "Chest",
    equipment: "Barbell",
    lastWeight: "102.5kg",
    pr: "107.5kg",
    sessions: 48,
  },
  {
    name: "Incline DB Press",
    category: "Chest",
    equipment: "Dumbbell",
    lastWeight: "32kg",
    pr: "36kg",
    sessions: 42,
  },
  {
    name: "Cable Flyes",
    category: "Chest",
    equipment: "Cable",
    lastWeight: "15kg",
    pr: "17.5kg",
    sessions: 28,
  },
  // Back
  {
    name: "Deadlift",
    category: "Back",
    equipment: "Barbell",
    lastWeight: "175kg",
    pr: "180kg",
    sessions: 52,
  },
  {
    name: "Barbell Row",
    category: "Back",
    equipment: "Barbell",
    lastWeight: "82.5kg",
    pr: "85kg",
    sessions: 45,
  },
  {
    name: "Pull-ups",
    category: "Back",
    equipment: "Bodyweight",
    lastWeight: "+15kg",
    pr: "+20kg",
    sessions: 38,
  },
  {
    name: "Lat Pulldown",
    category: "Back",
    equipment: "Cable",
    lastWeight: "70kg",
    pr: "77.5kg",
    sessions: 32,
  },
  // Legs
  {
    name: "Squat",
    category: "Legs",
    equipment: "Barbell",
    lastWeight: "145kg",
    pr: "150kg",
    sessions: 50,
  },
  {
    name: "Romanian Deadlift",
    category: "Legs",
    equipment: "Barbell",
    lastWeight: "120kg",
    pr: "130kg",
    sessions: 40,
  },
  {
    name: "Leg Press",
    category: "Legs",
    equipment: "Machine",
    lastWeight: "280kg",
    pr: "300kg",
    sessions: 35,
  },
  // Shoulders
  {
    name: "Overhead Press",
    category: "Shoulders",
    equipment: "Barbell",
    lastWeight: "60kg",
    pr: "65kg",
    sessions: 44,
  },
  {
    name: "Lateral Raises",
    category: "Shoulders",
    equipment: "Dumbbell",
    lastWeight: "12kg",
    pr: "14kg",
    sessions: 40,
  },
  // Arms
  {
    name: "Barbell Curl",
    category: "Arms",
    equipment: "Barbell",
    lastWeight: "40kg",
    pr: "45kg",
    sessions: 36,
  },
  {
    name: "Tricep Pushdown",
    category: "Arms",
    equipment: "Cable",
    lastWeight: "25kg",
    pr: "30kg",
    sessions: 34,
  },
]

const categories = ["All", "Chest", "Back", "Legs", "Shoulders", "Arms"]

export function AppGymLibrary1() {
  const [search, setSearch] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  const filteredExercises = exercises.filter((ex) => {
    const matchesSearch = ex.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory =
      selectedCategory === "All" || ex.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const groupedExercises = filteredExercises.reduce(
    (acc, ex) => {
      if (!acc[ex.category]) acc[ex.category] = []
      acc[ex.category].push(ex)
      return acc
    },
    {} as Record<string, Exercise[]>
  )

  return (
    <div className="p-6">
      <div className="mx-auto max-w-3xl space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-foreground text-2xl font-bold tracking-tight">
            Library
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Browse your exercise library and track history
          </p>
        </div>

        {/* Search & Filter */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
            <Input
              placeholder="Search exercises..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "shrink-0 rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                  selectedCategory === cat
                    ? "text-white"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                )}
                style={
                  selectedCategory === cat
                    ? { backgroundColor: "var(--brand)" }
                    : undefined
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Exercise List */}
        <div className="space-y-6">
          {Object.entries(groupedExercises).map(([category, exs]) => (
            <div key={category} className="space-y-3">
              <p className="text-muted-foreground text-[10px] font-medium tracking-wider uppercase">
                {category}
              </p>
              <div className="space-y-2">
                {exs.map((ex) => (
                  <div
                    key={ex.name}
                    className="bg-card flex items-center gap-4 rounded-xl p-4 shadow-sm transition-all hover:shadow-md"
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
                        <p className="truncate font-medium">{ex.name}</p>
                        <span className="text-muted-foreground shrink-0 text-xs">
                          {ex.equipment}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center gap-4 text-sm">
                        <span className="text-muted-foreground">
                          Last:{" "}
                          <span className="text-foreground font-medium tabular-nums">
                            {ex.lastWeight}
                          </span>
                        </span>
                        <span className="text-muted-foreground">
                          PR:{" "}
                          <span className="text-foreground font-medium tabular-nums">
                            {ex.pr}
                          </span>
                        </span>
                        <span className="text-muted-foreground">
                          <span className="text-foreground font-medium tabular-nums">
                            {ex.sessions}
                          </span>{" "}
                          sessions
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredExercises.length === 0 && (
            <div className="py-12 text-center">
              <Dumbbell className="text-muted-foreground mx-auto size-8" />
              <p className="text-muted-foreground mt-2 text-sm">
                No exercises found
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
