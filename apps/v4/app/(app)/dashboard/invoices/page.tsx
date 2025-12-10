import { redirect } from "next/navigation"
import { FileText } from "lucide-react"

import { db } from "@/lib/server/db"
import { user as userTable } from "@/lib/server/db/schema"
import { stripe } from "@/lib/server/stripe"
import { getCurrentUser } from "@/lib/server/user"
import { eq } from "drizzle-orm"

import {
  EmptyStateCard,
  InvoicesListCard,
  PageHeader,
  PaymentsListCard,
} from "@/components/dashboard"

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
    redirect("/api/auth/signin")
  }

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
      <PageHeader
        title="Invoices"
        description="View and download your payment history"
      />
      {!hasInvoices && !hasPayments ? (
        <EmptyStateCard
          icon={FileText}
          title="No invoices yet"
          description={
            currentUser.isPro
              ? "Your payment was processed but invoices may take a moment to appear."
              : "Upgrade to Pro to see your invoices here."
          }
        />
      ) : (
        <>
          {hasInvoices && <InvoicesListCard invoices={invoices} />}
          {hasPayments && <PaymentsListCard payments={payments} />}
        </>
      )}
    </div>
  )
}
