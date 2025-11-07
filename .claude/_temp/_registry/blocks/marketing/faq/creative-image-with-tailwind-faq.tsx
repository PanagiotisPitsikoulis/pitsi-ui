export default function CreativeImageWithTailwindFaq() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-16 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-2 flex">
            <span className="text-center text-emerald-700 text-lg font-medium leading-relaxed">
              FAQs
            </span>
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Frequently asked questions
            </h2>
          </div>
          <div className="justify-start items-start lg:gap-x-8 lg:gap-y-0 gap-y-8 grid lg:grid-cols-12 grid-cols-1">
            <div className="lg:col-span-5 col-span-12 h-full flex-col justify-start items-start inline-flex">
              <img
                className="w-full mx-auto lg:h-full h-auto object-cover"
                src="https://pagedone.io/asset/uploads/1723022076.png"
                alt="FAQ Image"
              />
            </div>
            <div
              className="lg:col-span-7 col-span-12 h-full accordion-group flex flex-col gap-8 h-full"
              data-accordion="default-accordion"
            >
              <div
                className="accordion border-b border-gray-200 pb-8 active"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 hover:text-gray-900 accordion-active:text-gray-900 accordion-active:font-medium accordion-active:text-xl accordion-active:leading-8 always-open"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How do I update my billing information?
                  </h5>
                  <a className="w-5 h-5 p-1 bg-emerald-700 rounded-md flex items-center justify-center pointer-events-none">
                    {/* SVG removed */}
                  </a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden active"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-500 pt-4">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8 "
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between font-normal text-lg leading-relaxed text-gray-900 w-full transition duration-500 hover:text-gray-900 accordion-active:text-gray-900 accordion-active:font-medium accordion-active:text-xl accordion-active:leading-8"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How can I contact customer support?
                  </h5>
                  <a className="w-5 h-5 p-1 bg-emerald-700 rounded-md flex items-center justify-center pointer-events-none">
                    {/* SVG removed */}
                  </a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="text-sm text-gray-500 font-normal pt-4">
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
                  className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-gray-900 accordion-active:font-medium accordion-active:text-gray-900"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How do I join a group or community?
                  </h5>
                  <a className="w-5 h-5 p-1 bg-emerald-700 rounded-md flex items-center justify-center pointer-events-none">
                    {/* SVG removed */}
                  </a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="text-sm text-gray-500 font-normal pt-4">
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
                  className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-gray-900 accordion-active:font-medium accordion-active:text-gray-900"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How do I change my email address?
                  </h5>
                  <a className="w-5 h-5 p-1 bg-emerald-700 rounded-md flex items-center justify-center pointer-events-none">
                    {/* SVG removed */}
                  </a>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="text-sm text-gray-500 font-normal pt-4">
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
                  className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-gray-900 accordion-active:font-medium accordion-active:text-gray-900"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-left">How can I reset my password?</h5>
                  <a className="w-5 h-5 p-1 bg-emerald-700 rounded-md flex items-center justify-center pointer-events-none">
                    {/* SVG removed */}
                  </a>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="text-sm text-gray-500 font-normal pt-4">
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
  );
}
