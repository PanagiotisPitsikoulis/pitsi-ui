export default function BasicAboutUsSectionTailwind() {
  return (
    <section className="relative">
      <div className="w-full px-4 md:px-5 lg:pr-0">
        <div className="ml-auto flex w-full flex-col items-end justify-end gap-2.5 bg-white">
          <div className="w-full items-center justify-end gap-10 lg:flex xl:gap-12">
            <div className="inline-flex w-full flex-col items-center justify-center gap-10 py-10 lg:w-1/2 lg:items-start lg:py-24 xl:px-28">
              <div className="flex flex-col items-center justify-start gap-4 lg:items-start">
                <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-left">
                  About Us
                </h2>
                <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-left">
                  InnovateTech Solutions, founded in 2010, is dedicated to
                  revolutionizing the tech industry with cutting-edge solutions.
                  We have grown into a global leader by consistently delivering
                  top-quality products and exceptional customer service. <br />
                  <br />
                  Our passionate team is committed to innovation, integrity, and
                  sustainability, ensuring we meet and exceed our clients'
                  expectations. Partner with InnovateTech Solutions for a
                  future-focused and reliable technology experience.
                </p>
              </div>
              <button className="group flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                <span className="py-px pr-1.5 text-sm leading-5 font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-gray-800">
                  Read More
                </span>
                {/* SVG removed */}
              </button>
            </div>
            <img
              className="mx-auto mb-10 h-auto object-cover lg:mb-0 lg:h-full lg:w-1/2"
              src="https://pagedone.io/asset/uploads/1717751801.png"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
