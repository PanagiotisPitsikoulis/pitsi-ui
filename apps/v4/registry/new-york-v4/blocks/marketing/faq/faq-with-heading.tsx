export default function FaqWithHeading() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:gap-14">
          <div className="flex w-full flex-col items-center justify-start gap-2">
            <span className="text-center text-lg leading-relaxed font-medium text-indigo-600">
              FAQs
            </span>
            <h4 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Frequently asked questions
            </h4>
          </div>
          <div
            className="accordion-group flex h-full flex-col gap-8"
            data-accordion="default-accordion"
          >
            <h3 className="text-center text-3xl leading-normal font-semibold text-black md:text-start">
              About us Questions
            </h3>
            <div
              className="accordion accordion-active:border-transparent accordion-active:p-4 accordion-active:rounded-xl accordion-active:bg-gray-50 active flex flex-col border-b border-gray-200 bg-white px-3 pb-8 sm:px-6"
              id="basic-heading-one-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group accordion-active:font-medium accordion-active:text-gray-900 always-open inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-500 transition duration-500"
                aria-controls="basic-collapse-one-with-arrow-always-open"
              >
                <h5 className="text-left">How can I reset my password?</h5>
                <a className="pointer-events-none">
                  {/* SVG removed */}
                  {/* SVG removed */}
                </a>
              </button>
              <div
                id="basic-collapse-one-with-arrow-always-open"
                className="accordion-content active w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-one-with-arrow-always-open"
              >
                <p className="pt-3 text-base font-normal text-gray-500">
                  Our customer support team is dedicated to providing you with
                  the assistance you need, ensuring that your experience with us
                  is as smooth and enjoyable as possible.
                </p>
              </div>
            </div>
            <div
              className="accordion accordion-active:border-transparent accordion-active:p-4 accordion-active:rounded-xl accordion-active:bg-gray-50 flex flex-col border-b border-gray-200 bg-white px-3 pb-8 sm:px-6"
              id="basic-heading-two-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group accordion-active:font-medium accordion-active:text-gray-900 inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-500 transition duration-500"
                aria-controls="basic-collapse-two-with-arrow-always-open"
              >
                <h5 className="text-left">
                  How do I change my privacy settings?
                </h5>
                <a className="pointer-events-none">
                  {/* SVG removed */}
                  {/* SVG removed */}
                </a>
              </button>
              <div
                id="basic-collapse-two-with-arrow-always-open"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-two-with-arrow-always-open"
              >
                <p className="pt-3 text-base font-normal text-gray-500">
                  Our customer support team is dedicated to providing you with
                  the assistance you need, ensuring that your experience with us
                  is as smooth and enjoyable as possible.
                </p>
              </div>
            </div>
            <div
              className="accordion accordion-active:border-transparent accordion-active:p-4 accordion-active:rounded-xl accordion-active:bg-gray-50 flex flex-col border-b border-gray-200 bg-white px-3 pb-8 sm:px-6"
              id="basic-heading-three-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group accordion-active:font-medium accordion-active:text-gray-900 inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-500 transition duration-500"
                aria-controls="basic-collapse-three-with-arrow-always-open"
              >
                <h5 className="text-left">
                  How do I update my billing information?
                </h5>
                <a className="pointer-events-none">
                  {/* SVG removed */}
                  {/* SVG removed */}
                </a>
              </button>
              <div
                id="basic-collapse-three-with-arrow-always-open"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-three-with-arrow-always-open"
              >
                <p className="pt-3 text-base font-normal text-gray-500">
                  Our customer support team is dedicated to providing you with
                  the assistance you need, ensuring that your experience with us
                  is as smooth and enjoyable as possible.
                </p>
              </div>
            </div>
            <div
              className="accordion accordion-active:border-transparent accordion-active:p-4 accordion-active:rounded-xl accordion-active:bg-gray-50 flex flex-col bg-white px-3 sm:px-6"
              id="basic-heading-four-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group accordion-active:font-medium accordion-active:text-gray-900 inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-500 transition duration-500"
                aria-controls="basic-collapse-four-with-arrow-always-open"
              >
                <h5 className="text-left">How do I delete my account?</h5>
                <a className="pointer-events-none">
                  {/* SVG removed */}
                  {/* SVG removed */}
                </a>
              </button>
              <div
                id="basic-collapse-four-with-arrow-always-open"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-four-with-arrow-always-open"
              >
                <p className="pt-3 text-base font-normal text-gray-500">
                  Our customer support team is dedicated to providing you with
                  the assistance you need, ensuring that your experience with us
                  is as smooth and enjoyable as possible.
                </p>
              </div>
            </div>
            <h3 className="pt-3 text-center text-3xl leading-normal font-semibold text-black md:text-start">
              Our service Questions
            </h3>
            <div
              className="accordion accordion-active:border-transparent accordion-active:p-4 accordion-active:rounded-xl accordion-active:bg-gray-50 flex flex-col border-b border-gray-200 bg-white px-3 pb-8 sm:px-6"
              id="basic-heading-two-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group accordion-active:font-medium accordion-active:text-gray-900 inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-500 transition duration-500"
                aria-controls="basic-collapse-two-with-arrow-always-open"
              >
                <h5 className="text-left">
                  How do I change my privacy settings?
                </h5>
                <a className="pointer-events-none">
                  {/* SVG removed */}
                  {/* SVG removed */}
                </a>
              </button>
              <div
                id="basic-collapse-two-with-arrow-always-open"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-two-with-arrow-always-open"
              >
                <p className="pt-3 text-base font-normal text-gray-500">
                  Our customer support team is dedicated to providing you with
                  the assistance you need, ensuring that your experience with us
                  is as smooth and enjoyable as possible.
                </p>
              </div>
            </div>
            <div
              className="accordion accordion-active:border-transparent accordion-active:p-4 accordion-active:rounded-xl accordion-active:bg-gray-50 flex flex-col border-b border-gray-200 bg-white px-3 pb-8 sm:px-6"
              id="basic-heading-three-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group accordion-active:font-medium accordion-active:text-gray-900 inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-500 transition duration-500"
                aria-controls="basic-collapse-three-with-arrow-always-open"
              >
                <h5 className="text-left">What is the payment process?</h5>
                <a className="pointer-events-none">
                  {/* SVG removed */}
                  {/* SVG removed */}
                </a>
              </button>
              <div
                id="basic-collapse-three-with-arrow-always-open"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-three-with-arrow-always-open"
              >
                <p className="pt-3 text-base font-normal text-gray-500">
                  Our customer support team is dedicated to providing you with
                  the assistance you need, ensuring that your experience with us
                  is as smooth and enjoyable as possible.
                </p>
              </div>
            </div>
            <div
              className="accordion accordion-active:border-transparent accordion-active:p-4 accordion-active:rounded-xl accordion-active:bg-gray-50 flex flex-col border-b border-gray-200 bg-white px-3 pb-8 sm:px-6"
              id="basic-heading-four-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group accordion-active:font-medium accordion-active:text-gray-900 inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-500 transition duration-500"
                aria-controls="basic-collapse-four-with-arrow-always-open"
              >
                <h5 className="text-left">
                  How do I find my purchase history?
                </h5>
                <a className="pointer-events-none">
                  {/* SVG removed */}
                  {/* SVG removed */}
                </a>
              </button>
              <div
                id="basic-collapse-four-with-arrow-always-open"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-four-with-arrow-always-open"
              >
                <p className="pt-3 text-base font-normal text-gray-500">
                  Our customer support team is dedicated to providing you with
                  the assistance you need, ensuring that your experience with us
                  is as smooth and enjoyable as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
