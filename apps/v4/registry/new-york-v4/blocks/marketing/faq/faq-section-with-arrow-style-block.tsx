export default function FaqSectionWithArrowStyleBlock() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h6 className="mb-2 text-center text-lg font-medium text-indigo-600">
            FAQs
          </h6>
          <h2 className="font-manrope text-center text-4xl leading-[3.25rem] font-bold text-gray-900">
            Frequently asked questions
          </h2>
        </div>
        <div className="accordion-group" data-accordion="default-accordion">
          <div
            className="accordion accordion-active:bg-indigo-50 active rounded-2xl border-b border-solid border-gray-200 px-6 py-8 transition-all duration-500 hover:bg-indigo-50"
            id="basic-heading-one-with-arrow"
          >
            <button
              className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left leading-8 text-gray-900 transition duration-500 hover:text-indigo-600"
              aria-controls="basic-collapse-one-with-arrow"
            >
              <h5>How do I update my billing information?</h5>
              {/* SVG removed */}
            </button>
            <div
              id="basic-collapse-one-with-arrow"
              className="accordion-content w-full overflow-hidden px-0"
              aria-labelledby="basic-heading-one-with-arrow"
            >
              <p className="text-base leading-6 text-gray-900">
                To contact customer support, look for a 'Contact us' or 'Help'
                button or link on the website or platform. You may be able to
                email, call, or chat with customer support for assistance.
              </p>
            </div>
          </div>
          <div
            className="accordion accordion-active:bg-indigo-50 rounded-2xl border-b border-solid border-gray-200 px-6 py-8 transition-all duration-500 hover:bg-indigo-50"
            id="basic-heading-two-with-arrow"
          >
            <button
              className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left leading-8 text-gray-900 transition duration-500 hover:text-indigo-600"
              aria-controls="basic-collapse-two-with-arrow"
            >
              <h5>How can I contact customer support?</h5>
              {/* SVG removed */}
            </button>
            <div
              id="basic-collapse-two-with-arrow"
              className="accordion-content w-full overflow-hidden px-0"
              aria-labelledby="basic-heading-two-with-arrow"
            >
              <p className="text-base leading-6 text-gray-900">
                To contact customer support, look for a 'Contact us' or 'Help'
                button or link on the website or platform. You may be able to
                email, call, or chat with customer support for assistance.
              </p>
            </div>
          </div>
          <div
            className="accordion accordion-active:bg-indigo-50 rounded-2xl border-b border-solid border-gray-200 px-6 py-8 transition-all duration-500 hover:bg-indigo-50"
            id="basic-heading-three-with-arrow"
          >
            <button
              className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left leading-8 text-gray-900 transition duration-500 hover:text-indigo-600"
              aria-controls="basic-collapse-three-with-arrow"
            >
              <h5>How do I update my profile information?</h5>
              {/* SVG removed */}
            </button>
            <div
              id="basic-collapse-three-with-arrow"
              className="accordion-content w-full overflow-hidden px-0"
              aria-labelledby="basic-heading-three-with-arrow"
            >
              <p className="text-base leading-6 text-gray-900">
                To contact customer support, look for a 'Contact us' or 'Help'
                button or link on the website or platform. You may be able to
                email, call, or chat with customer support for assistance.
              </p>
            </div>
          </div>
          <div
            className="accordion accordion-active:bg-indigo-50 rounded-2xl px-6 py-8 transition-all duration-500 hover:bg-indigo-50"
            id="basic-heading-three-with-arrow"
          >
            <button
              className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left leading-8 text-gray-900 transition duration-500 hover:text-indigo-600"
              aria-controls="basic-collapse-three-with-arrow"
            >
              <h5>How do I find my purchase history?</h5>
              {/* SVG removed */}
            </button>
            <div
              id="basic-collapse-three-with-arrow"
              className="accordion-content w-full overflow-hidden px-0"
              aria-labelledby="basic-heading-three-with-arrow"
            >
              <p className="text-base leading-6 text-gray-900">
                To contact customer support, look for a 'Contact us' or 'Help'
                button or link on the website or platform. You may be able to
                email, call, or chat with customer support for assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
