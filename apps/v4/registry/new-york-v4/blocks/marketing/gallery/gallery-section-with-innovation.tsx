export default function GallerySectionWithInnovation() {
  return (
    <div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-2.5">
            <span className="w-full text-center text-sm leading-snug font-medium text-gray-600">
              Intelligence Today
            </span>
            <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-gray-900">
              AI Innovation
            </h2>
          </div>
          <div id="gallery">
            <div
              className="my-10 grid items-center justify-center gap-8 lg:my-16 lg:grid-cols-3"
              id="image-gallery"
            >
              <div className="swiper-slide image h-[456px] rounded-2xl">
                <div className="img-wrapper h-[456px] rounded-t-full">
                  <a href="https://pagedone.io/asset/uploads/1714127595.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1714127595.png"
                      alt="Gallery image"
                      className="img-responsive h-full w-full rounded-t-full object-cover"
                    />
                  </a>
                  <div className="img-overlay rounded-t-full">
                    <div className="absolute bottom-0 h-full w-full rounded-t-full transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-t-full hover:bg-black/40">
                      <div className="absolute bottom-0 p-4">
                        <h4 className="font-manrope text-2xl leading-9 font-bold text-white">
                          Robotic process automation (RPA)
                        </h4>
                        <p className="text-lg leading-8 font-normal text-white">
                          At its essence, RPA is the simplest form of automation
                          software. It performs human tasks that are manual,
                          repetitive, or rule-based. Nothing more; nothing less.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide image h-[456px] rounded-2xl">
                <div className="img-wrapper h-[456px] rounded-t-full">
                  <a href="https://pagedone.io/asset/uploads/1714127606.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1714127606.png"
                      alt="Gallery image"
                      className="img-responsive h-full w-full rounded-t-full object-cover"
                    />
                  </a>
                  <div className="img-overlay rounded-t-full">
                    <div className="absolute bottom-0 h-full w-full rounded-t-full transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-t-full hover:bg-black/40">
                      <div className="absolute bottom-0 p-4">
                        <h4 className="font-manrope text-2xl leading-9 font-bold text-white">
                          Robotic process automation (RPA)
                        </h4>
                        <p className="text-lg leading-8 font-normal text-white">
                          At its essence, RPA is the simplest form of automation
                          software. It performs human tasks that are manual,
                          repetitive, or rule-based. Nothing more; nothing less.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide image h-[456px] rounded-2xl">
                <div className="img-wrapper h-[456px] rounded-t-full">
                  <a href="https://pagedone.io/asset/uploads/1714127616.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1714127616.png"
                      alt="Gallery image"
                      className="img-responsive h-full w-full rounded-t-full object-cover"
                    />
                  </a>
                  <div className="img-overlay rounded-t-full">
                    <div className="absolute bottom-0 h-full w-full rounded-t-full transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-t-full hover:bg-black/40">
                      <div className="absolute bottom-0 p-4">
                        <h4 className="font-manrope text-2xl leading-9 font-bold text-white">
                          Robotic process automation (RPA)
                        </h4>
                        <p className="text-lg leading-8 font-normal text-white">
                          At its essence, RPA is the simplest form of automation
                          software. It performs human tasks that are manual,
                          repetitive, or rule-based. Nothing more; nothing less.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto flex w-[384px] flex-col items-center justify-between gap-4 lg:mx-0 lg:w-full lg:flex-row">
              <p className="text-center text-lg leading-8 font-normal text-gray-600 lg:w-full lg:text-start">
                Delve into Our Expansive Repository of Groundbreaking AI
                Projects, Pioneering the Future of Technology.
              </p>
              <a className="group flex items-center justify-end gap-2 lg:w-full">
                <span className="text-lg leading-8 font-normal text-gray-400 transition-all duration-700 ease-in-out group-hover:text-gray-900">
                  Scroll to Explore
                </span>
                {/* SVG removed */}
              </a>
            </div>
            <a className="group flex items-center justify-end gap-2 lg:w-full"></a>
          </div>
          <a className="group flex items-center justify-end gap-2 lg:w-full"></a>
        </div>
        <a className="group flex items-center justify-end gap-2 lg:w-full"></a>
      </section>
      <a className="group flex items-center justify-end gap-2 lg:w-full">
        {/* Initialize Swiper */}
      </a>
    </div>
  )
}
