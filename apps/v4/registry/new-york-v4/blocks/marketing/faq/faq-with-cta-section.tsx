export default function FaqWithCtaSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-16">
          <div className="flex w-full flex-col items-start justify-start gap-9 lg:gap-12">
            <div className="flex w-full flex-col items-center justify-start gap-2">
              <div className="flex items-center justify-center gap-1.5 rounded border border-indigo-400 bg-indigo-50 px-3 py-0.5">
                <span className="px-0.5 text-center text-xs leading-normal font-medium text-indigo-600">
                  FAQ
                </span>
              </div>
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                Frequently asked questions
              </h2>
            </div>
            <div
              className="accordion-group flex h-full flex-col gap-5"
              data-accordion="default-accordion"
            >
              <div
                className="accordion accordion-active:bg-gray-800 active rounded-xl bg-gray-50 p-5"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:pb-3_5 accordion-active:text-white accordion-active:text-xl accordion-active:leading-8 accordion-active:font-medium always-open inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How do I update my billing information?
                  </h5>
                  <a className="max-h-6 max-w-6">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content active w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="border-t border-gray-700 pt-3.5 text-sm font-normal text-gray-400">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:bg-gray-800 rounded-xl bg-gray-50 p-5"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:pb-3_5 accordion-active:text-white accordion-active:text-xl accordion-active:leading-8 accordion-active:font-medium inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-left">How do I delete my account?</h5>
                  <a className="max-h-6 max-w-6">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="border-t border-gray-700 pt-3.5 text-sm font-normal text-gray-400">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:bg-gray-800 rounded-xl bg-gray-50 p-5"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:pb-3_5 accordion-active:text-white accordion-active:text-xl accordion-active:leading-8 accordion-active:font-medium inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How do I join a group or community?
                  </h5>
                  <a className="max-h-6 max-w-6">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="border-t border-gray-700 pt-3.5 text-sm font-normal text-gray-400">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:bg-gray-800 rounded-xl bg-gray-50 p-5"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:pb-3_5 accordion-active:text-white accordion-active:text-xl accordion-active:leading-8 accordion-active:font-medium inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How can I contact customer support?
                  </h5>
                  <a className="max-h-6 max-w-6">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="border-t border-gray-700 pt-3.5 text-sm font-normal text-gray-400">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:bg-gray-800 rounded-xl bg-gray-50 p-5"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:pb-3_5 accordion-active:text-white accordion-active:text-xl accordion-active:leading-8 accordion-active:font-medium inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    Which is better short term or long term?
                  </h5>
                  <a className="max-h-6 max-w-6">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="border-t border-gray-700 pt-3.5 text-sm font-normal text-gray-400">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-5 rounded-xl border border-gray-200 p-5 sm:flex-row sm:gap-8">
            <div className="inline-flex flex-col items-center justify-start gap-2.5 sm:items-start">
              <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-gray-900 sm:text-start">
                Need Help?
              </h3>
              <p className="text-center text-base leading-relaxed font-normal text-gray-500 sm:text-start">
                We're here to assist you with any inquiries!
              </p>
            </div>
            <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
              <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                Contact us
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
