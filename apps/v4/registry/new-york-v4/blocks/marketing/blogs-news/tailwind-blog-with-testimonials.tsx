export default function TailwindBlogWithTestimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between">
          <div className="flex w-full flex-col justify-between lg:w-2/5">
            <div className="block text-center lg:text-left">
              <h2 className="mb-5 text-4xl leading-[3.25rem] font-bold text-gray-900">
                Our latest <span className="text-indigo-600">blogs</span>
              </h2>
              <p className="mb-10 text-gray-500 max-lg:mx-auto max-lg:max-w-xl">
                Welcome to our blog section, where knowledge meets inspiration.
                Explore insightful articles, expert tips, and the latest trends
                in our field.
              </p>
              <a
                href="javascript:;"
                className="mx-auto flex w-52 cursor-pointer justify-center rounded-full border border-gray-300 px-7 py-3.5 font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:bg-gray-100 lg:mx-0"
              >
                View All
              </a>
            </div>
            {/* Slider controls */}
            <div className="mt-8 mb-4 flex items-center justify-center gap-8 lg:mt-0 lg:justify-start">
              <button
                id="slider-button-left"
                className="swiper-button-prev group flex h-11 w-11 items-center justify-center rounded-full border border-solid border-indigo-600 transition-all duration-500 hover:bg-indigo-600"
                data-carousel-prev
              >
                {/* SVG removed */}
              </button>
              <button
                id="slider-button-right"
                className="swiper-button-next group flex h-11 w-11 items-center justify-center rounded-full border border-solid border-indigo-600 transition-all duration-500 hover:bg-indigo-600"
                data-carousel-next
              >
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            {/*Slider wrapper*/}
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide group w-full max-lg:max-w-xl lg:w-1/2">
                  <div className="mb-9 flex items-center">
                    <img
                      src="https://pagedone.io/asset/uploads/1696244059.png"
                      alt="blogs tailwind section"
                      className="w-full rounded-2xl object-cover"
                    />
                  </div>
                  <h3 className="mb-4 text-xl leading-8 font-medium text-gray-900 group-hover:text-indigo-600">
                    Clever ways to invest in product to organize your portfolio
                  </h3>
                  <p className="mb-8 leading-6 text-gray-500 transition-all duration-500">
                    Discover smart investment strategies to streamline and
                    organize your portfolio. Explore innovative approaches to
                    optimize your...
                  </p>
                  <a
                    href="javascript:;"
                    className="flex cursor-pointer items-center gap-2 text-lg font-semibold text-indigo-700"
                  >
                    Read more{/* SVG removed */}
                  </a>
                </div>
                <div className="swiper-slide group w-full max-lg:max-w-xl lg:w-1/2">
                  <div className="mb-9 flex items-center">
                    <img
                      src="https://pagedone.io/asset/uploads/1696244074.png"
                      alt="blogs tailwind section"
                      className="w-full rounded-2xl object-cover"
                    />
                  </div>
                  <h3 className="mb-4 text-xl leading-8 font-medium text-gray-900 group-hover:text-indigo-600">
                    How to grow your profit through systematic investment with
                    us
                  </h3>
                  <p className="mb-8 leading-6 text-gray-500 transition-all duration-500">
                    Unlock the power of systematic investment with us and watch
                    your profits soar. Our expert team will guide you on the
                    path to financial..
                  </p>
                  <a
                    href="javascript:;"
                    className="flex cursor-pointer items-center gap-2 text-lg font-semibold text-indigo-700"
                  >
                    Read more{/* SVG removed */}
                  </a>
                </div>
                <div className="swiper-slide group w-full max-lg:max-w-xl lg:w-1/2">
                  <div className="mb-9 flex items-center">
                    <img
                      src="https://pagedone.io/asset/uploads/1696244059.png"
                      alt="blogs tailwind section"
                      className="w-full rounded-2xl object-cover"
                    />
                  </div>
                  <h3 className="mb-4 text-xl leading-8 font-medium text-gray-900 group-hover:text-indigo-600">
                    Clever ways to invest in product to organize your portfolio
                  </h3>
                  <p className="mb-8 leading-6 text-gray-500 transition-all duration-500">
                    Discover smart investment strategies to streamline and
                    organize your portfolio. Explore innovative approaches to
                    optimize your...
                  </p>
                  <a
                    href="javascript:;"
                    className="flex cursor-pointer items-center gap-2 text-lg font-semibold text-indigo-700"
                  >
                    Read more{/* SVG removed */}
                  </a>
                </div>
                <div className="swiper-slide group w-full max-lg:max-w-xl lg:w-1/2">
                  <div className="mb-9 flex items-center">
                    <img
                      src="https://pagedone.io/asset/uploads/1696244074.png"
                      alt="blogs tailwind section"
                      className="w-full rounded-2xl object-cover"
                    />
                  </div>
                  <h3 className="mb-4 text-xl leading-8 font-medium text-gray-900 group-hover:text-indigo-600">
                    How to grow your profit through systematic investment with
                    us
                  </h3>
                  <p className="mb-8 leading-6 text-gray-500 transition-all duration-500">
                    Unlock the power of systematic investment with us and watch
                    your profits soar. Our expert team will guide you on the
                    path to financial..
                  </p>
                  <a
                    href="javascript:;"
                    className="flex cursor-pointer items-center gap-2 text-lg font-semibold text-indigo-700"
                  >
                    Read more{/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
