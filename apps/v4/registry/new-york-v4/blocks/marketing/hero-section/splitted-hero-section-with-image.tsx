export default function SplittedHeroSectionWithImage() {
  return (
    <div className="inline-flex w-full flex-col items-start justify-start gap-2.5 bg-white">
      <div className="relative h-full w-full items-end justify-end py-10 pr-4 pl-4 lg:pr-10 lg:pl-0">
        <div className="flex w-full justify-center lg:justify-end">
          <div className="flex h-full flex-col items-center gap-12 lg:flex-row lg:gap-9">
            <div className="flex w-full flex-col items-center justify-between gap-16 py-5 pl-0 lg:max-w-[600px] lg:items-start lg:pl-10 xl:max-w-[682px] xl:gap-48 xl:pr-14 xl:pl-20 2xl:gap-72 2xl:pl-28">
              <a href="https://pagedone.io/" className="flex items-center">
                {/* SVG removed */}
              </a>
              <div className="flex w-full flex-col items-center justify-end gap-10 lg:items-start lg:gap-24">
                <div className="flex w-full flex-col items-center justify-start gap-6 lg:items-start lg:gap-8">
                  <div className="flex w-full flex-col items-center justify-start gap-5 lg:items-start">
                    <div className="inline-flex items-start justify-start">
                      <div className="flex items-center justify-start gap-1.5 rounded-full bg-blue-50 px-2.5 py-0.5">
                        <span className="text-center text-xs leading-normal font-medium text-gray-900">
                          Get off 20% for new members
                        </span>
                      </div>
                    </div>
                    <h2 className="font-manrope w-full text-center text-5xl leading-snug font-bold text-gray-900 md:max-w-lg lg:text-start">
                      Unlock the Power of Crypto currency
                    </h2>
                  </div>
                  <p className="w-full text-center text-base leading-relaxed font-normal text-gray-500 md:max-w-lg lg:text-start">
                    Trade with confidence on our advanced platform. Start
                    trading today and unlock your potential!
                  </p>
                </div>
                <div className="flex w-full flex-col items-start justify-center gap-5 sm:flex-row lg:justify-start">
                  <button className="flex w-full items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-gray-700 sm:w-fit">
                    <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                      Crate Account
                    </span>
                  </button>
                  <button className="flex w-full items-center justify-center rounded-full bg-gray-100 px-5 py-2.5 transition-all duration-700 ease-in-out hover:bg-gray-200 sm:w-fit">
                    <span className="px-2 py-px text-base leading-relaxed font-semibold text-gray-900">
                      View Demo
                    </span>
                    {/* SVG removed */}
                  </button>
                </div>
              </div>
            </div>
            <div className="inline-flex h-full w-full flex-col items-center justify-end lg:max-w-[700px] lg:items-end">
              <div className="md:bg-primary relative w-full rounded-3xl bg-white lg:max-w-[682px]">
                <img
                  className="object-cover md:mt-[50px] md:ml-[49px] lg:max-w-[92%] xl:max-w-[93%] 2xl:max-w-full"
                  src="https://pagedone.io/asset/uploads/1720164616.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
