export default function ThreeColumnTailwindFaqSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-center justify-start gap-16">
          <div className="flex w-full flex-col items-center justify-start gap-5 lg:flex-row lg:gap-8">
            <div className="inline-flex w-full flex-col items-center justify-center gap-3 lg:items-start lg:gap-5">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                Frequently asked questions
              </h2>
              <p className="w-full text-center text-base leading-relaxed font-normal text-gray-500 lg:max-w-3xl lg:text-start">
                Our Frequently Asked Questions section is designed to provide
                quick and easy answers to common inquiries. Whether you're
                looking for information on our services.
              </p>
            </div>
            <button className="flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800">
              {/* SVG removed */}
              <span className="px-2 py-px text-base leading-relaxed font-semibold whitespace-nowrap text-white">
                View All
              </span>
            </button>
          </div>
          <div
            className="accordion-group grid h-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            data-accordion="default-accordion"
          >
            <div className="flex flex-col gap-7">
              <div
                className="accordion accordion-active:rounded-3xl accordion-active:border-indigo-600 rounded-full border border-gray-200 px-4 py-3 sm:px-5 sm:py-4"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I delete my account? </h5>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="pt-1.5 text-sm font-normal text-gray-500">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:rounded-3xl accordion-active:border-indigo-600 rounded-full border border-gray-200 px-4 py-3 sm:px-5 sm:py-4"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I change my email?</h5>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="pt-1.5 text-sm font-normal text-gray-500">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:rounded-3xl accordion-active:border-indigo-600 rounded-full border border-gray-200 px-4 py-3 sm:px-5 sm:py-4"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I change my password?</h5>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="pt-1.5 text-sm font-normal text-gray-500">
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
                className="accordion accordion-active:rounded-3xl accordion-active:border-indigo-600 rounded-full border border-gray-200 px-4 py-3 sm:px-5 sm:py-4"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-start">Which is safe investment?</h5>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="pt-1.5 text-sm font-normal text-gray-500">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:rounded-3xl accordion-active:border-indigo-600 rounded-full border border-gray-200 px-4 py-3 sm:px-5 sm:py-4"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-start">What is the payment process?</h5>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="pt-1.5 text-sm font-normal text-gray-500">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:rounded-3xl accordion-active:border-indigo-600 rounded-full border border-gray-200 px-4 py-3 sm:px-5 sm:py-4"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I contact support?</h5>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="pt-1.5 text-sm font-normal text-gray-500">
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
                className="accordion accordion-active:rounded-3xl accordion-active:border-indigo-600 rounded-full border border-gray-200 px-4 py-3 sm:px-5 sm:py-4"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    How do I join a group or community?
                  </h5>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="pt-1.5 text-sm font-normal text-gray-500">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:rounded-3xl accordion-active:border-indigo-600 active rounded-full border border-gray-200 px-4 py-3 sm:px-5 sm:py-4"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium always-open inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    How do I update my billing information?
                  </h5>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content active w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="pt-1.5 text-sm font-normal text-gray-500">
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
  )
}
