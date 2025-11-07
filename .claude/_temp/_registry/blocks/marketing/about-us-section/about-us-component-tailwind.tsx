export default function AboutUsComponentTailwind() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="lg:max-w-full sm:max-w-lg w-full mx-auto justify-start items-center lg:gap-7 gap-4 flex lg:flex-row flex-col">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 inline-flex">
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                About Us
              </h2>
              <p className="lg:max-w-3xl w-full text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
                We are experts in civil engineering, dedicated to creating
                innovative and sustainable infrastructure that enhances
                communities.
              </p>
            </div>
            <button className="sm:w-fit w-full px-5 py-2.5 bg-amber-400 hover:bg-amber-500 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-2 py-px text-gray-900 text-base font-semibold leading-relaxed whitespace-nowrap">
                Get Started
              </span>
              {/* SVG removed */}
            </button>
          </div>
          <div className="lg:max-w-full sm:max-w-lg w-full mx-auto justify-start items-start xl:gap-8 lg:gap-x-4 lg:gap-y-0 gap-y-6 grid lg:grid-cols-12 grid-cols-1">
            <div className="xl:col-span-4 lg:col-span-3 col-span-12 w-full xl:p-5 lg:p-3 p-5 rounded-2xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-5 inline-flex">
              <img
                className="rounded-xl w-full h-auto object-cover"
                src="https://pagedone.io/asset/uploads/1724131218.png"
                alt="About Us image"
              />
              <div className="w-full flex-col justify-start items-start gap-8 flex">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                    Building a Sustainable Future
                  </h3>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">
                    We excel in civil engineering and construction, delivering
                    innovative and sustainable solutions with a focus on
                    quality, safety, and efficiency.
                  </p>
                </div>
                <button className="sm:w-fit w-full px-3.5 py-2 bg-gray-900 hover:bg-gray-700 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    Learn More
                  </span>
                  {/* SVG removed */}
                </button>
              </div>
            </div>
            <div className="xl:col-span-8 lg:col-span-9 col-span-12 w-full xl:p-5 lg:p-3 p-5 rounded-2xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-start gap-6 flex lg:flex-row flex-col">
              <img
                className="rounded-xl lg:w-auto w-full h-auto object-cover"
                src="https://pagedone.io/asset/uploads/1724131231.png"
                alt="About Us image"
              />
              <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
                <div className="w-full flex-col justify-start items-start gap-6 flex">
                  <div className="w-full flex-col justify-start items-start gap-2 flex">
                    <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                      Transforming Landscapes with Expert Engineering
                    </h3>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      We design and build innovative, resilient infrastructure
                      that supports thriving communities.
                    </p>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-5 grid sm:grid-cols-2 grid-cols-1">
                    <div className="p-2.5 bg-white rounded-lg border border-gray-200 flex-col justify-start items-start gap-0.5 inline-flex">
                      <h3 className="text-amber-400 text-2xl font-bold font-manrope leading-9">
                        20+
                      </h3>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        Years Experience
                      </h6>
                    </div>
                    <div className="p-2.5 bg-white rounded-lg border border-gray-200 flex-col justify-start items-start gap-0.5 inline-flex">
                      <h3 className="text-amber-400 text-2xl font-bold font-manrope leading-9">
                        135+
                      </h3>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        Project Completed
                      </h6>
                    </div>
                    <div className="p-2.5 bg-white rounded-lg border border-gray-200 flex-col justify-start items-start gap-0.5 inline-flex">
                      <h3 className="text-amber-400 text-2xl font-bold font-manrope leading-9">
                        120+
                      </h3>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        Qualified Workers
                      </h6>
                    </div>
                    <div className="p-2.5 bg-white rounded-lg border border-gray-200 flex-col justify-start items-start gap-0.5 inline-flex">
                      <h3 className="text-amber-400 text-2xl font-bold font-manrope leading-9">
                        50+
                      </h3>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        Satisfied Clients
                      </h6>
                    </div>
                  </div>
                </div>
                <button className="sm:w-fit w-full px-3.5 py-2 bg-gray-900 hover:bg-gray-700 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
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
  );
}
