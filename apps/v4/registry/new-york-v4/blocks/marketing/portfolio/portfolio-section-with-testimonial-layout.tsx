export default function PortfolioSectionWithTestimonialLayout() {
  return (
    <section className="relative py-12">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mb-5 flex flex-col items-center justify-between gap-y-4 sm:flex-row">
          <h2 className="font-manrope text-4xl font-bold text-gray-900">
            Creative Expressions
          </h2>
          <div className="flex items-center justify-center gap-6">
            <button className="swiper-button-prev group flex h-9 w-9 items-center justify-center rounded-full bg-indigo-200 p-2.5 transition-all duration-300 hover:bg-indigo-600">
              {/* SVG removed */}
            </button>
            <button className="swiper-button-next group flex h-9 w-9 items-center justify-center rounded-full bg-indigo-200 p-2.5 transition-all duration-300 hover:bg-indigo-600">
              {/* SVG removed */}
            </button>
          </div>
        </div>
        <p className="max-w-4xl text-base font-normal text-gray-500 max-sm:text-center">
          Nisl molestie facilisis pellentesque diam nulla nam vitae sapien. Ac
          cras aenean auctor molestie aliquet. Cras non bibendum ultricies metus
          orci proin blandit a quis.
        </p>
      </div>
      <div className="swiper mySwiper mb-10 py-10">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="h-full max-h-[456px] w-full">
              <img
                src="https://pagedone.io/asset/uploads/1707712046.png"
                className="mx-auto h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="h-full max-h-[456px] w-full">
              <img
                src="https://pagedone.io/asset/uploads/1707712065.png"
                className="mx-auto h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="h-full max-h-[456px] w-full">
              <img
                src="https://pagedone.io/asset/uploads/1707712095.png"
                className="mx-auto h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="h-full max-h-[456px] w-full">
              <img
                src="https://pagedone.io/asset/uploads/1707712046.png"
                className="mx-auto h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="h-full max-h-[456px] w-full">
              <img
                src="https://pagedone.io/asset/uploads/1707712065.png"
                className="mx-auto h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="h-full max-h-[456px] w-full">
              <img
                src="https://pagedone.io/asset/uploads/1707712095.png"
                className="mx-auto h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <button className="mx-auto flex w-max items-center justify-center rounded-full bg-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm shadow-transparent transition-all duration-300 hover:bg-indigo-700 hover:shadow-indigo-200">
        View More
      </button>
    </section>
  )
}
