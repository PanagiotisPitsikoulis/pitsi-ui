export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-[calc(100svh-56px)] flex-col overflow-hidden">
      {children}
    </div>
  )
}
