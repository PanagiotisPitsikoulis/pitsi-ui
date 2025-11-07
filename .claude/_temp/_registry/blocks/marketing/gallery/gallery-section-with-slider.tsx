export default function GallerySectionWithSlider() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-2.5">
          <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Our Work Gallery
          </h2>
          <p className="w-full text-center text-gray-600 text-lg font-normal leading-8">
            Explore the dynamic fusion of groundbreaking ideas and visionary
            concepts, where innovation <br />
            ignites the spark of inspiration, propelling our creations to new
            heights.
          </p>
        </div>
        {/* Swiper */}
        <div className="swiper mySwiper pb-0.5 gallery">
          <div className="swiper-wrapper h-auto my-16">
            <div className="swiper-slide w-[592px] h-[486px] rounded-xl">
              <img
                className="gallery-image h-full w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1714046156.png"
                alt="Emma Davis image"
              />
            </div>
            <div className="swiper-slide w-[592px] h-[486px] rounded-xl">
              <img
                className="gallery-image h-full w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1714046167.png"
                alt="Emma Davis image"
              />
            </div>
            <div className="swiper-slide w-[592px] h-[486px] rounded-xl">
              <img
                className="gallery-image h-full w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1714046156.png"
                alt="Emma Davis image"
              />
            </div>
            <div className="swiper-slide w-[592px] h-[486px] rounded-xl">
              <img
                className="gallery-image h-full w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1714046167.png"
                alt="Emma Davis image"
              />
            </div>
            <div className="swiper-slide w-[592px] h-[486px] rounded-xl">
              <img
                className="gallery-image h-full w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1714046156.png"
                alt="Emma Davis image"
              />
            </div>
            <div className="swiper-slide w-[592px] h-[486px] rounded-xl">
              <img
                className="gallery-image h-full w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1714046167.png"
                alt="Emma Davis image"
              />
            </div>
            <div className="swiper-slide w-[592px] h-[486px] rounded-xl">
              <img
                className="gallery-image h-full w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1714046156.png"
                alt="Emma Davis image"
              />
            </div>
            <div className="swiper-slide w-[592px] h-[486px] rounded-xl">
              <img
                className="gallery-image h-full w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1714046167.png"
                alt="Emma Davis image"
              />
            </div>
            <div className="swiper-slide w-[592px] h-[486px] rounded-xl">
              <img
                className="gallery-image h-full w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1714046156.png"
                alt="Emma Davis image"
              />
            </div>
            <div className="swiper-slide w-[592px] h-[486px] rounded-xl">
              <img
                className="gallery-image h-full w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1714046167.png"
                alt="Emma Davis image"
              />
            </div>
            <div className="swiper-slide w-[592px] h-[486px] rounded-xl">
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
  );
}
