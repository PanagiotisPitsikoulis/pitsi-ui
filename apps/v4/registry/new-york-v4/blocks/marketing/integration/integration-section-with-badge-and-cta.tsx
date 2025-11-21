export default function IntegrationSectionWithBadgeAndCta() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-7 lg:gap-11">
          <div className="flex w-full flex-col items-center justify-center gap-1.5">
            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-5 py-2">
              {/* SVG removed */}
              <span className="text-center text-xs leading-4 font-normal text-gray-500">
                Featured Integrations
              </span>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-2.5">
              <h2 className="font-manrope text-center text-3xl leading-normal font-bold text-gray-900">
                All Types of Integration
              </h2>
              <p className="max-w-2xl text-center text-sm leading-normal font-normal text-gray-500">
                Connect your favorite apps and services to enhance your
                experience and boost productivity. Synchronize data and unleash
                the full potential of our platform.
              </p>
            </div>
          </div>
          <div className="inline-flex items-center justify-center -space-x-5">
            <a className="flex h-[52px] w-[52px] items-center justify-center gap-2.5 rounded-full border border-white bg-gray-900 p-3">
              {/* SVG removed */}
            </a>
            <a className="flex h-[52px] w-[52px] items-center justify-center gap-2.5 rounded-full border border-white bg-sky-100 p-3">
              {/* SVG removed */}
            </a>
            <a className="flex h-[52px] w-[52px] items-center justify-center gap-2.5 rounded-full border border-white bg-yellow-300 p-3">
              {/* SVG removed */}
            </a>
            <a className="flex h-[52px] w-[52px] items-center justify-center gap-2.5 rounded-full border border-white bg-neutral-900 p-3">
              {/* SVG removed */}
            </a>
            <a className="flex h-[52px] w-[52px] items-center justify-center gap-2.5 rounded-full border border-white bg-gray-100 p-3">
              {/* SVG removed */}
            </a>
            <a className="flex h-[52px] w-[52px] items-center justify-center gap-2.5 rounded-full border border-white bg-purple-900 p-3">
              {/* SVG removed */}
            </a>
            <a className="flex h-[52px] w-[52px] items-center justify-center gap-2.5 rounded-full border border-white bg-blue-100 p-3">
              {/* SVG removed */}
            </a>
            <a className="flex h-[52px] w-[52px] items-center justify-center gap-2.5 rounded-full border border-white bg-orange-500 p-3">
              {/* SVG removed */}
            </a>
            <a className="flex h-[52px] w-[52px] items-center justify-center gap-2.5 rounded-full border border-white bg-indigo-500 p-3">
              {/* SVG removed */}
            </a>
            <a className="flex h-[52px] w-[52px] items-center justify-center gap-2.5 rounded-full border border-white bg-gray-900 p-3">
              {/* SVG removed */}
            </a>
          </div>
          <button className="flex items-center justify-center rounded-full bg-indigo-50 px-5 py-2.5 transition-all duration-700 ease-in-out hover:bg-indigo-100">
            <span className="px-2 py-px text-base leading-relaxed font-semibold text-indigo-600">
              See All Integration
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
