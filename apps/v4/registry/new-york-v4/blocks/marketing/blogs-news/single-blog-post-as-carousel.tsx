export default function SingleBlogPostAsCarousel() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center">
            <div className="block h-max">
              <h2 className="font-manrope text-4xl leading-snug font-bold text-gray-900 uppercase">
                OUR LATEST BLOG UPDATE
              </h2>
              <p className="mt-3 mb-5 text-lg leading-8 font-normal text-gray-500">
                Stay informed with our latest blog update featuring expert
                insights!
              </p>
              <button className="flex items-center gap-2 rounded-xl bg-indigo-50 py-2.5 pr-6 pl-8 text-base font-semibold text-indigo-600 transition-all duration-500 hover:bg-indigo-100">
                Browse All
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663427.png"
              alt="design blog image"
              className="h-auto w-full rounded-2xl object-cover"
            />
            <div className="block">
              <p className="mb-2.5 text-base font-medium text-gray-500">
                Design
              </p>
              <h5 className="text-lg leading-8 font-bold text-gray-900">
                Top Web Design Trends to Watch in 2024
              </h5>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663440.png"
              alt="design blog image"
              className="h-auto w-full rounded-2xl object-cover"
            />
            <div className="block">
              <p className="mb-2.5 text-base font-medium text-gray-500">
                Development
              </p>
              <h5 className="text-lg leading-8 font-bold text-gray-900">
                10 Essential Tools for Web Developers in 2024
              </h5>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663455.png"
              alt="design blog image"
              className="h-auto w-full rounded-2xl object-cover"
            />
            <div className="block">
              <p className="mb-2.5 text-base font-medium text-gray-500">
                Technology
              </p>
              <h5 className="text-lg leading-8 font-bold text-gray-900">
                The Impact of 5G Technology: Transforming Connectivity and IoT
              </h5>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663467.png"
              alt="design blog image"
              className="h-auto w-full rounded-2xl object-cover"
            />
            <div className="block">
              <p className="mb-2.5 text-base font-medium text-gray-500">
                Sports
              </p>
              <h5 className="text-lg leading-8 font-bold text-gray-900">
                The Impact of Sports Nutrition: Fueling Athletes for Optimal
                Performance
              </h5>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663479.png"
              alt="design blog image"
              className="h-auto w-full rounded-2xl object-cover"
            />
            <div className="block">
              <p className="mb-2.5 text-base font-medium text-gray-500">
                Economy
              </p>
              <h5 className="text-lg leading-8 font-bold text-gray-900">
                Sustainable Economic Development: Balancing Growth and
                Environment
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
