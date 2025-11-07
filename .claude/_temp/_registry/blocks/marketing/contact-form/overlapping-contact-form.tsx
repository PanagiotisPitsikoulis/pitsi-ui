export default function OverlappingContactForm() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
          <div className="w-full flex justify-between flex-col lg:w-2/5">
            <div className="block lg:text-left text-center">
              <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5">
                Our latest <span className=" text-indigo-600">blogs</span>
              </h2>
              <p className="text-gray-500 mb-10  max-lg:max-w-xl max-lg:mx-auto">
                Welcome to our blog section, where knowledge meets inspiration.
                Explore insightful articles, expert tips, and the latest trends
                in our field.
              </p>
              <a
                href="javascript:;"
                className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 lg:mx-0 mx-auto flex justify-center text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-100"
              >
                View All
              </a>
            </div>
            {/* Slider controls */}
            <div className="flex items-center lg:justify-start justify-center lg:mt-0 mt-8 gap-8 mb-4">
              <button
                id="slider-button-left"
                className="swiper-button-prev group flex justify-center items-center border border-solid border-indigo-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-indigo-600"
                data-carousel-prev
              >
                {/* SVG removed */}
              </button>
              <button
                id="slider-button-right"
                className="swiper-button-next group flex justify-center items-center border border-solid border-indigo-600 w-11 h-11 transition-all duration-500 rounded-full hover:bg-indigo-600"
                data-carousel-next
              >
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            {/*Slider wrapper*/}
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide w-full max-lg:max-w-xl lg:w-1/2 group">
                  <div className="flex items-center mb-9">
                    <img
                      src="https://pagedone.io/asset/uploads/1696244059.png"
                      alt="blogs tailwind section"
                      className="rounded-2xl w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-indigo-600">
                    Clever ways to invest in product to organize your portfolio
                  </h3>
                  <p className="text-gray-500 leading-6 transition-all duration-500 mb-8">
                    Discover smart investment strategies to streamline and
                    organize your portfolio. Explore innovative approaches to
                    optimize your...
                  </p>
                  <a
                    href="javascript:;"
                    className="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 font-semibold"
                  >
                    Read more{/* SVG removed */}
                  </a>
                </div>
                <div className="swiper-slide w-full max-lg:max-w-xl lg:w-1/2 group">
                  <div className="flex items-center mb-9">
                    <img
                      src="https://pagedone.io/asset/uploads/1696244074.png"
                      alt="blogs tailwind section"
                      className="rounded-2xl w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-indigo-600">
                    How to grow your profit through systematic investment with
                    us
                  </h3>
                  <p className="text-gray-500 leading-6 transition-all duration-500 mb-8">
                    Unlock the power of systematic investment with us and watch
                    your profits soar. Our expert team will guide you on the
                    path to financial..
                  </p>
                  <a
                    href="javascript:;"
                    className="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 font-semibold"
                  >
                    Read more{/* SVG removed */}
                  </a>
                </div>
                <div className="swiper-slide w-full max-lg:max-w-xl lg:w-1/2 group">
                  <div className="flex items-center mb-9">
                    <img
                      src="https://pagedone.io/asset/uploads/1696244059.png"
                      alt="blogs tailwind section"
                      className="rounded-2xl w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-indigo-600">
                    Clever ways to invest in product to organize your portfolio
                  </h3>
                  <p className="text-gray-500 leading-6 transition-all duration-500 mb-8">
                    Discover smart investment strategies to streamline and
                    organize your portfolio. Explore innovative approaches to
                    optimize your...
                  </p>
                  <a
                    href="javascript:;"
                    className="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 font-semibold"
                  >
                    Read more{/* SVG removed */}
                  </a>
                </div>
                <div className="swiper-slide w-full max-lg:max-w-xl lg:w-1/2 group">
                  <div className="flex items-center mb-9">
                    <img
                      src="https://pagedone.io/asset/uploads/1696244074.png"
                      alt="blogs tailwind section"
                      className="rounded-2xl w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-indigo-600">
                    How to grow your profit through systematic investment with
                    us
                  </h3>
                  <p className="text-gray-500 leading-6 transition-all duration-500 mb-8">
                    Unlock the power of systematic investment with us and watch
                    your profits soar. Our expert team will guide you on the
                    path to financial..
                  </p>
                  <a
                    href="javascript:;"
                    className="cursor-pointer flex items-center gap-2 text-lg text-indigo-700 font-semibold"
                  >
                    Read more{/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
