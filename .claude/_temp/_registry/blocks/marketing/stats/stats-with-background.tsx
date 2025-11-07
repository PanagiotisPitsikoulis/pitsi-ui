export default function StatsWithBackground() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col flex-1 gap-10 justify-center lg:flex-row lg:justify-between">
          <div className="w-full mx-auto lg:w-1/4 bg-indigo-50 p-12 rounded-xl">
            <div className="font-manrope font-semibold text-5xl text-indigo-600 mb-3 text-center ">
              260+
            </div>
            <span className="text-lg text-gray-900 text-center block ">
              Expert Consultants
            </span>
          </div>
          <div className="w-full mx-auto lg:w-1/4 bg-indigo-50 p-12 rounded-xl">
            <div className="font-manrope font-semibold text-5xl text-indigo-600 mb-3 text-center ">
              975+
            </div>
            <span className="text-lg text-gray-900 text-center block ">
              Active Clients
            </span>
          </div>
          <div className="w-full mx-auto lg:w-1/4 bg-indigo-50 p-12 rounded-xl">
            <div className="font-manrope font-semibold text-5xl text-indigo-600 mb-3 text-center ">
              724+
            </div>
            <span className="text-lg text-gray-900 text-center block ">
              Projects Delivered
            </span>
          </div>
          <div className="w-full mx-auto lg:w-1/4 bg-indigo-50 p-12 rounded-xl">
            <div className="font-manrope font-semibold text-5xl text-indigo-600 mb-3 text-center ">
              89+
            </div>
            <span className="text-lg text-gray-900 text-center block ">
              Orders in Queue
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
