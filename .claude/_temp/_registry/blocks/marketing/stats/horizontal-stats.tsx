export default function HorizontalStats() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center text-gray-900 font-bold mb-12">
          Our work in number
        </h2>
        <div className="flex flex-col gap-10 xl:gap-14 md:flex-row md:justify-between">
          <div className="w-full lg:w-1/3 bg-gray-50 p-5 rounded-2xl">
            <div className="flex gap-5">
              <div className="bg-white w-16 h-16 shadow-sm rounded-xl flex justify-center items-center ">
                {/* SVG removed */}
              </div>
              <div className="flex-1">
                <div className="font-manrope text-2xl font-bold text-indigo-600 mb-1">
                  975+
                </div>
                <span className="text-gray-500">Active Clients</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 bg-gray-50 p-5 rounded-2xl">
            <div className="flex gap-5">
              <div className="bg-white w-16 h-16 shadow-sm rounded-xl flex justify-center items-center ">
                {/* SVG removed */}
              </div>
              <div className="flex-1">
                <div className="font-manrope text-2xl font-bold text-indigo-600 mb-1">
                  724+
                </div>
                <span className="text-gray-500">Projects Delivered</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 bg-gray-50 p-5 rounded-2xl">
            <div className="flex gap-5">
              <div className="bg-white w-16 h-16 shadow-sm rounded-xl flex justify-center items-center ">
                {/* SVG removed */}
              </div>
              <div className="flex-1">
                <div className="font-manrope text-2xl font-bold text-indigo-600 mb-1">
                  89+
                </div>
                <span className="text-gray-500">Orders in Queue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
