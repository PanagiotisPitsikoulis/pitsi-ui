export default function PerformanceMetricsStats() {
  return (
    <section className="font-inter bg-black py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-1.5 rounded-full border border-white bg-sky-300 px-2.5 py-0.5">
            {/* SVG removed */}
            <span className="text-xs leading-5 font-medium text-white">
              Statistics
            </span>
          </div>
          <h2 className="font-manrope text-4xl font-bold text-white">
            Performance Metrics
          </h2>
        </div>
        <div className="pt-14">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-4 rounded-2xl border border-zinc-700 p-5">
              <h4 className="text-xl leading-8 font-semibold text-white">
                Projects Completed
              </h4>
              <h3 className="font-manrope text-4xl font-bold text-sky-300">
                260+
              </h3>
              <div className="mt-1 border-t border-zinc-700 pt-5">
                <p className="text-xs leading-5 font-normal text-white">
                  Every completed project is a testament
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-zinc-700 p-5">
              <h4 className="text-xl leading-8 font-semibold text-white">
                Projects Delivered
              </h4>
              <h3 className="font-manrope text-4xl font-bold text-sky-300">
                180+
              </h3>
              <div className="mt-1 border-t border-zinc-700 pt-5">
                <p className="text-xs leading-5 font-normal text-white">
                  Our track record of delivering projects
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-zinc-700 p-5">
              <h4 className="text-xl leading-8 font-semibold text-white">
                Orders in Queue
              </h4>
              <h3 className="font-manrope text-4xl font-bold text-sky-300">
                200+
              </h3>
              <div className="mt-1 border-t border-zinc-700 pt-5">
                <p className="text-xs leading-5 font-normal text-white">
                  Our growing number of orders in queue
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-zinc-700 p-5">
              <h4 className="text-xl leading-8 font-semibold text-white">
                Expert Consultants
              </h4>
              <h3 className="font-manrope text-4xl font-bold text-sky-300">
                150+
              </h3>
              <div className="mt-1 border-t border-zinc-700 pt-5">
                <p className="text-xs leading-5 font-normal text-white">
                  Our team of expert consultants partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
