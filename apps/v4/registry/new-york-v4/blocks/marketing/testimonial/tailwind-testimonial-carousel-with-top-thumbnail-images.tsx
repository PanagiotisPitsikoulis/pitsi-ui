export default function TailwindTestimonialCarouselWithTopThumbnailImages() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-center justify-start gap-3 pb-10 lg:pb-14">
          <h2 className="text-center text-sm leading-normal font-medium text-blue-700">
            Testimonial
          </h2>
          <p className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
            Our Students Share Their Success
          </p>
        </div>
        <div className="slider-box flex flex-col gap-8">
          <div className="w-full">
            <div className="nav-for-slider relative">
              <button
                id="slider-button-left"
                className="swiper-button-prev group left-[22%] mr-8 hidden items-center justify-center lg:flex xl:left-[26%]"
              >
                {/* SVG removed */}
              </button>
              <div className="swiper-wrapper flex justify-center gap-4 md:gap-5">
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1720778716.png"
                    alt="Gallery image"
                    className="gallery-image h-full w-full cursor-pointer rounded-lg object-cover"
                  />
                </div>
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1720778725.png"
                    alt="Gallery image"
                    className="gallery-image h-full w-full cursor-pointer rounded-lg object-cover"
                  />
                </div>
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1720778737.png"
                    alt="Gallery image"
                    className="gallery-image h-full w-full cursor-pointer rounded-lg object-cover"
                  />
                </div>
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1720778748.png"
                    alt="Gallery image"
                    className="gallery-image h-full w-full cursor-pointer rounded-lg object-cover"
                  />
                </div>
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1720778759.png"
                    alt="Gallery image"
                    className="gallery-image h-full w-full cursor-pointer rounded-lg object-cover"
                  />
                </div>
              </div>
              <button
                id="slider-button-right"
                className="swiper-button-next group right-[22%] ml-8 hidden items-center justify-center lg:flex xl:right-[26%]"
              >
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="box gallery w-full">
            <div className="swiper main-slide-carousel swiper-container relative">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="flex w-full flex-col items-center justify-start gap-6 rounded-3xl border border-gray-200 bg-white p-5 md:flex-row">
                    <img
                      className="h-[200px] w-[200px] rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1721803465.png"
                    />
                    <div className="inline-flex flex-col items-center justify-start gap-6 md:items-start">
                      <div className="flex flex-col items-center justify-start gap-3 md:items-start">
                        <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-gray-900 md:text-start">
                          “ Enhanced Learning Experience ”
                        </h3>
                        <p className="text-center text-base leading-relaxed font-normal text-gray-500 md:text-start">
                          The innovative approach has revolutionized our study
                          methods. Their AI-powered tools have saved us
                          countless hours and allowed us to grasp complex
                          concepts more effectively. We've seen a remarkable
                          improvement in our overall academic performance.
                        </p>
                      </div>
                      <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
                        <h6 className="text-center text-base leading-relaxed font-medium text-black md:text-start">
                          William Foster
                        </h6>
                        <div className="flex h-5 items-center justify-end gap-3">
                          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent hover:bg-neutral-100">
                            {/* SVG removed */}
                          </a>
                          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent hover:bg-neutral-100">
                            {/* SVG removed */}
                          </a>
                          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent hover:bg-neutral-100">
                            {/* SVG removed */}
                          </a>
                          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent hover:bg-neutral-100">
                            {/* SVG removed */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="flex w-full flex-col items-center justify-start gap-6 rounded-3xl border border-gray-200 bg-white p-5 md:flex-row">
                    <img
                      className="h-[200px] w-[200px] rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1721803480.png"
                    />
                    <div className="inline-flex flex-col items-center justify-start gap-6 md:items-start">
                      <div className="flex flex-col items-center justify-start gap-3 md:items-start">
                        <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-gray-900 md:text-start">
                          “ Enhanced Learning Experience ”
                        </h3>
                        <p className="text-center text-base leading-relaxed font-normal text-gray-500 md:text-start">
                          The innovative approach has revolutionized our study
                          methods. Their AI-powered tools have saved us
                          countless hours and allowed us to grasp complex
                          concepts more effectively. We've seen a remarkable
                          improvement in our overall academic performance.
                        </p>
                      </div>
                      <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
                        <h6 className="text-center text-base leading-relaxed font-medium text-black md:text-start">
                          James Miller
                        </h6>
                        <div className="flex h-5 items-center justify-end gap-3">
                          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent hover:bg-neutral-100">
                            {/* SVG removed */}
                          </a>
                          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent hover:bg-neutral-100">
                            {/* SVG removed */}
                          </a>
                          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent hover:bg-neutral-100">
                            {/* SVG removed */}
                          </a>
                          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent hover:bg-neutral-100">
                            {/* SVG removed */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="flex w-full flex-col items-center justify-start gap-6 rounded-3xl border border-gray-200 bg-white p-5 md:flex-row">
                    <img
                      className="h-[200px] w-[200px] rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1721803493.png"
                    />
                    <div className="inline-flex flex-col items-center justify-start gap-6 md:items-start">
                      <div className="flex flex-col items-center justify-start gap-3 md:items-start">
                        <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-gray-900 md:text-start">
                          “ Enhanced Learning Experience ”
                        </h3>
                        <p className="text-center text-base leading-relaxed font-normal text-gray-500 md:text-start">
                          The innovative approach has revolutionized our study
                          methods. Their AI-powered tools have saved us
                          countless hours and allowed us to grasp complex
                          concepts more effectively. We've seen a remarkable
                          improvement in our overall academic performance.
                        </p>
                      </div>
                      <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
                        <h6 className="text-center text-base leading-relaxed font-medium text-black md:text-start">
                          Emmily Patel
                        </h6>
                        <div className="flex h-5 items-center justify-end gap-3">
                          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent hover:bg-neutral-100">
                            {/* SVG removed */}
                          </a>
                          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent hover:bg-neutral-100">
                            {/* SVG removed */}
                          </a>
                          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent hover:bg-neutral-100">
                            {/* SVG removed */}
                          </a>
                          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent hover:bg-neutral-100">
                            {/* SVG removed */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="flex w-full flex-col items-center justify-start gap-6 rounded-3xl border border-gray-200 bg-white p-5 md:flex-row">
                    <img
                      className="h-[200px] w-[200px] rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1721803503.png"
                    />
                    <div className="inline-flex flex-col items-center justify-start gap-6 md:items-start">
                      <div className="flex flex-col items-center justify-start gap-3 md:items-start">
                        <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-gray-900 md:text-start">
                          “ Enhanced Learning Experience ”
                        </h3>
                        <p className="text-center text-base leading-relaxed font-normal text-gray-500 md:text-start">
                          The innovative approach has revolutionized our study
                          methods. Their AI-powered tools have saved us
                          countless hours and allowed us to grasp complex
                          concepts more effectively. We've seen a remarkable
                          improvement in our overall academic performance.
                        </p>
                      </div>
                      <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
                        <h6 className="text-center text-base leading-relaxed font-medium text-black md:text-start">
                          Devon Lane
                        </h6>
                        <div className="flex h-5 items-center justify-end gap-3">
                          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent hover:bg-neutral-100">
                            {/* SVG removed */}
                          </a>
                          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent hover:bg-neutral-100">
                            {/* SVG removed */}
                          </a>
                          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent hover:bg-neutral-100">
                            {/* SVG removed */}
                          </a>
                          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent hover:bg-neutral-100">
                            {/* SVG removed */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="flex w-full flex-col items-center justify-start gap-6 rounded-3xl border border-gray-200 bg-white p-5 md:flex-row">
                    <img
                      className="h-[200px] w-[200px] rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1721803515.png"
                    />
                    <div className="inline-flex flex-col items-center justify-start gap-6 md:items-start">
                      <div className="flex flex-col items-center justify-start gap-3 md:items-start">
                        <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-gray-900 md:text-start">
                          “ Enhanced Learning Experience ”
                        </h3>
                        <p className="text-center text-base leading-relaxed font-normal text-gray-500 md:text-start">
                          The innovative approach has revolutionized our study
                          methods. Their AI-powered tools have saved us
                          countless hours and allowed us to grasp complex
                          concepts more effectively. We've seen a remarkable
                          improvement in our overall academic performance.
                        </p>
                      </div>
                      <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
                        <h6 className="text-center text-base leading-relaxed font-medium text-black md:text-start">
                          Yasmine Tano
                        </h6>
                        <div className="flex h-5 items-center justify-end gap-3">
                          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent hover:bg-neutral-100">
                            {/* SVG removed */}
                          </a>
                          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent hover:bg-neutral-100">
                            {/* SVG removed */}
                          </a>
                          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent hover:bg-neutral-100">
                            {/* SVG removed */}
                          </a>
                          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent hover:bg-neutral-100">
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
        </div>
      </div>
    </section>
  )
}
