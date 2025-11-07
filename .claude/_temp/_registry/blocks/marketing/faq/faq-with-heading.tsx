export default function FaqWithHeading() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center lg:gap-14 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-2 flex">
            <span className="text-center text-indigo-600 text-lg font-medium leading-relaxed">
              FAQs
            </span>
            <h4 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Frequently asked questions
            </h4>
          </div>
          <div
            className="accordion-group flex flex-col gap-8 h-full"
            data-accordion="default-accordion"
          >
            <h3 className="md:text-start text-center text-black text-3xl font-semibold leading-normal">
              About us Questions
            </h3>
            <div
              className="accordion flex flex-col border-b border-gray-200 accordion-active:border-transparent accordion-active:p-4 pb-8 sm:px-6 px-3 accordion-active:rounded-xl bg-white accordion-active:bg-gray-50 active"
              id="basic-heading-one-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-gray-500 text-lg font-normal leading-relaxed  w-full transition duration-500 accordion-active:font-medium accordion-active:text-gray-900 always-open"
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
                className="accordion-content w-full px-0 overflow-hidden active"
                aria-labelledby="basic-heading-one-with-arrow-always-open"
              >
                <p className="text-base font-normal text-gray-500 pt-3">
                  Our customer support team is dedicated to providing you with
                  the assistance you need, ensuring that your experience with us
                  is as smooth and enjoyable as possible.
                </p>
              </div>
            </div>
            <div
              className="accordion flex flex-col border-b border-gray-200 accordion-active:border-transparent accordion-active:p-4 pb-8 sm:px-6 px-3 accordion-active:rounded-xl bg-white accordion-active:bg-gray-50"
              id="basic-heading-two-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-gray-500 text-lg font-normal leading-relaxed  w-full transition duration-500 accordion-active:font-medium accordion-active:text-gray-900"
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
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-two-with-arrow-always-open"
              >
                <p className="text-base font-normal text-gray-500 pt-3">
                  Our customer support team is dedicated to providing you with
                  the assistance you need, ensuring that your experience with us
                  is as smooth and enjoyable as possible.
                </p>
              </div>
            </div>
            <div
              className="accordion flex flex-col border-b border-gray-200 accordion-active:border-transparent accordion-active:p-4 pb-8 sm:px-6 px-3 accordion-active:rounded-xl bg-white accordion-active:bg-gray-50"
              id="basic-heading-three-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-gray-500 text-lg font-normal leading-relaxed  w-full transition duration-500 accordion-active:font-medium accordion-active:text-gray-900"
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
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-three-with-arrow-always-open"
              >
                <p className="text-base font-normal text-gray-500 pt-3">
                  Our customer support team is dedicated to providing you with
                  the assistance you need, ensuring that your experience with us
                  is as smooth and enjoyable as possible.
                </p>
              </div>
            </div>
            <div
              className="accordion flex flex-col accordion-active:border-transparent accordion-active:p-4 sm:px-6 px-3 accordion-active:rounded-xl bg-white accordion-active:bg-gray-50"
              id="basic-heading-four-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-gray-500 text-lg font-normal leading-relaxed  w-full transition duration-500 accordion-active:font-medium accordion-active:text-gray-900"
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
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-four-with-arrow-always-open"
              >
                <p className="text-base font-normal text-gray-500 pt-3">
                  Our customer support team is dedicated to providing you with
                  the assistance you need, ensuring that your experience with us
                  is as smooth and enjoyable as possible.
                </p>
              </div>
            </div>
            <h3 className="md:text-start text-center text-black text-3xl font-semibold leading-normal pt-3">
              Our service Questions
            </h3>
            <div
              className="accordion flex flex-col border-b border-gray-200 accordion-active:border-transparent accordion-active:p-4 pb-8 sm:px-6 px-3 accordion-active:rounded-xl bg-white accordion-active:bg-gray-50"
              id="basic-heading-two-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-gray-500 text-lg font-normal leading-relaxed  w-full transition duration-500 accordion-active:font-medium accordion-active:text-gray-900"
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
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-two-with-arrow-always-open"
              >
                <p className="text-base font-normal text-gray-500 pt-3">
                  Our customer support team is dedicated to providing you with
                  the assistance you need, ensuring that your experience with us
                  is as smooth and enjoyable as possible.
                </p>
              </div>
            </div>
            <div
              className="accordion flex flex-col border-b border-gray-200 accordion-active:border-transparent accordion-active:p-4 pb-8 sm:px-6 px-3 accordion-active:rounded-xl bg-white accordion-active:bg-gray-50"
              id="basic-heading-three-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-gray-500 text-lg font-normal leading-relaxed  w-full transition duration-500 accordion-active:font-medium accordion-active:text-gray-900"
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
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-three-with-arrow-always-open"
              >
                <p className="text-base font-normal text-gray-500 pt-3">
                  Our customer support team is dedicated to providing you with
                  the assistance you need, ensuring that your experience with us
                  is as smooth and enjoyable as possible.
                </p>
              </div>
            </div>
            <div
              className="accordion flex flex-col border-b border-gray-200 accordion-active:border-transparent accordion-active:p-4 pb-8 sm:px-6 px-3 accordion-active:rounded-xl bg-white accordion-active:bg-gray-50"
              id="basic-heading-four-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-gray-500 text-lg font-normal leading-relaxed  w-full transition duration-500 accordion-active:font-medium accordion-active:text-gray-900"
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
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-four-with-arrow-always-open"
              >
                <p className="text-base font-normal text-gray-500 pt-3">
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
  );
}
