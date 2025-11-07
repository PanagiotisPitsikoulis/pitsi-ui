export default function GallerySectionImageWithLightbox() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="w-full text-center text-indigo-600 text-4xl font-bold font-manrope leading-normal pb-4">
            Our Gallery
          </h2>
          <p className="w-full text-center text-gray-600 text-base font-normal leading-relaxed">
            The air is charged with inspiration as the walls come alive
          </p>
        </div>
      </div>
      {/* Swiper */}
      <div className="swiper mySwiper my-12 gallery">
        <div className="swiper-wrapper">
          <div className="swiper-slide max-h-[460px] grid group relative overflow-hidden rounded-2xl">
            <img
              className="gallery-image h-full rounded-2xl group-hover:scale-105 transition-all object-cover duration-700 ease-in-out"
              src="https://pagedone.io/asset/uploads/1714129455.png"
              alt="Gallery image"
            />
          </div>
          <div className="swiper-slide max-h-[460px] grid group relative overflow-hidden rounded-2xl">
            <img
              className="gallery-image h-full rounded-2xl group-hover:scale-105 transition-all duration-700 object-cover ease-in-out"
              src="https://pagedone.io/asset/uploads/1714129466.png"
              alt="Gallery image"
            />
          </div>
          <div className="swiper-slide max-h-[460px] grid group relative overflow-hidden rounded-2xl">
            <img
              className="gallery-image h-full rounded-2xl group-hover:scale-105 transition-all duration-700 object-cover ease-in-out"
              src="https://pagedone.io/asset/uploads/1714129475.png"
              alt="Gallery image"
            />
          </div>
          <div className="swiper-slide w-full max-h-[460px] grid group relative overflow-hidden rounded-2xl">
            <img
              className="gallery-image w-full max-h-[460px] h-full rounded-2xl group-hover:scale-105 object-cover transition-all duration-700 ease-in-out"
              src="https://pagedone.io/asset/uploads/1714200747.png"
              alt="Gallery image"
            />
          </div>
          <div className="swiper-slide max-h-[460px] grid group relative overflow-hidden rounded-2xl">
            <img
              className="gallery-image h-full rounded-2xl group-hover:scale-105 transition-all object-cover duration-700 ease-in-out"
              src="https://pagedone.io/asset/uploads/1714129455.png"
              alt="Gallery image"
            />
          </div>
          <div className="swiper-slide max-h-[460px] grid group relative overflow-hidden rounded-2xl">
            <img
              className="gallery-image h-full rounded-2xl group-hover:scale-105 transition-all duration-700 object-cover ease-in-out"
              src="https://pagedone.io/asset/uploads/1714129466.png"
              alt="Gallery image"
            />
          </div>
          <div className="swiper-slide max-h-[460px] grid group relative overflow-hidden rounded-2xl">
            <img
              className="gallery-image h-full rounded-2xl group-hover:scale-105 transition-all duration-700 object-cover ease-in-out"
              src="https://pagedone.io/asset/uploads/1714129475.png"
              alt="Gallery image"
            />
          </div>
          <div className="swiper-slide w-full max-h-[460px] grid group relative overflow-hidden rounded-2xl">
            <img
              className="gallery-image w-full max-h-[460px] h-full rounded-2xl group-hover:scale-105 object-cover transition-all duration-700 ease-in-out"
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
  );
}
