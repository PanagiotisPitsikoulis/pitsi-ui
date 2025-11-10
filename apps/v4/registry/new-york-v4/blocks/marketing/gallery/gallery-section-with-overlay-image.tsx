export default function GallerySectionWithOverlayImage() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:gap-8">
          <div className="grid gap-4">
            <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-indigo-600 md:text-start">
              Our Gallery
            </h2>
            <p className="w-full text-center text-base leading-relaxed font-normal text-gray-600 md:text-start">
              Discover the essence of beauty captured in every stroke, every
              hue, and every form.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <button
              id="slider-button-left"
              className="swiper-button-prev group flex h-12 w-12 items-center justify-center rounded-full border border-indigo-700 shadow transition-all duration-700 ease-in-out hover:bg-indigo-700"
            >
              {/* SVG removed */}
            </button>
            <button
              id="slider-button-right"
              className="swiper-button-next group flex h-12 w-12 items-center justify-center rounded-full border border-indigo-700 shadow transition-all duration-700 ease-in-out hover:bg-indigo-700"
            >
              {/* SVG removed */}
            </button>
          </div>
        </div>
        <div id="gallery" className="swiper my-12">
          <div className="swiper-wrapper flex" id="image-gallery">
            <div className="swiper-slide image h-[500px] max-w-[316px] rounded-2xl lg:max-w-[520px]">
              <div className="img-wrapper rounded-2xl">
                <a href="https://pagedone.io/asset/uploads/1713954426.png">
                  <img
                    src="https://pagedone.io/asset/uploads/1713954426.png"
                    className="img-responsive h-[500px] w-full rounded-2xl object-cover"
                    alt="gallery image"
                  />
                </a>
                <div className="img-overlay rounded-2xl">
                  <div className="absolute left-0 z-10 flex h-full w-full flex-col justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-gray-900/50">
                    <div className="absolute top-56 left-36 z-2 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white transition-all duration-700 ease-in-out lg:left-60">
                      {/* SVG removed */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide grid h-[500px] max-w-[316px] gap-8">
              <div className="image h-[234px] max-w-[316px] rounded-2xl">
                <div className="img-wrapper rounded-2xl">
                  <a href="https://pagedone.io/asset/uploads/1713954436.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1713954436.png"
                      className="img-responsive h-[234px] w-full rounded-2xl object-cover"
                      alt="gallery image"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="absolute left-0 z-10 flex h-full w-full flex-col items-center justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-gray-900/50">
                      <div className="absolutetop-24 left-32 z-2 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white transition-all duration-700 ease-in-out">
                        {/* SVG removed */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image h-[234px] max-w-[316px] rounded-2xl">
                <div className="img-wrapper rounded-2xl">
                  <a href="https://pagedone.io/asset/uploads/1713954447.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1713954447.png"
                      className="img-responsive h-[234px] w-full rounded-2xl object-cover"
                      alt="gallery image"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="absolute left-0 z-10 flex h-full w-full flex-col items-center justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-gray-900/50">
                      <div className="absolutetop-24 left-32 z-2 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white transition-all duration-700 ease-in-out">
                        {/* SVG removed */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide image h-[500px] max-w-[316px] rounded-2xl">
              <div className="img-wrapper rounded-2xl">
                <a href="https://pagedone.io/asset/uploads/1713954457.png">
                  <img
                    src="https://pagedone.io/asset/uploads/1713954457.png"
                    className="img-responsive h-[500px] w-full rounded-2xl object-cover"
                    alt="gallery image"
                  />
                </a>
                <div className="img-overlay rounded-2xl">
                  <div className="absolute left-0 z-10 flex h-full w-full flex-col items-center justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-gray-900/50">
                    <div className="absolutetop-24 left-32 z-2 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white transition-all duration-700 ease-in-out">
                      {/* SVG removed */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide image h-[500px] max-w-[316px] rounded-2xl lg:max-w-[520px]">
              <div className="img-wrapper rounded-2xl">
                <a href="https://pagedone.io/asset/uploads/1713954426.png">
                  <img
                    src="https://pagedone.io/asset/uploads/1713954426.png"
                    className="img-responsive h-[500px] w-full rounded-2xl object-cover"
                    alt="gallery image"
                  />
                </a>
                <div className="img-overlay rounded-2xl">
                  <div className="absolute left-0 z-10 flex h-full w-full flex-col justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-gray-900/50">
                    <div className="absolute top-56 left-36 z-2 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white transition-all duration-700 ease-in-out lg:left-60">
                      {/* SVG removed */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide grid h-[500px] max-w-[316px] gap-8">
              <div className="image h-[234px] max-w-[316px] rounded-2xl">
                <div className="img-wrapper rounded-2xl">
                  <a href="https://pagedone.io/asset/uploads/1713954436.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1713954436.png"
                      className="img-responsive h-[234px] w-full rounded-2xl object-cover"
                      alt="gallery image"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="absolute left-0 z-10 flex h-full w-full flex-col items-center justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-gray-900/50">
                      <div className="absolutetop-24 left-32 z-2 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white transition-all duration-700 ease-in-out">
                        {/* SVG removed */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image h-[234px] max-w-[316px] rounded-2xl">
                <div className="img-wrapper rounded-2xl">
                  <a href="https://pagedone.io/asset/uploads/1713954447.png">
                    <img
                      src="https://pagedone.io/asset/uploads/1713954447.png"
                      className="img-responsive h-[234px] w-full rounded-2xl object-cover"
                      alt="gallery image"
                    />
                  </a>
                  <div className="img-overlay rounded-2xl">
                    <div className="absolute left-0 z-10 flex h-full w-full flex-col items-center justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-gray-900/50">
                      <div className="absolutetop-24 left-32 z-2 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white transition-all duration-700 ease-in-out">
                        {/* SVG removed */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide image h-[500px] max-w-[316px] rounded-2xl">
              <div className="img-wrapper rounded-2xl">
                <a href="https://pagedone.io/asset/uploads/1713954457.png">
                  <img
                    src="https://pagedone.io/asset/uploads/1713954457.png"
                    className="img-responsive h-[500px] w-full rounded-2xl object-cover"
                    alt="gallery image"
                  />
                </a>
                <div className="img-overlay rounded-2xl">
                  <div className="absolute left-0 z-10 flex h-full w-full flex-col items-center justify-center rounded-2xl transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-gray-900/50">
                    <div className="absolutetop-24 left-32 z-2 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white transition-all duration-700 ease-in-out">
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
      <button className="group mx-auto flex items-center justify-center rounded-full border border-indigo-700 px-14 py-2.5 shadow transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-700">
        <span className="px-2 py-px text-lg leading-8 font-semibold text-indigo-700 transition-all duration-700 ease-in-out group-hover:text-white">
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
  )
}
