export default function TeamSectionWithOverlayCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope mb-4 text-center text-5xl font-bold text-gray-900">
            Our brilliant team of{" "}
            <span className="text-indigo-600">Pagedone</span>{" "}
          </h2>
          <p className="text-center text-xl font-medium text-gray-500">
            These people work on making our product best.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:flex-nowrap lg:justify-between">
          <div className="group block">
            <div className="relative">
              <img
                src="https://pagedone.io/asset/uploads/1696238702.png"
                alt="Cody image"
                className="h-[28rem] w-full max-w-sm rounded-2xl object-cover transition-all duration-500"
              />
            </div>
            <div className="relative z-10 mx-7 -translate-y-12 rounded-2xl border border-solid border-gray-200 bg-white p-5 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)]">
              <h4 className="mb-2 text-center text-xl font-medium text-gray-900 capitalize transition-all duration-500">
                Cody Fisher{" "}
              </h4>
              <span className="block text-center text-gray-500 transition-all duration-500">
                Founder
              </span>
            </div>
          </div>
          <div className="group block">
            <div className="relative">
              <img
                src="https://pagedone.io/asset/uploads/1696238805.png"
                alt="Michael image"
                className="h-[28rem] w-full max-w-sm rounded-2xl object-cover transition-all duration-500"
              />
            </div>
            <div className="relative z-10 mx-7 -translate-y-12 rounded-2xl border border-solid border-gray-200 bg-white p-5 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)]">
              <h4 className="mb-2 text-center text-xl font-medium text-gray-900 capitalize transition-all duration-500">
                Michael Cannon{" "}
              </h4>
              <span className="block text-center text-gray-500 transition-all duration-500">
                Sales Executive
              </span>
            </div>
          </div>
          <div className="group block">
            <div className="relative">
              <img
                src="https://pagedone.io/asset/uploads/1696238665.png"
                alt="Alexa image"
                className="h-[28rem] w-full max-w-sm rounded-2xl object-cover transition-all duration-500"
              />
            </div>
            <div className="relative z-10 mx-7 -translate-y-12 rounded-2xl border border-solid border-gray-200 bg-white p-5 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)]">
              <h4 className="mb-2 text-center text-xl font-medium text-gray-900 capitalize transition-all duration-500">
                Alexa Kim{" "}
              </h4>
              <span className="block text-center text-gray-500 transition-all duration-500">
                Product Manager
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
