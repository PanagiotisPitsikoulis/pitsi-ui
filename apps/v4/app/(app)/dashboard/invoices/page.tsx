import { redirect } from "next/navigation"
import { Download, ExternalLink, FileText } from "lucide-react"

import { db } from "@/lib/server/db"
import { user as userTable } from "@/lib/server/db/schema"
import { stripe } from "@/lib/server/stripe"
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
import { eq } from "drizzle-orm"

async function getInvoices(stripeCustomerId: string | null) {
  if (!stripeCustomerId) {
    return []
  }

  try {
    const invoices = await stripe.invoices.list({
      customer: stripeCustomerId,
      limit: 100,
    })

    return invoices.data.map((invoice) => ({
      id: invoice.id,
      number: invoice.number,
      date: invoice.created
        ? new Date(invoice.created * 1000).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        : null,
      amount: invoice.amount_paid
        ? `€${(invoice.amount_paid / 100).toFixed(2)}`
        : "€0.00",
      status: invoice.status,
      pdfUrl: invoice.invoice_pdf,
      hostedUrl: invoice.hosted_invoice_url,
    }))
  } catch (error) {
    console.error("Error fetching invoices:", error)
    return []
  }
}

async function getPayments(stripeCustomerId: string | null) {
  if (!stripeCustomerId) {
    return []
  }

  try {
    const payments = await stripe.paymentIntents.list({
      customer: stripeCustomerId,
      limit: 100,
    })

    return payments.data
      .filter((payment) => payment.status === "succeeded")
      .map((payment) => ({
        id: payment.id,
        date: payment.created
          ? new Date(payment.created * 1000).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          : null,
        amount: `€${(payment.amount / 100).toFixed(2)}`,
        description: payment.description || "Pro Plan Purchase",
        status: payment.status,
      }))
  } catch (error) {
    console.error("Error fetching payments:", error)
    return []
  }
}

export default async function InvoicesPage() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    redirect("/signin")
  }

  // Get full user data with stripeCustomerId
  const userData = await db
    .select()
    .from(userTable)
    .where(eq(userTable.id, currentUser.id))
    .limit(1)

  const stripeCustomerId = userData[0]?.stripeCustomerId ?? null

  const [invoices, payments] = await Promise.all([
    getInvoices(stripeCustomerId),
    getPayments(stripeCustomerId),
  ])

  const hasInvoices = invoices.length > 0
  const hasPayments = payments.length > 0

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Invoices</h1>
        <p className="text-muted-foreground">
          View and download your payment history
        </p>
      </div>

      {!hasInvoices && !hasPayments ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileText className="text-muted-foreground mb-4 size-12" />
            <h3 className="mb-2 text-lg font-semibold">No invoices yet</h3>
            <p className="text-muted-foreground text-center text-sm">
              {currentUser.isPro
                ? "Your payment was processed but invoices may take a moment to appear."
                : "Upgrade to Pro to see your invoices here."}
            </p>
          </CardContent>
        </Card>
      ) : (
        <>
          {hasInvoices && (
            <Card>
              <CardHeader>
                <CardTitle>Invoices</CardTitle>
                <CardDescription>
                  Download invoices for your records
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {invoices.map((invoice) => (
                    <div
                      key={invoice.id}
                      className="flex items-center justify-between rounded-lg border p-3"
                    >
                      <div>
                        <p className="font-medium">
                          {invoice.number || "Invoice"}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {invoice.date} &bull; {invoice.amount}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            invoice.status === "paid" ? "success" : "secondary"
                          }
                        >
                          {invoice.status}
                        </Badge>
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
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {hasPayments && (
            <Card>
              <CardHeader>
                <CardTitle>Payments</CardTitle>
                <CardDescription>
                  Your payment history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {payments.map((payment) => (
                    <div
                      key={payment.id}
                      className="flex items-center justify-between rounded-lg border p-3"
                    >
                      <div>
                        <p className="font-medium">{payment.description}</p>
                        <p className="text-muted-foreground text-sm">
                          {payment.date} &bull; {payment.amount}
                        </p>
                      </div>
                      <Badge variant="success">Paid</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  )
}
