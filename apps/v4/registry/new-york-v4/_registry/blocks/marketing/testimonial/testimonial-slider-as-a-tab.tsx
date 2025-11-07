export default function TestimonialSliderAsATab() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-center justify-start gap-5 pb-10 lg:pb-12">
          <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-white">
            What Customers Are Saying About Pagedone
          </h2>
          <h5 className="text-center text-lg leading-relaxed font-normal text-gray-400 lg:max-w-5xl">
            This practical guide is your roadmap to success, offering invaluable
            insights, strategies, and actionable advice tailored to the unique
            challenges faced by creative entrepreneurs.
          </h5>
        </div>
        <div className="slider-box flex flex-col gap-12">
          <div className="flex w-full justify-center">
            <div className="nav-for-slider relative">
              <div className="swiper-wrapper grid grid-cols-1 justify-between gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="swiper-slide thumbs-slide">
                  <div className="group flex items-center justify-start gap-4 border-b-2 border-transparent pb-7 xl:whitespace-nowrap">
                    <img
                      className="h-[60px] w-[60px] object-cover"
                      src="https://pagedone.io/asset/uploads/1721113596.png"
                    />
                    <div className="inline-flex w-full flex-col items-start justify-start">
                      <h5 className="text-lg leading-relaxed font-medium text-white">
                        James Miller
                      </h5>
                      <p className="text-sm leading-snug font-normal text-gray-300">
                        Product and Sales Manager
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide thumbs-slide">
                  <div className="group flex w-max items-center justify-start gap-4 border-b-2 border-transparent pb-7 whitespace-nowrap">
                    <img
                      className="h-[60px] w-[60px] object-cover"
                      src="https://pagedone.io/asset/uploads/1721113606.png"
                    />
                    <div className="inline-flex w-full flex-col items-start justify-start">
                      <h5 className="text-lg leading-relaxed font-medium text-white">
                        Mia Thompson
                      </h5>
                      <p className="text-sm leading-snug font-normal text-gray-300">
                        Product Designer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide thumbs-slide">
                  <div className="group flex w-max items-center justify-start gap-4 border-b-2 border-transparent pb-7 whitespace-nowrap">
                    <img
                      className="h-[60px] w-[60px] object-cover"
                      src="https://pagedone.io/asset/uploads/1721113618.png"
                    />
                    <div className="inline-flex w-full flex-col items-start justify-start">
                      <h5 className="text-lg leading-relaxed font-medium text-white">
                        Olivia Carter
                      </h5>
                      <p className="text-sm leading-snug font-normal text-gray-300">
                        Design Lead
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide thumbs-slide">
                  <div className="group flex w-max items-center justify-start gap-4 border-b-2 border-transparent pb-7 whitespace-nowrap">
                    <img
                      className="h-[60px] w-[60px] object-cover"
                      src="https://pagedone.io/asset/uploads/1721113628.png"
                    />
                    <div className="inline-flex w-full flex-col items-start justify-start">
                      <h5 className="text-lg leading-relaxed font-medium text-white">
                        Matthew Bennett
                      </h5>
                      <p className="text-sm leading-snug font-normal text-gray-300">
                        Sales Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box gallery w-full">
            <div className="swiper main-slide-carousel swiper-container relative">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="flex w-full flex-col items-start justify-start rounded-2xl border border-gray-700 p-6">
                    <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:gap-6 lg:gap-11">
                      <img
                        className="object-cover"
                        src="https://pagedone.io/asset/uploads/1721115018.png"
                      />
                      <div className="inline-flex flex-col items-center justify-start gap-3 md:items-start md:gap-5">
                        <div className="flex flex-col items-center justify-start gap-1 md:items-start">
                          <h4 className="text-center text-xl leading-8 font-medium text-white md:text-start">
                            James Miller
                          </h4>
                          <h6 className="text-center text-sm leading-normal font-normal text-red-600 md:text-start">
                            Product and Sales Manager
                          </h6>
                        </div>
                        <div className="flex flex-col items-center justify-start gap-3 md:items-start">
                          <h3 className="font-manrope text-center text-3xl leading-normal font-bold text-white md:text-start">
                            It highlights customer satisfaction, testimonials.
                          </h3>
                          <p className="text-center text-lg leading-relaxed font-normal text-gray-200 md:text-start">
                            As a busy professional, managing investments can be
                            challenging, but Pagedone simplifies this task by
                            providing me with the tools to stay on top of my
                            portfolio effortlessly. Its intuitive interface
                            allows me to make informed decisions swiftly,
                            ensuring that I can navigate my investments
                            efficiently despite a hectic schedule.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="flex w-full flex-col items-start justify-start rounded-2xl border border-gray-700 p-6">
                    <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:gap-6 lg:gap-11">
                      <img
                        className="object-cover"
                        src="https://pagedone.io/asset/uploads/1721115305.png"
                      />
                      <div className="inline-flex flex-col items-center justify-start gap-3 md:items-start md:gap-5">
                        <div className="flex flex-col items-center justify-start gap-1 md:items-start">
                          <h4 className="text-center text-xl leading-8 font-medium text-white md:text-start">
                            Mia Thompson
                          </h4>
                          <h6 className="text-center text-sm leading-normal font-normal text-red-600 md:text-start">
                            Product Designer
                          </h6>
                        </div>
                        <div className="flex flex-col items-center justify-start gap-3 md:items-start">
                          <h3 className="font-manrope text-center text-3xl leading-normal font-bold text-white md:text-start">
                            It highlights customer satisfaction, testimonials.
                          </h3>
                          <p className="text-center text-lg leading-relaxed font-normal text-gray-200 md:text-start">
                            As a busy professional, managing investments can be
                            challenging, but Pagedone simplifies this task by
                            providing me with the tools to stay on top of my
                            portfolio effortlessly. Its intuitive interface
                            allows me to make informed decisions swiftly,
                            ensuring that I can navigate my investments
                            efficiently despite a hectic schedule.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="flex w-full flex-col items-start justify-start rounded-2xl border border-gray-700 p-6">
                    <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:gap-6 lg:gap-11">
                      <img
                        className="object-cover"
                        src="https://pagedone.io/asset/uploads/1721115316.png"
                      />
                      <div className="inline-flex flex-col items-center justify-start gap-3 md:items-start md:gap-5">
                        <div className="flex flex-col items-center justify-start gap-1 md:items-start">
                          <h4 className="text-center text-xl leading-8 font-medium text-white md:text-start">
                            Olivia Carter
                          </h4>
                          <h6 className="text-center text-sm leading-normal font-normal text-red-600 md:text-start">
                            Design Lead
                          </h6>
                        </div>
                        <div className="flex flex-col items-center justify-start gap-3 md:items-start">
                          <h3 className="font-manrope text-center text-3xl leading-normal font-bold text-white md:text-start">
                            It highlights customer satisfaction, testimonials.
                          </h3>
                          <p className="text-center text-lg leading-relaxed font-normal text-gray-200 md:text-start">
                            As a busy professional, managing investments can be
                            challenging, but Pagedone simplifies this task by
                            providing me with the tools to stay on top of my
                            portfolio effortlessly. Its intuitive interface
                            allows me to make informed decisions swiftly,
                            ensuring that I can navigate my investments
                            efficiently despite a hectic schedule.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="flex w-full flex-col items-start justify-start rounded-2xl border border-gray-700 p-6">
                    <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row md:gap-6 lg:gap-11">
                      <img
                        className="object-cover"
                        src="https://pagedone.io/asset/uploads/1721115325.png"
                      />
                      <div className="inline-flex flex-col items-center justify-start gap-3 md:items-start md:gap-5">
                        <div className="flex flex-col items-center justify-start gap-1 md:items-start">
                          <h4 className="text-center text-xl leading-8 font-medium text-white md:text-start">
                            Matthew Bennett
                          </h4>
                          <h6 className="text-center text-sm leading-normal font-normal text-red-600 md:text-start">
                            Sales Manager
                          </h6>
                        </div>
                        <div className="flex flex-col items-center justify-start gap-3 md:items-start">
                          <h3 className="font-manrope text-center text-3xl leading-normal font-bold text-white md:text-start">
                            It highlights customer satisfaction, testimonials.
                          </h3>
                          <p className="text-center text-lg leading-relaxed font-normal text-gray-200 md:text-start">
                            As a busy professional, managing investments can be
                            challenging, but Pagedone simplifies this task by
                            providing me with the tools to stay on top of my
                            portfolio effortlessly. Its intuitive interface
                            allows me to make informed decisions swiftly,
                            ensuring that I can navigate my investments
                            efficiently despite a hectic schedule.
                          </p>
                        </div>
                      </div>
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
