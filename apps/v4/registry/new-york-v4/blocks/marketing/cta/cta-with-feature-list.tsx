export default function CtaWithFeatureList() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex flex-col items-center justify-between gap-10 lg:max-w-4xl lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h2 className="font-manrope mb-8 text-center text-5xl font-bold text-gray-900 lg:text-left">
              Why connect us?
            </h2>
            <ul className="grid gap-5">
              <li className="flex items-center justify-center gap-3 text-gray-600 lg:justify-start">
                {/* SVG removed */}
                Having problem handling finance ?
              </li>
              <li className="flex items-center justify-center gap-3 text-gray-600 lg:justify-start">
                {/* SVG removed */}
                Having revenue problem ?
              </li>
              <li className="flex items-center justify-center gap-3 text-gray-600 lg:justify-start">
                {/* SVG removed */}
                In the needs of professional advice ?
              </li>
            </ul>
          </div>
          <div className="w-full text-center lg:w-1/2">
            <h4 className="font-manrope mb-7 text-2xl font-bold text-gray-900">
              Contact us now
            </h4>
            <button className="h-14 rounded-full bg-indigo-600 px-10 py-3.5 font-semibold text-white shadow-sm transition-all duration-500 hover:bg-indigo-700">
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
