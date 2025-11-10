export default function AFeatureListWithColorfulIcons() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="grid w-full grid-cols-1 items-end justify-center gap-3.5 lg:grid-cols-2">
            <div className="inline-flex w-full flex-col items-center justify-start gap-1.5 lg:items-start">
              <div className="inline-flex items-start justify-start">
                <div className="flex items-center justify-start gap-1.5 rounded-full bg-indigo-50 px-2.5 py-0.5">
                  <span className="text-center text-xs leading-normal font-medium text-indigo-600">
                    Features
                  </span>
                </div>
              </div>
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                Network Infrastructure Management
              </h2>
            </div>
            <p className="text-center text-lg leading-relaxed font-normal text-gray-500 lg:text-start">
              Network Infrastructure Management ensures efficient network
              operations through design, implementation, maintenance, and
              proactive monitoring to support business continuity.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-center gap-5 md:grid-cols-3">
            <div className="inline-flex h-full w-full flex-col items-start justify-start gap-1.5 rounded-2xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-gray-400 md:gap-3">
              <div className="flex flex-col items-start justify-start gap-1.5 md:gap-3">
                <div className="relative h-8 w-8"></div>
                <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                  Cloud Services
                </h5>
              </div>
              <p className="text-sm leading-normal font-normal text-gray-500">
                Provide scalable cloud solutions for storage, computing, and
                applications.
              </p>
            </div>
            <div className="inline-flex h-full w-full flex-col items-start justify-start gap-1.5 rounded-2xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-gray-400 md:gap-3">
              <div className="flex flex-col items-start justify-start gap-1.5 md:gap-3">
                <div className="relative h-8 w-8"></div>
                <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                  Cyber Security Solution
                </h5>
              </div>
              <p className="text-sm leading-normal font-normal text-gray-500">
                Offer robust security measures including threat prevention.
              </p>
            </div>
            <div className="inline-flex h-full w-full flex-col items-start justify-start gap-1.5 rounded-2xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-gray-400 md:gap-3">
              <div className="flex flex-col items-start justify-start gap-1.5 md:gap-3">
                <div className="relative h-8 w-8"></div>
                <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                  Data Analytics
                </h5>
              </div>
              <p className="text-sm leading-normal font-normal text-gray-500">
                Deliver insights through data collection and analysis tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
