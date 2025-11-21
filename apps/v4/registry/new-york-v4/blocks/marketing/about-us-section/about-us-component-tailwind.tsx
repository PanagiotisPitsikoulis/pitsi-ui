export default function AboutUsComponentTailwind() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="mx-auto flex w-full flex-col items-center justify-start gap-4 sm:max-w-lg lg:max-w-full lg:flex-row lg:gap-7">
            <div className="inline-flex w-full flex-col items-center justify-start gap-3 lg:items-start">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                About Us
              </h2>
              <p className="w-full text-center text-lg leading-relaxed font-normal text-gray-500 lg:max-w-3xl lg:text-start">
                We are experts in civil engineering, dedicated to creating
                innovative and sustainable infrastructure that enhances
                communities.
              </p>
            </div>
            <button className="flex w-full items-center justify-center rounded-xl bg-amber-400 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-amber-500 sm:w-fit">
              <span className="px-2 py-px text-base leading-relaxed font-semibold whitespace-nowrap text-gray-900">
                Get Started
              </span>
              {/* SVG removed */}
            </button>
          </div>
          <div className="mx-auto grid w-full grid-cols-1 items-start justify-start gap-y-6 sm:max-w-lg lg:max-w-full lg:grid-cols-12 lg:gap-x-4 lg:gap-y-0 xl:gap-8">
            <div className="col-span-12 inline-flex w-full flex-col items-start justify-start gap-5 rounded-2xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-gray-400 lg:col-span-3 lg:p-3 xl:col-span-4 xl:p-5">
              <img
                className="h-auto w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1724131218.png"
                alt="About Us image"
              />
              <div className="flex w-full flex-col items-start justify-start gap-8">
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <h3 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                    Building a Sustainable Future
                  </h3>
                  <p className="text-base leading-relaxed font-normal text-gray-500">
                    We excel in civil engineering and construction, delivering
                    innovative and sustainable solutions with a focus on
                    quality, safety, and efficiency.
                  </p>
                </div>
                <button className="flex w-full items-center justify-center rounded-lg bg-gray-900 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-700 sm:w-fit">
                  <span className="px-1.5 text-sm leading-6 font-medium text-white">
                    Learn More
                  </span>
                  {/* SVG removed */}
                </button>
              </div>
            </div>
            <div className="col-span-12 flex w-full flex-col items-start justify-start gap-6 rounded-2xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-gray-400 lg:col-span-9 lg:flex-row lg:p-3 xl:col-span-8 xl:p-5">
              <img
                className="h-auto w-full rounded-xl object-cover lg:w-auto"
                src="https://pagedone.io/asset/uploads/1724131231.png"
                alt="About Us image"
              />
              <div className="inline-flex w-full flex-col items-start justify-start gap-8">
                <div className="flex w-full flex-col items-start justify-start gap-6">
                  <div className="flex w-full flex-col items-start justify-start gap-2">
                    <h3 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                      Transforming Landscapes with Expert Engineering
                    </h3>
                    <p className="text-base leading-relaxed font-normal text-gray-500">
                      We design and build innovative, resilient infrastructure
                      that supports thriving communities.
                    </p>
                  </div>
                  <div className="grid w-full grid-cols-1 flex-col items-start justify-start gap-5 sm:grid-cols-2">
                    <div className="inline-flex flex-col items-start justify-start gap-0.5 rounded-lg border border-gray-200 bg-white p-2.5">
                      <h3 className="font-manrope text-2xl leading-9 font-bold text-amber-400">
                        20+
                      </h3>
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        Years Experience
                      </h6>
                    </div>
                    <div className="inline-flex flex-col items-start justify-start gap-0.5 rounded-lg border border-gray-200 bg-white p-2.5">
                      <h3 className="font-manrope text-2xl leading-9 font-bold text-amber-400">
                        135+
                      </h3>
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        Project Completed
                      </h6>
                    </div>
                    <div className="inline-flex flex-col items-start justify-start gap-0.5 rounded-lg border border-gray-200 bg-white p-2.5">
                      <h3 className="font-manrope text-2xl leading-9 font-bold text-amber-400">
                        120+
                      </h3>
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        Qualified Workers
                      </h6>
                    </div>
                    <div className="inline-flex flex-col items-start justify-start gap-0.5 rounded-lg border border-gray-200 bg-white p-2.5">
                      <h3 className="font-manrope text-2xl leading-9 font-bold text-amber-400">
                        50+
                      </h3>
                      <h6 className="text-base leading-relaxed font-normal text-gray-500">
                        Satisfied Clients
                      </h6>
                    </div>
                  </div>
                </div>
                <button className="flex w-full items-center justify-center rounded-lg bg-gray-900 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-700 sm:w-fit">
                  <span className="px-1.5 text-sm leading-6 font-medium text-white">
                    Learn More
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
