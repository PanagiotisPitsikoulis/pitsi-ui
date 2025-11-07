export default function StatsWithIconBackground() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-gray-900 font-bold text-center mb-16 lg:text-left">
          Our Stats
        </h2>
        <div className="flex flex-col flex-1 gap-10 justify-center lg:flex-row lg:justify-between">
          <div className="w-full mx-auto lg:w-1/4 bg-white shadow-sm py-9 px-7 rounded-xl">
            <div className="mb-7 w-16 h-16 bg-indigo-50 rounded-full flex justify-center items-center mx-auto lg:mx-0">
              {/* SVG removed */}
            </div>
            <h4 className=" text-xl text-gray-500 mb-7 text-center lg:text-left">
              Expert Consultants{" "}
            </h4>
            <div className="font-manrope font-semibold text-gray-900 text-5xl text-center lg:text-left">
              260+
            </div>
          </div>
          <div className="w-full mx-auto lg:w-1/4 bg-white shadow-sm py-9 px-7 rounded-xl">
            <div className="mb-7 w-16 h-16 bg-emerald-50 rounded-full flex justify-center items-center mx-auto lg:mx-0">
              {/* SVG removed */}
            </div>
            <h4 className=" text-xl text-gray-500 mb-7 text-center lg:text-left">
              Active Clients{" "}
            </h4>
            <div className="font-manrope font-semibold text-gray-900 text-5xl text-center lg:text-left">
              975+
            </div>
          </div>
          <div className="w-full mx-auto lg:w-1/4 bg-white shadow-sm py-9 px-7 rounded-xl">
            <div className="mb-7 w-16 h-16 bg-amber-50 rounded-full flex justify-center items-center mx-auto lg:mx-0">
              {/* SVG removed */}
            </div>
            <h4 className=" text-xl text-gray-500 mb-7 text-center lg:text-left">
              Projects Delivered{" "}
            </h4>
            <div className="font-manrope font-semibold text-gray-900 text-5xl text-center lg:text-left">
              724+
            </div>
          </div>
          <div className="w-full mx-auto lg:w-1/4 bg-white shadow-sm py-9 px-7 rounded-xl">
            <div className="mb-7 w-16 h-16 bg-sky-50 rounded-full flex justify-center items-center mx-auto lg:mx-0">
              {/* SVG removed */}
            </div>
            <h4 className=" text-xl text-gray-500 mb-7 text-center lg:text-left">
              Orders in Queue
            </h4>
            <div className="font-manrope font-semibold text-gray-900 text-5xl text-center lg:text-left">
              89+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
