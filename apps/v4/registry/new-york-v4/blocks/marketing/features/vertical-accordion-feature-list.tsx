export default function VerticalAccordionFeatureList() {
  return (
    <section className="bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-5 lg:flex-row lg:gap-8">
            <div className="flex flex-col items-center justify-center gap-3.5 lg:items-start">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-white lg:text-start">
                Key components of our platform
              </h2>
              <p className="text-center text-lg leading-relaxed font-normal text-gray-100 lg:text-start">
                Key components of our platform encompass essential features and
                tools designed to deliver robust functionality, streamline
                operations, and enhance user experience, ensuring optimal
                performance and satisfaction.
              </p>
            </div>
            <button className="flex w-full items-center justify-center rounded-xl bg-emerald-600 px-5 py-2.5 shadow-xs transition-all duration-700 ease-in-out hover:bg-emerald-700 sm:w-fit">
              <span className="px-2 py-px text-base leading-relaxed font-semibold whitespace-nowrap text-white">
                Read More
              </span>
            </button>
          </div>
          <div className="relative flex w-full flex-col overflow-hidden rounded-3xl border-4 border-gray-800 lg:flex-row">
            <div className="relative z-10 w-full rounded-xl pt-6 pr-6 pl-6 lg:w-[534px] lg:pr-0">
              <div
                className="accordion-group w-full"
                data-accordion="default-accordion"
              >
                <div
                  className="accordion active w-full border-b border-solid border-gray-600 pb-4"
                  id="basic-heading-one-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-gray-400 always-open inline-flex w-full items-center justify-between text-lg leading-8 font-medium text-white transition duration-500 hover:text-gray-400"
                    aria-controls="basic-collapse-one-with-arrow-always-open"
                  >
                    <div className="flex flex-row items-center gap-2">
                      {/* SVG removed */}
                      <h5>AI Engine</h5>
                    </div>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-one-with-arrow-always-open"
                    className="accordion-content active w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-one-with-arrow-always-open"
                  >
                    <p className="pt-4 text-base leading-6 font-normal text-gray-100">
                      AI Engine refers to a system powered by artificial
                      intelligence algorithms designed to analyze data, learn
                      patterns, and make autonomous decisions, driving
                      automation and efficiency.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion border-b border-solid border-gray-600 py-4"
                  id="basic-heading-two-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-gray-400 inline-flex w-full items-center justify-between text-lg leading-8 font-medium text-white transition duration-500 hover:text-gray-400"
                    aria-controls="basic-collapse-two-with-arrow-always-open"
                  >
                    <div className="flex flex-row items-center gap-2">
                      {/* SVG removed */}
                      <h5>Live Reports</h5>
                    </div>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-two-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-two-with-arrow-always-open"
                  >
                    <p className="pt-4 text-base leading-6 font-normal text-gray-100">
                      AI Engine refers to a system powered by artificial
                      intelligence algorithms designed to analyze data, learn
                      patterns, and make autonomous decisions, driving
                      automation and efficiency.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion border-b border-solid border-gray-600 py-4"
                  id="basic-heading-three-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-gray-400 inline-flex w-full items-center justify-between text-lg leading-8 font-medium text-white transition duration-500 hover:text-gray-400"
                    aria-controls="basic-collapse-three-with-arrow-always-open"
                  >
                    <div className="flex flex-row items-center gap-2">
                      {/* SVG removed */}
                      <h5>Collaboration</h5>
                    </div>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-three-with-arrow-always-open"
                  >
                    <p className="pt-4 text-base leading-6 font-normal text-gray-100">
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
                    className="accordion-toggle group accordion-active:text-gray-400 inline-flex w-full items-center justify-between text-lg leading-8 font-medium text-white transition duration-500 hover:text-gray-400"
                    aria-controls="basic-collapse-four-with-arrow-always-open"
                  >
                    <div className="flex flex-row items-center gap-2">
                      {/* SVG removed */}
                      <h5>Collective Permissions</h5>
                    </div>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-four-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-four-with-arrow-always-open"
                  >
                    <p className="pt-4 text-base leading-6 font-normal text-gray-100">
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
              className="z-10 w-full rounded-xl object-cover lg:w-[650px] xl:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
