export default function FaqWithCtaForm() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-16">
          <div className="flex w-full flex-col items-center justify-start gap-3.5">
            <div className="flex items-center justify-center gap-1.5 rounded-full border border-blue-600 bg-blue-50 px-2.5 py-0.5">
              <span className="text-center text-xs leading-normal font-medium text-blue-600">
                FAQ
              </span>
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-2.5">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                Discover Clear Solutions
              </h2>
              <p className="text-center text-base leading-relaxed font-normal text-gray-500">
                Trusted in more than 100 countries and 5 million customers.
              </p>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-y-8 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
            <div
              className="accordion-group col-span-12 flex h-full flex-col gap-5 lg:col-span-7"
              data-accordion="default-accordion"
            >
              <div
                className="accordion active flex flex-col"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:bg-blue-100 accordion-active:text-gray-900 always-open inline-flex w-full items-center justify-between rounded-xl bg-gray-50 p-4 text-lg leading-relaxed font-normal text-gray-900 transition duration-500 hover:bg-blue-100 hover:text-gray-900"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How do I update my billing information?
                  </h5>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content accordion-active:bg-blue-100 active w-full overflow-hidden rounded-xl bg-gray-50 hover:bg-blue-100"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="p-5 text-sm font-normal text-gray-500">
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
                  className="accordion-toggle group accordion-active:bg-blue-100 accordion-active:text-gray-900 inline-flex w-full items-center justify-between rounded-xl bg-gray-50 p-4 text-lg leading-relaxed font-normal text-gray-900 transition duration-500 hover:bg-blue-100 hover:text-gray-900"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-left">How do I delete my account?</h5>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content accordion-active:bg-blue-100 w-full overflow-hidden rounded-xl bg-gray-50 hover:bg-blue-100"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="p-5 text-sm font-normal text-gray-500">
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
                  className="accordion-toggle group accordion-active:bg-blue-100 accordion-active:text-gray-900 inline-flex w-full items-center justify-between rounded-xl bg-gray-50 p-4 text-lg leading-relaxed font-normal text-gray-900 transition duration-500 hover:bg-blue-100 hover:text-gray-900"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How do I join a group or community?
                  </h5>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content accordion-active:bg-blue-100 w-full overflow-hidden rounded-xl bg-gray-50 hover:bg-blue-100"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="p-5 text-sm font-normal text-gray-500">
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
                  className="accordion-toggle group accordion-active:bg-blue-100 accordion-active:text-gray-900 inline-flex w-full items-center justify-between rounded-xl bg-gray-50 p-4 text-lg leading-relaxed font-normal text-gray-900 transition duration-500 hover:bg-blue-100 hover:text-gray-900"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How can I contact customer support?
                  </h5>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content accordion-active:bg-blue-100 w-full overflow-hidden rounded-xl bg-gray-50 hover:bg-blue-100"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="p-5 text-sm font-normal text-gray-500">
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
                  className="accordion-toggle group accordion-active:bg-blue-100 accordion-active:text-gray-900 inline-flex w-full items-center justify-between rounded-xl bg-gray-50 p-4 text-lg leading-relaxed font-normal text-gray-900 transition duration-500 hover:bg-blue-100 hover:text-gray-900"
                  aria-controls="basic-collapse-five-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    Which is better short term or long term?
                  </h5>
                </button>
                <div
                  id="basic-collapse-five-with-arrow-always-open"
                  className="accordion-content accordion-active:bg-blue-100 w-full overflow-hidden rounded-xl bg-gray-50 hover:bg-blue-100"
                  aria-labelledby="basic-heading-five-with-arrow-always-open"
                >
                  <p className="p-5 text-sm font-normal text-gray-500">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 inline-flex w-full flex-col items-center justify-start gap-5 rounded-2xl bg-gray-50 p-6 lg:col-span-5">
              <h4 className="w-full border-b border-gray-200 pb-5 text-center text-xl leading-8 font-normal text-gray-900">
                Response to the Inquiry
              </h4>
              <div className="flex w-full flex-col items-start justify-start gap-9">
                <div className="flex w-full flex-col items-start justify-start gap-6">
                  <div className="flex w-full flex-col items-start justify-center gap-2">
                    <h4 className="text-xl leading-8 font-medium text-gray-900">
                      Having trouble finding the right answers?
                    </h4>
                    <p className="text-base leading-relaxed font-normal text-gray-500">
                      Don’t worry! Reach out to us with your questions.
                    </p>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1.5">
                    <label className="text-sm leading-normal font-medium text-gray-600">
                      Ask Your Question
                    </label>
                    <input
                      type="text"
                      className="inline-flex w-full items-center justify-start gap-2 rounded-xl border border-gray-300 bg-transparent px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="write here..."
                    />
                  </div>
                </div>
                <button className="flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-blue-700">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
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
  )
}
