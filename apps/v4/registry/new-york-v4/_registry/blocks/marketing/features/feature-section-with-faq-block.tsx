export default function FeatureSectionWithFaqBlock() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-11 lg:hidden">
          <h2 className="mb-5 text-center text-4xl leading-[3.25rem] font-bold text-gray-900 lg:text-left">
            Experience the Full Potential of Our platform
          </h2>
          <p className="text-center text-base leading-6 font-normal text-gray-600 lg:text-left">
            Our platform offers a suite of powerful tools and features that
            enable you to unlock the full potential of your business.
          </p>
        </div>
        <div className="mx-auto flex max-w-sm flex-col items-center justify-center gap-10 sm:max-w-lg md:max-w-2xl lg:max-w-full lg:flex-row lg:justify-between lg:gap-28">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-xl">
              <div className="mb-11 max-lg:hidden">
                <h2 className="mb-5 text-center text-4xl leading-[3.25rem] font-bold text-gray-900 lg:text-left">
                  Experience the Full Potential of Our platform
                </h2>
                <p className="text-center text-base leading-6 font-normal text-gray-600 lg:text-left">
                  Our platform offers a suite of powerful tools and features
                  that enable you to unlock the full potential of your business.
                </p>
              </div>
              <div
                className="accordion-group"
                data-accordion="default-accordion"
              >
                <div
                  className="accordion active border-b border-solid border-gray-200 pb-4"
                  id="basic-heading-one-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-indigo-600 always-open inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600"
                    aria-controls="basic-collapse-one-with-arrow-always-open"
                  >
                    <div className="flex items-center gap-4">
                      {/* SVG removed */}
                      Content Management
                    </div>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-one-with-arrow-always-open"
                    className="accordion-content active w-full overflow-hidden px-0 pr-4"
                    aria-labelledby="basic-heading-one-with-arrow-always-open"
                  >
                    <p className="pt-3 text-sm leading-6 text-gray-500">
                      Our focus on providing robust and user-friendly content
                      management capabilities ensures that you can manage your
                      content with confidence, and achieve your content
                      marketing goals with ease.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion border-b border-solid border-gray-200 py-4"
                  id="basic-heading-two-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600"
                    aria-controls="basic-collapse-two-with-arrow-always-open"
                  >
                    <div className="flex items-center gap-4">
                      {/* SVG removed */}
                      Search Engine Optimization
                    </div>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-two-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0 pr-4"
                    aria-labelledby="basic-heading-two-with-arrow-always-open"
                  >
                    <p className="pt-3 text-sm leading-6 text-gray-500">
                      Our focus on providing robust and user-friendly content
                      management capabilities ensures that you can manage your
                      content with confidence, and achieve your content
                      marketing goals with ease.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion border-b border-solid border-gray-200 py-4"
                  id="basic-heading-three-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600"
                    aria-controls="basic-collapse-three-with-arrow-always-open"
                  >
                    <div className="flex items-center gap-4">
                      {/* SVG removed */}
                      User Management
                    </div>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0 pr-4"
                    aria-labelledby="basic-heading-three-with-arrow-always-open"
                  >
                    <p className="pt-3 text-sm leading-6 text-gray-500">
                      Our focus on providing robust and user-friendly content
                      management capabilities ensures that you can manage your
                      content with confidence, and achieve your content
                      marketing goals with ease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="https://pagedone.io/asset/uploads/1695031011.png"
              alt="Feature tailwind section"
              className="w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
