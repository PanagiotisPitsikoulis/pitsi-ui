export default function CtaWithFeatureListAndImage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-14 max-lg:mx-auto max-lg:max-w-xl lg:flex-row">
          <div className="w-full lg:w-3/5">
            <h2 className="font-manrope mb-9 text-center text-4xl leading-[3.5rem] font-bold text-gray-900 lg:text-left">
              Are you ready to start your investment
            </h2>
            <div className="flex flex-col gap-5 lg:flex-row lg:gap-24">
              <ul className="grid gap-5">
                <li className="flex items-center gap-3 text-gray-600">
                  {/* SVG removed */}
                  Unlimited update and project
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  {/* SVG removed */}
                  24*7 service
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  {/* SVG removed */}
                  Chat support
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  {/* SVG removed */}
                  Analytic and chart
                </li>
              </ul>
              <ul className="grid gap-5">
                <li className="flex items-center gap-3 text-gray-600">
                  {/* SVG removed */}
                  Darks light mode
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  {/* SVG removed */}
                  Library of our specialist
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  {/* SVG removed */}
                  Own analytic platform
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  {/* SVG removed */}
                  Unlimited advice
                </li>
              </ul>
            </div>
            <div className="mt-14 flex flex-col gap-5 lg:flex-row">
              <button className="rounded-full bg-indigo-600 px-7 py-3.5 font-semibold text-white transition-all duration-500 hover:bg-indigo-700">
                Download App
              </button>
              <button className="rounded-full border border-gray-300 px-7 py-3.5 font-semibold text-gray-900 shadow-sm transition-all duration-500 hover:bg-gray-50">
                View Demo
              </button>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <div className="relative">
              <img
                src="https://pagedone.io/asset/uploads/1696243046.png"
                alt="CTA tailwind section"
                className="w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
