export default function TailwindStatsCard() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-14 text-center text-4xl font-bold text-gray-900">
          Our growing stats
        </h2>
        <div className="flex flex-1 flex-col justify-center gap-10 lg:flex-row lg:justify-between">
          <div className="mx-auto w-full rounded-xl bg-gray-50 p-8 lg:w-1/4">
            <div className="mb-8 flex justify-center"></div>
            <div className="font-manrope mb-3 text-center text-4xl font-semibold text-gray-900">
              260+
            </div>
            <span className="block text-center text-lg text-gray-500">
              Expert Consultants
            </span>
          </div>
          <div className="mx-auto w-full rounded-xl bg-gray-50 p-8 lg:w-1/4">
            <div className="mb-8 flex justify-center"></div>
            <div className="font-manrope mb-3 text-center text-4xl font-semibold text-gray-900">
              975+
            </div>
            <span className="block text-center text-lg text-gray-500">
              Active Clients
            </span>
          </div>
          <div className="mx-auto w-full rounded-xl bg-gray-50 p-8 lg:w-1/4">
            <div className="mb-8 flex justify-center"></div>
            <div className="font-manrope mb-3 text-center text-4xl font-semibold text-gray-900">
              724+
            </div>
            <span className="block text-center text-lg text-gray-500">
              Projects Delivered
            </span>
          </div>
          <div className="mx-auto w-full rounded-xl bg-gray-50 p-8 lg:w-1/4">
            <div className="mb-8 flex justify-center"></div>
            <div className="font-manrope mb-3 text-center text-4xl font-semibold text-gray-900">
              89+
            </div>
            <span className="block text-center text-lg text-gray-500">
              Orders in Queue
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
