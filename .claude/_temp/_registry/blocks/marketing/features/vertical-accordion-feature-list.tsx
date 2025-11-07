export default function VerticalAccordionFeatureList() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full justify-start items-center lg:gap-8 gap-5 flex lg:flex-row flex-col">
            <div className="flex-col justify-center lg:items-start items-center gap-3.5 flex">
              <h2 className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Key components of our platform
              </h2>
              <p className="text-gray-100 text-lg font-normal leading-relaxed lg:text-start text-center">
                Key components of our platform encompass essential features and
                tools designed to deliver robust functionality, streamline
                operations, and enhance user experience, ensuring optimal
                performance and satisfaction.
              </p>
            </div>
            <button className="sm:w-fit w-full px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 transition-all duration-700 ease-in-out rounded-xl shadow-xs justify-center items-center flex">
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed whitespace-nowrap">
                Read More
              </span>
            </button>
          </div>
          <div className="w-full relative rounded-3xl border-4 border-gray-800 flex lg:flex-row flex-col overflow-hidden">
            <div className="w-full lg:w-[534px] rounded-xl pt-6 pl-6 lg:pr-0 pr-6 relative z-10">
              <div
                className="accordion-group w-full"
                data-accordion="default-accordion"
              >
                <div
                  className="w-full accordion pb-4 border-b border-solid border-gray-600 active"
                  id="basic-heading-one-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between text-lg font-medium leading-8 text-white w-full transition duration-500 hover:text-gray-400 accordion-active:text-gray-400 always-open"
                    aria-controls="basic-collapse-one-with-arrow-always-open"
                  >
                    <div className="flex items-center flex-row gap-2">
                      {/* SVG removed */}
                      <h5>AI Engine</h5>
                    </div>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-one-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden active"
                    aria-labelledby="basic-heading-one-with-arrow-always-open"
                  >
                    <p className="text-base font-normal text-gray-100 leading-6 pt-4">
                      AI Engine refers to a system powered by artificial
                      intelligence algorithms designed to analyze data, learn
                      patterns, and make autonomous decisions, driving
                      automation and efficiency.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion py-4 border-b border-solid border-gray-600"
                  id="basic-heading-two-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between text-lg font-medium leading-8 text-white w-full transition duration-500 hover:text-gray-400 accordion-active:text-gray-400"
                    aria-controls="basic-collapse-two-with-arrow-always-open"
                  >
                    <div className="flex items-center flex-row gap-2">
                      {/* SVG removed */}
                      <h5>Live Reports</h5>
                    </div>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-two-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden"
                    aria-labelledby="basic-heading-two-with-arrow-always-open"
                  >
                    <p className="text-base font-normal text-gray-100 leading-6 pt-4">
                      AI Engine refers to a system powered by artificial
                      intelligence algorithms designed to analyze data, learn
                      patterns, and make autonomous decisions, driving
                      automation and efficiency.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion py-4 border-b border-solid border-gray-600"
                  id="basic-heading-three-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between text-lg font-medium leading-8 text-white w-full transition duration-500 hover:text-gray-400 accordion-active:text-gray-400"
                    aria-controls="basic-collapse-three-with-arrow-always-open"
                  >
                    <div className="flex items-center flex-row gap-2">
                      {/* SVG removed */}
                      <h5>Collaboration</h5>
                    </div>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden"
                    aria-labelledby="basic-heading-three-with-arrow-always-open"
                  >
                    <p className="text-base font-normal text-gray-100 leading-6 pt-4">
                      AI Engine refers to a system powered by artificial
                      intelligence algorithms designed to analyze data, learn
                      patterns, and make autonomous decisions, driving
                      automation and efficiency.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion py-4"
                  id="basic-heading-four-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between text-lg font-medium leading-8 text-white w-full transition duration-500 hover:text-gray-400 accordion-active:text-gray-400"
                    aria-controls="basic-collapse-four-with-arrow-always-open"
                  >
                    <div className="flex items-center flex-row gap-2">
                      {/* SVG removed */}
                      <h5>Collective Permissions</h5>
                    </div>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-four-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden"
                    aria-labelledby="basic-heading-four-with-arrow-always-open"
                  >
                    <p className="text-base font-normal text-gray-100 leading-6 pt-4">
                      AI Engine refers to a system powered by artificial
                      intelligence algorithms designed to analyze data, learn
                      patterns, and make autonomous decisions, driving
                      automation and efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* SVG removed */}
            <img
              src="https://pagedone.io/asset/uploads/1720177368.png"
              alt="feature Key components image"
              className="z-10 xl:w-full lg:w-[650px] w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
