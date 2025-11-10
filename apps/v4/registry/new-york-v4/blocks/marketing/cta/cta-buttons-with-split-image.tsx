export default function CtaButtonsWithSplitImage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between rounded-2xl bg-gray-50 max-lg:mx-auto max-lg:max-w-xl lg:flex-row">
          <div className="flex w-full flex-col items-center p-10 lg:w-1/2 xl:p-20">
            <h2 className="font-manrope mb-10 text-center text-4xl leading-[3.5rem] font-bold text-gray-900 lg:text-left">
              Subscribe &amp; get reward!
            </h2>
            <div className="mb-10 flex w-full flex-col gap-3 md:flex-row lg:mb-20">
              <input
                type="text"
                name="email"
                className="h-14 w-full rounded-full border border-gray-300 px-5 py-3 text-lg text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none"
                placeholder="Type your email"
              />
              <button className="h-14 rounded-full bg-indigo-600 px-11 py-3.5 font-semibold text-white shadow-sm transition-all duration-500 hover:bg-indigo-700">
                Submit
              </button>
            </div>
            <div className="flex flex-col items-center gap-3 md:flex-row md:gap-0 lg:items-start">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-amber-500 transition-all duration-500">
                  {/* SVG removed */}
                  {/* SVG removed */}
                  {/* SVG removed */}
                  {/* SVG removed */}
                  {/* SVG removed */}
                </div>
                <span className="mr-1 border-gray-600 pr-1 text-gray-600 md:border-r">
                  4.9 Rating
                </span>
              </div>
              <div className="text-gray-600">
                163 Reviews on <span className="text-indigo-600">pagedone</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img
                src="https://pagedone.io/asset/uploads/1696243064.png"
                alt="CTA tailwind section"
                className="w-full rounded-3xl object-cover lg:rounded-l-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
