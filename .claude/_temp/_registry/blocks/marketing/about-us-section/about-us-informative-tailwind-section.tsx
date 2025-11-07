export default function AboutUsInformativeTailwindSection() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="w-full justify-start items-center lg:gap-8 gap-6 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start items-start lg:gap-10 gap-6 inline-flex">
              <div className="flex-col justify-start lg:items-start items-center gap-6 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <div className="flex-col justify-start lg:items-start items-center gap-3 flex">
                    <div className="justify-start lg:items-start items-center inline-flex">
                      <div className="px-2.5 py-0.5 bg-indigo-100 rounded-full justify-start items-center gap-1.5 flex">
                        <span className="text-center text-indigo-600 text-xs font-medium leading-normal">
                          About Us
                        </span>
                      </div>
                    </div>
                    <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      Revolutionizing Project Management
                    </h2>
                  </div>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    SAP is a leading provider of innovative project management
                    solutions designed to empower organizations to achieve their
                    goals efficiently and effectively. With a commitment to
                    excellence.
                  </p>
                </div>
                <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    Contact Us
                  </span>
                </button>
              </div>
              <div className="w-full justify-start items-center gap-5 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                <div className="w-full flex-col justify-start md:items-start items-center gap-2 inline-flex sm:pr-5 sm:border-r border-gray-200">
                  <h4 className="text-indigo-600 text-xl font-bold leading-8">
                    5.6M+
                  </h4>
                  <h5 className="text-gray-500 text-lg font-normal leading-relaxed break-all">
                    Downloads
                  </h5>
                </div>
                <div className="w-full flex-col justify-start md:items-start items-center gap-2 inline-flex md:pr-5 md:border-r border-gray-200">
                  <h4 className="text-indigo-600 text-xl font-bold leading-8">
                    3.2+
                  </h4>
                  <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                    Active Users
                  </h5>
                </div>
                <div className="w-full flex-col justify-start md:items-start items-center gap-2 inline-flex sm:pr-5 sm:border-r border-gray-200">
                  <h4 className="text-indigo-600 text-xl font-bold leading-8">
                    4.9
                  </h4>
                  <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                    Ratings
                  </h5>
                </div>
                <div className="w-full flex-col justify-start md:items-start items-center gap-2 inline-flex">
                  <h4 className="text-indigo-600 text-xl font-bold leading-8">
                    60+
                  </h4>
                  <h5 className="text-gray-500 text-lg font-normal leading-relaxed">
                    Team Members
                  </h5>
                </div>
              </div>
            </div>
            <img
              className="w-full lg:h-full h-auto rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1724388858.png"
              alt="About Us image"
            />
          </div>
          <div className="w-full justify-start items-center lg:gap-8 gap-6 grid md:grid-cols-3 grid-cols-1">
            <div className="lg:p-6 p-4 rounded-2xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-6 h-6 px-1 py-[3px] justify-center items-center flex">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-black text-base font-medium leading-relaxed">
                    Why Choose SAP?
                  </h6>
                </div>
                <p className="text-gray-500 text-xs font-normal leading-normal">
                  Our platform offers a comprehensive suite of project
                  management tools, including collaboration features.
                </p>
              </div>
            </div>
            <div className="lg:p-6 p-4 rounded-2xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-6 h-6 relative"></div>
                  <h6 className="text-black text-base font-medium leading-relaxed">
                    Our Vision
                  </h6>
                </div>
                <p className="text-gray-500 text-xs font-normal leading-normal">
                  We are committed to transforming the landscape by equipping
                  our team with the skills.
                </p>
              </div>
            </div>
            <div className="lg:p-6 p-4 rounded-2xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <div className="w-6 h-6 px-0.5 py-[3px] justify-center items-center flex">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-black text-base font-medium leading-relaxed">
                    Our Team
                  </h6>
                </div>
                <p className="text-gray-500 text-xs font-normal leading-normal">
                  Behind SAP is a team of passionate professionals dedicated to
                  delivering exceptional products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
