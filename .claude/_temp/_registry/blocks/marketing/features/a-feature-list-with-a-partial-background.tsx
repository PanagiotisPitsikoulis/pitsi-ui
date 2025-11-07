export default function AFeatureListWithAPartialBackground() {
  return (
    <section className="py-24 relative">
      <div className="absolute h-[430px] w-full top-0 bg-slate-100 -z-10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full justify-between items-center lg:gap-10 gap-6 flex lg:flex-row flex-col lg:mb-[68px] mb-12">
          <div className="flex-col justify-start lg:items-start items-center gap-3.5 inline-flex">
            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
              Advanced Functionality
            </h2>
            <p className="lg:max-w-xl w-full text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
              Advanced Functionality integrates cutting-edge features for
              enhanced performance and flexibility.
            </p>
          </div>
          <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
            <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
              Get Started
            </span>
            {/* SVG removed */}
          </button>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 gap-4 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
          <div className="w-full lg:h-full xl:p-8 p-5 bg-white rounded-2xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] flex-col justify-start items-start gap-3 inline-flex">
            <div className="flex-col justify-start items-start gap-1.5 flex">
              <h3 className="text-gray-300 text-2xl font-medium font-manrope leading-9">
                01
              </h3>
              <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                Development
              </h5>
            </div>
            <p className="text-gray-500 text-sm font-normal leading-normal">
              Development involves the creation and improvement of software
              solutions, applications, and systems to meet specific business
              needs and drive innovation.
            </p>
            <a className="group py-2.5 rounded-full justify-center items-center flex">
              <span className="pr-2 py-px text-indigo-600 group-hover:text-indigo-800 text-base font-semibold leading-relaxed">
                Read More
              </span>
              {/* SVG removed */}
            </a>
          </div>
          <div className="w-full lg:h-full xl:p-8 p-5 bg-white rounded-2xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] flex-col justify-start items-start gap-3 inline-flex">
            <div className="flex-col justify-start items-start gap-1.5 flex">
              <h3 className="text-gray-300 text-2xl font-medium font-manrope leading-9">
                02
              </h3>
              <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                Financial Frameworks
              </h5>
            </div>
            <p className="text-gray-500 text-sm font-normal leading-normal">
              Financial Frameworks provide structured approaches to managing and
              planning financial resources, ensuring stability, compliance, and
              strategic growth.
            </p>
            <a className="group py-2.5 rounded-full justify-center items-center flex">
              <span className="pr-2 py-px text-indigo-600 group-hover:text-indigo-800 text-base font-semibold leading-relaxed">
                Read More
              </span>
              {/* SVG removed */}
            </a>
          </div>
          <div className="w-full lg:h-full xl:p-8 p-5 bg-white rounded-2xl shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] flex-col justify-start items-start gap-3 inline-flex">
            <div className="flex-col justify-start items-start gap-1.5 flex">
              <h3 className="text-gray-300 text-2xl font-medium font-manrope leading-9">
                03
              </h3>
              <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                Statistical Insights
              </h5>
            </div>
            <p className="text-gray-500 text-sm font-normal leading-normal">
              Statistical Insights involve analyzing data to uncover patterns,
              trends, and correlations, enabling data-driven decision-making and
              strategic planning.
            </p>
            <a className="group py-2.5 rounded-full justify-center items-center flex">
              <span className="pr-2 py-px text-indigo-600 group-hover:text-indigo-800 text-base font-semibold leading-relaxed">
                Read More
              </span>
              {/* SVG removed */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
