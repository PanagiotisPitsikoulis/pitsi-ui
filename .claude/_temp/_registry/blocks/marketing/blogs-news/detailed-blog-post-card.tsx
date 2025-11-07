export default function DetailedBlogPostCard() {
  return (
    <div className="py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <p className="text-base font-normal text-gray-500 text-center mb-3">
          Our Blog
        </p>
        <h2 className="font-manrope font-bold text-4xl text-center leading-snug text-gray-900 mb-12">
          Check out our blog for in-depth analysis.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-xl mx-auto md:max-w-full">
          <div className="rounded-2xl border border-gray-200 p-6 flex flex-col gap-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663661.png"
              alt="blog image"
              className="rounded-xl w-full h-auto object-cover"
            />
            <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
              Game-Changing Features of Latest Smartphones in 2024
            </h5>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 ">
            <div className="flex items-center gap-3 justify-between pb-2.5 mb-2.5 border-b border-gray-200">
              <div className="flex items-center gap-2">
                {/* SVG removed */}
                <p className="text-base font-normal text-gray-500">
                  June 25, 2024
                </p>
              </div>
              <div className="rounded-full py-0.5 px-2.5 border border-indigo-400 bg-indigo-50 text-xs font-medium text-indigo-600">
                Lifestyle
              </div>
            </div>
            <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900 mb-3">
              Creating a Balanced Lifestyle: Tips for Health and Happiness
            </h5>
            <p className="text-lg font-normal leading-8 text-gray-500">
              Discover essential tips for achieving health and happiness in our
              guide to a balanced lifestyle!
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 flex flex-col gap-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663675.png"
              alt="blog image"
              className="rounded-xl w-full h-auto object-cover"
            />
            <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
              Hidden Gems: Off-the-Beaten-Path Destinations
            </h5>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 ">
            <div className="flex items-center gap-3 justify-between pb-2.5 mb-2.5 border-b border-gray-200">
              <div className="flex items-center gap-2">
                {/* SVG removed */}
                <p className="text-base font-normal text-gray-500">
                  July 14, 2024
                </p>
              </div>
              <div className="rounded-full py-0.5 px-2.5 border border-indigo-400 bg-indigo-50 text-xs font-medium text-indigo-600">
                Economy
              </div>
            </div>
            <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900 mb-3">
              The Impact of Digital Currency on the Global Economy
            </h5>
            <p className="text-lg font-normal leading-8 text-gray-500">
              The Impact of Digital Currency on the Global Economy is profound,
              reshaping financial systems globally.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 flex flex-col gap-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663711.png"
              alt="blog image"
              className="rounded-xl w-full h-auto object-cover"
            />
            <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
              Revolutionizing Competitive Gaming
            </h5>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 ">
            <div className="flex items-center gap-3 justify-between pb-2.5 mb-2.5 border-b border-gray-200">
              <div className="flex items-center gap-2">
                {/* SVG removed */}
                <p className="text-base font-normal text-gray-500">
                  July 24, 2024
                </p>
              </div>
              <div className="rounded-full py-0.5 px-2.5 border border-indigo-400 bg-indigo-50 text-xs font-medium text-indigo-600">
                Technology
              </div>
            </div>
            <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900 mb-3">
              The Rise of Artificial Intelligence: Transforming Industries and
              Everyday Life
            </h5>
            <p className="text-lg font-normal leading-8 text-gray-500">
              The Rise of Artificial Intelligence is transforming industries and
              everyday life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
