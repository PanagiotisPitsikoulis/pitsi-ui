export default function FeaturesWithIllustration() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="mb-6 max-w-max text-center text-4xl leading-[3.25rem] font-bold text-gray-900 lg:mx-auto lg:max-w-3xl">
            Developed from scratch for seamless online functionality
          </h2>
          <p className="mb-8 text-base font-normal text-gray-500 lg:mx-auto lg:max-w-2xl">
            Using technology to make finance simpler, smarter and more
            rewarding.{" "}
          </p>
          <div className="mx-auto flex max-w-lg flex-col justify-center gap-5 md:max-w-2xl md:flex-row lg:max-w-full">
            <a
              href="javascript:;"
              className="flex cursor-pointer items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-500 hover:bg-indigo-700 focus:outline-none"
            >
              Get started
            </a>
            <a
              href="javascript:;"
              className="flex cursor-pointer items-center justify-center rounded-full bg-indigo-50 px-6 py-3 text-sm font-semibold text-indigo-600 transition-all duration-500 hover:bg-indigo-100 focus:outline-none"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="mx-auto grid max-w-lg grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-full lg:grid-cols-4">
          <div className="relative h-auto w-full md:col-span-2">
            <div className="flex flex-row flex-wrap justify-between rounded-2xl bg-gray-800">
              <div className="w-full p-5 md:w-1/2 xl:p-8">
                <div className="block"></div>
                <h3 className="w-full py-5 text-lg font-bold text-white xl:w-64 xl:text-xl">
                  Accomplish tasks swiftly with online tools.
                </h3>
                <p className="mb-8 w-full text-xs font-normal text-gray-300 xl:w-64">
                  Get quoted and covered in under 10 minutes online. no
                  paperwork or waiting any more{" "}
                </p>
                <button className="flex items-center justify-between gap-2 rounded-full border border-solid border-gray-300 px-5 py-2 text-xs font-semibold text-white transition-all duration-500 hover:bg-white/5">
                  View More
                  {/* SVG removed */}
                </button>
              </div>
              <div className="relative hidden h-auto md:block md:w-1/2">
                <img
                  src="https://pagedone.io/asset/uploads/1695028873.png"
                  alt="Header tailwind Section"
                  className="ml-auto h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="relative h-auto w-full">
            <div className="h-full rounded-2xl bg-indigo-500 p-5 xl:p-8">
              <div className="block"></div>
              <h3 className="py-5 text-lg font-bold text-white xl:text-xl">
                Improved technology yields greater value
              </h3>
              <p className="mb-8 text-xs font-normal text-white">
                We’ve eliminated old analogue process with state-of-the art
                tech{" "}
              </p>
              <button className="flex items-center justify-between gap-2 rounded-full border border-solid border-gray-300 px-5 py-2 text-xs font-semibold text-white transition-all duration-500 hover:bg-white/5">
                View More
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="relative h-auto w-full">
            <div className="h-full rounded-2xl bg-violet-500 p-5 xl:p-8">
              <div className="block"></div>
              <h3 className="py-5 text-lg font-bold text-white xl:text-xl">
                Build wealth with insurance planning
              </h3>
              <p className="mb-8 text-xs font-normal text-white">
                Every life plan policy has a built-in wealth bonus, and we
                contribute too{" "}
              </p>
              <button className="flex items-center justify-between gap-2 rounded-full border border-solid border-gray-300 px-5 py-2 text-xs font-semibold text-white transition-all duration-500 hover:bg-white/5">
                View More
                {/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
