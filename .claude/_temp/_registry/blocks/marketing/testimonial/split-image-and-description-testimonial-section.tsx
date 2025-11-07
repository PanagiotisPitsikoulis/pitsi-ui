export default function SplitImageAndDescriptionTestimonialSection() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center max-w-2xl mx-auto lg:max-w-full ">
          <div className="swiper mySwiper2 w-full lg:w-1/2">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  src="https://pagedone.io/asset/uploads/1696230488.png"
                  alt="Julia image"
                  className="mx-auto lg:mx-0 object-cover"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="https://pagedone.io/asset/uploads/1696238786.png"
                  alt="Julia image"
                  className="mx-auto lg:mx-0 max-h-[450px] aspect-square rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
          <div className="swiper mySwiper w-full lg:w-1/2">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="pb-28 border-b border-solid border-gray-300">
                  <h4 className="text-xl text-gray-500 mb-7 font-medium text-center lg:text-left">
                    USER STORY
                  </h4>
                  <h2 className="text-5xl leading-[4rem] text-gray-900 font-medium text-center lg:text-left">
                    Our revenue grew to{" "}
                    <span className="text-indigo-600">144%</span> more after
                    just one month of use.
                  </h2>
                </div>
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <div className="grid gap-1">
                      <h5 className="text-xl text-gray-900 font-medium">
                        Julia Roberts
                      </h5>
                      <span className="text-sm text-gray-500">
                        Product and Sales Manager
                      </span>
                    </div>
                    {/*Slider controls*/}
                    <div className="flex items-center gap-4 relative w-32">
                      <button
                        id="slider-button-left"
                        className="swiper-button-prev group flex p-2 justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 "
                        data-carousel-prev
                      >
                        {/* SVG removed */}
                      </button>
                      <button
                        id="slider-button-right"
                        className="swiper-button-next group flex p-2 justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
                        data-carousel-next
                      >
                        {/* SVG removed */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="pb-28 border-b border-solid border-gray-300">
                  <h4 className="text-xl text-gray-500 mb-7 font-medium text-center lg:text-left">
                    USER STORY
                  </h4>
                  <h2 className="text-5xl leading-[4rem] text-gray-900 font-medium text-center lg:text-left">
                    Our revenue grew to{" "}
                    <span className="text-indigo-600">180%</span> more after
                    just one month of use.
                  </h2>
                </div>
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <div className="grid gap-1">
                      <h5 className="text-xl text-gray-900 font-medium">
                        Michael Cannon
                      </h5>
                      <span className="text-sm text-gray-500">
                        Product and Sales Manager
                      </span>
                    </div>
                    {/*Slider controls*/}
                    <div className="flex items-center gap-4 relative w-32">
                      <button
                        id="slider-button-left"
                        className="swiper-button-prev group p-2 flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 "
                        data-carousel-prev
                      >
                        {/* SVG removed */}
                      </button>
                      <button
                        id="slider-button-right"
                        className="swiper-button-next group p-2 flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
                        data-carousel-next
                      >
                        {/* SVG removed */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
