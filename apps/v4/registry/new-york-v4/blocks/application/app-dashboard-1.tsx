"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import {
  Bell,
  Calendar,
  CreditCard,
  Key,
  LayoutDashboard,
  Palette,
  Receipt,
  Shield,
  Sparkles,
  User,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"

// Types
interface NavItem {
  name: string
  href: string
  icon: React.ElementType
}

interface StatItem {
  title: string
  value: string
  description: string
  icon: React.ElementType
}

interface UserData {
  name: string
  email: string
  isPro: boolean
  apiKeysCount: number
  memberSince: string
  proSince?: string
}

// Sidebar Component
function DashboardSidebar({
  dashboardNav,
  settingsNav,
  currentPath,
  className,
}: {
  dashboardNav: NavItem[]
  settingsNav: NavItem[]
  currentPath: string
  className?: string
}) {
  return (
    <aside
      className={cn(
        "sticky top-20 hidden h-[calc(100vh-5rem)] w-56 shrink-0 lg:block",
        className
      )}
    >
      <nav className="space-y-6 py-4">
        <div>
          <h3 className="text-muted-foreground mb-2 px-2 text-xs font-medium tracking-wider uppercase">
            Dashboard
          </h3>
          <ul className="space-y-1">
            {dashboardNav.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-2 py-1.5 text-sm font-medium transition-colors",
                    currentPath === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <item.icon className="size-4" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-muted-foreground mb-2 px-2 text-xs font-medium tracking-wider uppercase">
            Settings
          </h3>
          <ul className="space-y-1">
            {settingsNav.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-2 py-1.5 text-sm font-medium transition-colors",
                    currentPath === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <item.icon className="size-4" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  )
}

// Page Header Component
function PageHeader({
  title,
  description,
  badge,
}: {
  title: string
  description: string
  badge?: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-3">
        <h1 className="display text-2xl font-bold tracking-tight">{title}</h1>
        {badge}
      </div>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
}

// Stat Card Component
function StatCard({
  title,
  value,
  description,
  icon: Icon,
}: {
  title: string
  value: string
  description: string
  icon: React.ElementType
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="text-muted-foreground size-4" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-muted-foreground text-xs">{description}</p>
      </CardContent>
    </Card>
  )
}

// Upgrade Card Component
function UpgradeCard({
  title,
  description,
  features,
  ctaLabel,
  ctaHref,
}: {
  title: string
  description: string
  features: string[]
  ctaLabel: string
  ctaHref: string
}) {
  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="text-primary size-5" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="mb-4 space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="text-muted-foreground flex items-center gap-2 text-sm"
            >
              <span className="bg-primary size-1.5 rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
        <Button asChild>
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

// Default data
const pageDashboard1Defaults = {
  dashboardNav: [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  ] as NavItem[],
  settingsNav: [
    { name: "Profile", href: "/dashboard/profile", icon: User },
    { name: "Team", href: "/dashboard/team", icon: Users },
    { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
    { name: "Appearance", href: "/dashboard/appearance", icon: Palette },
    { name: "Security", href: "/dashboard/security", icon: Shield },
    { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
    { name: "Invoices", href: "/dashboard/invoices", icon: Receipt },
    { name: "API Keys", href: "/dashboard/api", icon: Key },
  ] as NavItem[],
  user: {
    name: "John Doe",
    email: "john@example.com",
    isPro: false,
    apiKeysCount: 0,
    memberSince: "Jan 2024",
    proSince: undefined,
  } as UserData,
  upgradeCard: {
    title: "Upgrade to Pro",
    description: "Unlock all features and get unlimited access.",
    features: [
      "Access to all Pro components",
      "API access for automation",
      "Team collaboration features",
      "Priority support",
    ],
    ctaLabel: "Upgrade Now",
    ctaHref: "/pricing",
  },
}

interface AppDashboard1Props {
  dashboardNav?: NavItem[]
  settingsNav?: NavItem[]
  currentPath?: string
  user?: UserData
  upgradeCard?: {
    title: string
    description: string
    features: string[]
    ctaLabel: string
    ctaHref: string
  }
  children?: React.ReactNode
  className?: string
}

export function AppDashboard1({
  dashboardNav = pageDashboard1Defaults.dashboardNav,
  settingsNav = pageDashboard1Defaults.settingsNav,
  currentPath = "/dashboard",
  user = pageDashboard1Defaults.user,
  upgradeCard = pageDashboard1Defaults.upgradeCard,
  children,
  className,
}: AppDashboard1Props) {
  const stats: StatItem[] = [
    {
      title: "Plan",
      value: user.isPro ? "Pro" : "Free",
      description: user.isPro
        ? "Lifetime access to all features"
        : "Upgrade to unlock Pro features",
      icon: Sparkles,
    },
    {
      title: "API Keys",
      value: user.isPro ? String(user.apiKeysCount) : "—",
      description: user.isPro ? "Active API keys" : "Available with Pro",
      icon: Key,
    },
    {
      title: "Member Since",
      value: user.memberSince,
      description: user.proSince
        ? `Pro since ${user.proSince}`
        : "Account created",
      icon: Calendar,
    },
  ]

  return (
    <div className={cn("container px-6 py-8", className)}>
      <div className="flex gap-8">
        {/* Sidebar */}
        <DashboardSidebar
          dashboardNav={dashboardNav}
          settingsNav={settingsNav}
          currentPath={currentPath}
        />

        {/* Main Content */}
        <main className="min-w-0 flex-1">
          <div className="space-y-6">
            {/* Page Header */}
            <PageHeader
              title={`Welcome back, ${user.name.split(" ")[0]}`}
              description="Here's an overview of your account"
              badge={
                <Badge variant={user.isPro ? "default" : "secondary"}>
                  {user.isPro ? "Pro" : "Free"}
                </Badge>
              }
            />

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {stats.map((stat) => (
                <StatCard
                  key={stat.title}
                  title={stat.title}
                  value={stat.value}
                  description={stat.description}
                  icon={stat.icon}
                />
              ))}
            </div>

            {/* Upgrade Card (shown for free users) */}
            {!user.isPro && (
              <UpgradeCard
                title={upgradeCard.title}
                description={upgradeCard.description}
                features={upgradeCard.features}
                ctaLabel={upgradeCard.ctaLabel}
                ctaHref={upgradeCard.ctaHref}
              />
            )}

            {/* Custom Content */}
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
