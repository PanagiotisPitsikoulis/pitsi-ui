export default function FeatureListWithDashboardImage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-9 inline-flex">
          <div className="w-full justify-between items-center lg:gap-8 gap-5 flex lg:flex-row flex-col">
            <div className="flex-col justify-center lg:items-start items-center gap-3.5 inline-flex">
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Streamlined Data Management
              </h2>
              <p className="lg:max-w-4xl w-full text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
                Streamlined Data Management simplifies and automates data
                handling processes, improving efficiency and reducing the risk
                of errors.
              </p>
            </div>
            <button className="sm:w-fit w-full px-5 py-2.5 bg-gradient-to-tr from-violet-500 to-violet-400 hover:from-violet-600 hover:to-violet-500 transition-all duration-700 ease-in-out rounded-xl shadow-xs justify-center items-center flex">
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed whitespace-nowrap">
                Learn More
              </span>
            </button>
          </div>
          <div className="w-full flex-col justify-start items-center lg:gap-10 gap-8 flex">
            <img
              src="https://pagedone.io/asset/uploads/1719999001.png"
              alt="feature Data Management image"
              className="rounded-t-3xl object-cover"
            />
            <div className="w-full justify-center items-start gap-5 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
              <div className="h-full p-5 rounded-lg border border-gray-200 hover:border-violet-400 transition-all duration-700 ease-in-out flex-col justify-start items-start lg:gap-3 gap-2 inline-flex">
                <div className="flex-col justify-start items-start lg:gap-5 gap-3 flex">
                  <div className="w-8 h-8 justify-center items-center inline-flex">
                    {/* SVG removed */}
                  </div>
                  <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                    Automated Data Entry
                  </h5>
                </div>
                <p className="text-gray-500 text-sm font-normal leading-normal break-all">
                  Reduces manual input by automatically capturing and organizing
                  data from various sources.
                </p>
              </div>
              <div className="h-full p-5 rounded-lg border border-gray-200 hover:border-violet-400 transition-all duration-700 ease-in-out flex-col justify-start items-start lg:gap-3 gap-2 inline-flex">
                <div className="flex-col justify-start items-start lg:gap-5 gap-3 flex">
                  <div className="w-8 h-8 justify-center items-center inline-flex">
                    {/* SVG removed */}
                  </div>
                  <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                    Data Validation
                  </h5>
                </div>
                <p className="text-gray-500 text-sm font-normal leading-snug">
                  Ensures accuracy and consistency of data through automated
                  validation checks and error corrections.
                </p>
              </div>
              <div className="h-full p-5 rounded-lg border border-gray-200 hover:border-violet-400 transition-all duration-700 ease-in-out flex-col justify-start items-start lg:gap-3 gap-2 inline-flex">
                <div className="flex-col justify-start items-start lg:gap-5 gap-3 flex">
                  <div className="w-8 h-8 justify-center items-center inline-flex">
                    {/* SVG removed */}
                  </div>
                  <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                    Efficient Data Processing
                  </h5>
                </div>
                <p className="text-gray-500 text-sm font-normal leading-snug">
                  Speeds up data processing tasks, allowing for faster analysis
                  and decision-making.
                </p>
              </div>
              <div className="h-full p-5 rounded-lg border border-gray-200 hover:border-violet-400 transition-all duration-700 ease-in-out flex-col justify-start items-start lg:gap-3 gap-2 inline-flex">
                <div className="flex-col justify-start items-start lg:gap-5 gap-3 flex">
                  <div className="w-8 h-8 justify-center items-center inline-flex">
                    {/* SVG removed */}
                  </div>
                  <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                    Enhanced Data Security
                  </h5>
                </div>
                <p className="text-gray-500 text-sm font-normal leading-snug break-all">
                  Implements robust security measures to protect sensitive
                  information and ensure compliance with regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
