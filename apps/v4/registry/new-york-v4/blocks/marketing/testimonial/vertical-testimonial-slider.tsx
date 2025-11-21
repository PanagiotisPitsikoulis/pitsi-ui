export default function VerticalTestimonialSlider() {
  return (
    <section className="py-10 lg:py-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-8">
          <div className="inline-flex w-auto flex-col items-start justify-start gap-5 lg:w-[510px] lg:gap-8">
            <div className="flex flex-col items-center justify-start gap-3 lg:items-start lg:gap-4">
              <span className="text-center text-sm leading-normal font-normal text-indigo-600 lg:text-start">
                Testimonial
              </span>
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                Remarkable Client Journeys
              </h2>
              <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:max-w-4xl lg:text-start">
                Discover the remarkable client journeys that showcase our
                commitment to excellence. See how we've transformed businesses
                and lives through our innovative solutions.
              </p>
            </div>
            <button className="duratio-700 mx-auto flex w-full items-center justify-center rounded-lg bg-indigo-600 px-3.5 py-2 shadow-xs transition-all ease-in-out hover:bg-indigo-800 sm:w-fit lg:ml-0">
              <span className="px-1.5 text-sm leading-6 font-medium text-white">
                Read All User Stories
              </span>
            </button>
          </div>
          <div className="relative flex h-[400px] w-auto flex-row gap-5 overflow-hidden md:h-[600px] lg:w-[674px] lg:gap-8">
            <div className="swiper-container">
              <div className="swiper-wrapper flex h-fit w-fit gap-8">
                <div className="swiper-slide">
                  <div className="inline-flex items-start justify-start gap-5 rounded-2xl border border-gray-200 p-5">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1720676365.png"
                      alt="Testimonial Client Journeys image"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-2.5">
                      <div className="inline-flex w-full items-center justify-between gap-5">
                        <div className="inline-flex flex-col items-start justify-start gap-px">
                          <h6 className="text-base leading-relaxed font-medium text-gray-900">
                            Sam King
                          </h6>
                          <h6 className="text-xs leading-normal font-normal text-indigo-600">
                            @sam
                          </h6>
                        </div>
                        <a className="relative h-6 w-6 mix-blend-luminosity">
                          {/* SVG removed */}
                        </a>
                      </div>
                      <p className="text-base leading-relaxed font-normal text-gray-500">
                        Outstanding service! The features far surpassed my
                        expectations and significantly enhanced our efficiency.
                        Highly recommended!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="inline-flex items-start justify-start gap-5 rounded-2xl border border-gray-200 p-5">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1720676374.png"
                      alt="Testimonial Client Journeys image"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-2.5">
                      <div className="inline-flex w-full items-center justify-between gap-5">
                        <div className="inline-flex flex-col items-start justify-start gap-px">
                          <h6 className="text-base leading-relaxed font-medium text-gray-900">
                            Sarah Johnson
                          </h6>
                          <h6 className="text-xs leading-normal font-normal text-indigo-600">
                            @sarah12
                          </h6>
                        </div>
                        <a className="relative h-6 w-6 mix-blend-luminosity">
                          {/* SVG removed */}
                        </a>
                      </div>
                      <p className="text-base leading-relaxed font-normal text-gray-500">
                        This product revolutionized our workflow, making tasks
                        quicker and more manageable. Exceptional experience!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="inline-flex items-start justify-start gap-5 rounded-2xl border border-gray-200 p-5">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1720676385.png"
                      alt="Testimonial Client Journeys image"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-2.5">
                      <div className="inline-flex w-full items-center justify-between gap-5">
                        <div className="inline-flex flex-col items-start justify-start gap-px">
                          <h6 className="text-base leading-relaxed font-medium text-gray-900">
                            Harsh Chopda
                          </h6>
                          <h6 className="text-xs leading-normal font-normal text-indigo-600">
                            @harsh_2
                          </h6>
                        </div>
                        <a className="relative h-6 w-6 mix-blend-luminosity">
                          {/* SVG removed */}
                        </a>
                      </div>
                      <p className="text-base leading-relaxed font-normal text-gray-500">
                        The support and functionality provided have been
                        game-changers for our operations. Truly a remarkable
                        experience!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="inline-flex items-start justify-start gap-5 rounded-2xl border border-gray-200 p-5">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1720676395.png"
                      alt="Testimonial Client Journeys image"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-2.5">
                      <div className="inline-flex w-full items-center justify-between gap-5">
                        <div className="inline-flex flex-col items-start justify-start gap-px">
                          <h6 className="text-base leading-relaxed font-medium text-gray-900">
                            Priya Modi
                          </h6>
                          <h6 className="text-xs leading-normal font-normal text-indigo-600">
                            @__priya__.
                          </h6>
                        </div>
                        <a className="relative h-6 w-6 mix-blend-luminosity">
                          {/* SVG removed */}
                        </a>
                      </div>
                      <p className="text-base leading-relaxed font-normal text-gray-500">
                        Incredible results! The innovative features have boosted
                        our productivity and streamlined our processes like
                        never before.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="inline-flex items-start justify-start gap-5 rounded-2xl border border-gray-200 p-5">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1720676365.png"
                      alt="Testimonial Client Journeys image"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-2.5">
                      <div className="inline-flex w-full items-center justify-between gap-5">
                        <div className="inline-flex flex-col items-start justify-start gap-px">
                          <h6 className="text-base leading-relaxed font-medium text-gray-900">
                            Sam King
                          </h6>
                          <h6 className="text-xs leading-normal font-normal text-indigo-600">
                            @sam
                          </h6>
                        </div>
                        <a className="relative h-6 w-6 mix-blend-luminosity">
                          {/* SVG removed */}
                        </a>
                      </div>
                      <p className="text-base leading-relaxed font-normal text-gray-500">
                        Outstanding service! The features far surpassed my
                        expectations and significantly enhanced our efficiency.
                        Highly recommended!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="inline-flex items-start justify-start gap-5 rounded-2xl border border-gray-200 p-5">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1720676374.png"
                      alt="Testimonial Client Journeys image"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-2.5">
                      <div className="inline-flex w-full items-center justify-between gap-5">
                        <div className="inline-flex flex-col items-start justify-start gap-px">
                          <h6 className="text-base leading-relaxed font-medium text-gray-900">
                            Sarah Johnson
                          </h6>
                          <h6 className="text-xs leading-normal font-normal text-indigo-600">
                            @sarah12
                          </h6>
                        </div>
                        <a className="relative h-6 w-6 mix-blend-luminosity">
                          {/* SVG removed */}
                        </a>
                      </div>
                      <p className="text-base leading-relaxed font-normal text-gray-500">
                        This product revolutionized our workflow, making tasks
                        quicker and more manageable. Exceptional experience!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="inline-flex items-start justify-start gap-5 rounded-2xl border border-gray-200 p-5">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1720676385.png"
                      alt="Testimonial Client Journeys image"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-2.5">
                      <div className="inline-flex w-full items-center justify-between gap-5">
                        <div className="inline-flex flex-col items-start justify-start gap-px">
                          <h6 className="text-base leading-relaxed font-medium text-gray-900">
                            Harsh Chopda
                          </h6>
                          <h6 className="text-xs leading-normal font-normal text-indigo-600">
                            @harsh_2
                          </h6>
                        </div>
                        <a className="relative h-6 w-6 mix-blend-luminosity">
                          {/* SVG removed */}
                        </a>
                      </div>
                      <p className="text-base leading-relaxed font-normal text-gray-500">
                        The support and functionality provided have been
                        game-changers for our operations. Truly a remarkable
                        experience!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="inline-flex items-start justify-start gap-5 rounded-2xl border border-gray-200 p-5">
                    <img
                      className="object-cover"
                      src="https://pagedone.io/asset/uploads/1720676395.png"
                      alt="Testimonial Client Journeys image"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-2.5">
                      <div className="inline-flex w-full items-center justify-between gap-5">
                        <div className="inline-flex flex-col items-start justify-start gap-px">
                          <h6 className="text-base leading-relaxed font-medium text-gray-900">
                            Priya Modi
                          </h6>
                          <h6 className="text-xs leading-normal font-normal text-indigo-600">
                            @__priya__.
                          </h6>
                        </div>
                        <a className="relative h-6 w-6 mix-blend-luminosity">
                          {/* SVG removed */}
                        </a>
                      </div>
                      <p className="text-base leading-relaxed font-normal text-gray-500">
                        Incredible results! The innovative features have boosted
                        our productivity and streamlined our processes like
                        never before.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
