export default function ASnapshotOfOurPerformance() {
  return (
    <section className="font-inter py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-1.5 rounded-full bg-indigo-500 px-3 py-0.5">
            {/* SVG removed */}
            <span className="text-xs leading-5 font-medium text-white">
              Statistics
            </span>
          </div>
          <h2 className="font-manrope pt-0.5 text-center text-4xl font-bold text-gray-900">
            A Snapshot of Our Performance
          </h2>
        </div>
        <div className="pt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col gap-3 border-b border-gray-200 p-9 text-center sm:border-r">
              <h3 className="font-manrope text-4xl font-bold text-indigo-600">
                240+
              </h3>
              <p className="text-xl leading-8 font-medium text-gray-900">
                Company growth
              </p>
            </div>
            <div className="flex flex-col gap-3 border-b border-gray-200 p-9 text-center md:border-r">
              <h3 className="font-manrope text-4xl font-bold text-indigo-600">
                120%
              </h3>
              <p className="text-xl leading-8 font-medium text-gray-900">
                Projects Delivered
              </p>
            </div>
            <div className="flex flex-col gap-3 border-b border-gray-200 p-9 text-center sm:border-r md:border-r-0">
              <h3 className="font-manrope text-4xl font-bold text-indigo-600">
                100%
              </h3>
              <p className="text-xl leading-8 font-medium text-gray-900">
                Orders in Queue
              </p>
            </div>
            <div className="flex flex-col gap-3 border-b border-gray-200 p-9 text-center md:border-r md:border-b-0">
              <h3 className="font-manrope text-4xl font-bold text-indigo-600">
                160%
              </h3>
              <p className="text-xl leading-8 font-medium text-gray-900">
                Active Clients
              </p>
            </div>
            <div className="flex flex-col gap-3 border-b border-gray-200 p-9 text-center sm:border-r sm:border-b-0">
              <h3 className="font-manrope text-4xl font-bold text-indigo-600">
                160%
              </h3>
              <p className="text-xl leading-8 font-medium text-gray-900">
                Increase in new leads
              </p>
            </div>
            <div className="flex flex-col gap-3 p-9 text-center">
              <h3 className="font-manrope text-4xl font-bold text-indigo-600">
                180%
              </h3>
              <p className="text-xl leading-8 font-medium text-gray-900">
                Expert Consultants{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
