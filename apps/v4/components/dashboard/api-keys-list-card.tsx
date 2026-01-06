"use client"

import { formatDate } from "@/lib/format"
import { Key, Loader2, Trash2 } from "@/lib/icons"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"

import { ApiKeyDialog } from "./api-key-dialog"
import { EmptyState } from "./empty-state"
import { ListItemRow } from "./list-item-row"

type ApiKey = {
  id: string
  name: string
  keyPrefix: string
  createdAt: Date
  lastUsedAt: Date | null
}

interface ApiKeysListCardProps {
  keys: ApiKey[]
  deletingId: string | null
  onDeleteKey: (keyId: string) => void
  isDialogOpen: boolean
  onDialogOpenChange: (open: boolean) => void
  newKeyName: string
  onKeyNameChange: (name: string) => void
  newKeyValue: string | null
  isCreating: boolean
  copied: boolean
  onCreateKey: () => void
  onCopy: (text: string) => void
  onDialogClose: () => void
}

export function ApiKeysListCard({
  keys,
  deletingId,
  onDeleteKey,
  isDialogOpen,
  onDialogOpenChange,
  newKeyName,
  onKeyNameChange,
  newKeyValue,
  isCreating,
  copied,
  onCreateKey,
  onCopy,
  onDialogClose,
}: ApiKeysListCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your API Keys</CardTitle>
        <CardDescription>
          Use these keys to authenticate with the pitsi registry
        </CardDescription>
      </CardHeader>
      <CardContent>
        {keys.length === 0 ? (
          <EmptyState
            icon={Key}
            title="No API keys yet"
            description="Create an API key to authenticate with the registry."
          />
        ) : (
          <div className="space-y-2">
            {keys.map((key) => (
              <ListItemRow
                key={key.id}
                title={key.name}
                subtitle={key.keyPrefix}
                icon={<Key className="text-muted-foreground size-4" />}
                badge={
                  <span className="text-muted-foreground text-xs">
                    {key.lastUsedAt
                      ? `Last used ${formatDate(key.lastUsedAt.toString())}`
                      : "Never used"}
                  </span>
                }
                actions={
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => onDeleteKey(key.id)}
                    disabled={deletingId === key.id}
                  >
                    {deletingId === key.id ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <Trash2 className="size-4" />
                    )}
                  </Button>
                }
              />
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <ApiKeyDialog
          isOpen={isDialogOpen}
          onOpenChange={onDialogOpenChange}
          newKeyName={newKeyName}
          onKeyNameChange={onKeyNameChange}
          newKeyValue={newKeyValue}
          isCreating={isCreating}
          copied={copied}
          onCreateKey={onCreateKey}
          onCopy={onCopy}
          onClose={onDialogClose}
        />
      </CardFooter>
    </Card>
  )
}
