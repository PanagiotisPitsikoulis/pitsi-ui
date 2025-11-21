export default function VerticalFeatureBlogList() {
  return (
    <div className="py-24 lg:pb-36">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between">
          <div className="block">
            <h2 className="font-manrope mb-3 text-center text-4xl leading-snug font-bold text-gray-900 max-sm:text-center lg:text-start">
              Our Recent Blog Entries
            </h2>
            <p className="max-w-2xl text-center text-lg leading-8 font-normal text-gray-500 max-sm:text-center lg:text-start">
              The latest trends and cutting-edge technologies to practical tips
              and inspiring success stories, our blog is designed to inform.
            </p>
          </div>
          <button className="rounded-full bg-indigo-600 px-10 py-2.5 text-base font-semibold whitespace-nowrap text-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] transition-all duration-300 hover:bg-indigo-700">
            View All
          </button>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-full lg:grid-cols-2">
          <div className="flex h-full w-full flex-col gap-6">
            <img
              src="https://pagedone.io/asset/uploads/1722665021.png"
              alt="blog cover image"
              className="h-auto rounded-2xl object-cover lg:h-full"
            />
            <div>
              <h4 className="font-manrope mb-4 text-3xl leading-snug font-semibold text-gray-900">
                Unveiling the Latest in Electronic Gadgets and Innovations
              </h4>
              <p className="mb-7 text-sm font-medium text-gray-500">
                the curve with our comprehensive guide to the latest electronic
                gadgets and groundbreaking innovations. From cutting-edge
                smartphones
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="https://pagedone.io/asset/uploads/1722665126.png"
                    alt="auther image"
                    className="rounded-full object-cover"
                  />
                  <span className="text-xl leading-8 font-normal text-gray-600">
                    By Steven Nice
                  </span>
                </div>
                <p className="text-base font-normal text-gray-500">Marketing</p>
              </div>
            </div>
          </div>
          <div className="flex h-full w-full flex-col gap-7">
            <div className="flex flex-col items-center gap-4 border-b border-gray-200 pb-6 sm:flex-row">
              <img
                src="https://pagedone.io/asset/uploads/1722665070.png"
                alt="blog cover image"
                className="h-auto w-full rounded-xl object-cover sm:w-auto"
              />
              <div>
                <h4 className="font-manrope mb-6 text-2xl leading-9 font-semibold text-gray-900">
                  Discover the Newest Electronic Gadgets and Innovations
                </h4>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://pagedone.io/asset/uploads/1722665142.png"
                      alt="auther image"
                      className="rounded-full object-cover"
                    />
                    <span className="text-base font-normal text-gray-600">
                      By Steven Nice
                    </span>
                  </div>
                  <p className="text-base font-normal text-gray-500">
                    Marketing
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 border-b border-gray-200 pb-6 sm:flex-row">
              <img
                src="https://pagedone.io/asset/uploads/1722665082.png"
                alt="blog cover image"
                className="h-auto w-full rounded-xl object-cover sm:w-auto"
              />
              <div>
                <h4 className="font-manrope mb-6 text-2xl leading-9 font-semibold text-gray-900">
                  Exploring Cutting-Edge Gadgets and Innovations
                </h4>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://pagedone.io/asset/uploads/1722665154.png"
                      alt="auther image"
                      className="rounded-full object-cover"
                    />
                    <span className="text-base font-normal text-gray-600">
                      By Amelia Clark
                    </span>
                  </div>
                  <p className="text-base font-normal text-gray-500">
                    Tutorial
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 border-b border-gray-200 pb-6 sm:flex-row">
              <img
                src="https://pagedone.io/asset/uploads/1722665105.png"
                alt="blog cover image"
                className="h-auto w-full rounded-xl object-cover sm:w-auto"
              />
              <div>
                <h4 className="font-manrope mb-6 text-2xl leading-9 font-semibold text-gray-900">
                  The Newest Electronic Gadgets and Innovations
                </h4>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://pagedone.io/asset/uploads/1722665171.png"
                      alt="auther image"
                      className="rounded-full object-cover"
                    />
                    <span className="text-base font-normal text-gray-600">
                      By Matthew Bennett
                    </span>
                  </div>
                  <p className="text-base font-normal text-gray-500">
                    Business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
