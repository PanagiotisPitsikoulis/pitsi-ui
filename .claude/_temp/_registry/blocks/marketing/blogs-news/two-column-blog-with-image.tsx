export default function TwoColumnBlogWithImage() {
  return (
    <div className="py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-manrope font-bold text-4xl text-center leading-snug text-indigo-600 ">
          Latest Projects
        </h2>
        <p className="text-lg font-normal text-gray-500 text-center mt-3 mb-12 max-w-5xl px-6 mx-auto">
          This blog highlights a series of recent endeavors, providing insights
          into the design, development, and execution of each project. From
          residential renovations and commercial builds to landscape
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-xl mx-auto lg:max-w-full">
          <div className="flex flex-col gap-7">
            <img
              src="https://pagedone.io/asset/uploads/1722664693.png"
              alt="blog cover image"
              className="rounded-xl w-full object-cover"
            />
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:gap-5 xl:gap-9">
              <p className="text-lg font-semibold leading-8 text-indigo-600 whitespace-nowrap">
                Mar 20, 2024
              </p>
              <div>
                <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pb-4 mb-4 border-b border-gray-200">
                  Exploring the Latest Electronic Gadgets and Innovations
                </h5>
                <p className="text-base font-normal text-gray-500 mb-7">
                  This guide highlights the essential gadgets that are shaping
                  the future. Discover how these innovations.
                </p>
                <a
                  href="javascript:;"
                  className="flex items-center gap-1.5 py-2 text-xs font-medium text-indigo-600 transition-all duration-500 hover:gap-2.5"
                >
                  Read more
                  {/* SVG removed */}
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <img
              src="https://pagedone.io/asset/uploads/1722664713.png"
              alt="blog cover image"
              className="rounded-xl w-full object-cover"
            />
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:gap-5 xl:gap-9">
              <p className="text-lg font-semibold leading-8 text-indigo-600 whitespace-nowrap">
                Mar 20, 2024
              </p>
              <div>
                <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pb-4 mb-4 border-b border-gray-200">
                  Unlocking financial inclusion: how fintech is bridging the gap
                </h5>
                <p className="text-base font-normal text-gray-500 mb-7">
                  Fintech companies are providing to bridge gaps for underserved
                  and marginalized communities.
                </p>
                <a
                  href="javascript:;"
                  className="flex items-center gap-1.5 py-2 text-xs font-medium text-indigo-600 transition-all duration-500 hover:gap-2.5"
                >
                  Read more
                  {/* SVG removed */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
