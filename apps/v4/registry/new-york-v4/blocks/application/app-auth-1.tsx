"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
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
import { Separator } from "@/registry/new-york-v4/ui/separator"

// Striped Background Component
function StripedBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className
      )}
    >
      <div className="container relative mx-auto h-full px-6">
        <div className="absolute inset-0 flex justify-between">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="bg-border/30 h-full w-px" />
          ))}
        </div>
      </div>
    </div>
  )
}

// Social Icons
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-4", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        fill="currentColor"
      />
    </svg>
  )
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-4", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
        fill="currentColor"
      />
    </svg>
  )
}

// Types
type AuthVariant = "signin" | "signup"

interface SocialProvider {
  id: string
  name: string
  icon: React.ReactNode
}

// Default content
const pageAuth1Defaults = {
  signin: {
    title: "Welcome back",
    description: "Login with your GitHub or Google account",
    submitLabel: "Login",
    loadingLabel: "Signing in...",
    altText: "Don't have an account?",
    altLinkText: "Sign up",
    altLinkHref: "/signup",
    forgotPasswordHref: "/forgot-password",
  },
  signup: {
    title: "Create an account",
    description: "Sign up with your GitHub or Google account",
    submitLabel: "Create account",
    loadingLabel: "Creating account...",
    altText: "Already have an account?",
    altLinkText: "Sign in",
    altLinkHref: "/signin",
    forgotPasswordHref: null,
  },
  socialProviders: [
    { id: "github", name: "GitHub", icon: <GitHubIcon /> },
    { id: "google", name: "Google", icon: <GoogleIcon /> },
  ] as SocialProvider[],
  successRedirect: "/dashboard",
}

interface AppAuth1Props {
  variant?: AuthVariant
  title?: string
  description?: string
  submitLabel?: string
  loadingLabel?: string
  altText?: string
  altLinkText?: string
  altLinkHref?: string
  forgotPasswordHref?: string | null
  socialProviders?: SocialProvider[]
  successRedirect?: string
  onSubmit?: (data: { email: string; password: string; name?: string }) => Promise<void>
  onSocialLogin?: (provider: string) => Promise<void>
  className?: string
}

export function AppAuth1({
  variant = "signin",
  title,
  description,
  submitLabel,
  loadingLabel,
  altText,
  altLinkText,
  altLinkHref,
  forgotPasswordHref,
  socialProviders = pageAuth1Defaults.socialProviders,
  onSubmit,
  onSocialLogin,
  className,
}: AppAuth1Props) {
  const defaults = variant === "signin" ? pageAuth1Defaults.signin : pageAuth1Defaults.signup

  const finalTitle = title || defaults.title
  const finalDescription = description || defaults.description
  const finalSubmitLabel = submitLabel || defaults.submitLabel
  const finalLoadingLabel = loadingLabel || defaults.loadingLabel
  const finalAltText = altText || defaults.altText
  const finalAltLinkText = altLinkText || defaults.altLinkText
  const finalAltLinkHref = altLinkHref || defaults.altLinkHref
  const finalForgotPasswordHref = forgotPasswordHref !== undefined ? forgotPasswordHref : defaults.forgotPasswordHref

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      if (onSubmit) {
        await onSubmit({ email, password, ...(variant === "signup" ? { name } : {}) })
      }
    } catch (err: any) {
      setError(err?.message || `Failed to ${variant === "signin" ? "sign in" : "sign up"}. Please try again.`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialLogin = async (providerId: string) => {
    setIsLoading(true)
    setError("")

    try {
      if (onSocialLogin) {
        await onSocialLogin(providerId)
      }
    } catch (err: any) {
      setError(err?.message || "Failed to sign in. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <div
      className={cn(
        "relative -mt-14 flex min-h-screen items-center justify-center overflow-x-clip py-24",
        className
      )}
    >
      <StripedBackground />

      <div className="relative z-10 w-full max-w-md px-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">{finalTitle}</CardTitle>
            <CardDescription>{finalDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                {/* Social Login Buttons */}
                <div className="flex flex-col gap-2">
                  {socialProviders.map((provider) => (
                    <Button
                      key={provider.id}
                      variant="outline"
                      type="button"
                      onClick={() => handleSocialLogin(provider.id)}
                      disabled={isLoading}
                      className="hover:text-muted-foreground hover:bg-transparent"
                    >
                      {provider.icon}
                      {variant === "signin" ? "Login with" : "Sign up with"} {provider.name}
                    </Button>
                  ))}
                </div>

                {/* Separator */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card text-muted-foreground px-2">
                      Or continue with
                    </span>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-destructive/10 text-destructive rounded-md p-3 text-sm">
                    {error}
                  </div>
                )}

                {/* Name Field (Signup only) */}
                {variant === "signup" && (
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                )}

                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                  />
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    {finalForgotPasswordHref && (
                      <Link
                        href={finalForgotPasswordHref}
                        className="text-muted-foreground hover:text-foreground ml-auto text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </Link>
                    )}
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    placeholder={variant === "signup" ? "Create a strong password" : undefined}
                  />
                  {variant === "signup" && (
                    <p className="text-muted-foreground text-xs">
                      Must be at least 8 characters long
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? finalLoadingLabel : finalSubmitLabel}
                </Button>

                {/* Alt Link */}
                <p className="text-muted-foreground text-center text-sm">
                  {finalAltText}{" "}
                  <Link
                    href={finalAltLinkHref}
                    className="text-foreground underline-offset-4 hover:underline"
                  >
                    {finalAltLinkText}
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
