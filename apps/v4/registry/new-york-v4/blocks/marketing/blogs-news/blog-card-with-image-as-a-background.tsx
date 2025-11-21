export default function BlogCardWithImageAsABackground() {
  return (
    <div className="overflow-hidden py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center justify-center lg:mb-12">
          <h2 className="font-manrope text-center text-4xl leading-snug font-bold text-gray-900">
            Blog &amp; News
          </h2>
          <p className="mt-3 text-center text-lg font-normal text-gray-500">
            Explore in-depth articles, industry news, and expert opinions to
            keep you informed and ahead of the curve.
          </p>
        </div>
        <div className="grid grid-cols-7 gap-8">
          <div className="col-span-12 h-full lg:col-span-3">
            <div className="relative w-full rounded-xl">
              <img
                src="https://pagedone.io/asset/uploads/1722664875.png"
                alt="blog-cover image"
                className="h-auto w-full rounded-xl object-cover lg:h-full"
              />
              <div className="absolute top-0 left-0 flex h-full w-full items-end rounded-xl bg-gradient-to-b from-transparent to-gray-900/60">
                <div className="flex flex-col gap-4 px-6 py-6">
                  <h4 className="font-manrope text-3xl leading-normal font-semibold text-white">
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
          <div className="col-span-12 h-full lg:col-span-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-4">
                <img
                  src="https://pagedone.io/asset/uploads/1722664895.png"
                  alt="blog cover image"
                  className="rounded-lg object-cover"
                />
                <div>
                  <h6 className="mb-3 text-lg leading-8 font-medium text-gray-900">
                    Tech-Enhanced Journeys.
                  </h6>
                  <p className="mb-3 text-base font-normal text-gray-500">
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
                  <h6 className="mb-3 text-lg leading-8 font-medium text-gray-900">
                    Transforming Your Space.
                  </h6>
                  <p className="mb-3 text-base font-normal text-gray-500">
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
  )
}
