export default function TailwindTestimonialSliderWithDots() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="mb-2 block text-center text-sm font-medium text-gray-500">
            TESTIMONIAL
          </span>
          <h2 className="text-center text-4xl font-bold text-gray-900">
            What our happy user says!
          </h2>
        </div>
        {/*Slider wrapper*/}
        <div className="swiper mySwiper">
          <div className="swiper-wrapper w-max">
            <div className="swiper-slide">
              <div className="group slide_active:border-indigo-600 mx-auto w-full rounded-xl border border-solid border-gray-300 bg-white p-6 transition-all duration-500 hover:border-indigo-600 hover:shadow-sm">
                <div>
                  <div className="mb-7 flex items-center gap-2 text-amber-500 transition-all duration-500">
                    {/* SVG removed */}
                    <span className="text-base font-semibold text-indigo-600">
                      4.9
                    </span>
                  </div>
                  <p className="slide_active:text-gray-800 pb-8 text-base leading-6 text-gray-600 transition-all duration-500 group-hover:text-gray-800">
                    Pagedone has made it possible for me to stay on top of my
                    portfolio and make informed decisions quickly and easily.
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="https://pagedone.io/asset/uploads/1696229969.png"
                    alt="avatar"
                  />
                  <div className="block">
                    <h5 className="mb-1 font-medium text-gray-900 transition-all duration-500">
                      Jane D
                    </h5>
                    <span className="text-sm leading-4 text-gray-500">
                      CEO{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group slide_active:border-indigo-600 mx-auto flex w-full flex-col justify-between rounded-xl border border-solid border-gray-300 bg-white p-6 transition-all duration-500 hover:border-indigo-600 hover:shadow-sm">
                <div>
                  <div className="mb-7 flex items-center gap-2 text-amber-500 transition-all duration-500">
                    {/* SVG removed */}
                    <span className="text-base font-semibold text-indigo-600">
                      4.9
                    </span>
                  </div>
                  <p className="slide_active:text-gray-800 pb-8 text-base leading-6 text-gray-600 transition-all duration-500 group-hover:text-gray-800">
                    Thanks to pagedone, I feel more informed and confident about
                    my investment decisions than ever before.
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="https://pagedone.io/asset/uploads/1696229994.png"
                    alt="avatar"
                  />
                  <div className="block">
                    <h5 className="mb-1 font-medium text-gray-900 transition-all duration-500">
                      Harsh P.
                    </h5>
                    <span className="text-sm leading-4 text-gray-500">
                      Product Designer
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group slide_active:border-indigo-600 mx-auto flex w-full flex-col justify-between rounded-xl border border-solid border-gray-300 bg-white p-6 transition-all duration-500 hover:border-indigo-600 hover:shadow-sm lg:w-full">
                <div>
                  <div className="mb-7 flex items-center gap-2 text-amber-500 transition-all duration-500">
                    {/* SVG removed */}
                    <span className="text-base font-semibold text-indigo-600">
                      4.9
                    </span>
                  </div>
                  <p className="slide_active:text-gray-800 pb-8 text-base leading-6 text-gray-600 transition-all duration-500 group-hover:text-gray-800">
                    The customer service team at pagedone went above and beyond
                    to help me resolve a billing issue.
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="	https://pagedone.io/asset/uploads/1696230027.png"
                    alt="avatar"
                  />
                  <div className="block">
                    <h5 className="mb-1 font-medium text-gray-900 transition-all duration-500">
                      Alex K.
                    </h5>
                    <span className="text-sm leading-4 text-gray-500">
                      Design Lead
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group slide_active:border-indigo-600 mx-auto w-full rounded-xl border border-solid border-gray-300 bg-white p-6 transition-all duration-500 hover:border-indigo-600 hover:shadow-sm">
                <div>
                  <div className="mb-7 flex items-center gap-2 text-amber-500 transition-all duration-500">
                    {/* SVG removed */}
                    <span className="text-base font-semibold text-indigo-600">
                      4.9
                    </span>
                  </div>
                  <p className="slide_active:text-gray-800 pb-8 text-base leading-6 text-gray-600 transition-all duration-500 group-hover:text-gray-800">
                    Pagedone has made it possible for me to stay on top of my
                    portfolio and make informed decisions quickly and easily.
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="https://pagedone.io/asset/uploads/1696229969.png"
                    alt="avatar"
                  />
                  <div className="block">
                    <h5 className="mb-1 font-medium text-gray-900 transition-all duration-500">
                      Jane D
                    </h5>
                    <span className="text-sm leading-4 text-gray-500">
                      CEO{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="group slide_active:border-indigo-600 mx-auto flex w-full flex-col justify-between rounded-xl border border-solid border-gray-300 bg-white p-6 transition-all duration-500 hover:border-indigo-600 hover:shadow-sm">
                <div>
                  <div className="mb-7 flex items-center gap-2 text-amber-500 transition-all duration-500">
                    {/* SVG removed */}
                    <span className="text-base font-semibold text-indigo-600">
                      4.9
                    </span>
                  </div>
                  <p className="slide_active:text-gray-800 pb-8 text-base leading-6 text-gray-600 transition-all duration-500 group-hover:text-gray-800">
                    Thanks to pagedone, I feel more informed and confident about
                    my investment decisions than ever before.
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="https://pagedone.io/asset/uploads/1696229994.png"
                    alt="avatar"
                  />
                  <div className="block">
                    <h5 className="mb-1 font-medium text-gray-900 transition-all duration-500">
                      Harsh P.
                    </h5>
                    <span className="text-sm leading-4 text-gray-500">
                      Product Designer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
  )
}
