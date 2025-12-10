"use client"

import { Button } from "@/registry/new-york-v4/ui/button"
import { Label } from "@/registry/new-york-v4/ui/label"

export function TwoFactorSection() {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-0.5">
        <Label>Two-Factor Authentication</Label>
        <p className="text-muted-foreground text-sm">
          Add an extra layer of security to your account
        </p>
      </div>
      <Button variant="outline">Enable</Button>
    </div>
  )
}
