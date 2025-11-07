export default function ScatteredApplicationIcons() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-center items-center gap-10 inline-flex relative">
          <div className="w-full flex-col justify-center items-center gap-2.5 flex">
            <h2 className="max-w-xl text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">
              Seamlessly Integrate Your Preferred Applications
            </h2>
            <p className="max-w-3xl text-center text-gray-500 text-sm font-normal leading-snug">
              Easily connect your favorite apps to make work smoother. When
              these apps work together seamlessly, tasks move between them
              smoothly, making you more productive.
            </p>
          </div>
          <button
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl 
          shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
          >
            <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
              Explore Integration
            </span>
          </button>
        </div>
        <div className="w-full">
          <div className="w-full justify-between items-center gap-2.5 grid">
            <div className="absolute top-10 w-[54px] h-[54px] ml-36 mb-11 p-3 bg-white rounded-md border border-gray-200 justify-center items-center gap-2.5 inline-flex">
              {/* SVG removed */}
            </div>
            <div className="absolute top-32 -ml-7  w-[54px] h-[54px] p-3 bg-white rounded-md border border-gray-200 justify-center items-center gap-2.5 hidden sm:inline-flex">
              {/* SVG removed */}
            </div>
            <div className="absolute top-72 ml-6 w-[54px] h-[54px] p-3 bg-white rounded-md border border-gray-200 justify-center items-center gap-2.5 inline-flex">
              {/* SVG removed */}
            </div>
            <div className="absolute sm:top-[340px] top-96 sm:ml-52 ml-24 w-[54px] h-[54px] p-3 bg-white rounded-md border border-gray-200 justify-center items-center gap-2.5 inline-flex">
              {/* SVG removed */}
            </div>
          </div>
          <div className="w-full justify-end items-center gap-2.5 grid">
            <div className="absolute lg:top-12 top-11 right-[22%] w-[54px] h-[54px] p-3 bg-white rounded-md border border-gray-200 justify-center items-center gap-2.5 inline-flex">
              {/* SVG removed */}
            </div>
            <div className="absolute lg:top-40 top-32 xl:right-[15%] lg:right-[6%] right-[2%] w-[54px] h-[54px] p-3 bg-white rounded-md border border-gray-200 justify-center items-center gap-2.5 hidden sm:inline-flex">
              {/* SVG removed */}
            </div>
            <div className="xl:mr-5 sm:mr-24 mr-16 w-[54px] h-[54px] p-3 bg-white rounded-md border border-gray-200 justify-center items-center gap-2.5 inline-flex">
              {/* SVG removed */}
            </div>
            <div className="absolute lg:top-80 sm:top-[340px] top-96 right-1/3 w-[54px] h-[54px] p-3 bg-white rounded-md border border-gray-200 justify-center items-center gap-2.5 inline-flex">
              {/* SVG removed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
