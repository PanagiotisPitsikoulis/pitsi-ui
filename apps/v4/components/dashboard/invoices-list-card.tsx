import { Download, ExternalLink } from "@/lib/icons"

import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"

import { ListItemRow } from "./list-item-row"

interface Invoice {
  id: string
  number: string | null
  date: string | null
  amount: string
  status: string | null
  pdfUrl: string | null | undefined
  hostedUrl: string | null | undefined
}

interface InvoicesListCardProps {
  invoices: Invoice[]
}

export function InvoicesListCard({ invoices }: InvoicesListCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoices</CardTitle>
        <CardDescription>Download invoices for your records</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {invoices.map((invoice) => (
            <ListItemRow
              key={invoice.id}
              title={invoice.number || "Invoice"}
              subtitle={`${invoice.date} • ${invoice.amount}`}
              badge={
                <Badge
                  variant={invoice.status === "paid" ? "success" : "secondary"}
                >
                  {invoice.status}
                </Badge>
              }
              actions={
                <>
                  {invoice.pdfUrl && (
                    <Button variant="ghost" size="icon-sm" asChild>
                      <a
                        href={invoice.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="size-4" />
                      </a>
                    </Button>
                  )}
                  {invoice.hostedUrl && (
                    <Button variant="ghost" size="icon-sm" asChild>
                      <a
                        href={invoice.hostedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    </Button>
                  )}
                </>
              }
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
