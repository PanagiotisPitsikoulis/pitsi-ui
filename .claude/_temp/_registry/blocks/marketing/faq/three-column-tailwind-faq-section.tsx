export default function ThreeColumnTailwindFaqSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center gap-16 inline-flex">
          <div className="w-full justify-start items-center lg:gap-8 gap-5 flex lg:flex-row flex-col">
            <div className="w-full flex-col justify-center lg:items-start items-center lg:gap-5 gap-3 inline-flex">
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Frequently asked questions
              </h2>
              <p className="lg:max-w-3xl w-full text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Our Frequently Asked Questions section is designed to provide
                quick and easy answers to common inquiries. Whether you're
                looking for information on our services.
              </p>
            </div>
            <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              {/* SVG removed */}
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed whitespace-nowrap">
                View All
              </span>
            </button>
          </div>
          <div
            className="accordion-group grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 h-full"
            data-accordion="default-accordion"
          >
            <div className="flex flex-col gap-7">
              <div
                className="accordion rounded-full accordion-active:rounded-3xl accordion-active:border-indigo-600 border border-gray-200 sm:px-5 px-4 sm:py-4 py-3"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:font-medium"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I delete my account? </h5>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-500 pt-1.5">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
                  </p>
                </div>
              </div>
              <div
                className="accordion rounded-full accordion-active:rounded-3xl accordion-active:border-indigo-600 border border-gray-200 sm:px-5 px-4 sm:py-4 py-3"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:font-medium"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I change my email?</h5>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-500 pt-1.5">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
                  </p>
                </div>
              </div>
              <div
                className="accordion rounded-full accordion-active:rounded-3xl accordion-active:border-indigo-600 border border-gray-200 sm:px-5 px-4 sm:py-4 py-3"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:font-medium"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I change my password?</h5>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-500 pt-1.5">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-7">
              <div
                className="accordion rounded-full accordion-active:rounded-3xl accordion-active:border-indigo-600 border border-gray-200 sm:px-5 px-4 sm:py-4 py-3"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:font-medium"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-start">Which is safe investment?</h5>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-500 pt-1.5">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
                  </p>
                </div>
              </div>
              <div
                className="accordion rounded-full accordion-active:rounded-3xl accordion-active:border-indigo-600 border border-gray-200 sm:px-5 px-4 sm:py-4 py-3"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:font-medium"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-start">What is the payment process?</h5>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-500 pt-1.5">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
                  </p>
                </div>
              </div>
              <div
                className="accordion rounded-full accordion-active:rounded-3xl accordion-active:border-indigo-600 border border-gray-200 sm:px-5 px-4 sm:py-4 py-3"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:font-medium"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I contact support?</h5>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-500 pt-1.5">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-7">
              <div
                className="accordion rounded-full accordion-active:rounded-3xl accordion-active:border-indigo-600 border border-gray-200 sm:px-5 px-4 sm:py-4 py-3"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:font-medium"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    How do I join a group or community?
                  </h5>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-500 pt-1.5">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
                  </p>
                </div>
              </div>
              <div
                className="accordion rounded-full accordion-active:rounded-3xl accordion-active:border-indigo-600 border border-gray-200 sm:px-5 px-4 sm:py-4 py-3 active"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:font-medium always-open"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    How do I update my billing information?
                  </h5>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden active"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-500 pt-1.5">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
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
