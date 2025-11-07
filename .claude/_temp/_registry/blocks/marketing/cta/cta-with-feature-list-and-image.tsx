export default function CtaWithFeatureListAndImage() {
  return (
    <section className="py-20 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-14 lg:flex-row max-lg:max-w-xl max-lg:mx-auto">
          <div className="w-full lg:w-3/5">
            <h2 className="font-manrope text-4xl font-bold text-gray-900 leading-[3.5rem] mb-9 text-center lg:text-left">
              Are you ready to start your investment
            </h2>
            <div className="flex flex-col gap-5 lg:gap-24 lg:flex-row">
              <ul className="grid gap-5">
                <li className="flex items-center gap-3 text-gray-600 ">
                  {/* SVG removed */}
                  Unlimited update and project
                </li>
                <li className="flex items-center gap-3 text-gray-600 ">
                  {/* SVG removed */}
                  24*7 service
                </li>
                <li className="flex items-center gap-3 text-gray-600 ">
                  {/* SVG removed */}
                  Chat support
                </li>
                <li className="flex items-center gap-3 text-gray-600 ">
                  {/* SVG removed */}
                  Analytic and chart
                </li>
              </ul>
              <ul className="grid gap-5">
                <li className="flex items-center gap-3 text-gray-600 ">
                  {/* SVG removed */}
                  Darks light mode
                </li>
                <li className="flex items-center gap-3 text-gray-600 ">
                  {/* SVG removed */}
                  Library of our specialist
                </li>
                <li className="flex items-center gap-3 text-gray-600 ">
                  {/* SVG removed */}
                  Own analytic platform
                </li>
                <li className="flex items-center gap-3 text-gray-600 ">
                  {/* SVG removed */}
                  Unlimited advice
                </li>
              </ul>
            </div>
            <div className="flex flex-col mt-14 gap-5 lg:flex-row">
              <button className="py-3.5 px-7 bg-indigo-600 rounded-full transition-all duration-500 text-white font-semibold hover:bg-indigo-700">
                Download App
              </button>
              <button className="py-3.5 px-7 border border-gray-300 shadow-sm rounded-full transition-all duration-500 text-gray-900 font-semibold hover:bg-gray-50">
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
  );
}
