export default function GallerySectionWithOverlayEffect() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4">
          <div className="mx-auto flex h-fit w-fit items-center justify-center gap-1.5 rounded-full bg-indigo-100 px-3.5 py-1.5">
            <span className="text-center text-xs leading-5 font-medium text-indigo-600">
              Gallery
            </span>
          </div>
          <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-gray-900">
            Our Photo Gallery
          </h2>
          <p className="w-full text-center text-lg leading-8 font-normal text-gray-500">
            Whether you seek inspiration for your next getaway or simply wish to
            relive cherished
          </p>
        </div>
        <div id="gallery">
          <div className="my-12" id="image-gallery">
            <div className="flex flex-col gap-8 md:flex-row md:gap-5 lg:gap-8">
              <div className="group image relative w-full">
                <div className="img-wrapper h-[319px] w-full rounded-2xl xl:w-[768px]">
                  <a href="https://pagedone.io/asset/uploads/1714030513.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1714030513.png"
                      alt="Gallery image"
                      className="img-responsive h-full w-full rounded-2xl object-cover xl:w-[768px]"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="absolute bottom-0 z-10 mx-5 my-2 w-full rounded-lg bg-black/50 px-5 py-2.5 opacity-0 transition-all duration-500 group-hover:opacity-100 md:my-5">
                      <div className="mb-3 flex flex-row items-center justify-between gap-2">
                        <h6 className="text-xl leading-8 font-medium text-white">
                          Minimalist Family House
                        </h6>
                        <h6 className="text-xl leading-8 font-medium text-white">
                          $ 22.50
                        </h6>
                      </div>
                      <div className="flex items-center gap-2">
                        {/* SVG removed */}
                        <p className="text-base font-normal text-white">
                          Sudirman Street, No.710, West Jakarta
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group image relative w-full">
                <div className="img-wrapper h-[319px] w-full rounded-2xl xl:w-[416px]">
                  <a href="https://pagedone.io/asset/uploads/1714030527.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1714030527.png"
                      alt="Gallery image"
                      className="img-responsive h-full w-full rounded-2xl object-cover xl:w-[416px]"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="absolute bottom-0 z-10 mx-5 my-2 w-full cursor-pointer rounded-lg bg-black/50 px-5 py-2.5 opacity-0 transition-all duration-500 group-hover:opacity-100 md:my-5">
                      <div className="mb-3 flex items-center justify-between gap-5">
                        <h6 className="text-xl leading-8 font-medium text-white">
                          view more
                        </h6>
                      </div>
                      <div className="flex items-center gap-2">
                        {/* SVG removed */}
                        <p className="text-base font-normal text-white">
                          Sudirman Street, West Jakarta
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-8 flex flex-col gap-8 md:my-5 md:flex-row md:gap-5 lg:my-8 lg:gap-8">
              <div className="group image relative w-full">
                <div className="img-wrapper h-[319px] w-full rounded-2xl xl:w-[592px]">
                  <a href="https://pagedone.io/asset/uploads/1714030541.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1714030541.png"
                      alt="Gallery image"
                      className="img-responsive h-full w-full rounded-2xl object-cover xl:w-[592px]"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="absolute bottom-0 z-10 mx-5 my-2 w-full cursor-pointer rounded-lg bg-black/50 px-5 py-2.5 opacity-0 transition-all duration-500 group-hover:opacity-100 md:my-5">
                      <div className="mb-3 flex items-center justify-between gap-5">
                        <h6 className="text-xl leading-8 font-medium text-white">
                          view more
                        </h6>
                      </div>
                      <div className="flex items-center gap-2">
                        {/* SVG removed */}
                        <p className="text-base font-normal text-white">
                          Sudirman Street, West Jakarta
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group image relative w-full">
                <div className="img-wrapper h-[319px] w-full rounded-2xl xl:w-[592px]">
                  <a href="https://pagedone.io/asset/uploads/1714030555.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1714030555.png"
                      alt="Gallery image"
                      className="img-responsive h-full w-full rounded-2xl object-cover xl:w-[592px]"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="absolute bottom-0 z-10 mx-5 my-2 w-full cursor-pointer rounded-lg bg-black/50 px-5 py-2.5 opacity-0 transition-all duration-500 group-hover:opacity-100 md:my-5">
                      <div className="mb-3 flex items-center justify-between gap-5">
                        <h6 className="text-xl leading-8 font-medium text-white">
                          view more
                        </h6>
                      </div>
                      <div className="flex items-center gap-2">
                        {/* SVG removed */}
                        <p className="text-base font-normal text-white">
                          Sudirman Street, West Jakarta
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 md:flex-row md:gap-5 lg:gap-8">
              <div className="group image relative w-full">
                <div className="img-wrapper h-[319px] w-full rounded-2xl xl:w-[728px]">
                  <a href="https://pagedone.io/asset/uploads/1714030894.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1714030894.png"
                      alt="Gallery image"
                      className="img-responsive h-full w-full rounded-2xl object-cover xl:w-[728px]"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="absolute bottom-0 z-10 mx-5 my-2 w-full cursor-pointer rounded-lg bg-black/50 px-5 py-2.5 opacity-0 transition-all duration-500 group-hover:opacity-100 md:my-5">
                      <div className="mb-3 flex items-center justify-between gap-5">
                        <h6 className="text-xl leading-8 font-medium text-white">
                          view more
                        </h6>
                      </div>
                      <div className="flex items-center gap-2">
                        {/* SVG removed */}
                        <p className="text-base font-normal text-white">
                          Sudirman Street, West Jakarta
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group image relative w-full">
                <div className="img-wrapper h-[319px] w-full rounded-2xl xl:w-[456px]">
                  <a href="https://pagedone.io/asset/uploads/1714030567.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1714030567.png"
                      alt="Gallery image"
                      className="img-responsive h-full w-full rounded-2xl object-cover xl:w-[456px]"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="absolute bottom-0 z-10 mx-5 my-2 w-full cursor-pointer rounded-lg bg-black/50 px-5 py-2.5 opacity-0 transition-all duration-500 group-hover:opacity-100 md:my-5">
                      <div className="mb-3 flex items-center justify-between gap-5">
                        <h6 className="text-xl leading-8 font-medium text-white">
                          view more
                        </h6>
                      </div>
                      <div className="flex items-center gap-2">
                        {/* SVG removed */}
                        <p className="text-base font-normal text-white">
                          Sudirman Street, West Jakarta
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="mx-auto flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800">
            <span className="px-2 text-lg leading-8 font-semibold text-white">
              View More
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
