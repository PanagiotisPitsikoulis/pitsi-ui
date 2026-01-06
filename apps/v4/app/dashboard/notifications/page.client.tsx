"use client"

import { useState } from "react"

import {
  NotificationToggle,
  PageHeader,
  SettingsCard,
} from "@/components/dashboard"
import { Separator } from "@/registry/new-york-v4/ui/separator"

export default function NotificationsPageClient() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(false)
  const [weeklyDigest, setWeeklyDigest] = useState(true)

  return (
    <div className="space-y-6">
      <PageHeader
        title="Notifications"
        description="Configure how you receive notifications"
      />
      <SettingsCard
        title="Notification Preferences"
        description="Configure how you receive notifications"
        saveLabel="Save Preferences"
      >
        <NotificationToggle
          label="Email Notifications"
          description="Receive notifications via email"
          checked={emailNotifications}
          onCheckedChange={setEmailNotifications}
        />
        <Separator />
        <NotificationToggle
          label="Push Notifications"
          description="Receive push notifications on your devices"
          checked={pushNotifications}
          onCheckedChange={setPushNotifications}
        />
        <Separator />
        <NotificationToggle
          label="Weekly Digest"
          description="Get a weekly summary of your activity"
          checked={weeklyDigest}
          onCheckedChange={setWeeklyDigest}
        />
      </SettingsCard>
    </div>
  )
}
