export default function CtaSectionWithRatings() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-center justify-between gap-12 max-lg:mx-auto max-lg:max-w-xl lg:flex-row lg:gap-32">
          <div className="w-full lg:w-3/5">
            <h2 className="font-manrope mb-12 text-center text-4xl leading-[3.5rem] font-bold text-gray-900 lg:mb-24 lg:text-left">
              Subscribe to our mailing list and stay up to date
            </h2>
            <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-0 lg:items-start lg:justify-start">
              <div className="flex items-center gap-3 border-gray-200 md:mr-3 md:border-r md:pr-3">
                <div className="flex items-center gap-2 text-amber-500 transition-all duration-500">
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
            <p className="mb-10 text-center text-lg leading-8 text-gray-500 lg:text-left">
              Join our community of subscribers and receive regular updates
              delivered straight to your inbox. It's quick, easy, and free
            </p>
            <div className="flex flex-col gap-3 md:flex-row">
              <input
                type="text"
                name="email"
                className="h-14 w-full rounded-full border border-gray-300 px-5 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none"
                placeholder="Type your email"
              />
              <button className="h-14 rounded-full bg-indigo-600 px-8 py-3.5 font-semibold text-white shadow-sm transition-all duration-500 hover:bg-indigo-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
