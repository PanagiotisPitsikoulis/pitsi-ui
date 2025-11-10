export default function CenteredBlogCardSlider() {
  return (
    <section className="py-24">
      <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:gap-12">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex w-full flex-col items-center justify-start gap-3">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Most Recent Post
            </h2>
            <p className="text-center text-lg leading-relaxed font-normal text-gray-500">
              Read our most recent post for the latest news and insights.
            </p>
          </div>
        </div>
        <div className="swiper-container testimonial-slider-ltr" dir="ltr">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="group relative inline-flex w-full flex-col items-start justify-end rounded-xl bg-gradient-to-b from-black to-black">
                <img
                  src="https://pagedone.io/asset/uploads/1722321993.png"
                  alt="Blog and News Image"
                  className="h-full w-full rounded-xl object-cover"
                />
                <div className="absolute flex w-full flex-col gap-1 px-5 pb-5">
                  <h6 className="text-base leading-relaxed font-medium text-gray-100">
                    5 min
                  </h6>
                  <h4 className="text-xl leading-8 font-semibold text-white">
                    Solar Power Innovations: From Panels to <br /> Paints
                  </h4>
                  <button className="inline-flex items-start justify-start rounded-full py-2.5">
                    <span className="py-px text-base leading-relaxed font-semibold text-emerald-500 transition-all duration-700 ease-in-out group-hover:text-emerald-600">
                      Read More
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group relative inline-flex w-full flex-col items-start justify-end rounded-xl bg-gradient-to-b from-black to-black">
                <img
                  src="https://pagedone.io/asset/uploads/1722322004.png"
                  alt="Blog and News Image"
                  className="h-full w-full rounded-xl object-cover"
                />
                <div className="absolute flex w-full flex-col gap-1 px-5 pb-5">
                  <h6 className="text-base leading-relaxed font-medium text-gray-100">
                    15 min
                  </h6>
                  <h4 className="text-xl leading-8 font-semibold text-white">
                    The Future of EdTech: How VR is Revolutionizing Classrooms
                  </h4>
                  <button className="inline-flex items-start justify-start rounded-full py-2.5">
                    <span className="py-px text-base leading-relaxed font-semibold text-emerald-500 transition-all duration-700 ease-in-out group-hover:text-emerald-600">
                      Read More
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group relative inline-flex w-full flex-col items-start justify-end rounded-xl bg-gradient-to-b from-black to-black">
                <img
                  src="https://pagedone.io/asset/uploads/1722322014.png"
                  alt="Blog and News Image"
                  className="h-full w-full rounded-xl object-cover"
                />
                <div className="absolute flex w-full flex-col gap-1 px-5 pb-5">
                  <h6 className="text-base leading-relaxed font-medium text-gray-100">
                    14 min
                  </h6>
                  <h4 className="text-xl leading-8 font-semibold text-white">
                    Wearable Tech for Fitness: Beyond Steps and Calories
                  </h4>
                  <button className="inline-flex items-start justify-start rounded-full py-2.5">
                    <span className="py-px text-base leading-relaxed font-semibold text-emerald-500 transition-all duration-700 ease-in-out group-hover:text-emerald-600">
                      Read More
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group relative inline-flex w-full flex-col items-start justify-end rounded-xl bg-gradient-to-b from-black to-black">
                <img
                  src="https://pagedone.io/asset/uploads/1722322024.png"
                  alt="Blog and News Image"
                  className="h-full w-full rounded-xl object-cover"
                />
                <div className="absolute flex w-full flex-col gap-1 px-5 pb-5">
                  <h6 className="text-base leading-relaxed font-medium text-gray-100">
                    21 min
                  </h6>
                  <h4 className="text-xl leading-8 font-semibold text-white">
                    Hydrogen Fuel Cells: The Future of Clean Transportation
                  </h4>
                  <button className="inline-flex items-start justify-start rounded-full py-2.5">
                    <span className="py-px text-base leading-relaxed font-semibold text-emerald-500 transition-all duration-700 ease-in-out group-hover:text-emerald-600">
                      Read More
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group relative inline-flex w-full flex-col items-start justify-end rounded-xl bg-gradient-to-b from-black to-black">
                <img
                  src="https://pagedone.io/asset/uploads/1722321993.png"
                  alt="Blog and News Image"
                  className="h-full w-full rounded-xl object-cover"
                />
                <div className="absolute flex w-full flex-col gap-1 px-5 pb-5">
                  <h6 className="text-base leading-relaxed font-medium text-gray-100">
                    5 min
                  </h6>
                  <h4 className="text-xl leading-8 font-semibold text-white">
                    Solar Power Innovations: From Panels to <br /> Paints
                  </h4>
                  <button className="inline-flex items-start justify-start rounded-full py-2.5">
                    <span className="py-px text-base leading-relaxed font-semibold text-emerald-500 transition-all duration-700 ease-in-out group-hover:text-emerald-600">
                      Read More
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group relative inline-flex w-full flex-col items-start justify-end rounded-xl bg-gradient-to-b from-black to-black">
                <img
                  src="https://pagedone.io/asset/uploads/1722322004.png"
                  alt="Blog and News Image"
                  className="h-full w-full rounded-xl object-cover"
                />
                <div className="absolute flex w-full flex-col gap-1 px-5 pb-5">
                  <h6 className="text-base leading-relaxed font-medium text-gray-100">
                    15 min
                  </h6>
                  <h4 className="text-xl leading-8 font-semibold text-white">
                    The Future of EdTech: How VR is Revolutionizing Classrooms
                  </h4>
                  <button className="inline-flex items-start justify-start rounded-full py-2.5">
                    <span className="py-px text-base leading-relaxed font-semibold text-emerald-500 transition-all duration-700 ease-in-out group-hover:text-emerald-600">
                      Read More
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group relative inline-flex w-full flex-col items-start justify-end rounded-xl bg-gradient-to-b from-black to-black">
                <img
                  src="https://pagedone.io/asset/uploads/1722322014.png"
                  alt="Blog and News Image"
                  className="h-full w-full rounded-xl object-cover"
                />
                <div className="absolute flex w-full flex-col gap-1 px-5 pb-5">
                  <h6 className="text-base leading-relaxed font-medium text-gray-100">
                    14 min
                  </h6>
                  <h4 className="text-xl leading-8 font-semibold text-white">
                    Wearable Tech for Fitness: Beyond Steps and Calories
                  </h4>
                  <button className="inline-flex items-start justify-start rounded-full py-2.5">
                    <span className="py-px text-base leading-relaxed font-semibold text-emerald-500 transition-all duration-700 ease-in-out group-hover:text-emerald-600">
                      Read More
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group relative inline-flex w-full flex-col items-start justify-end rounded-xl bg-gradient-to-b from-black to-black">
                <img
                  src="https://pagedone.io/asset/uploads/1722322024.png"
                  alt="Blog and News Image"
                  className="h-full w-full rounded-xl object-cover"
                />
                <div className="absolute flex w-full flex-col gap-1 px-5 pb-5">
                  <h6 className="text-base leading-relaxed font-medium text-gray-100">
                    21 min
                  </h6>
                  <h4 className="text-xl leading-8 font-semibold text-white">
                    Hydrogen Fuel Cells: The Future of Clean Transportation
                  </h4>
                  <button className="inline-flex items-start justify-start rounded-full py-2.5">
                    <span className="py-px text-base leading-relaxed font-semibold text-emerald-500 transition-all duration-700 ease-in-out group-hover:text-emerald-600">
                      Read More
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="group flex items-center justify-center rounded-full px-5 py-2.5">
          <span className="px-2 py-px text-base leading-relaxed font-semibold text-indigo-600 transition-all duration-700 ease-in-out group-hover:text-indigo-800">
            Explore More
          </span>
          {/* SVG removed */}
        </button>
      </div>
    </section>
  )
}
