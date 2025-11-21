export default function HorizontalFaq() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-16">
          <div className="flex w-full flex-col items-center justify-between gap-3 lg:flex-row lg:gap-5">
            <div className="inline-flex flex-col items-center justify-start gap-2.5 lg:items-start">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                Discover Through User Questions
              </h2>
              <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
                Learn more about us via user inquiries
              </p>
            </div>
            <button className="flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800">
              <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                View All FAQs
              </span>
            </button>
          </div>
          <div
            className="accordion-group flex h-full flex-col gap-5"
            data-accordion="default-accordion"
          >
            <div
              className="accordion accordion-active:bg-indigo-50 accordion-active:border-indigo-600 active flex flex-col gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 lg:flex-row"
              id="basic-heading-one-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group accordion-active:text-gray-900 accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8 always-open inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                aria-controls="basic-collapse-one-with-arrow-always-open"
              >
                <h5 className="text-start">
                  How do I update my billing information?
                </h5>
              </button>
              <div
                id="basic-collapse-one-with-arrow-always-open"
                className="accordion-content active w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-one-with-arrow-always-open"
              >
                <p className="text-sm font-normal text-gray-600">
                  To update your billing information, log in and go to the
                  billing or payment page. Look for an option to "Update payment
                  method" or "Edit billing information" and follow the prompts.
                  Be sure to save your changes before exiting.
                </p>
              </div>
            </div>
            <div
              className="accordion accordion-active:bg-indigo-50 accordion-active:border-indigo-600 flex flex-col gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 lg:flex-row"
              id="basic-heading-two-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group accordion-active:text-gray-900 accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8 inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                aria-controls="basic-collapse-two-with-arrow-always-open"
              >
                <h5 className="text-start">How do I delete my account?</h5>
              </button>
              <div
                id="basic-collapse-two-with-arrow-always-open"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-two-with-arrow-always-open"
              >
                <p className="text-sm font-normal text-gray-600">
                  To update your billing information, log in and go to the
                  billing or payment page. Look for an option to "Update payment
                  method" or "Edit billing information" and follow the prompts.
                  Be sure to save your changes before exiting.
                </p>
              </div>
            </div>
            <div
              className="accordion accordion-active:bg-indigo-50 accordion-active:border-indigo-600 flex flex-col gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 lg:flex-row"
              id="basic-heading-three-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group accordion-active:text-gray-900 accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8 inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                aria-controls="basic-collapse-three-with-arrow-always-open"
              >
                <h5 className="text-start">
                  How do I join a group or community?
                </h5>
              </button>
              <div
                id="basic-collapse-three-with-arrow-always-open"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-three-with-arrow-always-open"
              >
                <p className="text-sm font-normal text-gray-600">
                  To update your billing information, log in and go to the
                  billing or payment page. Look for an option to "Update payment
                  method" or "Edit billing information" and follow the prompts.
                  Be sure to save your changes before exiting.
                </p>
              </div>
            </div>
            <div
              className="accordion accordion-active:bg-indigo-50 accordion-active:border-indigo-600 flex flex-col gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 lg:flex-row"
              id="basic-heading-four-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group accordion-active:text-gray-900 accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8 inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                aria-controls="basic-collapse-four-with-arrow-always-open"
              >
                <h5 className="text-start">
                  How can I contact customer support?
                </h5>
              </button>
              <div
                id="basic-collapse-four-with-arrow-always-open"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-four-with-arrow-always-open"
              >
                <p className="text-sm font-normal text-gray-600">
                  To update your billing information, log in and go to the
                  billing or payment page. Look for an option to "Update payment
                  method" or "Edit billing information" and follow the prompts.
                  Be sure to save your changes before exiting.
                </p>
              </div>
            </div>
            <div
              className="accordion accordion-active:bg-indigo-50 accordion-active:border-indigo-600 flex flex-col gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 lg:flex-row"
              id="basic-heading-four-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group accordion-active:text-gray-900 accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8 inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                aria-controls="basic-collapse-four-with-arrow-always-open"
              >
                <h5 className="text-start">
                  Which is better short term or long term?
                </h5>
              </button>
              <div
                id="basic-collapse-four-with-arrow-always-open"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-four-with-arrow-always-open"
              >
                <p className="text-sm font-normal text-gray-600">
                  To update your billing information, log in and go to the
                  billing or payment page. Look for an option to "Update payment
                  method" or "Edit billing information" and follow the prompts.
                  Be sure to save your changes before exiting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
