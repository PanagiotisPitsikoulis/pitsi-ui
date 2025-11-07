export default function GallerySectionWithTestimonial() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-2.5">
          <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Portraits of Play
          </h2>
          <p className="w-full text-center text-gray-600 text-lg font-normal leading-8">
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
        className="swiper-button-next relative w-full mx-auto group justify-center items-center gap-2 inline-flex"
      >
        <h5 className="group-hover:text-gray-900 text-gray-400 text-lg font-normal leading-8 transition-all duration-700 ease-in-out whitespace-nowrap">
          Scroll to Explore
        </h5>
        {/* SVG removed */}
      </button>
    </section>
  );
}
