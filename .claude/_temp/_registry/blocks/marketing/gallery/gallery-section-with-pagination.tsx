export default function GallerySectionWithPagination() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="xl:pb-16 lg:pb-14 pb-10 flex md:flex-row flex-col items-center justify-between gap-4">
          <div className="grid gap-2.5">
            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal md:text-start text-center">
              Our Gallery
            </h2>
            <p className="text-gray-600 text-lg font-normal leading-8 md:text-start text-center">
              Discover the essence of history in our curated collection of
              historical places.
            </p>
          </div>
          <div className="flex items-center">
            <button
              id="slider-button-left"
              className="w-5 h-5 swiper-button-prev top-3 md:mr-12 mr-6 z-50 relative group gap-3flex items-center justify-center transition-all duration-700 ease-in-out"
            >
              {/* SVG removed */}
            </button>
            <div className="swiper-pagination" />
            <button
              id="slider-button-right"
              className="w-5 h-5 swiper-button-next top-3 md:ml-12 ml-6 flex items-center justify-center transition-all duration-700 ease-in-out"
            >
              {/* SVG removed */}
            </button>
          </div>
        </div>
        <div className="flex flex-col-reverse md:grid grid-cols-12 gap-8 mx-auto">
          <div className="col-span-12 lg:col-span-12">
            <div className="slider-box flex flex-col lg:flex-row gap-10">
              <div className="box xl:w-[627px] lg:w-[600px] w-full">
                <div className="swiper main-slide-carousel swiper-container relative gallery">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="block relative xl:w-[627px] lg:w-[600px] w-full h-[627px] rounded-3xl">
                        <img
                          src="https://pagedone.io/asset/uploads/1713951938.png"
                          alt="Golden Temple image"
                          className="mx-auto relative gallery-image w-full h-full rounded-3xl object-cover"
                        />
                        <div className="absolute bottom-0 bg-white/10 backdrop-blur-[6px] w-full py-2 rounded-bl-3xl rounded-br-3xl justify-center items-center gap-2.5 flex">
                          <span className="text-center text-gray-900 text-base font-semibold leading-relaxed">
                            Golden Temple
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="block relative xl:w-[627px] lg:w-[600px] w-full h-[627px] rounded-3xl">
                        <img
                          src="https://pagedone.io/asset/uploads/1713951959.png"
                          alt="Hampi Temple image"
                          className="mx-auto relative gallery-image w-full h-full rounded-3xl object-cover"
                        />
                        <div className="absolute bottom-0 bg-white/10 backdrop-blur-[6px] w-full py-2 rounded-bl-3xl rounded-br-3xl justify-center items-center gap-2.5 flex">
                          <span className="text-center text-gray-900 text-base font-semibold leading-relaxed">
                            Hampi Temple
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="block relative xl:w-[627px] lg:w-[600px] w-full h-[627px] rounded-3xl">
                        <img
                          src="https://pagedone.io/asset/uploads/1713951981.png"
                          alt="Gwalior Fort image"
                          className="mx-auto relative gallery-image w-full h-full rounded-3xl object-cover"
                        />
                        <div className="absolute bottom-0 bg-white/10 backdrop-blur-[6px] w-full py-2 rounded-bl-3xl rounded-br-3xl justify-center items-center gap-2.5 flex">
                          <span className="text-center text-gray-900 text-base font-semibold leading-relaxed">
                            Gwalior Fort
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="block relative xl:w-[627px] lg:w-[600px] w-full h-[627px] rounded-3xl">
                        <img
                          src="https://pagedone.io/asset/uploads/1713952002.png"
                          alt="Mahabodhi Temple image"
                          className="mx-auto relative gallery-image w-full h-full rounded-3xl object-cover"
                        />
                        <div className="absolute bottom-0 bg-white/10 backdrop-blur-[6px] w-full py-2 rounded-bl-3xl rounded-br-3xl justify-center items-center gap-2.5 flex">
                          <span className="text-center text-gray-900 text-base font-semibold leading-relaxed">
                            Mahabodhi Temple
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="block relative xl:w-[627px] lg:w-[600px] w-full h-[627px] rounded-3xl">
                        <img
                          src="https://pagedone.io/asset/uploads/1713952018.png"
                          alt="Mahabodhi Temple image"
                          className="mx-auto relative gallery-image w-full h-full rounded-3xl object-cover"
                        />
                        <div className="absolute bottom-0 bg-white/10 backdrop-blur-[6px] w-full py-2 rounded-bl-3xl rounded-br-3xl justify-center items-center gap-2.5 flex">
                          <span className="text-center text-gray-900 text-base font-semibold leading-relaxed">
                            Mahabodhi Temple
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:w-[549px] w-full">
                <div className="nav-for-slider h-full">
                  <div className="swiper-wrapper justify-center xl:gap-9 lg:gap-7 gap-5 grid lg:grid-cols-2 grid-cols-4 h-full">
                    <div className="swiper-slide thumbs-slide lg:!h-[295px] md:h-[200px] h-[150px] max-w-full w-full relative hidden">
                      <img
                        src="https://pagedone.io/asset/uploads/1713951938.png"
                        alt="Golden Temple image"
                        className="w-full relative max-w-full cursor-pointer h-full rounded-2xl transition-all duration-500 hover:border-indigo-600 object-cover"
                      />
                      <div className="absolute bottom-0 bg-white/10 backdrop-blur-[6px] w-full sm:py-2 py-0.5 md:px-3 px-1 rounded-bl-3xl rounded-br-3xl justify-center items-center gap-2.5 flex">
                        <span className="text-center text-gray-900 text-base font-semibold leading-snug">
                          Golden Temple
                        </span>
                      </div>
                    </div>
                    <div className="swiper-slide thumbs-slide lg:!h-[295px] md:h-[200px] h-[150px] max-w-full w-full relative">
                      <img
                        src="https://pagedone.io/asset/uploads/1713951959.png"
                        alt="Golden Temple image"
                        className="w-full relative max-w-full cursor-pointer h-full rounded-2xl transition-all duration-500 hover:border-indigo-600 object-cover"
                      />
                      <div className="absolute bottom-0 bg-white/10 backdrop-blur-[6px] w-full sm:py-2 py-0.5 md:px-3 px-1 rounded-bl-3xl rounded-br-3xl justify-center items-center gap-2.5 flex">
                        <span className="text-center text-gray-900 text-base font-semibold leading-snug">
                          Golden Temple
                        </span>
                      </div>
                    </div>
                    <div className="swiper-slide thumbs-slide lg:!h-[295px] md:h-[200px] h-[150px] max-w-full w-full relative">
                      <img
                        src="https://pagedone.io/asset/uploads/1713951981.png"
                        alt="Hampi Temple image"
                        className="w-full relative max-w-full cursor-pointer h-full rounded-2xl transition-all duration-500 hover:border-indigo-600 object-cover"
                      />
                      <div className="absolute bottom-0 bg-white/10 backdrop-blur-[6px] w-full sm:py-2 py-0.5 md:px-3 px-1 rounded-bl-3xl rounded-br-3xl justify-center items-center gap-2.5 flex">
                        <span className="text-center text-gray-900 text-base font-semibold leading-snug">
                          Hampi Temple
                        </span>
                      </div>
                    </div>
                    <div className="swiper-slide thumbs-slide lg:!h-[295px] md:h-[200px] h-[150px] max-w-full w-full relative">
                      <img
                        src="https://pagedone.io/asset/uploads/1713952002.png"
                        alt="Gwalior Fort image"
                        className="w-full relative max-w-full cursor-pointer h-full rounded-2xl transition-all duration-500 hover:border-indigo-600 object-cover"
                      />
                      <div className="absolute bottom-0 bg-white/10 backdrop-blur-[6px] w-full sm:py-2 py-0.5 md:px-3 px-1 rounded-bl-3xl rounded-br-3xl justify-center items-center gap-2.5 flex">
                        <span className="text-center text-gray-900 text-base font-semibold leading-snug">
                          Gwalior Fort
                        </span>
                      </div>
                    </div>
                    <div className="swiper-slide max-w-full thumbs-slide lg:!h-[295px] md:h-[200px] h-[150px] w-full relative">
                      <img
                        src="https://pagedone.io/asset/uploads/1713952018.png"
                        alt="Mahabodhi Temple image"
                        className="w-full max-w-full relative cursor-pointer h-full rounded-2xl transition-all duration-500 hover:border-indigo-600 object-cover"
                      />
                      <div className="absolute bottom-0 bg-white/10 backdrop-blur-[6px] w-full sm:py-2 py-0.5 md:px-3 px-1 rounded-bl-3xl rounded-br-3xl justify-center items-center gap-2.5 flex">
                        <span className="text-center text-black text-sm font-semibold leading-snug">
                          Mahabodhi Temple
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lightbox" id="lightbox">
        <span className="close" id="close">
          ×
        </span>
        <img className="lightbox-image" id="lightbox-image" />
      </div>
    </section>
  );
}
