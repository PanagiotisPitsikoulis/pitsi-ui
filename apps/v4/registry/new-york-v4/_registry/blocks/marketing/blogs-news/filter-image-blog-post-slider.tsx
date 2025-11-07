export default function FilterImageBlogPostSlider() {
  return (
    <div className="overflow-hidden py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-center gap-10 sm:flex-row sm:justify-between lg:gap-4">
          <div className="block">
            <h2 className="font-manrope mb-4 text-4xl leading-snug font-bold text-indigo-600 max-sm:text-center">
              Tailored Solutions for Your Industry
            </h2>
            <p className="max-w-2xl text-base leading-8 font-normal text-gray-600 max-sm:text-center lg:pr-9">
              Stay informed and inspired with our regularly updated content,
              crafted to provide value and spark meaningful discussions.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <button className="swiper-button-prev group mr-6 flex items-center justify-center rounded-full border border-indigo-600 transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-700">
              {/* SVG removed */}
            </button>
            <button className="swiper-button-next group flex items-center justify-center rounded-full border border-indigo-600 transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-700">
              {/* SVG removed */}
            </button>
          </div>
        </div>
        <div className="swiper mySwiper">
          <div className="swiper-wrapper w-max">
            <div className="swiper-slide">
              <div className="relative max-w-full rounded-2xl lg:max-w-[330px]">
                <img
                  src="https://pagedone.io/asset/uploads/1722665898.png"
                  alt="blog cover image"
                  className="w-full rounded-2xl object-cover"
                />
                <div className="absolute top-0 left-0 flex h-full w-full items-end rounded-2xl bg-gradient-to-b from-transparent to-gray-900/60 px-4 py-6">
                  <div>
                    <h6 className="text-lg font-semibold text-white">
                      Clever Ways to Organize Your Life{" "}
                    </h6>
                    <p className="my-2.5 mb-3.5 text-xs font-medium text-white">
                      Throughout this guide, you'll also find practical
                      resources, recommended readings, and actionable
                    </p>
                    <a
                      href="javascript:;"
                      className="flex items-center gap-2.5 text-base font-semibold text-white transition-all duration-500 hover:gap-4"
                    >
                      Read more
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="relative max-w-full rounded-2xl lg:max-w-[330px]">
                <img
                  src="https://pagedone.io/asset/uploads/1722665918.png"
                  alt="blog cover image"
                  className="w-full rounded-2xl object-cover"
                />
                <div className="absolute top-0 left-0 flex h-full w-full items-end rounded-2xl bg-gradient-to-b from-transparent to-gray-900/60 px-4 py-6">
                  <div>
                    <h6 className="text-lg font-semibold text-white">
                      Echnology is Transforming
                    </h6>
                    <p className="my-2.5 mb-3.5 text-xs font-medium text-white">
                      Explore how cutting-edge technology is reshaping various
                      aspects of our world. From advancements.
                    </p>
                    <a
                      href="javascript:;"
                      className="flex items-center gap-2.5 text-base font-semibold text-white transition-all duration-500 hover:gap-4"
                    >
                      Read more
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="relative max-w-full rounded-2xl lg:max-w-[330px]">
                <img
                  src="https://pagedone.io/asset/uploads/1722665934.png"
                  alt="blog cover image"
                  className="w-full rounded-2xl object-cover"
                />
                <div className="absolute top-0 left-0 flex h-full w-full items-end rounded-2xl bg-gradient-to-b from-transparent to-gray-900/60 px-4 py-6">
                  <div>
                    <h6 className="text-lg font-semibold text-white">
                      Streamline your daily routines{" "}
                    </h6>
                    <p className="my-2.5 mb-3.5 text-xs font-medium text-white">
                      Discover tips and tools to enhance productivity, reduce
                      stress, and make your day-to-day tasks.
                    </p>
                    <a
                      href="javascript:;"
                      className="flex items-center gap-2.5 text-base font-semibold text-white transition-all duration-500 hover:gap-4"
                    >
                      Read more
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="relative max-w-full rounded-2xl lg:max-w-[330px]">
                <img
                  src="https://pagedone.io/asset/uploads/1722665950.png"
                  alt="blog cover image"
                  className="w-full rounded-2xl object-cover"
                />
                <div className="absolute top-0 left-0 flex h-full w-full items-end rounded-2xl bg-gradient-to-b from-transparent to-gray-900/60 px-4 py-6">
                  <div>
                    <h6 className="text-lg font-semibold text-white">
                      Smart apps to minimalist techniques
                    </h6>
                    <p className="my-2.5 mb-3.5 text-xs font-medium text-white">
                      Uncover a range of solutions from smart apps to minimalist
                      techniques designed.
                    </p>
                    <a
                      href="javascript:;"
                      className="flex items-center gap-2.5 text-base font-semibold text-white transition-all duration-500 hover:gap-4"
                    >
                      Read more
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="relative max-w-full rounded-2xl lg:max-w-[330px]">
                <img
                  src="https://pagedone.io/asset/uploads/1722665898.png"
                  alt="blog cover image"
                  className="w-full rounded-2xl object-cover"
                />
                <div className="absolute top-0 left-0 flex h-full w-full items-end rounded-2xl bg-gradient-to-b from-transparent to-gray-900/60 px-4 py-6">
                  <div>
                    <h6 className="text-lg font-semibold text-white">
                      Clever Ways to Organize Your Life{" "}
                    </h6>
                    <p className="my-2.5 mb-3.5 text-xs font-medium text-white">
                      Throughout this guide, you'll also find practical
                      resources, recommended readings, and actionable
                    </p>
                    <a
                      href="javascript:;"
                      className="flex items-center gap-2.5 text-base font-semibold text-white transition-all duration-500 hover:gap-4"
                    >
                      Read more
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="relative max-w-full rounded-2xl lg:max-w-[330px]">
                <img
                  src="https://pagedone.io/asset/uploads/1722665918.png"
                  alt="blog cover image"
                  className="w-full rounded-2xl object-cover"
                />
                <div className="absolute top-0 left-0 flex h-full w-full items-end rounded-2xl bg-gradient-to-b from-transparent to-gray-900/60 px-4 py-6">
                  <div>
                    <h6 className="text-lg font-semibold text-white">
                      Echnology is Transforming
                    </h6>
                    <p className="my-2.5 mb-3.5 text-xs font-medium text-white">
                      Explore how cutting-edge technology is reshaping various
                      aspects of our world. From advancements.
                    </p>
                    <a
                      href="javascript:;"
                      className="flex items-center gap-2.5 text-base font-semibold text-white transition-all duration-500 hover:gap-4"
                    >
                      Read more
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="relative max-w-full rounded-2xl lg:max-w-[330px]">
                <img
                  src="https://pagedone.io/asset/uploads/1722665934.png"
                  alt="blog cover image"
                  className="w-full rounded-2xl object-cover"
                />
                <div className="absolute top-0 left-0 flex h-full w-full items-end rounded-2xl bg-gradient-to-b from-transparent to-gray-900/60 px-4 py-6">
                  <div>
                    <h6 className="text-lg font-semibold text-white">
                      Streamline your daily routines{" "}
                    </h6>
                    <p className="my-2.5 mb-3.5 text-xs font-medium text-white">
                      Discover tips and tools to enhance productivity, reduce
                      stress, and make your day-to-day tasks.
                    </p>
                    <a
                      href="javascript:;"
                      className="flex items-center gap-2.5 text-base font-semibold text-white transition-all duration-500 hover:gap-4"
                    >
                      Read more
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="relative max-w-full rounded-2xl lg:max-w-[330px]">
                <img
                  src="https://pagedone.io/asset/uploads/1722665950.png"
                  alt="blog cover image"
                  className="w-full rounded-2xl object-cover"
                />
                <div className="absolute top-0 left-0 flex h-full w-full items-end rounded-2xl bg-gradient-to-b from-transparent to-gray-900/60 px-4 py-6">
                  <div>
                    <h6 className="text-lg font-semibold text-white">
                      Smart apps to minimalist techniques
                    </h6>
                    <p className="my-2.5 mb-3.5 text-xs font-medium text-white">
                      Uncover a range of solutions from smart apps to minimalist
                      techniques designed.
                    </p>
                    <a
                      href="javascript:;"
                      className="flex items-center gap-2.5 text-base font-semibold text-white transition-all duration-500 hover:gap-4"
                    >
                      Read more
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="relative max-w-full rounded-2xl lg:max-w-[330px]">
                <img
                  src="https://pagedone.io/asset/uploads/1722665898.png"
                  alt="blog cover image"
                  className="w-full rounded-2xl object-cover"
                />
                <div className="absolute top-0 left-0 flex h-full w-full items-end rounded-2xl bg-gradient-to-b from-transparent to-gray-900/60 px-4 py-6">
                  <div>
                    <h6 className="text-lg font-semibold text-white">
                      Clever Ways to Organize Your Life{" "}
                    </h6>
                    <p className="my-2.5 mb-3.5 text-xs font-medium text-white">
                      Throughout this guide, you'll also find practical
                      resources, recommended readings, and actionable
                    </p>
                    <a
                      href="javascript:;"
                      className="flex items-center gap-2.5 text-base font-semibold text-white transition-all duration-500 hover:gap-4"
                    >
                      Read more
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="relative max-w-full rounded-2xl lg:max-w-[330px]">
                <img
                  src="https://pagedone.io/asset/uploads/1722665918.png"
                  alt="blog cover image"
                  className="w-full rounded-2xl object-cover"
                />
                <div className="absolute top-0 left-0 flex h-full w-full items-end rounded-2xl bg-gradient-to-b from-transparent to-gray-900/60 px-4 py-6">
                  <div>
                    <h6 className="text-lg font-semibold text-white">
                      Echnology is Transforming
                    </h6>
                    <p className="my-2.5 mb-3.5 text-xs font-medium text-white">
                      Explore how cutting-edge technology is reshaping various
                      aspects of our world. From advancements.
                    </p>
                    <a
                      href="javascript:;"
                      className="flex items-center gap-2.5 text-base font-semibold text-white transition-all duration-500 hover:gap-4"
                    >
                      Read more
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="relative max-w-full rounded-2xl lg:max-w-[330px]">
                <img
                  src="https://pagedone.io/asset/uploads/1722665934.png"
                  alt="blog cover image"
                  className="w-full rounded-2xl object-cover"
                />
                <div className="absolute top-0 left-0 flex h-full w-full items-end rounded-2xl bg-gradient-to-b from-transparent to-gray-900/60 px-4 py-6">
                  <div>
                    <h6 className="text-lg font-semibold text-white">
                      Streamline your daily routines{" "}
                    </h6>
                    <p className="my-2.5 mb-3.5 text-xs font-medium text-white">
                      Discover tips and tools to enhance productivity, reduce
                      stress, and make your day-to-day tasks.
                    </p>
                    <a
                      href="javascript:;"
                      className="flex items-center gap-2.5 text-base font-semibold text-white transition-all duration-500 hover:gap-4"
                    >
                      Read more
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="relative max-w-full rounded-2xl lg:max-w-[330px]">
                <img
                  src="https://pagedone.io/asset/uploads/1722665950.png"
                  alt="blog cover image"
                  className="w-full rounded-2xl object-cover"
                />
                <div className="absolute top-0 left-0 flex h-full w-full items-end rounded-2xl bg-gradient-to-b from-transparent to-gray-900/60 px-4 py-6">
                  <div>
                    <h6 className="text-lg font-semibold text-white">
                      Smart apps to minimalist techniques
                    </h6>
                    <p className="my-2.5 mb-3.5 text-xs font-medium text-white">
                      Uncover a range of solutions from smart apps to minimalist
                      techniques designed.
                    </p>
                    <a
                      href="javascript:;"
                      className="flex items-center gap-2.5 text-base font-semibold text-white transition-all duration-500 hover:gap-4"
                    >
                      Read more
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
