"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Clock, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

interface ScheduleClass {
  id: string
  name: string
  instructor: string
  time: string
  duration: string
  spots: number
  maxSpots: number
  intensity: "low" | "medium" | "high" | "extreme"
}

interface DaySchedule {
  day: string
  shortDay: string
  date: string
  classes: ScheduleClass[]
}

const weekSchedule: DaySchedule[] = [
  {
    day: "Monday",
    shortDay: "Mon",
    date: "Jan 6",
    classes: [
      {
        id: "1",
        name: "HIIT",
        instructor: "Alex Chen",
        time: "6:00 AM",
        duration: "45 min",
        spots: 4,
        maxSpots: 20,
        intensity: "extreme",
      },
      {
        id: "2",
        name: "Yoga Flow",
        instructor: "Maya Patel",
        time: "7:00 AM",
        duration: "60 min",
        spots: 8,
        maxSpots: 15,
        intensity: "medium",
      },
      {
        id: "3",
        name: "Strength",
        instructor: "Jake Miller",
        time: "12:00 PM",
        duration: "50 min",
        spots: 6,
        maxSpots: 16,
        intensity: "high",
      },
      {
        id: "4",
        name: "Spin",
        instructor: "Sofia Reyes",
        time: "5:30 PM",
        duration: "45 min",
        spots: 2,
        maxSpots: 25,
        intensity: "high",
      },
      {
        id: "5",
        name: "Boxing",
        instructor: "Marcus Webb",
        time: "7:00 PM",
        duration: "60 min",
        spots: 10,
        maxSpots: 20,
        intensity: "high",
      },
    ],
  },
  {
    day: "Tuesday",
    shortDay: "Tue",
    date: "Jan 7",
    classes: [
      {
        id: "6",
        name: "Strength",
        instructor: "Jake Miller",
        time: "6:00 AM",
        duration: "50 min",
        spots: 8,
        maxSpots: 16,
        intensity: "high",
      },
      {
        id: "7",
        name: "HIIT",
        instructor: "Alex Chen",
        time: "12:00 PM",
        duration: "45 min",
        spots: 5,
        maxSpots: 20,
        intensity: "extreme",
      },
      {
        id: "8",
        name: "Recovery",
        instructor: "Maya Patel",
        time: "5:30 PM",
        duration: "30 min",
        spots: 12,
        maxSpots: 15,
        intensity: "low",
      },
      {
        id: "9",
        name: "Spin",
        instructor: "Sofia Reyes",
        time: "6:30 PM",
        duration: "45 min",
        spots: 0,
        maxSpots: 25,
        intensity: "high",
      },
    ],
  },
  {
    day: "Wednesday",
    shortDay: "Wed",
    date: "Jan 8",
    classes: [
      {
        id: "10",
        name: "Boxing",
        instructor: "Marcus Webb",
        time: "6:00 AM",
        duration: "60 min",
        spots: 7,
        maxSpots: 20,
        intensity: "high",
      },
      {
        id: "11",
        name: "Yoga Flow",
        instructor: "Maya Patel",
        time: "7:30 AM",
        duration: "60 min",
        spots: 3,
        maxSpots: 15,
        intensity: "medium",
      },
      {
        id: "12",
        name: "HIIT",
        instructor: "Alex Chen",
        time: "12:00 PM",
        duration: "45 min",
        spots: 9,
        maxSpots: 20,
        intensity: "extreme",
      },
      {
        id: "13",
        name: "Strength",
        instructor: "Jake Miller",
        time: "5:30 PM",
        duration: "50 min",
        spots: 4,
        maxSpots: 16,
        intensity: "high",
      },
      {
        id: "14",
        name: "Spin",
        instructor: "Sofia Reyes",
        time: "7:00 PM",
        duration: "45 min",
        spots: 6,
        maxSpots: 25,
        intensity: "high",
      },
    ],
  },
  {
    day: "Thursday",
    shortDay: "Thu",
    date: "Jan 9",
    classes: [
      {
        id: "15",
        name: "HIIT",
        instructor: "Alex Chen",
        time: "6:00 AM",
        duration: "45 min",
        spots: 11,
        maxSpots: 20,
        intensity: "extreme",
      },
      {
        id: "16",
        name: "Recovery",
        instructor: "Maya Patel",
        time: "7:00 AM",
        duration: "30 min",
        spots: 10,
        maxSpots: 15,
        intensity: "low",
      },
      {
        id: "17",
        name: "Boxing",
        instructor: "Marcus Webb",
        time: "12:00 PM",
        duration: "60 min",
        spots: 8,
        maxSpots: 20,
        intensity: "high",
      },
      {
        id: "18",
        name: "Yoga Flow",
        instructor: "Maya Patel",
        time: "5:30 PM",
        duration: "60 min",
        spots: 2,
        maxSpots: 15,
        intensity: "medium",
      },
      {
        id: "19",
        name: "Strength",
        instructor: "Jake Miller",
        time: "7:00 PM",
        duration: "50 min",
        spots: 5,
        maxSpots: 16,
        intensity: "high",
      },
    ],
  },
  {
    day: "Friday",
    shortDay: "Fri",
    date: "Jan 10",
    classes: [
      {
        id: "20",
        name: "Spin",
        instructor: "Sofia Reyes",
        time: "6:00 AM",
        duration: "45 min",
        spots: 3,
        maxSpots: 25,
        intensity: "high",
      },
      {
        id: "21",
        name: "HIIT",
        instructor: "Alex Chen",
        time: "7:00 AM",
        duration: "45 min",
        spots: 6,
        maxSpots: 20,
        intensity: "extreme",
      },
      {
        id: "22",
        name: "Strength",
        instructor: "Jake Miller",
        time: "12:00 PM",
        duration: "50 min",
        spots: 7,
        maxSpots: 16,
        intensity: "high",
      },
      {
        id: "23",
        name: "Boxing",
        instructor: "Marcus Webb",
        time: "5:30 PM",
        duration: "60 min",
        spots: 4,
        maxSpots: 20,
        intensity: "high",
      },
    ],
  },
  {
    day: "Saturday",
    shortDay: "Sat",
    date: "Jan 11",
    classes: [
      {
        id: "24",
        name: "HIIT",
        instructor: "Alex Chen",
        time: "8:00 AM",
        duration: "45 min",
        spots: 2,
        maxSpots: 20,
        intensity: "extreme",
      },
      {
        id: "25",
        name: "Yoga Flow",
        instructor: "Maya Patel",
        time: "9:30 AM",
        duration: "60 min",
        spots: 5,
        maxSpots: 15,
        intensity: "medium",
      },
      {
        id: "26",
        name: "Strength",
        instructor: "Jake Miller",
        time: "11:00 AM",
        duration: "50 min",
        spots: 9,
        maxSpots: 16,
        intensity: "high",
      },
      {
        id: "27",
        name: "Recovery",
        instructor: "Maya Patel",
        time: "1:00 PM",
        duration: "30 min",
        spots: 8,
        maxSpots: 15,
        intensity: "low",
      },
    ],
  },
  {
    day: "Sunday",
    shortDay: "Sun",
    date: "Jan 12",
    classes: [
      {
        id: "28",
        name: "Yoga Flow",
        instructor: "Maya Patel",
        time: "9:00 AM",
        duration: "60 min",
        spots: 4,
        maxSpots: 15,
        intensity: "medium",
      },
      {
        id: "29",
        name: "Recovery",
        instructor: "Maya Patel",
        time: "10:30 AM",
        duration: "30 min",
        spots: 11,
        maxSpots: 15,
        intensity: "low",
      },
      {
        id: "30",
        name: "Spin",
        instructor: "Sofia Reyes",
        time: "12:00 PM",
        duration: "45 min",
        spots: 7,
        maxSpots: 25,
        intensity: "high",
      },
    ],
  },
]

const intensityColors = {
  low: "bg-emerald-500",
  medium: "bg-amber-500",
  high: "bg-orange-500",
  extreme: "bg-red-500",
}

export function Features7() {
  const [selectedDay, setSelectedDay] = useState(0)

  return (
    <section className="bg-neutral-950 py-24 lg:py-32">
      <div className="container px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="mb-2 text-sm font-medium tracking-[0.3em] text-white/60 uppercase">
              Weekly Schedule
            </p>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
              Book Your Spot
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="border-white/20 bg-transparent text-white hover:bg-white/10"
              onClick={() => setSelectedDay(Math.max(0, selectedDay - 1))}
              disabled={selectedDay === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-white/20 bg-transparent text-white hover:bg-white/10"
              onClick={() => setSelectedDay(Math.min(6, selectedDay + 1))}
              disabled={selectedDay === 6}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Day Tabs */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {weekSchedule.map((day, index) => (
            <button
              key={day.day}
              onClick={() => setSelectedDay(index)}
              className={cn(
                "flex min-w-[100px] flex-col items-center rounded-xl px-4 py-3 transition-colors",
                selectedDay === index
                  ? "bg-white text-black"
                  : "bg-white/5 text-white hover:bg-white/10"
              )}
            >
              <span className="text-xs font-medium uppercase opacity-60">
                {day.shortDay}
              </span>
              <span className="text-lg font-bold">{day.date}</span>
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="space-y-3">
          {weekSchedule[selectedDay].classes.map((classItem) => (
            <div
              key={classItem.id}
              className="group flex flex-col gap-4 rounded-xl bg-white/5 p-4 transition-colors hover:bg-white/10 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-4">
                {/* Intensity dot */}
                <div
                  className={cn(
                    "h-2 w-2 shrink-0 rounded-full",
                    intensityColors[classItem.intensity]
                  )}
                />

                {/* Time */}
                <div className="w-20 shrink-0">
                  <p className="text-lg font-bold text-white">
                    {classItem.time}
                  </p>
                </div>

                {/* Class info */}
                <div>
                  <p className="text-lg font-semibold text-white">
                    {classItem.name}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-white/60">
                    <span className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      {classItem.instructor}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {classItem.duration}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Spots */}
                <div className="text-right">
                  <p
                    className={cn(
                      "text-sm font-medium",
                      classItem.spots === 0
                        ? "text-red-400"
                        : classItem.spots <= 3
                          ? "text-amber-400"
                          : "text-white/60"
                    )}
                  >
                    {classItem.spots === 0
                      ? "Sold Out"
                      : `${classItem.spots} spots left`}
                  </p>
                </div>

                {/* Book button */}
                <Button
                  variant={classItem.spots === 0 ? "outline" : "default"}
                  size="sm"
                  disabled={classItem.spots === 0}
                  className={cn(
                    "min-w-[100px]",
                    classItem.spots === 0
                      ? "border-white/20 bg-transparent text-white/40"
                      : "bg-white text-black hover:bg-white/90"
                  )}
                >
                  {classItem.spots === 0 ? "Waitlist" : "Book"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
