export default function StatsWithBorder() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between gap-10 flex-col lg:gap-0 lg:flex-row">
          <div className="border-t-2 border-indigo-600 ">
            <div className="font-manrope font-semibold text-5xl text-gray-900 mb-2 text-center pt-10">
              260+
            </div>
            <span className="text-xl text-gray-500 text-center block ">
              Expert Consultants
            </span>
          </div>
          <div className="border-t-2 border-red-500 ">
            <div className="font-manrope font-semibold text-5xl text-gray-900 mb-2 text-center pt-10">
              975+
            </div>
            <span className="text-xl text-gray-500 text-center block ">
              Active Clients
            </span>
          </div>
          <div className="border-t-2 border-emerald-500 ">
            <div className="font-manrope font-semibold text-5xl text-gray-900 mb-2 text-center pt-10">
              724+
            </div>
            <span className="text-xl text-gray-500 text-center block ">
              Projects Delivered
            </span>
          </div>
          <div className="border-t-2 border-amber-500 ">
            <div className="font-manrope font-semibold text-5xl text-gray-900 mb-2 text-center pt-10">
              89+
            </div>
            <span className="text-xl text-gray-500 text-center block ">
              Orders in Queue
            </span>
          </div>
          <div className="border-t-2 border-sky-500 ">
            <div className="font-manrope font-semibold text-5xl text-gray-900 mb-2 text-center pt-10">
              95%
            </div>
            <span className="text-xl text-gray-500 text-center block ">
              Issue Resolved
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
