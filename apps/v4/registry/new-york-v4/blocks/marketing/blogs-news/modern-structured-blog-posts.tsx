export default function ModernStructuredBlogPosts() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-5 lg:mx-auto lg:max-w-full lg:flex-row">
          <div className="block">
            <h2 className="font-manrope mt-3 max-w-2xl text-center text-4xl leading-snug font-bold text-gray-900 lg:text-start">
              We prioritize sharing our knowledge to provide valuable insights.
            </h2>
          </div>
          <button className="flex w-max items-center gap-2 rounded-xl bg-indigo-600 py-2.5 pr-6 pl-8 text-base font-semibold whitespace-nowrap text-white transition-all duration-500 hover:bg-indigo-700">
            Browse All
            {/* SVG removed */}
          </button>
        </div>
        <div className="mb-8 grid grid-cols-1 gap-8 lg:mx-auto lg:max-w-full lg:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-3xl bg-gray-50 p-5 sm:flex-row">
            <img
              src="https://pagedone.io/asset/uploads/1722663733.png"
              alt="blog image"
              className="h-auto rounded-2xl object-cover lg:w-1/2 xl:w-auto"
            />
            <div className="flex flex-col justify-between gap-5">
              <span className="text-base font-medium text-gray-600">
                June 26, 2024
              </span>
              <div className="block">
                <h5 className="mb-2 text-xl leading-8 font-bold text-gray-900">
                  Reviving Your Social Media Strategies
                </h5>
                <p className="text-lg font-normal text-gray-500">
                  Revamp your social media strategies to enhance...
                </p>
              </div>
              <button className="flex w-max items-center gap-1.5 rounded-md border border-gray-300 py-2 pr-1.5 pl-3 text-xs font-medium text-gray-900 transition-all duration-500 hover:border-gray-600 hover:bg-gray-600 hover:text-white">
                Read More
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl bg-gray-50 p-5 sm:flex-row">
            <img
              src="https://pagedone.io/asset/uploads/1722663744.png"
              alt="blog image"
              className="h-auto rounded-2xl object-cover lg:w-1/2 xl:w-auto"
            />
            <div className="flex flex-col justify-between gap-5">
              <span className="text-base font-medium text-gray-600">
                July 2, 2024
              </span>
              <div className="block">
                <h5 className="mb-2 text-xl leading-8 font-bold text-gray-900">
                  Tech Trends in Digital Marketing
                </h5>
                <p className="text-lg font-normal text-gray-500">
                  Explore the latest tech trends shaping digital marketing...
                </p>
              </div>
              <button className="flex w-max items-center gap-1.5 rounded-md border border-gray-300 py-2 pr-1.5 pl-3 text-xs font-medium text-gray-900 transition-all duration-500 hover:border-gray-600 hover:bg-gray-600 hover:text-white">
                Read More
                {/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mx-auto lg:max-w-full lg:grid-cols-3">
          <div className="flex flex-col gap-6 rounded-3xl bg-gray-50 p-5">
            <img
              src="https://pagedone.io/asset/uploads/1722663757.png"
              alt="blog image"
              className="rounded-2xl object-cover"
            />
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <h5 className="mb-2 text-xl leading-8 font-bold text-gray-900">
                Customer-Centric Website Design
              </h5>
              <button className="flex w-max items-center gap-1.5 rounded-md border border-gray-300 py-2 pr-1.5 pl-3 text-xs font-medium whitespace-nowrap text-gray-900 transition-all duration-500 hover:border-gray-600 hover:bg-gray-600 hover:text-white">
                Read More
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl bg-gray-50 p-5">
            <img
              src="https://pagedone.io/asset/uploads/1722663768.png"
              alt="blog image"
              className="rounded-2xl object-cover"
            />
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <h5 className="mb-2 text-xl leading-8 font-bold text-gray-900">
                Startup Digital Marketing Guide
              </h5>
              <button className="flex w-max items-center gap-1.5 rounded-md border border-gray-300 py-2 pr-1.5 pl-3 text-xs font-medium whitespace-nowrap text-gray-900 transition-all duration-500 hover:border-gray-600 hover:bg-gray-600 hover:text-white">
                Read More
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl bg-gray-50 p-5">
            <img
              src="https://pagedone.io/asset/uploads/1722663778.png"
              alt="blog image"
              className="rounded-2xl object-cover"
            />
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <h5 className="mb-2 text-xl leading-8 font-bold text-gray-900">
                Hyper-Targeted Marketing
              </h5>
              <button className="flex w-max items-center gap-1.5 rounded-md border border-gray-300 py-2 pr-1.5 pl-3 text-xs font-medium whitespace-nowrap text-gray-900 transition-all duration-500 hover:border-gray-600 hover:bg-gray-600 hover:text-white">
                Read More
                {/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
