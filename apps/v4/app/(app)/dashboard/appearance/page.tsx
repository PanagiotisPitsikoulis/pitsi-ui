"use client"

import { Separator } from "@/registry/new-york-v4/ui/separator"

import {
  AccentColorPicker,
  PageHeader,
  SettingsCard,
  ThemeSelector,
} from "@/components/dashboard"

export default function AppearancePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Appearance"
        description="Customize the look and feel of your dashboard"
      />
      <SettingsCard
        title="Appearance Settings"
        description="Customize the look and feel of your dashboard"
        saveLabel="Save Appearance"
      >
        <ThemeSelector />
        <Separator />
        <AccentColorPicker />
      </SettingsCard>
    </div>
  )
}
