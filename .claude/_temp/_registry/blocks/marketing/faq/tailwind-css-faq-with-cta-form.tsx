export default function TailwindCssFaqWithCtaForm() {
  return (
    <section>
      <div className="w-full md:p-12 sm:p-6 p-4 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="w-full sm:p-8 p-5 bg-gray-50 rounded-2xl justify-start items-start gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-center lg:items-start items-center gap-8 inline-flex">
            <div className="flex-col justify-center lg:items-start items-center lg:gap-5 gap-3 flex">
              <h2 className="lg:max-w-xl w-full text-gray-900 sm:text-5xl text-4xl font-bold font-manrope sm:leading-tight leading-tight lg:text-start text-center">
                Frequently Asked
                <span className="text-indigo-600">Questions</span>
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Visit our Frequently Asked Questions to find helpful
                information.
              </p>
            </div>
            <div className="w-full p-6 bg-gray-50 rounded-2xl border border-gray-200 flex-col justify-start items-start gap-10 flex">
              <div className="w-full flex-col justify-start items-start gap-6 flex">
                <div className="w-full flex-col justify-center items-start gap-2 flex">
                  <h4 className="text-gray-900 text-xl font-medium leading-8">
                    Can't locate the answers you need?
                  </h4>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">
                    We're here to help with any questions you have!
                  </p>
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label className="text-gray-600 text-sm font-medium leading-normal">
                    Ask Your Question
                  </label>
                  <input
                    type="text"
                    className="w-full focus:outline-none bg-transparent shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] px-4 py-2.5 rounded-xl border border-gray-300 placeholder-gray-400 text-gray-900 text-base font-normal leading-relaxed"
                    placeholder="write here..."
                  />
                </div>
              </div>
              <button className="sm:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                  Sent Now
                </span>
              </button>
            </div>
          </div>
          <div
            className="accordion-group flex flex-col gap-5 h-full"
            data-accordion="default-accordion"
          >
            <div
              className="accordion pb-5 border-b border-gray-200 active"
              id="basic-heading-one-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex gap-5 items-center justify-start text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 always-open"
                aria-controls="basic-collapse-one-with-arrow-always-open"
              >
                <a className="max-w-6 max-h-6">{/* SVG removed */}</a>
                <h5 className="text-left">
                  How do I update my billing information?
                </h5>
              </button>
              <div
                id="basic-collapse-one-with-arrow-always-open"
                className="accordion-content w-full px-0 overflow-hidden active"
                aria-labelledby="basic-heading-one-with-arrow-always-open"
              >
                <p className="text-sm font-normal text-gray-500 pt-2">
                  To update your billing information, log in and go to the
                  billing or payment page. Look for an option to "Update payment
                  method" or "Edit billing information" and follow the prompts.
                  Be sure to save your changes before exiting.
                </p>
              </div>
            </div>
            <div
              className="accordion pb-5 border-b border-gray-200"
              id="basic-heading-two-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex gap-5 items-center justify-start text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900"
                aria-controls="basic-collapse-two-with-arrow-always-open"
              >
                <a className="max-w-6 max-h-6">{/* SVG removed */}</a>
                <h5 className="text-left">How do I delete my account?</h5>
              </button>
              <div
                id="basic-collapse-two-with-arrow-always-open"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-two-with-arrow-always-open"
              >
                <p className="text-sm font-normal text-gray-500 pt-2">
                  To update your billing information, log in and go to the
                  billing or payment page. Look for an option to "Update payment
                  method" or "Edit billing information" and follow the prompts.
                  Be sure to save your changes before exiting.
                </p>
              </div>
            </div>
            <div
              className="accordion pb-5 border-b border-gray-200"
              id="basic-heading-three-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex gap-5 items-center justify-start text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900"
                aria-controls="basic-collapse-three-with-arrow-always-open"
              >
                <a className="max-w-6 max-h-6">{/* SVG removed */}</a>
                <h5 className="text-left">
                  How do I join a group or community?
                </h5>
              </button>
              <div
                id="basic-collapse-three-with-arrow-always-open"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-three-with-arrow-always-open"
              >
                <p className="text-sm font-normal text-gray-500 pt-2">
                  To update your billing information, log in and go to the
                  billing or payment page. Look for an option to "Update payment
                  method" or "Edit billing information" and follow the prompts.
                  Be sure to save your changes before exiting.
                </p>
              </div>
            </div>
            <div
              className="accordion pb-5 border-b border-gray-200"
              id="basic-heading-four-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex gap-5 items-center justify-start text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900"
                aria-controls="basic-collapse-four-with-arrow-always-open"
              >
                <a className="max-w-6 max-h-6">{/* SVG removed */}</a>
                <h5 className="text-left">
                  How can I contact customer support?
                </h5>
              </button>
              <div
                id="basic-collapse-four-with-arrow-always-open"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-four-with-arrow-always-open"
              >
                <p className="text-sm font-normal text-gray-500 pt-2">
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
                className="accordion-toggle group inline-flex gap-5 items-center justify-start text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900"
                aria-controls="basic-collapse-four-with-arrow-always-open"
              >
                <a className="max-w-6 max-h-6">{/* SVG removed */}</a>
                <h5 className="text-left">
                  Which is better short term or long term?
                </h5>
              </button>
              <div
                id="basic-collapse-four-with-arrow-always-open"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-four-with-arrow-always-open"
              >
                <p className="text-sm font-normal text-gray-500 pt-2">
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
