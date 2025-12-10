import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"

export function TeamInfoCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>How it works</CardTitle>
        <CardDescription>Team member access and permissions</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h4 className="font-medium">What team members get</h4>
          <ul className="text-muted-foreground space-y-1 text-sm">
            <li>• Access to all Pro components via CLI</li>
            <li>• Ability to create their own API keys</li>
            <li>• Full documentation access</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium">Invitation process</h4>
          <ul className="text-muted-foreground space-y-1 text-sm">
            <li>• If the email is already registered, they get instant access</li>
            <li>• If not, they&apos;ll get access when they sign up</li>
            <li>• You can remove members at any time</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
