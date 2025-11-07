export default function TailwindCssAboutUsWithTab() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start gap-12 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              About Us
            </h2>
            <p className="lg:max-w-3xl w-full text-center text-gray-500 text-lg font-normal leading-relaxed">
              Your trusted partner in the digital realm, we specialize in
              creating products that not only look stunning but also deliver
              seamless user experiences.
            </p>
          </div>
          <div>
            <div className="tabs">
              <div className="flex w-full items-center justify-center overflow-auto">
                <ul className="w-full flex sm:gap-8 gap-4 sm:flex-row flex-col items-center justify-center transition-all duration-700 ease-in-out lg:mb-0 mb-3">
                  <li>
                    <a
                      className="group w-full flex items-center justify-center pb-2.5 border-b border-transparent text-gray-400 text-base font-medium leading-relaxed transition-all duration-700 ease-in-out w-full hover:text-indigo-600 hover:border-indigo-600 whitespace-nowrap tab-active:border-indigo-600 tab-active:text-indigo-600 tablink"
                      data-tab="tabs-with-pill-1"
                      role="tab"
                    >
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a
                      className="group w-full flex items-center justify-center pb-2.5 border-b border-transparent text-gray-400 text-base font-medium leading-relaxed transition-all duration-700 ease-in-out w-full hover:text-indigo-600 hover:border-indigo-600 whitespace-nowrap tab-active:border-indigo-600 tab-active:text-indigo-600 tablink active"
                      data-tab="tabs-with-pill-2"
                      role="tab"
                    >
                      Our Mission
                    </a>
                  </li>
                  <li>
                    <a
                      className="group w-full flex items-center justify-center pb-2.5 border-b border-transparent text-gray-400 text-base font-medium leading-relaxed transition-all duration-700 ease-in-out w-full hover:text-indigo-600 hover:border-indigo-600 whitespace-nowrap tab-active:border-indigo-600 tab-active:text-indigo-600 tablink"
                      data-tab="tabs-with-pill-3"
                      role="tab"
                    >
                      Our Vision
                    </a>
                  </li>
                </ul>
              </div>
              <div className="lg:pt-10 pt-6">
                <div
                  id="tabs-with-pill-1"
                  role="tabpanel"
                  aria-labelledby="tabs-with-pill-item-1"
                  className="hidden tabcontent"
                >
                  <div className="w-full justify-start items-center lg:gap-9 gap-7 flex lg:flex-row flex-col">
                    <img
                      className="rounded-2xl object-cover"
                      src="https://pagedone.io/asset/uploads/1724134939.png"
                      alt="About Us image"
                    />
                    <div className="w-full pt-2.5 flex-col justify-start lg:items-start items-center lg:gap-10 gap-6 inline-flex">
                      <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                        <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9 lg:text-start text-center">
                          Driving Success Through Innovation and Sustainable,
                          Customer-Focused Solutions
                        </h3>
                        <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                          Our mission is to provide innovative and sustainable
                          solutions that drive success and growth for our
                          clients. We are dedicated to excellence, integrity,
                          and customer satisfaction in every project we
                          undertake. By leveraging cutting-edge technology and
                          industry expertise, we ensure impactful results and
                          long-term partnerships.
                        </p>
                      </div>
                      <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                          Get Started
                        </span>
                        {/* SVG removed */}
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  id="tabs-with-pill-2"
                  className="tabcontent"
                  role="tabpanel"
                  aria-labelledby="tabs-with-pill-item-2"
                >
                  <div className="w-full justify-start items-center lg:gap-9 gap-7 flex lg:flex-row flex-col">
                    <img
                      className="rounded-2xl object-cover"
                      src="https://pagedone.io/asset/uploads/1724134939.png"
                      alt="About Us image"
                    />
                    <div className="w-full pt-2.5 flex-col justify-start lg:items-start items-center lg:gap-10 gap-6 inline-flex">
                      <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                        <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9 lg:text-start text-center">
                          Driving Success Through Innovation and Sustainable,
                          Customer-Focused Solutions
                        </h3>
                        <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                          Our mission is to provide innovative and sustainable
                          solutions that drive success and growth for our
                          clients. We are dedicated to excellence, integrity,
                          and customer satisfaction in every project we
                          undertake. By leveraging cutting-edge technology and
                          industry expertise, we ensure impactful results and
                          long-term partnerships.
                        </p>
                      </div>
                      <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                          Get Started
                        </span>
                        {/* SVG removed */}
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  id="tabs-with-pill-3"
                  className="hidden tabcontent"
                  role="tabpanel"
                  aria-labelledby="tabs-with-pill-item-3"
                >
                  <div className="w-full justify-start items-center lg:gap-9 gap-7 flex lg:flex-row flex-col">
                    <img
                      className="rounded-2xl object-cover"
                      src="https://pagedone.io/asset/uploads/1724134939.png"
                      alt="About Us image"
                    />
                    <div className="w-full pt-2.5 flex-col justify-start lg:items-start items-center lg:gap-10 gap-6 inline-flex">
                      <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                        <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9 lg:text-start text-center">
                          Driving Success Through Innovation and Sustainable,
                          Customer-Focused Solutions
                        </h3>
                        <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                          Our mission is to provide innovative and sustainable
                          solutions that drive success and growth for our
                          clients. We are dedicated to excellence, integrity,
                          and customer satisfaction in every project we
                          undertake. By leveraging cutting-edge technology and
                          industry expertise, we ensure impactful results and
                          long-term partnerships.
                        </p>
                      </div>
                      <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                          Get Started
                        </span>
                        {/* SVG removed */}
                      </button>
                    </div>
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
