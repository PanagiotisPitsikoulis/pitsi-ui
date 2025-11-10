export default function TailwindCssVerticalTestimonialCarouselWithCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-9 lg:grid-cols-2 lg:gap-16">
          <div className="flex h-full w-full items-center">
            <div className="block">
              <div className="mb-4 text-sm font-medium text-indigo-600">
                Testimonial
              </div>
              <h2 className="font-manrope mb-4 text-4xl leading-snug font-bold text-gray-900">
                The Strategic Imperative of Hiring Tech Talent through.
              </h2>
              <p className="mb-14 text-base font-normal text-gray-600">
                Leveraging Knowledge, Expertise, Advice, and Confidence in Tech
                Talent Acquisition through Teamway
              </p>
              <button className="flex items-center justify-center gap-2 rounded-full bg-indigo-50 py-3.5 pr-5 pl-7 text-base font-semibold text-indigo-600 shadow-sm shadow-transparent transition-all duration-300 hover:bg-indigo-100 hover:shadow-indigo-300">
                View all testimonials
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="flex flex-col items-center gap-4 rounded-3xl bg-blue-700 p-9 sm:flex-row">
                  <div className="block">
                    {/* SVG removed */}
                    <div className="flex items-center justify-between gap-9">
                      <p className="my-6 text-lg font-normal text-white">
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
                <div className="flex flex-col items-center gap-4 rounded-3xl bg-cyan-700 p-9 sm:flex-row">
                  <div className="block">
                    {/* SVG removed */}
                    <div className="my-6 flex items-center justify-between gap-9">
                      <p className="text-lg font-normal text-white">
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
                <div className="flex flex-col items-center gap-4 rounded-3xl bg-blue-700 p-9 sm:flex-row">
                  <div className="block">
                    {/* SVG removed */}
                    <div className="flex items-center justify-between gap-9">
                      <p className="my-6 text-lg font-normal text-white">
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
                <div className="flex flex-col items-center gap-4 rounded-3xl bg-cyan-700 p-9 sm:flex-row">
                  <div className="block">
                    {/* SVG removed */}
                    <div className="my-6 flex items-center justify-between gap-9">
                      <p className="text-lg font-normal text-white">
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
  )
}
