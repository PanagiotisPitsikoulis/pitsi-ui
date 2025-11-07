export default function CoverImageWithBlogDescription() {
  return (
    <section className="pt-10 pb-10 lg:pt-36 lg:pb-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:gap-20">
          <div className="flex w-full flex-col items-center justify-start gap-8 lg:flex-row">
            <div className="inline-flex w-full flex-col items-start justify-center gap-7">
              <div className="flex w-full flex-col items-center justify-start gap-5">
                <div className="flex w-full items-center justify-start gap-5">
                  <button className="flex items-center justify-start gap-1.5 rounded bg-indigo-600 px-2.5 py-1 transition-all duration-700 hover:bg-indigo-800">
                    <span className="text-center text-xs leading-normal font-medium text-white">
                      Lifestyle
                    </span>
                  </button>
                  <div className="flex items-center justify-start gap-1 rounded bg-gray-200 py-1 pr-3 pl-2">
                    {/* SVG removed */}
                    <span className="text-center text-xs leading-normal font-medium text-gray-700">
                      Jun 14, 2023
                    </span>
                  </div>
                </div>
                <h2 className="font-manrope w-full text-5xl leading-snug font-bold text-gray-900">
                  Explore the Art of Living with Our Lifestyle Blog
                </h2>
              </div>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                Welcome to our lifestyle blog, your ultimate destination for
                embracing the richness of life. Dive into a world of
                inspiration, from wellness and fashion to travel and food,
                curated by our team of lifestyle enthusiasts...
              </p>
              <div className="inline-flex items-center justify-start gap-2.5">
                <div className="flex items-center justify-start gap-1.5">
                  <img
                    className="h-6 w-6 object-cover"
                    src="https://pagedone.io/asset/uploads/1710225484.png"
                  />
                  <h6 className="text-center text-sm leading-normal font-normal text-gray-500">
                    Priya Mishra
                  </h6>
                </div>
                <h6 className="text-center text-sm leading-normal font-normal text-black">
                  /
                </h6>
                <h6 className="text-center text-sm leading-normal font-normal text-gray-500">
                  6 mins to read
                </h6>
              </div>
            </div>
            <img
              className="mx-auto h-[512px] w-full rounded-3xl object-cover lg:w-auto"
              src="https://pagedone.io/asset/uploads/1718967109.png"
            />
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-center gap-5 lg:grid-cols-3">
            <div className="flex w-full items-center justify-start gap-3">
              <img
                className="rounded-lg object-cover"
                src="https://pagedone.io/asset/uploads/1718967142.png"
              />
              <div className="inline-flex flex-col items-start justify-start gap-2.5">
                <h4 className="text-xl leading-8 font-semibold text-gray-900">
                  6 Secrets to an Easy Meditation Practice
                </h4>
                <h6 className="text-base leading-relaxed font-medium text-gray-500">
                  Sep 26, 2023
                </h6>
              </div>
            </div>
            <div className="flex w-full items-center justify-start gap-3">
              <img
                className="rounded-lg object-cover"
                src="https://pagedone.io/asset/uploads/1718967152.png"
              />
              <div className="inline-flex flex-col items-start justify-start gap-2.5">
                <h4 className="text-xl leading-8 font-semibold text-gray-900">
                  20 Best Places for Amazing Travel Experiences
                </h4>
                <h6 className="text-base leading-relaxed font-medium text-gray-500">
                  Nov 15, 2023
                </h6>
              </div>
            </div>
            <div className="flex w-full items-center justify-start gap-3">
              <img
                className="rounded-lg object-cover"
                src="https://pagedone.io/asset/uploads/1718967179.png"
              />
              <div className="inline-flex flex-col items-start justify-start gap-2.5">
                <h4 className="text-xl leading-8 font-semibold text-gray-900">
                  The Best Ideas to Improve Self-Love
                </h4>
                <h6 className="text-base leading-relaxed font-medium text-gray-500">
                  Jan 30, 2024
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
