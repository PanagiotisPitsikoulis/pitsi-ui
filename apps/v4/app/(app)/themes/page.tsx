import { Suspense } from "react"

import { CardsDemo } from "@/components/cards"
import { ThemeCustomizer } from "@/components/theme-customizer"

export default function ThemesPage() {
  return (
    <>
      <div id="themes" className="container scroll-mt-20 flex items-center justify-between gap-8 px-6 py-4 md:px-8">
        <Suspense fallback={<div className="h-10 w-full animate-pulse rounded bg-muted" />}>
          <ThemeCustomizer />
        </Suspense>
      </div>
      <div className="container section-soft flex flex-1 flex-col pb-6">
        <div className="theme-container flex flex-col">
          <Suspense fallback={<div className="grid gap-4 animate-pulse"><div className="h-96 rounded-lg bg-muted" /></div>}>
            <CardsDemo />
          </Suspense>
        </div>
      </div>
    </>
  )
}
