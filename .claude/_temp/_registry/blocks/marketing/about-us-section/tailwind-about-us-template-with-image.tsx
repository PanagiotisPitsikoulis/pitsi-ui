export default function TailwindAboutUsTemplateWithImage() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
          <div className="w-full justify-between items-center gap-7 flex lg:flex-row flex-col">
            <div className="flex-col justify-start lg:items-start items-center gap-3 inline-flex">
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                About Us
              </h2>
              <p className="lg:max-w-3xl w-full text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
                We are dedicated to crafting innovative solutions and delivering
                exceptional service to drive success and growth for our clients.
              </p>
            </div>
            <button className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed whitespace-nowrap">
                Learn More
              </span>
              {/* SVG removed */}
            </button>
          </div>
          <div className="w-full justify-start items-start gap-4 grid lg:grid-cols-2 grid-cols-1">
            <img
              className="w-full lg:h-full h-auto rounded-2xl object-cover"
              src="https://pagedone.io/asset/uploads/1723872854.png"
              alt="About Us image"
            />
            <div className="w-full max-[290px]:p-4 p-8 bg-gray-100 rounded-2xl flex-col justify-start items-start lg:gap-20 gap-5 inline-flex">
              <h3 className="text-gray-900 text-3xl font-bold font-manrope leading-normal sm:text-start text-center">
                How We’ve Transformed to Propel Business
                <span className="text-emerald-600">Success</span>
              </h3>
              <div className="w-full flex-col justify-start items-start gap-6 flex">
                <p className="text-gray-500 text-base font-normal leading-relaxed sm:text-start text-center">
                  Through continuous innovation and strategic adaptation, we've
                  transformed our approach to propel businesses toward greater
                  success and growth.
                </p>
                <div className="w-full justify-start items-start sm:gap-3 gap-4 grid sm:grid-cols-3 grid-cols-1">
                  <div className="w-full flex-col justify-start sm:items-start items-center gap-1 inline-flex">
                    <h4 className="text-gray-900 text-xl font-semibold leading-8">
                      26
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Year of Experience
                    </h6>
                  </div>
                  <div className="w-full flex-col justify-start sm:items-start items-center gap-1 inline-flex">
                    <h4 className="text-gray-900 text-xl font-semibold leading-8">
                      125+
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Completed Project
                    </h6>
                  </div>
                  <div className="w-full flex-col justify-start sm:items-start items-center gap-1 inline-flex">
                    <h4 className="text-gray-900 text-xl font-semibold leading-8">
                      10+
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Award Won
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
