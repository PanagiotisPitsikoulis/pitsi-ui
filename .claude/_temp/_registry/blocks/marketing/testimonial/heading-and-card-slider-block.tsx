export default function HeadingAndCardSliderBlock() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
          <div className="w-full lg:w-2/5">
            <span className="text-sm text-gray-500 font-medium mb-4 block">
              Testimonial
            </span>
            <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-8">
              23k+ Customers gave their{" "}
              <span className=" text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-violet-600">
                Feedback
              </span>
            </h2>
            {/* Slider controls */}
            <div className="flex items-center justify-center lg:justify-start gap-10">
              <button
                id="slider-button-left"
                className="swiper-button-prev group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-lg hover:bg-indigo-600"
                data-carousel-prev
              >
                {/* SVG removed */}
              </button>
              <button
                id="slider-button-right"
                className="swiper-button-next group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-lg hover:bg-indigo-600"
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
                <div className="swiper-slide group bg-white border border-solid border-gray-300 rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-indigo-600">
                  <div className="flex items-center gap-5 mb-5 sm:mb-9">
                    <img
                      className="rounded-full object-cover"
                      src="https://pagedone.io/asset/uploads/1696229969.png"
                      alt="avatar"
                    />
                    <div className="grid gap-1">
                      <h5 className="text-gray-900 font-medium transition-all duration-500  ">
                        Jane D
                      </h5>
                      <span className="text-sm leading-6 text-gray-500">
                        CEO{" "}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center mb-5 sm:mb-9 gap-2 text-amber-500 transition-all duration-500  ">
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </div>
                  <p className="text-sm text-gray-500 leading-6 transition-all duration-500 min-h-24  group-hover:text-gray-800">
                    The user interface of this pagedone is so intuitive, I was
                    able to start using it without any guidance.
                  </p>
                </div>
                <div className="swiper-slide group bg-white border border-solid border-gray-300 rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-indigo-600">
                  <div className="flex items-center gap-5 mb-5 sm:mb-9">
                    <img
                      className="rounded-full object-cover"
                      src="	https://pagedone.io/asset/uploads/1696229994.png"
                      alt="avatar"
                    />
                    <div className="grid gap-1">
                      <h5 className="text-gray-900 font-medium transition-all duration-500  ">
                        Harsh P.
                      </h5>
                      <span className="text-sm leading-6 text-gray-500">
                        Product Designer{" "}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center mb-5 sm:mb-9 gap-2 text-amber-500 transition-all duration-500  ">
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </div>
                  <p className="text-sm text-gray-500 leading-6 transition-all duration-500 min-h-24 group-hover:text-gray-800">
                    I used to dread doing my taxes every year, but pagedone has
                    made the process so much simpler and stress-free.
                  </p>
                </div>
                <div className="swiper-slide group bg-white border border-solid border-gray-300 rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-indigo-600">
                  <div className="flex items-center gap-5 mb-5 sm:mb-9">
                    <img
                      className="rounded-full object-cover"
                      src="https://pagedone.io/asset/uploads/1696229969.png"
                      alt="avatar"
                    />
                    <div className="grid gap-1">
                      <h5 className="text-gray-900 font-medium transition-all duration-500  ">
                        Jane D
                      </h5>
                      <span className="text-sm leading-6 text-gray-500">
                        CEO{" "}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center mb-5 sm:mb-9 gap-2 text-amber-500 transition-all duration-500  ">
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </div>
                  <p className="text-sm text-gray-500 leading-6 transition-all duration-500 min-h-24 group-hover:text-gray-800">
                    The user interface of this pagedone is so intuitive, I was
                    able to start using it without any guidance.
                  </p>
                </div>
                <div className="swiper-slide group bg-white border border-solid border-gray-300 rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-indigo-600">
                  <div className="flex items-center gap-5 mb-5 sm:mb-9">
                    <img
                      className="rounded-full object-cover"
                      src="	https://pagedone.io/asset/uploads/1696229994.png"
                      alt="avatar"
                    />
                    <div className="grid gap-1">
                      <h5 className="text-gray-900 font-medium transition-all duration-500  ">
                        Harsh P.
                      </h5>
                      <span className="text-sm leading-6 text-gray-500">
                        Product Designer{" "}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center mb-5 sm:mb-9 gap-2 text-amber-500 transition-all duration-500  ">
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </div>
                  <p className="text-sm text-gray-500 leading-6 transition-all duration-500 min-h-24 group-hover:text-gray-800">
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
  );
}
