export default function AboutUsSectionTailwind() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="lg:max-w-full sm:max-w-lg w-full mx-auto flex-col justify-start lg:items-start items-center gap-3 flex">
            <span className="text-gray-500 text-base font-medium leading-relaxed lg:text-start text-center">
              About Our Company
            </span>
            <div className="w-full justify-start items-center lg:gap-8 gap-6 grid lg:grid-cols-2 grid-cols-1">
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Innovative Influencer Marketing to Boost Your Business
              </h2>
              <div className="w-full lg:justify-end justify-center items-center lg:gap-8 sm:gap-10 gap-6 flex sm:flex-row flex-col">
                <div className="lg:w-full flex-col justify-start lg:items-end items-center gap-0.5 inline-flex">
                  <h3 className="text-right text-blue-600 text-3xl font-bold font-manrope leading-normal">
                    10k+
                  </h3>
                  <h6 className="text-right text-gray-500 text-base font-normal leading-relaxed">
                    Deal with Clients
                  </h6>
                </div>
                <div className="lg:w-full flex-col justify-start lg:items-end items-center gap-0.5 inline-flex">
                  <h3 className="text-right text-blue-600 text-3xl font-bold font-manrope leading-normal">
                    1.5k+
                  </h3>
                  <h6 className="text-right text-gray-500 text-base font-normal leading-relaxed">
                    Team Members
                  </h6>
                </div>
                <div className="lg:w-full flex-col justify-start lg:items-end items-center gap-0.5 inline-flex">
                  <h3 className="text-right text-blue-600 text-3xl font-bold font-manrope leading-normal">
                    24.1k+
                  </h3>
                  <h6 className="text-right text-gray-500 text-base font-normal leading-relaxed whitespace-nowrap">
                    Completed Project
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:max-w-full sm:max-w-lg w-full mx-auto justify-start items-start lg:gap-x-8 lg:gap-y-0 gap-y-8 grid lg:grid-cols-12 grid-cols-1">
            <img
              className="lg:col-span-5 col-span-12 w-full mx-auto rounded-3xl lg:h-full h-auto object-cover"
              src="https://pagedone.io/asset/uploads/1724136086.png"
              alt="About Us image"
            />
            <div className="lg:col-span-7 col-span-12 flex-col justify-center items-start gap-5 inline-flex">
              <div className="w-full justify-start items-start gap-5 grid lg:grid-cols-2 grid-cols-1">
                <div className="group w-full p-6 bg-gray-100 hover:bg-blue-100 transition-all duration-700 ease-in-out rounded-3xl border border-gray-200 hover:border-transparent flex-col justify-start items-start gap-10 inline-flex">
                  <div className="w-full flex-col justify-start items-start gap-3 flex">
                    <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                      Ad Campaign Strategies
                    </h3>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Our ad campaign strategies are designed to maximize your
                      brand’s reach and impact, ensuring effective engagement
                      and measurable results.
                    </p>
                  </div>
                  <button className="px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 group-hover:border-gray-400 transition-all duration-700 ease-in-out justify-center items-center flex">
                    <span className="px-2 text-gray-900 text-base font-semibold leading-relaxed">
                      Read More
                    </span>
                    {/* SVG removed */}
                  </button>
                </div>
                <div className="group w-full p-6 bg-gray-100 hover:bg-blue-100 transition-all duration-700 ease-in-out rounded-3xl border border-gray-200 hover:border-transparent flex-col justify-start items-start gap-10 inline-flex">
                  <div className="w-full flex-col justify-start items-start gap-3 flex">
                    <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                      Content Strategy
                    </h3>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Our content strategy focuses on creating engaging,
                      relevant material that drives audience interaction and
                      supports your business goals.
                    </p>
                  </div>
                  <button className="px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 group-hover:border-gray-400 transition-all duration-700 ease-in-out justify-center items-center flex">
                    <span className="px-2 text-gray-900 text-base font-semibold leading-relaxed">
                      Read More
                    </span>
                    {/* SVG removed */}
                  </button>
                </div>
              </div>
              <div className="group w-full p-6 bg-gray-100 hover:bg-blue-100 transition-all duration-700 ease-in-out rounded-3xl border border-gray-200 hover:border-transparent flex-col justify-start items-start gap-10 flex">
                <div className="w-full flex-col justify-start items-start gap-3 flex">
                  <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                    Business Scaling
                  </h3>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">
                    Our expert strategies in business scaling help you expand
                    your operations efficiently, ensuring sustainable growth and
                    increased market presence. Partner with us to elevate your
                    business to new heights.
                  </p>
                </div>
                <button className="px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 group-hover:border-gray-400 transition-all duration-700 ease-in-out justify-center items-center flex">
                  <span className="px-2 text-gray-900 text-base font-semibold leading-relaxed">
                    Read More
                  </span>
                  {/* SVG removed */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
