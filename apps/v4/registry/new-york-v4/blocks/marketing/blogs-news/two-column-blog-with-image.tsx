export default function TwoColumnBlogWithImage() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="font-manrope text-center text-4xl leading-snug font-bold text-indigo-600">
          Latest Projects
        </h2>
        <p className="mx-auto mt-3 mb-12 max-w-5xl px-6 text-center text-lg font-normal text-gray-500">
          This blog highlights a series of recent endeavors, providing insights
          into the design, development, and execution of each project. From
          residential renovations and commercial builds to landscape
        </p>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-8 lg:max-w-full lg:grid-cols-2">
          <div className="flex flex-col gap-7">
            <img
              src="https://pagedone.io/asset/uploads/1722664693.png"
              alt="blog cover image"
              className="w-full rounded-xl object-cover"
            />
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-5 xl:gap-9">
              <p className="text-lg leading-8 font-semibold whitespace-nowrap text-indigo-600">
                Mar 20, 2024
              </p>
              <div>
                <h5 className="font-manrope mb-4 border-b border-gray-200 pb-4 text-2xl leading-9 font-semibold text-gray-900">
                  Exploring the Latest Electronic Gadgets and Innovations
                </h5>
                <p className="mb-7 text-base font-normal text-gray-500">
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
              className="w-full rounded-xl object-cover"
            />
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-5 xl:gap-9">
              <p className="text-lg leading-8 font-semibold whitespace-nowrap text-indigo-600">
                Mar 20, 2024
              </p>
              <div>
                <h5 className="font-manrope mb-4 border-b border-gray-200 pb-4 text-2xl leading-9 font-semibold text-gray-900">
                  Unlocking financial inclusion: how fintech is bridging the gap
                </h5>
                <p className="mb-7 text-base font-normal text-gray-500">
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
  )
}
