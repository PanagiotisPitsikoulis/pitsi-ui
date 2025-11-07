export default function ThreeColumnTeamWithSideInformationCard() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
          <div className="w-full justify-between items-center lg:gap-5 gap-3 flex lg:flex-row flex-col">
            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Our Patient Care Team
            </h2>
            <button className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 transition-all duration-700 ease-in-out\ rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                See All Doctors
              </span>
            </button>
          </div>
          <div className="w-full flex-col justify-start items-start lg:gap-8 gap-5 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div className="xl:max-w-sm lg:max-w-md md:max-w-sm max-w-full group justify-end items-end flex relative">
              <div className="md:w-[202px] w-full lg:pb-3.5 flex-col justify-start items-start gap-2.5 flex absolute xl:left-0 lg:left-[11%] md:left-[-3%] md:z-0 z-10">
                <div className="w-full pl-3 pr-8 py-3 bg-white rounded-lg border border-gray-200 group-hover:border-gray-400 transition-all duration-700 ease-in-out md:justify-start justify-between items-center gap-2 inline-flex">
                  <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                    <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                      Dr. Aditi Chandra
                    </h6>
                    <span className="text-gray-500 text-xs font-normal leading-normal">
                      Dentist
                    </span>
                  </div>
                  <a className="p-1.5 bg-blue-100 group-hover:bg-blue-200 transition-all duration-700 ease-in-out rounded-full justify-start items-center gap-2.5 flex">
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
              <div className="md:w-auto w-full bg-[#cdd3c5] rounded-lg justify-start items-start gap-5 flex relative">
                <img
                  className="md:w-auto w-full rounded-lg object-cover"
                  src="https://pagedone.io/asset/uploads/1722337888.png"
                  alt="Dr. Aditi Chandra image"
                />
              </div>
            </div>
            <div className="xl:max-w-sm lg:max-w-md md:max-w-sm max-w-full group justify-end items-end flex relative">
              <div className="md:w-[202px] w-full lg:pb-3.5 flex-col justify-start items-start gap-2.5 flex absolute xl:left-0 lg:left-[11%] md:left-[-3%] md:z-0 z-10">
                <div className="w-full pl-3 pr-8 py-3 bg-white rounded-lg border border-gray-200 group-hover:border-gray-400 transition-all duration-700 ease-in-out md:justify-start justify-between items-center gap-2 inline-flex">
                  <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                    <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                      Dr. Rohan Kapoor
                    </h6>
                    <span className="text-gray-500 text-xs font-normal leading-normal">
                      Endocrinologist
                    </span>
                  </div>
                  <a className="p-1.5 bg-blue-100 group-hover:bg-blue-200 transition-all duration-700 ease-in-out rounded-full justify-start items-center gap-2.5 flex">
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
              <div className="md:w-auto w-full bg-[#cdd3c5] rounded-lg justify-start items-start gap-5 flex relative">
                <img
                  className="md:w-auto w-full rounded-lg object-cover"
                  src="https://pagedone.io/asset/uploads/1722337899.png"
                  alt="Dr. Rohan Kapoor image"
                />
              </div>
            </div>
            <div className="xl:max-w-sm lg:max-w-md md:max-w-sm max-w-full group justify-end items-end flex relative">
              <div className="md:w-[202px] w-full lg:pb-3.5 flex-col justify-start items-start gap-2.5 flex absolute xl:left-0 lg:left-[11%] md:left-[-3%] md:z-0 z-10">
                <div className="w-full pl-3 pr-8 py-3 bg-white rounded-lg border border-gray-200 group-hover:border-gray-400 transition-all duration-700 ease-in-out md:justify-start justify-between items-center gap-2 inline-flex">
                  <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                    <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                      Dr. Priya Sharma
                    </h6>
                    <span className="text-gray-500 text-xs font-normal leading-normal">
                      Gynecologist
                    </span>
                  </div>
                  <a className="p-1.5 bg-blue-100 group-hover:bg-blue-200 transition-all duration-700 ease-in-out rounded-full justify-start items-center gap-2.5 flex">
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
              <div className="md:w-auto w-full bg-[#cdd3c5] rounded-lg justify-start items-start gap-5 flex relative">
                <img
                  className="md:w-auto w-full rounded-lg object-cover"
                  src="https://pagedone.io/asset/uploads/1722337911.png"
                  alt="Dr. Priya Sharma image"
                />
              </div>
            </div>
            <div className="xl:max-w-sm lg:max-w-md md:max-w-sm max-w-full group justify-end items-end flex relative">
              <div className="md:w-[202px] w-full lg:pb-3.5 flex-col justify-start items-start gap-2.5 flex absolute xl:left-0 lg:left-[11%] md:left-[-3%] md:z-0 z-10">
                <div className="w-full pl-3 pr-8 py-3 bg-white rounded-lg border border-gray-200 group-hover:border-gray-400 transition-all duration-700 ease-in-out md:justify-start justify-between items-center gap-2 inline-flex">
                  <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                    <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                      Dr. Kevin Pandey
                    </h6>
                    <span className="text-gray-500 text-xs font-normal leading-normal">
                      Dentist
                    </span>
                  </div>
                  <a className="p-1.5 bg-blue-100 group-hover:bg-blue-200 transition-all duration-700 ease-in-out rounded-full justify-start items-center gap-2.5 flex">
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
              <div className="md:w-auto w-full bg-[#cdd3c5] rounded-lg justify-start items-start gap-5 flex relative">
                <img
                  className="md:w-auto w-full rounded-lg object-cover"
                  src="https://pagedone.io/asset/uploads/1722337927.png"
                  alt="Dr. Kevin Pandey image"
                />
              </div>
            </div>
            <div className="xl:max-w-sm lg:max-w-md md:max-w-sm max-w-full group justify-end items-end flex relative">
              <div className="md:w-[202px] w-full lg:pb-3.5 flex-col justify-start items-start gap-2.5 flex absolute xl:left-0 lg:left-[11%] md:left-[-3%] md:z-0 z-10">
                <div className="w-full pl-3 pr-8 py-3 bg-white rounded-lg border border-gray-200 group-hover:border-gray-400 transition-all duration-700 ease-in-out md:justify-start justify-between items-center gap-2 inline-flex">
                  <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                    <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                      Dr. Surya Mehta
                    </h6>
                    <span className="text-gray-500 text-xs font-normal leading-normal">
                      Endocrinologist
                    </span>
                  </div>
                  <a className="p-1.5 bg-blue-100 group-hover:bg-blue-200 transition-all duration-700 ease-in-out rounded-full justify-start items-center gap-2.5 flex">
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
              <div className="md:w-auto w-full bg-[#cdd3c5] rounded-lg justify-start items-start gap-5 flex relative">
                <img
                  className="md:w-auto w-full rounded-lg object-cover"
                  src="https://pagedone.io/asset/uploads/1722337939.png"
                  alt="Dr. Surya Mehta image"
                />
              </div>
            </div>
            <div className="xl:max-w-sm lg:max-w-md md:max-w-sm max-w-full group justify-end items-end flex relative">
              <div className="md:w-[202px] w-full lg:pb-3.5 flex-col justify-start items-start gap-2.5 flex absolute xl:left-0 lg:left-[11%] md:left-[-3%] md:z-0 z-10">
                <div className="w-full pl-3 pr-8 py-3 bg-white rounded-lg border border-gray-200 group-hover:border-gray-400 transition-all duration-700 ease-in-out md:justify-start justify-between items-center gap-2 inline-flex">
                  <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                    <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                      Dr. Anjali Malhotra
                    </h6>
                    <span className="text-gray-500 text-xs font-normal leading-normal">
                      Gynecologist
                    </span>
                  </div>
                  <a className="p-1.5 bg-blue-100 group-hover:bg-blue-200 transition-all duration-700 ease-in-out rounded-full justify-start items-center gap-2.5 flex">
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
              <div className="md:w-auto w-full bg-[#cdd3c5] rounded-lg justify-start items-start gap-5 flex relative">
                <img
                  className="md:w-auto w-full rounded-lg object-cover"
                  src="https://pagedone.io/asset/uploads/1722337955.png"
                  alt="Dr. Anjali Malhotra image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
