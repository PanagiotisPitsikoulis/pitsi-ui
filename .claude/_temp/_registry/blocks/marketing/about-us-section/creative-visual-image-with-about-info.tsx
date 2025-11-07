export default function CreativeVisualImageWithAboutInfo() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="justify-start items-center gap-9 flex xl:flex-row flex-col">
          <div className="max-w-[620px] mx-auto w-full lg:justify-start justify-center items-center gap-5 grid grid-cols-2">
            <img
              className="w-full h-full rounded-full object-cover"
              src="https://pagedone.io/asset/uploads/1724149012.png"
              alt="About Us image"
            />
            <div className="w-full flex-col justify-start items-start gap-5 flex">
              <img
                className="lg:w-full w-auto h-auto object-cover rounded-tl-full rounded-tr-full rounded-bl-3xl rounded-br-full"
                src="https://pagedone.io/asset/uploads/1724149022.png"
                alt="About Us image"
              />
              <img
                className="lg:w-full w-auto h-auto object-cover rounded-tl-3xl rounded-tr-full rounded-bl-full rounded-br-full"
                src="https://pagedone.io/asset/uploads/1724149032.png"
                alt="About Us image"
              />
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-10 inline-flex">
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-1.5 flex">
                  <h5 className="text-indigo-600 text-lg font-normal leading-relaxed lg:text-start text-center">
                    WHO WE ARE
                  </h5>
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Bringing You Flavors That Delight
                  </h2>
                </div>
                <p className="lg:max-w-[560px] w-full text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  Experience a culinary journey like no other with our menu,
                  where every dish is crafted to delight your senses. We’re
                  dedicated to bringing you flavors that excite, with fresh
                  ingredients and authentic recipes that leave a lasting
                  impression.
                </p>
              </div>
              <div className="w-full flex-col justify-center items-start gap-5 grid sm:grid-cols-2 grid-cols-1">
                <div className="w-full px-5 py-3 bg-white rounded-2xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] border border-gray-200 justify-start items-center gap-2.5 flex">
                  <h3 className="text-center text-indigo-600 text-2xl font-bold font-manrope leading-9">
                    90%
                  </h3>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Repeat Customer
                  </h6>
                </div>
                <div className="w-full px-5 py-3 bg-white rounded-2xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] border border-gray-200 justify-start items-center gap-2.5 flex">
                  <h3 className="text-center text-indigo-600 text-2xl font-bold font-manrope leading-9">
                    94%
                  </h3>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Freshness &amp; Quality
                  </h6>
                </div>
                <div className="w-full px-5 py-3 bg-white rounded-2xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] border border-gray-200 justify-start items-center gap-2.5 flex">
                  <h3 className="text-indigo-600 text-2xl font-bold font-manrope leading-9">
                    20
                    <span className="text-xl font-medium font-inter leading-8">
                      min
                    </span>
                  </h3>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Min. Delivery Time
                  </h6>
                </div>
                <div className="w-full px-5 py-3 bg-white rounded-2xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] border border-gray-200 justify-start items-center gap-2.5 flex">
                  <h3 className="text-center text-indigo-600 text-2xl font-bold font-manrope leading-9">
                    500+
                  </h3>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Positive Review
                  </h6>
                </div>
              </div>
            </div>
            <button className="sm:w-fit w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-2 py-px text-white text-lg font-semibold leading-relaxed">
                Learn More
              </span>
              {/* SVG removed */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
