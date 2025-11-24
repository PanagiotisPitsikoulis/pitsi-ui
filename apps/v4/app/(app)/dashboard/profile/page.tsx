import { redirect } from "next/navigation"
import { User } from "lucide-react"

import { getCurrentUser } from "@/lib/server/user"
import { Badge } from "@/registry/new-york-v4/ui/badge"
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

export default async function ProfilePage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/api/auth/signin")
  }

  const nameParts = user.name.split(" ")
  const firstName = nameParts[0] || ""
  const lastName = nameParts.slice(1).join(" ") || ""

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">Manage your profile information</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>
            Your account profile information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            {user.image ? (
              <img
                src={user.image}
                alt={user.name}
                className="size-20 rounded-full object-cover"
              />
            ) : (
              <div className="bg-primary/10 flex size-20 items-center justify-center rounded-full">
                <User className="text-primary size-10" />
              </div>
            )}
            <div>
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-muted-foreground text-sm">{user.email}</p>
              <Badge
                variant={user.isPro ? "default" : "secondary"}
                className="mt-1"
              >
                {user.isPro ? "Pro" : "Free"}
              </Badge>
            </div>
          </div>
          <Separator />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                defaultValue={firstName}
                disabled
                className="bg-muted"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                defaultValue={lastName}
                disabled
                className="bg-muted"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              defaultValue={user.email}
              disabled
              className="bg-muted"
            />
          </div>
          <p className="text-muted-foreground text-xs">
            Profile information is managed through your authentication provider.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
