export default function BlogCardWithImageAsABackground() {
  return (
    <div className="py-24  overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 ">
        <div className="flex items-center flex-col justify-center lg:mb-12 mb-10">
          <h2 className="font-manrope font-bold text-4xl leading-snug text-gray-900 text-center">
            Blog &amp; News
          </h2>
          <p className="mt-3 text-lg font-normal text-gray-500 text-center">
            Explore in-depth articles, industry news, and expert opinions to
            keep you informed and ahead of the curve.
          </p>
        </div>
        <div className="grid grid-cols-7 gap-8">
          <div className="col-span-12 lg:col-span-3 h-full">
            <div className="w-full rounded-xl relative">
              <img
                src="https://pagedone.io/asset/uploads/1722664875.png"
                alt="blog-cover image"
                className="rounded-xl w-full lg:h-full h-auto object-cover"
              />
              <div className="absolute top-0 left-0 bg-gradient-to-b from-transparent to-gray-900/60 w-full h-full rounded-xl flex items-end">
                <div className="flex flex-col gap-4 py-6 px-6">
                  <h4 className="text-3xl font-semibold leading-normal font-manrope text-white">
                    Smart Strategies for Investing.
                  </h4>
                  <p className="text-sm font-medium text-white">
                    Investing in the right tools can significantly enhance the
                    efficiency and effectiveness of your portfolio management.
                    In this blog.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <img
                  src="https://pagedone.io/asset/uploads/1722664895.png"
                  alt="blog cover image"
                  className="rounded-lg object-cover"
                />
                <div>
                  <h6 className="text-lg font-medium leading-8 text-gray-900 mb-3">
                    Tech-Enhanced Journeys.
                  </h6>
                  <p className="text-base font-normal text-gray-500 mb-3">
                    Discover how the travel industry is transforming with
                    cutting-edge.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://pagedone.io/asset/uploads/1722664963.png"
                        alt="auther image"
                        className="rounded-full object-cover"
                      />
                      <span className="text-xs font-medium text-gray-900">
                        Emily Johnson
                      </span>
                    </div>
                    <p className="text-xs font-medium text-indigo-600">
                      Mar 26, 2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <img
                  src="https://pagedone.io/asset/uploads/1722664915.png"
                  alt="blog cover image"
                  className="rounded-lg object-cover"
                />
                <div>
                  <h6 className="text-lg font-medium leading-8 text-gray-900 mb-3">
                    Transforming Your Space.
                  </h6>
                  <p className="text-base font-normal text-gray-500 mb-3">
                    Elevate your environment with professional expertise.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://pagedone.io/asset/uploads/1722664979.png"
                        alt="auther image"
                        className="rounded-full object-cover"
                      />
                      <span className="text-xs font-medium text-gray-900">
                        Emily Johnson
                      </span>
                    </div>
                    <p className="text-xs font-medium text-indigo-600">
                      Mar 26, 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
