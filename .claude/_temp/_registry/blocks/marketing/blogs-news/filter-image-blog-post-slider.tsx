export default function FilterImageBlogPostSlider() {
  return (
    <div className="py-24  overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 ">
        <div className="flex flex-col sm:flex-row items-center justify-center lg:gap-4 gap-10 sm:justify-between mb-12">
          <div className="block">
            <h2 className="font-manrope font-bold text-4xl leading-snug max-sm:text-center text-indigo-600 mb-4">
              Tailored Solutions for Your Industry
            </h2>
            <p className="text-base font-normal leading-8 text-gray-600 max-sm:text-center max-w-2xl lg:pr-9">
              Stay informed and inspired with our regularly updated content,
              crafted to provide value and spark meaningful discussions.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <button className="swiper-button-prev group mr-6 rounded-full border border-indigo-600 hover:bg-indigo-700 hover:border-transparent transition-all duration-700 ease-in-out flex items-center justify-center">
              {/* SVG removed */}
            </button>
            <button className="swiper-button-next group rounded-full border border-indigo-600 hover:bg-indigo-700 hover:border-transparent transition-all duration-700 ease-in-out flex items-center justify-center">
              {/* SVG removed */}
            </button>
          </div>
        </div>
        <div className="swiper mySwiper ">
          <div className="swiper-wrapper w-max">
            <div className="swiper-slide">
              <div className="relative rounded-2xl lg:max-w-[330px] max-w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1722665898.png"
                  alt="blog cover image"
                  className="rounded-2xl w-full object-cover"
                />
                <div className="absolute top-0 left-0 rounded-2xl py-6 px-4 w-full h-full bg-gradient-to-b from-transparent to-gray-900/60 flex items-end">
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
              <div className="relative rounded-2xl lg:max-w-[330px] max-w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1722665918.png"
                  alt="blog cover image"
                  className="rounded-2xl w-full object-cover"
                />
                <div className="absolute top-0 left-0 rounded-2xl py-6 px-4 w-full h-full bg-gradient-to-b from-transparent to-gray-900/60 flex items-end">
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
              <div className="relative rounded-2xl lg:max-w-[330px] max-w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1722665934.png"
                  alt="blog cover image"
                  className="rounded-2xl w-full object-cover"
                />
                <div className="absolute top-0 left-0 rounded-2xl py-6 px-4 w-full h-full bg-gradient-to-b from-transparent to-gray-900/60 flex items-end">
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
              <div className="relative rounded-2xl lg:max-w-[330px] max-w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1722665950.png"
                  alt="blog cover image"
                  className="rounded-2xl w-full object-cover"
                />
                <div className="absolute top-0 left-0 rounded-2xl py-6 px-4 w-full h-full bg-gradient-to-b from-transparent to-gray-900/60 flex items-end">
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
              <div className="relative rounded-2xl lg:max-w-[330px] max-w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1722665898.png"
                  alt="blog cover image"
                  className="rounded-2xl w-full object-cover"
                />
                <div className="absolute top-0 left-0 rounded-2xl py-6 px-4 w-full h-full bg-gradient-to-b from-transparent to-gray-900/60 flex items-end">
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
              <div className="relative rounded-2xl lg:max-w-[330px] max-w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1722665918.png"
                  alt="blog cover image"
                  className="rounded-2xl w-full object-cover"
                />
                <div className="absolute top-0 left-0 rounded-2xl py-6 px-4 w-full h-full bg-gradient-to-b from-transparent to-gray-900/60 flex items-end">
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
              <div className="relative rounded-2xl lg:max-w-[330px] max-w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1722665934.png"
                  alt="blog cover image"
                  className="rounded-2xl w-full object-cover"
                />
                <div className="absolute top-0 left-0 rounded-2xl py-6 px-4 w-full h-full bg-gradient-to-b from-transparent to-gray-900/60 flex items-end">
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
              <div className="relative rounded-2xl lg:max-w-[330px] max-w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1722665950.png"
                  alt="blog cover image"
                  className="rounded-2xl w-full object-cover"
                />
                <div className="absolute top-0 left-0 rounded-2xl py-6 px-4 w-full h-full bg-gradient-to-b from-transparent to-gray-900/60 flex items-end">
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
              <div className="relative rounded-2xl lg:max-w-[330px] max-w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1722665898.png"
                  alt="blog cover image"
                  className="rounded-2xl w-full object-cover"
                />
                <div className="absolute top-0 left-0 rounded-2xl py-6 px-4 w-full h-full bg-gradient-to-b from-transparent to-gray-900/60 flex items-end">
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
              <div className="relative rounded-2xl lg:max-w-[330px] max-w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1722665918.png"
                  alt="blog cover image"
                  className="rounded-2xl w-full object-cover"
                />
                <div className="absolute top-0 left-0 rounded-2xl py-6 px-4 w-full h-full bg-gradient-to-b from-transparent to-gray-900/60 flex items-end">
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
              <div className="relative rounded-2xl lg:max-w-[330px] max-w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1722665934.png"
                  alt="blog cover image"
                  className="rounded-2xl w-full object-cover"
                />
                <div className="absolute top-0 left-0 rounded-2xl py-6 px-4 w-full h-full bg-gradient-to-b from-transparent to-gray-900/60 flex items-end">
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
              <div className="relative rounded-2xl lg:max-w-[330px] max-w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1722665950.png"
                  alt="blog cover image"
                  className="rounded-2xl w-full object-cover"
                />
                <div className="absolute top-0 left-0 rounded-2xl py-6 px-4 w-full h-full bg-gradient-to-b from-transparent to-gray-900/60 flex items-end">
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
  );
}
