export default function SplittedHeroSectionWithImage() {
  return (
    <div className="w-full bg-white flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="w-full lg:pl-0 pl-4 lg:pr-10 pr-4 py-10 justify-end items-end relative h-full">
        <div className="w-full flex lg:justify-end justify-center">
          <div className="flex lg:flex-row flex-col lg:gap-9 gap-12 items-center h-full">
            <div className="xl:max-w-[682px] lg:max-w-[600px] w-full 2xl:pl-28 xl:pl-20 lg:pl-10 pl-0 xl:pr-14 py-5 flex-col 2xl:gap-72 xl:gap-48 gap-16 justify-between lg:items-start items-center flex">
              <a href="https://pagedone.io/" className="flex items-center">
                {/* SVG removed */}
              </a>
              <div className="w-full flex-col justify-end lg:items-start items-center lg:gap-24 gap-10 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center lg:gap-8 gap-6 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-5 flex">
                    <div className="justify-start items-start inline-flex">
                      <div className="px-2.5 py-0.5 bg-blue-50 rounded-full justify-start items-center gap-1.5 flex">
                        <span className="text-center text-gray-900 text-xs font-medium leading-normal">
                          Get off 20% for new members
                        </span>
                      </div>
                    </div>
                    <h2 className="md:max-w-lg w-full text-gray-900 text-5xl font-bold font-manrope leading-snug lg:text-start text-center">
                      Unlock the Power of Crypto currency
                    </h2>
                  </div>
                  <p className="md:max-w-lg w-full text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    Trade with confidence on our advanced platform. Start
                    trading today and unlock your potential!
                  </p>
                </div>
                <div className="w-full lg:justify-start justify-center items-start gap-5 flex sm:flex-row flex-col">
                  <button className="sm:w-fit w-full px-5 py-2.5 bg-gray-900 hover:bg-gray-700 transition-all duration-700 ease-in-out rounded-full shadow justify-center items-center flex">
                    <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                      Crate Account
                    </span>
                  </button>
                  <button className="sm:w-fit w-full px-5 py-2.5 bg-gray-100 hover:bg-gray-200 transition-all duration-700 ease-in-out rounded-full justify-center items-center flex">
                    <span className="px-2 py-px text-gray-900 text-base font-semibold leading-relaxed">
                      View Demo
                    </span>
                    {/* SVG removed */}
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:max-w-[700px] w-full h-full flex-col justify-end lg:items-end items-center inline-flex">
              <div className="lg:max-w-[682px] w-full rounded-3xl md:bg-blue-500 bg-white relative">
                <img
                  className="2xl:max-w-full xl:max-w-[93%] lg:max-w-[92%] md:mt-[50px] md:ml-[49px] object-cover"
                  src="https://pagedone.io/asset/uploads/1720164616.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
