export default function GallerySectionWithLightboxImage() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-6">
        <div className="mb-16">
          <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal pb-2.5">
            Our Gallery
          </h2>
          <p className="w-full text-center text-gray-600 text-lg font-normal leading-8">
            Explore the essence of beauty in our gallery's intimate space.
          </p>
        </div>
        <div className="flex flex-col-reverse  gap-8 mx-auto">
          <div className="slider-box flex flex-col xl:flex-row gap-8">
            <div className="box xl:w-[1062px] w-full gallery">
              <div className="swiper main-slide-carousel swiper-container relative">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="block xl:w-[1062px] w-full mx-auto h-[627px] rounded-3xl">
                      <img
                        src="https://pagedone.io/asset/uploads/1713943683.png"
                        alt="Gallery image"
                        className="gallery-image w-full h-full mx-auto rounded-3xl object-cover"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="block xl:w-[1062px] w-full mx-auto h-[627px] rounded-3xl">
                      <img
                        src="https://pagedone.io/asset/uploads/1713943709.png"
                        alt="Gallery image"
                        className="gallery-image w-full h-full mx-auto rounded-3xl object-cover"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="block xl:w-[1062px] w-full mx-auto h-[627px] rounded-3xl">
                      <img
                        src="https://pagedone.io/asset/uploads/1713943720.png"
                        alt="Gallery image"
                        className="gallery-image w-full h-full mx-auto rounded-3xl object-cover"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="block xl:w-[1062px] w-full mx-auto h-[627px] rounded-3xl">
                      <img
                        src="https://pagedone.io/asset/uploads/1713943731.png"
                        alt="Gallery image"
                        className="gallery-image w-full h-full mx-auto rounded-3xl object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-[126px] w-full">
              <div className="nav-for-slider">
                <div className="swiper-wrapper justify-center md:gap-7 gap-4 xl:flex-col">
                  <div className="swiper-slide thumbs-slide lg:!w-[126px] md:!h-[135px] w-full h-[110px]">
                    <img
                      src="https://pagedone.io/asset/uploads/1713943683.png"
                      alt="Gallery image"
                      className="gallery-image w-full cursor-pointer h-full rounded-2xl border-2 border-gray-200 transition-all duration-500 hover:border-indigo-600 object-cover"
                    />
                  </div>
                  <div className="swiper-slide thumbs-slide lg:!w-[126px] md:!h-[135px] w-full h-[110px]">
                    <img
                      src="https://pagedone.io/asset/uploads/1713943709.png"
                      alt="Gallery image"
                      className="gallery-image w-full cursor-pointer h-full rounded-2xl border-2 border-gray-200 transition-all duration-500 hover:border-indigo-600 object-cover"
                    />
                  </div>
                  <div className="swiper-slide thumbs-slide lg:!w-[126px] md:!h-[135px] w-full h-[110px]">
                    <img
                      src="https://pagedone.io/asset/uploads/1713943720.png"
                      alt="Gallery image"
                      className="gallery-image w-full cursor-pointer h-full rounded-2xl border-2 border-gray-200 transition-all duration-500 hover:border-indigo-600 object-cover"
                    />
                  </div>
                  <div className="swiper-slide thumbs-slide lg:!w-[126px] md:!h-[135px] w-full h-[110px]">
                    <img
                      src="https://pagedone.io/asset/uploads/1713943731.png"
                      alt="Gallery image"
                      className="gallery-image w-full cursor-pointer h-full rounded-2xl border-2 border-gray-200 transition-all duration-500 hover:border-indigo-600 object-cover"
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
  );
}
