export default function TwoColumnFaqWithHeadings() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-5 flex">
            <h2 className="text-center text-indigo-600 text-4xl font-bold font-manrope leading-normal">
              FAQ Center
            </h2>
            <p className="lg:max-w-3xl w-full text-center text-gray-500 text-base font-normal leading-relaxed">
              FAQ Center is a comprehensive resource designed to provide users
              with quick access to answers for thei It serves as a centralized
              hub where users can find detailed
            </p>
          </div>
          <div
            className="accordion-group grid lg:grid-cols-2 grid-cols-1 gap-8 h-full"
            data-accordion="default-accordion"
          >
            <div className="w-full flex flex-col gap-12">
              <div className="w-full flex flex-col gap-8">
                <h3 className="sm:text-start text-center text-gray-900 text-2xl font-semibold font-manrope leading-9">
                  Our Service Questions
                </h3>
                <div className="w-full flex flex-col gap-5">
                  <div
                    className="accordion rounded-xl bg-gray-100 p-4"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:font-medium"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I provide feedback on the services I received?
                      </h5>
                      <a className="pointer-events-none">
                        {/* SVG removed */}
                        {/* SVG removed */}
                      </a>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-500 pt-3">
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion rounded-xl bg-gray-100 p-4"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:font-medium"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I reset my password?
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
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion rounded-xl bg-gray-100 p-4"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:font-medium"
                      aria-controls="basic-collapse-three-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        Which is better short term or long term?
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
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-8">
                <h3 className="sm:text-start text-center text-gray-900 text-2xl font-semibold font-manrope leading-9">
                  Support Questions
                </h3>
                <div className="w-full flex flex-col gap-5">
                  <div
                    className="accordion rounded-xl bg-gray-100 p-4"
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:font-medium"
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I delete my account?
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
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion rounded-xl bg-gray-100 p-4"
                    id="basic-heading-five-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:font-medium"
                      aria-controls="basic-collapse-five-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I delete my account?
                      </h5>
                      <a className="pointer-events-none">
                        {/* SVG removed */}
                        {/* SVG removed */}
                      </a>
                    </button>
                    <div
                      id="basic-collapse-five-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-five-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-500 pt-3">
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion rounded-xl bg-gray-100 p-4"
                    id="basic-heading-six-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:font-medium"
                      aria-controls="basic-collapse-six-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How many percent return in long term?
                      </h5>
                      <a className="pointer-events-none">
                        {/* SVG removed */}
                        {/* SVG removed */}
                      </a>
                    </button>
                    <div
                      id="basic-collapse-six-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-six-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-500 pt-3">
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-12">
              <div className="w-full flex flex-col gap-8">
                <h3 className="sm:text-start text-center text-gray-900 text-2xl font-semibold font-manrope leading-9">
                  Privacy/Policy Questions
                </h3>
                <div className="w-full flex flex-col gap-5">
                  <div
                    className="accordion rounded-xl bg-gray-100 p-4"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:font-medium"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I contact customer support?
                      </h5>
                      <a className="pointer-events-none">
                        {/* SVG removed */}
                        {/* SVG removed */}
                      </a>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-500 pt-3">
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion rounded-xl bg-gray-100 p-4"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:font-medium"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I reset my password?
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
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion rounded-xl bg-gray-100 p-4"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:font-medium"
                      aria-controls="basic-collapse-three-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I change my privacy settings?
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
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-8">
                <h3 className="sm:text-start text-center text-gray-900 text-2xl font-semibold font-manrope leading-9">
                  General Report Questions
                </h3>
                <div className="w-full flex flex-col gap-5">
                  <div
                    className="accordion rounded-xl bg-gray-100 p-4"
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:font-medium"
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I provide feedback on the services I received?
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
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion rounded-xl bg-gray-100 p-4"
                    id="basic-heading-five-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:font-medium"
                      aria-controls="basic-collapse-five-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        Are there any additional fees for your services?
                      </h5>
                      <a className="pointer-events-none">
                        {/* SVG removed */}
                        {/* SVG removed */}
                      </a>
                    </button>
                    <div
                      id="basic-collapse-five-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-five-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-500 pt-3">
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion rounded-xl bg-gray-100 p-4"
                    id="basic-heading-six-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:font-medium"
                      aria-controls="basic-collapse-six-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I request a service appointment?
                      </h5>
                      <a className="pointer-events-none">
                        {/* SVG removed */}
                        {/* SVG removed */}
                      </a>
                    </button>
                    <div
                      id="basic-collapse-six-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-six-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-500 pt-3">
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
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
