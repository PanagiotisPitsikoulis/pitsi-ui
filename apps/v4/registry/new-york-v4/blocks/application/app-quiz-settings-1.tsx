"use client"

import * as React from "react"
import { Bell, Moon, Palette, Save, Sun, Timer, User } from "lucide-react"

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

export function AppQuizSettings1() {
  const [profile, setProfile] = React.useState({
    name: "Alex Chen",
    email: "alex@example.com",
  })

  const [preferences, setPreferences] = React.useState({
    difficulty: "medium",
    timerEnabled: true,
    timerDuration: "10",
    theme: "system",
    notifications: true,
    soundEffects: true,
  })

  return (
    <div className="p-4">
      <div className="mx-auto max-w-5xl space-y-4">
        <div>
          <h1 className="text-foreground text-3xl font-bold tracking-tight">
            Settings
          </h1>
          <p className="text-muted-foreground">
            Manage your account and preferences
          </p>
        </div>

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
                <AvatarImage src="/avatars/02.webp" />
                <AvatarFallback className="bg-muted text-xl">AC</AvatarFallback>
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Timer className="size-5" />
              Quiz Preferences
            </CardTitle>
            <CardDescription>Customize your quiz experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Default Difficulty</Label>
                <Select
                  value={preferences.difficulty}
                  onValueChange={(v) =>
                    setPreferences({ ...preferences, difficulty: v })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Timer Duration (minutes)</Label>
                <Select
                  value={preferences.timerDuration}
                  onValueChange={(v) =>
                    setPreferences({ ...preferences, timerDuration: v })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 minutes</SelectItem>
                    <SelectItem value="10">10 minutes</SelectItem>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="20">20 minutes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Timer Enabled</Label>
                <p className="text-muted-foreground text-sm">
                  Show countdown timer during quizzes
                </p>
              </div>
              <Switch
                checked={preferences.timerEnabled}
                onCheckedChange={(v) =>
                  setPreferences({ ...preferences, timerEnabled: v })
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Sound Effects</Label>
                <p className="text-muted-foreground text-sm">
                  Play sounds for correct/incorrect answers
                </p>
              </div>
              <Switch
                checked={preferences.soundEffects}
                onCheckedChange={(v) =>
                  setPreferences({ ...preferences, soundEffects: v })
                }
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="size-5" />
              Appearance
            </CardTitle>
            <CardDescription>Customize how the app looks</CardDescription>
          </CardHeader>
          <CardContent>
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
                  Receive reminders to practice
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

        <Button className="w-full" size="lg">
          <Save className="mr-2 size-4" />
          Save Changes
        </Button>
      </div>
    </div>
  )
}
