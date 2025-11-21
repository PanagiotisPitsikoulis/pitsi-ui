export default function HorizontalStats() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
          Our work in number
        </h2>
        <div className="flex flex-col gap-10 md:flex-row md:justify-between xl:gap-14">
          <div className="w-full rounded-2xl bg-gray-50 p-5 lg:w-1/3">
            <div className="flex gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-sm">
                {/* SVG removed */}
              </div>
              <div className="flex-1">
                <div className="font-manrope mb-1 text-2xl font-bold text-indigo-600">
                  975+
                </div>
                <span className="text-gray-500">Active Clients</span>
              </div>
            </div>
          </div>
          <div className="w-full rounded-2xl bg-gray-50 p-5 lg:w-1/3">
            <div className="flex gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-sm">
                {/* SVG removed */}
              </div>
              <div className="flex-1">
                <div className="font-manrope mb-1 text-2xl font-bold text-indigo-600">
                  724+
                </div>
                <span className="text-gray-500">Projects Delivered</span>
              </div>
            </div>
          </div>
          <div className="w-full rounded-2xl bg-gray-50 p-5 lg:w-1/3">
            <div className="flex gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-sm">
                {/* SVG removed */}
              </div>
              <div className="flex-1">
                <div className="font-manrope mb-1 text-2xl font-bold text-indigo-600">
                  89+
                </div>
                <span className="text-gray-500">Orders in Queue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
