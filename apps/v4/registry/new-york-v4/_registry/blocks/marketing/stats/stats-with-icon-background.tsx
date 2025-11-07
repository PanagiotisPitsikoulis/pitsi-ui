export default function StatsWithIconBackground() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-4xl font-bold text-gray-900 lg:text-left">
          Our Stats
        </h2>
        <div className="flex flex-1 flex-col justify-center gap-10 lg:flex-row lg:justify-between">
          <div className="mx-auto w-full rounded-xl bg-white px-7 py-9 shadow-sm lg:w-1/4">
            <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 lg:mx-0">
              {/* SVG removed */}
            </div>
            <h4 className="mb-7 text-center text-xl text-gray-500 lg:text-left">
              Expert Consultants{" "}
            </h4>
            <div className="font-manrope text-center text-5xl font-semibold text-gray-900 lg:text-left">
              260+
            </div>
          </div>
          <div className="mx-auto w-full rounded-xl bg-white px-7 py-9 shadow-sm lg:w-1/4">
            <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 lg:mx-0">
              {/* SVG removed */}
            </div>
            <h4 className="mb-7 text-center text-xl text-gray-500 lg:text-left">
              Active Clients{" "}
            </h4>
            <div className="font-manrope text-center text-5xl font-semibold text-gray-900 lg:text-left">
              975+
            </div>
          </div>
          <div className="mx-auto w-full rounded-xl bg-white px-7 py-9 shadow-sm lg:w-1/4">
            <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 lg:mx-0">
              {/* SVG removed */}
            </div>
            <h4 className="mb-7 text-center text-xl text-gray-500 lg:text-left">
              Projects Delivered{" "}
            </h4>
            <div className="font-manrope text-center text-5xl font-semibold text-gray-900 lg:text-left">
              724+
            </div>
          </div>
          <div className="mx-auto w-full rounded-xl bg-white px-7 py-9 shadow-sm lg:w-1/4">
            <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-sky-50 lg:mx-0">
              {/* SVG removed */}
            </div>
            <h4 className="mb-7 text-center text-xl text-gray-500 lg:text-left">
              Orders in Queue
            </h4>
            <div className="font-manrope text-center text-5xl font-semibold text-gray-900 lg:text-left">
              89+
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
