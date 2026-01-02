"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"

export function Auth4() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left - Form */}
      <div className="flex items-center justify-center px-4 py-12 lg:px-8">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="mb-8">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold">Logo</span>
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight">
              Sign in to your account
            </h1>
            <p className="text-muted-foreground mt-2 text-sm">
              Welcome back! Please enter your details.
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

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </div>

            <Button type="submit" className="w-full">
              Sign in
            </Button>

            <Button type="button" variant="outline" className="w-full">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign in with Google
            </Button>
          </form>

          {/* Footer */}
          <p className="text-muted-foreground mt-8 text-sm">
            Don't have an account?{" "}
            <Link
              href="#"
              className="text-foreground font-medium hover:underline"
            >
              Sign up for free
            </Link>
          </p>
        </div>
      </div>

      {/* Right - Image */}
      <div className="bg-muted relative hidden lg:block">
        <Image
          src="/placeholders/auth-bg.webp"
          alt="Authentication"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute right-12 bottom-12 left-12">
          <blockquote className="space-y-2">
            <p className="text-lg text-white">
              "This platform has completely transformed how we manage our
              projects. The interface is intuitive and the features are exactly
              what we needed."
            </p>
            <footer className="text-sm text-white/80">
              — Sarah Chen, Product Manager at TechCorp
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
