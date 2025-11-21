export default function CompanyTotalGrowthOverviewStats() {
  return (
    <section className="font-inter py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 p-8 lg:grid-cols-2">
          <div className="my-auto">
            <h2 className="mb-4 text-xl leading-8 font-normal text-gray-900">
              Company Total Growth
            </h2>
            <div className="flex flex-col gap-16 border-t border-blue-300 pt-6">
              <h3 className="font-manrope text-5xl font-bold text-gray-900">
                80%
              </h3>
              <p className="text-base leading-5 font-normal text-gray-400">
                Our company has experienced significant growth over the years,
                expanding our services and client base while consistently
                delivering exceptional legal solutions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col rounded-2xl p-5">
              <h2 className="mb-4 text-lg leading-8 font-normal text-gray-900">
                Expert Consultants{" "}
              </h2>
              <div className="border-t border-indigo-300 pt-8">
                <h3 className="font-manrope text-3xl font-bold text-gray-900">
                  99+
                </h3>
              </div>
            </div>
            <div className="flex flex-col rounded-2xl p-5">
              <h2 className="mb-4 text-lg leading-8 font-normal text-gray-900">
                Active Clients
              </h2>
              <div className="border-t border-emerald-300 pt-8">
                <h3 className="font-manrope text-3xl font-bold text-gray-900">
                  130+
                </h3>
              </div>
            </div>
            <div className="flex flex-col rounded-2xl p-5">
              <h2 className="mb-4 text-lg leading-8 font-normal text-gray-900">
                Project Completed
              </h2>
              <div className="border-t border-orange-300 pt-8">
                <h3 className="font-manrope text-3xl font-bold text-gray-900">
                  80+
                </h3>
              </div>
            </div>
            <div className="flex flex-col rounded-2xl p-5">
              <h2 className="mb-4 text-lg leading-8 font-normal text-gray-900">
                Order in Queue
              </h2>
              <div className="border-t border-fuchsia-300 pt-8">
                <h3 className="font-manrope text-3xl font-bold text-gray-900">
                  75+
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
