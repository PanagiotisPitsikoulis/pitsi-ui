"use client"

import { Save } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Separator } from "@/registry/new-york-v4/ui/separator"

export default function AppearancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Appearance</h1>
        <p className="text-muted-foreground">
          Customize the look and feel of your dashboard
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Appearance Settings</CardTitle>
          <CardDescription>
            Customize the look and feel of your dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Theme</Label>
            <div className="grid grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                <div className="bg-background size-12 rounded border" />
                Light
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                <div className="bg-foreground size-12 rounded border" />
                Dark
              </Button>
              <Button variant="outline" className="h-auto flex-col gap-2 py-4">
                <div className="from-background to-foreground size-12 rounded border bg-gradient-to-br" />
                System
              </Button>
            </div>
          </div>
          <Separator />
          <div className="space-y-2">
            <Label>Accent Color</Label>
            <div className="flex gap-2">
              {["blue", "green", "purple", "red", "orange"].map((color) => (
                <button
                  key={color}
                  className="size-10 rounded-full border-2 transition-all hover:scale-110"
                  style={{
                    backgroundColor: color,
                    borderColor: color === "blue" ? "black" : "transparent",
                  }}
                />
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>
            <Save className="mr-2 size-4" />
            Save Appearance
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
