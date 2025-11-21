export default function ThreeColumnTeamWithSideInformationCard() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-between gap-3 lg:flex-row lg:gap-5">
            <h2 className="font-manrope text-4xl leading-normal font-bold text-gray-900">
              Our Patient Care Team
            </h2>
            <button className="ease-in-out\ flex items-center justify-center rounded-xl bg-blue-700 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 hover:bg-blue-800">
              <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                See All Doctors
              </span>
            </button>
          </div>
          <div className="grid w-full grid-cols-1 flex-col items-start justify-start gap-5 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
            <div className="group relative flex max-w-full items-end justify-end md:max-w-sm lg:max-w-md xl:max-w-sm">
              <div className="absolute z-10 flex w-full flex-col items-start justify-start gap-2.5 md:left-[-3%] md:z-0 md:w-[202px] lg:left-[11%] lg:pb-3.5 xl:left-0">
                <div className="inline-flex w-full items-center justify-between gap-2 rounded-lg border border-gray-200 bg-white py-3 pr-8 pl-3 transition-all duration-700 ease-in-out group-hover:border-gray-400 md:justify-start">
                  <div className="inline-flex flex-col items-start justify-start gap-0.5">
                    <h6 className="text-base leading-relaxed font-medium text-gray-900">
                      Dr. Aditi Chandra
                    </h6>
                    <span className="text-xs leading-normal font-normal text-gray-500">
                      Dentist
                    </span>
                  </div>
                  <a className="flex items-center justify-start gap-2.5 rounded-full bg-blue-100 p-1.5 transition-all duration-700 ease-in-out group-hover:bg-blue-200">
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
              <div className="relative flex w-full items-start justify-start gap-5 rounded-lg bg-[#cdd3c5] md:w-auto">
                <img
                  className="w-full rounded-lg object-cover md:w-auto"
                  src="https://pagedone.io/asset/uploads/1722337888.png"
                  alt="Dr. Aditi Chandra image"
                />
              </div>
            </div>
            <div className="group relative flex max-w-full items-end justify-end md:max-w-sm lg:max-w-md xl:max-w-sm">
              <div className="absolute z-10 flex w-full flex-col items-start justify-start gap-2.5 md:left-[-3%] md:z-0 md:w-[202px] lg:left-[11%] lg:pb-3.5 xl:left-0">
                <div className="inline-flex w-full items-center justify-between gap-2 rounded-lg border border-gray-200 bg-white py-3 pr-8 pl-3 transition-all duration-700 ease-in-out group-hover:border-gray-400 md:justify-start">
                  <div className="inline-flex flex-col items-start justify-start gap-0.5">
                    <h6 className="text-base leading-relaxed font-medium text-gray-900">
                      Dr. Rohan Kapoor
                    </h6>
                    <span className="text-xs leading-normal font-normal text-gray-500">
                      Endocrinologist
                    </span>
                  </div>
                  <a className="flex items-center justify-start gap-2.5 rounded-full bg-blue-100 p-1.5 transition-all duration-700 ease-in-out group-hover:bg-blue-200">
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
              <div className="relative flex w-full items-start justify-start gap-5 rounded-lg bg-[#cdd3c5] md:w-auto">
                <img
                  className="w-full rounded-lg object-cover md:w-auto"
                  src="https://pagedone.io/asset/uploads/1722337899.png"
                  alt="Dr. Rohan Kapoor image"
                />
              </div>
            </div>
            <div className="group relative flex max-w-full items-end justify-end md:max-w-sm lg:max-w-md xl:max-w-sm">
              <div className="absolute z-10 flex w-full flex-col items-start justify-start gap-2.5 md:left-[-3%] md:z-0 md:w-[202px] lg:left-[11%] lg:pb-3.5 xl:left-0">
                <div className="inline-flex w-full items-center justify-between gap-2 rounded-lg border border-gray-200 bg-white py-3 pr-8 pl-3 transition-all duration-700 ease-in-out group-hover:border-gray-400 md:justify-start">
                  <div className="inline-flex flex-col items-start justify-start gap-0.5">
                    <h6 className="text-base leading-relaxed font-medium text-gray-900">
                      Dr. Priya Sharma
                    </h6>
                    <span className="text-xs leading-normal font-normal text-gray-500">
                      Gynecologist
                    </span>
                  </div>
                  <a className="flex items-center justify-start gap-2.5 rounded-full bg-blue-100 p-1.5 transition-all duration-700 ease-in-out group-hover:bg-blue-200">
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
              <div className="relative flex w-full items-start justify-start gap-5 rounded-lg bg-[#cdd3c5] md:w-auto">
                <img
                  className="w-full rounded-lg object-cover md:w-auto"
                  src="https://pagedone.io/asset/uploads/1722337911.png"
                  alt="Dr. Priya Sharma image"
                />
              </div>
            </div>
            <div className="group relative flex max-w-full items-end justify-end md:max-w-sm lg:max-w-md xl:max-w-sm">
              <div className="absolute z-10 flex w-full flex-col items-start justify-start gap-2.5 md:left-[-3%] md:z-0 md:w-[202px] lg:left-[11%] lg:pb-3.5 xl:left-0">
                <div className="inline-flex w-full items-center justify-between gap-2 rounded-lg border border-gray-200 bg-white py-3 pr-8 pl-3 transition-all duration-700 ease-in-out group-hover:border-gray-400 md:justify-start">
                  <div className="inline-flex flex-col items-start justify-start gap-0.5">
                    <h6 className="text-base leading-relaxed font-medium text-gray-900">
                      Dr. Kevin Pandey
                    </h6>
                    <span className="text-xs leading-normal font-normal text-gray-500">
                      Dentist
                    </span>
                  </div>
                  <a className="flex items-center justify-start gap-2.5 rounded-full bg-blue-100 p-1.5 transition-all duration-700 ease-in-out group-hover:bg-blue-200">
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
              <div className="relative flex w-full items-start justify-start gap-5 rounded-lg bg-[#cdd3c5] md:w-auto">
                <img
                  className="w-full rounded-lg object-cover md:w-auto"
                  src="https://pagedone.io/asset/uploads/1722337927.png"
                  alt="Dr. Kevin Pandey image"
                />
              </div>
            </div>
            <div className="group relative flex max-w-full items-end justify-end md:max-w-sm lg:max-w-md xl:max-w-sm">
              <div className="absolute z-10 flex w-full flex-col items-start justify-start gap-2.5 md:left-[-3%] md:z-0 md:w-[202px] lg:left-[11%] lg:pb-3.5 xl:left-0">
                <div className="inline-flex w-full items-center justify-between gap-2 rounded-lg border border-gray-200 bg-white py-3 pr-8 pl-3 transition-all duration-700 ease-in-out group-hover:border-gray-400 md:justify-start">
                  <div className="inline-flex flex-col items-start justify-start gap-0.5">
                    <h6 className="text-base leading-relaxed font-medium text-gray-900">
                      Dr. Surya Mehta
                    </h6>
                    <span className="text-xs leading-normal font-normal text-gray-500">
                      Endocrinologist
                    </span>
                  </div>
                  <a className="flex items-center justify-start gap-2.5 rounded-full bg-blue-100 p-1.5 transition-all duration-700 ease-in-out group-hover:bg-blue-200">
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
              <div className="relative flex w-full items-start justify-start gap-5 rounded-lg bg-[#cdd3c5] md:w-auto">
                <img
                  className="w-full rounded-lg object-cover md:w-auto"
                  src="https://pagedone.io/asset/uploads/1722337939.png"
                  alt="Dr. Surya Mehta image"
                />
              </div>
            </div>
            <div className="group relative flex max-w-full items-end justify-end md:max-w-sm lg:max-w-md xl:max-w-sm">
              <div className="absolute z-10 flex w-full flex-col items-start justify-start gap-2.5 md:left-[-3%] md:z-0 md:w-[202px] lg:left-[11%] lg:pb-3.5 xl:left-0">
                <div className="inline-flex w-full items-center justify-between gap-2 rounded-lg border border-gray-200 bg-white py-3 pr-8 pl-3 transition-all duration-700 ease-in-out group-hover:border-gray-400 md:justify-start">
                  <div className="inline-flex flex-col items-start justify-start gap-0.5">
                    <h6 className="text-base leading-relaxed font-medium text-gray-900">
                      Dr. Anjali Malhotra
                    </h6>
                    <span className="text-xs leading-normal font-normal text-gray-500">
                      Gynecologist
                    </span>
                  </div>
                  <a className="flex items-center justify-start gap-2.5 rounded-full bg-blue-100 p-1.5 transition-all duration-700 ease-in-out group-hover:bg-blue-200">
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
              <div className="relative flex w-full items-start justify-start gap-5 rounded-lg bg-[#cdd3c5] md:w-auto">
                <img
                  className="w-full rounded-lg object-cover md:w-auto"
                  src="https://pagedone.io/asset/uploads/1722337955.png"
                  alt="Dr. Anjali Malhotra image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
