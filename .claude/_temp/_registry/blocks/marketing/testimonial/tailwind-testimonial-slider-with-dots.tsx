export default function TailwindTestimonialSliderWithDots() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 ">
          <span className="text-sm text-gray-500 font-medium text-center block mb-2">
            TESTIMONIAL
          </span>
          <h2 className="text-4xl text-center font-bold text-gray-900 ">
            What our happy user says!
          </h2>
        </div>
        {/*Slider wrapper*/}
        <div className="swiper mySwiper">
          <div className="swiper-wrapper w-max">
            <div className="swiper-slide">
              <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
                <div>
                  <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                    {/* SVG removed */}
                    <span className="text-base font-semibold text-indigo-600">
                      4.9
                    </span>
                  </div>
                  <p className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                    Pagedone has made it possible for me to stay on top of my
                    portfolio and make informed decisions quickly and easily.
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                  <img
                    className="rounded-full h-10 w-10 object-cover"
                    src="https://pagedone.io/asset/uploads/1696229969.png"
                    alt="avatar"
                  />
                  <div className="block">
                    <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">
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
              <div className="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 slide_active:border-indigo-600 hover:shadow-sm">
                <div>
                  <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                    {/* SVG removed */}
                    <span className="text-base font-semibold text-indigo-600">
                      4.9
                    </span>
                  </div>
                  <p className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                    Thanks to pagedone, I feel more informed and confident about
                    my investment decisions than ever before.
                  </p>
                </div>
                <div className="flex items-center gap-5 pt-5 border-t border-solid border-gray-200">
                  <img
                    className="rounded-full h-10 w-10 object-cover"
                    src="https://pagedone.io/asset/uploads/1696229994.png"
                    alt="avatar"
                  />
                  <div className="block">
                    <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">
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
              <div className=" flex justify-between flex-col lg:w-full group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto slide_active:border-indigo-600 hover:border-indigo-600 hover:shadow-sm">
                <div>
                  <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                    {/* SVG removed */}
                    <span className="text-base font-semibold text-indigo-600">
                      4.9
                    </span>
                  </div>
                  <p className="text-base text-gray-600 leading-6  transition-all duration-500  pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                    The customer service team at pagedone went above and beyond
                    to help me resolve a billing issue.
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                  <img
                    className="rounded-full h-10 w-10 object-cover"
                    src="	https://pagedone.io/asset/uploads/1696230027.png"
                    alt="avatar"
                  />
                  <div className="block">
                    <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">
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
              <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto slide_active:border-indigo-600 hover:border-indigo-600 hover:shadow-sm">
                <div>
                  <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                    {/* SVG removed */}
                    <span className="text-base font-semibold text-indigo-600">
                      4.9
                    </span>
                  </div>
                  <p className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                    Pagedone has made it possible for me to stay on top of my
                    portfolio and make informed decisions quickly and easily.
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                  <img
                    className="rounded-full h-10 w-10 object-cover"
                    src="https://pagedone.io/asset/uploads/1696229969.png"
                    alt="avatar"
                  />
                  <div className="block">
                    <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">
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
              <div className="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500  w-full mx-auto slide_active:border-indigo-600 hover:border-indigo-600 hover:shadow-sm ">
                <div>
                  <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                    {/* SVG removed */}
                    <span className="text-base font-semibold text-indigo-600">
                      4.9
                    </span>
                  </div>
                  <p className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                    Thanks to pagedone, I feel more informed and confident about
                    my investment decisions than ever before.
                  </p>
                </div>
                <div className="flex items-center gap-5 pt-5 border-t border-solid border-gray-200">
                  <img
                    className="rounded-full h-10 w-10 object-cover"
                    src="https://pagedone.io/asset/uploads/1696229994.png"
                    alt="avatar"
                  />
                  <div className="block">
                    <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">
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
  );
}
