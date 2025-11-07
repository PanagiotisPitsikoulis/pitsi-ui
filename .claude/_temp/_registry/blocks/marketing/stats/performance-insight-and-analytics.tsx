export default function PerformanceInsightAndAnalytics() {
  return (
    <section className="py-24 font-inter">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14">
          <h2 className="text-4xl font-bold text-black font-manrope text-center xl:text-start">
            Performance Insight And Analytics Analysis
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex items-center gap-4 p-5 rounded-xl bg-indigo-50 w-10/12 sm:w-full mx-auto">
              <a className="w-14 h-14 flex items-center justify-center border border-indigo-200 rounded-xl bg-white shadow-sm">
                {/* SVG removed */}
              </a>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-2xl font-bold font-manrope text-gray-900">
                  130+
                </h3>
                <p className="text-base font-normal leading-6 text-gray-500">
                  Active Clients
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 rounded-xl bg-indigo-50 w-10/12 sm:w-full mx-auto">
              <a className="w-14 h-14 flex items-center justify-center border border-indigo-200 rounded-xl bg-white shadow-sm">
                {/* SVG removed */}
              </a>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-2xl font-bold font-manrope text-gray-900">
                  80+
                </h3>
                <p className="text-base font-normal leading-6 text-gray-500">
                  Projects Delivered
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
