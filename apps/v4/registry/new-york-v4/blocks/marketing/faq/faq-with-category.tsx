export default function FaqWithCategory() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:gap-16">
          <div className="flex w-full flex-col items-center justify-start gap-3.5">
            <div className="flex items-center justify-center gap-1.5 rounded-full border border-indigo-500 bg-indigo-50 px-2.5 py-0.5">
              <span className="px-1.5 text-center text-xs leading-normal font-medium text-indigo-600">
                FAQ
              </span>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-2.5">
              <h2 className="font-manrope text-center text-5xl leading-tight font-semibold text-gray-900">
                Frequently asked questions
              </h2>
              <p className="text-center text-base leading-relaxed font-normal text-gray-500">
                Trusted in more than 100 countries and 5 million customers.
              </p>
            </div>
          </div>
          <div
            className="accordion-group flex w-full flex-col items-start justify-start gap-8"
            data-accordion="default-accordion"
          >
            <div className="grid w-full grid-cols-1 items-start justify-start gap-y-8 rounded-2xl border border-gray-200 p-4 md:p-6 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
              <div className="col-span-12 inline-flex flex-col items-start justify-start gap-1.5 lg:col-span-5">
                <h3 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                  General Report
                </h3>
                <p className="text-base leading-relaxed font-normal text-gray-500">
                  A general report provides a concise overview of key findings
                  and conclusions on a specific subject.
                </p>
              </div>
              <div className="col-span-12 flex h-full flex-col gap-5 lg:col-span-7">
                <div
                  className="accordion accordion-active:bg-indigo-100 active rounded-xl bg-gray-100 p-4 hover:bg-indigo-100"
                  id="basic-heading-one-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium always-open inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500 hover:text-gray-900"
                    aria-controls="basic-collapse-one-with-arrow-always-open"
                  >
                    <h5 className="text-start">
                      Where can I find my order history?{" "}
                    </h5>
                    <a className="accordion-active:bg-black pointer-events-none flex h-6 w-6 items-center justify-center rounded-full">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-one-with-arrow-always-open"
                    className="accordion-content active w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-one-with-arrow-always-open"
                  >
                    <p className="pt-3.5 text-base font-light text-gray-600">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion accordion-active:bg-indigo-100 rounded-xl bg-gray-100 p-4 hover:bg-indigo-100"
                  id="basic-heading-two-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500 hover:text-gray-900"
                    aria-controls="basic-collapse-two-with-arrow-always-open"
                  >
                    <h5 className="text-start">
                      Which is better short term or long term?
                    </h5>
                    <a className="accordion-active:bg-black pointer-events-none flex h-6 w-6 items-center justify-center rounded-full">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-two-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-two-with-arrow-always-open"
                  >
                    <p className="pt-3.5 text-base font-light text-gray-600">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion accordion-active:bg-indigo-100 rounded-xl bg-gray-100 p-4 hover:bg-indigo-100"
                  id="basic-heading-three-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500 hover:text-gray-900"
                    aria-controls="basic-collapse-three-with-arrow-always-open"
                  >
                    <h5 className="text-start">How do I delete my account?</h5>
                    <a className="accordion-active:bg-black pointer-events-none flex h-6 w-6 items-center justify-center rounded-full">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-three-with-arrow-always-open"
                  >
                    <p className="pt-3.5 text-base font-light text-gray-600">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion accordion-active:bg-indigo-100 rounded-xl bg-gray-100 p-4 hover:bg-indigo-100"
                  id="basic-heading-four-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500 hover:text-gray-900"
                    aria-controls="basic-collapse-four-with-arrow-always-open"
                  >
                    <h5 className="text-start">Which is safe investment?</h5>
                    <a className="accordion-active:bg-black pointer-events-none flex h-6 w-6 items-center justify-center rounded-full">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-four-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-four-with-arrow-always-open"
                  >
                    <p className="pt-3.5 text-base font-light text-gray-600">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 items-start justify-start gap-y-8 rounded-2xl border border-gray-200 p-4 md:p-6 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
              <div className="col-span-12 inline-flex flex-col items-start justify-start gap-1.5 lg:col-span-5">
                <h3 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                  Our Service
                </h3>
                <p className="text-base leading-relaxed font-normal text-gray-500">
                  Our service delivers tailored solutions to meet your unique
                  needs efficiently and effectively.
                </p>
              </div>
              <div className="col-span-12 flex h-full flex-col gap-5 lg:col-span-7">
                <div
                  className="accordion accordion-active:bg-indigo-100 rounded-xl bg-gray-100 p-4 hover:bg-indigo-100"
                  id="basic-heading-one-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500 hover:text-gray-900"
                    aria-controls="basic-collapse-one-with-arrow-always-open"
                  >
                    <h5 className="text-start">
                      How can I provide feedback on the services I received?
                    </h5>
                    <a className="accordion-active:bg-black pointer-events-none flex h-6 w-6 items-center justify-center rounded-full">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-one-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-one-with-arrow-always-open"
                  >
                    <p className="pt-3.5 text-base font-light text-gray-600">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion accordion-active:bg-indigo-100 rounded-xl bg-gray-100 p-4 hover:bg-indigo-100"
                  id="basic-heading-two-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500 hover:text-gray-900"
                    aria-controls="basic-collapse-two-with-arrow-always-open"
                  >
                    <h5 className="text-start">
                      Are there any additional fees for your services?
                    </h5>
                    <a className="accordion-active:bg-black pointer-events-none flex h-6 w-6 items-center justify-center rounded-full">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-two-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-two-with-arrow-always-open"
                  >
                    <p className="pt-3.5 text-base font-light text-gray-600">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion accordion-active:bg-indigo-100 rounded-xl bg-gray-100 p-4 hover:bg-indigo-100"
                  id="basic-heading-three-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500 hover:text-gray-900"
                    aria-controls="basic-collapse-three-with-arrow-always-open"
                  >
                    <h5 className="text-start">
                      How can I request a service appointment?
                    </h5>
                    <a className="accordion-active:bg-black pointer-events-none flex h-6 w-6 items-center justify-center rounded-full">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-three-with-arrow-always-open"
                  >
                    <p className="pt-3.5 text-base font-light text-gray-600">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 items-start justify-start gap-y-8 rounded-2xl border border-gray-200 p-4 md:p-6 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
              <div className="col-span-12 inline-flex flex-col items-start justify-start gap-1.5 lg:col-span-5">
                <h3 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                  Support
                </h3>
                <p className="text-base leading-relaxed font-normal text-gray-500">
                  Our support team is here to assist you with any questions or
                  issues you may have.
                </p>
              </div>
              <div className="col-span-12 flex h-full flex-col gap-5 lg:col-span-7">
                <div
                  className="accordion accordion-active:bg-indigo-100 rounded-xl bg-gray-100 p-4 hover:bg-indigo-100"
                  id="basic-heading-one-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500 hover:text-gray-900"
                    aria-controls="basic-collapse-one-with-arrow-always-open"
                  >
                    <h5 className="text-start">
                      How can I contact customer support?
                    </h5>
                    <a className="accordion-active:bg-black pointer-events-none flex h-6 w-6 items-center justify-center rounded-full">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-one-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-one-with-arrow-always-open"
                  >
                    <p className="pt-3.5 text-base font-light text-gray-600">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion accordion-active:bg-indigo-100 rounded-xl bg-gray-100 p-4 hover:bg-indigo-100"
                  id="basic-heading-two-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500 hover:text-gray-900"
                    aria-controls="basic-collapse-two-with-arrow-always-open"
                  >
                    <h5 className="text-start">What are your support hours?</h5>
                    <a className="accordion-active:bg-black pointer-events-none flex h-6 w-6 items-center justify-center rounded-full">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-two-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-two-with-arrow-always-open"
                  >
                    <p className="pt-3.5 text-base font-light text-gray-600">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion accordion-active:bg-indigo-100 rounded-xl bg-gray-100 p-4 hover:bg-indigo-100"
                  id="basic-heading-three-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500 hover:text-gray-900"
                    aria-controls="basic-collapse-three-with-arrow-always-open"
                  >
                    <h5 className="text-start">
                      How can I track the progress of my support request?
                    </h5>
                    <a className="accordion-active:bg-black pointer-events-none flex h-6 w-6 items-center justify-center rounded-full">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-three-with-arrow-always-open"
                  >
                    <p className="pt-3.5 text-base font-light text-gray-600">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion accordion-active:bg-indigo-100 rounded-xl bg-gray-100 p-4 hover:bg-indigo-100"
                  id="basic-heading-three-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500 hover:text-gray-900"
                    aria-controls="basic-collapse-three-with-arrow-always-open"
                  >
                    <h5 className="text-start">
                      How do I follow up on an existing support case?
                    </h5>
                    <a className="accordion-active:bg-black pointer-events-none flex h-6 w-6 items-center justify-center rounded-full">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-three-with-arrow-always-open"
                  >
                    <p className="pt-3.5 text-base font-light text-gray-600">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion accordion-active:bg-indigo-100 rounded-xl bg-gray-100 p-4 hover:bg-indigo-100"
                  id="basic-heading-three-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-gray-900 accordion-active:font-medium inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500 hover:text-gray-900"
                    aria-controls="basic-collapse-three-with-arrow-always-open"
                  >
                    <h5 className="text-start">
                      How do I cancel or modify a support appointment?
                    </h5>
                    <a className="accordion-active:bg-black pointer-events-none flex h-6 w-6 items-center justify-center rounded-full">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0"
                    aria-labelledby="basic-heading-three-with-arrow-always-open"
                  >
                    <p className="pt-3.5 text-base font-light text-gray-600">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
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
