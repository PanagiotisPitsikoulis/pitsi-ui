"use client"

import { useState } from "react"
import { Save } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import { Switch } from "@/registry/new-york-v4/ui/switch"

export default function NotificationsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(false)
  const [weeklyDigest, setWeeklyDigest] = useState(true)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
        <p className="text-muted-foreground">
          Configure how you receive notifications
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>
            Configure how you receive notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Email Notifications</Label>
              <p className="text-muted-foreground text-sm">
                Receive notifications via email
              </p>
            </div>
            <Switch
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Push Notifications</Label>
              <p className="text-muted-foreground text-sm">
                Receive push notifications on your devices
              </p>
            </div>
            <Switch
              checked={pushNotifications}
              onCheckedChange={setPushNotifications}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Weekly Digest</Label>
              <p className="text-muted-foreground text-sm">
                Get a weekly summary of your activity
              </p>
            </div>
            <Switch
              checked={weeklyDigest}
              onCheckedChange={setWeeklyDigest}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>
            <Save className="mr-2 size-4" />
            Save Preferences
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
