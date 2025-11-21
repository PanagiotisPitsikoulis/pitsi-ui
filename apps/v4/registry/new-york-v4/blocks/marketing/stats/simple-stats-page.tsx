export default function SimpleStatsPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 flex-col gap-10 lg:flex-row lg:justify-between lg:gap-0">
          <div className="w-full border-b border-gray-100 pb-10 lg:w-1/4 lg:border-r lg:border-b-0 lg:pb-0">
            <div className="font-manrope mb-5 text-center text-5xl font-bold text-gray-900">
              260+
            </div>
            <span className="block text-center text-xl text-gray-500">
              Expert Consultants
            </span>
          </div>
          <div className="w-full border-b border-gray-100 pb-10 lg:w-1/4 lg:border-r lg:border-b-0 lg:pb-0">
            <div className="font-manrope mb-5 text-center text-5xl font-bold text-gray-900">
              975+
            </div>
            <span className="block text-center text-xl text-gray-500">
              Active Clients
            </span>
          </div>
          <div className="w-full border-b border-gray-100 pb-10 lg:w-1/4 lg:border-r lg:border-b-0 lg:pb-0">
            <div className="font-manrope mb-5 text-center text-5xl font-bold text-gray-900">
              724+
            </div>
            <span className="block text-center text-xl text-gray-500">
              Projects Delivered
            </span>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="font-manrope mb-5 text-center text-5xl font-bold text-gray-900">
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
