export default function TailwindTestimonialCarouselWithTopThumbnailImages() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center gap-3 flex lg:pb-14 pb-10">
          <h2 className="text-center text-blue-700 text-sm font-medium leading-normal">
            Testimonial
          </h2>
          <p className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Our Students Share Their Success
          </p>
        </div>
        <div className="slider-box flex flex-col gap-8">
          <div className="w-full">
            <div className="nav-for-slider relative">
              <button
                id="slider-button-left"
                className="swiper-button-prev lg:flex hidden items-center justify-center group mr-8 xl:left-[26%] left-[22%]"
              >
                {/* SVG removed */}
              </button>
              <div className="swiper-wrapper justify-center md:gap-5 gap-4 flex">
                <div className="swiper-slide thumbs-slide">
                  <img
                    src="https://pagedone.io/asset/uploads/1720778716.png"
                    alt="Gallery image"
                    className="gallery-image w-full cursor-pointer h-full rounded-lg object-cover"
                  />
                </div>
                <div className="swiper-slide thumbs-slide ">
                  <img
                    src="https://pagedone.io/asset/uploads/1720778725.png"
                    alt="Gallery image"
                    className="gallery-image w-full cursor-pointer h-full rounded-lg object-cover"
                  />
                </div>
                <div className="swiper-slide thumbs-slide ">
                  <img
                    src="https://pagedone.io/asset/uploads/1720778737.png"
                    alt="Gallery image"
                    className="gallery-image w-full cursor-pointer h-full rounded-lg object-cover"
                  />
                </div>
                <div className="swiper-slide thumbs-slide ">
                  <img
                    src="https://pagedone.io/asset/uploads/1720778748.png"
                    alt="Gallery image"
                    className="gallery-image w-full cursor-pointer h-full rounded-lg object-cover"
                  />
                </div>
                <div className="swiper-slide thumbs-slide ">
                  <img
                    src="https://pagedone.io/asset/uploads/1720778759.png"
                    alt="Gallery image"
                    className="gallery-image w-full cursor-pointer h-full rounded-lg object-cover"
                  />
                </div>
              </div>
              <button
                id="slider-button-right"
                className="swiper-button-next lg:flex hidden items-center justify-center group ml-8 xl:right-[26%] right-[22%]"
              >
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="box w-full gallery">
            <div className="swiper main-slide-carousel swiper-container relative">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="w-full p-5 bg-white rounded-3xl border border-gray-200 justify-start items-center gap-6 flex md:flex-row flex-col">
                    <img
                      className="w-[200px] h-[200px] rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1721803465.png"
                    />
                    <div className="flex-col justify-start md:items-start items-center gap-6 inline-flex">
                      <div className="flex-col justify-start md:items-start items-center gap-3 flex">
                        <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9 md:text-start text-center">
                          “ Enhanced Learning Experience ”
                        </h3>
                        <p className="text-gray-500 text-base font-normal leading-relaxed md:text-start text-center">
                          The innovative approach has revolutionized our study
                          methods. Their AI-powered tools have saved us
                          countless hours and allowed us to grasp complex
                          concepts more effectively. We've seen a remarkable
                          improvement in our overall academic performance.
                        </p>
                      </div>
                      <div className="w-full justify-between items-center flex md:flex-row flex-col md:gap-0 gap-4">
                        <h6 className="text-black text-base font-medium leading-relaxed md:text-start text-center">
                          William Foster
                        </h6>
                        <div className="h-5 justify-end items-center gap-3 flex">
                          <a className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-neutral-100 rounded-full">
                            {/* SVG removed */}
                          </a>
                          <a className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-neutral-100 rounded-full">
                            {/* SVG removed */}
                          </a>
                          <a className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-neutral-100 rounded-full">
                            {/* SVG removed */}
                          </a>
                          <a className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-neutral-100 rounded-full">
                            {/* SVG removed */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="w-full p-5 bg-white rounded-3xl border border-gray-200 justify-start items-center gap-6 flex md:flex-row flex-col">
                    <img
                      className="w-[200px] h-[200px] rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1721803480.png"
                    />
                    <div className="flex-col justify-start md:items-start items-center gap-6 inline-flex">
                      <div className="flex-col justify-start md:items-start items-center gap-3 flex">
                        <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9 md:text-start text-center">
                          “ Enhanced Learning Experience ”
                        </h3>
                        <p className="text-gray-500 text-base font-normal leading-relaxed md:text-start text-center">
                          The innovative approach has revolutionized our study
                          methods. Their AI-powered tools have saved us
                          countless hours and allowed us to grasp complex
                          concepts more effectively. We've seen a remarkable
                          improvement in our overall academic performance.
                        </p>
                      </div>
                      <div className="w-full justify-between items-center flex md:flex-row flex-col md:gap-0 gap-4">
                        <h6 className="text-black text-base font-medium leading-relaxed md:text-start text-center">
                          James Miller
                        </h6>
                        <div className="h-5 justify-end items-center gap-3 flex">
                          <a className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-neutral-100 rounded-full">
                            {/* SVG removed */}
                          </a>
                          <a className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-neutral-100 rounded-full">
                            {/* SVG removed */}
                          </a>
                          <a className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-neutral-100 rounded-full">
                            {/* SVG removed */}
                          </a>
                          <a className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-neutral-100 rounded-full">
                            {/* SVG removed */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="w-full p-5 bg-white rounded-3xl border border-gray-200 justify-start items-center gap-6 flex md:flex-row flex-col">
                    <img
                      className="w-[200px] h-[200px] rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1721803493.png"
                    />
                    <div className="flex-col justify-start md:items-start items-center gap-6 inline-flex">
                      <div className="flex-col justify-start md:items-start items-center gap-3 flex">
                        <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9 md:text-start text-center">
                          “ Enhanced Learning Experience ”
                        </h3>
                        <p className="text-gray-500 text-base font-normal leading-relaxed md:text-start text-center">
                          The innovative approach has revolutionized our study
                          methods. Their AI-powered tools have saved us
                          countless hours and allowed us to grasp complex
                          concepts more effectively. We've seen a remarkable
                          improvement in our overall academic performance.
                        </p>
                      </div>
                      <div className="w-full justify-between items-center flex md:flex-row flex-col md:gap-0 gap-4">
                        <h6 className="text-black text-base font-medium leading-relaxed md:text-start text-center">
                          Emmily Patel
                        </h6>
                        <div className="h-5 justify-end items-center gap-3 flex">
                          <a className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-neutral-100 rounded-full">
                            {/* SVG removed */}
                          </a>
                          <a className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-neutral-100 rounded-full">
                            {/* SVG removed */}
                          </a>
                          <a className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-neutral-100 rounded-full">
                            {/* SVG removed */}
                          </a>
                          <a className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-neutral-100 rounded-full">
                            {/* SVG removed */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="w-full p-5 bg-white rounded-3xl border border-gray-200 justify-start items-center gap-6 flex md:flex-row flex-col">
                    <img
                      className="w-[200px] h-[200px] rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1721803503.png"
                    />
                    <div className="flex-col justify-start md:items-start items-center gap-6 inline-flex">
                      <div className="flex-col justify-start md:items-start items-center gap-3 flex">
                        <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9 md:text-start text-center">
                          “ Enhanced Learning Experience ”
                        </h3>
                        <p className="text-gray-500 text-base font-normal leading-relaxed md:text-start text-center">
                          The innovative approach has revolutionized our study
                          methods. Their AI-powered tools have saved us
                          countless hours and allowed us to grasp complex
                          concepts more effectively. We've seen a remarkable
                          improvement in our overall academic performance.
                        </p>
                      </div>
                      <div className="w-full justify-between items-center flex md:flex-row flex-col md:gap-0 gap-4">
                        <h6 className="text-black text-base font-medium leading-relaxed md:text-start text-center">
                          Devon Lane
                        </h6>
                        <div className="h-5 justify-end items-center gap-3 flex">
                          <a className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-neutral-100 rounded-full">
                            {/* SVG removed */}
                          </a>
                          <a className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-neutral-100 rounded-full">
                            {/* SVG removed */}
                          </a>
                          <a className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-neutral-100 rounded-full">
                            {/* SVG removed */}
                          </a>
                          <a className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-neutral-100 rounded-full">
                            {/* SVG removed */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="w-full p-5 bg-white rounded-3xl border border-gray-200 justify-start items-center gap-6 flex md:flex-row flex-col">
                    <img
                      className="w-[200px] h-[200px] rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1721803515.png"
                    />
                    <div className="flex-col justify-start md:items-start items-center gap-6 inline-flex">
                      <div className="flex-col justify-start md:items-start items-center gap-3 flex">
                        <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9 md:text-start text-center">
                          “ Enhanced Learning Experience ”
                        </h3>
                        <p className="text-gray-500 text-base font-normal leading-relaxed md:text-start text-center">
                          The innovative approach has revolutionized our study
                          methods. Their AI-powered tools have saved us
                          countless hours and allowed us to grasp complex
                          concepts more effectively. We've seen a remarkable
                          improvement in our overall academic performance.
                        </p>
                      </div>
                      <div className="w-full justify-between items-center flex md:flex-row flex-col md:gap-0 gap-4">
                        <h6 className="text-black text-base font-medium leading-relaxed md:text-start text-center">
                          Yasmine Tano
                        </h6>
                        <div className="h-5 justify-end items-center gap-3 flex">
                          <a className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-neutral-100 rounded-full">
                            {/* SVG removed */}
                          </a>
                          <a className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-neutral-100 rounded-full">
                            {/* SVG removed */}
                          </a>
                          <a className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-neutral-100 rounded-full">
                            {/* SVG removed */}
                          </a>
                          <a className="w-6 h-6 flex items-center justify-center bg-transparent hover:bg-neutral-100 rounded-full">
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
  );
}
