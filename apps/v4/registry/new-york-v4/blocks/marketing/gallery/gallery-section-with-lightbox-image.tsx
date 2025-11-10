export default function GallerySectionWithLightboxImage() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-6">
        <div className="mb-16">
          <h2 className="font-manrope w-full pb-2.5 text-center text-4xl leading-normal font-bold text-gray-900">
            Our Gallery
          </h2>
          <p className="w-full text-center text-lg leading-8 font-normal text-gray-600">
            Explore the essence of beauty in our gallery's intimate space.
          </p>
        </div>
        <div className="mx-auto flex flex-col-reverse gap-8">
          <div className="slider-box flex flex-col gap-8 xl:flex-row">
            <div className="box gallery w-full xl:w-[1062px]">
              <div className="swiper main-slide-carousel swiper-container relative">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="mx-auto block h-[627px] w-full rounded-3xl xl:w-[1062px]">
                      <img
                        src="https://pagedone.io/asset/uploads/1713943683.png"
                        alt="Gallery image"
                        className="gallery-image mx-auto h-full w-full rounded-3xl object-cover"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="mx-auto block h-[627px] w-full rounded-3xl xl:w-[1062px]">
                      <img
                        src="https://pagedone.io/asset/uploads/1713943709.png"
                        alt="Gallery image"
                        className="gallery-image mx-auto h-full w-full rounded-3xl object-cover"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="mx-auto block h-[627px] w-full rounded-3xl xl:w-[1062px]">
                      <img
                        src="https://pagedone.io/asset/uploads/1713943720.png"
                        alt="Gallery image"
                        className="gallery-image mx-auto h-full w-full rounded-3xl object-cover"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="mx-auto block h-[627px] w-full rounded-3xl xl:w-[1062px]">
                      <img
                        src="https://pagedone.io/asset/uploads/1713943731.png"
                        alt="Gallery image"
                        className="gallery-image mx-auto h-full w-full rounded-3xl object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[126px]">
              <div className="nav-for-slider">
                <div className="swiper-wrapper justify-center gap-4 md:gap-7 xl:flex-col">
                  <div className="swiper-slide thumbs-slide h-[110px] w-full md:!h-[135px] lg:!w-[126px]">
                    <img
                      src="https://pagedone.io/asset/uploads/1713943683.png"
                      alt="Gallery image"
                      className="gallery-image h-full w-full cursor-pointer rounded-2xl border-2 border-gray-200 object-cover transition-all duration-500 hover:border-indigo-600"
                    />
                  </div>
                  <div className="swiper-slide thumbs-slide h-[110px] w-full md:!h-[135px] lg:!w-[126px]">
                    <img
                      src="https://pagedone.io/asset/uploads/1713943709.png"
                      alt="Gallery image"
                      className="gallery-image h-full w-full cursor-pointer rounded-2xl border-2 border-gray-200 object-cover transition-all duration-500 hover:border-indigo-600"
                    />
                  </div>
                  <div className="swiper-slide thumbs-slide h-[110px] w-full md:!h-[135px] lg:!w-[126px]">
                    <img
                      src="https://pagedone.io/asset/uploads/1713943720.png"
                      alt="Gallery image"
                      className="gallery-image h-full w-full cursor-pointer rounded-2xl border-2 border-gray-200 object-cover transition-all duration-500 hover:border-indigo-600"
                    />
                  </div>
                  <div className="swiper-slide thumbs-slide h-[110px] w-full md:!h-[135px] lg:!w-[126px]">
                    <img
                      src="https://pagedone.io/asset/uploads/1713943731.png"
                      alt="Gallery image"
                      className="gallery-image h-full w-full cursor-pointer rounded-2xl border-2 border-gray-200 object-cover transition-all duration-500 hover:border-indigo-600"
                    />
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
    </section>
  )
}
