export default function AboutUsTwoColumnCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center justify-start gap-8 lg:grid-cols-2">
          <div className="inline-flex flex-col items-center justify-start gap-5 lg:items-start lg:gap-9">
            <div className="flex flex-col items-center justify-start gap-3 lg:items-start">
              <span className="text-center text-base leading-relaxed font-normal text-gray-400 lg:text-start">
                About Us
              </span>
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                How to Gain Insights into Your Marketing Performance
              </h2>
              <p className="text-center text-lg leading-relaxed font-normal text-gray-500 lg:text-start">
                Understanding the effectiveness of your marketing efforts is
                crucial for refining your strategy and driving better results.
                This guide will walk you through the essential steps to gain
                meaningful insights into your marketing performance
              </p>
            </div>
            <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
              <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                Contact Us
              </span>
              {/* SVG removed */}
            </button>
          </div>
          <div className="grid w-full grid-cols-1 flex-col items-start justify-start gap-8 md:grid-cols-2">
            <div className="group inline-flex w-full flex-col items-center justify-start gap-2.5 rounded-xl bg-gray-50 p-4 transition-all duration-700 ease-in-out hover:bg-indigo-600">
              <div className="flex flex-col items-center justify-start gap-5">
                <div className="inline-flex h-12 w-12 items-center justify-center gap-1 rounded bg-indigo-50">
                  {/* SVG removed */}
                </div>
                <div className="flex flex-col items-center justify-start gap-3">
                  <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-white">
                    Trusted Employees
                  </h5>
                  <p className="text-center text-sm leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-white">
                    Each member of our team brings a wealth of expertise and a
                    commitment to your success.
                  </p>
                </div>
              </div>
            </div>
            <div className="group inline-flex w-full flex-col items-center justify-start gap-2.5 rounded-xl bg-gray-50 p-4 transition-all duration-700 ease-in-out hover:bg-indigo-600">
              <div className="flex flex-col items-center justify-start gap-5">
                <div className="inline-flex h-12 w-12 items-center justify-center gap-1 rounded bg-indigo-50">
                  {/* SVG removed */}
                </div>
                <div className="flex flex-col items-center justify-start gap-3">
                  <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-white">
                    Year of Experience
                  </h5>
                  <p className="text-center text-sm leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-white">
                    Explore what defines a successful project and how to achieve
                    it. From meticulous planning.
                  </p>
                </div>
              </div>
            </div>
            <div className="group inline-flex w-full flex-col items-center justify-start gap-2.5 rounded-xl bg-gray-50 p-4 transition-all duration-700 ease-in-out hover:bg-indigo-600">
              <div className="flex flex-col items-center justify-start gap-5">
                <div className="inline-flex h-12 w-12 items-center justify-center gap-1 rounded bg-indigo-50">
                  {/* SVG removed */}
                </div>
                <div className="flex flex-col items-center justify-start gap-3">
                  <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-white">
                    Positive Reviews
                  </h5>
                  <p className="text-center text-sm leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-white">
                    Discover the impact of positive reviews and how they reflect
                    the quality and satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="group inline-flex w-full flex-col items-center justify-start gap-2.5 rounded-xl bg-gray-50 p-4 transition-all duration-700 ease-in-out hover:bg-indigo-600">
              <div className="flex flex-col items-center justify-start gap-5">
                <div className="inline-flex h-12 w-12 items-center justify-center gap-1 rounded bg-indigo-50">
                  {/* SVG removed */}
                </div>
                <div className="flex flex-col items-center justify-start gap-3">
                  <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-white">
                    Achieve Awards
                  </h5>
                  <p className="text-center text-sm leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-white">
                    Uncover the significance of achieving awards and the
                    recognition they bring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
