export default function StatsWithCustomIcon() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 flex-col gap-14 lg:flex-row lg:justify-between lg:gap-0">
          <div className="w-full lg:w-1/4">
            <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-50">
              {/* SVG removed */}
            </div>
            <div className="font-manrope mb-3 text-center text-4xl font-semibold text-gray-900">
              260+
            </div>
            <span className="block text-center text-xl text-gray-500">
              Expert Consultants
            </span>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-50">
              {/* SVG removed */}
            </div>
            <div className="font-manrope mb-3 text-center text-4xl font-semibold text-gray-900">
              975+
            </div>
            <span className="block text-center text-xl text-gray-500">
              Active Clients
            </span>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-50">
              {/* SVG removed */}
            </div>
            <div className="font-manrope mb-3 text-center text-4xl font-semibold text-gray-900">
              724+
            </div>
            <span className="block text-center text-xl text-gray-500">
              Projects Delivered
            </span>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-50">
              {/* SVG removed */}
            </div>
            <div className="font-manrope mb-3 text-center text-4xl font-semibold text-gray-900">
              89+
            </div>
            <span className="block text-center text-xl text-gray-500">
              Orders in Queue
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
