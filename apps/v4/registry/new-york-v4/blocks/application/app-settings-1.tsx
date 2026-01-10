"use client"

import * as React from "react"
import Link from "next/link"
import {
  Bell,
  CreditCard,
  Key,
  LayoutDashboard,
  Palette,
  Receipt,
  Shield,
  User,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import { Switch } from "@/registry/new-york-v4/ui/switch"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"

// Types
interface NavItem {
  name: string
  href: string
  icon: React.ElementType
}

interface UserProfile {
  name: string
  email: string
  avatar?: string
  bio?: string
  website?: string
  timezone?: string
}

// Sidebar Component
function SettingsSidebar({
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

// Profile Form Component
function ProfileForm({
  user,
  onSave,
}: {
  user: UserProfile
  onSave?: (data: UserProfile) => void
}) {
  const [formData, setFormData] = React.useState(user)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave?.(formData)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>
          Manage your public profile information.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Avatar */}
          <div className="flex items-center gap-4">
            <Avatar className="size-20">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="text-lg">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <Button variant="outline" size="sm">
                Change Avatar
              </Button>
              <p className="text-muted-foreground text-xs">
                JPG, PNG or GIF. Max 2MB.
              </p>
            </div>
          </div>

          <Separator />

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Display Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData((d) => ({ ...d, name: e.target.value }))
              }
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((d) => ({ ...d, email: e.target.value }))
              }
            />
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={(e) =>
                setFormData((d) => ({ ...d, bio: e.target.value }))
              }
              placeholder="Tell us about yourself..."
              rows={3}
            />
          </div>

          {/* Website */}
          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              type="url"
              value={formData.website}
              onChange={(e) =>
                setFormData((d) => ({ ...d, website: e.target.value }))
              }
              placeholder="https://example.com"
            />
          </div>

          {/* Timezone */}
          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <Select
              value={formData.timezone}
              onValueChange={(v) => setFormData((d) => ({ ...d, timezone: v }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc">UTC</SelectItem>
                <SelectItem value="est">Eastern Time (EST)</SelectItem>
                <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                <SelectItem value="cet">Central European Time (CET)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end">
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

// Notifications Form Component
function NotificationsForm() {
  const [emailNotifications, setEmailNotifications] = React.useState(true)
  const [marketingEmails, setMarketingEmails] = React.useState(false)
  const [securityAlerts, setSecurityAlerts] = React.useState(true)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>
          Configure how you receive notifications.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Email Notifications</Label>
            <p className="text-muted-foreground text-sm">
              Receive notifications via email.
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
            <Label>Marketing Emails</Label>
            <p className="text-muted-foreground text-sm">
              Receive marketing and promotional emails.
            </p>
          </div>
          <Switch
            checked={marketingEmails}
            onCheckedChange={setMarketingEmails}
          />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Security Alerts</Label>
            <p className="text-muted-foreground text-sm">
              Get notified about security events.
            </p>
          </div>
          <Switch
            checked={securityAlerts}
            onCheckedChange={setSecurityAlerts}
          />
        </div>
      </CardContent>
    </Card>
  )
}

// Appearance Form Component
function AppearanceForm() {
  const [theme, setTheme] = React.useState("system")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>
          Customize the appearance of the application.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Theme</Label>
          <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-muted-foreground text-sm">
            Select your preferred color theme.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

// Default data
const appSettings1Defaults = {
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
  currentPath: "/dashboard/profile",
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder.svg",
    bio: "Software developer passionate about building great products.",
    website: "https://johndoe.com",
    timezone: "utc",
  } as UserProfile,
  variant: "profile" as "profile" | "notifications" | "appearance",
}

interface AppSettings1Props {
  dashboardNav?: NavItem[]
  settingsNav?: NavItem[]
  currentPath?: string
  user?: UserProfile
  variant?: "profile" | "notifications" | "appearance"
  onSave?: (data: UserProfile) => void
  className?: string
}

export function AppSettings1({
  dashboardNav = appSettings1Defaults.dashboardNav,
  settingsNav = appSettings1Defaults.settingsNav,
  currentPath = appSettings1Defaults.currentPath,
  user = appSettings1Defaults.user,
  variant = appSettings1Defaults.variant,
  onSave,
  className,
}: AppSettings1Props) {
  const pageTitle = {
    profile: "Profile Settings",
    notifications: "Notification Preferences",
    appearance: "Appearance",
  }[variant]

  const pageDescription = {
    profile: "Manage your account settings and profile information.",
    notifications: "Configure how and when you receive notifications.",
    appearance: "Customize the look and feel of the application.",
  }[variant]

  return (
    <div className={cn("container px-6 py-8", className)}>
      <div className="flex gap-8">
        {/* Sidebar */}
        <SettingsSidebar
          dashboardNav={dashboardNav}
          settingsNav={settingsNav}
          currentPath={currentPath}
        />

        {/* Main Content */}
        <main className="min-w-0 flex-1">
          <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col gap-1">
              <h1 className="display text-2xl font-bold tracking-tight">
                {pageTitle}
              </h1>
              <p className="text-muted-foreground text-sm">{pageDescription}</p>
            </div>

            {/* Form Content */}
            {variant === "profile" && (
              <ProfileForm user={user} onSave={onSave} />
            )}
            {variant === "notifications" && <NotificationsForm />}
            {variant === "appearance" && <AppearanceForm />}
          </div>
        </main>
      </div>
    </div>
  )
}
