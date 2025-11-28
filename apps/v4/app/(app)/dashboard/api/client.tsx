"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  AlertCircle,
  Check,
  Copy,
  Key,
  Loader2,
  Plus,
  Sparkles,
  Trash2,
} from "lucide-react"

import { Alert, AlertDescription } from "@/registry/new-york-v4/ui/alert"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york-v4/ui/dialog"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"

type ApiKey = {
  id: string
  name: string
  keyPrefix: string
  createdAt: Date
  lastUsedAt: Date | null
}

export function ApiKeysClient({
  initialKeys,
  isPro,
}: {
  initialKeys: ApiKey[]
  isPro: boolean
}) {
  const router = useRouter()
  const [keys, setKeys] = useState(initialKeys)
  const [isCreating, setIsCreating] = useState(false)
  const [newKeyName, setNewKeyName] = useState("")
  const [newKeyValue, setNewKeyValue] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const handleCreateKey = async () => {
    if (!newKeyName.trim()) return

    setIsCreating(true)
    try {
      const response = await fetch("/api/keys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newKeyName }),
      })

      if (response.ok) {
        const { key } = await response.json()
        setNewKeyValue(key.fullKey)
        setKeys((prev) => [...prev, key])
        setNewKeyName("")
        router.refresh()
      }
    } finally {
      setIsCreating(false)
    }
  }

  const handleDeleteKey = async (keyId: string) => {
    setDeletingId(keyId)
    try {
      const response = await fetch(`/api/keys?id=${keyId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setKeys((prev) => prev.filter((k) => k.id !== keyId))
        router.refresh()
      }
    } finally {
      setDeletingId(null)
    }
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
    setNewKeyValue(null)
    setNewKeyName("")
  }

  if (!isPro) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
          <CardDescription>
            API keys are available for Pro users
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Key className="text-muted-foreground mb-4 size-12" />
            <h3 className="mb-2 text-lg font-semibold">Upgrade to Pro</h3>
            <p className="text-muted-foreground mb-4 max-w-sm text-sm">
              Get access to API keys for private registry authentication and
              unlock all Pro components.
            </p>
            <Button asChild>
              <Link href="/#pricing">
                <Sparkles className="mr-2 size-4" />
                Upgrade to Pro
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your API Keys</CardTitle>
          <CardDescription>
            Use these keys to authenticate with the pitsi registry
          </CardDescription>
        </CardHeader>
        <CardContent>
          {keys.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <Key className="text-muted-foreground mb-4 size-12" />
              <h3 className="mb-2 text-lg font-semibold">No API keys yet</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Create an API key to authenticate with the registry.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {keys.map((key) => (
                <div
                  key={key.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div className="flex items-center gap-3">
                    <Key className="text-muted-foreground size-4" />
                    <div>
                      <p className="font-medium">{key.name}</p>
                      <p className="text-muted-foreground font-mono text-xs">
                        {key.keyPrefix}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground text-xs">
                      {key.lastUsedAt
                        ? `Last used ${new Date(key.lastUsedAt).toLocaleDateString()}`
                        : "Never used"}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => handleDeleteKey(key.id)}
                      disabled={deletingId === key.id}
                    >
                      {deletingId === key.id ? (
                        <Loader2 className="size-4 animate-spin" />
                      ) : (
                        <Trash2 className="size-4" />
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 size-4" />
                Create API Key
              </Button>
            </DialogTrigger>
            <DialogContent>
              {newKeyValue ? (
                <>
                  <DialogHeader>
                    <DialogTitle>API Key Created</DialogTitle>
                    <DialogDescription>
                      Copy your API key now. You won&apos;t be able to see it
                      again.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Alert>
                      <AlertCircle className="size-4" />
                      <AlertDescription>
                        Make sure to copy your API key now. You won&apos;t be
                        able to see it again!
                      </AlertDescription>
                    </Alert>
                    <div className="flex gap-2">
                      <Input
                        value={newKeyValue}
                        readOnly
                        className="font-mono text-xs"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleCopy(newKeyValue)}
                      >
                        {copied ? (
                          <Check className="size-4" />
                        ) : (
                          <Copy className="size-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button onClick={handleDialogClose}>Done</Button>
                  </DialogFooter>
                </>
              ) : (
                <>
                  <DialogHeader>
                    <DialogTitle>Create API Key</DialogTitle>
                    <DialogDescription>
                      Give your API key a name to help you identify it later.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="My Project"
                        value={newKeyName}
                        onChange={(e) => setNewKeyName(e.target.value)}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleCreateKey}
                      disabled={isCreating || !newKeyName.trim()}
                    >
                      {isCreating ? (
                        <>
                          <Loader2 className="mr-2 size-4 animate-spin" />
                          Creating...
                        </>
                      ) : (
                        "Create Key"
                      )}
                    </Button>
                  </DialogFooter>
                </>
              )}
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>

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
    </div>
  )
}
