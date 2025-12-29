"use client"

import * as React from "react"
import { Bell, Bot, Moon, Palette, Save, Sun, User, Zap } from "lucide-react"

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

export function AppAgentsSettings1() {
  const [profile, setProfile] = React.useState({
    name: "Mike Johnson",
    email: "mike@example.com",
  })

  const [preferences, setPreferences] = React.useState({
    defaultModel: "claude-3.5-sonnet",
    maxTokens: "100000",
    theme: "system",
    notifications: true,
    autoRetry: true,
    logRetention: "30",
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
                <AvatarImage src="/avatars/04.webp" />
                <AvatarFallback className="bg-muted text-xl">MJ</AvatarFallback>
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
              <Bot className="size-5" />
              Agent Defaults
            </CardTitle>
            <CardDescription>Configure default agent settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Default Model</Label>
                <Select
                  value={preferences.defaultModel}
                  onValueChange={(v) =>
                    setPreferences({ ...preferences, defaultModel: v })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="claude-3.5-sonnet">
                      Claude 3.5 Sonnet
                    </SelectItem>
                    <SelectItem value="claude-3-opus">Claude 3 Opus</SelectItem>
                    <SelectItem value="claude-3-haiku">
                      Claude 3 Haiku
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Monthly Token Limit</Label>
                <Select
                  value={preferences.maxTokens}
                  onValueChange={(v) =>
                    setPreferences({ ...preferences, maxTokens: v })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50000">50,000 tokens</SelectItem>
                    <SelectItem value="100000">100,000 tokens</SelectItem>
                    <SelectItem value="500000">500,000 tokens</SelectItem>
                    <SelectItem value="unlimited">Unlimited</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto-retry Failed Runs</Label>
                <p className="text-muted-foreground text-sm">
                  Automatically retry runs that fail due to rate limits
                </p>
              </div>
              <Switch
                checked={preferences.autoRetry}
                onCheckedChange={(v) =>
                  setPreferences({ ...preferences, autoRetry: v })
                }
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="size-5" />
              Usage & Logs
            </CardTitle>
            <CardDescription>
              Configure usage tracking and log retention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label>Log Retention Period</Label>
              <Select
                value={preferences.logRetention}
                onValueChange={(v) =>
                  setPreferences({ ...preferences, logRetention: v })
                }
              >
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">7 days</SelectItem>
                  <SelectItem value="14">14 days</SelectItem>
                  <SelectItem value="30">30 days</SelectItem>
                  <SelectItem value="90">90 days</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-muted-foreground text-sm">
                Logs older than this will be automatically deleted
              </p>
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
                <Label>Run Notifications</Label>
                <p className="text-muted-foreground text-sm">
                  Get notified when agent runs complete or fail
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
