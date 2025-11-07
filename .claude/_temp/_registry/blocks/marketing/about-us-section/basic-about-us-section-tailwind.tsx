export default function BasicAboutUsSectionTailwind() {
  return (
    <section className="relative">
      <div className="w-full px-4 md:px-5 lg:pr-0">
        <div className="w-full ml-auto bg-white flex-col justify-end items-end gap-2.5 flex">
          <div className="w-full justify-end items-center xl:gap-12 gap-10 lg:flex">
            <div className="lg:w-1/2 w-full xl:px-28 lg:py-24 py-10 flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-left text-center">
                  About Us
                </h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-left text-center">
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
              <button className="group py-2 px-4 rounded-lg border border-gray-300 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="pr-1.5 py-px text-gray-900 group-hover:text-gray-800 transition-all duration-700 ease-in-out text-sm font-medium leading-5">
                  Read More
                </span>
                {/* SVG removed */}
              </button>
            </div>
            <img
              className="lg:w-1/2 mx-auto lg:mb-0 mb-10 lg:h-full h-auto object-cover"
              src="https://pagedone.io/asset/uploads/1717751801.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
