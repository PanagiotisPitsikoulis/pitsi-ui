export default function TailwindBlogThreeColumnGrid() {
  return (
    <div className="py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-5  max-w-2xl lg:max-w-full mx-auto">
          <div className="block">
            <p className="text-base font-normal leading-7 text-gray-500">
              Our Blog
            </p>
            <h2 className="font-manrope font-bold text-4xl leading-snug text-gray-900 mt-3">
              Blog &amp; News
            </h2>
          </div>
          <button className="rounded-xl w-max py-2.5 pr-6 pl-8 flex items-center gap-2 bg-indigo-50 text-base font-semibold text-indigo-600 transition-all duration-500 hover:bg-indigo-100">
            Browse All
            {/* SVG removed */}
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-2xl lg:max-w-full mx-auto">
          <div className="rounded-2xl border border-gray-200 p-6 flex flex-col gap-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663575.png"
              alt="blog image"
              className="rounded-xl w-full h-auto object-cover"
            />
            <div className="block">
              <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://pagedone.io/asset/uploads/1722663634.png"
                    alt="user avartar image"
                    className="rounded-full object-cover"
                  />
                  <div className="block">
                    <p className="text-sm font-medium text-gray-900 mb-1">
                      Jack Smith
                    </p>
                    <p className="text-xs font-normal text-gray-500">
                      31 May 2024
                    </p>
                  </div>
                </div>
                <p className="text-sm font-normal text-gray-500">Technology</p>
              </div>
              <h5 className="text-xl font-bold leading-8 text-gray-900 mb-3">
                Cybersecurity in the Digital Age: Protecting Your Data
              </h5>
              <p className="text-base font-normal text-gray-500">
                Discover how to protect your data in the digital landscape.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-gray-200 p-6 flex flex-col gap-6">
              <div className="block">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://pagedone.io/asset/uploads/1722663623.png"
                      alt="user avartar image"
                      className="rounded-full object-cover"
                    />
                    <div className="block">
                      <p className="text-sm font-medium text-gray-900 mb-1">
                        Ethan Jones
                      </p>
                      <p className="text-xs font-normal text-gray-500">
                        2 June 2024
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-normal text-gray-500">Economy</p>
                </div>
                <h5 className="text-xl font-bold leading-8 text-gray-900 mb-3">
                  The Role of Government Policy in Shaping Economic Stability
                </h5>
                <p className="text-base font-normal text-gray-500">
                  Explore how government policies influence economic stability
                  in our latest article.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 flex flex-col gap-6">
              <div className="block">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://pagedone.io/asset/uploads/1722663643.png"
                      alt="user avartar image"
                      className="rounded-full object-cover"
                    />
                    <div className="block">
                      <p className="text-sm font-medium text-gray-900 mb-1">
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
                <h5 className="text-xl font-bold leading-8 text-gray-900 mb-3">
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
  );
}
