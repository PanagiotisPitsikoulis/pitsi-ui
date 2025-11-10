export default function GallerySectionWithPagination() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 pb-10 md:flex-row lg:pb-14 xl:pb-16">
          <div className="grid gap-2.5">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 md:text-start">
              Our Gallery
            </h2>
            <p className="text-center text-lg leading-8 font-normal text-gray-600 md:text-start">
              Discover the essence of history in our curated collection of
              historical places.
            </p>
          </div>
          <div className="flex items-center">
            <button
              id="slider-button-left"
              className="swiper-button-prev group gap-3flex relative top-3 z-50 mr-6 h-5 w-5 items-center justify-center transition-all duration-700 ease-in-out md:mr-12"
            >
              {/* SVG removed */}
            </button>
            <div className="swiper-pagination" />
            <button
              id="slider-button-right"
              className="swiper-button-next top-3 ml-6 flex h-5 w-5 items-center justify-center transition-all duration-700 ease-in-out md:ml-12"
            >
              {/* SVG removed */}
            </button>
          </div>
        </div>
        <div className="mx-auto flex grid-cols-12 flex-col-reverse gap-8 md:grid">
          <div className="col-span-12 lg:col-span-12">
            <div className="slider-box flex flex-col gap-10 lg:flex-row">
              <div className="box w-full lg:w-[600px] xl:w-[627px]">
                <div className="swiper main-slide-carousel swiper-container gallery relative">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="relative block h-[627px] w-full rounded-3xl lg:w-[600px] xl:w-[627px]">
                        <img
                          src="https://pagedone.io/asset/uploads/1713951938.png"
                          alt="Golden Temple image"
                          className="gallery-image relative mx-auto h-full w-full rounded-3xl object-cover"
                        />
                        <div className="absolute bottom-0 flex w-full items-center justify-center gap-2.5 rounded-br-3xl rounded-bl-3xl bg-white/10 py-2 backdrop-blur-[6px]">
                          <span className="text-center text-base leading-relaxed font-semibold text-gray-900">
                            Golden Temple
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="relative block h-[627px] w-full rounded-3xl lg:w-[600px] xl:w-[627px]">
                        <img
                          src="https://pagedone.io/asset/uploads/1713951959.png"
                          alt="Hampi Temple image"
                          className="gallery-image relative mx-auto h-full w-full rounded-3xl object-cover"
                        />
                        <div className="absolute bottom-0 flex w-full items-center justify-center gap-2.5 rounded-br-3xl rounded-bl-3xl bg-white/10 py-2 backdrop-blur-[6px]">
                          <span className="text-center text-base leading-relaxed font-semibold text-gray-900">
                            Hampi Temple
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="relative block h-[627px] w-full rounded-3xl lg:w-[600px] xl:w-[627px]">
                        <img
                          src="https://pagedone.io/asset/uploads/1713951981.png"
                          alt="Gwalior Fort image"
                          className="gallery-image relative mx-auto h-full w-full rounded-3xl object-cover"
                        />
                        <div className="absolute bottom-0 flex w-full items-center justify-center gap-2.5 rounded-br-3xl rounded-bl-3xl bg-white/10 py-2 backdrop-blur-[6px]">
                          <span className="text-center text-base leading-relaxed font-semibold text-gray-900">
                            Gwalior Fort
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="relative block h-[627px] w-full rounded-3xl lg:w-[600px] xl:w-[627px]">
                        <img
                          src="https://pagedone.io/asset/uploads/1713952002.png"
                          alt="Mahabodhi Temple image"
                          className="gallery-image relative mx-auto h-full w-full rounded-3xl object-cover"
                        />
                        <div className="absolute bottom-0 flex w-full items-center justify-center gap-2.5 rounded-br-3xl rounded-bl-3xl bg-white/10 py-2 backdrop-blur-[6px]">
                          <span className="text-center text-base leading-relaxed font-semibold text-gray-900">
                            Mahabodhi Temple
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="relative block h-[627px] w-full rounded-3xl lg:w-[600px] xl:w-[627px]">
                        <img
                          src="https://pagedone.io/asset/uploads/1713952018.png"
                          alt="Mahabodhi Temple image"
                          className="gallery-image relative mx-auto h-full w-full rounded-3xl object-cover"
                        />
                        <div className="absolute bottom-0 flex w-full items-center justify-center gap-2.5 rounded-br-3xl rounded-bl-3xl bg-white/10 py-2 backdrop-blur-[6px]">
                          <span className="text-center text-base leading-relaxed font-semibold text-gray-900">
                            Mahabodhi Temple
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-[549px]">
                <div className="nav-for-slider h-full">
                  <div className="swiper-wrapper grid h-full grid-cols-4 justify-center gap-5 lg:grid-cols-2 lg:gap-7 xl:gap-9">
                    <div className="swiper-slide thumbs-slide relative hidden h-[150px] w-full max-w-full md:h-[200px] lg:!h-[295px]">
                      <img
                        src="https://pagedone.io/asset/uploads/1713951938.png"
                        alt="Golden Temple image"
                        className="relative h-full w-full max-w-full cursor-pointer rounded-2xl object-cover transition-all duration-500 hover:border-indigo-600"
                      />
                      <div className="absolute bottom-0 flex w-full items-center justify-center gap-2.5 rounded-br-3xl rounded-bl-3xl bg-white/10 px-1 py-0.5 backdrop-blur-[6px] sm:py-2 md:px-3">
                        <span className="text-center text-base leading-snug font-semibold text-gray-900">
                          Golden Temple
                        </span>
                      </div>
                    </div>
                    <div className="swiper-slide thumbs-slide relative h-[150px] w-full max-w-full md:h-[200px] lg:!h-[295px]">
                      <img
                        src="https://pagedone.io/asset/uploads/1713951959.png"
                        alt="Golden Temple image"
                        className="relative h-full w-full max-w-full cursor-pointer rounded-2xl object-cover transition-all duration-500 hover:border-indigo-600"
                      />
                      <div className="absolute bottom-0 flex w-full items-center justify-center gap-2.5 rounded-br-3xl rounded-bl-3xl bg-white/10 px-1 py-0.5 backdrop-blur-[6px] sm:py-2 md:px-3">
                        <span className="text-center text-base leading-snug font-semibold text-gray-900">
                          Golden Temple
                        </span>
                      </div>
                    </div>
                    <div className="swiper-slide thumbs-slide relative h-[150px] w-full max-w-full md:h-[200px] lg:!h-[295px]">
                      <img
                        src="https://pagedone.io/asset/uploads/1713951981.png"
                        alt="Hampi Temple image"
                        className="relative h-full w-full max-w-full cursor-pointer rounded-2xl object-cover transition-all duration-500 hover:border-indigo-600"
                      />
                      <div className="absolute bottom-0 flex w-full items-center justify-center gap-2.5 rounded-br-3xl rounded-bl-3xl bg-white/10 px-1 py-0.5 backdrop-blur-[6px] sm:py-2 md:px-3">
                        <span className="text-center text-base leading-snug font-semibold text-gray-900">
                          Hampi Temple
                        </span>
                      </div>
                    </div>
                    <div className="swiper-slide thumbs-slide relative h-[150px] w-full max-w-full md:h-[200px] lg:!h-[295px]">
                      <img
                        src="https://pagedone.io/asset/uploads/1713952002.png"
                        alt="Gwalior Fort image"
                        className="relative h-full w-full max-w-full cursor-pointer rounded-2xl object-cover transition-all duration-500 hover:border-indigo-600"
                      />
                      <div className="absolute bottom-0 flex w-full items-center justify-center gap-2.5 rounded-br-3xl rounded-bl-3xl bg-white/10 px-1 py-0.5 backdrop-blur-[6px] sm:py-2 md:px-3">
                        <span className="text-center text-base leading-snug font-semibold text-gray-900">
                          Gwalior Fort
                        </span>
                      </div>
                    </div>
                    <div className="swiper-slide thumbs-slide relative h-[150px] w-full max-w-full md:h-[200px] lg:!h-[295px]">
                      <img
                        src="https://pagedone.io/asset/uploads/1713952018.png"
                        alt="Mahabodhi Temple image"
                        className="relative h-full w-full max-w-full cursor-pointer rounded-2xl object-cover transition-all duration-500 hover:border-indigo-600"
                      />
                      <div className="absolute bottom-0 flex w-full items-center justify-center gap-2.5 rounded-br-3xl rounded-bl-3xl bg-white/10 px-1 py-0.5 backdrop-blur-[6px] sm:py-2 md:px-3">
                        <span className="text-center text-sm leading-snug font-semibold text-black">
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
  )
}
