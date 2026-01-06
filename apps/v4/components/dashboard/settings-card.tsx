import { ReactNode } from "react"

import { Save } from "@/lib/icons"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"

interface SettingsCardProps {
  title: string
  description: string
  children: ReactNode
  saveLabel?: string
  onSave?: () => void
}

export function SettingsCard({
  title,
  description,
  children,
  saveLabel = "Save Changes",
  onSave,
}: SettingsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">{children}</CardContent>
      <CardFooter>
        <Button onClick={onSave}>
          <Save className="mr-2 size-4" />
          {saveLabel}
        </Button>
      </CardFooter>
    </Card>
  )
}
