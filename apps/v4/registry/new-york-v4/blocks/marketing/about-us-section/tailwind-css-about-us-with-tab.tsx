export default function TailwindCssAboutUsWithTab() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-3">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              About Us
            </h2>
            <p className="w-full text-center text-lg leading-relaxed font-normal text-gray-500 lg:max-w-3xl">
              Your trusted partner in the digital realm, we specialize in
              creating products that not only look stunning but also deliver
              seamless user experiences.
            </p>
          </div>
          <div>
            <div className="tabs">
              <div className="flex w-full items-center justify-center overflow-auto">
                <ul className="mb-3 flex w-full flex-col items-center justify-center gap-4 transition-all duration-700 ease-in-out sm:flex-row sm:gap-8 lg:mb-0">
                  <li>
                    <a
                      className="group tab-active:border-indigo-600 tab-active:text-indigo-600 tablink flex w-full items-center justify-center border-b border-transparent pb-2.5 text-base leading-relaxed font-medium whitespace-nowrap text-gray-400 transition-all duration-700 ease-in-out hover:border-indigo-600 hover:text-indigo-600"
                      data-tab="tabs-with-pill-1"
                      role="tab"
                    >
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a
                      className="group tab-active:border-indigo-600 tab-active:text-indigo-600 tablink active flex w-full items-center justify-center border-b border-transparent pb-2.5 text-base leading-relaxed font-medium whitespace-nowrap text-gray-400 transition-all duration-700 ease-in-out hover:border-indigo-600 hover:text-indigo-600"
                      data-tab="tabs-with-pill-2"
                      role="tab"
                    >
                      Our Mission
                    </a>
                  </li>
                  <li>
                    <a
                      className="group tab-active:border-indigo-600 tab-active:text-indigo-600 tablink flex w-full items-center justify-center border-b border-transparent pb-2.5 text-base leading-relaxed font-medium whitespace-nowrap text-gray-400 transition-all duration-700 ease-in-out hover:border-indigo-600 hover:text-indigo-600"
                      data-tab="tabs-with-pill-3"
                      role="tab"
                    >
                      Our Vision
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pt-6 lg:pt-10">
                <div
                  id="tabs-with-pill-1"
                  role="tabpanel"
                  aria-labelledby="tabs-with-pill-item-1"
                  className="tabcontent hidden"
                >
                  <div className="flex w-full flex-col items-center justify-start gap-7 lg:flex-row lg:gap-9">
                    <img
                      className="rounded-2xl object-cover"
                      src="https://pagedone.io/asset/uploads/1724134939.png"
                      alt="About Us image"
                    />
                    <div className="inline-flex w-full flex-col items-center justify-start gap-6 pt-2.5 lg:items-start lg:gap-10">
                      <div className="flex w-full flex-col items-center justify-start gap-3 lg:items-start">
                        <h3 className="font-manrope text-center text-2xl leading-9 font-bold text-gray-900 lg:text-start">
                          Driving Success Through Innovation and Sustainable,
                          Customer-Focused Solutions
                        </h3>
                        <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
                          Our mission is to provide innovative and sustainable
                          solutions that drive success and growth for our
                          clients. We are dedicated to excellence, integrity,
                          and customer satisfaction in every project we
                          undertake. By leveraging cutting-edge technology and
                          industry expertise, we ensure impactful results and
                          long-term partnerships.
                        </p>
                      </div>
                      <button className="flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                        <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
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
                  <div className="flex w-full flex-col items-center justify-start gap-7 lg:flex-row lg:gap-9">
                    <img
                      className="rounded-2xl object-cover"
                      src="https://pagedone.io/asset/uploads/1724134939.png"
                      alt="About Us image"
                    />
                    <div className="inline-flex w-full flex-col items-center justify-start gap-6 pt-2.5 lg:items-start lg:gap-10">
                      <div className="flex w-full flex-col items-center justify-start gap-3 lg:items-start">
                        <h3 className="font-manrope text-center text-2xl leading-9 font-bold text-gray-900 lg:text-start">
                          Driving Success Through Innovation and Sustainable,
                          Customer-Focused Solutions
                        </h3>
                        <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
                          Our mission is to provide innovative and sustainable
                          solutions that drive success and growth for our
                          clients. We are dedicated to excellence, integrity,
                          and customer satisfaction in every project we
                          undertake. By leveraging cutting-edge technology and
                          industry expertise, we ensure impactful results and
                          long-term partnerships.
                        </p>
                      </div>
                      <button className="flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                        <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                          Get Started
                        </span>
                        {/* SVG removed */}
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  id="tabs-with-pill-3"
                  className="tabcontent hidden"
                  role="tabpanel"
                  aria-labelledby="tabs-with-pill-item-3"
                >
                  <div className="flex w-full flex-col items-center justify-start gap-7 lg:flex-row lg:gap-9">
                    <img
                      className="rounded-2xl object-cover"
                      src="https://pagedone.io/asset/uploads/1724134939.png"
                      alt="About Us image"
                    />
                    <div className="inline-flex w-full flex-col items-center justify-start gap-6 pt-2.5 lg:items-start lg:gap-10">
                      <div className="flex w-full flex-col items-center justify-start gap-3 lg:items-start">
                        <h3 className="font-manrope text-center text-2xl leading-9 font-bold text-gray-900 lg:text-start">
                          Driving Success Through Innovation and Sustainable,
                          Customer-Focused Solutions
                        </h3>
                        <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
                          Our mission is to provide innovative and sustainable
                          solutions that drive success and growth for our
                          clients. We are dedicated to excellence, integrity,
                          and customer satisfaction in every project we
                          undertake. By leveraging cutting-edge technology and
                          industry expertise, we ensure impactful results and
                          long-term partnerships.
                        </p>
                      </div>
                      <button className="flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-700">
                        <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
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
  )
}
