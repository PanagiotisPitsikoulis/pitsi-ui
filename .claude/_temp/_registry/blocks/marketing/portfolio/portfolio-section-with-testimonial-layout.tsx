export default function PortfolioSectionWithTestimonialLayout() {
  return (
    <section className="py-12 relative">
      <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between flex-col sm:flex-row gap-y-4 mb-5">
          <h2 className="font-manrope font-bold text-4xl text-gray-900">
            Creative Expressions
          </h2>
          <div className="flex justify-center items-center gap-6">
            <button className="swiper-button-prev rounded-full w-9 h-9 flex items-center justify-center p-2.5 bg-indigo-200 group transition-all duration-300 hover:bg-indigo-600">
              {/* SVG removed */}
            </button>
            <button className="swiper-button-next rounded-full w-9 h-9 flex items-center justify-center p-2.5 bg-indigo-200 group transition-all duration-300 hover:bg-indigo-600">
              {/* SVG removed */}
            </button>
          </div>
        </div>
        <p className="font-normal text-base text-gray-500 max-w-4xl max-sm:text-center">
          Nisl molestie facilisis pellentesque diam nulla nam vitae sapien. Ac
          cras aenean auctor molestie aliquet. Cras non bibendum ultricies metus
          orci proin blandit a quis.
        </p>
      </div>
      <div className="swiper mySwiper mb-10 py-10">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="w-full h-full max-h-[456px]">
              <img
                src="https://pagedone.io/asset/uploads/1707712046.png"
                className="w-full h-full  object-cover mx-auto"
              />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="w-full h-full max-h-[456px]">
              <img
                src="https://pagedone.io/asset/uploads/1707712065.png"
                className="w-full h-full  object-cover mx-auto"
              />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="w-full h-full max-h-[456px]">
              <img
                src="https://pagedone.io/asset/uploads/1707712095.png"
                className="w-full h-full  object-cover mx-auto"
              />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="w-full h-full max-h-[456px]">
              <img
                src="https://pagedone.io/asset/uploads/1707712046.png"
                className="w-full h-full object-cover mx-auto"
              />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="w-full h-full max-h-[456px]">
              <img
                src="https://pagedone.io/asset/uploads/1707712065.png"
                className="w-full h-full object-cover mx-auto"
              />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="w-full h-full max-h-[456px]">
              <img
                src="https://pagedone.io/asset/uploads/1707712095.png"
                className="w-full h-full object-cover mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <button className="flex items-center justify-center py-3.5 px-7 rounded-full font-semibold text-base text-white bg-indigo-600 shadow-sm shadow-transparent transition-all duration-300 hover:shadow-indigo-200 hover:bg-indigo-700 w-max mx-auto">
        View More
      </button>
    </section>
  );
}
