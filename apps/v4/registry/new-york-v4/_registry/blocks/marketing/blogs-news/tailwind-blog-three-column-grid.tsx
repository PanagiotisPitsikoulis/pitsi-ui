export default function TailwindBlogThreeColumnGrid() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col justify-between gap-5 sm:flex-row sm:items-center lg:max-w-full">
          <div className="block">
            <p className="text-base leading-7 font-normal text-gray-500">
              Our Blog
            </p>
            <h2 className="font-manrope mt-3 text-4xl leading-snug font-bold text-gray-900">
              Blog &amp; News
            </h2>
          </div>
          <button className="flex w-max items-center gap-2 rounded-xl bg-indigo-50 py-2.5 pr-6 pl-8 text-base font-semibold text-indigo-600 transition-all duration-500 hover:bg-indigo-100">
            Browse All
            {/* SVG removed */}
          </button>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-full lg:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 p-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663575.png"
              alt="blog image"
              className="h-auto w-full rounded-xl object-cover"
            />
            <div className="block">
              <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://pagedone.io/asset/uploads/1722663634.png"
                    alt="user avartar image"
                    className="rounded-full object-cover"
                  />
                  <div className="block">
                    <p className="mb-1 text-sm font-medium text-gray-900">
                      Jack Smith
                    </p>
                    <p className="text-xs font-normal text-gray-500">
                      31 May 2024
                    </p>
                  </div>
                </div>
                <p className="text-sm font-normal text-gray-500">Technology</p>
              </div>
              <h5 className="mb-3 text-xl leading-8 font-bold text-gray-900">
                Cybersecurity in the Digital Age: Protecting Your Data
              </h5>
              <p className="text-base font-normal text-gray-500">
                Discover how to protect your data in the digital landscape.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 p-6">
              <div className="block">
                <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://pagedone.io/asset/uploads/1722663623.png"
                      alt="user avartar image"
                      className="rounded-full object-cover"
                    />
                    <div className="block">
                      <p className="mb-1 text-sm font-medium text-gray-900">
                        Ethan Jones
                      </p>
                      <p className="text-xs font-normal text-gray-500">
                        2 June 2024
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-normal text-gray-500">Economy</p>
                </div>
                <h5 className="mb-3 text-xl leading-8 font-bold text-gray-900">
                  The Role of Government Policy in Shaping Economic Stability
                </h5>
                <p className="text-base font-normal text-gray-500">
                  Explore how government policies influence economic stability
                  in our latest article.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 p-6">
              <div className="block">
                <div className="mb-3 flex items-center justify-between border-b border-gray-200 pb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://pagedone.io/asset/uploads/1722663643.png"
                      alt="user avartar image"
                      className="rounded-full object-cover"
                    />
                    <div className="block">
                      <p className="mb-1 text-sm font-medium text-gray-900">
                        Mia Martinez
                      </p>
                      <p className="text-xs font-normal text-gray-500">
                        16 June 2024
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-normal text-gray-500">
                    UI / UX Design
                  </p>
                </div>
                <h5 className="mb-3 text-xl leading-8 font-bold text-gray-900">
                  The Future of UX/UI Design: Innovations and Best Practices
                </h5>
                <p className="text-base font-normal text-gray-500">
                  Explore the latest innovations and best practices shaping the
                  future of UX/UI design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
