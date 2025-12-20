export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col overflow-hidden bg-transparent">
      {children}
    </div>
  )
}
