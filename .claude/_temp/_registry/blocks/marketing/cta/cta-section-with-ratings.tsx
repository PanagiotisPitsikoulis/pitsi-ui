export default function CtaSectionWithRatings() {
  return (
    <section className="py-20 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-12 lg:gap-32 lg:flex-row w-full max-lg:max-w-xl max-lg:mx-auto">
          <div className="w-full lg:w-3/5">
            <h2 className="font-manrope text-4xl font-bold text-gray-900 leading-[3.5rem] mb-12 lg:mb-24 text-center lg:text-left">
              Subscribe to our mailing list and stay up to date
            </h2>
            <div className="flex items-center lg:items-start lg:justify-start justify-center flex-col md:flex-row md:gap-0 gap-2">
              <div className="flex items-center gap-3 md:border-r border-gray-200 md:mr-3 md:pr-3">
                <div className="flex items-center gap-2 text-amber-500 transition-all duration-500  ">
                  {/* SVG removed */}
                  {/* SVG removed */}
                  {/* SVG removed */}
                  {/* SVG removed */}
                  {/* SVG removed */}
                </div>
                <span className="text-lg text-gray-600">4.9 Rating</span>
              </div>
              <div className="text-lg text-gray-600">
                163 Reviews on{" "}
                <span className="text-emerald-500">Trustpilot</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <p className="text-lg text-gray-500 leading-8 mb-10  text-center lg:text-left">
              Join our community of subscribers and receive regular updates
              delivered straight to your inbox. It's quick, easy, and free
            </p>
            <div className="flex flex-col gap-3 md:flex-row">
              <input
                type="text"
                name="email"
                className="py-3 px-5 h-14 w-full border border-gray-300 shadow-sm rounded-full text-gray-900 focus:outline-none placeholder:text-gray-400"
                placeholder="Type your email"
              />
              <button className="h-14 py-3.5 px-8 bg-indigo-600 shadow-sm rounded-full  text-white font-semibold transition-all duration-500 hover:bg-indigo-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
