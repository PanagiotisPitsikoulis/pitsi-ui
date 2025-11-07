export default function FaqWithHorizontalTab() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="tabs">
          <div className="w-full flex-col justify-start items-center gap-3 inline-flex lg:mb-16 mb-10">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Frequently Asked Question
            </h2>
            <p className="text-center text-gray-500 text-lg font-normal leading-relaxed">
              Trusted more than 1000+ customers
            </p>
          </div>
          {/*Switch*/}
          <div className="w-full flex flex-col lg:gap-12 gap-10">
            <div className="w-fit flex md:flex-row flex-col justify-center items-center gap-6 mx-auto">
              <a
                className="inline-block group w-fit text-center transition-all duration-700 ease-in-out px-7 py-2.5 rounded-full bg-indigo-50 tab-active:bg-indigo-600 tab-active:shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-indigo-600 text-base font-semibold leading-7 tab-active:text-white flex flex-col gap-2 tablink active"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                About us
              </a>
              <a
                className="inline-block group w-fit text-center transition-all duration-700 ease-in-out px-7 py-2.5 rounded-full bg-indigo-50 tab-active:bg-indigo-600 tab-active:shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-indigo-600 text-base font-semibold leading-7 tab-active:text-white flex flex-col gap-2 tablink"
                data-tab="tabs-with-background-2"
                role="tab"
              >
                Our service
              </a>
              <a
                className="inline-block group w-fit text-center transition-all duration-700 ease-in-out px-7 py-2.5 rounded-full bg-indigo-50 tab-active:bg-indigo-600 tab-active:shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-indigo-600 text-base font-semibold leading-7 tab-active:text-white flex flex-col gap-2 tablink"
                data-tab="tabs-with-background-3"
                role="tab"
              >
                Support
              </a>
            </div>
            {/*Switch End*/}
            <div>
              {/*Grid*/}
              <div
                id="tabs-with-background-1"
                role="tabpanel"
                aria-labelledby="tabs-with-background-item-1"
                className="tabcontent"
              >
                <div
                  className="accordion-group flex flex-col gap-7 lg:h-full"
                  data-accordion="default-accordion"
                >
                  <div
                    className="accordion sm:p-8 p-4 rounded-2xl bg-gray-50 accordion-active:bg-indigo-50"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-900 text-xl font-normal leading-8 accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my billing information?{" "}
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
                        To contact customer support, look for a "Contact us" or
                        "Help" button or link on the website or platform. You
                        may be able to email, call, or chat with customer
                        support for assistance.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion sm:p-8 p-4 rounded-2xl bg-gray-50 accordion-active:bg-indigo-50 active"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-900 text-xl font-normal leading-8 accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500 always-open"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I contact customer support?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-two-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden active"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
                        To contact customer support, look for a "Contact us" or
                        "Help" button or link on the website or platform. You
                        may be able to email, call, or chat with customer
                        support for assistance.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion sm:p-8 p-4 rounded-2xl bg-gray-50 accordion-active:bg-indigo-50"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-900 text-xl font-normal leading-8 accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
                      aria-controls="basic-collapse-three-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my profile information?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-three-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
                        To contact customer support, look for a "Contact us" or
                        "Help" button or link on the website or platform. You
                        may be able to email, call, or chat with customer
                        support for assistance.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion sm:p-8 p-4 rounded-2xl bg-gray-50 accordion-active:bg-indigo-50"
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-900 text-xl font-normal leading-8 accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my billing information?{" "}
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-four-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
                        To contact customer support, look for a "Contact us" or
                        "Help" button or link on the website or platform. You
                        may be able to email, call, or chat with customer
                        support for assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="tabs-with-background-2"
                role="tabpanel"
                aria-labelledby="tabs-with-background-item-2"
                className="tabcontent "
              >
                <div
                  className="accordion-group flex flex-col gap-7 lg:h-full"
                  data-accordion="default-accordion"
                >
                  <div
                    className="accordion sm:p-8 p-4 rounded-2xl bg-gray-50 accordion-active:bg-indigo-50 active"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-900 text-xl font-normal leading-8 accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500 always-open"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I contact customer support?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-two-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden active"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
                        To contact customer support, look for a "Contact us" or
                        "Help" button or link on the website or platform. You
                        may be able to email, call, or chat with customer
                        support for assistance.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion sm:p-8 p-4 rounded-2xl bg-gray-50 accordion-active:bg-indigo-50"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-900 text-xl font-normal leading-8 accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my billing information?{" "}
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
                        To contact customer support, look for a "Contact us" or
                        "Help" button or link on the website or platform. You
                        may be able to email, call, or chat with customer
                        support for assistance.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion sm:p-8 p-4 rounded-2xl bg-gray-50 accordion-active:bg-indigo-50"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-900 text-xl font-normal leading-8 accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
                      aria-controls="basic-collapse-three-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my profile information?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-three-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
                        To contact customer support, look for a "Contact us" or
                        "Help" button or link on the website or platform. You
                        may be able to email, call, or chat with customer
                        support for assistance.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion sm:p-8 p-4 rounded-2xl bg-gray-50 accordion-active:bg-indigo-50"
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-900 text-xl font-normal leading-8 accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my billing information?{" "}
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-four-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
                        To contact customer support, look for a "Contact us" or
                        "Help" button or link on the website or platform. You
                        may be able to email, call, or chat with customer
                        support for assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="tabs-with-background-3"
                role="tabpanel"
                aria-labelledby="tabs-with-background-item-3"
                className="tabcontent "
              >
                <div
                  className="accordion-group flex flex-col gap-7 lg:h-full"
                  data-accordion="default-accordion"
                >
                  <div
                    className="accordion sm:p-8 p-4 rounded-2xl bg-gray-50 accordion-active:bg-indigo-50"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-900 text-xl font-normal leading-8 accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my billing information?{" "}
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
                        To contact customer support, look for a "Contact us" or
                        "Help" button or link on the website or platform. You
                        may be able to email, call, or chat with customer
                        support for assistance.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion sm:p-8 p-4 rounded-2xl bg-gray-50 accordion-active:bg-indigo-50 active"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-900 text-xl font-normal leading-8 accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500 always-open"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I contact customer support?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-two-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden active"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
                        To contact customer support, look for a "Contact us" or
                        "Help" button or link on the website or platform. You
                        may be able to email, call, or chat with customer
                        support for assistance.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion sm:p-8 p-4 rounded-2xl bg-gray-50 accordion-active:bg-indigo-50"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-900 text-xl font-normal leading-8 accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
                      aria-controls="basic-collapse-three-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my profile information?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-three-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
                        To contact customer support, look for a "Contact us" or
                        "Help" button or link on the website or platform. You
                        may be able to email, call, or chat with customer
                        support for assistance.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion sm:p-8 p-4 rounded-2xl bg-gray-50 accordion-active:bg-indigo-50"
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-900 text-xl font-normal leading-8 accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my billing information?{" "}
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-four-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
                        To contact customer support, look for a "Contact us" or
                        "Help" button or link on the website or platform. You
                        may be able to email, call, or chat with customer
                        support for assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
