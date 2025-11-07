export default function ThreeCardsTestimonialSliderSection() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between max-sm:gap-8">
          <h2 className="text-4xl text-center font-bold text-gray-900 lg:text-left">
            Testimonials{" "}
          </h2>
          {/* Slider controls */}
          <div className="flex items-center gap-8">
            <button
              id="slider-button-left"
              className="swiper-button-prev group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 "
              data-carousel-prev
            >
              {/* SVG removed */}
            </button>
            <button
              id="slider-button-right"
              className="swiper-button-next group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
              data-carousel-next
            >
              {/* SVG removed */}
            </button>
          </div>
        </div>
        {/*Slider wrapper*/}
        <div className="lg:flex grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide group bg-white border border-solid h-auto border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide-active:border-indigo-600">
              <div className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
              </div>
              <p className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800">
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
                  <h5 className="text-gray-900 font-medium transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                    Jane D
                  </h5>
                  <span className="text-sm leading-6 text-gray-500">CEO </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide-active:border-indigo-600">
              <div className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
              </div>
              <p className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9  group-hover:text-gray-800">
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
                  <h5 className="text-gray-900 font-medium transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                    Harsh P.
                  </h5>
                  <span className="text-sm leading-6 text-gray-500">
                    Product Designer
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 ">
              <div className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
              </div>
              <p className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800 ">
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
                  <h5 className="text-gray-900 font-medium transition-all duration-500 group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                    Alex K.
                  </h5>
                  <span className="text-sm leading-6 text-gray-500">
                    Design Lead
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide-active:border-indigo-600">
              <div className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
              </div>
              <p className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800">
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
                  <h5 className="text-gray-900 font-medium transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                    Jane D
                  </h5>
                  <span className="text-sm leading-6 text-gray-500">CEO </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 ">
              <div className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
              </div>
              <p className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9  group-hover:text-gray-800">
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
                  <h5 className="text-gray-900 font-medium transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                    Harsh P.
                  </h5>
                  <span className="text-sm leading-6 text-gray-500">
                    Product Designer
                  </span>
                </div>
              </div>
            </div>
            <div className="swiper-slide group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 ">
              <div className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
              </div>
              <p className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800 ">
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
                  <h5 className="text-gray-900 font-medium transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
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
  );
}
