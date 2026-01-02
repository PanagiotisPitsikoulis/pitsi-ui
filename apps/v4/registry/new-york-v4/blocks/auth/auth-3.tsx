"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"

export function Auth3() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Back link */}
        <Link
          href="#"
          className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center text-sm"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to login
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight">
            Forgot password?
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            No worries, we'll send you reset instructions.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              autoComplete="email"
            />
          </div>

          <Button type="submit" className="w-full">
            Send reset link
          </Button>
        </form>

        {/* Footer */}
        <p className="text-muted-foreground mt-8 text-center text-sm">
          Remember your password?{" "}
          <Link
            href="#"
            className="text-foreground font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
