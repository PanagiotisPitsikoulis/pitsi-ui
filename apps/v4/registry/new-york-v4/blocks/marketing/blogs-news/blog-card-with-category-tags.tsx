export default function BlogCardWithCategoryTags() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="font-manrope text-center text-4xl leading-snug font-bold text-gray-900">
          Blog
        </h2>
        <p className="mx-auto mt-3 mb-12 max-w-4xl px-4 text-center text-base font-normal text-gray-500">
          This blog highlights a series of recent endeavors, providing insights
          into the design, development, and execution of each project. From
          residential renovations and commercial builds to landscape
        </p>
        <div className="mx-auto grid max-w-lg grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-full lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="relative rounded-2xl">
              <img
                src="https://pagedone.io/asset/uploads/1722664780.png"
                alt="blog cover image"
                className="relative w-full rounded-2xl object-cover"
              />
              <div className="absolute top-4 right-4 rounded-full border border-white px-3 py-2 text-xs font-medium text-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                Banking
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <h5 className="text-xl leading-8 font-semibold text-gray-900">
                How technology is revolutionizing the travel experience
              </h5>
              <p className="text-base font-normal text-gray-500">
                Landscape photography is one of the most popular genres among
                photographers.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative rounded-2xl">
              <img
                src="https://pagedone.io/asset/uploads/1722664806.png"
                alt="blog cover image"
                className="relative w-full rounded-2xl object-cover"
              />
              <div className="absolute top-4 right-4 rounded-full border border-white px-3 py-2 text-xs font-medium text-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                Accounting
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <h5 className="text-xl leading-8 font-semibold text-gray-900">
                If you need any further refinements or additional titles.
              </h5>
              <p className="text-base font-normal text-gray-500">
                Popular genres among photographers, capturing the beauty of
                natural.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative rounded-2xl">
              <img
                src="https://pagedone.io/asset/uploads/1722664825.png"
                alt="blog cover image"
                className="relative w-full rounded-2xl object-cover"
              />
              <div className="absolute top-4 right-4 rounded-full border border-white px-3 py-2 text-xs font-medium text-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                Finance
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <h5 className="text-xl leading-8 font-semibold text-gray-900">
                If you need any variations or additional titles feel free.
              </h5>
              <p className="text-base font-normal text-gray-500">
                This means that if you requireernative options or further
                suggestions for titles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
