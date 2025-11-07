export default function FaqInsideTabs() {
  return (
    <section className="py-24">
      <div className="tabs mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-center justify-start pb-10 lg:pb-14">
          <div className="flex w-full flex-col items-center justify-start gap-5">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-black">
              Popular Questions
            </h2>
            <p className="w-full text-center text-base leading-relaxed font-normal text-gray-500 lg:max-w-5xl">
              This section highlights the inquiries that are most relevant to
              the audience, providing clear and concise answers to help address
              the most common concerns or interests.
            </p>
          </div>
        </div>
        {/*Switch*/}
        <div className="grid w-full grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-12 lg:gap-x-10 lg:gap-y-0">
          <div className="col-span-12 mx-auto flex w-full flex-col items-center justify-start gap-5 lg:col-span-5 lg:justify-center">
            <a
              className="group tab-active:bg-indigo-600 tablink active flex inline-block w-full flex-col gap-2 rounded-lg p-4 text-center transition-all duration-700 ease-in-out hover:bg-indigo-600"
              data-tab="tabs-with-background-1"
              role="tab"
            >
              <div className="pointer-events-none flex gap-2">
                {/* SVG removed */}
                <h4 className="tab-active:text-white text-xl leading-8 font-medium text-gray-500 transition-all duration-700 ease-in-out group-hover:text-white">
                  General
                </h4>
              </div>
              <p className="tab-active:text-gray-200 pointer-events-none text-start text-xs leading-normal font-normal text-gray-400 transition-all duration-700 ease-in-out group-hover:text-gray-200">
                Welcome to the General section, where you can find essential
                information and resources to help you navigate our services.
              </p>
            </a>
            <a
              className="group tab-active:bg-indigo-600 tablink flex inline-block w-full flex-col gap-2 rounded-lg p-4 text-center transition-all duration-700 ease-in-out hover:bg-indigo-600"
              data-tab="tabs-with-background-2"
              role="tab"
            >
              <div className="pointer-events-none flex gap-2">
                {/* SVG removed */}
                <h4 className="tab-active:text-white text-xl leading-8 font-medium text-gray-500 transition-all duration-700 ease-in-out group-hover:text-white">
                  Support
                </h4>
              </div>
              <p className="tab-active:text-gray-200 pointer-events-none text-start text-xs leading-normal font-normal text-gray-400 transition-all duration-700 ease-in-out group-hover:text-gray-200">
                Our dedicated support team is here to assist you with any
                questions or issues you may have. We provide prompt.
              </p>
            </a>
            <a
              className="group tab-active:bg-indigo-600 tablink flex inline-block w-full flex-col gap-2 rounded-lg p-4 text-center transition-all duration-700 ease-in-out hover:bg-indigo-600"
              data-tab="tabs-with-background-3"
              role="tab"
            >
              <div className="pointer-events-none flex gap-2">
                {/* SVG removed */}
                <h4 className="tab-active:text-white text-xl leading-8 font-medium text-gray-500 transition-all duration-700 ease-in-out group-hover:text-white">
                  Other
                </h4>
              </div>
              <p className="tab-active:text-gray-200 pointer-events-none text-start text-xs leading-normal font-normal text-gray-400 transition-all duration-700 ease-in-out group-hover:text-gray-200">
                If you have specific needs or inquiries that don’t fall into our
                standard categories, we’re here to help.
              </p>
            </a>
          </div>
          {/*Switch End*/}
          <div className="col-span-12 lg:col-span-7">
            {/*Grid*/}
            <div
              id="tabs-with-background-1"
              role="tabpanel"
              aria-labelledby="tabs-with-background-item-1"
              className="tabcontent"
            >
              <div
                className="accordion-group col-span-12 flex flex-col gap-6 lg:col-span-7 lg:h-full"
                data-accordion="default-accordion"
              >
                <h2 className="text-center text-3xl leading-normal font-bold text-indigo-600 sm:text-start">
                  General Questions
                </h2>
                <div className="flex flex-col gap-7">
                  <div
                    className="accordion active border-b border-gray-200 pb-8"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I reset my password?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content active w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="pt-2.5 text-sm font-normal text-gray-500">
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion border-b border-gray-200 pb-8"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my profile information?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-two-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="pt-2.5 text-sm font-normal text-gray-500">
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion border-b border-gray-200 pb-8"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-three-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I reset my password?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-three-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="pt-2.5 text-sm font-normal text-gray-500">
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
            <div
              id="tabs-with-background-2"
              role="tabpanel"
              aria-labelledby="tabs-with-background-item-2"
              className="tabcontent"
            >
              <div
                className="accordion-group col-span-12 flex flex-col gap-6 lg:col-span-7 lg:h-full"
                data-accordion="default-accordion"
              >
                <h2 className="text-center text-3xl leading-normal font-bold text-indigo-600 sm:text-start">
                  Support Questions
                </h2>
                <div className="flex flex-col gap-7">
                  <div
                    className="accordion active border-b border-gray-200 pb-8"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I reset my password?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content active w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="pt-2.5 text-sm font-normal text-gray-500">
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion border-b border-gray-200 pb-8"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my profile information?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-two-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="pt-2.5 text-sm font-normal text-gray-500">
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion border-b border-gray-200 pb-8"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-three-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I reset my password?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-three-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="pt-2.5 text-sm font-normal text-gray-500">
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
            <div
              id="tabs-with-background-3"
              role="tabpanel"
              aria-labelledby="tabs-with-background-item-3"
              className="tabcontent"
            >
              <div
                className="accordion-group col-span-12 flex flex-col gap-6 lg:col-span-7 lg:h-full"
                data-accordion="default-accordion"
              >
                <h2 className="text-center text-3xl leading-normal font-bold text-indigo-600 sm:text-start">
                  Other Questions
                </h2>
                <div className="flex flex-col gap-7">
                  <div
                    className="accordion active border-b border-gray-200 pb-8"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I reset my password?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content active w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="pt-2.5 text-sm font-normal text-gray-500">
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion border-b border-gray-200 pb-8"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my profile information?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-two-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="pt-2.5 text-sm font-normal text-gray-500">
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion border-b border-gray-200 pb-8"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-three-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I reset my password?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-three-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="pt-2.5 text-sm font-normal text-gray-500">
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
