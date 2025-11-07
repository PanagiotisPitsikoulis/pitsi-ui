export default function FeatureSectionWithFaqBlock() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-11 lg:hidden">
          <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left">
            Experience the Full Potential of Our platform
          </h2>
          <p className="text-base text-gray-600 font-normal leading-6 text-center lg:text-left">
            Our platform offers a suite of powerful tools and features that
            enable you to unlock the full potential of your business.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 lg:gap-28 lg:flex-row lg:justify-between max-w-sm mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-full">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-xl">
              <div className="mb-11 max-lg:hidden">
                <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left">
                  Experience the Full Potential of Our platform
                </h2>
                <p className="text-base text-gray-600 font-normal leading-6 text-center lg:text-left">
                  Our platform offers a suite of powerful tools and features
                  that enable you to unlock the full potential of your business.
                </p>
              </div>
              <div
                className="accordion-group"
                data-accordion="default-accordion"
              >
                <div
                  className="accordion pb-4 border-b border-solid border-gray-200 active"
                  id="basic-heading-one-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600 always-open"
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
                    className="accordion-content w-full px-0 overflow-hidden pr-4 active"
                    aria-labelledby="basic-heading-one-with-arrow-always-open"
                  >
                    <p className="text-sm text-gray-500 leading-6 pt-3">
                      Our focus on providing robust and user-friendly content
                      management capabilities ensures that you can manage your
                      content with confidence, and achieve your content
                      marketing goals with ease.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion py-4 border-b border-solid border-gray-200 "
                  id="basic-heading-two-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600"
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
                    className="accordion-content w-full px-0 overflow-hidden pr-4"
                    aria-labelledby="basic-heading-two-with-arrow-always-open"
                  >
                    <p className="text-sm text-gray-500 leading-6 pt-3">
                      Our focus on providing robust and user-friendly content
                      management capabilities ensures that you can manage your
                      content with confidence, and achieve your content
                      marketing goals with ease.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion py-4 border-b border-solid border-gray-200"
                  id="basic-heading-three-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600"
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
                    className="accordion-content w-full px-0 overflow-hidden pr-4"
                    aria-labelledby="basic-heading-three-with-arrow-always-open"
                  >
                    <p className="text-sm text-gray-500 leading-6 pt-3">
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
  );
}
