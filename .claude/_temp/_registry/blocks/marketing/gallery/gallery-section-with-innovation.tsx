export default function GallerySectionWithInnovation() {
  return (
    <div>
      <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-2.5">
            <span className="w-full text-center text-gray-600 text-sm font-medium leading-snug">
              Intelligence Today
            </span>
            <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              AI Innovation
            </h2>
          </div>
          <div id="gallery">
            <div
              className="lg:my-16 my-10 grid lg:grid-cols-3 items-center justify-center gap-8"
              id="image-gallery"
            >
              <div className="swiper-slide image h-[456px] rounded-2xl">
                <div className="img-wrapper rounded-t-full h-[456px]">
                  <a href="https://pagedone.io/asset/uploads/1714127595.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1714127595.png"
                      alt="Gallery image"
                      className="img-responsive w-full h-full object-cover rounded-t-full"
                    />
                  </a>
                  <div className="img-overlay rounded-t-full">
                    <div className="absolute bottom-0 hover:bg-black/40 w-full h-full group-hover:w-full group-hover:h-full rounded-t-full group-hover:rounded-t-full transition-all duration-700 ease-in-out">
                      <div className="absolute bottom-0 p-4">
                        <h4 className="text-white text-2xl font-bold font-manrope leading-9">
                          Robotic process automation (RPA)
                        </h4>
                        <p className="text-white text-lg font-normal leading-8">
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
                <div className="img-wrapper rounded-t-full h-[456px]">
                  <a href="https://pagedone.io/asset/uploads/1714127606.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1714127606.png"
                      alt="Gallery image"
                      className="img-responsive w-full h-full object-cover rounded-t-full"
                    />
                  </a>
                  <div className="img-overlay rounded-t-full">
                    <div className="absolute bottom-0 hover:bg-black/40 w-full h-full group-hover:w-full group-hover:h-full rounded-t-full group-hover:rounded-t-full transition-all duration-700 ease-in-out">
                      <div className="absolute bottom-0 p-4">
                        <h4 className="text-white text-2xl font-bold font-manrope leading-9">
                          Robotic process automation (RPA)
                        </h4>
                        <p className="text-white text-lg font-normal leading-8">
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
                <div className="img-wrapper rounded-t-full h-[456px]">
                  <a href="https://pagedone.io/asset/uploads/1714127616.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1714127616.png"
                      alt="Gallery image"
                      className="img-responsive w-full h-full object-cover rounded-t-full"
                    />
                  </a>
                  <div className="img-overlay rounded-t-full">
                    <div className="absolute bottom-0 hover:bg-black/40 w-full h-full group-hover:w-full group-hover:h-full rounded-t-full group-hover:rounded-t-full transition-all duration-700 ease-in-out">
                      <div className="absolute bottom-0 p-4">
                        <h4 className="text-white text-2xl font-bold font-manrope leading-9">
                          Robotic process automation (RPA)
                        </h4>
                        <p className="text-white text-lg font-normal leading-8">
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
            <div className="lg:w-full w-[384px] mx-auto justify-between items-center flex lg:flex-row flex-col gap-4 lg:mx-0">
              <p className="lg:w-full text-gray-600 text-lg font-normal leading-8 lg:text-start text-center">
                Delve into Our Expansive Repository of Groundbreaking AI
                Projects, Pioneering the Future of Technology.
              </p>
              <a className="lg:w-full group justify-end items-center gap-2 flex">
                <span className="group-hover:text-gray-900 text-gray-400 transition-all duration-700 ease-in-out text-lg font-normal leading-8">
                  Scroll to Explore
                </span>
                {/* SVG removed */}
              </a>
            </div>
            <a className="lg:w-full group justify-end items-center gap-2 flex"></a>
          </div>
          <a className="lg:w-full group justify-end items-center gap-2 flex"></a>
        </div>
        <a className="lg:w-full group justify-end items-center gap-2 flex"></a>
      </section>
      <a className="lg:w-full group justify-end items-center gap-2 flex">
        {/* Initialize Swiper */}
      </a>
    </div>
  );
}
