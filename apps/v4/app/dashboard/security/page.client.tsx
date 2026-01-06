"use client"

import {
  PageHeader,
  PasswordForm,
  SettingsCard,
  TwoFactorSection,
} from "@/components/dashboard"
import { Separator } from "@/registry/new-york-v4/ui/separator"

export default function SecurityPageClient() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Security"
        description="Manage your password and security settings"
      />
      <SettingsCard
        title="Password & Security"
        description="Manage your password and security settings"
        saveLabel="Update Password"
      >
        <PasswordForm />
        <Separator />
        <TwoFactorSection />
      </SettingsCard>
    </div>
  )
}
