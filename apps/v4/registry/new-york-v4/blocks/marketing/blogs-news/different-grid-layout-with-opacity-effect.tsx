export default function DifferentGridLayoutWithOpacityEffect() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope pb-8 text-center text-5xl leading-relaxed font-bold text-black lg:pb-12">
          Our Blog
        </h2>
        <div className="group mb-10 grid grid-cols-1 flex-row items-center gap-8 lg:mb-14 lg:grid-cols-2">
          <div className="inline-flex flex-col items-center justify-center gap-8 lg:items-start lg:justify-start lg:gap-10">
            <div className="flex flex-col items-start justify-start gap-4 lg:gap-6">
              <div className="mx-auto inline-flex items-center justify-start gap-2.5 lg:mx-0">
                {/* SVG removed */}
                <span className="text-xl leading-loose font-normal text-gray-600">
                  12 jun, 2022
                </span>
              </div>
              <div className="flex flex-col items-start justify-start gap-3.5">
                <h3 className="font-manrope mx-auto text-center text-4xl leading-relaxed font-semibold text-gray-800 transition-all duration-700 ease-in-out group-hover:text-indigo-600 lg:mx-0 lg:text-start">
                  Tips and DIY Inspiration for Creative Minds
                </h3>
                <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
                  Discover a universe of boundless imagination in the World of
                  Creative Art, where canvases weave stories, sculptures breathe
                  life, and digital realms redefine artistic expression. Unleash
                  your inner artist with tips and inspiration for a journey into
                  the kaleidoscope of creativity.
                </p>
              </div>
            </div>
            <button className="flex items-center justify-center rounded-lg border border-gray-500 px-3.5 py-2 shadow-sm transition-all duration-700 ease-in-out hover:bg-gray-50">
              <span className="px-1.5 py-px text-sm leading-snug font-medium text-gray-900">
                Read More
              </span>
            </button>
          </div>
          <img
            className="mx-auto rounded-3xl object-cover transition-all duration-700 ease-in-out group-hover:opacity-50 lg:mx-0"
            alt="blog image"
            src="https://pagedone.io/asset/uploads/1710761810.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-7 rounded-xl bg-gray-100 p-10">
          <h3 className="font-manrope w-full text-center text-4xl leading-tight font-semibold text-gray-800 xl:text-start">
            Latest Posts
          </h3>
          <div className="flex w-full flex-wrap justify-center gap-8 xl:flex-nowrap">
            <div className="group inline-flex w-64 flex-col items-start justify-start gap-5">
              <img
                className="rounded-xl object-cover transition-all duration-700 ease-in-out group-hover:opacity-50"
                src="https://pagedone.io/asset/uploads/1710762283.png"
                alt="blog image"
              />
              <div className="flex flex-col items-start justify-start gap-2">
                <h4 className="text-lg leading-7 font-normal whitespace-nowrap text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                  Wild Photography Technology
                </h4>
                <div className="inline-flex items-center justify-start gap-2">
                  {/* SVG removed */}
                  <span className="text-sm leading-snug font-normal text-gray-600">
                    24 jun, 2023
                  </span>
                </div>
              </div>
            </div>
            <div className="group inline-flex w-64 flex-col items-start justify-start gap-5">
              <img
                className="rounded-xl object-cover transition-all duration-700 ease-in-out group-hover:opacity-50"
                src="https://pagedone.io/asset/uploads/1710762304.png"
                alt="blog image"
              />
              <div className="flex flex-col items-start justify-start gap-2">
                <h4 className="text-lg leading-7 font-normal text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                  Unveiling the Power of Three-Dimensional Art
                </h4>
                <div className="inline-flex items-center justify-start gap-2">
                  {/* SVG removed */}
                  <span className="text-sm leading-snug font-normal text-gray-600">
                    24 jun, 2023
                  </span>
                </div>
              </div>
            </div>
            <div className="group inline-flex w-64 flex-col items-start justify-start gap-5">
              <img
                className="rounded-xl object-cover transition-all duration-700 ease-in-out group-hover:opacity-50"
                src="https://pagedone.io/asset/uploads/1710762328.png"
                alt="blog image"
              />
              <div className="flex flex-col items-start justify-start gap-2">
                <h4 className="text-lg leading-7 font-normal text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                  Tips and Trends for Elevating Your Art Display
                </h4>
                <div className="inline-flex items-center justify-start gap-2">
                  {/* SVG removed */}
                  <span className="text-sm leading-snug font-normal text-gray-600">
                    24 jun, 2023
                  </span>
                </div>
              </div>
            </div>
            <div className="group inline-flex w-64 flex-col items-start justify-start gap-5">
              <img
                className="rounded-xl object-cover transition-all duration-700 ease-in-out group-hover:opacity-50"
                src="https://pagedone.io/asset/uploads/1710762343.png"
                alt="blog image"
              />
              <div className="flex flex-col items-start justify-start gap-2">
                <h4 className="text-lg leading-7 font-normal text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                  Discovering Hidden Gems Around the World
                </h4>
                <div className="inline-flex items-center justify-start gap-2">
                  {/* SVG removed */}
                  <span className="text-sm leading-snug font-normal text-gray-600">
                    24 jun, 2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
