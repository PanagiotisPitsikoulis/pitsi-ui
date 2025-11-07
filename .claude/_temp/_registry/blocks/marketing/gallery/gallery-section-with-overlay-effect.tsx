export default function GallerySectionWithOverlayEffect() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4">
          <div className="mx-auto w-fit h-fit px-3.5 py-1.5 bg-indigo-100 rounded-full justify-center items-center gap-1.5 flex">
            <span className="text-center text-indigo-600 text-xs font-medium leading-5">
              Gallery
            </span>
          </div>
          <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Our Photo Gallery
          </h2>
          <p className="w-full text-center text-gray-500 text-lg font-normal leading-8">
            Whether you seek inspiration for your next getaway or simply wish to
            relive cherished
          </p>
        </div>
        <div id="gallery">
          <div className="my-12" id="image-gallery">
            <div className="flex md:flex-row flex-col lg:gap-8 md:gap-5 gap-8">
              <div className="relative group image w-full">
                <div className="img-wrapper rounded-2xl xl:w-[768px] w-full h-[319px]">
                  <a href="https://pagedone.io/asset/uploads/1714030513.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1714030513.png"
                      alt="Gallery image"
                      className="img-responsive xl:w-[768px] w-full h-full object-cover rounded-2xl"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="absolute bottom-0 mx-5 md:my-5 my-2 py-2.5 px-5 rounded-lg bg-black/50 z-10 w-full opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <div className="flex flex-row items-center justify-between mb-3 gap-2">
                        <h6 className="text-xl font-medium leading-8 text-white">
                          Minimalist Family House
                        </h6>
                        <h6 className="text-xl font-medium leading-8 text-white">
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
              <div className="relative group image w-full">
                <div className="img-wrapper rounded-2xl xl:w-[416px] w-full h-[319px]">
                  <a href="https://pagedone.io/asset/uploads/1714030527.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1714030527.png"
                      alt="Gallery image"
                      className="img-responsive xl:w-[416px] w-full h-full object-cover rounded-2xl"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="absolute bottom-0 mx-5 md:my-5 my-2 py-2.5 px-5 rounded-lg bg-black/50  z-10 w-full opacity-0 transition-all duration-500 group-hover:opacity-100 cursor-pointer">
                      <div className="flex items-center justify-between mb-3 gap-5">
                        <h6 className="text-xl font-medium leading-8 text-white">
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
            <div className="flex md:flex-row flex-col lg:gap-8 md:gap-5 gap-8 lg:my-8 md:my-5 my-8">
              <div className="relative group image w-full">
                <div className="img-wrapper rounded-2xl xl:w-[592px] w-full h-[319px]">
                  <a href="https://pagedone.io/asset/uploads/1714030541.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1714030541.png"
                      alt="Gallery image"
                      className="img-responsive xl:w-[592px] w-full h-full object-cover rounded-2xl"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="absolute bottom-0 mx-5 md:my-5 my-2 py-2.5 px-5 rounded-lg bg-black/50  z-10 w-full opacity-0 transition-all duration-500 group-hover:opacity-100 cursor-pointer">
                      <div className="flex items-center justify-between mb-3 gap-5">
                        <h6 className="text-xl font-medium leading-8 text-white">
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
              <div className="relative group image w-full">
                <div className="img-wrapper rounded-2xl xl:w-[592px] w-full h-[319px]">
                  <a href="https://pagedone.io/asset/uploads/1714030555.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1714030555.png"
                      alt="Gallery image"
                      className="img-responsive xl:w-[592px] w-full h-full object-cover rounded-2xl"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="absolute bottom-0 mx-5 md:my-5 my-2 py-2.5 px-5 rounded-lg bg-black/50  z-10 w-full opacity-0 transition-all duration-500 group-hover:opacity-100 cursor-pointer">
                      <div className="flex items-center justify-between mb-3 gap-5">
                        <h6 className="text-xl font-medium leading-8 text-white">
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
            <div className="flex md:flex-row flex-col lg:gap-8 md:gap-5 gap-8">
              <div className="relative group image w-full">
                <div className="img-wrapper rounded-2xl xl:w-[728px] w-full h-[319px]">
                  <a href="https://pagedone.io/asset/uploads/1714030894.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1714030894.png"
                      alt="Gallery image"
                      className="img-responsive xl:w-[728px] w-full h-full object-cover rounded-2xl"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="absolute bottom-0 mx-5 md:my-5 my-2 py-2.5 px-5 rounded-lg bg-black/50  z-10 w-full opacity-0 transition-all duration-500 group-hover:opacity-100 cursor-pointer">
                      <div className="flex items-center justify-between mb-3 gap-5">
                        <h6 className="text-xl font-medium leading-8 text-white">
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
              <div className="relative group image w-full">
                <div className="img-wrapper rounded-2xl xl:w-[456px] w-full h-[319px]">
                  <a href="https://pagedone.io/asset/uploads/1714030567.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1714030567.png"
                      alt="Gallery image"
                      className="img-responsive xl:w-[456px] w-full h-full object-cover rounded-2xl"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="absolute bottom-0 mx-5 md:my-5 my-2 py-2.5 px-5 rounded-lg bg-black/50  z-10 w-full opacity-0 transition-all duration-500 group-hover:opacity-100 cursor-pointer">
                      <div className="flex items-center justify-between mb-3 gap-5">
                        <h6 className="text-xl font-medium leading-8 text-white">
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
          <button className="mx-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-800 transition-all ease-in-out duration-700 rounded-full shadow justify-center items-center flex">
            <span className="px-2 text-white text-lg font-semibold leading-8">
              View More
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
