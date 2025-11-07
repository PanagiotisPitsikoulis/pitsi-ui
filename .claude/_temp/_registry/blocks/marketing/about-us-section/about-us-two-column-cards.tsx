export default function AboutUsTwoColumnCards() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="flex-col justify-start lg:items-start items-center lg:gap-9 gap-5 inline-flex">
            <div className="flex-col justify-start lg:items-start items-center gap-3 flex">
              <span className="text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                About Us
              </span>
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                How to Gain Insights into Your Marketing Performance
              </h2>
              <p className="text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
                Understanding the effectiveness of your marketing efforts is
                crucial for refining your strategy and driving better results.
                This guide will walk you through the essential steps to gain
                meaningful insights into your marketing performance
              </p>
            </div>
            <button className="sm:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                Contact Us
              </span>
              {/* SVG removed */}
            </button>
          </div>
          <div className="w-full flex-col justify-start items-start gap-8 grid md:grid-cols-2 grid-cols-1">
            <div className="w-full group p-4 bg-gray-50 hover:bg-indigo-600 transition-all duration-700 ease-in-out rounded-xl flex-col justify-start items-center gap-2.5 inline-flex">
              <div className="flex-col justify-start items-center gap-5 flex">
                <div className="w-12 h-12 bg-indigo-50 rounded justify-center items-center gap-1 inline-flex">
                  {/* SVG removed */}
                </div>
                <div className="flex-col justify-start items-center gap-3 flex">
                  <h5 className="text-center text-gray-900 group-hover:text-white transition-all duration-700 ease-in-out text-lg font-medium leading-relaxed">
                    Trusted Employees
                  </h5>
                  <p className="text-center text-gray-500 group-hover:text-white transition-all duration-700 ease-in-out text-sm font-normal leading-relaxed">
                    Each member of our team brings a wealth of expertise and a
                    commitment to your success.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full group p-4 bg-gray-50 hover:bg-indigo-600 transition-all duration-700 ease-in-out rounded-xl flex-col justify-start items-center gap-2.5 inline-flex">
              <div className="flex-col justify-start items-center gap-5 flex">
                <div className="w-12 h-12 bg-indigo-50 rounded justify-center items-center gap-1 inline-flex">
                  {/* SVG removed */}
                </div>
                <div className="flex-col justify-start items-center gap-3 flex">
                  <h5 className="text-center text-gray-900 group-hover:text-white transition-all duration-700 ease-in-out text-lg font-medium leading-relaxed">
                    Year of Experience
                  </h5>
                  <p className="text-center text-gray-500 group-hover:text-white transition-all duration-700 ease-in-out text-sm font-normal leading-relaxed">
                    Explore what defines a successful project and how to achieve
                    it. From meticulous planning.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full group p-4 bg-gray-50 hover:bg-indigo-600 transition-all duration-700 ease-in-out rounded-xl flex-col justify-start items-center gap-2.5 inline-flex">
              <div className="flex-col justify-start items-center gap-5 flex">
                <div className="w-12 h-12 bg-indigo-50 rounded justify-center items-center gap-1 inline-flex">
                  {/* SVG removed */}
                </div>
                <div className="flex-col justify-start items-center gap-3 flex">
                  <h5 className="text-center text-gray-900 group-hover:text-white transition-all duration-700 ease-in-out text-lg font-medium leading-relaxed">
                    Positive Reviews
                  </h5>
                  <p className="text-center text-gray-500 group-hover:text-white transition-all duration-700 ease-in-out text-sm font-normal leading-relaxed">
                    Discover the impact of positive reviews and how they reflect
                    the quality and satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full group p-4 bg-gray-50 hover:bg-indigo-600 transition-all duration-700 ease-in-out rounded-xl flex-col justify-start items-center gap-2.5 inline-flex">
              <div className="flex-col justify-start items-center gap-5 flex">
                <div className="w-12 h-12 bg-indigo-50 rounded justify-center items-center gap-1 inline-flex">
                  {/* SVG removed */}
                </div>
                <div className="flex-col justify-start items-center gap-3 flex">
                  <h5 className="text-center text-gray-900 group-hover:text-white transition-all duration-700 ease-in-out text-lg font-medium leading-relaxed">
                    Achieve Awards
                  </h5>
                  <p className="text-center text-gray-500 group-hover:text-white transition-all duration-700 ease-in-out text-sm font-normal leading-relaxed">
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
  );
}
