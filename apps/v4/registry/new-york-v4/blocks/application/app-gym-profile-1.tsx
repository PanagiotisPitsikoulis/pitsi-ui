"use client"

import * as React from "react"

import { Camera, User } from "@/lib/icons"
import { cn } from "@/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import { Switch } from "@/registry/new-york-v4/ui/switch"

export function AppGymProfile1() {
  const [weightUnit, setWeightUnit] = React.useState("kg")
  const [restTimer, setRestTimer] = React.useState("2:30")
  const [autoIncrement, setAutoIncrement] = React.useState(true)
  const [notifications, setNotifications] = React.useState(true)

  return (
    <div className="p-6">
      <div className="mx-auto max-w-3xl space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-foreground text-2xl font-bold tracking-tight">
            Profile
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Manage your account and preferences
          </p>
        </div>

        {/* Profile Section */}
        <div className="bg-card rounded-xl p-6 shadow-sm">
          <div className="flex items-start gap-6">
            <div className="relative">
              <Avatar className="size-20">
                <AvatarImage src="/avatars/01.webp" alt="John Doe" />
                <AvatarFallback className="text-lg">
                  <User className="size-8" />
                </AvatarFallback>
              </Avatar>
              <button
                className="border-background absolute -right-1 -bottom-1 flex size-8 items-center justify-center rounded-full border-2 shadow-sm"
                style={{ backgroundColor: "var(--brand)" }}
              >
                <Camera className="size-4 text-white" />
              </button>
            </div>
            <div className="flex-1 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input
                  id="bio"
                  defaultValue="Lifting heavy things since 2020"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-card rounded-xl shadow-sm">
          <div className="p-6">
            <h2 className="font-semibold">Preferences</h2>
            <p className="text-muted-foreground mt-1 text-sm">
              Customize your workout experience
            </p>
          </div>
          <Separator />
          <div className="divide-y">
            {/* Weight Unit */}
            <div className="flex items-center justify-between p-6">
              <div>
                <p className="font-medium">Weight Unit</p>
                <p className="text-muted-foreground text-sm">
                  Display weights in kilograms or pounds
                </p>
              </div>
              <Select value={weightUnit} onValueChange={setWeightUnit}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kg">kg</SelectItem>
                  <SelectItem value="lbs">lbs</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Rest Timer */}
            <div className="flex items-center justify-between p-6">
              <div>
                <p className="font-medium">Default Rest Timer</p>
                <p className="text-muted-foreground text-sm">
                  Time between sets
                </p>
              </div>
              <Select value={restTimer} onValueChange={setRestTimer}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1:00">1:00</SelectItem>
                  <SelectItem value="1:30">1:30</SelectItem>
                  <SelectItem value="2:00">2:00</SelectItem>
                  <SelectItem value="2:30">2:30</SelectItem>
                  <SelectItem value="3:00">3:00</SelectItem>
                  <SelectItem value="5:00">5:00</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Auto Increment */}
            <div className="flex items-center justify-between p-6">
              <div>
                <p className="font-medium">Auto Increment</p>
                <p className="text-muted-foreground text-sm">
                  Automatically suggest weight increases
                </p>
              </div>
              <Switch
                checked={autoIncrement}
                onCheckedChange={setAutoIncrement}
              />
            </div>

            {/* Notifications */}
            <div className="flex items-center justify-between p-6">
              <div>
                <p className="font-medium">Notifications</p>
                <p className="text-muted-foreground text-sm">
                  Rest timer and workout reminders
                </p>
              </div>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-card rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold">Your Stats</h2>
          <p className="text-muted-foreground mt-1 text-sm">
            All-time training statistics
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="text-center">
              <p className="text-2xl font-bold tabular-nums">156</p>
              <p className="text-muted-foreground text-xs">Workouts</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold tabular-nums">2.4M</p>
              <p className="text-muted-foreground text-xs">Volume (kg)</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold tabular-nums">42</p>
              <p className="text-muted-foreground text-xs">PRs Set</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold tabular-nums">12</p>
              <p className="text-muted-foreground text-xs">Best Streak</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <Button variant="outline">Cancel</Button>
          <Button style={{ backgroundColor: "var(--brand)" }}>
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  )
}
