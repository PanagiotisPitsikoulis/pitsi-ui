export default function FaqWithCtaForm() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-16 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3.5 flex">
            <div className="px-2.5 py-0.5 bg-blue-50 rounded-full border border-blue-600 justify-center items-center gap-1.5 flex">
              <span className="text-center text-blue-600 text-xs font-medium leading-normal">
                FAQ
              </span>
            </div>
            <div className="w-full flex-col justify-start items-center gap-2.5 flex">
              <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                Discover Clear Solutions
              </h2>
              <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
                Trusted in more than 100 countries and 5 million customers.
              </p>
            </div>
          </div>
          <div className="w-full justify-start items-start lg:gap-x-8 lg:gap-y-0 gap-y-8 grid lg:grid-cols-12 grid-cols-1">
            <div
              className="accordion-group flex flex-col gap-5 h-full lg:col-span-7 col-span-12 "
              data-accordion="default-accordion"
            >
              <div
                className="accordion flex flex-col active"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group rounded-xl bg-gray-50 hover:bg-blue-100 accordion-active:bg-blue-100 p-4 inline-flex items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 hover:text-gray-900 accordion-active:text-gray-900 always-open"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How do I update my billing information?
                  </h5>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content w-full rounded-xl bg-gray-50 hover:bg-blue-100 accordion-active:bg-blue-100 overflow-hidden active"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-500 p-5">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
              <div
                className="accordion flex flex-col"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between rounded-xl bg-gray-50 hover:bg-blue-100 accordion-active:bg-blue-100 p-4 text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 hover:text-gray-900 accordion-active:text-gray-900"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-left">How do I delete my account?</h5>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full rounded-xl bg-gray-50 hover:bg-blue-100 accordion-active:bg-blue-100 overflow-hidden"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-500 p-5">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
              <div
                className="accordion flex flex-col"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between rounded-xl bg-gray-50 hover:bg-blue-100 accordion-active:bg-blue-100 p-4 text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 hover:text-gray-900 accordion-active:text-gray-900"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How do I join a group or community?
                  </h5>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full rounded-xl bg-gray-50 hover:bg-blue-100 accordion-active:bg-blue-100 overflow-hidden"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-500 p-5">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
              <div
                className="accordion flex flex-col"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between rounded-xl bg-gray-50 hover:bg-blue-100 accordion-active:bg-blue-100 p-4 text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 hover:text-gray-900 accordion-active:text-gray-900"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How can I contact customer support?
                  </h5>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full rounded-xl bg-gray-50 hover:bg-blue-100 accordion-active:bg-blue-100 overflow-hidden"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-500 p-5">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
              <div
                className="accordion flex flex-col"
                id="basic-heading-five-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between rounded-xl bg-gray-50 hover:bg-blue-100 accordion-active:bg-blue-100 p-4 text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 hover:text-gray-900 accordion-active:text-gray-900"
                  aria-controls="basic-collapse-five-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    Which is better short term or long term?
                  </h5>
                </button>
                <div
                  id="basic-collapse-five-with-arrow-always-open"
                  className="accordion-content w-full rounded-xl bg-gray-50 hover:bg-blue-100 accordion-active:bg-blue-100 overflow-hidden"
                  aria-labelledby="basic-heading-five-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-500 p-5">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 col-span-12 w-full p-6 bg-gray-50 rounded-2xl flex-col justify-start items-center gap-5 inline-flex">
              <h4 className="w-full text-center text-gray-900 text-xl font-normal leading-8 pb-5 border-b border-gray-200">
                Response to the Inquiry
              </h4>
              <div className="w-full flex-col justify-start items-start gap-9 flex">
                <div className="w-full flex-col justify-start items-start gap-6 flex">
                  <div className="w-full flex-col justify-center items-start gap-2 flex">
                    <h4 className="text-gray-900 text-xl font-medium leading-8">
                      Having trouble finding the right answers?
                    </h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Don’t worry! Reach out to us with your questions.
                    </p>
                  </div>
                  <div className="w-full flex-col justify-start items-start flex gap-1.5">
                    <label className="text-gray-600 text-sm font-medium leading-normal">
                      Ask Your Question
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-xl bg-transparent shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-base font-normal leading-relaxed focus:outline-none border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="write here..."
                    />
                  </div>
                </div>
                <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                    Contact Us
                  </span>
                  {/* SVG removed */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
