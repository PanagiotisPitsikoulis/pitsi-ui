export default function CtaWithFeatureList() {
  return (
    <section className="py-16 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:max-w-4xl mx-auto flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h2 className="font-manrope text-5xl font-bold text-gray-900 mb-8 text-center lg:text-left">
              Why connect us?
            </h2>
            <ul className="grid gap-5">
              <li className="flex items-center gap-3 text-gray-600 justify-center lg:justify-start">
                {/* SVG removed */}
                Having problem handling finance ?
              </li>
              <li className="flex items-center gap-3 text-gray-600 justify-center lg:justify-start">
                {/* SVG removed */}
                Having revenue problem ?
              </li>
              <li className="flex items-center gap-3 text-gray-600 justify-center lg:justify-start">
                {/* SVG removed */}
                In the needs of professional advice ?
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 text-center">
            <h4 className="font-manrope text-2xl text-gray-900 font-bold mb-7">
              Contact us now
            </h4>
            <button className="h-14 py-3.5 px-10 bg-indigo-600 shadow-sm rounded-full text-white font-semibold transition-all duration-500 hover:bg-indigo-700">
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
