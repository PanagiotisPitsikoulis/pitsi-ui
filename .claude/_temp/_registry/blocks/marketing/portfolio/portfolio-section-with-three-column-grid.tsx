export default function PortfolioSectionWithThreeColumnGrid() {
  return (
    <section className="py-20 relative">
      <div className="w-full max-w-2xl lg:max-w-7xl px-6 lg:px-8 mx-auto">
        <h1 className="font-manrope font-medium text-4xl text-gray-900 mb-10 max-md:text-center">
          Professional Project Achievements
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-center flex-col gap-8 w-full group">
            <div className="block">
              <img
                className="rounded-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1707480017.png"
                alt="Project Achievements of Sketch"
              />
            </div>
            <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
              <div className="block">
                <h4 className="text-2xl font-manrope font-semibold text-gray-900 mb-1">
                  Sketch
                </h4>
                <p className="font-medium text-lg text-gray-400">
                  Content Design, Marketing
                </p>
              </div>
              <button className=" border border-black py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black">
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="group flex items-center flex-col gap-8 w-full">
            <div className="block">
              <img
                className="rounded-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1707480034.png"
                alt="Project Achievements of Figma"
              />
            </div>
            <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
              <div className="block">
                <h4 className="text-2xl font-manrope font-semibold text-gray-900 mb-1">
                  Figma
                </h4>
                <p className="font-medium text-lg text-gray-400">
                  User Interface Design
                </p>
              </div>
              <button className=" border border-black py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black">
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="group flex items-center flex-col gap-8 w-full md:w-1/2 mx-auto md:col-span-2 lg:col-span-1 lg:w-full">
            <div className="block">
              <img
                className="rounded-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1707480044.png"
                alt="Project Achievements of Frame.io"
              />
            </div>
            <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
              <div className="block">
                <h4 className="text-2xl font-manrope font-semibold text-gray-900 mb-1">
                  Frame.io
                </h4>
                <p className="font-medium text-lg text-gray-400">
                  User Interface Design
                </p>
              </div>
              <button className=" border border-black py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black">
                {/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
