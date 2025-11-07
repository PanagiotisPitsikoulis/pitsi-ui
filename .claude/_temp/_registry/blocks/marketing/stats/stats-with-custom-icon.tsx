export default function StatsWithCustomIcon() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col flex-1 gap-14 lg:gap-0 lg:flex-row lg:justify-between">
          <div className="w-full lg:w-1/4">
            <div className="w-14 h-14 mx-auto rounded-lg bg-indigo-50 flex justify-center items-center mb-8 ">
              {/* SVG removed */}
            </div>
            <div className="font-manrope font-semibold text-4xl text-gray-900 mb-3 text-center ">
              260+
            </div>
            <span className="text-xl text-gray-500 text-center block ">
              Expert Consultants
            </span>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="w-14 h-14 mx-auto rounded-lg bg-indigo-50 flex justify-center items-center mb-8 ">
              {/* SVG removed */}
            </div>
            <div className="font-manrope font-semibold text-4xl text-gray-900 mb-3 text-center ">
              975+
            </div>
            <span className="text-xl text-gray-500 text-center block ">
              Active Clients
            </span>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="w-14 h-14 mx-auto rounded-lg bg-indigo-50 flex justify-center items-center mb-8 ">
              {/* SVG removed */}
            </div>
            <div className="font-manrope font-semibold text-4xl text-gray-900 mb-3 text-center ">
              724+
            </div>
            <span className="text-xl text-gray-500 text-center block ">
              Projects Delivered
            </span>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="w-14 h-14 mx-auto rounded-lg bg-indigo-50 flex justify-center items-center mb-8 ">
              {/* SVG removed */}
            </div>
            <div className="font-manrope font-semibold text-4xl text-gray-900 mb-3 text-center ">
              89+
            </div>
            <span className="text-xl text-gray-500 text-center block ">
              Orders in Queue
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
