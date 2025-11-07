export default function FeaturesWithIllustration() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-6 max-w-max lg:max-w-3xl lg:mx-auto">
            Developed from scratch for seamless online functionality
          </h2>
          <p className="text-base font-normal text-gray-500 lg:max-w-2xl lg:mx-auto mb-8">
            Using technology to make finance simpler, smarter and more
            rewarding.{" "}
          </p>
          <div className="flex flex-col justify-center md:flex-row gap-5 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
            <a
              href="javascript:;"
              className="cursor-pointer bg-indigo-600 py-3 px-6 rounded-full flex items-center justify-center text-sm font-semibold text-white transition-all duration-500 focus:outline-none hover:bg-indigo-700"
            >
              Get started
            </a>
            <a
              href="javascript:;"
              className="cursor-pointer bg-indigo-50 py-3 px-6 rounded-full flex items-center justify-center  text-sm font-semibold text-indigo-600 transition-all duration-500 focus:outline-none hover:bg-indigo-100"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
          <div className="relative w-full h-auto md:col-span-2">
            <div className="bg-gray-800 rounded-2xl flex  justify-between flex-row flex-wrap">
              <div className="p-5  xl:p-8 w-full md:w-1/2 ">
                <div className="block"></div>
                <h3 className="text-lg font-bold xl:text-xl text-white py-5 w-full xl:w-64">
                  Accomplish tasks swiftly with online tools.
                </h3>
                <p className="text-xs font-normal text-gray-300 w-full mb-8 xl:w-64">
                  Get quoted and covered in under 10 minutes online. no
                  paperwork or waiting any more{" "}
                </p>
                <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                  View More
                  {/* SVG removed */}
                </button>
              </div>
              <div className="relative hidden h-auto md:w-1/2 md:block">
                <img
                  src="https://pagedone.io/asset/uploads/1695028873.png"
                  alt="Header tailwind Section"
                  className="h-full ml-auto object-cover"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full h-auto">
            <div className="bg-indigo-500 rounded-2xl p-5  xl:p-8 h-full">
              <div className="block"></div>
              <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                Improved technology yields greater value
              </h3>
              <p className="text-xs font-normal text-white mb-8">
                We’ve eliminated old analogue process with state-of-the art tech{" "}
              </p>
              <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                View More
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="relative w-full h-auto">
            <div className="bg-violet-500 rounded-2xl p-5 xl:p-8 h-full">
              <div className="block"></div>
              <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                Build wealth with insurance planning
              </h3>
              <p className="text-xs font-normal text-white mb-8">
                Every life plan policy has a built-in wealth bonus, and we
                contribute too{" "}
              </p>
              <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                View More
                {/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
