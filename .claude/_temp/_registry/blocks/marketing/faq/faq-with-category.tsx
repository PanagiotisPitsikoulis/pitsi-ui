export default function FaqWithCategory() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center lg:gap-16 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3.5 flex">
            <div className="px-2.5 py-0.5 bg-indigo-50 rounded-full border border-indigo-500 justify-center items-center gap-1.5 flex">
              <span className="px-1.5 text-center text-indigo-600 text-xs font-medium leading-normal">
                FAQ
              </span>
            </div>
            <div className="w-full flex-col justify-center items-center gap-2.5 flex">
              <h2 className="text-center text-gray-900 text-5xl font-semibold font-manrope leading-tight">
                Frequently asked questions
              </h2>
              <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
                Trusted in more than 100 countries and 5 million customers.
              </p>
            </div>
          </div>
          <div
            className="accordion-group w-full flex-col justify-start items-start gap-8 flex"
            data-accordion="default-accordion"
          >
            <div className="w-full md:p-6 p-4 rounded-2xl border border-gray-200 justify-start items-start lg:gap-x-8 lg:gap-y-0 gap-y-8 grid lg:grid-cols-12 grid-cols-1">
              <div className="lg:col-span-5 col-span-12 flex-col justify-start items-start gap-1.5 inline-flex">
                <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                  General Report
                </h3>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  A general report provides a concise overview of key findings
                  and conclusions on a specific subject.
                </p>
              </div>
              <div className="flex flex-col gap-5 h-full lg:col-span-7 col-span-12">
                <div
                  className="accordion rounded-xl bg-gray-100 hover:bg-indigo-100 accordion-active:bg-indigo-100 p-4 active"
                  id="basic-heading-one-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 hover:text-gray-900 accordion-active:text-gray-900 accordion-active:font-medium always-open"
                    aria-controls="basic-collapse-one-with-arrow-always-open"
                  >
                    <h5 className="text-start">
                      Where can I find my order history?{" "}
                    </h5>
                    <a className="w-6 h-6 accordion-active:bg-black rounded-full flex items-center justify-center pointer-events-none">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-one-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden active"
                    aria-labelledby="basic-heading-one-with-arrow-always-open"
                  >
                    <p className="text-base font-light text-gray-600 pt-3.5">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion rounded-xl bg-gray-100 hover:bg-indigo-100 accordion-active:bg-indigo-100 p-4"
                  id="basic-heading-two-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 hover:text-gray-900 accordion-active:text-gray-900 accordion-active:font-medium"
                    aria-controls="basic-collapse-two-with-arrow-always-open"
                  >
                    <h5 className="text-start">
                      Which is better short term or long term?
                    </h5>
                    <a className="w-6 h-6 accordion-active:bg-black rounded-full flex items-center justify-center pointer-events-none">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-two-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden"
                    aria-labelledby="basic-heading-two-with-arrow-always-open"
                  >
                    <p className="text-base font-light text-gray-600 pt-3.5">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion rounded-xl bg-gray-100 hover:bg-indigo-100 accordion-active:bg-indigo-100 p-4"
                  id="basic-heading-three-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 hover:text-gray-900 accordion-active:text-gray-900 accordion-active:font-medium"
                    aria-controls="basic-collapse-three-with-arrow-always-open"
                  >
                    <h5 className="text-start">How do I delete my account?</h5>
                    <a className="w-6 h-6 accordion-active:bg-black rounded-full flex items-center justify-center pointer-events-none">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden"
                    aria-labelledby="basic-heading-three-with-arrow-always-open"
                  >
                    <p className="text-base font-light text-gray-600 pt-3.5">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion rounded-xl bg-gray-100 hover:bg-indigo-100 accordion-active:bg-indigo-100 p-4"
                  id="basic-heading-four-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 hover:text-gray-900 accordion-active:text-gray-900 accordion-active:font-medium"
                    aria-controls="basic-collapse-four-with-arrow-always-open"
                  >
                    <h5 className="text-start">Which is safe investment?</h5>
                    <a className="w-6 h-6 accordion-active:bg-black rounded-full flex items-center justify-center pointer-events-none">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-four-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden"
                    aria-labelledby="basic-heading-four-with-arrow-always-open"
                  >
                    <p className="text-base font-light text-gray-600 pt-3.5">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:p-6 p-4 rounded-2xl border border-gray-200 justify-start items-start lg:gap-x-8 lg:gap-y-0 gap-y-8 grid lg:grid-cols-12 grid-cols-1">
              <div className="lg:col-span-5 col-span-12 flex-col justify-start items-start gap-1.5 inline-flex">
                <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                  Our Service
                </h3>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  Our service delivers tailored solutions to meet your unique
                  needs efficiently and effectively.
                </p>
              </div>
              <div className="flex flex-col gap-5 h-full lg:col-span-7 col-span-12">
                <div
                  className="accordion rounded-xl bg-gray-100 hover:bg-indigo-100 accordion-active:bg-indigo-100 p-4"
                  id="basic-heading-one-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 hover:text-gray-900 accordion-active:text-gray-900 accordion-active:font-medium"
                    aria-controls="basic-collapse-one-with-arrow-always-open"
                  >
                    <h5 className="text-start">
                      How can I provide feedback on the services I received?
                    </h5>
                    <a className="w-6 h-6 accordion-active:bg-black rounded-full flex items-center justify-center pointer-events-none">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-one-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden"
                    aria-labelledby="basic-heading-one-with-arrow-always-open"
                  >
                    <p className="text-base font-light text-gray-600 pt-3.5">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion rounded-xl bg-gray-100 hover:bg-indigo-100 accordion-active:bg-indigo-100 p-4"
                  id="basic-heading-two-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 hover:text-gray-900 accordion-active:text-gray-900 accordion-active:font-medium"
                    aria-controls="basic-collapse-two-with-arrow-always-open"
                  >
                    <h5 className="text-start">
                      Are there any additional fees for your services?
                    </h5>
                    <a className="w-6 h-6 accordion-active:bg-black rounded-full flex items-center justify-center pointer-events-none">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-two-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden"
                    aria-labelledby="basic-heading-two-with-arrow-always-open"
                  >
                    <p className="text-base font-light text-gray-600 pt-3.5">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion rounded-xl bg-gray-100 hover:bg-indigo-100 accordion-active:bg-indigo-100 p-4"
                  id="basic-heading-three-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 hover:text-gray-900 accordion-active:text-gray-900 accordion-active:font-medium"
                    aria-controls="basic-collapse-three-with-arrow-always-open"
                  >
                    <h5 className="text-start">
                      How can I request a service appointment?
                    </h5>
                    <a className="w-6 h-6 accordion-active:bg-black rounded-full flex items-center justify-center pointer-events-none">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden"
                    aria-labelledby="basic-heading-three-with-arrow-always-open"
                  >
                    <p className="text-base font-light text-gray-600 pt-3.5">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:p-6 p-4 rounded-2xl border border-gray-200 justify-start items-start lg:gap-x-8 lg:gap-y-0 gap-y-8 grid lg:grid-cols-12 grid-cols-1">
              <div className="lg:col-span-5 col-span-12 flex-col justify-start items-start gap-1.5 inline-flex">
                <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                  Support
                </h3>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  Our support team is here to assist you with any questions or
                  issues you may have.
                </p>
              </div>
              <div className="flex flex-col gap-5 h-full lg:col-span-7 col-span-12">
                <div
                  className="accordion rounded-xl bg-gray-100 hover:bg-indigo-100 accordion-active:bg-indigo-100 p-4"
                  id="basic-heading-one-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 hover:text-gray-900 accordion-active:text-gray-900 accordion-active:font-medium"
                    aria-controls="basic-collapse-one-with-arrow-always-open"
                  >
                    <h5 className="text-start">
                      How can I contact customer support?
                    </h5>
                    <a className="w-6 h-6 accordion-active:bg-black rounded-full flex items-center justify-center pointer-events-none">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-one-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden"
                    aria-labelledby="basic-heading-one-with-arrow-always-open"
                  >
                    <p className="text-base font-light text-gray-600 pt-3.5">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion rounded-xl bg-gray-100 hover:bg-indigo-100 accordion-active:bg-indigo-100 p-4"
                  id="basic-heading-two-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 hover:text-gray-900 accordion-active:text-gray-900 accordion-active:font-medium"
                    aria-controls="basic-collapse-two-with-arrow-always-open"
                  >
                    <h5 className="text-start">What are your support hours?</h5>
                    <a className="w-6 h-6 accordion-active:bg-black rounded-full flex items-center justify-center pointer-events-none">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-two-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden"
                    aria-labelledby="basic-heading-two-with-arrow-always-open"
                  >
                    <p className="text-base font-light text-gray-600 pt-3.5">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion rounded-xl bg-gray-100 hover:bg-indigo-100 accordion-active:bg-indigo-100 p-4"
                  id="basic-heading-three-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 hover:text-gray-900 accordion-active:text-gray-900 accordion-active:font-medium"
                    aria-controls="basic-collapse-three-with-arrow-always-open"
                  >
                    <h5 className="text-start">
                      How can I track the progress of my support request?
                    </h5>
                    <a className="w-6 h-6 accordion-active:bg-black rounded-full flex items-center justify-center pointer-events-none">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden"
                    aria-labelledby="basic-heading-three-with-arrow-always-open"
                  >
                    <p className="text-base font-light text-gray-600 pt-3.5">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion rounded-xl bg-gray-100 hover:bg-indigo-100 accordion-active:bg-indigo-100 p-4"
                  id="basic-heading-three-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 hover:text-gray-900 accordion-active:text-gray-900 accordion-active:font-medium"
                    aria-controls="basic-collapse-three-with-arrow-always-open"
                  >
                    <h5 className="text-start">
                      How do I follow up on an existing support case?
                    </h5>
                    <a className="w-6 h-6 accordion-active:bg-black rounded-full flex items-center justify-center pointer-events-none">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden"
                    aria-labelledby="basic-heading-three-with-arrow-always-open"
                  >
                    <p className="text-base font-light text-gray-600 pt-3.5">
                      You can view your order history by logging into your
                      account and navigating to the "Order History" section.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion rounded-xl bg-gray-100 hover:bg-indigo-100 accordion-active:bg-indigo-100 p-4"
                  id="basic-heading-three-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 hover:text-gray-900 accordion-active:text-gray-900 accordion-active:font-medium"
                    aria-controls="basic-collapse-three-with-arrow-always-open"
                  >
                    <h5 className="text-start">
                      How do I cancel or modify a support appointment?
                    </h5>
                    <a className="w-6 h-6 accordion-active:bg-black rounded-full flex items-center justify-center pointer-events-none">
                      {/* SVG removed */}
                      {/* SVG removed */}
                    </a>
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden"
                    aria-labelledby="basic-heading-three-with-arrow-always-open"
                  >
                    <p className="text-base font-light text-gray-600 pt-3.5">
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
  );
}
