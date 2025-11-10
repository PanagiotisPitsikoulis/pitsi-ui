export default function TailwindCssFaqWithCtaForm() {
  return (
    <section>
      <div className="inline-flex w-full flex-col items-start justify-start gap-2.5 bg-white p-4 sm:p-6 md:p-12">
        <div className="grid w-full grid-cols-1 items-start justify-start gap-10 rounded-2xl bg-gray-50 p-5 sm:p-8 lg:grid-cols-2">
          <div className="inline-flex w-full flex-col items-center justify-center gap-8 lg:items-start">
            <div className="flex flex-col items-center justify-center gap-3 lg:items-start lg:gap-5">
              <h2 className="font-manrope w-full text-center text-4xl leading-tight font-bold text-gray-900 sm:text-5xl sm:leading-tight lg:max-w-xl lg:text-start">
                Frequently Asked
                <span className="text-indigo-600">Questions</span>
              </h2>
              <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
                Visit our Frequently Asked Questions to find helpful
                information.
              </p>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <div className="flex w-full flex-col items-start justify-start gap-6">
                <div className="flex w-full flex-col items-start justify-center gap-2">
                  <h4 className="text-xl leading-8 font-medium text-gray-900">
                    Can't locate the answers you need?
                  </h4>
                  <p className="text-base leading-relaxed font-normal text-gray-500">
                    We're here to help with any questions you have!
                  </p>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-1.5">
                  <label className="text-sm leading-normal font-medium text-gray-600">
                    Ask Your Question
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-gray-300 bg-transparent px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="write here..."
                  />
                </div>
              </div>
              <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
                <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                  Sent Now
                </span>
              </button>
            </div>
          </div>
          <div
            className="accordion-group flex h-full flex-col gap-5"
            data-accordion="default-accordion"
          >
            <div
              className="accordion active border-b border-gray-200 pb-5"
              id="basic-heading-one-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group accordion-active:text-gray-900 always-open inline-flex w-full items-center justify-start gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                aria-controls="basic-collapse-one-with-arrow-always-open"
              >
                <a className="max-h-6 max-w-6">{/* SVG removed */}</a>
                <h5 className="text-left">
                  How do I update my billing information?
                </h5>
              </button>
              <div
                id="basic-collapse-one-with-arrow-always-open"
                className="accordion-content active w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-one-with-arrow-always-open"
              >
                <p className="pt-2 text-sm font-normal text-gray-500">
                  To update your billing information, log in and go to the
                  billing or payment page. Look for an option to "Update payment
                  method" or "Edit billing information" and follow the prompts.
                  Be sure to save your changes before exiting.
                </p>
              </div>
            </div>
            <div
              className="accordion border-b border-gray-200 pb-5"
              id="basic-heading-two-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group accordion-active:text-gray-900 inline-flex w-full items-center justify-start gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                aria-controls="basic-collapse-two-with-arrow-always-open"
              >
                <a className="max-h-6 max-w-6">{/* SVG removed */}</a>
                <h5 className="text-left">How do I delete my account?</h5>
              </button>
              <div
                id="basic-collapse-two-with-arrow-always-open"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-two-with-arrow-always-open"
              >
                <p className="pt-2 text-sm font-normal text-gray-500">
                  To update your billing information, log in and go to the
                  billing or payment page. Look for an option to "Update payment
                  method" or "Edit billing information" and follow the prompts.
                  Be sure to save your changes before exiting.
                </p>
              </div>
            </div>
            <div
              className="accordion border-b border-gray-200 pb-5"
              id="basic-heading-three-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group accordion-active:text-gray-900 inline-flex w-full items-center justify-start gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                aria-controls="basic-collapse-three-with-arrow-always-open"
              >
                <a className="max-h-6 max-w-6">{/* SVG removed */}</a>
                <h5 className="text-left">
                  How do I join a group or community?
                </h5>
              </button>
              <div
                id="basic-collapse-three-with-arrow-always-open"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-three-with-arrow-always-open"
              >
                <p className="pt-2 text-sm font-normal text-gray-500">
                  To update your billing information, log in and go to the
                  billing or payment page. Look for an option to "Update payment
                  method" or "Edit billing information" and follow the prompts.
                  Be sure to save your changes before exiting.
                </p>
              </div>
            </div>
            <div
              className="accordion border-b border-gray-200 pb-5"
              id="basic-heading-four-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group accordion-active:text-gray-900 inline-flex w-full items-center justify-start gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                aria-controls="basic-collapse-four-with-arrow-always-open"
              >
                <a className="max-h-6 max-w-6">{/* SVG removed */}</a>
                <h5 className="text-left">
                  How can I contact customer support?
                </h5>
              </button>
              <div
                id="basic-collapse-four-with-arrow-always-open"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-four-with-arrow-always-open"
              >
                <p className="pt-2 text-sm font-normal text-gray-500">
                  To update your billing information, log in and go to the
                  billing or payment page. Look for an option to "Update payment
                  method" or "Edit billing information" and follow the prompts.
                  Be sure to save your changes before exiting.
                </p>
              </div>
            </div>
            <div
              className="accordion"
              id="basic-heading-four-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group accordion-active:text-gray-900 inline-flex w-full items-center justify-start gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                aria-controls="basic-collapse-four-with-arrow-always-open"
              >
                <a className="max-h-6 max-w-6">{/* SVG removed */}</a>
                <h5 className="text-left">
                  Which is better short term or long term?
                </h5>
              </button>
              <div
                id="basic-collapse-four-with-arrow-always-open"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-four-with-arrow-always-open"
              >
                <p className="pt-2 text-sm font-normal text-gray-500">
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
