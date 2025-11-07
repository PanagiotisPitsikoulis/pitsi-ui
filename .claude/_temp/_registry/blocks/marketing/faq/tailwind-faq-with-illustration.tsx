export default function TailwindFaqWithIllustration() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-16 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-2.5 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
              Trusted in more than 100 countries and 5 million customers.
            </p>
          </div>
          <div className="w-full justify-start items-start lg:gap-x-16 lg:gap-y-0 gap-y-10 grid lg:grid-cols-12 grid-cols-1">
            <div
              className="accordion-group flex flex-col gap-5 h-full lg:col-span-7 col-span-12 w-full"
              data-accordion="default-accordion"
            >
              <div
                className="accordion accordion-active:tabActive relative rounded-xl accordion-active:bg-gardient-to-tr bg-gardient-to-tr border-[1px] accordion-active:border-0 border-gray-200 p-4 active"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group relative inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:text-xl accordion-active:leading-8 accordion-active:font-medium always-open"
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
                  <p className="text-sm font-normal text-gray-500 pt-1.5">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:tabActive relative rounded-xl accordion-active:bg-gardient-to-tr bg-gardient-to-tr border-[1px] accordion-active:border-0 border-gray-200 p-4"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group relative inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:text-xl accordion-active:leading-8 accordion-active:font-medium"
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
                  <p className="text-sm font-normal text-gray-500 pt-1.5">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:tabActive relative rounded-xl accordion-active:bg-gardient-to-tr bg-gardient-to-tr border-[1px] accordion-active:border-0 border-gray-200 p-4"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group relative inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:text-xl accordion-active:leading-8 accordion-active:font-medium"
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
                  <p className="text-sm font-normal text-gray-500 pt-1.5">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:tabActive relative rounded-xl accordion-active:bg-gardient-to-tr bg-gardient-to-tr border-[1px] accordion-active:border-0 border-gray-200 p-4"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group relative inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:text-xl accordion-active:leading-8 accordion-active:font-medium"
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
                  <p className="text-sm font-normal text-gray-500 pt-1.5">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:tabActive relative rounded-xl accordion-active:bg-gardient-to-tr bg-gardient-to-tr border-[1px] accordion-active:border-0 border-gray-200 p-4"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group relative inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:text-xl accordion-active:leading-8 accordion-active:font-medium"
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
                  <p className="text-sm font-normal text-gray-500 pt-1.5">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:tabActive relative rounded-xl accordion-active:bg-gardient-to-tr bg-gardient-to-tr border-[1px] accordion-active:border-0 border-gray-200 p-4"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group relative inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:text-xl accordion-active:leading-8 accordion-active:font-medium"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How do I change my email address?
                  </h5>
                  <a className="max-w-6 max-h-6">{/* SVG removed */}</a>
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
            <div className="lg:col-span-5 col-span-12 w-full flex-col justify-start items-center gap-10 inline-flex">
              <img
                src="https://pagedone.io/asset/uploads/1723114796.png"
                alt="faq image"
                className="object-cover"
              />
              <div className="w-full flex-col justify-start items-center lg:gap-10 gap-5 flex">
                <div className="flex-col justify-start items-start gap-5 flex">
                  <div className="flex-col justify-center items-center gap-1 flex">
                    <h4 className="text-center text-gray-900 text-xl font-medium leading-8">
                      Ask Any Question
                    </h4>
                    <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
                      Feel free to ask any question you have; we're here to
                      help!
                    </p>
                  </div>
                  <div className="w-full flex gap-2 relative">
                    <input
                      type="text"
                      className="w-full focus:outline-none px-4 py-2.5 rounded-xl border border-gray-300 placeholder-gray-400 text-gray-900 text-base font-normal leading-relaxed shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]"
                      placeholder="write here..."
                    />
                    {/* SVG removed */}
                  </div>
                </div>
                <button className="sm:w-fit w-full px-5 py-2.5 bg-lime-600 hover:bg-lime-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                    Submit Now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
