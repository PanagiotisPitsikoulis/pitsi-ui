export default function CompanyTotalGrowthOverviewStats() {
  return (
    <section className="py-20 font-inter ">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-8">
          <div className="my-auto">
            <h2 className="text-xl font-normal leading-8 text-gray-900 mb-4">
              Company Total Growth
            </h2>
            <div className="border-t border-blue-300 pt-6 flex flex-col gap-16">
              <h3 className="text-5xl font-bold font-manrope text-gray-900">
                80%
              </h3>
              <p className="text-base font-normal leading-5 text-gray-400">
                Our company has experienced significant growth over the years,
                expanding our services and client base while consistently
                delivering exceptional legal solutions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-5 rounded-2xl flex flex-col">
              <h2 className="text-lg font-normal leading-8 text-gray-900 mb-4">
                Expert Consultants{" "}
              </h2>
              <div className="border-t border-indigo-300 pt-8">
                <h3 className="text-3xl font-bold font-manrope text-gray-900">
                  99+
                </h3>
              </div>
            </div>
            <div className="p-5 rounded-2xl flex flex-col">
              <h2 className="text-lg font-normal leading-8 text-gray-900 mb-4">
                Active Clients
              </h2>
              <div className="border-t border-emerald-300 pt-8">
                <h3 className="text-3xl font-bold font-manrope text-gray-900">
                  130+
                </h3>
              </div>
            </div>
            <div className="p-5 rounded-2xl flex flex-col">
              <h2 className="text-lg font-normal leading-8 text-gray-900 mb-4">
                Project Completed
              </h2>
              <div className="border-t border-orange-300 pt-8">
                <h3 className="text-3xl font-bold font-manrope text-gray-900">
                  80+
                </h3>
              </div>
            </div>
            <div className="p-5 rounded-2xl flex flex-col">
              <h2 className="text-lg font-normal leading-8 text-gray-900 mb-4">
                Order in Queue
              </h2>
              <div className="border-t border-fuchsia-300 pt-8">
                <h3 className="text-3xl font-bold font-manrope text-gray-900">
                  75+
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
