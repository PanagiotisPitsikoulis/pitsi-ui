export default function HorizontalFaq() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-16 gap-10 inline-flex">
          <div className="w-full justify-between items-center lg:gap-5 gap-3 flex lg:flex-row flex-col">
            <div className="flex-col justify-start lg:items-start items-center gap-2.5 inline-flex">
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Discover Through User Questions
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Learn more about us via user inquiries
              </p>
            </div>
            <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                View All FAQs
              </span>
            </button>
          </div>
          <div
            className="accordion-group flex flex-col gap-5 h-full"
            data-accordion="default-accordion"
          >
            <div
              className="accordion flex lg:flex-row flex-col gap-3 p-4 rounded-xl bg-gray-50 accordion-active:bg-indigo-50 accordion-active:border-indigo-600 border border-gray-200 active"
              id="basic-heading-one-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex gap-5 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8 always-open"
                aria-controls="basic-collapse-one-with-arrow-always-open"
              >
                <h5 className="text-start">
                  How do I update my billing information?
                </h5>
              </button>
              <div
                id="basic-collapse-one-with-arrow-always-open"
                className="accordion-content w-full px-0 overflow-hidden active"
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
              className="accordion flex lg:flex-row flex-col gap-3 p-4 rounded-xl bg-gray-50 accordion-active:bg-indigo-50 accordion-active:border-indigo-600 border border-gray-200"
              id="basic-heading-two-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex gap-5 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8"
                aria-controls="basic-collapse-two-with-arrow-always-open"
              >
                <h5 className="text-start">How do I delete my account?</h5>
              </button>
              <div
                id="basic-collapse-two-with-arrow-always-open"
                className="accordion-content w-full px-0 overflow-hidden"
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
              className="accordion flex lg:flex-row flex-col gap-3 p-4 rounded-xl bg-gray-50 accordion-active:bg-indigo-50 accordion-active:border-indigo-600 border border-gray-200"
              id="basic-heading-three-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex gap-5 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8"
                aria-controls="basic-collapse-three-with-arrow-always-open"
              >
                <h5 className="text-start">
                  How do I join a group or community?
                </h5>
              </button>
              <div
                id="basic-collapse-three-with-arrow-always-open"
                className="accordion-content w-full px-0 overflow-hidden"
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
              className="accordion flex lg:flex-row flex-col gap-3 p-4 rounded-xl bg-gray-50 accordion-active:bg-indigo-50 accordion-active:border-indigo-600 border border-gray-200"
              id="basic-heading-four-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex gap-5 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8"
                aria-controls="basic-collapse-four-with-arrow-always-open"
              >
                <h5 className="text-start">
                  How can I contact customer support?
                </h5>
              </button>
              <div
                id="basic-collapse-four-with-arrow-always-open"
                className="accordion-content w-full px-0 overflow-hidden"
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
              className="accordion flex lg:flex-row flex-col gap-3 p-4 rounded-xl bg-gray-50 accordion-active:bg-indigo-50 accordion-active:border-indigo-600 border border-gray-200"
              id="basic-heading-four-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex gap-5 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8"
                aria-controls="basic-collapse-four-with-arrow-always-open"
              >
                <h5 className="text-start">
                  Which is better short term or long term?
                </h5>
              </button>
              <div
                id="basic-collapse-four-with-arrow-always-open"
                className="accordion-content w-full px-0 overflow-hidden"
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
  );
}
