export default function UserExperienceTestimonialWithImage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start gap-14 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-2.5 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Clients' Feedback on Our Work
            </h2>
            <p className="lg:max-w-2xl w-full text-center text-gray-500 text-base font-normal leading-relaxed">
              Explore the experiences of our clients with our work, showing our
              dedication to delivering exceptional results.
            </p>
          </div>
          <div className="flex-col justify-start items-start flex">
            <img
              className="w-full lg:h-full h-auto object-cover rounded-2xl"
              src="https://pagedone.io/asset/uploads/1721023808.png"
            />
            <div className="swiper mySwiper md:-mt-32 -mt-28 relative">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="lg:w-fit w-full lg:h-[274px] h-full lg:px-14 px-6 flex-col justify-start items-start gap-2.5 flex">
                    <div className="swiper-slide-box lg:h-[274px] h-full p-6 rounded-xl bg-gray-900 backdrop-blur-sm flex-col justify-start items-start lg:gap-6 gap-10 flex max-md:pb-12">
                      <div className="w-full flex-col justify-start items-start gap-4 flex">
                        <div className="w-6 h-6 relative">
                          {/* SVG removed */}
                        </div>
                        <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                          <p className="lg:max-w-[1090px] w-full text-white text-lg font-normal leading-relaxed md:text-start text-center">
                            They consistently deliver exceptional quality
                            services right on schedule, ensuring our projects
                            proceed smoothly and efficiently. Their commitment
                            to timeliness and excellence sets them apart in our
                            industry, making them our trusted partner for all
                            our service needs.
                          </p>
                          <div className="w-full flex-col justify-center md:items-end items-center gap-1.5 flex">
                            <h6 className="text-white text-base font-semibold leading-relaxed md:text-right text-center">
                              Krishna Seth
                            </h6>
                            <h6 className="text-right text-gray-400 text-base font-normal leading-relaxed md:text-right text-center">
                              Project Manager At ApexTech Solutions
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="lg:w-fit w-full lg:h-[274px] h-full lg:px-14 px-6 flex-col justify-start items-start gap-2.5 flex">
                    <div className="swiper-slide-box lg:h-[274px] h-full p-6 rounded-xl bg-gray-900 backdrop-blur-sm flex-col justify-start items-start lg:gap-6 gap-10 flex  max-md:pb-12">
                      <div className="w-full flex-col justify-start items-start gap-4 flex">
                        <div className="w-6 h-6 relative">
                          {/* SVG removed */}
                        </div>
                        <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                          <p className="lg:max-w-[1090px] w-full text-white text-lg font-normal leading-relaxed md:text-start text-center">
                            They consistently deliver exceptional quality
                            services right on schedule, ensuring our projects
                            proceed smoothly and efficiently. Their commitment
                            to timeliness and excellence sets them apart in our
                            industry, making them our trusted partner for all
                            our service needs.
                          </p>
                          <div className="w-full flex-col justify-center md:items-end items-center gap-1.5 flex">
                            <h6 className="text-white text-base font-semibold leading-relaxed md:text-right text-center">
                              Pooja Sharma
                            </h6>
                            <h6 className="text-right text-gray-400 text-base font-normal leading-relaxed md:text-right text-center">
                              Project Manager At ApexTech Solutions
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide md:flex hidden">
                  <div className="lg:w-fit w-full lg:h-[274px] h-full lg:px-14 px-6 flex-col justify-start items-start gap-2.5 flex">
                    <div className="swiper-slide-box lg:h-[274px] h-full p-6 rounded-xl bg-gray-900 backdrop-blur-sm flex-col justify-start items-start lg:gap-6 gap-10 flex  max-md:pb-12">
                      <div className="w-full flex-col justify-start items-start gap-4 flex">
                        <div className="w-6 h-6 relative">
                          {/* SVG removed */}
                        </div>
                        <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                          <p className="lg:max-w-[1090px] w-full text-white text-lg font-normal leading-relaxed md:text-start text-center">
                            They consistently deliver exceptional quality
                            services right on schedule, ensuring our projects
                            proceed smoothly and efficiently. Their commitment
                            to timeliness and excellence sets them apart in our
                            industry, making them our trusted partner for all
                            our service needs.
                          </p>
                          <div className="w-full flex-col justify-center md:items-end items-center gap-1.5 flex">
                            <h6 className="text-white text-base font-semibold leading-relaxed md:text-right text-center">
                              Suraj Mehta
                            </h6>
                            <h6 className="text-right text-gray-400 text-base font-normal leading-relaxed md:text-right text-center">
                              Project Manager At ApexTech Solutions
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex swiper-pagination" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
