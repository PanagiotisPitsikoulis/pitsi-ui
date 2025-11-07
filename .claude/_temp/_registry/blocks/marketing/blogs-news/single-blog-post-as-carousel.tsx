export default function SingleBlogPostAsCarousel() {
  return (
    <div className="py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-center">
            <div className="block h-max">
              <h2 className="font-manrope font-bold text-4xl leading-snug text-gray-900 uppercase">
                OUR LATEST BLOG UPDATE
              </h2>
              <p className="mt-3 mb-5 text-lg font-normal leading-8 text-gray-500">
                Stay informed with our latest blog update featuring expert
                insights!
              </p>
              <button className="rounded-xl py-2.5 pr-6 pl-8 flex items-center gap-2 bg-indigo-50 text-base font-semibold text-indigo-600 transition-all duration-500 hover:bg-indigo-100">
                Browse All
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663427.png"
              alt="design blog image"
              className="rounded-2xl w-full h-auto object-cover"
            />
            <div className="block">
              <p className="text-base font-medium text-gray-500 mb-2.5">
                Design
              </p>
              <h5 className="text-lg font-bold leading-8 text-gray-900">
                Top Web Design Trends to Watch in 2024
              </h5>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663440.png"
              alt="design blog image"
              className="rounded-2xl w-full h-auto object-cover"
            />
            <div className="block">
              <p className="text-base font-medium text-gray-500 mb-2.5">
                Development
              </p>
              <h5 className="text-lg font-bold leading-8 text-gray-900">
                10 Essential Tools for Web Developers in 2024
              </h5>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663455.png"
              alt="design blog image"
              className="rounded-2xl w-full h-auto object-cover"
            />
            <div className="block">
              <p className="text-base font-medium text-gray-500 mb-2.5">
                Technology
              </p>
              <h5 className="text-lg font-bold leading-8 text-gray-900">
                The Impact of 5G Technology: Transforming Connectivity and IoT
              </h5>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663467.png"
              alt="design blog image"
              className="rounded-2xl w-full h-auto object-cover"
            />
            <div className="block">
              <p className="text-base font-medium text-gray-500 mb-2.5">
                Sports
              </p>
              <h5 className="text-lg font-bold leading-8 text-gray-900">
                The Impact of Sports Nutrition: Fueling Athletes for Optimal
                Performance
              </h5>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663479.png"
              alt="design blog image"
              className="rounded-2xl w-full h-auto object-cover"
            />
            <div className="block">
              <p className="text-base font-medium text-gray-500 mb-2.5">
                Economy
              </p>
              <h5 className="text-lg font-bold leading-8 text-gray-900">
                Sustainable Economic Development: Balancing Growth and
                Environment
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
