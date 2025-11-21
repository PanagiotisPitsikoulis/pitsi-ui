export default function CreativeImageWithTailwindFaq() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-16">
          <div className="flex w-full flex-col items-center justify-start gap-2">
            <span className="text-center text-lg leading-relaxed font-medium text-emerald-700">
              FAQs
            </span>
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Frequently asked questions
            </h2>
          </div>
          <div className="grid grid-cols-1 items-start justify-start gap-y-8 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
            <div className="col-span-12 inline-flex h-full flex-col items-start justify-start lg:col-span-5">
              <img
                className="mx-auto h-auto w-full object-cover lg:h-full"
                src="https://pagedone.io/asset/uploads/1723022076.png"
                alt="FAQ Image"
              />
            </div>
            <div
              className="accordion-group col-span-12 flex h-full flex-col gap-8 lg:col-span-7"
              data-accordion="default-accordion"
            >
              <div
                className="accordion active border-b border-gray-200 pb-8"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium accordion-active:text-xl accordion-active:leading-8 always-open inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-900 transition duration-500 hover:text-gray-900"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How do I update my billing information?
                  </h5>
                  <a className="pointer-events-none flex h-5 w-5 items-center justify-center rounded-md bg-emerald-700 p-1">
                    {/* SVG removed */}
                  </a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content active w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="pt-4 text-sm font-normal text-gray-500">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium accordion-active:text-xl accordion-active:leading-8 inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-900 transition duration-500 hover:text-gray-900"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How can I contact customer support?
                  </h5>
                  <a className="pointer-events-none flex h-5 w-5 items-center justify-center rounded-md bg-emerald-700 p-1">
                    {/* SVG removed */}
                  </a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="pt-4 text-sm font-normal text-gray-500">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:font-medium accordion-active:text-gray-900 inline-flex w-full items-center justify-between text-xl leading-8 font-normal text-gray-600 transition duration-500 hover:text-gray-900"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How do I join a group or community?
                  </h5>
                  <a className="pointer-events-none flex h-5 w-5 items-center justify-center rounded-md bg-emerald-700 p-1">
                    {/* SVG removed */}
                  </a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="pt-4 text-sm font-normal text-gray-500">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:font-medium accordion-active:text-gray-900 inline-flex w-full items-center justify-between text-xl leading-8 font-normal text-gray-600 transition duration-500 hover:text-gray-900"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How do I change my email address?
                  </h5>
                  <a className="pointer-events-none flex h-5 w-5 items-center justify-center rounded-md bg-emerald-700 p-1">
                    {/* SVG removed */}
                  </a>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="pt-4 text-sm font-normal text-gray-500">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
              <div
                className="accordion"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:font-medium accordion-active:text-gray-900 inline-flex w-full items-center justify-between text-xl leading-8 font-normal text-gray-600 transition duration-500 hover:text-gray-900"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-left">How can I reset my password?</h5>
                  <a className="pointer-events-none flex h-5 w-5 items-center justify-center rounded-md bg-emerald-700 p-1">
                    {/* SVG removed */}
                  </a>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="pt-4 text-sm font-normal text-gray-500">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
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
