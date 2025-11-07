export default function GallerySectionWithTestimonial() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-2.5">
          <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-gray-900">
            Portraits of Play
          </h2>
          <p className="w-full text-center text-lg leading-8 font-normal text-gray-600">
            Discover the essence of gaming characters in our unique gallery,{" "}
            <br />
            where every pixel holds a story.
          </p>
        </div>
      </div>
      <div className="swiper-container my-16 h-fit">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              src="https://pagedone.io/asset/uploads/1714128368.png"
              className="w-full rounded-2xl object-cover"
            />
          </div>
          <div className="swiper-slide">
            <img
              src="https://pagedone.io/asset/uploads/1714128378.png"
              className="w-full rounded-2xl object-cover"
            />
          </div>
          <div className="swiper-slide">
            <img
              src="https://pagedone.io/asset/uploads/1714128387.png"
              className="w-full rounded-2xl object-cover"
            />
          </div>
          <div className="swiper-slide">
            <img
              src="https://pagedone.io/asset/uploads/1714128368.png"
              className="w-full rounded-2xl object-cover"
            />
          </div>
          <div className="swiper-slide">
            <img
              src="https://pagedone.io/asset/uploads/1714128378.png"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
      <button
        id="slider-button-right"
        className="swiper-button-next group relative mx-auto inline-flex w-full items-center justify-center gap-2"
      >
        <h5 className="text-lg leading-8 font-normal whitespace-nowrap text-gray-400 transition-all duration-700 ease-in-out group-hover:text-gray-900">
          Scroll to Explore
        </h5>
        {/* SVG removed */}
      </button>
    </section>
  )
}
