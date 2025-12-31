"use client"

import * as React from "react"
import { ArrowUpRight, Trophy } from "@/lib/icons"

import { cn } from "@/lib/utils"

interface Lift {
  name: string
  current: number
  start: number
  pr: number
  unit: string
  data: number[]
}

const lifts: Lift[] = [
  {
    name: "Bench Press",
    current: 102.5,
    start: 82.5,
    pr: 107.5,
    unit: "kg",
    data: [82.5, 85, 87.5, 87.5, 90, 92.5, 92.5, 95, 97.5, 100, 100, 102.5],
  },
  {
    name: "Squat",
    current: 145,
    start: 100,
    pr: 150,
    unit: "kg",
    data: [100, 105, 110, 115, 120, 125, 127.5, 130, 135, 140, 142.5, 145],
  },
  {
    name: "Deadlift",
    current: 175,
    start: 120,
    pr: 180,
    unit: "kg",
    data: [120, 130, 135, 140, 145, 150, 155, 160, 165, 170, 172.5, 175],
  },
  {
    name: "Overhead Press",
    current: 60,
    start: 40,
    pr: 65,
    unit: "kg",
    data: [40, 42.5, 45, 47.5, 50, 50, 52.5, 55, 55, 57.5, 57.5, 60],
  },
  {
    name: "Barbell Row",
    current: 82.5,
    start: 60,
    pr: 85,
    unit: "kg",
    data: [60, 62.5, 65, 67.5, 70, 72.5, 75, 75, 77.5, 80, 80, 82.5],
  },
]

function MiniSparkline({ data }: { data: number[] }) {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1

  const points = data
    .map((value, i) => {
      const x = (i / (data.length - 1)) * 100
      const y = 100 - ((value - min) / range) * 100
      return `${x},${y}`
    })
    .join(" ")

  return (
    <svg
      viewBox="0 0 100 100"
      className="h-12 w-full"
      preserveAspectRatio="none"
    >
      <polyline
        points={points}
        fill="none"
        stroke="var(--brand)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

export function AppGymGains1() {
  const [selectedLift, setSelectedLift] = React.useState<string>("Bench Press")
  const selected = lifts.find((l) => l.name === selectedLift)!

  const percentGain = Math.round(
    ((selected.current - selected.start) / selected.start) * 100
  )

  return (
    <div className="p-6">
      <div className="mx-auto max-w-3xl space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-foreground text-2xl font-bold tracking-tight">
            Gains
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Track your strength progression over time
          </p>
        </div>

        {/* Selected Lift Detail */}
        <div className="bg-card rounded-xl p-5 shadow-sm">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <p className="text-muted-foreground text-[10px] font-medium tracking-wider uppercase">
                12 Week Progression
              </p>
              <h2 className="mt-1 text-xl font-bold">{selected.name}</h2>
            </div>
            <div className="text-right">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold tabular-nums">
                  {selected.current}
                </span>
                <span className="text-muted-foreground text-sm">
                  {selected.unit}
                </span>
              </div>
              <p className="text-muted-foreground mt-0.5 flex items-center justify-end gap-1 text-xs">
                <ArrowUpRight className="size-3 text-emerald-600" />
                <span className="font-medium text-emerald-600">
                  +{selected.current - selected.start}
                  {selected.unit}
                </span>
                <span>({percentGain}%)</span>
              </p>
            </div>
          </div>

          {/* Chart */}
          <div className="mb-4 h-32">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full"
              preserveAspectRatio="none"
            >
              {/* Grid lines */}
              {[0, 25, 50, 75, 100].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="100"
                  y2={y}
                  stroke="var(--border)"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                />
              ))}

              {/* Area fill */}
              <polygon
                points={`0,100 ${selected.data
                  .map((value, i) => {
                    const min = Math.min(...selected.data)
                    const max = Math.max(...selected.data)
                    const range = max - min || 1
                    const x = (i / (selected.data.length - 1)) * 100
                    const y = 100 - ((value - min) / range) * 80 - 10
                    return `${x},${y}`
                  })
                  .join(" ")} 100,100`}
                fill="var(--brand)"
                fillOpacity="0.1"
              />

              {/* Line */}
              <polyline
                points={selected.data
                  .map((value, i) => {
                    const min = Math.min(...selected.data)
                    const max = Math.max(...selected.data)
                    const range = max - min || 1
                    const x = (i / (selected.data.length - 1)) * 100
                    const y = 100 - ((value - min) / range) * 80 - 10
                    return `${x},${y}`
                  })
                  .join(" ")}
                fill="none"
                stroke="var(--brand)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {/* Week labels */}
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">W1</span>
            <span className="text-muted-foreground">W6</span>
            <span className="text-muted-foreground">W12</span>
          </div>

          {/* PR Badge */}
          <div className="bg-muted/50 mt-4 flex items-center justify-between rounded-lg p-3">
            <div className="flex items-center gap-2">
              <Trophy className="size-4 text-amber-500" />
              <span className="text-sm font-medium">Personal Record</span>
            </div>
            <span className="font-bold tabular-nums">
              {selected.pr}
              {selected.unit}
            </span>
          </div>
        </div>

        {/* All Lifts */}
        <div className="space-y-3">
          <p className="text-muted-foreground text-[10px] font-medium tracking-wider uppercase">
            All Lifts
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {lifts.map((lift) => {
              const isSelected = lift.name === selectedLift
              const gain = lift.current - lift.start

              return (
                <button
                  key={lift.name}
                  onClick={() => setSelectedLift(lift.name)}
                  className={cn(
                    "bg-card flex items-center gap-4 rounded-xl p-4 text-left shadow-sm transition-all hover:shadow-md",
                    isSelected && "ring-2"
                  )}
                  style={
                    isSelected
                      ? ({
                          "--tw-ring-color": "var(--brand)",
                        } as React.CSSProperties)
                      : undefined
                  }
                >
                  <div className="flex-1">
                    <p className="font-medium">{lift.name}</p>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-lg font-bold tabular-nums">
                        {lift.current}
                        {lift.unit}
                      </span>
                      <span className="text-xs text-emerald-600">
                        +{gain}
                        {lift.unit}
                      </span>
                    </div>
                  </div>
                  <div className="w-20">
                    <MiniSparkline data={lift.data} />
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
