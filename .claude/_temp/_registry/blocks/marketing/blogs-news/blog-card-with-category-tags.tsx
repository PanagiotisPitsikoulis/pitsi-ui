export default function BlogCardWithCategoryTags() {
  return (
    <div className="py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="font-manrope font-bold text-4xl text-center leading-snug text-gray-900 ">
          Blog
        </h2>
        <p className="text-base font-normal text-gray-500 text-center mt-3 mb-12 max-w-4xl px-4 mx-auto">
          This blog highlights a series of recent endeavors, providing insights
          into the design, development, and execution of each project. From
          residential renovations and commercial builds to landscape
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
          <div className="flex flex-col gap-4">
            <div className="relative rounded-2xl">
              <img
                src="https://pagedone.io/asset/uploads/1722664780.png"
                alt="blog cover image"
                className="rounded-2xl relative w-full object-cover"
              />
              <div className="absolute top-4 right-4 py-2 px-3 rounded-full border border-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-xs font-medium text-white">
                Banking
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <h5 className="text-xl font-semibold leading-8 text-gray-900">
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
                className="rounded-2xl relative w-full object-cover"
              />
              <div className="absolute top-4 right-4 py-2 px-3 rounded-full border border-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-xs font-medium text-white">
                Accounting
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <h5 className="text-xl font-semibold leading-8 text-gray-900">
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
                className="rounded-2xl relative w-full object-cover"
              />
              <div className="absolute top-4 right-4 py-2 px-3 rounded-full border border-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-xs font-medium text-white">
                Finance
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <h5 className="text-xl font-semibold leading-8 text-gray-900">
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
  );
}
