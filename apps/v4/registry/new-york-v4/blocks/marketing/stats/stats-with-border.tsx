export default function StatsWithBorder() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-0">
          <div className="border-t-2 border-indigo-600">
            <div className="font-manrope mb-2 pt-10 text-center text-5xl font-semibold text-gray-900">
              260+
            </div>
            <span className="block text-center text-xl text-gray-500">
              Expert Consultants
            </span>
          </div>
          <div className="border-t-2 border-red-500">
            <div className="font-manrope mb-2 pt-10 text-center text-5xl font-semibold text-gray-900">
              975+
            </div>
            <span className="block text-center text-xl text-gray-500">
              Active Clients
            </span>
          </div>
          <div className="border-t-2 border-emerald-500">
            <div className="font-manrope mb-2 pt-10 text-center text-5xl font-semibold text-gray-900">
              724+
            </div>
            <span className="block text-center text-xl text-gray-500">
              Projects Delivered
            </span>
          </div>
          <div className="border-t-2 border-amber-500">
            <div className="font-manrope mb-2 pt-10 text-center text-5xl font-semibold text-gray-900">
              89+
            </div>
            <span className="block text-center text-xl text-gray-500">
              Orders in Queue
            </span>
          </div>
          <div className="border-t-2 border-sky-500">
            <div className="font-manrope mb-2 pt-10 text-center text-5xl font-semibold text-gray-900">
              95%
            </div>
            <span className="block text-center text-xl text-gray-500">
              Issue Resolved
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
