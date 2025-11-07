export default function GallerySectionWithMasonaryLayout() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 lg:flex-row">
          <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-indigo-700 lg:w-[582px] lg:text-start">
            Exploring the Magnificence and Elegance of Our Gallery
          </h2>
          <p className="w-full text-center text-lg leading-8 font-normal text-gray-500 lg:w-[474px] lg:text-start">
            Prepare to be mesmerized as you embark on a journey through the
            magnificence and elegance of our gallery. Immerse yourself in a
            world where beauty.
          </p>
        </div>
        <div id="gallery">
          <div
            className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0"
            id="image-gallery"
          >
            <div className="flex flex-col gap-8">
              <div className="swiper-slide image h-[259px] rounded-2xl lg:h-[550px]">
                <div className="img-wrapper h-[259px] rounded-2xl lg:h-[550px]">
                  <a href="https://pagedone.io/asset/uploads/1714044783.png">
                    <img
                      alt="Gallery image"
                      src="https://pagedone.io/asset/uploads/1714044783.png"
                      className="img-responsive h-full w-full rounded-2xl object-cover"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="absolute bottom-0 left-0 flex h-full w-full items-center justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:bg-black/60 group-hover:opacity-100">
                      <div className="grid gap-3.5">
                        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white">
                          {/* SVG removed */}
                        </div>
                        <div className="inline-flex flex-col items-center justify-start gap-1.5">
                          <div className="font-manrope text-center text-3xl leading-snug font-semibold text-white">
                            Night Lamp
                          </div>
                          <div className="font-manrope text-center text-2xl leading-9 font-normal text-white">
                            $ 22.72
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide image h-[259px] rounded-2xl">
                <div className="img-wrapper h-[259px] rounded-2xl">
                  <a href="https://pagedone.io/asset/uploads/1714044839.png">
                    <img
                      alt="Gallery image"
                      src="https://pagedone.io/asset/uploads/1714044839.png"
                      className="img-responsive h-full w-full rounded-2xl object-cover"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="absolute bottom-0 left-0 flex h-full w-full items-center justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:bg-black/60 group-hover:opacity-100">
                      <div className="grid gap-3.5">
                        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white">
                          {/* SVG removed */}
                        </div>
                        <div className="inline-flex flex-col items-center justify-start gap-1.5">
                          <div className="font-manrope text-center text-3xl leading-snug font-semibold text-white">
                            Wall Clock
                          </div>
                          <div className="font-manrope text-center text-2xl leading-9 font-normal text-white">
                            $ 18.80
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-8">
              <div className="swiper-slide image h-[259px] rounded-2xl">
                <div className="img-wrapper h-[259px] rounded-2xl">
                  <a href="https://pagedone.io/asset/uploads/1714044859.png">
                    <img
                      alt="Gallery image"
                      src="https://pagedone.io/asset/uploads/1714044859.png"
                      className="img-responsive h-full w-full rounded-2xl object-cover"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="absolute bottom-0 left-0 flex h-full w-full items-center justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:bg-black/60 group-hover:opacity-100">
                      <div className="grid gap-3.5">
                        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white">
                          {/* SVG removed */}
                        </div>
                        <div className="inline-flex flex-col items-center justify-start gap-1.5">
                          <div className="font-manrope text-center text-3xl leading-snug font-semibold text-white">
                            Rocking Sofa
                          </div>
                          <div className="font-manrope text-center text-2xl leading-9 font-normal text-white">
                            $ 15.29
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="flex flex-col gap-8">
                  <div className="swiper-slide image h-[259px] rounded-2xl">
                    <div className="img-wrapper h-[259px] rounded-2xl">
                      <a href="https://pagedone.io/asset/uploads/1714044882.png">
                        <img
                          alt="Gallery image"
                          src="https://pagedone.io/asset/uploads/1714044882.png"
                          className="img-responsive h-full w-full rounded-2xl object-cover"
                        />
                      </a>
                      <div className="img-overlay rounded-2xl">
                        <div className="absolute bottom-0 left-0 flex h-full w-full items-center justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:bg-black/60 group-hover:opacity-100">
                          <div className="grid gap-3.5">
                            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white">
                              {/* SVG removed */}
                            </div>
                            <div className="inline-flex flex-col items-center justify-start gap-1.5">
                              <div className="font-manrope text-center text-3xl leading-snug font-semibold text-white">
                                Flower Pot
                              </div>
                              <div className="font-manrope text-center text-2xl leading-9 font-normal text-white">
                                $ 10.00
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide image h-[259px] rounded-2xl">
                    <div className="img-wrapper h-[259px] rounded-2xl">
                      <a href="https://pagedone.io/asset/uploads/1714044897.png">
                        <img
                          alt="Gallery image"
                          src="https://pagedone.io/asset/uploads/1714044897.png"
                          className="img-responsive h-full w-full rounded-2xl object-cover"
                        />
                      </a>
                      <div className="img-overlay rounded-2xl">
                        <div className="absolute bottom-0 left-0 flex h-full w-full items-center justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:bg-black/60 group-hover:opacity-100">
                          <div className="grid gap-3.5">
                            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white">
                              {/* SVG removed */}
                            </div>
                            <div className="inline-flex flex-col items-center justify-start gap-1.5">
                              <div className="font-manrope text-center text-3xl leading-snug font-semibold text-white">
                                Pot
                              </div>
                              <div className="font-manrope text-center text-2xl leading-9 font-normal text-white">
                                $ 12.50
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide image h-[259px] rounded-2xl lg:h-[550px]">
                  <div className="img-wrapper h-[259px] rounded-2xl lg:h-[550px]">
                    <a href="https://pagedone.io/asset/uploads/1714045085.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714045085.png"
                        className="img-responsive h-full w-full rounded-2xl object-cover"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 flex h-full w-full items-center justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:bg-black/60 group-hover:opacity-100">
                        <div className="grid gap-3.5">
                          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white">
                            {/* SVG removed */}
                          </div>
                          <div className="inline-flex flex-col items-center justify-start gap-1.5">
                            <div className="font-manrope text-center text-3xl leading-snug font-semibold text-white">
                              Rocking Chair
                            </div>
                            <div className="font-manrope text-center text-2xl leading-9 font-normal text-white">
                              $ 20.99
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
        </div>
        <div className="lightbox" id="lightbox">
          <span className="close" id="close">
            ×
          </span>
          <img src="" className="lightbox-image" id="lightbox-image" />
        </div>
      </div>
    </section>
  )
}
