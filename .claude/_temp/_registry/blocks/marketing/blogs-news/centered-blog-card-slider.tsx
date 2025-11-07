export default function CenteredBlogCardSlider() {
  return (
    <section className="py-24">
      <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Most Recent Post
            </h2>
            <p className="text-center text-gray-500 text-lg font-normal leading-relaxed">
              Read our most recent post for the latest news and insights.
            </p>
          </div>
        </div>
        <div className="swiper-container testimonial-slider-ltr" dir="ltr">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="group w-full bg-gradient-to-b from-black to-black rounded-xl flex-col justify-end items-start inline-flex relative">
                <img
                  src="https://pagedone.io/asset/uploads/1722321993.png"
                  alt="Blog and News Image"
                  className="rounded-xl w-full h-full object-cover"
                />
                <div className="w-full px-5 pb-5 flex flex-col gap-1 absolute">
                  <h6 className="text-gray-100 text-base font-medium leading-relaxed">
                    5 min
                  </h6>
                  <h4 className="text-white text-xl font-semibold leading-8">
                    Solar Power Innovations: From Panels to <br /> Paints
                  </h4>
                  <button className="py-2.5 rounded-full justify-start items-start inline-flex">
                    <span className="py-px text-emerald-500 group-hover:text-emerald-600 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                      Read More
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group w-full bg-gradient-to-b from-black to-black rounded-xl flex-col justify-end items-start inline-flex relative">
                <img
                  src="https://pagedone.io/asset/uploads/1722322004.png"
                  alt="Blog and News Image"
                  className="rounded-xl w-full h-full object-cover"
                />
                <div className="w-full px-5 pb-5 flex flex-col gap-1 absolute">
                  <h6 className="text-gray-100 text-base font-medium leading-relaxed">
                    15 min
                  </h6>
                  <h4 className="text-white text-xl font-semibold leading-8">
                    The Future of EdTech: How VR is Revolutionizing Classrooms
                  </h4>
                  <button className="py-2.5 rounded-full justify-start items-start inline-flex">
                    <span className="py-px text-emerald-500 group-hover:text-emerald-600 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                      Read More
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group w-full bg-gradient-to-b from-black to-black rounded-xl flex-col justify-end items-start inline-flex relative">
                <img
                  src="https://pagedone.io/asset/uploads/1722322014.png"
                  alt="Blog and News Image"
                  className="rounded-xl w-full h-full object-cover"
                />
                <div className="w-full px-5 pb-5 flex flex-col gap-1 absolute">
                  <h6 className="text-gray-100 text-base font-medium leading-relaxed">
                    14 min
                  </h6>
                  <h4 className="text-white text-xl font-semibold leading-8">
                    Wearable Tech for Fitness: Beyond Steps and Calories
                  </h4>
                  <button className="py-2.5 rounded-full justify-start items-start inline-flex">
                    <span className="py-px text-emerald-500 group-hover:text-emerald-600 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                      Read More
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group w-full bg-gradient-to-b from-black to-black rounded-xl flex-col justify-end items-start inline-flex relative">
                <img
                  src="https://pagedone.io/asset/uploads/1722322024.png"
                  alt="Blog and News Image"
                  className="rounded-xl w-full h-full object-cover"
                />
                <div className="w-full px-5 pb-5 flex flex-col gap-1 absolute">
                  <h6 className="text-gray-100 text-base font-medium leading-relaxed">
                    21 min
                  </h6>
                  <h4 className="text-white text-xl font-semibold leading-8">
                    Hydrogen Fuel Cells: The Future of Clean Transportation
                  </h4>
                  <button className="py-2.5 rounded-full justify-start items-start inline-flex">
                    <span className="py-px text-emerald-500 group-hover:text-emerald-600 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                      Read More
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group w-full bg-gradient-to-b from-black to-black rounded-xl flex-col justify-end items-start inline-flex relative">
                <img
                  src="https://pagedone.io/asset/uploads/1722321993.png"
                  alt="Blog and News Image"
                  className="rounded-xl w-full h-full object-cover"
                />
                <div className="w-full px-5 pb-5 flex flex-col gap-1 absolute">
                  <h6 className="text-gray-100 text-base font-medium leading-relaxed">
                    5 min
                  </h6>
                  <h4 className="text-white text-xl font-semibold leading-8">
                    Solar Power Innovations: From Panels to <br /> Paints
                  </h4>
                  <button className="py-2.5 rounded-full justify-start items-start inline-flex">
                    <span className="py-px text-emerald-500 group-hover:text-emerald-600 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                      Read More
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group w-full bg-gradient-to-b from-black to-black rounded-xl flex-col justify-end items-start inline-flex relative">
                <img
                  src="https://pagedone.io/asset/uploads/1722322004.png"
                  alt="Blog and News Image"
                  className="rounded-xl w-full h-full object-cover"
                />
                <div className="w-full px-5 pb-5 flex flex-col gap-1 absolute">
                  <h6 className="text-gray-100 text-base font-medium leading-relaxed">
                    15 min
                  </h6>
                  <h4 className="text-white text-xl font-semibold leading-8">
                    The Future of EdTech: How VR is Revolutionizing Classrooms
                  </h4>
                  <button className="py-2.5 rounded-full justify-start items-start inline-flex">
                    <span className="py-px text-emerald-500 group-hover:text-emerald-600 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                      Read More
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group w-full bg-gradient-to-b from-black to-black rounded-xl flex-col justify-end items-start inline-flex relative">
                <img
                  src="https://pagedone.io/asset/uploads/1722322014.png"
                  alt="Blog and News Image"
                  className="rounded-xl w-full h-full object-cover"
                />
                <div className="w-full px-5 pb-5 flex flex-col gap-1 absolute">
                  <h6 className="text-gray-100 text-base font-medium leading-relaxed">
                    14 min
                  </h6>
                  <h4 className="text-white text-xl font-semibold leading-8">
                    Wearable Tech for Fitness: Beyond Steps and Calories
                  </h4>
                  <button className="py-2.5 rounded-full justify-start items-start inline-flex">
                    <span className="py-px text-emerald-500 group-hover:text-emerald-600 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                      Read More
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group w-full bg-gradient-to-b from-black to-black rounded-xl flex-col justify-end items-start inline-flex relative">
                <img
                  src="https://pagedone.io/asset/uploads/1722322024.png"
                  alt="Blog and News Image"
                  className="rounded-xl w-full h-full object-cover"
                />
                <div className="w-full px-5 pb-5 flex flex-col gap-1 absolute">
                  <h6 className="text-gray-100 text-base font-medium leading-relaxed">
                    21 min
                  </h6>
                  <h4 className="text-white text-xl font-semibold leading-8">
                    Hydrogen Fuel Cells: The Future of Clean Transportation
                  </h4>
                  <button className="py-2.5 rounded-full justify-start items-start inline-flex">
                    <span className="py-px text-emerald-500 group-hover:text-emerald-600 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
                      Read More
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="group px-5 py-2.5 rounded-full justify-center items-center flex">
          <span className="px-2 py-px text-indigo-600 group-hover:text-indigo-800 transition-all duration-700 ease-in-out text-base font-semibold leading-relaxed">
            Explore More
          </span>
          {/* SVG removed */}
        </button>
      </div>
    </section>
  );
}
