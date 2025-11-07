export default function StatsWithIndicators() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 flex-col gap-10 lg:flex-row lg:justify-between lg:gap-0">
          <div className="w-full text-center lg:w-1/4 lg:text-left">
            <span className="mb-3 block text-xl text-gray-500">
              Expert Consultants
            </span>
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <span className="h-5 w-5 rounded bg-indigo-600" />
              <div className="font-manrope text-4xl font-semibold text-gray-900">
                260+
              </div>
            </div>
          </div>
          <div className="w-full text-center lg:w-1/4 lg:text-left">
            <span className="mb-3 block text-xl text-gray-500">
              Active Clients
            </span>
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <span className="h-5 w-5 rounded bg-amber-500" />
              <div className="font-manrope text-4xl font-semibold text-gray-900">
                975+
              </div>
            </div>
          </div>
          <div className="w-full text-center lg:w-1/4 lg:text-left">
            <span className="mb-3 block text-xl text-gray-500">
              Projects Delivered
            </span>
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <span className="h-5 w-5 rounded bg-rose-500" />
              <div className="font-manrope text-4xl font-semibold text-gray-900">
                724+
              </div>
            </div>
          </div>
          <div className="w-full text-center lg:w-1/4 lg:text-left">
            <span className="mb-3 block text-xl text-gray-500">
              Orders in Queue
            </span>
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <span className="h-5 w-5 rounded bg-teal-500" />
              <div className="font-manrope text-4xl font-semibold text-gray-900">
                89+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
