export default function ThreeCardsTestimonialSliderSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col items-center justify-center max-sm:gap-8 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-center text-4xl font-bold text-gray-900 lg:text-left">
            Testimonials{" "}
          </h2>
          {/* Slider controls */}
          <div className="flex items-center gap-8">
            <button
              id="slider-button-left"
              className="swiper-button-prev group flex h-12 w-12 items-center justify-center rounded-full border border-solid border-indigo-600 transition-all duration-500 hover:bg-indigo-600"
              data-carousel-prev
            >
              {/* SVG removed */}
            </button>
            <button
              id="slider-button-right"
              className="swiper-button-next group flex h-12 w-12 items-center justify-center rounded-full border border-solid border-indigo-600 transition-all duration-500 hover:bg-indigo-600"
              data-carousel-next
            >
              {/* SVG removed */}
            </button>
          </div>
        </div>
        {/*Slider wrapper*/}
        <div className="swiper mySwiper grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-2 lg:flex">
          <div className="swiper-wrapper">
            <div className="swiper-slide group slide-active:border-indigo-600 h-auto w-full rounded-2xl border border-solid border-gray-300 bg-white p-6 transition-all duration-500 hover:border-indigo-600">
              <div className="swiper-slide-active:text-indigo-600 mb-9 flex items-center gap-2 text-amber-500 transition-all duration-500 group-hover:text-indigo-600">
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
              </div>
              <p className="mb-9 h-24 text-lg leading-8 text-gray-500 transition-all duration-500 group-hover:text-gray-800">
                Pagedone is simply the best tool of investment in the market
                right now.
              </p>
              <div className="flex items-center gap-5">
                <img
                  className="rounded-full object-cover"
                  src="https://pagedone.io/asset/uploads/1696229969.png"
                  alt="avatar"
                />
                <div className="grid gap-1">
                  <h5 className="swiper-slide-active:text-indigo-600 font-medium text-gray-900 transition-all duration-500 group-hover:text-indigo-600">
                    Jane D
                  </h5>
                  <span className="text-sm leading-6 text-gray-500">CEO </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide group slide-active:border-indigo-600 w-full rounded-2xl border border-solid border-gray-300 bg-white p-6 transition-all duration-500 hover:border-indigo-600">
              <div className="swiper-slide-active:text-indigo-600 mb-9 flex items-center gap-2 text-amber-500 transition-all duration-500 group-hover:text-indigo-600">
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
              </div>
              <p className="mb-9 h-24 text-lg leading-8 text-gray-500 transition-all duration-500 group-hover:text-gray-800">
                I was hesitant to try pagedone at first, but I'm so glad I did -
                it's exceeded all of my expectations.
              </p>
              <div className="flex items-center gap-5">
                <img
                  className="rounded-full object-cover"
                  src="https://pagedone.io/asset/uploads/1696229994.png"
                  alt="avatar"
                />
                <div className="grid gap-1">
                  <h5 className="swiper-slide-active:text-indigo-600 font-medium text-gray-900 transition-all duration-500 group-hover:text-indigo-600">
                    Harsh P.
                  </h5>
                  <span className="text-sm leading-6 text-gray-500">
                    Product Designer
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide group w-full rounded-2xl border border-solid border-gray-300 bg-white p-6 transition-all duration-500 hover:border-indigo-600">
              <div className="swiper-slide-active:text-indigo-600 mb-9 flex items-center gap-2 text-amber-500 transition-all duration-500 group-hover:text-indigo-600">
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
              </div>
              <p className="mb-9 h-24 text-lg leading-8 text-gray-500 transition-all duration-500 group-hover:text-gray-800">
                Pagedone stands out as the most user-friendly and effective
                solution I've ever used.
              </p>
              <div className="flex items-center gap-5">
                <img
                  className="rounded-full object-cover"
                  src="https://pagedone.io/asset/uploads/1696230027.png"
                  alt="avatar"
                />
                <div className="grid gap-1">
                  <h5 className="swiper-slide-active:text-indigo-600 font-medium text-gray-900 transition-all duration-500 group-hover:text-indigo-600">
                    Alex K.
                  </h5>
                  <span className="text-sm leading-6 text-gray-500">
                    Design Lead
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide group slide-active:border-indigo-600 w-full rounded-2xl border border-solid border-gray-300 bg-white p-6 transition-all duration-500 hover:border-indigo-600">
              <div className="swiper-slide-active:text-indigo-600 mb-9 flex items-center gap-2 text-amber-500 transition-all duration-500 group-hover:text-indigo-600">
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
              </div>
              <p className="mb-9 h-24 text-lg leading-8 text-gray-500 transition-all duration-500 group-hover:text-gray-800">
                Pagedone is simply the best tool of investment in the market
                right now.
              </p>
              <div className="flex items-center gap-5">
                <img
                  className="rounded-full object-cover"
                  src="https://pagedone.io/asset/uploads/1696229969.png"
                  alt="avatar"
                />
                <div className="grid gap-1">
                  <h5 className="swiper-slide-active:text-indigo-600 font-medium text-gray-900 transition-all duration-500 group-hover:text-indigo-600">
                    Jane D
                  </h5>
                  <span className="text-sm leading-6 text-gray-500">CEO </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide group w-full rounded-2xl border border-solid border-gray-300 bg-white p-6 transition-all duration-500 hover:border-indigo-600">
              <div className="swiper-slide-active:text-indigo-600 mb-9 flex items-center gap-2 text-amber-500 transition-all duration-500 group-hover:text-indigo-600">
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
              </div>
              <p className="mb-9 h-24 text-lg leading-8 text-gray-500 transition-all duration-500 group-hover:text-gray-800">
                I was hesitant to try pagedone at first, but I'm so glad I did -
                it's exceeded all of my expectations.
              </p>
              <div className="flex items-center gap-5">
                <img
                  className="rounded-full object-cover"
                  src="https://pagedone.io/asset/uploads/1696229994.png"
                  alt="avatar"
                />
                <div className="grid gap-1">
                  <h5 className="swiper-slide-active:text-indigo-600 font-medium text-gray-900 transition-all duration-500 group-hover:text-indigo-600">
                    Harsh P.
                  </h5>
                  <span className="text-sm leading-6 text-gray-500">
                    Product Designer
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide group w-full rounded-2xl border border-solid border-gray-300 bg-white p-6 transition-all duration-500 hover:border-indigo-600">
              <div className="swiper-slide-active:text-indigo-600 mb-9 flex items-center gap-2 text-amber-500 transition-all duration-500 group-hover:text-indigo-600">
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
              </div>
              <p className="mb-9 h-24 text-lg leading-8 text-gray-500 transition-all duration-500 group-hover:text-gray-800">
                Pagedone stands out as the most user-friendly and effective
                solution I've ever used.
              </p>
              <div className="flex items-center gap-5">
                <img
                  className="rounded-full object-cover"
                  src="https://pagedone.io/asset/uploads/1696230027.png"
                  alt="avatar"
                />
                <div className="grid gap-1">
                  <h5 className="swiper-slide-active:text-indigo-600 font-medium text-gray-900 transition-all duration-500 group-hover:text-indigo-600">
                    Alex K.
                  </h5>
                  <span className="text-sm leading-6 text-gray-500">
                    Design Lead
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
