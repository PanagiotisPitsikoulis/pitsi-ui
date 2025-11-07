export default function ASnapshotOfOurPerformance() {
  return (
    <section className="py-20 font-inter">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="flex items-center gap-1.5  bg-indigo-500 px-3 py-0.5 rounded-full">
            {/* SVG removed */}
            <span className="text-xs font-medium leading-5 text-white">
              Statistics
            </span>
          </div>
          <h2 className="text-4xl font-bold font-manrope text-gray-900 pt-0.5 text-center">
            A Snapshot of Our Performance
          </h2>
        </div>
        <div className="pt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="p-9 border-b sm:border-r border-gray-200 flex flex-col gap-3 text-center">
              <h3 className="text-4xl font-bold font-manrope text-indigo-600">
                240+
              </h3>
              <p className="text-xl font-medium leading-8 text-gray-900">
                Company growth
              </p>
            </div>
            <div className="p-9 border-b md:border-r border-gray-200 flex flex-col gap-3 text-center">
              <h3 className="text-4xl font-bold font-manrope text-indigo-600">
                120%
              </h3>
              <p className="text-xl font-medium leading-8 text-gray-900">
                Projects Delivered
              </p>
            </div>
            <div className="p-9 border-b sm:border-r md:border-r-0 border-gray-200 flex flex-col gap-3 text-center">
              <h3 className="text-4xl font-bold font-manrope text-indigo-600">
                100%
              </h3>
              <p className="text-xl font-medium leading-8 text-gray-900">
                Orders in Queue
              </p>
            </div>
            <div className="p-9 md:border-r border-b md:border-b-0 border-gray-200 flex flex-col gap-3 text-center">
              <h3 className="text-4xl font-bold font-manrope text-indigo-600">
                160%
              </h3>
              <p className="text-xl font-medium leading-8 text-gray-900">
                Active Clients
              </p>
            </div>
            <div className="p-9 sm:border-r border-b sm:border-b-0 border-gray-200 flex flex-col gap-3 text-center">
              <h3 className="text-4xl font-bold font-manrope text-indigo-600">
                160%
              </h3>
              <p className="text-xl font-medium leading-8 text-gray-900">
                Increase in new leads
              </p>
            </div>
            <div className="p-9 flex flex-col gap-3 text-center">
              <h3 className="text-4xl font-bold font-manrope text-indigo-600">
                180%
              </h3>
              <p className="text-xl font-medium leading-8 text-gray-900">
                Expert Consultants{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
