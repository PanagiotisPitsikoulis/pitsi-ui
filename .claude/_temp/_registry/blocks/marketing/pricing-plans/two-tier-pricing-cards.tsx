export default function TwoTierPricingCards() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-8 gap-6 inline-flex">
          <div className="w-full justify-start items-center lg:gap-8 gap-6 grid md:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center md:items-start items-center lg:gap-4 gap-3 inline-flex">
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal md:text-start text-center">
                Our pricing plan is perfectly suited for you
              </h2>
              <h6 className="text-gray-500 text-base font-normal leading-relaxed md:text-start text-center">
                No commitment. No hidden charges
              </h6>
            </div>
            <div className="w-full group p-5 bg-gray-50 rounded-xl border-b-2 border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out flex-col justify-center items-start gap-5 inline-flex">
              <div className="w-full justify-between items-center gap-3.5 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <h3 className="text-indigo-600 group-hover:text-gray-900 text-2xl font-medium font-manrope leading-9">
                    Free
                  </h3>
                  <h2 className="text-gray-900 group-hover:text-indigo-600 text-4xl font-bold font-manrope leading-normal">
                    $0
                    <span className="text-gray-500 group-hover:text-indigo-600 text-base font-normal leading-relaxed">
                      / Month
                    </span>
                  </h2>
                </div>
                <button className="px-5 py-2.5 bg-indigo-50 group-hover:bg-indigo-600 transition-all duration-700 ease-in-out group-hover:shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] rounded-xl justify-center items-center flex">
                  <span className="px-2 py-px text-indigo-600 group-hover:text-white text-base font-semibold leading-relaxed">
                    Buy Now
                  </span>
                </button>
              </div>
              <ul className="w-full flex-col justify-start items-start gap-3 flex">
                <li className="justify-start items-center gap-3 inline-flex">
                  {/* SVG removed */}
                  <h5 className="text-gray-800 text-lg font-normal leading-relaxed">
                    20GB Data Storage
                  </h5>
                </li>
                <li className="justify-start items-center gap-3 inline-flex">
                  {/* SVG removed */}
                  <h5 className="text-gray-800 text-lg font-normal leading-relaxed">
                    2 Workspace
                  </h5>
                </li>
                <li className="justify-start items-center gap-3 inline-flex">
                  {/* SVG removed */}
                  <h5 className="text-gray-800 text-lg font-normal leading-relaxed">
                    Not Customer support
                  </h5>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full justify-start items-center lg:gap-8 gap-6 grid md:grid-cols-2 grid-cols-1">
            <div className="w-full group p-5 bg-gray-50 rounded-xl border-b-2 border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out flex-col justify-center items-start gap-5 inline-flex">
              <div className="w-full justify-between items-center gap-3.5 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <h3 className="text-indigo-600 group-hover:text-gray-900 text-2xl font-medium font-manrope leading-9">
                    Regular
                  </h3>
                  <h2 className="text-gray-900 group-hover:text-indigo-600 text-4xl font-bold font-manrope leading-normal">
                    $40
                    <span className="text-gray-500 group-hover:text-indigo-600 text-base font-normal leading-relaxed">
                      / Month
                    </span>
                  </h2>
                </div>
                <button className="px-5 py-2.5 bg-indigo-50 group-hover:bg-indigo-600 transition-all duration-700 ease-in-out group-hover:shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] rounded-xl justify-center items-center flex">
                  <span className="px-2 py-px text-indigo-600 group-hover:text-white text-base font-semibold leading-relaxed">
                    Buy Now
                  </span>
                </button>
              </div>
              <ul className="w-full flex-col justify-start items-start gap-3 flex">
                <li className="justify-start items-center gap-3 inline-flex">
                  {/* SVG removed */}
                  <h5 className="text-gray-800 text-lg font-normal leading-relaxed">
                    60 Data Storage
                  </h5>
                </li>
                <li className="justify-start items-center gap-3 inline-flex">
                  {/* SVG removed */}
                  <h5 className="text-gray-800 text-lg font-normal leading-relaxed">
                    8 Workspace
                  </h5>
                </li>
                <li className="justify-start items-center gap-3 inline-flex">
                  {/* SVG removed */}
                  <h5 className="text-gray-800 text-lg font-normal leading-relaxed">
                    24/7 Customer support
                  </h5>
                </li>
              </ul>
            </div>
            <div className="w-full group p-5 bg-gray-50 rounded-xl border-b-2 border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out flex-col justify-center items-start gap-5 inline-flex">
              <div className="w-full justify-between items-center gap-3.5 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <h3 className="text-indigo-600 group-hover:text-gray-900 text-2xl font-medium font-manrope leading-9">
                    Pro
                  </h3>
                  <h2 className="text-gray-900 group-hover:text-indigo-600 text-4xl font-bold font-manrope leading-normal">
                    $85
                    <span className="text-gray-500 group-hover:text-indigo-600 text-base font-normal leading-relaxed">
                      / Month
                    </span>
                  </h2>
                </div>
                <button className="px-5 py-2.5 bg-indigo-50 group-hover:bg-indigo-600 transition-all duration-700 ease-in-out group-hover:shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] rounded-xl justify-center items-center flex">
                  <span className="px-2 py-px text-indigo-600 group-hover:text-white text-base font-semibold leading-relaxed">
                    Buy Now
                  </span>
                </button>
              </div>
              <ul className="w-full flex-col justify-start items-start gap-3 flex">
                <li className="justify-start items-center gap-3 inline-flex">
                  {/* SVG removed */}
                  <h5 className="text-gray-800 text-lg font-normal leading-relaxed">
                    Unlimited Data Storage
                  </h5>
                </li>
                <li className="justify-start items-center gap-3 inline-flex">
                  {/* SVG removed */}
                  <h5 className="text-gray-800 text-lg font-normal leading-relaxed">
                    50 Workspace
                  </h5>
                </li>
                <li className="justify-start items-center gap-3 inline-flex">
                  {/* SVG removed */}
                  <h5 className="text-gray-800 text-lg font-normal leading-relaxed">
                    24/7 Customer support
                  </h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
