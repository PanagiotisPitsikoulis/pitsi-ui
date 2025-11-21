export default function ContentAndImageSideBySide() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="grid w-full grid-cols-1 items-center justify-center gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="inline-flex flex-col items-center justify-start gap-3 lg:items-start">
              <span className="text-center text-base leading-relaxed font-normal text-gray-400 lg:text-start">
                About Us
              </span>
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                Innovative Structures Redefining Interior.
              </h2>
            </div>
            <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
              This section highlights groundbreaking designs and cutting-edge
              technologies that push the boundaries of traditional architecture.
              Explore how visionary architects and engineers.
            </p>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-8">
            <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-2">
              <img
                className="h-auto w-full rounded-xl object-cover lg:h-full"
                src="https://pagedone.io/asset/uploads/1724321774.png"
              />
              <div className="inline-flex w-full flex-col items-start justify-start gap-4 lg:gap-9">
                <div className="flex flex-col items-start justify-start gap-3">
                  <h2 className="font-manrope text-4xl leading-normal font-bold text-gray-900">
                    Sophisticated Interiors Where Function Meets Beauty.
                  </h2>
                  <p className="text-lg leading-relaxed font-normal text-gray-500">
                    This section showcases interior designs that seamlessly
                    combine elegance with practicality, creating spaces that are
                    both visually stunning and highly functional.
                  </p>
                </div>
                <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                    Learn More
                  </span>
                  {/* SVG removed */}
                </button>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-2">
              <img
                className="h-auto w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1724321789.png"
                alt="About Us image"
              />
              <img
                className="h-auto w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1724321803.png"
                alt="About Us image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
