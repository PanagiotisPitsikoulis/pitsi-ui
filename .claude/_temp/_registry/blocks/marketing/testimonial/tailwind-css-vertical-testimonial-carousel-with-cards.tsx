export default function TailwindCssVerticalTestimonialCarouselWithCards() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-16">
          <div className="flex items-center w-full h-full">
            <div className="block">
              <div className="text-sm font-medium text-indigo-600 mb-4">
                Testimonial
              </div>
              <h2 className="font-manrope font-bold text-4xl leading-snug text-gray-900 mb-4">
                The Strategic Imperative of Hiring Tech Talent through.
              </h2>
              <p className="text-base font-normal text-gray-600 mb-14">
                Leveraging Knowledge, Expertise, Advice, and Confidence in Tech
                Talent Acquisition through Teamway
              </p>
              <button className="rounded-full flex items-center justify-center gap-2 py-3.5 pr-5 pl-7 bg-indigo-50 text-base font-semibold text-indigo-600 shadow-sm shadow-transparent transition-all duration-300 hover:shadow-indigo-300 hover:bg-indigo-100">
                View all testimonials
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="rounded-3xl p-9 bg-blue-700 flex flex-col gap-4 items-center sm:flex-row">
                  <div className="block">
                    {/* SVG removed */}
                    <div className="flex items-center justify-between gap-9 ">
                      <p className="text-lg font-normal text-white my-6">
                        This innovative solution offers unparalleled ease of
                        use, allowing businesses to swiftly onboard exceptional
                        developers and seamlessly integrate.
                      </p>
                    </div>
                    <h6 className="text-lg font-medium text-white capitalize">
                      Isabella Martinez
                    </h6>
                  </div>
                  <img
                    src="https://pagedone.io/asset/uploads/1711608542.png"
                    alt="avatar-image"
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="rounded-3xl p-9 bg-cyan-700 flex flex-col gap-4 items-center sm:flex-row">
                  <div className="block">
                    {/* SVG removed */}
                    <div className="flex items-center justify-between gap-9 my-6">
                      <p className="text-lg font-normal text-white ">
                        Our platform simplifies the hiring process, saving you
                        valuable time and effort. Say goodbye to the frustration
                        of sifting through countless resumes.
                      </p>
                    </div>
                    <h6 className="text-lg font-medium text-white capitalize">
                      Matthew Bennett
                    </h6>
                  </div>
                  <img
                    src="https://pagedone.io/asset/uploads/1711608557.png"
                    alt="avatar-image"
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="rounded-3xl p-9 bg-blue-700 flex flex-col gap-4 items-center sm:flex-row">
                  <div className="block">
                    {/* SVG removed */}
                    <div className="flex items-center justify-between gap-9 ">
                      <p className="text-lg font-normal text-white my-6">
                        This innovative solution offers unparalleled ease of
                        use, allowing businesses to swiftly onboard exceptional
                        developers and seamlessly integrate.
                      </p>
                    </div>
                    <h6 className="text-lg font-medium text-white capitalize">
                      Isabella Martinez
                    </h6>
                  </div>
                  <img
                    src="https://pagedone.io/asset/uploads/1711608542.png"
                    alt="avatar-image"
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="rounded-3xl p-9 bg-cyan-700 flex flex-col gap-4 items-center sm:flex-row">
                  <div className="block">
                    {/* SVG removed */}
                    <div className="flex items-center justify-between gap-9 my-6">
                      <p className="text-lg font-normal text-white ">
                        Our platform simplifies the hiring process, saving you
                        valuable time and effort. Say goodbye to the frustration
                        of sifting through countless resumes.
                      </p>
                    </div>
                    <h6 className="text-lg font-medium text-white capitalize">
                      Matthew Bennett
                    </h6>
                  </div>
                  <img
                    src="https://pagedone.io/asset/uploads/1711608557.png"
                    alt="avatar-image"
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </div>
    </section>
  );
}
