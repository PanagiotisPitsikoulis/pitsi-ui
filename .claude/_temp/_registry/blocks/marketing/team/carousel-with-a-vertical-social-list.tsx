export default function CarouselWithAVerticalSocialList() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-center items-center lg:flex-row lg:items-center lg:justify-between lg:gap-5 gap-12">
          <div className="flex-col justify-start lg:items-start items-center lg:gap-5 gap-3 inline-flex">
            <div className="flex-col justify-start lg:items-start items-center gap-3 flex">
              <div className="justify-start lg:items-start items-center inline-flex">
                <div className="px-2.5 py-0.5 bg-indigo-600 rounded-full lg:justify-start justify-center items-center gap-1.5 flex">
                  <span className="text-white text-xs font-medium leading-normal">
                    Features
                  </span>
                </div>
              </div>
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                The Heart of Our Business
              </h2>
            </div>
            <p className="lg:max-w-xl w-full text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
              {" "}
              Each team member contributes their unique talents and expertise,
              working together to achieve our shared goals.
            </p>
          </div>
          {/* Slider controls */}
          <div className="flex items-center gap-6">
            <button
              id="slider-button-left"
              className="swiper-button-prev group mr-6 w-[52px] h-[52px] p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-indigo-600 hover:border-transparent bg-transparent hover:bg-indigo-600 transition-all duration-700 ease-in-out justify-center items-center flex"
              data-carousel-prev
            >
              {/* SVG removed */}
            </button>
            <button
              id="slider-button-right"
              className="swiper-button-next  group w-[52px] h-[52px] p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-indigo-600 hover:border-transparent bg-transparent hover:bg-indigo-600 transition-all duration-700 ease-in-out justify-center items-center flex"
              data-carousel-next
            >
              {/* SVG removed */}
            </button>
          </div>
        </div>
        {/*Slider wrapper*/}
        <div className="lg:flex grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="w-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-full flex-col justify-end items-end flex relative">
                  <div className="w-full bg-[#cdd3c5] justify-start items-start gap-2.5 inline-flex">
                    <img
                      src="https://pagedone.io/asset/uploads/1722839885.png"
                      alt="Emma Devis Image"
                      className="bg-black/30 w-full object-cover"
                    />
                  </div>
                  <div className="flex-col justify-start items-start flex absolute right-0">
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-center gap-3.5 flex">
                  <h2 className="text-center text-gray-900 text-xl font-semibold leading-8">
                    Emma Devis
                  </h2>
                  <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                    Pagedone was born out of a vision to revolutionize portfolio
                    management for busy professionals. Since our inception, we
                    have experienced remarkable success.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="w-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-full flex-col justify-end items-end flex relative">
                  <div className="w-full bg-slate-300 justify-start items-start gap-2.5 inline-flex">
                    <img
                      src="https://pagedone.io/asset/uploads/1722840023.png"
                      alt="Benjamin Evans Image"
                      className="bg-black/30 w-full object-cover"
                    />
                  </div>
                  <div className="flex-col justify-start items-start flex absolute right-0">
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-center gap-3.5 flex">
                  <h4 className="text-center text-gray-900 text-xl font-semibold leading-8">
                    Benjamin Evans
                  </h4>
                  <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                    Since our inception, we have experienced remarkable success,
                    consistently exceeding expectations and setting new
                    standards in our field.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="w-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-full flex-col justify-end items-end flex relative">
                  <div className="w-full bg-gray-300 justify-start items-start gap-2.5 inline-flex">
                    <img
                      src="https://pagedone.io/asset/uploads/1722840032.png"
                      alt="Metlinda Parker Image"
                      className="bg-black/30 w-full object-cover"
                    />
                  </div>
                  <div className="flex-col justify-start items-start flex absolute right-0">
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-center gap-3.5 flex">
                  <h4 className="text-center text-gray-900 text-xl font-semibold leading-8">
                    Metlinda Parker
                  </h4>
                  <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                    Our innovative solutions have empowered professionals to
                    stay organized, make informed decisions quickly, and achieve
                    their goals with confidence.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="w-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-full flex-col justify-end items-end flex relative">
                  <div className="w-full bg-[#cdd3c5] justify-start items-start gap-2.5 inline-flex">
                    <img
                      src="https://pagedone.io/asset/uploads/1722839885.png"
                      alt="Emma Devis Image"
                      className="bg-black/30 w-full object-cover"
                    />
                  </div>
                  <div className="flex-col justify-start items-start flex absolute right-0">
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-center gap-3.5 flex">
                  <h2 className="text-center text-gray-900 text-xl font-semibold leading-8">
                    Emma Devis
                  </h2>
                  <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                    Pagedone was born out of a vision to revolutionize portfolio
                    management for busy professionals. Since our inception, we
                    have experienced remarkable success.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="w-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-full flex-col justify-end items-end flex relative">
                  <div className="w-full bg-slate-300 justify-start items-start gap-2.5 inline-flex">
                    <img
                      src="https://pagedone.io/asset/uploads/1722840023.png"
                      alt="Benjamin Evans Image"
                      className="bg-black/30 w-full object-cover"
                    />
                  </div>
                  <div className="flex-col justify-start items-start flex absolute right-0">
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-center gap-3.5 flex">
                  <h4 className="text-center text-gray-900 text-xl font-semibold leading-8">
                    Benjamin Evans
                  </h4>
                  <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                    Since our inception, we have experienced remarkable success,
                    consistently exceeding expectations and setting new
                    standards in our field.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="w-full flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-full flex-col justify-end items-end flex relative">
                  <div className="w-full bg-gray-300 justify-start items-start gap-2.5 inline-flex">
                    <img
                      src="https://pagedone.io/asset/uploads/1722840032.png"
                      alt="Metlinda Parker Image"
                      className="bg-black/30 w-full object-cover"
                    />
                  </div>
                  <div className="flex-col justify-start items-start flex absolute right-0">
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                    <a className="h-[52px] p-3.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-center gap-3.5 flex">
                  <h4 className="text-center text-gray-900 text-xl font-semibold leading-8">
                    Metlinda Parker
                  </h4>
                  <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                    Our innovative solutions have empowered professionals to
                    stay organized, make informed decisions quickly, and achieve
                    their goals with confidence.
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
