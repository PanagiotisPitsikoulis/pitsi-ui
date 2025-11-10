export default function TwoColumnFaqWithHeadings() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="flex w-full flex-col items-center justify-start gap-5">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-indigo-600">
              FAQ Center
            </h2>
            <p className="w-full text-center text-base leading-relaxed font-normal text-gray-500 lg:max-w-3xl">
              FAQ Center is a comprehensive resource designed to provide users
              with quick access to answers for thei It serves as a centralized
              hub where users can find detailed
            </p>
          </div>
          <div
            className="accordion-group grid h-full grid-cols-1 gap-8 lg:grid-cols-2"
            data-accordion="default-accordion"
          >
            <div className="flex w-full flex-col gap-12">
              <div className="flex w-full flex-col gap-8">
                <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-gray-900 sm:text-start">
                  Our Service Questions
                </h3>
                <div className="flex w-full flex-col gap-5">
                  <div
                    className="accordion rounded-xl bg-gray-100 p-4"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:font-medium inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
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
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-500">
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
                      className="accordion-toggle group accordion-active:font-medium inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
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
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-500">
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
                      className="accordion-toggle group accordion-active:font-medium inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
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
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-500">
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-8">
                <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-gray-900 sm:text-start">
                  Support Questions
                </h3>
                <div className="flex w-full flex-col gap-5">
                  <div
                    className="accordion rounded-xl bg-gray-100 p-4"
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:font-medium inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
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
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-500">
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
                      className="accordion-toggle group accordion-active:font-medium inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
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
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-five-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-500">
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
                      className="accordion-toggle group accordion-active:font-medium inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
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
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-six-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-500">
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
            <div className="flex w-full flex-col gap-12">
              <div className="flex w-full flex-col gap-8">
                <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-gray-900 sm:text-start">
                  Privacy/Policy Questions
                </h3>
                <div className="flex w-full flex-col gap-5">
                  <div
                    className="accordion rounded-xl bg-gray-100 p-4"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:font-medium inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
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
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-500">
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
                      className="accordion-toggle group accordion-active:font-medium inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
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
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-500">
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
                      className="accordion-toggle group accordion-active:font-medium inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
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
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-500">
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-8">
                <h3 className="font-manrope text-center text-2xl leading-9 font-semibold text-gray-900 sm:text-start">
                  General Report Questions
                </h3>
                <div className="flex w-full flex-col gap-5">
                  <div
                    className="accordion rounded-xl bg-gray-100 p-4"
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:font-medium inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
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
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-500">
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
                      className="accordion-toggle group accordion-active:font-medium inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
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
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-five-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-500">
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
                      className="accordion-toggle group accordion-active:font-medium inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
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
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-six-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-500">
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
  )
}
