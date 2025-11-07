export default function VerticalFeatureBlogList() {
  return (
    <div className="py-24 lg:pb-36">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:justify-between mb-12">
          <div className="block">
            <h2 className="font-manrope font-bold text-4xl leading-snug max-sm:text-center text-gray-900 mb-3 lg:text-start text-center">
              Our Recent Blog Entries
            </h2>
            <p className="text-lg font-normal leading-8 text-gray-500 max-sm:text-center max-w-2xl lg:text-start text-center">
              The latest trends and cutting-edge technologies to practical tips
              and inspiring success stories, our blog is designed to inform.
            </p>
          </div>
          <button className=" rounded-full whitespace-nowrap shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-indigo-600 py-2.5 px-10 text-white text-base font-semibold transition-all duration-300 hover:bg-indigo-700">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-2xl mx-auto lg:max-w-full">
          <div className="w-full h-full flex flex-col gap-6">
            <img
              src="https://pagedone.io/asset/uploads/1722665021.png"
              alt="blog cover image"
              className="rounded-2xl lg:h-full h-auto object-cover"
            />
            <div>
              <h4 className="text-3xl font-manrope font-semibold leading-snug text-gray-900 mb-4">
                Unveiling the Latest in Electronic Gadgets and Innovations
              </h4>
              <p className="text-sm font-medium text-gray-500 mb-7">
                the curve with our comprehensive guide to the latest electronic
                gadgets and groundbreaking innovations. From cutting-edge
                smartphones
              </p>
              <div className="flex items-center justify-between ">
                <div className="flex items-center gap-3">
                  <img
                    src="https://pagedone.io/asset/uploads/1722665126.png"
                    alt="auther image"
                    className="rounded-full object-cover"
                  />
                  <span className="text-xl font-normal leading-8 text-gray-600 ">
                    By Steven Nice
                  </span>
                </div>
                <p className="text-base font-normal text-gray-500">Marketing</p>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex flex-col gap-7">
            <div className="flex flex-col sm:flex-row items-center gap-4 pb-6 border-b border-gray-200">
              <img
                src="https://pagedone.io/asset/uploads/1722665070.png"
                alt="blog cover image"
                className="rounded-xl sm:w-auto w-full h-auto object-cover"
              />
              <div>
                <h4 className="text-2xl font-semibold font-manrope leading-9 text-gray-900 mb-6">
                  Discover the Newest Electronic Gadgets and Innovations
                </h4>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://pagedone.io/asset/uploads/1722665142.png"
                      alt="auther image"
                      className="rounded-full object-cover"
                    />
                    <span className="text-base font-normal text-gray-600 ">
                      By Steven Nice
                    </span>
                  </div>
                  <p className="text-base font-normal text-gray-500">
                    Marketing
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 pb-6 border-b border-gray-200">
              <img
                src="https://pagedone.io/asset/uploads/1722665082.png"
                alt="blog cover image"
                className="rounded-xl sm:w-auto w-full h-auto object-cover"
              />
              <div>
                <h4 className="text-2xl font-semibold font-manrope leading-9 text-gray-900 mb-6">
                  Exploring Cutting-Edge Gadgets and Innovations
                </h4>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://pagedone.io/asset/uploads/1722665154.png"
                      alt="auther image"
                      className="rounded-full object-cover"
                    />
                    <span className="text-base font-normal text-gray-600 ">
                      By Amelia Clark
                    </span>
                  </div>
                  <p className="text-base font-normal text-gray-500">
                    Tutorial
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 pb-6 border-b border-gray-200">
              <img
                src="https://pagedone.io/asset/uploads/1722665105.png"
                alt="blog cover image"
                className="rounded-xl sm:w-auto w-full h-auto object-cover"
              />
              <div>
                <h4 className="text-2xl font-semibold font-manrope leading-9 text-gray-900 mb-6">
                  The Newest Electronic Gadgets and Innovations
                </h4>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://pagedone.io/asset/uploads/1722665171.png"
                      alt="auther image"
                      className="rounded-full object-cover"
                    />
                    <span className="text-base font-normal text-gray-600 ">
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
  );
}
