export default function FeatureListWithDashboardImage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-9 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-between gap-5 lg:flex-row lg:gap-8">
            <div className="inline-flex flex-col items-center justify-center gap-3.5 lg:items-start">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                Streamlined Data Management
              </h2>
              <p className="w-full text-center text-lg leading-relaxed font-normal text-gray-500 lg:max-w-4xl lg:text-start">
                Streamlined Data Management simplifies and automates data
                handling processes, improving efficiency and reducing the risk
                of errors.
              </p>
            </div>
            <button className="flex w-full items-center justify-center rounded-xl bg-gradient-to-tr from-violet-500 to-violet-400 px-5 py-2.5 shadow-xs transition-all duration-700 ease-in-out hover:from-violet-600 hover:to-violet-500 sm:w-fit">
              <span className="px-2 py-px text-base leading-relaxed font-semibold whitespace-nowrap text-white">
                Learn More
              </span>
            </button>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-8 lg:gap-10">
            <img
              src="https://pagedone.io/asset/uploads/1719999001.png"
              alt="feature Data Management image"
              className="rounded-t-3xl object-cover"
            />
            <div className="grid w-full grid-cols-1 items-start justify-center gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="inline-flex h-full flex-col items-start justify-start gap-2 rounded-lg border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-violet-400 lg:gap-3">
                <div className="flex flex-col items-start justify-start gap-3 lg:gap-5">
                  <div className="inline-flex h-8 w-8 items-center justify-center">
                    {/* SVG removed */}
                  </div>
                  <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                    Automated Data Entry
                  </h5>
                </div>
                <p className="text-sm leading-normal font-normal break-all text-gray-500">
                  Reduces manual input by automatically capturing and organizing
                  data from various sources.
                </p>
              </div>
              <div className="inline-flex h-full flex-col items-start justify-start gap-2 rounded-lg border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-violet-400 lg:gap-3">
                <div className="flex flex-col items-start justify-start gap-3 lg:gap-5">
                  <div className="inline-flex h-8 w-8 items-center justify-center">
                    {/* SVG removed */}
                  </div>
                  <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                    Data Validation
                  </h5>
                </div>
                <p className="text-sm leading-snug font-normal text-gray-500">
                  Ensures accuracy and consistency of data through automated
                  validation checks and error corrections.
                </p>
              </div>
              <div className="inline-flex h-full flex-col items-start justify-start gap-2 rounded-lg border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-violet-400 lg:gap-3">
                <div className="flex flex-col items-start justify-start gap-3 lg:gap-5">
                  <div className="inline-flex h-8 w-8 items-center justify-center">
                    {/* SVG removed */}
                  </div>
                  <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                    Efficient Data Processing
                  </h5>
                </div>
                <p className="text-sm leading-snug font-normal text-gray-500">
                  Speeds up data processing tasks, allowing for faster analysis
                  and decision-making.
                </p>
              </div>
              <div className="inline-flex h-full flex-col items-start justify-start gap-2 rounded-lg border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-violet-400 lg:gap-3">
                <div className="flex flex-col items-start justify-start gap-3 lg:gap-5">
                  <div className="inline-flex h-8 w-8 items-center justify-center">
                    {/* SVG removed */}
                  </div>
                  <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                    Enhanced Data Security
                  </h5>
                </div>
                <p className="text-sm leading-snug font-normal break-all text-gray-500">
                  Implements robust security measures to protect sensitive
                  information and ensure compliance with regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
