import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Label } from "@/registry/new-york-v4/ui/label"

export function ApiUsageCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Usage</CardTitle>
        <CardDescription>
          How to use your API key with the pitsi CLI
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Configure your registry</Label>
          <div className="bg-muted rounded-md p-3">
            <code className="text-sm">
              PITSI_API_KEY=your_api_key pitsi add button
            </code>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Or set it in your environment</Label>
          <div className="bg-muted rounded-md p-3">
            <code className="text-sm">export PITSI_API_KEY=your_api_key</code>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
