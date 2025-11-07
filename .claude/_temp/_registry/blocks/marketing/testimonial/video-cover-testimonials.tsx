export default function VideoCoverTestimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-2.5 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Testimonials
            </h2>
            <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
              Get insights into our customers' success stories and the
              difference our services have made.
            </p>
          </div>
          <div className="w-full flex-col justify-start items-start gap-10 flex">
            <div className="w-full rounded-2xl flex-col justify-center items-center gap-2.5 flex">
              <img
                src="https://pagedone.io/asset/uploads/1721021495.png"
                alt="Testimonial image"
                className="relative lg:h-full h-auto rounded-2xl object-cover"
              />
              <div className="flex-col justify-center items-center gap-2.5 flex absolute w-28 h-28 p-2 bg-indigo-300 rounded-full">
                <div
                  id="circle"
                  className="rounded-full justify-center items-center gap-2.5 inline-flex"
                >
                  {/* SVG removed */}
                </div>
                <a className="absolute flex items-center">
                  {/* SVG removed */}
                </a>
              </div>
            </div>
            <div className="w-full flex-col justify-start md:items-start items-center gap-5 flex">
              <p className="text-gray-500 text-lg font-normal leading-relaxed md:text-start text-center">
                “ Their innovative approach has transformed our operations,
                saving us time and effort. We've experienced substantial
                improvements in our processes and overall efficiency. This has
                allowed us to focus more on strategic initiatives and growth. ”
              </p>
              <div className="w-full flex-col justify-center md:items-start items-center md:gap-2.5 gap-3 flex">
                <div className="w-full justify-between items-center md:gap-1.5 gap-2 flex md:flex-row flex-col">
                  <h6 className="text-gray-900 text-base font-semibold leading-relaxed md:text-start text-center">
                    Krishna Seth
                  </h6>
                  <h6 className="text-right text-gray-900 text-base font-normal leading-relaxed md:text-start text-center">
                    Project Manager At ApexTech Solutions
                  </h6>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
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
  );
}
