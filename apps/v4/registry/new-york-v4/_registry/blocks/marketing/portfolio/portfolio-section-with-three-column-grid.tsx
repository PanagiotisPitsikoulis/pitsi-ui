export default function PortfolioSectionWithThreeColumnGrid() {
  return (
    <section className="relative py-20">
      <div className="mx-auto w-full max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h1 className="font-manrope mb-10 text-4xl font-medium text-gray-900 max-md:text-center">
          Professional Project Achievements
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group flex w-full flex-col items-center gap-8">
            <div className="block">
              <img
                className="rounded-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1707480017.png"
                alt="Project Achievements of Sketch"
              />
            </div>
            <div className="flex w-full max-w-[406px] items-center justify-between lg:max-w-full lg:px-0">
              <div className="block">
                <h4 className="font-manrope mb-1 text-2xl font-semibold text-gray-900">
                  Sketch
                </h4>
                <p className="text-lg font-medium text-gray-400">
                  Content Design, Marketing
                </p>
              </div>
              <button className="rounded-full border border-black px-3.5 py-2 transition-all duration-300 group-hover:bg-black">
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="group flex w-full flex-col items-center gap-8">
            <div className="block">
              <img
                className="rounded-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1707480034.png"
                alt="Project Achievements of Figma"
              />
            </div>
            <div className="flex w-full max-w-[406px] items-center justify-between lg:max-w-full lg:px-0">
              <div className="block">
                <h4 className="font-manrope mb-1 text-2xl font-semibold text-gray-900">
                  Figma
                </h4>
                <p className="text-lg font-medium text-gray-400">
                  User Interface Design
                </p>
              </div>
              <button className="rounded-full border border-black px-3.5 py-2 transition-all duration-300 group-hover:bg-black">
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="group mx-auto flex w-full flex-col items-center gap-8 md:col-span-2 md:w-1/2 lg:col-span-1 lg:w-full">
            <div className="block">
              <img
                className="rounded-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1707480044.png"
                alt="Project Achievements of Frame.io"
              />
            </div>
            <div className="flex w-full max-w-[406px] items-center justify-between lg:max-w-full lg:px-0">
              <div className="block">
                <h4 className="font-manrope mb-1 text-2xl font-semibold text-gray-900">
                  Frame.io
                </h4>
                <p className="text-lg font-medium text-gray-400">
                  User Interface Design
                </p>
              </div>
              <button className="rounded-full border border-black px-3.5 py-2 transition-all duration-300 group-hover:bg-black">
                {/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
