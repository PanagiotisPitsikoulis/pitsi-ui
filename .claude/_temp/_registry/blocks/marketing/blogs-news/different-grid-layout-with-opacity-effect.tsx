export default function DifferentGridLayoutWithOpacityEffect() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-black text-5xl font-bold font-manrope leading-relaxed lg:pb-12 pb-8">
          Our Blog
        </h2>
        <div className="group grid lg:grid-cols-2 grid-cols-1 gap-8 lg:mb-14 mb-10 flex-row items-center">
          <div className="flex-col lg:justify-start justify-center lg:items-start items-center lg:gap-10 gap-8 inline-flex">
            <div className="flex-col justify-start items-start lg:gap-6 gap-4 flex">
              <div className="justify-start items-center gap-2.5 inline-flex lg:mx-0 mx-auto">
                {/* SVG removed */}
                <span className="text-gray-600 text-xl font-normal leading-loose">
                  12 jun, 2022
                </span>
              </div>
              <div className="flex-col justify-start items-start gap-3.5 flex">
                <h3 className="text-gray-800 text-4xl font-semibold font-manrope leading-relaxed lg:mx-0 mx-auto lg:text-start text-center group-hover:text-indigo-600 transition-all duration-700 ease-in-out">
                  Tips and DIY Inspiration for Creative Minds
                </h3>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  Discover a universe of boundless imagination in the World of
                  Creative Art, where canvases weave stories, sculptures breathe
                  life, and digital realms redefine artistic expression. Unleash
                  your inner artist with tips and inspiration for a journey into
                  the kaleidoscope of creativity.
                </p>
              </div>
            </div>
            <button className="px-3.5 py-2 rounded-lg shadow-sm border border-gray-500 hover:bg-gray-50 duration-700 ease-in-out transition-all justify-center items-center flex">
              <span className="px-1.5 py-px text-gray-900 text-sm font-medium leading-snug">
                Read More
              </span>
            </button>
          </div>
          <img
            className="rounded-3xl lg:mx-0 mx-auto group-hover:opacity-50 transition-all duration-700 ease-in-out object-cover"
            alt="blog image"
            src="https://pagedone.io/asset/uploads/1710761810.png"
          />
        </div>
        <div className="p-10 bg-gray-100 rounded-xl flex-col justify-start items-start gap-7 flex ">
          <h3 className="w-full text-gray-800 text-4xl font-semibold font-manrope leading-tight xl:text-start text-center">
            Latest Posts
          </h3>
          <div className="flex justify-center gap-8 flex-wrap xl:flex-nowrap w-full">
            <div className="group w-64 flex-col justify-start items-start gap-5 inline-flex">
              <img
                className="rounded-xl group-hover:opacity-50 transition-all duration-700 ease-in-out object-cover"
                src="https://pagedone.io/asset/uploads/1710762283.png"
                alt="blog image"
              />
              <div className="flex-col justify-start items-start gap-2 flex">
                <h4 className="text-gray-900 text-lg font-normal leading-7 whitespace-nowrap group-hover:text-indigo-600 transition-all duration-700 ease-in-out">
                  Wild Photography Technology
                </h4>
                <div className="justify-start items-center gap-2 inline-flex">
                  {/* SVG removed */}
                  <span className="text-gray-600 text-sm font-normal leading-snug">
                    24 jun, 2023
                  </span>
                </div>
              </div>
            </div>
            <div className="group w-64 flex-col justify-start items-start gap-5 inline-flex">
              <img
                className="group-hover:opacity-50 transition-all duration-700 ease-in-out rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1710762304.png"
                alt="blog image"
              />
              <div className="flex-col justify-start items-start gap-2 flex">
                <h4 className="text-gray-900 text-lg font-normal leading-7 group-hover:text-indigo-600 transition-all duration-700 ease-in-out">
                  Unveiling the Power of Three-Dimensional Art
                </h4>
                <div className="justify-start items-center gap-2 inline-flex">
                  {/* SVG removed */}
                  <span className="text-gray-600 text-sm font-normal leading-snug">
                    24 jun, 2023
                  </span>
                </div>
              </div>
            </div>
            <div className="group w-64 flex-col justify-start items-start gap-5 inline-flex">
              <img
                className="group-hover:opacity-50 transition-all duration-700 ease-in-out rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1710762328.png"
                alt="blog image"
              />
              <div className="flex-col justify-start items-start gap-2 flex">
                <h4 className="text-gray-900 text-lg font-normal leading-7 group-hover:text-indigo-600 transition-all duration-700 ease-in-out">
                  Tips and Trends for Elevating Your Art Display
                </h4>
                <div className="justify-start items-center gap-2 inline-flex">
                  {/* SVG removed */}
                  <span className="text-gray-600 text-sm font-normal leading-snug">
                    24 jun, 2023
                  </span>
                </div>
              </div>
            </div>
            <div className="group w-64 flex-col justify-start items-start gap-5 inline-flex">
              <img
                className="group-hover:opacity-50 transition-all duration-700 ease-in-out rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1710762343.png"
                alt="blog image"
              />
              <div className="flex-col justify-start items-start gap-2 flex">
                <h4 className="text-gray-900 text-lg font-normal leading-7 group-hover:text-indigo-600 transition-all duration-700 ease-in-out">
                  Discovering Hidden Gems Around the World
                </h4>
                <div className="justify-start items-center gap-2 inline-flex">
                  {/* SVG removed */}
                  <span className="text-gray-600 text-sm font-normal leading-snug">
                    24 jun, 2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
