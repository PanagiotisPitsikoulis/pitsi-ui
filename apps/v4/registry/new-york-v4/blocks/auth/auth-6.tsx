"use client"

import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"

const requirements = [
  { label: "At least 8 characters", met: true },
  { label: "Contains a number", met: true },
  { label: "Contains a special character", met: false },
]

export function Auth6() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Back link */}
        <Link
          href="#"
          className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center text-sm"
        >
          <DynamicIcon name="ArrowLeft" className="mr-2 h-4 w-4" />
          Back to login
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight">
            Set new password
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Your new password must be different from previously used passwords.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">New password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              autoComplete="new-password"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm password</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="••••••••"
              autoComplete="new-password"
            />
          </div>

          {/* Requirements */}
          <div className="space-y-2 rounded-lg border p-3">
            <p className="text-muted-foreground text-xs font-medium">
              Password requirements:
            </p>
            <ul className="space-y-1">
              {requirements.map((req) => (
                <li
                  key={req.label}
                  className={cn(
                    "flex items-center gap-2 text-sm",
                    req.met ? "text-green-600" : "text-muted-foreground"
                  )}
                >
                  <DynamicIcon
                    name="Check"
                    className={cn(
                      "h-4 w-4",
                      !req.met && "text-muted-foreground/50"
                    )}
                  />
                  {req.label}
                </li>
              ))}
            </ul>
          </div>

          <Button type="submit" className="w-full">
            Reset password
          </Button>
        </form>
      </div>
    </div>
  )
}
