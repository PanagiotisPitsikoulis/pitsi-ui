export default function GallerySectionWithGridAndOverlayEffect() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4">
          <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-indigo-600">
            Our Gallery
          </h2>
          <p className="w-full text-center text-base leading-relaxed font-normal text-gray-600">
            Our Gallery invites you to traverse a sanctuary of creativity and
            expression. Nestled within its walls lies a treasure trove of visual
            narratives
          </p>
        </div>
        <div
          className="my-12 grid grid-cols-1 gap-8 lg:grid-cols-3"
          id="gallery"
        >
          <div className="grid gap-8" id="image-gallery">
            <div className="swiper-slide image h-[300px] rounded-2xl lg:h-[220px]">
              <div className="img-wrapper h-[300px] rounded-2xl lg:h-[220px]">
                <a href="https://pagedone.io/asset/uploads/1714022523.png">
                  <img
                    src="https://pagedone.io/asset/uploads/1714022523.png"
                    alt="Gallery image"
                    className="img-responsive h-full w-full rounded-2xl object-cover"
                  />
                </a>
                <div className="img-overlay rounded-2xl">
                  <div className="absolute left-0 z-10 flex h-full w-full flex-col justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-gray-900/50">
                    <div className="absolute bottom-0 left-0 z-2 h-full w-full rounded-2xl transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:opacity-100">
                      <h6 className="absolute bottom-0 p-5 text-xl leading-loose font-medium text-white">
                        Interior Designer
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide image h-[300px] rounded-2xl lg:h-[418px]">
              <div className="img-wrapper h-[300px] rounded-2xl lg:h-[418px]">
                <a href="https://pagedone.io/asset/uploads/1714022539.png">
                  <img
                    src="https://pagedone.io/asset/uploads/1714022539.png"
                    alt="Gallery image"
                    className="img-responsive h-full w-full rounded-2xl object-cover"
                  />
                </a>
                <div className="img-overlay rounded-2xl">
                  <div className="absolute left-0 z-10 flex h-full w-full flex-col justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-gray-900/50">
                    <div className="absolute bottom-0 left-0 z-2 h-full w-full rounded-2xl transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:opacity-100">
                      <h6 className="absolute bottom-0 p-5 text-xl leading-loose font-medium text-white">
                        Architecture Designer
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-8">
            <div className="swiper-slide image h-[300px] rounded-2xl lg:h-[418px]">
              <div className="img-wrapper h-[300px] rounded-2xl lg:h-[418px]">
                <a href="https://pagedone.io/asset/uploads/1714022553.png">
                  <img
                    src="https://pagedone.io/asset/uploads/1714022553.png"
                    alt="Gallery image"
                    className="img-responsive h-full w-full rounded-2xl object-cover"
                  />
                </a>
                <div className="img-overlay rounded-2xl">
                  <div className="absolute left-0 z-10 flex h-full w-full flex-col justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-gray-900/50">
                    <div className="absolute bottom-0 left-0 z-2 h-full w-full rounded-2xl transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:opacity-100">
                      <h6 className="absolute bottom-0 p-5 text-xl leading-loose font-medium text-white">
                        Interior Designer
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide image h-[300px] rounded-2xl lg:h-[220px]">
              <div className="img-wrapper h-[300px] rounded-2xl lg:h-[220px]">
                <a href="https://pagedone.io/asset/uploads/1714022572.png">
                  <img
                    src="https://pagedone.io/asset/uploads/1714022572.png"
                    alt="Gallery image"
                    className="img-responsive h-full w-full rounded-2xl object-cover"
                  />
                </a>
                <div className="img-overlay rounded-2xl">
                  <div className="absolute left-0 z-10 flex h-full w-full flex-col justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-gray-900/50">
                    <div className="absolute bottom-0 left-0 z-2 h-full w-full rounded-2xl transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:opacity-100">
                      <h6 className="absolute bottom-0 p-5 text-xl leading-loose font-medium text-white">
                        Architecture Designer
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-8">
            <div className="swiper-slide image h-[300px] rounded-2xl lg:h-[291px]">
              <div className="img-wrapper h-[300px] rounded-2xl lg:h-[291px]">
                <a href="https://pagedone.io/asset/uploads/1714022594.png">
                  <img
                    src="https://pagedone.io/asset/uploads/1714022594.png"
                    alt="Gallery image"
                    className="img-responsive h-full w-full rounded-2xl object-cover"
                  />
                </a>
                <div className="img-overlay rounded-2xl">
                  <div className="absolute left-0 z-10 flex h-full w-full flex-col justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-gray-900/50">
                    <div className="absolute bottom-0 left-0 z-2 h-full w-full rounded-2xl transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:opacity-100">
                      <h6 className="absolute bottom-0 p-5 text-xl leading-loose font-medium text-white">
                        Interior Designer
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide image h-[300px] rounded-2xl lg:h-[347px]">
              <div className="img-wrapper h-[300px] rounded-2xl lg:h-[347px]">
                <a href="https://pagedone.io/asset/uploads/1714022609.png">
                  <img
                    src="https://pagedone.io/asset/uploads/1714022609.png"
                    alt="Gallery image"
                    className="img-responsive h-full w-full rounded-2xl object-cover"
                  />
                </a>
                <div className="img-overlay rounded-2xl">
                  <div className="absolute left-0 z-10 flex h-full w-full flex-col justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-gray-900/50">
                    <div className="absolute bottom-0 left-0 z-2 h-full w-full rounded-2xl transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:opacity-100">
                      <h6 className="absolute bottom-0 p-5 text-xl leading-loose font-medium text-white">
                        Architecture Designer
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="group flex w-full items-center justify-center rounded-xl bg-indigo-100 px-6 py-3 shadow transition-all duration-700 ease-in-out hover:bg-indigo-600">
          <span className="px-2 text-lg leading-8 font-semibold text-indigo-700 transition-all duration-700 ease-in-out group-hover:text-white">
            Load More
          </span>
        </button>
      </div>
    </section>
  )
}
