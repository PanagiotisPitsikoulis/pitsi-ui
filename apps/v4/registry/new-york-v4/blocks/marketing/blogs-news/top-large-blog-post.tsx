export default function TopLargeBlogPost() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="font-manrope text-center text-4xl leading-snug font-bold text-gray-900">
          Our Blog
        </h2>
        <p className="mx-auto mt-3 mb-12 max-w-4xl px-4 text-center text-base font-normal text-gray-500">
          Welcome to our blog, where we share expert insights, practical tips,
          and the latest updates on a wide range of topics. From industry trends
          and technological advancements to lifestyle advice
        </p>
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="w-full rounded-2xl bg-cover bg-center lg:col-span-2">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl bg-gradient-to-t from-gray-900/45 to-gray-900/45 py-20">
              <h2 className="font-manrope mx-auto mb-6 max-w-4xl text-center text-3xl font-bold text-white sm:text-5xl sm:leading-normal">
                It typically includes desks, chairs, computers
              </h2>
              <div className="mb-8 flex items-center gap-4">
                <img
                  src="https://pagedone.io/asset/uploads/1722665343.png"
                  alt="auther image"
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-base font-semibold text-white">
                    Steven Nice
                  </p>
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm font-normal text-white">
                      Jan 12, 2024
                    </span>
                    <div className="flex items-center gap-1">
                      {/* SVG removed */}
                      <span className="text-sm font-normal text-white">
                        5 min
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="javascript:;"
                className="flex items-center gap-2 py-2.5 pr-5 pl-7 text-base leading-7 font-semibold text-white transition-all duration-500 hover:gap-3.5"
              >
                Read more
                {/* SVG removed */}
              </a>
            </div>
          </div>
          <div className="mx-auto flex w-full flex-col gap-5 lg:max-w-2xl">
            <img
              src="https://pagedone.io/asset/uploads/1722665258.png"
              alt="blog cover image"
              className="w-full rounded-2xl object-cover"
            />
            <div>
              <h4 className="font-manrope mb-3.5 text-2xl leading-9 font-semibold text-black">
                learn about the innovations that are reshaping
              </h4>
              <p className="mb-5 text-base font-normal text-gray-500">
                This guide highlights the essential gadgets that are shaping the
                future. Discover how these innovations.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="https://pagedone.io/asset/uploads/1722665437.png"
                    alt="auther image"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="mb-1 text-sm font-medium text-black">
                      Andrea william
                    </p>
                    <span className="text-xs font-normal text-gray-500">
                      21 Jan 2024
                    </span>
                  </div>
                </div>
                <p className="text-sm text-black">Marketing</p>
              </div>
            </div>
          </div>
          <div className="mx-auto flex w-full flex-col gap-5 lg:max-w-2xl">
            <img
              src="https://pagedone.io/asset/uploads/1722665281.png"
              alt="blog cover image"
              className="rounded-2xl object-cover"
            />
            <div>
              <h4 className="font-manrope mb-3.5 text-2xl leading-9 font-semibold text-black">
                Discover how technology is transforming
              </h4>
              <p className="mb-5 text-base font-normal text-gray-500">
                This guide highlights the essential gadgets that are shaping the
                future. Discover how these innovations.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="https://pagedone.io/asset/uploads/1722665456.png"
                    alt="auther image"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="mb-1 text-sm font-medium text-black">
                      Mia Thompson
                    </p>
                    <span className="text-xs font-normal text-gray-500">
                      22 Jan 2024
                    </span>
                  </div>
                </div>
                <p className="text-sm text-black">Business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
