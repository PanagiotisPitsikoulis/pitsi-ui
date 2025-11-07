export default function BasicTestimonialCards() {
  return (
    <section className="py-24 relative h-full">
      <div className="absolute h-[440px] w-full top-0 bg-slate-50 -z-10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full justify-between items-center gap-10 flex lg:flex-row flex-col lg:mb-16 mb-10">
          <div className="flex-col justify-start lg:items-start items-center lg:gap-6 gap-3 inline-flex">
            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
              Our clients feedback
            </h2>
            <h5 className="lg:max-w-lg w-full text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
              Discover what our clients have to say about their experiences with
              our services.
            </h5>
          </div>
          <div className="justify-start items-start gap-6 flex">
            <button
              id="slider-button-left"
              className="swiper-button-prev mr-6 group w-[52px] h-[52px] justify-center items-center flex shadow-xs border border-indigo-600 hover:border-transparent bg-transparent hover:bg-indigo-600 rounded-full transition-all duration-700 ease-in-out"
            >
              {/* SVG removed */}
            </button>
            <button
              id="slider-button-right"
              className="swiper-button-next group w-[52px] h-[52px] justify-center items-center flex shadow-xs border border-indigo-600 hover:border-transparent bg-transparent hover:bg-indigo-600 rounded-full transition-all duration-700 ease-in-out"
            >
              {/* SVG removed */}
            </button>
          </div>
        </div>
        <div className="swiper mySwiper pb-7">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="p-6 bg-white rounded-2xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] flex-col justify-start items-start inline-flex">
                <div className="flex-col justify-center items-start gap-6 flex">
                  <div className="justify-start items-center gap-3 inline-flex">
                    <div className="justify-start items-start flex">
                      <div className="justify-start items-start gap-2.5 flex">
                        <img
                          className="object-cover"
                          src="https://pagedone.io/asset/uploads/1721128242.png"
                        />
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        Emily Johnson
                      </h6>
                      <span className="text-gray-500 text-xs font-normal leading-normal">
                        Sales Manger
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base font-normal leading-relaxed">
                    Pagedone has made it possible for me to stay on top of my
                    portfolio and make informed decisions quickly and easily.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="p-6 bg-white rounded-2xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] flex-col justify-start items-start inline-flex">
                <div className="flex-col justify-center items-start gap-6 flex">
                  <div className="justify-start items-center gap-3 inline-flex">
                    <div className="justify-start items-start flex">
                      <div className="justify-start items-start gap-2.5 flex">
                        <img
                          className="object-cover"
                          src="https://pagedone.io/asset/uploads/1721128252.png"
                        />
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        Ethan Miller
                      </h6>
                      <span className="text-gray-500 text-xs font-normal leading-normal">
                        Product Designer
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base font-normal leading-relaxed">
                    "I've been using Pagedone for a year now, and it has greatly
                    simplified the process of managing my finances."
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="p-6 bg-white rounded-2xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] flex-col justify-start items-start inline-flex">
                <div className="flex-col justify-center items-start gap-6 flex">
                  <div className="justify-start items-center gap-3 inline-flex">
                    <div className="justify-start items-start flex">
                      <div className="justify-start items-start gap-2.5 flex">
                        <img
                          className="object-cover"
                          src="https://pagedone.io/asset/uploads/1721128260.png"
                        />
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        Olivia Carter
                      </h6>
                      <span className="text-gray-500 text-xs font-normal leading-normal">
                        Design Lead
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base font-normal leading-relaxed">
                    Pagedone stands out as the most user-friendly and effective
                    solution I've ever used.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="p-6 bg-white rounded-2xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] flex-col justify-start items-start inline-flex">
                <div className="flex-col justify-center items-start gap-6 flex">
                  <div className="justify-start items-center gap-3 inline-flex">
                    <div className="justify-start items-start flex">
                      <div className="justify-start items-start gap-2.5 flex">
                        <img
                          className="object-cover"
                          src="https://pagedone.io/asset/uploads/1721128242.png"
                        />
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        Emily Johnson
                      </h6>
                      <span className="text-gray-500 text-xs font-normal leading-normal">
                        Sales Manger
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base font-normal leading-relaxed">
                    Pagedone has made it possible for me to stay on top of my
                    portfolio and make informed decisions quickly and easily.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="p-6 bg-white rounded-2xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] flex-col justify-start items-start inline-flex">
                <div className="flex-col justify-center items-start gap-6 flex">
                  <div className="justify-start items-center gap-3 inline-flex">
                    <div className="justify-start items-start flex">
                      <div className="justify-start items-start gap-2.5 flex">
                        <img
                          className="object-cover"
                          src="https://pagedone.io/asset/uploads/1721128252.png"
                        />
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        Ethan Miller
                      </h6>
                      <span className="text-gray-500 text-xs font-normal leading-normal">
                        Product Designer
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base font-normal leading-relaxed">
                    "I've been using Pagedone for a year now, and it has greatly
                    simplified the process of managing my finances."
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="p-6 bg-white rounded-2xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] flex-col justify-start items-start inline-flex">
                <div className="flex-col justify-center items-start gap-6 flex">
                  <div className="justify-start items-center gap-3 inline-flex">
                    <div className="justify-start items-start flex">
                      <div className="justify-start items-start gap-2.5 flex">
                        <img
                          className="object-cover"
                          src="https://pagedone.io/asset/uploads/1721128260.png"
                        />
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        Olivia Carter
                      </h6>
                      <span className="text-gray-500 text-xs font-normal leading-normal">
                        Design Lead
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base font-normal leading-relaxed">
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
  );
}
