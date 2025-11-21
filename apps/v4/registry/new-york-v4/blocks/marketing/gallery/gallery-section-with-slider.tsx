export default function GallerySectionWithSlider() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-2.5">
          <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-gray-900">
            Our Work Gallery
          </h2>
          <p className="w-full text-center text-lg leading-8 font-normal text-gray-600">
            Explore the dynamic fusion of groundbreaking ideas and visionary
            concepts, where innovation <br />
            ignites the spark of inspiration, propelling our creations to new
            heights.
          </p>
        </div>
        {/* Swiper */}
        <div className="swiper mySwiper gallery pb-0.5">
          <div className="swiper-wrapper my-16 h-auto">
            <div className="swiper-slide h-[486px] w-[592px] rounded-xl">
              <img
                className="gallery-image h-full w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1714046156.png"
                alt="Emma Davis image"
              />
            </div>
            <div className="swiper-slide h-[486px] w-[592px] rounded-xl">
              <img
                className="gallery-image h-full w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1714046167.png"
                alt="Emma Davis image"
              />
            </div>
            <div className="swiper-slide h-[486px] w-[592px] rounded-xl">
              <img
                className="gallery-image h-full w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1714046156.png"
                alt="Emma Davis image"
              />
            </div>
            <div className="swiper-slide h-[486px] w-[592px] rounded-xl">
              <img
                className="gallery-image h-full w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1714046167.png"
                alt="Emma Davis image"
              />
            </div>
            <div className="swiper-slide h-[486px] w-[592px] rounded-xl">
              <img
                className="gallery-image h-full w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1714046156.png"
                alt="Emma Davis image"
              />
            </div>
            <div className="swiper-slide h-[486px] w-[592px] rounded-xl">
              <img
                className="gallery-image h-full w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1714046167.png"
                alt="Emma Davis image"
              />
            </div>
            <div className="swiper-slide h-[486px] w-[592px] rounded-xl">
              <img
                className="gallery-image h-full w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1714046156.png"
                alt="Emma Davis image"
              />
            </div>
            <div className="swiper-slide h-[486px] w-[592px] rounded-xl">
              <img
                className="gallery-image h-full w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1714046167.png"
                alt="Emma Davis image"
              />
            </div>
            <div className="swiper-slide h-[486px] w-[592px] rounded-xl">
              <img
                className="gallery-image h-full w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1714046156.png"
                alt="Emma Davis image"
              />
            </div>
            <div className="swiper-slide h-[486px] w-[592px] rounded-xl">
              <img
                className="gallery-image h-full w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1714046167.png"
                alt="Emma Davis image"
              />
            </div>
            <div className="swiper-slide h-[486px] w-[592px] rounded-xl">
              <img
                className="gallery-image h-full w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1714046156.png"
                alt="Emma Davis image"
              />
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
        <div className="lightbox" id="lightbox">
          <span className="close" id="close">
            ×
          </span>
          <img className="lightbox-image" id="lightbox-image" />
        </div>
      </div>
    </section>
  )
}
