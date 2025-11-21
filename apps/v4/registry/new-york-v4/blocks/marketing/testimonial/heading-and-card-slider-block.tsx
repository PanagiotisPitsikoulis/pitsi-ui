export default function HeadingAndCardSliderBlock() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-sm flex-wrap items-center justify-center gap-y-8 sm:max-w-2xl md:flex-wrap lg:max-w-full lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:gap-y-0">
          <div className="w-full lg:w-2/5">
            <span className="mb-4 block text-sm font-medium text-gray-500">
              Testimonial
            </span>
            <h2 className="mb-8 text-4xl leading-[3.25rem] font-bold text-gray-900">
              23k+ Customers gave their{" "}
              <span className="bg-gradient-to-tr from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Feedback
              </span>
            </h2>
            {/* Slider controls */}
            <div className="flex items-center justify-center gap-10 lg:justify-start">
              <button
                id="slider-button-left"
                className="swiper-button-prev group flex h-12 w-12 items-center justify-center rounded-lg border border-solid border-indigo-600 transition-all duration-500 hover:bg-indigo-600"
                data-carousel-prev
              >
                {/* SVG removed */}
              </button>
              <button
                id="slider-button-right"
                className="swiper-button-next group flex h-12 w-12 items-center justify-center rounded-lg border border-solid border-indigo-600 transition-all duration-500 hover:bg-indigo-600"
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
                <div className="swiper-slide group rounded-2xl border border-solid border-gray-300 bg-white p-6 transition-all duration-500 hover:border-indigo-600 max-sm:mx-auto max-sm:max-w-sm">
                  <div className="mb-5 flex items-center gap-5 sm:mb-9">
                    <img
                      className="rounded-full object-cover"
                      src="https://pagedone.io/asset/uploads/1696229969.png"
                      alt="avatar"
                    />
                    <div className="grid gap-1">
                      <h5 className="font-medium text-gray-900 transition-all duration-500">
                        Jane D
                      </h5>
                      <span className="text-sm leading-6 text-gray-500">
                        CEO{" "}
                      </span>
                    </div>
                  </div>
                  <div className="mb-5 flex items-center gap-2 text-amber-500 transition-all duration-500 sm:mb-9">
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </div>
                  <p className="min-h-24 text-sm leading-6 text-gray-500 transition-all duration-500 group-hover:text-gray-800">
                    The user interface of this pagedone is so intuitive, I was
                    able to start using it without any guidance.
                  </p>
                </div>
                <div className="swiper-slide group rounded-2xl border border-solid border-gray-300 bg-white p-6 transition-all duration-500 hover:border-indigo-600 max-sm:mx-auto max-sm:max-w-sm">
                  <div className="mb-5 flex items-center gap-5 sm:mb-9">
                    <img
                      className="rounded-full object-cover"
                      src="	https://pagedone.io/asset/uploads/1696229994.png"
                      alt="avatar"
                    />
                    <div className="grid gap-1">
                      <h5 className="font-medium text-gray-900 transition-all duration-500">
                        Harsh P.
                      </h5>
                      <span className="text-sm leading-6 text-gray-500">
                        Product Designer{" "}
                      </span>
                    </div>
                  </div>
                  <div className="mb-5 flex items-center gap-2 text-amber-500 transition-all duration-500 sm:mb-9">
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </div>
                  <p className="min-h-24 text-sm leading-6 text-gray-500 transition-all duration-500 group-hover:text-gray-800">
                    I used to dread doing my taxes every year, but pagedone has
                    made the process so much simpler and stress-free.
                  </p>
                </div>
                <div className="swiper-slide group rounded-2xl border border-solid border-gray-300 bg-white p-6 transition-all duration-500 hover:border-indigo-600 max-sm:mx-auto max-sm:max-w-sm">
                  <div className="mb-5 flex items-center gap-5 sm:mb-9">
                    <img
                      className="rounded-full object-cover"
                      src="https://pagedone.io/asset/uploads/1696229969.png"
                      alt="avatar"
                    />
                    <div className="grid gap-1">
                      <h5 className="font-medium text-gray-900 transition-all duration-500">
                        Jane D
                      </h5>
                      <span className="text-sm leading-6 text-gray-500">
                        CEO{" "}
                      </span>
                    </div>
                  </div>
                  <div className="mb-5 flex items-center gap-2 text-amber-500 transition-all duration-500 sm:mb-9">
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </div>
                  <p className="min-h-24 text-sm leading-6 text-gray-500 transition-all duration-500 group-hover:text-gray-800">
                    The user interface of this pagedone is so intuitive, I was
                    able to start using it without any guidance.
                  </p>
                </div>
                <div className="swiper-slide group rounded-2xl border border-solid border-gray-300 bg-white p-6 transition-all duration-500 hover:border-indigo-600 max-sm:mx-auto max-sm:max-w-sm">
                  <div className="mb-5 flex items-center gap-5 sm:mb-9">
                    <img
                      className="rounded-full object-cover"
                      src="	https://pagedone.io/asset/uploads/1696229994.png"
                      alt="avatar"
                    />
                    <div className="grid gap-1">
                      <h5 className="font-medium text-gray-900 transition-all duration-500">
                        Harsh P.
                      </h5>
                      <span className="text-sm leading-6 text-gray-500">
                        Product Designer{" "}
                      </span>
                    </div>
                  </div>
                  <div className="mb-5 flex items-center gap-2 text-amber-500 transition-all duration-500 sm:mb-9">
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </div>
                  <p className="min-h-24 text-sm leading-6 text-gray-500 transition-all duration-500 group-hover:text-gray-800">
                    I used to dread doing my taxes every year, but pagedone has
                    made the process so much simpler and stress-free.
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
