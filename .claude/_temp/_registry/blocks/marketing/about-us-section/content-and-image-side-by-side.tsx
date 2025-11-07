export default function ContentAndImageSideBySide() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="w-full justify-center items-center lg:gap-8 gap-4 grid lg:grid-cols-2 grid-cols-1">
            <div className="flex-col justify-start lg:items-start items-center gap-3 inline-flex">
              <span className="text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                About Us
              </span>
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Innovative Structures Redefining Interior.
              </h2>
            </div>
            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
              This section highlights groundbreaking designs and cutting-edge
              technologies that push the boundaries of traditional architecture.
              Explore how visionary architects and engineers.
            </p>
          </div>
          <div className="w-full flex-col justify-start items-start gap-8 flex">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              <img
                className="w-full lg:h-full h-auto rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1724321774.png"
              />
              <div className="w-full flex-col justify-start items-start lg:gap-9 gap-4 inline-flex">
                <div className="flex-col justify-start items-start gap-3 flex">
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    Sophisticated Interiors Where Function Meets Beauty.
                  </h2>
                  <p className="text-gray-500 text-lg font-normal leading-relaxed">
                    This section showcases interior designs that seamlessly
                    combine elegance with practicality, creating spaces that are
                    both visually stunning and highly functional.
                  </p>
                </div>
                <button className="sm:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                    Learn More
                  </span>
                  {/* SVG removed */}
                </button>
              </div>
            </div>
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              <img
                className="w-full h-auto rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1724321789.png"
                alt="About Us image"
              />
              <img
                className="w-full h-auto rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1724321803.png"
                alt="About Us image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
