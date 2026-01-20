import { ServicesFooter } from "./_components/services-footer"
import { ServicesHeader } from "./_components/services-header"

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-svh flex-col">
      <ServicesHeader />
      <main className="flex flex-1 flex-col">{children}</main>
      <ServicesFooter />
    </div>
  )
}
