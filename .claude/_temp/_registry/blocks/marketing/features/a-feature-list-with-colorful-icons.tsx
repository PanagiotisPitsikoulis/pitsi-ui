export default function AFeatureListWithColorfulIcons() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full justify-center items-end gap-3.5 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-1.5 inline-flex">
              <div className="justify-start items-start inline-flex">
                <div className="px-2.5 py-0.5 bg-indigo-50 rounded-full justify-start items-center gap-1.5 flex">
                  <span className="text-center text-indigo-600 text-xs font-medium leading-normal">
                    Features
                  </span>
                </div>
              </div>
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Network Infrastructure Management
              </h2>
            </div>
            <p className="text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
              Network Infrastructure Management ensures efficient network
              operations through design, implementation, maintenance, and
              proactive monitoring to support business continuity.
            </p>
          </div>
          <div className="w-full justify-center items-start gap-5 grid md:grid-cols-3 grid-cols-1">
            <div className="w-full h-full p-5 rounded-2xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start md:gap-3 gap-1.5 inline-flex">
              <div className="flex-col justify-start items-start md:gap-3 gap-1.5 flex">
                <div className="w-8 h-8 relative"></div>
                <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                  Cloud Services
                </h5>
              </div>
              <p className="text-gray-500 text-sm font-normal leading-normal">
                Provide scalable cloud solutions for storage, computing, and
                applications.
              </p>
            </div>
            <div className="w-full h-full p-5 rounded-2xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start md:gap-3 gap-1.5 inline-flex">
              <div className="flex-col justify-start items-start md:gap-3 gap-1.5 flex">
                <div className="w-8 h-8 relative"></div>
                <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                  Cyber Security Solution
                </h5>
              </div>
              <p className="text-gray-500 text-sm font-normal leading-normal">
                Offer robust security measures including threat prevention.
              </p>
            </div>
            <div className="w-full h-full p-5 rounded-2xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start md:gap-3 gap-1.5 inline-flex">
              <div className="flex-col justify-start items-start md:gap-3 gap-1.5 flex">
                <div className="w-8 h-8 relative"></div>
                <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                  Data Analytics
                </h5>
              </div>
              <p className="text-gray-500 text-sm font-normal leading-normal">
                Deliver insights through data collection and analysis tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
