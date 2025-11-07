export default function TailwindCssStatsWithStats() {
  return (
    <section className="py-20 font-inter bg-gray-900">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-7">
            <h2 className="text-4xl font-bold text-white font-manrope mb-1.5">
              Performance You Can Count On
            </h2>
            <p className="text-xl font-normal leading-8 text-gray-300">
              Delivering consistent results you can trust, backed by data and
              proven performance.
            </p>
            <div className="pt-14 flex flex-col gap-5">
              <div className="flex items-center justify-between gap-5">
                <p className="text-lg font-normal leading-8 text-white">
                  Expert Consultants{" "}
                </p>
                <h3 className="text-3xl font-bold text-indigo-300 font-manrope">
                  99+
                </h3>
              </div>
              <div className="flex items-center justify-between gap-5 border-t border-gray-400 pt-5">
                <p className="text-lg font-normal leading-8 text-white">
                  Active Clients{" "}
                </p>
                <h3 className="text-3xl font-bold text-indigo-300 font-manrope">
                  130+
                </h3>
              </div>
              <div className="flex items-center justify-between gap-5 border-t border-gray-400 pt-5">
                <p className="text-lg font-normal leading-8 text-white">
                  Project Completed{" "}
                </p>
                <h3 className="text-3xl font-bold text-indigo-300 font-manrope">
                  84+
                </h3>
              </div>
              <div className="flex items-center justify-between gap-5 border-t border-gray-400 pt-5">
                <p className="text-lg font-normal leading-8 text-white">
                  Order in Queue
                </p>
                <h3 className="text-3xl font-bold text-indigo-300 font-manrope">
                  59+
                </h3>
              </div>
            </div>
          </div>
          <img
            src="https://pagedone.io/asset/uploads/1760009518.png"
            alt="img"
            className="lg:col-span-5 lg:h-full w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
