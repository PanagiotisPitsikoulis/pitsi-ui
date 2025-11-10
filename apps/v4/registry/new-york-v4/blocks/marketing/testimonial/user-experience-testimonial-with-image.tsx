export default function UserExperienceTestimonialWithImage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-14">
          <div className="flex w-full flex-col items-center justify-start gap-2.5">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Clients' Feedback on Our Work
            </h2>
            <p className="w-full text-center text-base leading-relaxed font-normal text-gray-500 lg:max-w-2xl">
              Explore the experiences of our clients with our work, showing our
              dedication to delivering exceptional results.
            </p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <img
              className="h-auto w-full rounded-2xl object-cover lg:h-full"
              src="https://pagedone.io/asset/uploads/1721023808.png"
            />
            <div className="swiper mySwiper relative -mt-28 md:-mt-32">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="flex h-full w-full flex-col items-start justify-start gap-2.5 px-6 lg:h-[274px] lg:w-fit lg:px-14">
                    <div className="swiper-slide-box flex h-full flex-col items-start justify-start gap-10 rounded-xl bg-gray-900 p-6 backdrop-blur-sm max-md:pb-12 lg:h-[274px] lg:gap-6">
                      <div className="flex w-full flex-col items-start justify-start gap-4">
                        <div className="relative h-6 w-6">
                          {/* SVG removed */}
                        </div>
                        <div className="flex w-full flex-col items-start justify-start gap-2.5">
                          <p className="w-full text-center text-lg leading-relaxed font-normal text-white md:text-start lg:max-w-[1090px]">
                            They consistently deliver exceptional quality
                            services right on schedule, ensuring our projects
                            proceed smoothly and efficiently. Their commitment
                            to timeliness and excellence sets them apart in our
                            industry, making them our trusted partner for all
                            our service needs.
                          </p>
                          <div className="flex w-full flex-col items-center justify-center gap-1.5 md:items-end">
                            <h6 className="text-center text-base leading-relaxed font-semibold text-white md:text-right">
                              Krishna Seth
                            </h6>
                            <h6 className="text-center text-right text-base leading-relaxed font-normal text-gray-400 md:text-right">
                              Project Manager At ApexTech Solutions
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="flex h-full w-full flex-col items-start justify-start gap-2.5 px-6 lg:h-[274px] lg:w-fit lg:px-14">
                    <div className="swiper-slide-box flex h-full flex-col items-start justify-start gap-10 rounded-xl bg-gray-900 p-6 backdrop-blur-sm max-md:pb-12 lg:h-[274px] lg:gap-6">
                      <div className="flex w-full flex-col items-start justify-start gap-4">
                        <div className="relative h-6 w-6">
                          {/* SVG removed */}
                        </div>
                        <div className="flex w-full flex-col items-start justify-start gap-2.5">
                          <p className="w-full text-center text-lg leading-relaxed font-normal text-white md:text-start lg:max-w-[1090px]">
                            They consistently deliver exceptional quality
                            services right on schedule, ensuring our projects
                            proceed smoothly and efficiently. Their commitment
                            to timeliness and excellence sets them apart in our
                            industry, making them our trusted partner for all
                            our service needs.
                          </p>
                          <div className="flex w-full flex-col items-center justify-center gap-1.5 md:items-end">
                            <h6 className="text-center text-base leading-relaxed font-semibold text-white md:text-right">
                              Pooja Sharma
                            </h6>
                            <h6 className="text-center text-right text-base leading-relaxed font-normal text-gray-400 md:text-right">
                              Project Manager At ApexTech Solutions
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide hidden md:flex">
                  <div className="flex h-full w-full flex-col items-start justify-start gap-2.5 px-6 lg:h-[274px] lg:w-fit lg:px-14">
                    <div className="swiper-slide-box flex h-full flex-col items-start justify-start gap-10 rounded-xl bg-gray-900 p-6 backdrop-blur-sm max-md:pb-12 lg:h-[274px] lg:gap-6">
                      <div className="flex w-full flex-col items-start justify-start gap-4">
                        <div className="relative h-6 w-6">
                          {/* SVG removed */}
                        </div>
                        <div className="flex w-full flex-col items-start justify-start gap-2.5">
                          <p className="w-full text-center text-lg leading-relaxed font-normal text-white md:text-start lg:max-w-[1090px]">
                            They consistently deliver exceptional quality
                            services right on schedule, ensuring our projects
                            proceed smoothly and efficiently. Their commitment
                            to timeliness and excellence sets them apart in our
                            industry, making them our trusted partner for all
                            our service needs.
                          </p>
                          <div className="flex w-full flex-col items-center justify-center gap-1.5 md:items-end">
                            <h6 className="text-center text-base leading-relaxed font-semibold text-white md:text-right">
                              Suraj Mehta
                            </h6>
                            <h6 className="text-center text-right text-base leading-relaxed font-normal text-gray-400 md:text-right">
                              Project Manager At ApexTech Solutions
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination flex" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
