export default function DetailedBlogPostCard() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <p className="mb-3 text-center text-base font-normal text-gray-500">
          Our Blog
        </p>
        <h2 className="font-manrope mb-12 text-center text-4xl leading-snug font-bold text-gray-900">
          Check out our blog for in-depth analysis.
        </h2>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-6 md:max-w-full md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 p-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663661.png"
              alt="blog image"
              className="h-auto w-full rounded-xl object-cover"
            />
            <h5 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
              Game-Changing Features of Latest Smartphones in 2024
            </h5>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="mb-2.5 flex items-center justify-between gap-3 border-b border-gray-200 pb-2.5">
              <div className="flex items-center gap-2">
                {/* SVG removed */}
                <p className="text-base font-normal text-gray-500">
                  June 25, 2024
                </p>
              </div>
              <div className="rounded-full border border-indigo-400 bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-600">
                Lifestyle
              </div>
            </div>
            <h5 className="font-manrope mb-3 text-2xl leading-9 font-bold text-gray-900">
              Creating a Balanced Lifestyle: Tips for Health and Happiness
            </h5>
            <p className="text-lg leading-8 font-normal text-gray-500">
              Discover essential tips for achieving health and happiness in our
              guide to a balanced lifestyle!
            </p>
          </div>
          <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 p-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663675.png"
              alt="blog image"
              className="h-auto w-full rounded-xl object-cover"
            />
            <h5 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
              Hidden Gems: Off-the-Beaten-Path Destinations
            </h5>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="mb-2.5 flex items-center justify-between gap-3 border-b border-gray-200 pb-2.5">
              <div className="flex items-center gap-2">
                {/* SVG removed */}
                <p className="text-base font-normal text-gray-500">
                  July 14, 2024
                </p>
              </div>
              <div className="rounded-full border border-indigo-400 bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-600">
                Economy
              </div>
            </div>
            <h5 className="font-manrope mb-3 text-2xl leading-9 font-bold text-gray-900">
              The Impact of Digital Currency on the Global Economy
            </h5>
            <p className="text-lg leading-8 font-normal text-gray-500">
              The Impact of Digital Currency on the Global Economy is profound,
              reshaping financial systems globally.
            </p>
          </div>
          <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 p-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663711.png"
              alt="blog image"
              className="h-auto w-full rounded-xl object-cover"
            />
            <h5 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
              Revolutionizing Competitive Gaming
            </h5>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="mb-2.5 flex items-center justify-between gap-3 border-b border-gray-200 pb-2.5">
              <div className="flex items-center gap-2">
                {/* SVG removed */}
                <p className="text-base font-normal text-gray-500">
                  July 24, 2024
                </p>
              </div>
              <div className="rounded-full border border-indigo-400 bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-600">
                Technology
              </div>
            </div>
            <h5 className="font-manrope mb-3 text-2xl leading-9 font-bold text-gray-900">
              The Rise of Artificial Intelligence: Transforming Industries and
              Everyday Life
            </h5>
            <p className="text-lg leading-8 font-normal text-gray-500">
              The Rise of Artificial Intelligence is transforming industries and
              everyday life.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
