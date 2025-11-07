export default function TailwindCssPortfolioWithProductOrProjectSFeatures() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 grid max-w-xl grid-cols-1 gap-8 lg:max-w-full lg:grid-cols-2 lg:gap-24">
          <h2 className="font-manrope text-4xl leading-tight font-bold text-gray-900">
            Enjoy the finest features with Our Protfolio
          </h2>
          <p className="text-lg leading-8 font-normal text-gray-500">
            Lacus dolor feugiat facilisis blandit vel. Nisl justo non semper sed
            sed leo in. Sagittis tempus diam porttitor lorem quis aenean amet
            bibendum ac.
          </p>
        </div>
        <div className="mx-auto mb-8 grid max-w-xl grid-cols-1 gap-8 lg:max-w-full lg:grid-cols-2">
          <div className="group relative flex h-full min-h-[330px] flex-col items-center justify-end px-10 py-5">
            <img
              src="https://pagedone.io/asset/uploads/1707713961.png"
              alt="Beautifull house image"
              className="absolute top-0 left-0 z-0 h-full w-full rounded-lg object-cover"
            />
            <div className="relative z-10 w-full rounded-lg bg-black/30 px-5 py-2.5 opacity-0 transition-all duration-500 group-hover:opacity-100">
              <div className="mb-4 flex flex-col items-center justify-between gap-2 sm:flex-row">
                <h6 className="text-xl leading-8 font-medium text-white">
                  Minimalist Family House
                </h6>
                <h6 className="text-xl leading-8 font-medium text-white">
                  $ 229.00
                </h6>
              </div>
              <div className="flex items-center gap-2">
                {/* SVG removed */}
                <p className="text-base font-normal text-white">
                  Sudirman Street, No.710, West Jakarta
                </p>
              </div>
            </div>
          </div>
          <div className="group relative flex h-full min-h-[330px] flex-col items-center justify-end px-10 py-5">
            <img
              src="https://pagedone.io/asset/uploads/1707713972.png"
              alt="House image with unique structure"
              className="absolute top-0 left-0 z-0 h-full w-full rounded-lg object-cover"
            />
            <div className="relative z-10 w-full rounded-lg bg-black/30 px-5 py-2.5 opacity-0 transition-all duration-500 group-hover:opacity-100">
              <div className="mb-4 flex flex-col items-center justify-between gap-2 sm:flex-row">
                <h6 className="text-xl leading-8 font-medium text-white">
                  Minimalist Family House
                </h6>
                <h6 className="text-xl leading-8 font-medium text-white">
                  $ 229.00
                </h6>
              </div>
              <div className="flex items-center gap-2">
                {/* SVG removed */}
                <p className="text-base font-normal text-white">
                  Sudirman Street, No.710, West Jakarta
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-8 md:max-w-3xl md:grid-cols-2 lg:max-w-full lg:grid-cols-3">
          <div className="group relative flex h-full min-h-[330px] flex-col items-center justify-end px-10 py-5">
            <img
              src="https://pagedone.io/asset/uploads/1707713985.png"
              alt="House image with unique structure"
              className="absolute top-0 left-0 z-0 h-full w-full rounded-lg object-cover"
            />
            <div className="relative z-10 w-full cursor-pointer rounded-lg bg-black/30 px-5 py-2.5 opacity-0 transition-all duration-500 group-hover:opacity-100">
              <div className="mb-4 flex items-center justify-between gap-5">
                <h6 className="text-xl leading-8 font-medium text-white">
                  view more
                </h6>
              </div>
              <div className="flex items-center gap-2">
                {/* SVG removed */}
                <p className="text-base font-normal text-white">
                  Sudirman Street, West Jakarta
                </p>
              </div>
            </div>
          </div>
          <div className="group relative flex h-full min-h-[330px] flex-col items-center justify-end px-10 py-5">
            <img
              src="https://pagedone.io/asset/uploads/1707713996.png"
              alt="House image with unique structure"
              className="absolute top-0 left-0 z-0 h-full w-full rounded-lg object-cover"
            />
            <div className="relative z-10 w-full cursor-pointer rounded-lg bg-black/30 px-5 py-2.5 opacity-0 transition-all duration-500 group-hover:opacity-100">
              <div className="mb-4 flex items-center justify-between gap-5">
                <h6 className="text-xl leading-8 font-medium text-white">
                  view more
                </h6>
              </div>
              <div className="flex items-center gap-2">
                {/* SVG removed */}
                <p className="text-base font-normal text-white">
                  Sudirman Street, West Jakarta
                </p>
              </div>
            </div>
          </div>
          <div className="group relative flex h-full min-h-[330px] flex-col items-center justify-end px-10 py-5 md:col-span-2 md:mx-auto md:w-1/2 lg:col-span-1 lg:w-full">
            <img
              src="https://pagedone.io/asset/uploads/1707714008.png"
              alt="House image with unique structure"
              className="absolute top-0 left-0 z-0 h-full w-full rounded-lg object-cover"
            />
            <div className="relative z-10 w-full cursor-pointer rounded-lg bg-black/30 px-5 py-2.5 opacity-0 transition-all duration-500 group-hover:opacity-100">
              <div className="mb-4 flex items-center justify-between gap-5">
                <h6 className="text-xl leading-8 font-medium text-white">
                  view more
                </h6>
              </div>
              <div className="flex items-center gap-2">
                {/* SVG removed */}
                <p className="text-base font-normal text-white">
                  Sudirman Street, West Jakarta
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="mx-auto mt-14 flex w-max items-center justify-center rounded-full bg-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm shadow-transparent transition-all duration-300 hover:bg-indigo-700 hover:shadow-indigo-200">
          View More
        </button>
      </div>
    </section>
  )
}
