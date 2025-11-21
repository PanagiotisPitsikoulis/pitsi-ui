export default function AFeatureListWithAPartialBackground() {
  return (
    <section className="relative py-24">
      <div className="absolute top-0 -z-10 h-[430px] w-full bg-slate-100" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex w-full flex-col items-center justify-between gap-6 lg:mb-[68px] lg:flex-row lg:gap-10">
          <div className="inline-flex flex-col items-center justify-start gap-3.5 lg:items-start">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
              Advanced Functionality
            </h2>
            <p className="w-full text-center text-lg leading-relaxed font-normal text-gray-500 lg:max-w-xl lg:text-start">
              Advanced Functionality integrates cutting-edge features for
              enhanced performance and flexibility.
            </p>
          </div>
          <button className="flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800">
            <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
              Get Started
            </span>
            {/* SVG removed */}
          </button>
        </div>
        <div className="gap-4 space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:items-center lg:space-y-0 xl:gap-8">
          <div className="inline-flex w-full flex-col items-start justify-start gap-3 rounded-2xl bg-white p-5 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] lg:h-full xl:p-8">
            <div className="flex flex-col items-start justify-start gap-1.5">
              <h3 className="font-manrope text-2xl leading-9 font-medium text-gray-300">
                01
              </h3>
              <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                Development
              </h5>
            </div>
            <p className="text-sm leading-normal font-normal text-gray-500">
              Development involves the creation and improvement of software
              solutions, applications, and systems to meet specific business
              needs and drive innovation.
            </p>
            <a className="group flex items-center justify-center rounded-full py-2.5">
              <span className="py-px pr-2 text-base leading-relaxed font-semibold text-indigo-600 group-hover:text-indigo-800">
                Read More
              </span>
              {/* SVG removed */}
            </a>
          </div>
          <div className="inline-flex w-full flex-col items-start justify-start gap-3 rounded-2xl bg-white p-5 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] lg:h-full xl:p-8">
            <div className="flex flex-col items-start justify-start gap-1.5">
              <h3 className="font-manrope text-2xl leading-9 font-medium text-gray-300">
                02
              </h3>
              <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                Financial Frameworks
              </h5>
            </div>
            <p className="text-sm leading-normal font-normal text-gray-500">
              Financial Frameworks provide structured approaches to managing and
              planning financial resources, ensuring stability, compliance, and
              strategic growth.
            </p>
            <a className="group flex items-center justify-center rounded-full py-2.5">
              <span className="py-px pr-2 text-base leading-relaxed font-semibold text-indigo-600 group-hover:text-indigo-800">
                Read More
              </span>
              {/* SVG removed */}
            </a>
          </div>
          <div className="inline-flex w-full flex-col items-start justify-start gap-3 rounded-2xl bg-white p-5 shadow-[0px_15px_40px_-4px_rgba(16,_24,_40,_0.04)] lg:h-full xl:p-8">
            <div className="flex flex-col items-start justify-start gap-1.5">
              <h3 className="font-manrope text-2xl leading-9 font-medium text-gray-300">
                03
              </h3>
              <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                Statistical Insights
              </h5>
            </div>
            <p className="text-sm leading-normal font-normal text-gray-500">
              Statistical Insights involve analyzing data to uncover patterns,
              trends, and correlations, enabling data-driven decision-making and
              strategic planning.
            </p>
            <a className="group flex items-center justify-center rounded-full py-2.5">
              <span className="py-px pr-2 text-base leading-relaxed font-semibold text-indigo-600 group-hover:text-indigo-800">
                Read More
              </span>
              {/* SVG removed */}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
