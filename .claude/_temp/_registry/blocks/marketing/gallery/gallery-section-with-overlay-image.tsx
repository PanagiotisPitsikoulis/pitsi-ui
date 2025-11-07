export default function GallerySectionWithOverlayImage() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex md:flex-row flex-col justify-between items-center md:gap-8 gap-12">
          <div className="gap-4 grid">
            <h2 className="w-full text-indigo-600 text-4xl font-bold font-manrope leading-normal md:text-start text-center">
              Our Gallery
            </h2>
            <p className="w-full text-gray-600 text-base font-normal leading-relaxed md:text-start text-center">
              Discover the essence of beauty captured in every stroke, every
              hue, and every form.
            </p>
          </div>
          <div className="flex gap-8 items-center">
            <button
              id="slider-button-left"
              className="swiper-button-prev w-12 h-12 group rounded-full shadow border border-indigo-700 hover:bg-indigo-700 flex items-center justify-center transition-all duration-700 ease-in-out"
            >
              {/* SVG removed */}
            </button>
            <button
              id="slider-button-right"
              className="swiper-button-next w-12 h-12 group rounded-full shadow border border-indigo-700 hover:bg-indigo-700 flex items-center justify-center transition-all duration-700 ease-in-out"
            >
              {/* SVG removed */}
            </button>
          </div>
        </div>
        <div id="gallery" className="swiper my-12">
          <div className="swiper-wrapper flex" id="image-gallery">
            <div className="swiper-slide image lg:max-w-[520px] max-w-[316px] h-[500px] rounded-2xl">
              <div className="img-wrapper rounded-2xl">
                <a href="https://pagedone.io/asset/uploads/1713954426.png">
                  <img
                    src="https://pagedone.io/asset/uploads/1713954426.png"
                    className="img-responsive w-full h-[500px] object-cover rounded-2xl"
                    alt="gallery image"
                  />
                </a>
                <div className="img-overlay rounded-2xl">
                  <div className="w-full h-full absolute left-0 z-10 flex justify-center rounded-2xl flex-col transition-all duration-700 ease-in-out group-hover:rounded-2xl group-hover:bottom-0 group-hover:w-full group-hover:h-full group-hover:bg-gray-900/50">
                    <div className="w-[52px] h-[52px] z-2 absolute top-56 lg:left-60 left-36 bg-white rounded-full flex items-center justify-center  transition-all duration-700 ease-in-out">
                      {/* SVG removed */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-[316px] h-[500px] grid gap-8">
              <div className="image max-w-[316px] h-[234px] rounded-2xl">
                <div className="img-wrapper rounded-2xl">
                  <a href="https://pagedone.io/asset/uploads/1713954436.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1713954436.png"
                      className="img-responsive w-full h-[234px] object-cover rounded-2xl"
                      alt="gallery image"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="w-full h-full absolute left-0 z-10 flex justify-center items-center rounded-2xl flex-col transition-all duration-700 ease-in-out group-hover:rounded-2xl group-hover:bottom-0 group-hover:w-full group-hover:h-full group-hover:bg-gray-900/50">
                      <div className="w-[52px] h-[52px] z-2 absolutetop-24 left-32 bg-white rounded-full flex items-center justify-center  transition-all duration-700 ease-in-out">
                        {/* SVG removed */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image max-w-[316px] h-[234px] rounded-2xl">
                <div className="img-wrapper rounded-2xl">
                  <a href="https://pagedone.io/asset/uploads/1713954447.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1713954447.png"
                      className="img-responsive w-full h-[234px] object-cover rounded-2xl"
                      alt="gallery image"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="w-full h-full absolute left-0 z-10 flex justify-center items-center rounded-2xl flex-col transition-all duration-700 ease-in-out group-hover:rounded-2xl group-hover:bottom-0 group-hover:w-full group-hover:h-full group-hover:bg-gray-900/50">
                      <div className="w-[52px] h-[52px] z-2 absolutetop-24 left-32 bg-white rounded-full flex items-center justify-center  transition-all duration-700 ease-in-out">
                        {/* SVG removed */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide image max-w-[316px] h-[500px] rounded-2xl">
              <div className="img-wrapper rounded-2xl">
                <a href="https://pagedone.io/asset/uploads/1713954457.png">
                  <img
                    src="https://pagedone.io/asset/uploads/1713954457.png"
                    className="img-responsive w-full h-[500px] object-cover rounded-2xl"
                    alt="gallery image"
                  />
                </a>
                <div className="img-overlay rounded-2xl">
                  <div className="w-full h-full absolute left-0 z-10 flex justify-center items-center rounded-2xl flex-col transition-all duration-700 ease-in-out group-hover:rounded-2xl group-hover:bottom-0 group-hover:w-full group-hover:h-full group-hover:bg-gray-900/50">
                    <div className="w-[52px] h-[52px] z-2 absolutetop-24 left-32 bg-white rounded-full flex items-center justify-center  transition-all duration-700 ease-in-out">
                      {/* SVG removed */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide image lg:max-w-[520px] max-w-[316px] h-[500px] rounded-2xl">
              <div className="img-wrapper rounded-2xl">
                <a href="https://pagedone.io/asset/uploads/1713954426.png">
                  <img
                    src="https://pagedone.io/asset/uploads/1713954426.png"
                    className="img-responsive w-full h-[500px] object-cover rounded-2xl"
                    alt="gallery image"
                  />
                </a>
                <div className="img-overlay rounded-2xl">
                  <div className="w-full h-full absolute left-0 z-10 flex justify-center rounded-2xl flex-col transition-all duration-700 ease-in-out group-hover:rounded-2xl group-hover:bottom-0 group-hover:w-full group-hover:h-full group-hover:bg-gray-900/50">
                    <div className="w-[52px] h-[52px] z-2 absolute top-56 lg:left-60 left-36 bg-white rounded-full flex items-center justify-center  transition-all duration-700 ease-in-out">
                      {/* SVG removed */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide max-w-[316px] h-[500px] grid gap-8">
              <div className="image max-w-[316px] h-[234px] rounded-2xl">
                <div className="img-wrapper rounded-2xl">
                  <a href="https://pagedone.io/asset/uploads/1713954436.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1713954436.png"
                      className="img-responsive w-full h-[234px] object-cover rounded-2xl"
                      alt="gallery image"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="w-full h-full absolute left-0 z-10 flex justify-center items-center rounded-2xl flex-col transition-all duration-700 ease-in-out group-hover:rounded-2xl group-hover:bottom-0 group-hover:w-full group-hover:h-full group-hover:bg-gray-900/50">
                      <div className="w-[52px] h-[52px] z-2 absolutetop-24 left-32 bg-white rounded-full flex items-center justify-center  transition-all duration-700 ease-in-out">
                        {/* SVG removed */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image max-w-[316px] h-[234px] rounded-2xl">
                <div className="img-wrapper rounded-2xl">
                  <a href="https://pagedone.io/asset/uploads/1713954447.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1713954447.png"
                      className="img-responsive w-full h-[234px] object-cover rounded-2xl"
                      alt="gallery image"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="w-full h-full absolute left-0 z-10 flex justify-center items-center rounded-2xl flex-col transition-all duration-700 ease-in-out group-hover:rounded-2xl group-hover:bottom-0 group-hover:w-full group-hover:h-full group-hover:bg-gray-900/50">
                      <div className="w-[52px] h-[52px] z-2 absolutetop-24 left-32 bg-white rounded-full flex items-center justify-center  transition-all duration-700 ease-in-out">
                        {/* SVG removed */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide image max-w-[316px] h-[500px] rounded-2xl">
              <div className="img-wrapper rounded-2xl">
                <a href="https://pagedone.io/asset/uploads/1713954457.png">
                  <img
                    src="https://pagedone.io/asset/uploads/1713954457.png"
                    className="img-responsive w-full h-[500px] object-cover rounded-2xl"
                    alt="gallery image"
                  />
                </a>
                <div className="img-overlay rounded-2xl">
                  <div className="w-full h-full absolute left-0 z-10 flex justify-center items-center rounded-2xl flex-col transition-all duration-700 ease-in-out group-hover:rounded-2xl group-hover:bottom-0 group-hover:w-full group-hover:h-full group-hover:bg-gray-900/50">
                    <div className="w-[52px] h-[52px] z-2 absolutetop-24 left-32 bg-white rounded-full flex items-center justify-center  transition-all duration-700 ease-in-out">
                      {/* SVG removed */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End image gallery */}
      {/* End container */}
      <button className="group mx-auto px-14 py-2.5 rounded-full shadow border border-indigo-700 hover:border-transparent hover:bg-indigo-700 transition-all duration-700 ease-in-out justify-center items-center flex">
        <span className="px-2 py-px text-indigo-700 group-hover:text-white transition-all duration-700 ease-in-out text-lg font-semibold leading-8">
          View All
        </span>
      </button>
      <div className="lightbox" id="lightbox">
        <span className="close" id="close">
          ×
        </span>
        <img
          src=""
          className="lightbox-image"
          id="lightbox-image"
          alt="gallery image"
        />
      </div>
    </section>
  );
}
