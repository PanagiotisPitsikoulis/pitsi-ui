import { Badge } from "@/registry/new-york-v4/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"

import { ListItemRow } from "./list-item-row"

interface Payment {
  id: string
  date: string | null
  amount: string
  description: string
  status: string
}

interface PaymentsListCardProps {
  payments: Payment[]
}

export function PaymentsListCard({ payments }: PaymentsListCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payments</CardTitle>
        <CardDescription>Your payment history</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {payments.map((payment) => (
            <ListItemRow
              key={payment.id}
              title={payment.description}
              subtitle={`${payment.date} • ${payment.amount}`}
              badge={<Badge variant="success">Paid</Badge>}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
