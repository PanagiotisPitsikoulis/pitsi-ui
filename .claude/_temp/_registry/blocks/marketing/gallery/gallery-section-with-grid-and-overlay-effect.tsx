export default function GallerySectionWithGridAndOverlayEffect() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4">
          <h2 className="w-full text-center text-indigo-600 text-4xl font-bold font-manrope leading-normal">
            Our Gallery
          </h2>
          <p className="w-full text-center text-gray-600 text-base font-normal leading-relaxed">
            Our Gallery invites you to traverse a sanctuary of creativity and
            expression. Nestled within its walls lies a treasure trove of visual
            narratives
          </p>
        </div>
        <div
          className="my-12 grid lg:grid-cols-3 grid-cols-1 gap-8"
          id="gallery"
        >
          <div className="grid gap-8" id="image-gallery">
            <div className="swiper-slide image lg:h-[220px] h-[300px] rounded-2xl">
              <div className="img-wrapper rounded-2xl lg:h-[220px] h-[300px]">
                <a href="https://pagedone.io/asset/uploads/1714022523.png">
                  <img
                    src="https://pagedone.io/asset/uploads/1714022523.png"
                    alt="Gallery image"
                    className="img-responsive w-full h-full object-cover rounded-2xl"
                  />
                </a>
                <div className="img-overlay rounded-2xl">
                  <div className="w-full h-full absolute left-0 z-10 flex justify-center rounded-2xl flex-col transition-all duration-700 ease-in-out group-hover:rounded-2xl group-hover:bottom-0 group-hover:w-full group-hover:h-full group-hover:bg-gray-900/50">
                    <div className="absolute bottom-0 z-2 rounded-2xl w-full h-full transition-all duration-700 ease-in-out group-hover:rounded-2xl group-hover:w-full group-hover:h-full left-0 group-hover:opacity-100">
                      <h6 className="text-white text-xl font-medium leading-loose p-5 absolute bottom-0">
                        Interior Designer
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide image lg:h-[418px] h-[300px] rounded-2xl">
              <div className="img-wrapper rounded-2xl lg:h-[418px] h-[300px]">
                <a href="https://pagedone.io/asset/uploads/1714022539.png">
                  <img
                    src="https://pagedone.io/asset/uploads/1714022539.png"
                    alt="Gallery image"
                    className="img-responsive w-full h-full object-cover rounded-2xl"
                  />
                </a>
                <div className="img-overlay rounded-2xl">
                  <div className="w-full h-full absolute left-0 z-10 flex justify-center rounded-2xl flex-col transition-all duration-700 ease-in-out group-hover:rounded-2xl group-hover:bottom-0 group-hover:w-full group-hover:h-full group-hover:bg-gray-900/50">
                    <div className="absolute bottom-0 z-2 rounded-2xl w-full h-full transition-all duration-700 ease-in-out group-hover:rounded-2xl group-hover:w-full group-hover:h-full left-0 group-hover:opacity-100">
                      <h6 className="text-white text-xl font-medium leading-loose p-5 absolute bottom-0">
                        Architecture Designer
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-8">
            <div className="swiper-slide image lg:h-[418px] h-[300px] rounded-2xl">
              <div className="img-wrapper rounded-2xl lg:h-[418px] h-[300px]">
                <a href="https://pagedone.io/asset/uploads/1714022553.png">
                  <img
                    src="https://pagedone.io/asset/uploads/1714022553.png"
                    alt="Gallery image"
                    className="img-responsive w-full h-full object-cover rounded-2xl"
                  />
                </a>
                <div className="img-overlay rounded-2xl">
                  <div className="w-full h-full absolute left-0 z-10 flex justify-center rounded-2xl flex-col transition-all duration-700 ease-in-out group-hover:rounded-2xl group-hover:bottom-0 group-hover:w-full group-hover:h-full group-hover:bg-gray-900/50">
                    <div className="absolute bottom-0 z-2 rounded-2xl w-full h-full transition-all duration-700 ease-in-out group-hover:rounded-2xl group-hover:w-full group-hover:h-full left-0 group-hover:opacity-100">
                      <h6 className="text-white text-xl font-medium leading-loose p-5 absolute bottom-0">
                        Interior Designer
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide image lg:h-[220px] h-[300px] rounded-2xl">
              <div className="img-wrapper rounded-2xl lg:h-[220px] h-[300px]">
                <a href="https://pagedone.io/asset/uploads/1714022572.png">
                  <img
                    src="https://pagedone.io/asset/uploads/1714022572.png"
                    alt="Gallery image"
                    className="img-responsive w-full h-full object-cover rounded-2xl"
                  />
                </a>
                <div className="img-overlay rounded-2xl">
                  <div className="w-full h-full absolute left-0 z-10 flex justify-center rounded-2xl flex-col transition-all duration-700 ease-in-out group-hover:rounded-2xl group-hover:bottom-0 group-hover:w-full group-hover:h-full group-hover:bg-gray-900/50">
                    <div className="absolute bottom-0 z-2 rounded-2xl w-full h-full transition-all duration-700 ease-in-out group-hover:rounded-2xl group-hover:w-full group-hover:h-full left-0 group-hover:opacity-100">
                      <h6 className="text-white text-xl font-medium leading-loose p-5 absolute bottom-0">
                        Architecture Designer
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-8">
            <div className="swiper-slide image lg:h-[291px] h-[300px] rounded-2xl">
              <div className="img-wrapper rounded-2xl lg:h-[291px] h-[300px]">
                <a href="https://pagedone.io/asset/uploads/1714022594.png">
                  <img
                    src="https://pagedone.io/asset/uploads/1714022594.png"
                    alt="Gallery image"
                    className="img-responsive w-full h-full object-cover rounded-2xl"
                  />
                </a>
                <div className="img-overlay rounded-2xl">
                  <div className="w-full h-full absolute left-0 z-10 flex justify-center rounded-2xl flex-col transition-all duration-700 ease-in-out group-hover:rounded-2xl group-hover:bottom-0 group-hover:w-full group-hover:h-full group-hover:bg-gray-900/50">
                    <div className="absolute bottom-0 z-2 rounded-2xl w-full h-full transition-all duration-700 ease-in-out group-hover:rounded-2xl group-hover:w-full group-hover:h-full left-0 group-hover:opacity-100">
                      <h6 className="text-white text-xl font-medium leading-loose p-5 absolute bottom-0">
                        Interior Designer
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide image lg:h-[347px] h-[300px] rounded-2xl">
              <div className="img-wrapper rounded-2xl lg:h-[347px] h-[300px]">
                <a href="https://pagedone.io/asset/uploads/1714022609.png">
                  <img
                    src="https://pagedone.io/asset/uploads/1714022609.png"
                    alt="Gallery image"
                    className="img-responsive w-full h-full object-cover rounded-2xl"
                  />
                </a>
                <div className="img-overlay rounded-2xl">
                  <div className="w-full h-full absolute left-0 z-10 flex justify-center rounded-2xl flex-col transition-all duration-700 ease-in-out group-hover:rounded-2xl group-hover:bottom-0 group-hover:w-full group-hover:h-full group-hover:bg-gray-900/50">
                    <div className="absolute bottom-0 z-2 rounded-2xl w-full h-full transition-all duration-700 ease-in-out group-hover:rounded-2xl group-hover:w-full group-hover:h-full left-0 group-hover:opacity-100">
                      <h6 className="text-white text-xl font-medium leading-loose p-5 absolute bottom-0">
                        Architecture Designer
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="group w-full px-6 py-3 bg-indigo-100 hover:bg-indigo-600 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
          <span className="px-2 text-indigo-700 group-hover:text-white transition-all duration-700 ease-in-out text-lg font-semibold leading-8">
            Load More
          </span>
        </button>
      </div>
    </section>
  );
}
