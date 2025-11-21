export default function FaqWithHorizontalTab() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="tabs">
          <div className="mb-10 inline-flex w-full flex-col items-center justify-start gap-3 lg:mb-16">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Frequently Asked Question
            </h2>
            <p className="text-center text-lg leading-relaxed font-normal text-gray-500">
              Trusted more than 1000+ customers
            </p>
          </div>
          {/*Switch*/}
          <div className="flex w-full flex-col gap-10 lg:gap-12">
            <div className="mx-auto flex w-fit flex-col items-center justify-center gap-6 md:flex-row">
              <a
                className="group tab-active:bg-indigo-600 tab-active:shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] tab-active:text-white tablink active flex inline-block w-fit flex-col gap-2 rounded-full bg-indigo-50 px-7 py-2.5 text-center text-base leading-7 font-semibold text-indigo-600 transition-all duration-700 ease-in-out"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                About us
              </a>
              <a
                className="group tab-active:bg-indigo-600 tab-active:shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] tab-active:text-white tablink flex inline-block w-fit flex-col gap-2 rounded-full bg-indigo-50 px-7 py-2.5 text-center text-base leading-7 font-semibold text-indigo-600 transition-all duration-700 ease-in-out"
                data-tab="tabs-with-background-2"
                role="tab"
              >
                Our service
              </a>
              <a
                className="group tab-active:bg-indigo-600 tab-active:shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] tab-active:text-white tablink flex inline-block w-fit flex-col gap-2 rounded-full bg-indigo-50 px-7 py-2.5 text-center text-base leading-7 font-semibold text-indigo-600 transition-all duration-700 ease-in-out"
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
                    className="accordion accordion-active:bg-indigo-50 rounded-2xl bg-gray-50 p-4 sm:p-8"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-xl leading-8 font-normal text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my billing information?{" "}
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To contact customer support, look for a "Contact us" or
                        "Help" button or link on the website or platform. You
                        may be able to email, call, or chat with customer
                        support for assistance.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion accordion-active:bg-indigo-50 active rounded-2xl bg-gray-50 p-4 sm:p-8"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium always-open inline-flex w-full items-center justify-between gap-2 text-xl leading-8 font-normal text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I contact customer support?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-two-with-arrow-always-open"
                      className="accordion-content active w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To contact customer support, look for a "Contact us" or
                        "Help" button or link on the website or platform. You
                        may be able to email, call, or chat with customer
                        support for assistance.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion accordion-active:bg-indigo-50 rounded-2xl bg-gray-50 p-4 sm:p-8"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-xl leading-8 font-normal text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-three-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my profile information?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-three-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To contact customer support, look for a "Contact us" or
                        "Help" button or link on the website or platform. You
                        may be able to email, call, or chat with customer
                        support for assistance.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion accordion-active:bg-indigo-50 rounded-2xl bg-gray-50 p-4 sm:p-8"
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-xl leading-8 font-normal text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my billing information?{" "}
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-four-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-900">
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
                className="tabcontent"
              >
                <div
                  className="accordion-group flex flex-col gap-7 lg:h-full"
                  data-accordion="default-accordion"
                >
                  <div
                    className="accordion accordion-active:bg-indigo-50 active rounded-2xl bg-gray-50 p-4 sm:p-8"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium always-open inline-flex w-full items-center justify-between gap-2 text-xl leading-8 font-normal text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I contact customer support?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-two-with-arrow-always-open"
                      className="accordion-content active w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To contact customer support, look for a "Contact us" or
                        "Help" button or link on the website or platform. You
                        may be able to email, call, or chat with customer
                        support for assistance.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion accordion-active:bg-indigo-50 rounded-2xl bg-gray-50 p-4 sm:p-8"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-xl leading-8 font-normal text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my billing information?{" "}
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To contact customer support, look for a "Contact us" or
                        "Help" button or link on the website or platform. You
                        may be able to email, call, or chat with customer
                        support for assistance.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion accordion-active:bg-indigo-50 rounded-2xl bg-gray-50 p-4 sm:p-8"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-xl leading-8 font-normal text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-three-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my profile information?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-three-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To contact customer support, look for a "Contact us" or
                        "Help" button or link on the website or platform. You
                        may be able to email, call, or chat with customer
                        support for assistance.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion accordion-active:bg-indigo-50 rounded-2xl bg-gray-50 p-4 sm:p-8"
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-xl leading-8 font-normal text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my billing information?{" "}
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-four-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-900">
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
                className="tabcontent"
              >
                <div
                  className="accordion-group flex flex-col gap-7 lg:h-full"
                  data-accordion="default-accordion"
                >
                  <div
                    className="accordion accordion-active:bg-indigo-50 rounded-2xl bg-gray-50 p-4 sm:p-8"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-xl leading-8 font-normal text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my billing information?{" "}
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To contact customer support, look for a "Contact us" or
                        "Help" button or link on the website or platform. You
                        may be able to email, call, or chat with customer
                        support for assistance.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion accordion-active:bg-indigo-50 active rounded-2xl bg-gray-50 p-4 sm:p-8"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium always-open inline-flex w-full items-center justify-between gap-2 text-xl leading-8 font-normal text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I contact customer support?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-two-with-arrow-always-open"
                      className="accordion-content active w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To contact customer support, look for a "Contact us" or
                        "Help" button or link on the website or platform. You
                        may be able to email, call, or chat with customer
                        support for assistance.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion accordion-active:bg-indigo-50 rounded-2xl bg-gray-50 p-4 sm:p-8"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-xl leading-8 font-normal text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-three-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my profile information?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-three-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To contact customer support, look for a "Contact us" or
                        "Help" button or link on the website or platform. You
                        may be able to email, call, or chat with customer
                        support for assistance.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion accordion-active:bg-indigo-50 rounded-2xl bg-gray-50 p-4 sm:p-8"
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-xl leading-8 font-normal text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my billing information?{" "}
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-four-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-900">
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
  )
}
