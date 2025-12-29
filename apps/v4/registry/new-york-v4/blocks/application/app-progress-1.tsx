"use client"

import * as React from "react"
import { ArrowUpRight, Dumbbell, TrendingUp, Trophy } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs"

// Progression data for different lifts over 12 weeks
const liftData = {
  bench: {
    name: "Bench Press",
    data: [82.5, 85, 87.5, 87.5, 90, 92.5, 92.5, 95, 97.5, 100, 100, 102.5],
    pr: 107.5,
    unit: "kg",
  },
  squat: {
    name: "Squat",
    data: [
      120, 125, 127.5, 130, 130, 132.5, 135, 137.5, 140, 142.5, 145, 147.5,
    ],
    pr: 150,
    unit: "kg",
  },
  deadlift: {
    name: "Deadlift",
    data: [140, 145, 147.5, 150, 155, 157.5, 160, 160, 162.5, 165, 170, 175],
    pr: 180,
    unit: "kg",
  },
  ohp: {
    name: "Overhead Press",
    data: [45, 47.5, 50, 50, 52.5, 52.5, 55, 55, 57.5, 57.5, 60, 62.5],
    pr: 65,
    unit: "kg",
  },
  row: {
    name: "Barbell Row",
    data: [60, 62.5, 65, 67.5, 70, 72.5, 75, 75, 77.5, 80, 80, 82.5],
    pr: 85,
    unit: "kg",
  },
}

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

// Volume data per week
const volumeData = [
  { week: "W1", volume: 18500 },
  { week: "W2", volume: 19200 },
  { week: "W3", volume: 20100 },
  { week: "W4", volume: 19800 },
  { week: "W5", volume: 21500 },
  { week: "W6", volume: 22300 },
  { week: "W7", volume: 23100 },
  { week: "W8", volume: 22800 },
  { week: "W9", volume: 24200 },
  { week: "W10", volume: 24800 },
  { week: "W11", volume: 25500 },
  { week: "W12", volume: 26100 },
]

// Personal records
const prs = [
  { lift: "Bench Press", weight: 107.5, date: "2024-01-15", previous: 105 },
  { lift: "Squat", weight: 150, date: "2024-01-22", previous: 147.5 },
  { lift: "Deadlift", weight: 180, date: "2024-01-18", previous: 175 },
  { lift: "Overhead Press", weight: 65, date: "2024-01-25", previous: 62.5 },
  { lift: "Barbell Row", weight: 85, date: "2024-01-20", previous: 82.5 },
]

type LiftKey = keyof typeof liftData

function ProgressChart({ liftKey }: { liftKey: LiftKey }) {
  const lift = liftData[liftKey]
  const maxWeight = Math.max(...lift.data)
  const minWeight = Math.min(...lift.data)
  const range = maxWeight - minWeight
  const currentWeight = lift.data[lift.data.length - 1]
  const startWeight = lift.data[0]
  const gain = currentWeight - startWeight

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">{lift.name}</h3>
          <p className="text-muted-foreground text-sm">12-week progression</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold">
            {currentWeight} {lift.unit}
          </p>
          <p className="text-muted-foreground flex items-center justify-end text-sm">
            <ArrowUpRight className="mr-1 size-3" />
            <span>
              +{gain} {lift.unit}
            </span>
            <span className="ml-1">from start</span>
          </p>
        </div>
      </div>

      <div className="flex h-[200px] items-end gap-1.5">
        {lift.data.map((weight, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div className="relative flex w-full flex-col items-center">
              <span className="text-muted-foreground mb-0.5 text-[9px]">
                {weight}
              </span>
              <div
                className="w-full rounded-t transition-all hover:opacity-80"
                style={{
                  height: `${((weight - minWeight + 5) / (range + 10)) * 160}px`,
                  backgroundColor: "var(--brand)",
                  opacity: i === lift.data.length - 1 ? 1 : 0.4 + i * 0.05,
                }}
              />
            </div>
            <span className="text-muted-foreground text-[10px]">
              {weeks[i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function AppProgress1() {
  const [selectedLift, setSelectedLift] = React.useState<LiftKey>("bench")

  // Calculate totals
  const totalGain = Object.values(liftData).reduce((sum, lift) => {
    return sum + (lift.data[lift.data.length - 1] - lift.data[0])
  }, 0)

  const totalPRs = prs.length
  const volumeGain =
    volumeData[volumeData.length - 1].volume - volumeData[0].volume
  const volumeGainPercent = ((volumeGain / volumeData[0].volume) * 100).toFixed(
    0
  )

  return (
    <div className="p-4">
      <div className="mx-auto max-w-5xl space-y-4">
        {/* Header */}
        <div>
          <h1 className="text-foreground text-3xl font-bold tracking-tight">
            Progress
          </h1>
          <p className="text-muted-foreground">
            Track your strength gains over time
          </p>
        </div>

        {/* Summary stats */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="bg-muted flex size-10 items-center justify-center rounded-lg">
                  <TrendingUp className="text-muted-foreground size-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">+{totalGain} kg</p>
                  <p className="text-muted-foreground text-sm">
                    Total strength gained
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="bg-muted flex size-10 items-center justify-center rounded-lg">
                  <Trophy className="text-muted-foreground size-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{totalPRs}</p>
                  <p className="text-muted-foreground text-sm">
                    Personal records
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="bg-muted flex size-10 items-center justify-center rounded-lg">
                  <Dumbbell className="text-muted-foreground size-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">+{volumeGainPercent}%</p>
                  <p className="text-muted-foreground text-sm">
                    Volume increase
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lift progression tabs */}
        <Card>
          <CardHeader>
            <CardTitle>Lift Progression</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs
              value={selectedLift}
              onValueChange={(v) => setSelectedLift(v as LiftKey)}
            >
              <TabsList className="mb-6">
                <TabsTrigger value="bench">Bench</TabsTrigger>
                <TabsTrigger value="squat">Squat</TabsTrigger>
                <TabsTrigger value="deadlift">Deadlift</TabsTrigger>
                <TabsTrigger value="ohp">OHP</TabsTrigger>
                <TabsTrigger value="row">Row</TabsTrigger>
              </TabsList>

              {Object.keys(liftData).map((key) => (
                <TabsContent key={key} value={key}>
                  <ProgressChart liftKey={key as LiftKey} />
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Volume chart and PRs */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Weekly volume */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex h-[200px] items-end gap-1.5">
                {volumeData.map((week, i) => {
                  const maxVol = Math.max(...volumeData.map((d) => d.volume))
                  const minVol = Math.min(...volumeData.map((d) => d.volume))
                  const range = maxVol - minVol

                  return (
                    <div
                      key={week.week}
                      className="flex flex-1 flex-col items-center gap-1"
                    >
                      <div className="relative flex w-full flex-col items-center">
                        <div
                          className="w-full rounded-t transition-all hover:opacity-80"
                          style={{
                            height: `${((week.volume - minVol + 2000) / (range + 4000)) * 160}px`,
                            backgroundColor: "var(--brand)",
                            opacity:
                              i === volumeData.length - 1 ? 1 : 0.4 + i * 0.05,
                          }}
                        />
                      </div>
                      <span className="text-muted-foreground text-[10px]">
                        {week.week}
                      </span>
                    </div>
                  )
                })}
              </div>
              <div className="mt-4 flex justify-between text-sm">
                <span className="text-muted-foreground">
                  Start: {volumeData[0].volume.toLocaleString()} kg
                </span>
                <span className="font-medium">
                  Current:{" "}
                  {volumeData[volumeData.length - 1].volume.toLocaleString()} kg
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Recent PRs */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Records</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {prs.map((pr) => (
                  <div key={pr.lift} className="flex items-center gap-4">
                    <div className="bg-muted flex size-10 items-center justify-center rounded-lg">
                      <Trophy className="text-muted-foreground size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{pr.lift}</p>
                        <p className="font-bold">{pr.weight} kg</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-muted-foreground text-xs">
                          {pr.date}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          +{(pr.weight - pr.previous).toFixed(1)} kg
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
