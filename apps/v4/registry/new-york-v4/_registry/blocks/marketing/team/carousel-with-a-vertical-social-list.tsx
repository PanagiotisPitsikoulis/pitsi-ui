export default function CarouselWithAVerticalSocialList() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-5">
          <div className="inline-flex flex-col items-center justify-start gap-3 lg:items-start lg:gap-5">
            <div className="flex flex-col items-center justify-start gap-3 lg:items-start">
              <div className="inline-flex items-center justify-start lg:items-start">
                <div className="flex items-center justify-center gap-1.5 rounded-full bg-indigo-600 px-2.5 py-0.5 lg:justify-start">
                  <span className="text-xs leading-normal font-medium text-white">
                    Features
                  </span>
                </div>
              </div>
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                The Heart of Our Business
              </h2>
            </div>
            <p className="w-full text-center text-lg leading-relaxed font-normal text-gray-500 lg:max-w-xl lg:text-start">
              {" "}
              Each team member contributes their unique talents and expertise,
              working together to achieve our shared goals.
            </p>
          </div>
          {/* Slider controls */}
          <div className="flex items-center gap-6">
            <button
              id="slider-button-left"
              className="swiper-button-prev group mr-6 flex h-[52px] w-[52px] items-center justify-center border border-indigo-600 bg-transparent p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-600"
              data-carousel-prev
            >
              {/* SVG removed */}
            </button>
            <button
              id="slider-button-right"
              className="swiper-button-next group flex h-[52px] w-[52px] items-center justify-center border border-indigo-600 bg-transparent p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-600"
              data-carousel-next
            >
              {/* SVG removed */}
            </button>
          </div>
        </div>
        {/*Slider wrapper*/}
        <div className="swiper mySwiper grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-2 lg:flex">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="inline-flex w-full flex-col items-start justify-start gap-5">
                <div className="relative flex w-full flex-col items-end justify-end">
                  <div className="inline-flex w-full items-start justify-start gap-2.5 bg-[#cdd3c5]">
                    <img
                      src="https://pagedone.io/asset/uploads/1722839885.png"
                      alt="Emma Devis Image"
                      className="w-full bg-black/30 object-cover"
                    />
                  </div>
                  <div className="absolute right-0 flex flex-col items-start justify-start">
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-3.5">
                  <h2 className="text-center text-xl leading-8 font-semibold text-gray-900">
                    Emma Devis
                  </h2>
                  <p className="text-center text-sm leading-normal font-normal text-gray-500">
                    Pagedone was born out of a vision to revolutionize portfolio
                    management for busy professionals. Since our inception, we
                    have experienced remarkable success.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="inline-flex w-full flex-col items-start justify-start gap-5">
                <div className="relative flex w-full flex-col items-end justify-end">
                  <div className="inline-flex w-full items-start justify-start gap-2.5 bg-slate-300">
                    <img
                      src="https://pagedone.io/asset/uploads/1722840023.png"
                      alt="Benjamin Evans Image"
                      className="w-full bg-black/30 object-cover"
                    />
                  </div>
                  <div className="absolute right-0 flex flex-col items-start justify-start">
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-3.5">
                  <h4 className="text-center text-xl leading-8 font-semibold text-gray-900">
                    Benjamin Evans
                  </h4>
                  <p className="text-center text-sm leading-normal font-normal text-gray-500">
                    Since our inception, we have experienced remarkable success,
                    consistently exceeding expectations and setting new
                    standards in our field.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="inline-flex w-full flex-col items-start justify-start gap-5">
                <div className="relative flex w-full flex-col items-end justify-end">
                  <div className="inline-flex w-full items-start justify-start gap-2.5 bg-gray-300">
                    <img
                      src="https://pagedone.io/asset/uploads/1722840032.png"
                      alt="Metlinda Parker Image"
                      className="w-full bg-black/30 object-cover"
                    />
                  </div>
                  <div className="absolute right-0 flex flex-col items-start justify-start">
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-3.5">
                  <h4 className="text-center text-xl leading-8 font-semibold text-gray-900">
                    Metlinda Parker
                  </h4>
                  <p className="text-center text-sm leading-normal font-normal text-gray-500">
                    Our innovative solutions have empowered professionals to
                    stay organized, make informed decisions quickly, and achieve
                    their goals with confidence.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="inline-flex w-full flex-col items-start justify-start gap-5">
                <div className="relative flex w-full flex-col items-end justify-end">
                  <div className="inline-flex w-full items-start justify-start gap-2.5 bg-[#cdd3c5]">
                    <img
                      src="https://pagedone.io/asset/uploads/1722839885.png"
                      alt="Emma Devis Image"
                      className="w-full bg-black/30 object-cover"
                    />
                  </div>
                  <div className="absolute right-0 flex flex-col items-start justify-start">
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-3.5">
                  <h2 className="text-center text-xl leading-8 font-semibold text-gray-900">
                    Emma Devis
                  </h2>
                  <p className="text-center text-sm leading-normal font-normal text-gray-500">
                    Pagedone was born out of a vision to revolutionize portfolio
                    management for busy professionals. Since our inception, we
                    have experienced remarkable success.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="inline-flex w-full flex-col items-start justify-start gap-5">
                <div className="relative flex w-full flex-col items-end justify-end">
                  <div className="inline-flex w-full items-start justify-start gap-2.5 bg-slate-300">
                    <img
                      src="https://pagedone.io/asset/uploads/1722840023.png"
                      alt="Benjamin Evans Image"
                      className="w-full bg-black/30 object-cover"
                    />
                  </div>
                  <div className="absolute right-0 flex flex-col items-start justify-start">
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-3.5">
                  <h4 className="text-center text-xl leading-8 font-semibold text-gray-900">
                    Benjamin Evans
                  </h4>
                  <p className="text-center text-sm leading-normal font-normal text-gray-500">
                    Since our inception, we have experienced remarkable success,
                    consistently exceeding expectations and setting new
                    standards in our field.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="inline-flex w-full flex-col items-start justify-start gap-5">
                <div className="relative flex w-full flex-col items-end justify-end">
                  <div className="inline-flex w-full items-start justify-start gap-2.5 bg-gray-300">
                    <img
                      src="https://pagedone.io/asset/uploads/1722840032.png"
                      alt="Metlinda Parker Image"
                      className="w-full bg-black/30 object-cover"
                    />
                  </div>
                  <div className="absolute right-0 flex flex-col items-start justify-start">
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                    <a className="flex h-[52px] items-center justify-center bg-indigo-600 p-3.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-3.5">
                  <h4 className="text-center text-xl leading-8 font-semibold text-gray-900">
                    Metlinda Parker
                  </h4>
                  <p className="text-center text-sm leading-normal font-normal text-gray-500">
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
  )
}
