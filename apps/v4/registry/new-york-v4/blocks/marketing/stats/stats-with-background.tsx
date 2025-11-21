export default function StatsWithBackground() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 flex-col justify-center gap-10 lg:flex-row lg:justify-between">
          <div className="mx-auto w-full rounded-xl bg-indigo-50 p-12 lg:w-1/4">
            <div className="font-manrope mb-3 text-center text-5xl font-semibold text-indigo-600">
              260+
            </div>
            <span className="block text-center text-lg text-gray-900">
              Expert Consultants
            </span>
          </div>
          <div className="mx-auto w-full rounded-xl bg-indigo-50 p-12 lg:w-1/4">
            <div className="font-manrope mb-3 text-center text-5xl font-semibold text-indigo-600">
              975+
            </div>
            <span className="block text-center text-lg text-gray-900">
              Active Clients
            </span>
          </div>
          <div className="mx-auto w-full rounded-xl bg-indigo-50 p-12 lg:w-1/4">
            <div className="font-manrope mb-3 text-center text-5xl font-semibold text-indigo-600">
              724+
            </div>
            <span className="block text-center text-lg text-gray-900">
              Projects Delivered
            </span>
          </div>
          <div className="mx-auto w-full rounded-xl bg-indigo-50 p-12 lg:w-1/4">
            <div className="font-manrope mb-3 text-center text-5xl font-semibold text-indigo-600">
              89+
            </div>
            <span className="block text-center text-lg text-gray-900">
              Orders in Queue
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
