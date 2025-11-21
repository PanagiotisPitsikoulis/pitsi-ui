export default function GallerySectionImageWithLightbox() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="font-manrope w-full pb-4 text-center text-4xl leading-normal font-bold text-indigo-600">
            Our Gallery
          </h2>
          <p className="w-full text-center text-base leading-relaxed font-normal text-gray-600">
            The air is charged with inspiration as the walls come alive
          </p>
        </div>
      </div>
      {/* Swiper */}
      <div className="swiper mySwiper gallery my-12">
        <div className="swiper-wrapper">
          <div className="swiper-slide group relative grid max-h-[460px] overflow-hidden rounded-2xl">
            <img
              className="gallery-image h-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
              src="https://pagedone.io/asset/uploads/1714129455.png"
              alt="Gallery image"
            />
          </div>
          <div className="swiper-slide group relative grid max-h-[460px] overflow-hidden rounded-2xl">
            <img
              className="gallery-image h-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
              src="https://pagedone.io/asset/uploads/1714129466.png"
              alt="Gallery image"
            />
          </div>
          <div className="swiper-slide group relative grid max-h-[460px] overflow-hidden rounded-2xl">
            <img
              className="gallery-image h-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
              src="https://pagedone.io/asset/uploads/1714129475.png"
              alt="Gallery image"
            />
          </div>
          <div className="swiper-slide group relative grid max-h-[460px] w-full overflow-hidden rounded-2xl">
            <img
              className="gallery-image h-full max-h-[460px] w-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
              src="https://pagedone.io/asset/uploads/1714200747.png"
              alt="Gallery image"
            />
          </div>
          <div className="swiper-slide group relative grid max-h-[460px] overflow-hidden rounded-2xl">
            <img
              className="gallery-image h-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
              src="https://pagedone.io/asset/uploads/1714129455.png"
              alt="Gallery image"
            />
          </div>
          <div className="swiper-slide group relative grid max-h-[460px] overflow-hidden rounded-2xl">
            <img
              className="gallery-image h-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
              src="https://pagedone.io/asset/uploads/1714129466.png"
              alt="Gallery image"
            />
          </div>
          <div className="swiper-slide group relative grid max-h-[460px] overflow-hidden rounded-2xl">
            <img
              className="gallery-image h-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
              src="https://pagedone.io/asset/uploads/1714129475.png"
              alt="Gallery image"
            />
          </div>
          <div className="swiper-slide group relative grid max-h-[460px] w-full overflow-hidden rounded-2xl">
            <img
              className="gallery-image h-full max-h-[460px] w-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
              src="https://pagedone.io/asset/uploads/1714200747.png"
              alt="Gallery image"
            />
          </div>
        </div>
      </div>
      <div className="lightbox" id="lightbox">
        <span className="close" id="close">
          ×
        </span>
        <img className="lightbox-image" id="lightbox-image" />
      </div>
    </section>
  )
}
