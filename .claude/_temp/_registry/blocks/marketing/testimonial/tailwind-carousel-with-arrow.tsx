export default function TailwindCarouselWithArrow() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row max-sm:gap-10 items-center justify-between mb-16">
          <div className="block">
            <div className="text-sm font-medium text-indigo-600 mb-4">
              Our Testimonial
            </div>
            <h2 className="font-manrope font-bold text-4xl leading-snug text-gray-900">
              <span className="text-indigo-600">Our Client</span> loves Us
              because Our Quality Work.
            </h2>
          </div>
          <div className="flex items-center gap-8">
            <button className="swiper-button-prev w-12 h-12 rounded-full border border-indigo-600 p-3.5 text-black transition-all duration-500 hover:bg-indigo-500 hover:text-white ">
              {/* SVG removed */}
            </button>
            <button className="swiper-button-next w-12 h-12 rounded-full border border-indigo-600 p-3.5 text-black transition-all duration-500 hover:bg-indigo-500 hover:text-white ">
              {/* SVG removed */}
            </button>
          </div>
        </div>
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-11 ">
                <div className="relative w-52 h-52">
                  <img
                    src="https://pagedone.io/asset/uploads/1711617258.png"
                    alt="avatar-image"
                    className="rounded-full relative z-0 object-cover"
                  />
                  {/* SVG removed */}
                </div>
                <div className="flex flex-col max-md:items-center md:w-[calc(100%-208px)]">
                  <h6 className="text-xl font-medium leading-8 text-gray-900 mb-1.5 ">
                    Julia Roberts
                  </h6>
                  <span className="text-sm font-normal text-gray-600 mb-4 ">
                    Product and Sales Manager
                  </span>
                  <p className="text-base font-normal text-gray-900 my-4 max-md:text-center">
                    During the purchase process, any questions or doubts were
                    met with swift and thorough assistance, leaving no query
                    unanswered. The designer's helpfulness and the commitment to
                    providing quick support underscore the dedication to
                    customer satisfaction. Gratitude is extended for not only
                    delivering a visually stunning theme but also for the
                    seamless.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="https://pagedone.io/asset/uploads/1711617304.png"
                      alt="avatar-image"
                      className="rounded-full object-cover "
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1711617314.png"
                      alt="avatar-image"
                      className="rounded-full -ml-1 object-cover"
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1711617324.png"
                      alt="avatar-image"
                      className="rounded-full -ml-1.5 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-11 ">
                <div className="relative w-52 h-52">
                  <img
                    src="https://pagedone.io/asset/uploads/1711617268.png"
                    alt="avatar-image"
                    className="rounded-full relative z-0 object-cover"
                  />
                  {/* SVG removed */}
                </div>
                <div className="flex flex-col max-md:items-center md:w-[calc(100%-208px)]">
                  <h6 className="text-xl font-medium leading-8 text-gray-900 mb-1.5">
                    Julia Roberts
                  </h6>
                  <span className="text-sm font-normal text-gray-600 mb-4">
                    Product and Sales Manager
                  </span>
                  <p className="text-base font-normal text-gray-900 my-4 max-md:text-center">
                    During the purchase process, any questions or doubts were
                    met with swift and thorough assistance, leaving no query
                    unanswered. The designer's helpfulness and the commitment to
                    providing quick support underscore the dedication to
                    customer satisfaction. Gratitude is extended for not only
                    delivering a visually stunning theme but also for the
                    seamless.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="https://pagedone.io/asset/uploads/1711617314.png"
                      alt="avatar-image"
                      className="rounded-full object-cover "
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1711617324.png"
                      alt="avatar-image"
                      className="rounded-full -ml-1 object-cover"
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1711617334.png"
                      alt="avatar-image"
                      className="rounded-full -ml-1.5 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-11 ">
                <div className="relative w-52 h-52">
                  <img
                    src="https://pagedone.io/asset/uploads/1711617278.png"
                    alt="avatar-image"
                    className="rounded-full relative z-0 object-cover"
                  />
                  {/* SVG removed */}
                </div>
                <div className="flex flex-col max-md:items-center md:w-[calc(100%-208px)]">
                  <h6 className="text-xl font-medium leading-8 text-gray-900 mb-1.5">
                    Julia Roberts
                  </h6>
                  <span className="text-sm font-normal text-gray-600 mb-4">
                    Product and Sales Manager
                  </span>
                  <p className="text-base font-normal text-gray-900 my-4 max-md:text-center">
                    During the purchase process, any questions or doubts were
                    met with swift and thorough assistance, leaving no query
                    unanswered. The designer's helpfulness and the commitment to
                    providing quick support underscore the dedication to
                    customer satisfaction. Gratitude is extended for not only
                    delivering a visually stunning theme but also for the
                    seamless.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="https://pagedone.io/asset/uploads/1711617324.png"
                      alt="avatar-image"
                      className="rounded-full object-cover "
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1711617334.png"
                      alt="avatar-image"
                      className="rounded-full -ml-1 object-cover"
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1711617304.png"
                      alt="avatar-image"
                      className="rounded-full -ml-1.5 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-11 ">
                <div className="relative w-52 h-52">
                  <img
                    src="https://pagedone.io/asset/uploads/1711617288.png"
                    alt="avatar-image"
                    className="rounded-full relative z-0 object-cover"
                  />
                  {/* SVG removed */}
                </div>
                <div className="flex flex-col max-md:items-center md:w-[calc(100%-208px)]">
                  <h6 className="text-xl font-medium leading-8 text-gray-900 mb-1.5">
                    Julia Roberts
                  </h6>
                  <span className="text-sm font-normal text-gray-600 mb-4">
                    Product and Sales Manager
                  </span>
                  <p className="text-base font-normal text-gray-900 my-4 max-md:text-center">
                    During the purchase process, any questions or doubts were
                    met with swift and thorough assistance, leaving no query
                    unanswered. The designer's helpfulness and the commitment to
                    providing quick support underscore the dedication to
                    customer satisfaction. Gratitude is extended for not only
                    delivering a visually stunning theme but also for the
                    seamless.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="https://pagedone.io/asset/uploads/1711617334.png"
                      alt="avatar-image"
                      className="rounded-full object-cover "
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1711617304.png"
                      alt="avatar-image"
                      className="rounded-full -ml-1 object-cover"
                    />
                    <img
                      src="https://pagedone.io/asset/uploads/1711617314.png"
                      alt="avatar-image"
                      className="rounded-full -ml-1.5 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
