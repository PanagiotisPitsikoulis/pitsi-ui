export default function PerformanceInsightAndAnalytics() {
  return (
    <section className="font-inter py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 xl:grid-cols-2">
          <h2 className="font-manrope text-center text-4xl font-bold text-black xl:text-start">
            Performance Insight And Analytics Analysis
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="mx-auto flex w-10/12 items-center gap-4 rounded-xl bg-indigo-50 p-5 sm:w-full">
              <a className="flex h-14 w-14 items-center justify-center rounded-xl border border-indigo-200 bg-white shadow-sm">
                {/* SVG removed */}
              </a>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-manrope text-2xl font-bold text-gray-900">
                  130+
                </h3>
                <p className="text-base leading-6 font-normal text-gray-500">
                  Active Clients
                </p>
              </div>
            </div>
            <div className="mx-auto flex w-10/12 items-center gap-4 rounded-xl bg-indigo-50 p-5 sm:w-full">
              <a className="flex h-14 w-14 items-center justify-center rounded-xl border border-indigo-200 bg-white shadow-sm">
                {/* SVG removed */}
              </a>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-manrope text-2xl font-bold text-gray-900">
                  80+
                </h3>
                <p className="text-base leading-6 font-normal text-gray-500">
                  Projects Delivered
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
