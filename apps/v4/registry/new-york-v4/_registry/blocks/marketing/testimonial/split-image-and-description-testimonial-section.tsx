export default function SplitImageAndDescriptionTestimonialSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col lg:max-w-full lg:flex-row lg:items-center">
          <div className="swiper mySwiper2 w-full lg:w-1/2">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  src="https://pagedone.io/asset/uploads/1696230488.png"
                  alt="Julia image"
                  className="mx-auto object-cover lg:mx-0"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="https://pagedone.io/asset/uploads/1696238786.png"
                  alt="Julia image"
                  className="mx-auto aspect-square max-h-[450px] rounded-2xl object-cover lg:mx-0"
                />
              </div>
            </div>
          </div>
          <div className="swiper mySwiper w-full lg:w-1/2">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="border-b border-solid border-gray-300 pb-28">
                  <h4 className="mb-7 text-center text-xl font-medium text-gray-500 lg:text-left">
                    USER STORY
                  </h4>
                  <h2 className="text-center text-5xl leading-[4rem] font-medium text-gray-900 lg:text-left">
                    Our revenue grew to{" "}
                    <span className="text-indigo-600">144%</span> more after
                    just one month of use.
                  </h2>
                </div>
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <div className="grid gap-1">
                      <h5 className="text-xl font-medium text-gray-900">
                        Julia Roberts
                      </h5>
                      <span className="text-sm text-gray-500">
                        Product and Sales Manager
                      </span>
                    </div>
                    {/*Slider controls*/}
                    <div className="relative flex w-32 items-center gap-4">
                      <button
                        id="slider-button-left"
                        className="swiper-button-prev group flex h-12 w-12 items-center justify-center rounded-full border border-solid border-indigo-600 p-2 transition-all duration-500 hover:bg-indigo-600"
                        data-carousel-prev
                      >
                        {/* SVG removed */}
                      </button>
                      <button
                        id="slider-button-right"
                        className="swiper-button-next group flex h-12 w-12 items-center justify-center rounded-full border border-solid border-indigo-600 p-2 transition-all duration-500 hover:bg-indigo-600"
                        data-carousel-next
                      >
                        {/* SVG removed */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="border-b border-solid border-gray-300 pb-28">
                  <h4 className="mb-7 text-center text-xl font-medium text-gray-500 lg:text-left">
                    USER STORY
                  </h4>
                  <h2 className="text-center text-5xl leading-[4rem] font-medium text-gray-900 lg:text-left">
                    Our revenue grew to{" "}
                    <span className="text-indigo-600">180%</span> more after
                    just one month of use.
                  </h2>
                </div>
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <div className="grid gap-1">
                      <h5 className="text-xl font-medium text-gray-900">
                        Michael Cannon
                      </h5>
                      <span className="text-sm text-gray-500">
                        Product and Sales Manager
                      </span>
                    </div>
                    {/*Slider controls*/}
                    <div className="relative flex w-32 items-center gap-4">
                      <button
                        id="slider-button-left"
                        className="swiper-button-prev group flex h-12 w-12 items-center justify-center rounded-full border border-solid border-indigo-600 p-2 transition-all duration-500 hover:bg-indigo-600"
                        data-carousel-prev
                      >
                        {/* SVG removed */}
                      </button>
                      <button
                        id="slider-button-right"
                        className="swiper-button-next group flex h-12 w-12 items-center justify-center rounded-full border border-solid border-indigo-600 p-2 transition-all duration-500 hover:bg-indigo-600"
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
  )
}
