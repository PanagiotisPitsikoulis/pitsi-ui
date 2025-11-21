export default function AboutUsSectionTailwind() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="mx-auto flex w-full flex-col items-center justify-start gap-3 sm:max-w-lg lg:max-w-full lg:items-start">
            <span className="text-center text-base leading-relaxed font-medium text-gray-500 lg:text-start">
              About Our Company
            </span>
            <div className="grid w-full grid-cols-1 items-center justify-start gap-6 lg:grid-cols-2 lg:gap-8">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                Innovative Influencer Marketing to Boost Your Business
              </h2>
              <div className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10 lg:justify-end lg:gap-8">
                <div className="inline-flex flex-col items-center justify-start gap-0.5 lg:w-full lg:items-end">
                  <h3 className="font-manrope text-right text-3xl leading-normal font-bold text-blue-600">
                    10k+
                  </h3>
                  <h6 className="text-right text-base leading-relaxed font-normal text-gray-500">
                    Deal with Clients
                  </h6>
                </div>
                <div className="inline-flex flex-col items-center justify-start gap-0.5 lg:w-full lg:items-end">
                  <h3 className="font-manrope text-right text-3xl leading-normal font-bold text-blue-600">
                    1.5k+
                  </h3>
                  <h6 className="text-right text-base leading-relaxed font-normal text-gray-500">
                    Team Members
                  </h6>
                </div>
                <div className="inline-flex flex-col items-center justify-start gap-0.5 lg:w-full lg:items-end">
                  <h3 className="font-manrope text-right text-3xl leading-normal font-bold text-blue-600">
                    24.1k+
                  </h3>
                  <h6 className="text-right text-base leading-relaxed font-normal whitespace-nowrap text-gray-500">
                    Completed Project
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto grid w-full grid-cols-1 items-start justify-start gap-y-8 sm:max-w-lg lg:max-w-full lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
            <img
              className="col-span-12 mx-auto h-auto w-full rounded-3xl object-cover lg:col-span-5 lg:h-full"
              src="https://pagedone.io/asset/uploads/1724136086.png"
              alt="About Us image"
            />
            <div className="col-span-12 inline-flex flex-col items-start justify-center gap-5 lg:col-span-7">
              <div className="grid w-full grid-cols-1 items-start justify-start gap-5 lg:grid-cols-2">
                <div className="group inline-flex w-full flex-col items-start justify-start gap-10 rounded-3xl border border-gray-200 bg-gray-100 p-6 transition-all duration-700 ease-in-out hover:border-transparent hover:bg-blue-100">
                  <div className="flex w-full flex-col items-start justify-start gap-3">
                    <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                      Ad Campaign Strategies
                    </h3>
                    <p className="text-base leading-relaxed font-normal text-gray-500">
                      Our ad campaign strategies are designed to maximize your
                      brand’s reach and impact, ensuring effective engagement
                      and measurable results.
                    </p>
                  </div>
                  <button className="flex items-center justify-center rounded-xl border border-gray-300 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:border-gray-400">
                    <span className="px-2 text-base leading-relaxed font-semibold text-gray-900">
                      Read More
                    </span>
                    {/* SVG removed */}
                  </button>
                </div>
                <div className="group inline-flex w-full flex-col items-start justify-start gap-10 rounded-3xl border border-gray-200 bg-gray-100 p-6 transition-all duration-700 ease-in-out hover:border-transparent hover:bg-blue-100">
                  <div className="flex w-full flex-col items-start justify-start gap-3">
                    <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                      Content Strategy
                    </h3>
                    <p className="text-base leading-relaxed font-normal text-gray-500">
                      Our content strategy focuses on creating engaging,
                      relevant material that drives audience interaction and
                      supports your business goals.
                    </p>
                  </div>
                  <button className="flex items-center justify-center rounded-xl border border-gray-300 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:border-gray-400">
                    <span className="px-2 text-base leading-relaxed font-semibold text-gray-900">
                      Read More
                    </span>
                    {/* SVG removed */}
                  </button>
                </div>
              </div>
              <div className="group flex w-full flex-col items-start justify-start gap-10 rounded-3xl border border-gray-200 bg-gray-100 p-6 transition-all duration-700 ease-in-out hover:border-transparent hover:bg-blue-100">
                <div className="flex w-full flex-col items-start justify-start gap-3">
                  <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                    Business Scaling
                  </h3>
                  <p className="text-base leading-relaxed font-normal text-gray-500">
                    Our expert strategies in business scaling help you expand
                    your operations efficiently, ensuring sustainable growth and
                    increased market presence. Partner with us to elevate your
                    business to new heights.
                  </p>
                </div>
                <button className="flex items-center justify-center rounded-xl border border-gray-300 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out group-hover:border-gray-400">
                  <span className="px-2 text-base leading-relaxed font-semibold text-gray-900">
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
  )
}
