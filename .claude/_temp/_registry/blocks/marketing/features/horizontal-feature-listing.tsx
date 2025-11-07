export default function HorizontalFeatureListing() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full justify-start items-center xl:gap-24 lg:gap-12 gap-3 grid lg:grid-cols-2 grid-cols-1">
            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
              Building Excellence is your reliable partner.
            </h2>
            <div className="flex-col justify-start lg:items-start items-center lg:gap-5 gap-3 inline-flex">
              <p className="text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
                Building Excellence stands as your steadfast partner in the
                construction industry, dedicated to delivering exceptional
                outcomes.
              </p>
              <button className="group py-2.5 rounded-full justify-center items-center flex">
                <span className="pr-2 py-px text-orange-600 text-base font-semibold leading-relaxed">
                  Get Started
                </span>
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="flex-col justify-start items-start lg:gap-10 md:gap-7 gap-5 flex">
            <div className="lg:pb-10 md:pb-7 pb-5 border-b border-gray-300 justify-start items-center lg:gap-9 gap-4 grid md:grid-cols-4 grid-cols-1">
              <img
                className="rounded-xl w-full lg:h-full h-auto object-cover"
                src="https://pagedone.io/asset/uploads/1725278564.png"
                alt="Renovation Building Feature image"
              />
              <h3 className="text-black text-2xl font-medium font-manrope leading-9 md:text-start text-center">
                Green Renovation Building
              </h3>
              <p className="text-gray-500 text-lg font-normal leading-relaxed md:text-start text-center">
                Our skilled team delivers high-quality craftsmanship and
                personalized service. We bring your vision.
              </p>
              <div className="md:justify-end justify-center items-center flex">
                <button className="sm:w-fit w-full px-3.5 py-2 bg-orange-600 hover:bg-orange-700 transition-all duration-700 ease-in-out rounded-lg justify-center items-center flex">
                  <span className="px-1.5 text-white text-sm font-medium leading-6 whitespace-nowrap">
                    Lets get started
                  </span>
                </button>
              </div>
            </div>
            <div className="lg:pb-10 md:pb-7 pb-5 border-b border-gray-300 justify-start items-center lg:gap-9 gap-4 grid md:grid-cols-4">
              <img
                className="rounded-xl w-full lg:h-full h-auto object-cover"
                src="https://pagedone.io/asset/uploads/1725278574.png"
                alt="Solar Panel Install Feature image"
              />
              <h2 className="lg:w-[170px] w-full text-black text-2xl font-medium font-manrope leading-9 md:text-start text-center">
                Solar Panel Install
              </h2>
              <p className="text-gray-500 text-lg font-normal leading-relaxed md:text-start text-center">
                Our skilled team delivers high-quality craftsmanship and
                personalized service. We bring your vision.
              </p>
              <div className="md:justify-end justify-center items-center flex">
                <button className="sm:w-fit w-full px-3.5 py-2 bg-orange-600 hover:bg-orange-700 transition-all duration-700 ease-in-out rounded-lg justify-center items-center flex">
                  <span className="px-1.5 text-white text-sm font-medium leading-6 whitespace-nowrap">
                    Lets get started
                  </span>
                </button>
              </div>
            </div>
            <div className="lg:pb-10 md:pb-7 pb-5 border-b border-gray-300 justify-start items-center lg:gap-9 gap-4 grid md:grid-cols-4">
              <img
                className="rounded-xl w-full lg:h-full h-auto object-cover"
                src="https://pagedone.io/asset/uploads/1725278586.png"
                alt="Tiles Renovation Services Feature Image"
              />
              <h2 className="text-black text-2xl font-medium font-manrope leading-9 md:text-start text-center">
                Tiles Renovation Services
              </h2>
              <p className="text-gray-500 text-lg font-normal leading-relaxed md:text-start text-center">
                Whether for kitchens, bathrooms, or any other area, our skilled
                team ensures precision, quality craftsmanship.
              </p>
              <div className="md:justify-end justify-center items-center flex">
                <button className="sm:w-fit w-full px-3.5 py-2 bg-orange-600 hover:bg-orange-700 transition-all duration-700 ease-in-out rounded-lg justify-center items-center flex">
                  <span className="px-1.5 text-white text-sm font-medium leading-6 whitespace-nowrap">
                    Lets get started
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
