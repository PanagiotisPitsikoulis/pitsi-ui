export default function FaqWithCtaSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-16 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-start lg:gap-12 gap-9 flex">
            <div className="w-full flex-col justify-start items-center gap-2 flex">
              <div className="px-3 py-0.5 bg-indigo-50 rounded border border-indigo-400 justify-center items-center gap-1.5 flex">
                <span className="px-0.5 text-center text-indigo-600 text-xs font-medium leading-normal">
                  FAQ
                </span>
              </div>
              <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                Frequently asked questions
              </h2>
            </div>
            <div
              className="accordion-group flex flex-col gap-5 h-full"
              data-accordion="default-accordion"
            >
              <div
                className="accordion rounded-xl bg-gray-50 accordion-active:bg-gray-800 p-5 active"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:pb-3_5 accordion-active:text-white accordion-active:text-xl accordion-active:leading-8 accordion-active:font-medium always-open"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How do I update my billing information?
                  </h5>
                  <a className="max-w-6 max-h-6">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden active"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-400 pt-3.5 border-t border-gray-700">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
              <div
                className="accordion rounded-xl bg-gray-50 accordion-active:bg-gray-800 p-5"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:pb-3_5 accordion-active:text-white accordion-active:text-xl accordion-active:leading-8 accordion-active:font-medium"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-left">How do I delete my account?</h5>
                  <a className="max-w-6 max-h-6">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-400 pt-3.5 border-t border-gray-700">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
              <div
                className="accordion rounded-xl bg-gray-50 accordion-active:bg-gray-800 p-5"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:pb-3_5 accordion-active:text-white accordion-active:text-xl accordion-active:leading-8 accordion-active:font-medium"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How do I join a group or community?
                  </h5>
                  <a className="max-w-6 max-h-6">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-400 pt-3.5 border-t border-gray-700">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
              <div
                className="accordion rounded-xl bg-gray-50 accordion-active:bg-gray-800 p-5"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:pb-3_5 accordion-active:text-white accordion-active:text-xl accordion-active:leading-8 accordion-active:font-medium"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How can I contact customer support?
                  </h5>
                  <a className="max-w-6 max-h-6">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-400 pt-3.5 border-t border-gray-700">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
              <div
                className="accordion rounded-xl bg-gray-50 accordion-active:bg-gray-800 p-5"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:pb-3_5 accordion-active:text-white accordion-active:text-xl accordion-active:leading-8 accordion-active:font-medium"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    Which is better short term or long term?
                  </h5>
                  <a className="max-w-6 max-h-6">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-400 pt-3.5 border-t border-gray-700">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-5 rounded-xl border border-gray-200 justify-between items-center sm:gap-8 gap-5 flex sm:flex-row flex-col">
            <div className="flex-col justify-start sm:items-start items-center gap-2.5 inline-flex">
              <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9 sm:text-start text-center">
                Need Help?
              </h3>
              <p className="text-gray-500 text-base font-normal leading-relaxed sm:text-start text-center">
                We're here to assist you with any inquiries!
              </p>
            </div>
            <button className="sm:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                Contact us
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
