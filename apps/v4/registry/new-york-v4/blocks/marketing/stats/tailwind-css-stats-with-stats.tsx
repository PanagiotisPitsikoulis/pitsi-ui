export default function TailwindCssStatsWithStats() {
  return (
    <section className="font-inter bg-gray-900 py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-manrope mb-1.5 text-4xl font-bold text-white">
              Performance You Can Count On
            </h2>
            <p className="text-xl leading-8 font-normal text-gray-300">
              Delivering consistent results you can trust, backed by data and
              proven performance.
            </p>
            <div className="flex flex-col gap-5 pt-14">
              <div className="flex items-center justify-between gap-5">
                <p className="text-lg leading-8 font-normal text-white">
                  Expert Consultants{" "}
                </p>
                <h3 className="font-manrope text-3xl font-bold text-indigo-300">
                  99+
                </h3>
              </div>
              <div className="flex items-center justify-between gap-5 border-t border-gray-400 pt-5">
                <p className="text-lg leading-8 font-normal text-white">
                  Active Clients{" "}
                </p>
                <h3 className="font-manrope text-3xl font-bold text-indigo-300">
                  130+
                </h3>
              </div>
              <div className="flex items-center justify-between gap-5 border-t border-gray-400 pt-5">
                <p className="text-lg leading-8 font-normal text-white">
                  Project Completed{" "}
                </p>
                <h3 className="font-manrope text-3xl font-bold text-indigo-300">
                  84+
                </h3>
              </div>
              <div className="flex items-center justify-between gap-5 border-t border-gray-400 pt-5">
                <p className="text-lg leading-8 font-normal text-white">
                  Order in Queue
                </p>
                <h3 className="font-manrope text-3xl font-bold text-indigo-300">
                  59+
                </h3>
              </div>
            </div>
          </div>
          <img
            src="https://pagedone.io/asset/uploads/1760009518.png"
            alt="img"
            className="mx-auto w-full lg:col-span-5 lg:h-full"
          />
        </div>
      </div>
    </section>
  )
}
