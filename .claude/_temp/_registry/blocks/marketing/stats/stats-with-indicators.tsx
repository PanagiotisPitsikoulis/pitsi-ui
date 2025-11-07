export default function StatsWithIndicators() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col flex-1 gap-10 lg:gap-0 lg:flex-row lg:justify-between">
          <div className="w-full lg:w-1/4 text-center lg:text-left">
            <span className="text-xl text-gray-500  block mb-3">
              Expert Consultants
            </span>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="w-5 h-5 bg-indigo-600 rounded" />
              <div className="font-manrope text-4xl text-gray-900 font-semibold">
                260+
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4 text-center lg:text-left">
            <span className="text-xl text-gray-500  block mb-3">
              Active Clients
            </span>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="w-5 h-5 bg-amber-500 rounded" />
              <div className="font-manrope text-4xl text-gray-900 font-semibold">
                975+
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4 text-center lg:text-left">
            <span className="text-xl text-gray-500  block mb-3">
              Projects Delivered
            </span>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="w-5 h-5 bg-rose-500 rounded" />
              <div className="font-manrope text-4xl text-gray-900 font-semibold">
                724+
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4 text-center lg:text-left">
            <span className="text-xl text-gray-500  block mb-3">
              Orders in Queue
            </span>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="w-5 h-5 bg-teal-500 rounded" />
              <div className="font-manrope text-4xl text-gray-900 font-semibold">
                89+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
