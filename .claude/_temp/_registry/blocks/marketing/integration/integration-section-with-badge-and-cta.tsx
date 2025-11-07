export default function IntegrationSectionWithBadgeAndCta() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-11 gap-7 inline-flex">
          <div className="w-full flex-col justify-center items-center gap-1.5 flex">
            <div className="px-5 py-2 rounded-full border border-gray-200 justify-center items-center gap-2 inline-flex">
              {/* SVG removed */}
              <span className="text-center text-gray-500 text-xs font-normal leading-4">
                Featured Integrations
              </span>
            </div>
            <div className="w-full flex-col justify-center items-center gap-2.5 flex">
              <h2 className="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">
                All Types of Integration
              </h2>
              <p className="max-w-2xl text-center text-gray-500 text-sm font-normal leading-normal">
                Connect your favorite apps and services to enhance your
                experience and boost productivity. Synchronize data and unleash
                the full potential of our platform.
              </p>
            </div>
          </div>
          <div className="justify-center items-center inline-flex -space-x-5">
            <a className="w-[52px] h-[52px] p-3 bg-gray-900 rounded-full border border-white justify-center items-center gap-2.5 flex">
              {/* SVG removed */}
            </a>
            <a className="w-[52px] h-[52px] p-3 bg-sky-100 rounded-full border border-white justify-center items-center gap-2.5 flex">
              {/* SVG removed */}
            </a>
            <a className="w-[52px] h-[52px] p-3 bg-yellow-300 rounded-full border border-white justify-center items-center gap-2.5 flex">
              {/* SVG removed */}
            </a>
            <a className="w-[52px] h-[52px] p-3 bg-neutral-900 rounded-full border border-white justify-center items-center gap-2.5 flex">
              {/* SVG removed */}
            </a>
            <a className="w-[52px] h-[52px] p-3 bg-gray-100 rounded-full border border-white justify-center items-center gap-2.5 flex">
              {/* SVG removed */}
            </a>
            <a className="w-[52px] h-[52px] p-3 bg-purple-900 rounded-full border border-white justify-center items-center gap-2.5 flex">
              {/* SVG removed */}
            </a>
            <a className="w-[52px] h-[52px] p-3 bg-blue-100 rounded-full border border-white justify-center items-center gap-2.5 flex">
              {/* SVG removed */}
            </a>
            <a className="w-[52px] h-[52px] p-3 bg-orange-500 rounded-full border border-white justify-center items-center gap-2.5 flex">
              {/* SVG removed */}
            </a>
            <a className="w-[52px] h-[52px] p-3 bg-indigo-500 rounded-full border border-white justify-center items-center gap-2.5 flex">
              {/* SVG removed */}
            </a>
            <a className="w-[52px] h-[52px] p-3 bg-gray-900 rounded-full border border-white justify-center items-center gap-2.5 flex">
              {/* SVG removed */}
            </a>
          </div>
          <button className="px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-full justify-center items-center flex">
            <span className="px-2 py-px text-indigo-600 text-base font-semibold leading-relaxed">
              See All Integration
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
