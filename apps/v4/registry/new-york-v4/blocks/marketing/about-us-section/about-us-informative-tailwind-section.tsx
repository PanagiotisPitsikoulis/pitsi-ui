export default function AboutUsInformativeTailwindSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="grid w-full grid-cols-1 items-center justify-start gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="inline-flex w-full flex-col items-start justify-start gap-6 lg:gap-10">
              <div className="flex flex-col items-center justify-start gap-6 lg:items-start">
                <div className="flex flex-col items-center justify-start gap-4 lg:items-start">
                  <div className="flex flex-col items-center justify-start gap-3 lg:items-start">
                    <div className="inline-flex items-center justify-start lg:items-start">
                      <div className="flex items-center justify-start gap-1.5 rounded-full bg-indigo-100 px-2.5 py-0.5">
                        <span className="text-center text-xs leading-normal font-medium text-indigo-600">
                          About Us
                        </span>
                      </div>
                    </div>
                    <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                      Revolutionizing Project Management
                    </h2>
                  </div>
                  <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
                    SAP is a leading provider of innovative project management
                    solutions designed to empower organizations to achieve their
                    goals efficiently and effectively. With a commitment to
                    excellence.
                  </p>
                </div>
                <button className="flex w-full items-center justify-center rounded-full bg-indigo-600 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
                  <span className="px-1.5 text-sm leading-6 font-medium text-white">
                    Contact Us
                  </span>
                </button>
              </div>
              <div className="grid w-full grid-cols-1 items-center justify-start gap-5 sm:grid-cols-2 md:grid-cols-4">
                <div className="inline-flex w-full flex-col items-center justify-start gap-2 border-gray-200 sm:border-r sm:pr-5 md:items-start">
                  <h4 className="text-xl leading-8 font-bold text-indigo-600">
                    5.6M+
                  </h4>
                  <h5 className="text-lg leading-relaxed font-normal break-all text-gray-500">
                    Downloads
                  </h5>
                </div>
                <div className="inline-flex w-full flex-col items-center justify-start gap-2 border-gray-200 md:items-start md:border-r md:pr-5">
                  <h4 className="text-xl leading-8 font-bold text-indigo-600">
                    3.2+
                  </h4>
                  <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                    Active Users
                  </h5>
                </div>
                <div className="inline-flex w-full flex-col items-center justify-start gap-2 border-gray-200 sm:border-r sm:pr-5 md:items-start">
                  <h4 className="text-xl leading-8 font-bold text-indigo-600">
                    4.9
                  </h4>
                  <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                    Ratings
                  </h5>
                </div>
                <div className="inline-flex w-full flex-col items-center justify-start gap-2 md:items-start">
                  <h4 className="text-xl leading-8 font-bold text-indigo-600">
                    60+
                  </h4>
                  <h5 className="text-lg leading-relaxed font-normal text-gray-500">
                    Team Members
                  </h5>
                </div>
              </div>
            </div>
            <img
              className="h-auto w-full rounded-xl object-cover lg:h-full"
              src="https://pagedone.io/asset/uploads/1724388858.png"
              alt="About Us image"
            />
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-start gap-6 md:grid-cols-3 lg:gap-8">
            <div className="inline-flex flex-col items-start justify-start gap-2.5 rounded-2xl border border-gray-200 p-4 transition-all duration-700 ease-in-out hover:border-gray-400 lg:p-6">
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="inline-flex items-center justify-start gap-1.5">
                  <div className="flex h-6 w-6 items-center justify-center px-1 py-[3px]">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-base leading-relaxed font-medium text-black">
                    Why Choose SAP?
                  </h6>
                </div>
                <p className="text-xs leading-normal font-normal text-gray-500">
                  Our platform offers a comprehensive suite of project
                  management tools, including collaboration features.
                </p>
              </div>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-2.5 rounded-2xl border border-gray-200 p-4 transition-all duration-700 ease-in-out hover:border-gray-400 lg:p-6">
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="inline-flex items-center justify-start gap-1.5">
                  <div className="relative h-6 w-6"></div>
                  <h6 className="text-base leading-relaxed font-medium text-black">
                    Our Vision
                  </h6>
                </div>
                <p className="text-xs leading-normal font-normal text-gray-500">
                  We are committed to transforming the landscape by equipping
                  our team with the skills.
                </p>
              </div>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-2.5 rounded-2xl border border-gray-200 p-4 transition-all duration-700 ease-in-out hover:border-gray-400 lg:p-6">
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="inline-flex items-center justify-start gap-1.5">
                  <div className="flex h-6 w-6 items-center justify-center px-0.5 py-[3px]">
                    {/* SVG removed */}
                  </div>
                  <h6 className="text-base leading-relaxed font-medium text-black">
                    Our Team
                  </h6>
                </div>
                <p className="text-xs leading-normal font-normal text-gray-500">
                  Behind SAP is a team of passionate professionals dedicated to
                  delivering exceptional products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
