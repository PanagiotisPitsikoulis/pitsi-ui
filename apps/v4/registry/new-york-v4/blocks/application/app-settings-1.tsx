"use client"

import * as React from "react"
import { Bell, Moon, Palette, Save, Scale, Sun, User } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
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
import { Separator } from "@/registry/new-york-v4/ui/separator"
import { Switch } from "@/registry/new-york-v4/ui/switch"

export function AppSettings1() {
  const [profile, setProfile] = React.useState({
    name: "John Doe",
    email: "john@example.com",
    bio: "Strength training enthusiast focused on progressive overload.",
  })

  const [preferences, setPreferences] = React.useState({
    weightUnit: "kg",
    distanceUnit: "km",
    theme: "system",
    notifications: true,
    restTimer: true,
    autoIncrement: true,
    incrementAmount: "2.5",
  })

  return (
    <div className="p-4">
      <div className="mx-auto max-w-5xl space-y-4">
        {/* Header */}
        <div>
          <h1 className="text-foreground text-3xl font-bold tracking-tight">
            Settings
          </h1>
          <p className="text-muted-foreground">
            Manage your account and preferences
          </p>
        </div>

        {/* Profile section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="size-5" />
              Profile
            </CardTitle>
            <CardDescription>Your personal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-6">
              <Avatar className="size-20">
                <AvatarImage src="/avatars/01.webp" />
                <AvatarFallback className="bg-muted text-xl">JD</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <Button variant="outline" size="sm">
                  Change Avatar
                </Button>
                <p className="text-muted-foreground text-xs">
                  JPG, PNG or GIF. Max 2MB.
                </p>
              </div>
            </div>

            <Separator />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Input
                id="bio"
                value={profile.bio}
                onChange={(e) =>
                  setProfile({ ...profile, bio: e.target.value })
                }
              />
              <p className="text-muted-foreground text-xs">
                A short description about yourself
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Units section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="size-5" />
              Units
            </CardTitle>
            <CardDescription>Customize your measurement units</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Weight Unit</Label>
                <Select
                  value={preferences.weightUnit}
                  onValueChange={(v) =>
                    setPreferences({ ...preferences, weightUnit: v })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kg">Kilograms (kg)</SelectItem>
                    <SelectItem value="lbs">Pounds (lbs)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Distance Unit</Label>
                <Select
                  value={preferences.distanceUnit}
                  onValueChange={(v) =>
                    setPreferences({ ...preferences, distanceUnit: v })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="km">Kilometers (km)</SelectItem>
                    <SelectItem value="mi">Miles (mi)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Appearance section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="size-5" />
              Appearance
            </CardTitle>
            <CardDescription>Customize how the app looks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Theme</Label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "light", icon: Sun, label: "Light" },
                  { value: "dark", icon: Moon, label: "Dark" },
                  { value: "system", icon: Palette, label: "System" },
                ].map((theme) => (
                  <button
                    key={theme.value}
                    onClick={() =>
                      setPreferences({ ...preferences, theme: theme.value })
                    }
                    className={cn(
                      "flex flex-col items-center gap-2 rounded-lg border p-4 transition-colors",
                      preferences.theme === theme.value
                        ? "border-foreground/30 bg-muted"
                        : "hover:bg-muted/50"
                    )}
                  >
                    <theme.icon className="size-5" />
                    <span className="text-sm font-medium">{theme.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Workout section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="size-5" />
              Workout Settings
            </CardTitle>
            <CardDescription>
              Configure your workout preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Rest Timer</Label>
                <p className="text-muted-foreground text-sm">
                  Show rest timer between sets
                </p>
              </div>
              <Switch
                checked={preferences.restTimer}
                onCheckedChange={(v) =>
                  setPreferences({ ...preferences, restTimer: v })
                }
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto Weight Increment</Label>
                <p className="text-muted-foreground text-sm">
                  Automatically suggest weight increase
                </p>
              </div>
              <Switch
                checked={preferences.autoIncrement}
                onCheckedChange={(v) =>
                  setPreferences({ ...preferences, autoIncrement: v })
                }
              />
            </div>

            {preferences.autoIncrement && (
              <div className="space-y-2 pl-0">
                <Label>Increment Amount ({preferences.weightUnit})</Label>
                <Select
                  value={preferences.incrementAmount}
                  onValueChange={(v) =>
                    setPreferences({ ...preferences, incrementAmount: v })
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">
                      1 {preferences.weightUnit}
                    </SelectItem>
                    <SelectItem value="2.5">
                      2.5 {preferences.weightUnit}
                    </SelectItem>
                    <SelectItem value="5">
                      5 {preferences.weightUnit}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Notifications section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="size-5" />
              Notifications
            </CardTitle>
            <CardDescription>
              Manage your notification preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Push Notifications</Label>
                <p className="text-muted-foreground text-sm">
                  Receive workout reminders
                </p>
              </div>
              <Switch
                checked={preferences.notifications}
                onCheckedChange={(v) =>
                  setPreferences({ ...preferences, notifications: v })
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Save button */}
        <Button className="w-full" size="lg">
          <Save className="mr-2 size-4" />
          Save Changes
        </Button>
      </div>
    </div>
  )
}
