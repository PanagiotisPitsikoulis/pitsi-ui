export default function CtaButtonsWithSplitImage() {
  return (
    <section className="py-20 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-2xl flex flex-col items-center justify-between lg:flex-row max-lg:max-w-xl max-lg:mx-auto">
          <div className="w-full lg:w-1/2 flex flex-col items-center p-10 xl:p-20">
            <h2 className="font-manrope text-4xl font-bold text-gray-900 leading-[3.5rem] mb-10 text-center lg:text-left">
              Subscribe &amp; get reward!
            </h2>
            <div className="flex flex-col gap-3 mb-10 lg:mb-20 w-full md:flex-row">
              <input
                type="text"
                name="email"
                className="py-3 px-5 h-14 w-full border border-gray-300 shadow-sm rounded-full text-lg text-gray-900 focus:outline-none placeholder:text-gray-400"
                placeholder="Type your email"
              />
              <button className="h-14 py-3.5 px-11 bg-indigo-600 shadow-sm rounded-full  text-white font-semibold transition-all duration-500 hover:bg-indigo-700">
                Submit
              </button>
            </div>
            <div className="flex items-center gap-3 md:gap-0 lg:items-start flex-col md:flex-row">
              <div className="flex items-center gap-3 ">
                <div className="flex items-center gap-1 text-amber-500 transition-all duration-500  ">
                  {/* SVG removed */}
                  {/* SVG removed */}
                  {/* SVG removed */}
                  {/* SVG removed */}
                  {/* SVG removed */}
                </div>
                <span className="text-gray-600 md:border-r border-gray-600 mr-1 pr-1">
                  4.9 Rating
                </span>
              </div>
              <div className=" text-gray-600">
                163 Reviews on <span className="text-indigo-600">pagedone</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img
                src="https://pagedone.io/asset/uploads/1696243064.png"
                alt="CTA tailwind section"
                className="w-full rounded-3xl lg:rounded-l-none object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
