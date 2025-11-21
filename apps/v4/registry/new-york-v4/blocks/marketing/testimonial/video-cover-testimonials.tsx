export default function VideoCoverTestimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="flex w-full flex-col items-center justify-start gap-2.5">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Testimonials
            </h2>
            <p className="text-center text-base leading-relaxed font-normal text-gray-500">
              Get insights into our customers' success stories and the
              difference our services have made.
            </p>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-10">
            <div className="flex w-full flex-col items-center justify-center gap-2.5 rounded-2xl">
              <img
                src="https://pagedone.io/asset/uploads/1721021495.png"
                alt="Testimonial image"
                className="relative h-auto rounded-2xl object-cover lg:h-full"
              />
              <div className="absolute flex h-28 w-28 flex-col items-center justify-center gap-2.5 rounded-full bg-indigo-300 p-2">
                <div
                  id="circle"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full"
                >
                  {/* SVG removed */}
                </div>
                <a className="absolute flex items-center">
                  {/* SVG removed */}
                </a>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-5 md:items-start">
              <p className="text-center text-lg leading-relaxed font-normal text-gray-500 md:text-start">
                “ Their innovative approach has transformed our operations,
                saving us time and effort. We've experienced substantial
                improvements in our processes and overall efficiency. This has
                allowed us to focus more on strategic initiatives and growth. ”
              </p>
              <div className="flex w-full flex-col items-center justify-center gap-3 md:items-start md:gap-2.5">
                <div className="flex w-full flex-col items-center justify-between gap-2 md:flex-row md:gap-1.5">
                  <h6 className="text-center text-base leading-relaxed font-semibold text-gray-900 md:text-start">
                    Krishna Seth
                  </h6>
                  <h6 className="text-center text-right text-base leading-relaxed font-normal text-gray-900 md:text-start">
                    Project Manager At ApexTech Solutions
                  </h6>
                </div>
                <div className="inline-flex items-center justify-start gap-2">
                  <a href="#">{/* SVG removed */}</a>
                  <a href="#">{/* SVG removed */}</a>
                  <a href="#">{/* SVG removed */}</a>
                  <a href="#">{/* SVG removed */}</a>
                  <a href="#">{/* SVG removed */}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
