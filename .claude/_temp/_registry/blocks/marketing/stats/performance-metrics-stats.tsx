export default function PerformanceMetricsStats() {
  return (
    <section className="py-20 font-inter bg-black">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="flex items-center gap-1.5 border border-white bg-sky-300 px-2.5 py-0.5 rounded-full">
            {/* SVG removed */}
            <span className="text-xs font-medium leading-5 text-white">
              Statistics
            </span>
          </div>
          <h2 className="text-4xl font-bold font-manrope text-white">
            Performance Metrics
          </h2>
        </div>
        <div className="pt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4 border border-zinc-700 rounded-2xl p-5">
              <h4 className="text-xl font-semibold leading-8 text-white">
                Projects Completed
              </h4>
              <h3 className="text-4xl font-bold font-manrope text-sky-300">
                260+
              </h3>
              <div className="border-t border-zinc-700 mt-1 pt-5">
                <p className="text-xs font-normal text-white leading-5">
                  Every completed project is a testament
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border border-zinc-700 rounded-2xl p-5">
              <h4 className="text-xl font-semibold leading-8 text-white">
                Projects Delivered
              </h4>
              <h3 className="text-4xl font-bold font-manrope text-sky-300">
                180+
              </h3>
              <div className="border-t border-zinc-700 mt-1 pt-5">
                <p className="text-xs font-normal text-white leading-5">
                  Our track record of delivering projects
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border border-zinc-700 rounded-2xl p-5">
              <h4 className="text-xl font-semibold leading-8 text-white">
                Orders in Queue
              </h4>
              <h3 className="text-4xl font-bold font-manrope text-sky-300">
                200+
              </h3>
              <div className="border-t border-zinc-700 mt-1 pt-5">
                <p className="text-xs font-normal text-white leading-5">
                  Our growing number of orders in queue
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border border-zinc-700 rounded-2xl p-5">
              <h4 className="text-xl font-semibold leading-8 text-white">
                Expert Consultants
              </h4>
              <h3 className="text-4xl font-bold font-manrope text-sky-300">
                150+
              </h3>
              <div className="border-t border-zinc-700 mt-1 pt-5">
                <p className="text-xs font-normal text-white leading-5">
                  Our team of expert consultants partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
