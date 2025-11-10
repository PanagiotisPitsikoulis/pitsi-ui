export default function TailwindFaqWithIllustration() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-16">
          <div className="flex w-full flex-col items-center justify-start gap-2.5">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-base leading-relaxed font-normal text-gray-500">
              Trusted in more than 100 countries and 5 million customers.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-y-10 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-0">
            <div
              className="accordion-group col-span-12 flex h-full w-full flex-col gap-5 lg:col-span-7"
              data-accordion="default-accordion"
            >
              <div
                className="accordion accordion-active:tabActive accordion-active:bg-gardient-to-tr bg-gardient-to-tr accordion-active:border-0 active relative rounded-xl border-[1px] border-gray-200 p-4"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:text-gray-900 accordion-active:text-xl accordion-active:leading-8 accordion-active:font-medium always-open relative inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
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
                  <p className="pt-1.5 text-sm font-normal text-gray-500">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:tabActive accordion-active:bg-gardient-to-tr bg-gardient-to-tr accordion-active:border-0 relative rounded-xl border-[1px] border-gray-200 p-4"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:text-gray-900 accordion-active:text-xl accordion-active:leading-8 accordion-active:font-medium relative inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
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
                  <p className="pt-1.5 text-sm font-normal text-gray-500">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:tabActive accordion-active:bg-gardient-to-tr bg-gardient-to-tr accordion-active:border-0 relative rounded-xl border-[1px] border-gray-200 p-4"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:text-gray-900 accordion-active:text-xl accordion-active:leading-8 accordion-active:font-medium relative inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
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
                  <p className="pt-1.5 text-sm font-normal text-gray-500">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:tabActive accordion-active:bg-gardient-to-tr bg-gardient-to-tr accordion-active:border-0 relative rounded-xl border-[1px] border-gray-200 p-4"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:text-gray-900 accordion-active:text-xl accordion-active:leading-8 accordion-active:font-medium relative inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
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
                  <p className="pt-1.5 text-sm font-normal text-gray-500">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:tabActive accordion-active:bg-gardient-to-tr bg-gardient-to-tr accordion-active:border-0 relative rounded-xl border-[1px] border-gray-200 p-4"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:text-gray-900 accordion-active:text-xl accordion-active:leading-8 accordion-active:font-medium relative inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
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
                  <p className="pt-1.5 text-sm font-normal text-gray-500">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:tabActive accordion-active:bg-gardient-to-tr bg-gardient-to-tr accordion-active:border-0 relative rounded-xl border-[1px] border-gray-200 p-4"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:text-gray-900 accordion-active:text-xl accordion-active:leading-8 accordion-active:font-medium relative inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How do I change my email address?
                  </h5>
                  <a className="max-h-6 max-w-6">{/* SVG removed */}</a>
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
            <div className="col-span-12 inline-flex w-full flex-col items-center justify-start gap-10 lg:col-span-5">
              <img
                src="https://pagedone.io/asset/uploads/1723114796.png"
                alt="faq image"
                className="object-cover"
              />
              <div className="flex w-full flex-col items-center justify-start gap-5 lg:gap-10">
                <div className="flex flex-col items-start justify-start gap-5">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <h4 className="text-center text-xl leading-8 font-medium text-gray-900">
                      Ask Any Question
                    </h4>
                    <p className="text-center text-base leading-relaxed font-normal text-gray-500">
                      Feel free to ask any question you have; we're here to
                      help!
                    </p>
                  </div>
                  <div className="relative flex w-full gap-2">
                    <input
                      type="text"
                      className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="write here..."
                    />
                    {/* SVG removed */}
                  </div>
                </div>
                <button className="flex w-full items-center justify-center rounded-xl bg-lime-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-lime-700 sm:w-fit">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                    Submit Now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
