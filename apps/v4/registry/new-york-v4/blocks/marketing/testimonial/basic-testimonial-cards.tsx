export default function BasicTestimonialCards() {
  return (
    <section className="relative h-full py-24">
      <div className="absolute top-0 -z-10 h-[440px] w-full bg-slate-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex w-full flex-col items-center justify-between gap-10 lg:mb-16 lg:flex-row">
          <div className="inline-flex flex-col items-center justify-start gap-3 lg:items-start lg:gap-6">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
              Our clients feedback
            </h2>
            <h5 className="w-full text-center text-lg leading-relaxed font-normal text-gray-500 lg:max-w-lg lg:text-start">
              Discover what our clients have to say about their experiences with
              our services.
            </h5>
          </div>
          <div className="flex items-start justify-start gap-6">
            <button
              id="slider-button-left"
              className="swiper-button-prev group mr-6 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-indigo-600 bg-transparent shadow-xs transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-600"
            >
              {/* SVG removed */}
            </button>
            <button
              id="slider-button-right"
              className="swiper-button-next group flex h-[52px] w-[52px] items-center justify-center rounded-full border border-indigo-600 bg-transparent shadow-xs transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-600"
            >
              {/* SVG removed */}
            </button>
          </div>
        </div>
        <div className="swiper mySwiper pb-7">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="inline-flex flex-col items-start justify-start rounded-2xl bg-white p-6 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)]">
                <div className="flex flex-col items-start justify-center gap-6">
                  <div className="inline-flex items-center justify-start gap-3">
                    <div className="flex items-start justify-start">
                      <div className="flex items-start justify-start gap-2.5">
                        <img
                          className="object-cover"
                          src="https://pagedone.io/asset/uploads/1721128242.png"
                        />
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-start justify-start">
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        Emily Johnson
                      </h6>
                      <span className="text-xs leading-normal font-normal text-gray-500">
                        Sales Manger
                      </span>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed font-normal text-gray-600">
                    Pagedone has made it possible for me to stay on top of my
                    portfolio and make informed decisions quickly and easily.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="inline-flex flex-col items-start justify-start rounded-2xl bg-white p-6 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)]">
                <div className="flex flex-col items-start justify-center gap-6">
                  <div className="inline-flex items-center justify-start gap-3">
                    <div className="flex items-start justify-start">
                      <div className="flex items-start justify-start gap-2.5">
                        <img
                          className="object-cover"
                          src="https://pagedone.io/asset/uploads/1721128252.png"
                        />
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-start justify-start">
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        Ethan Miller
                      </h6>
                      <span className="text-xs leading-normal font-normal text-gray-500">
                        Product Designer
                      </span>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed font-normal text-gray-600">
                    "I've been using Pagedone for a year now, and it has greatly
                    simplified the process of managing my finances."
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="inline-flex flex-col items-start justify-start rounded-2xl bg-white p-6 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)]">
                <div className="flex flex-col items-start justify-center gap-6">
                  <div className="inline-flex items-center justify-start gap-3">
                    <div className="flex items-start justify-start">
                      <div className="flex items-start justify-start gap-2.5">
                        <img
                          className="object-cover"
                          src="https://pagedone.io/asset/uploads/1721128260.png"
                        />
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-start justify-start">
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        Olivia Carter
                      </h6>
                      <span className="text-xs leading-normal font-normal text-gray-500">
                        Design Lead
                      </span>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed font-normal text-gray-600">
                    Pagedone stands out as the most user-friendly and effective
                    solution I've ever used.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="inline-flex flex-col items-start justify-start rounded-2xl bg-white p-6 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)]">
                <div className="flex flex-col items-start justify-center gap-6">
                  <div className="inline-flex items-center justify-start gap-3">
                    <div className="flex items-start justify-start">
                      <div className="flex items-start justify-start gap-2.5">
                        <img
                          className="object-cover"
                          src="https://pagedone.io/asset/uploads/1721128242.png"
                        />
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-start justify-start">
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        Emily Johnson
                      </h6>
                      <span className="text-xs leading-normal font-normal text-gray-500">
                        Sales Manger
                      </span>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed font-normal text-gray-600">
                    Pagedone has made it possible for me to stay on top of my
                    portfolio and make informed decisions quickly and easily.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="inline-flex flex-col items-start justify-start rounded-2xl bg-white p-6 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)]">
                <div className="flex flex-col items-start justify-center gap-6">
                  <div className="inline-flex items-center justify-start gap-3">
                    <div className="flex items-start justify-start">
                      <div className="flex items-start justify-start gap-2.5">
                        <img
                          className="object-cover"
                          src="https://pagedone.io/asset/uploads/1721128252.png"
                        />
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-start justify-start">
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        Ethan Miller
                      </h6>
                      <span className="text-xs leading-normal font-normal text-gray-500">
                        Product Designer
                      </span>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed font-normal text-gray-600">
                    "I've been using Pagedone for a year now, and it has greatly
                    simplified the process of managing my finances."
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="inline-flex flex-col items-start justify-start rounded-2xl bg-white p-6 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)]">
                <div className="flex flex-col items-start justify-center gap-6">
                  <div className="inline-flex items-center justify-start gap-3">
                    <div className="flex items-start justify-start">
                      <div className="flex items-start justify-start gap-2.5">
                        <img
                          className="object-cover"
                          src="https://pagedone.io/asset/uploads/1721128260.png"
                        />
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-start justify-start">
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        Olivia Carter
                      </h6>
                      <span className="text-xs leading-normal font-normal text-gray-500">
                        Design Lead
                      </span>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed font-normal text-gray-600">
                    Pagedone stands out as the most user-friendly and effective
                    solution I've ever used.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
