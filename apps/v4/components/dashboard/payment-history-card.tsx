import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"

export function PaymentHistoryCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment History</CardTitle>
        <CardDescription>
          View your invoices in the Invoices tab
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          You can view and download your invoices from the{" "}
          <Link href="/dashboard/invoices" className="text-primary underline">
            Invoices
          </Link>{" "}
          page.
        </p>
      </CardContent>
    </Card>
  )
}
