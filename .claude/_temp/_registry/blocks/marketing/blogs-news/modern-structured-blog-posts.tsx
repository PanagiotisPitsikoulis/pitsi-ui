export default function ModernStructuredBlogPosts() {
  return (
    <div className="py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-5 lg:max-w-full lg:mx-auto">
          <div className="block">
            <h2 className="font-manrope font-bold text-4xl leading-snug text-gray-900 mt-3 max-w-2xl lg:text-start text-center">
              We prioritize sharing our knowledge to provide valuable insights.
            </h2>
          </div>
          <button className="rounded-xl w-max py-2.5 whitespace-nowrap pr-6 pl-8 flex items-center gap-2 bg-indigo-600 text-base font-semibold text-white transition-all duration-500 hover:bg-indigo-700">
            Browse All
            {/* SVG removed */}
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 lg:max-w-full lg:mx-auto">
          <div className="rounded-3xl p-5 bg-gray-50 flex flex-col sm:flex-row gap-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663733.png"
              alt="blog image"
              className="rounded-2xl lg:w-1/2 xl:w-auto h-auto object-cover"
            />
            <div className="flex justify-between flex-col gap-5">
              <span className="text-base font-medium text-gray-600">
                June 26, 2024
              </span>
              <div className="block">
                <h5 className="text-xl font-bold leading-8 text-gray-900 mb-2">
                  Reviving Your Social Media Strategies
                </h5>
                <p className="text-lg font-normal text-gray-500">
                  Revamp your social media strategies to enhance...
                </p>
              </div>
              <button className="py-2 pr-1.5 pl-3 rounded-md border border-gray-300 flex items-center gap-1.5 w-max text-xs font-medium text-gray-900 transition-all duration-500 hover:border-gray-600 hover:bg-gray-600 hover:text-white">
                Read More
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="rounded-3xl p-5 bg-gray-50 flex flex-col sm:flex-row gap-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663744.png"
              alt="blog image"
              className="rounded-2xl lg:w-1/2 xl:w-auto h-auto object-cover"
            />
            <div className="flex justify-between flex-col gap-5">
              <span className="text-base font-medium text-gray-600">
                July 2, 2024
              </span>
              <div className="block">
                <h5 className="text-xl font-bold leading-8 text-gray-900 mb-2">
                  Tech Trends in Digital Marketing
                </h5>
                <p className="text-lg font-normal text-gray-500">
                  Explore the latest tech trends shaping digital marketing...
                </p>
              </div>
              <button className="py-2 pr-1.5 pl-3 rounded-md border border-gray-300 flex items-center gap-1.5 w-max text-xs font-medium text-gray-900 transition-all duration-500 hover:border-gray-600 hover:bg-gray-600 hover:text-white">
                Read More
                {/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:max-w-full lg:mx-auto">
          <div className="rounded-3xl p-5 bg-gray-50 flex flex-col gap-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663757.png"
              alt="blog image"
              className="rounded-2xl object-cover"
            />
            <div className="flex sm:flex-row flex-col justify-between gap-3 sm:items-center items-start">
              <h5 className="text-xl font-bold leading-8 text-gray-900 mb-2">
                Customer-Centric Website Design
              </h5>
              <button className="py-2 pr-1.5 pl-3 whitespace-nowrap rounded-md border border-gray-300 flex items-center gap-1.5 w-max text-xs font-medium text-gray-900 transition-all duration-500 hover:border-gray-600 hover:bg-gray-600 hover:text-white">
                Read More
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="rounded-3xl p-5 bg-gray-50 flex flex-col gap-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663768.png"
              alt="blog image"
              className="rounded-2xl object-cover"
            />
            <div className="flex sm:flex-row flex-col justify-between gap-3 sm:items-center items-start">
              <h5 className="text-xl font-bold leading-8 text-gray-900 mb-2">
                Startup Digital Marketing Guide
              </h5>
              <button className="py-2 pr-1.5 pl-3 whitespace-nowrap rounded-md border border-gray-300 flex items-center gap-1.5 w-max text-xs font-medium text-gray-900 transition-all duration-500 hover:border-gray-600 hover:bg-gray-600 hover:text-white">
                Read More
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="rounded-3xl p-5 bg-gray-50 flex flex-col gap-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663778.png"
              alt="blog image"
              className="rounded-2xl object-cover"
            />
            <div className="flex sm:flex-row flex-col justify-between gap-3 sm:items-center items-start">
              <h5 className="text-xl font-bold leading-8 text-gray-900 mb-2">
                Hyper-Targeted Marketing
              </h5>
              <button className="py-2 pr-1.5 pl-3 whitespace-nowrap rounded-md border border-gray-300 flex items-center gap-1.5 w-max text-xs font-medium text-gray-900 transition-all duration-500 hover:border-gray-600 hover:bg-gray-600 hover:text-white">
                Read More
                {/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
