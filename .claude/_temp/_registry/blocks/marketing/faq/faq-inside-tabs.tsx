export default function FaqInsideTabs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 tabs">
        <div className="w-full flex-col justify-start items-center flex lg:pb-14 pb-10">
          <div className="w-full flex-col justify-start items-center gap-5 flex">
            <h2 className="text-center text-black text-4xl font-bold font-manrope leading-normal">
              Popular Questions
            </h2>
            <p className="lg:max-w-5xl w-full text-center text-gray-500 text-base font-normal leading-relaxed">
              This section highlights the inquiries that are most relevant to
              the audience, providing clear and concise answers to help address
              the most common concerns or interests.
            </p>
          </div>
        </div>
        {/*Switch*/}
        <div className="w-full grid lg:grid-cols-12 grid-cols-1 lg:gap-12 lg:gap-x-10 lg:gap-y-0 gap-y-10">
          <div className="lg:col-span-5 col-span-12 flex flex-col lg:justify-center justify-start items-center gap-5 mx-auto w-full">
            <a
              className="inline-block group w-full text-center transition-all duration-700 ease-in-out rounded-lg hover:bg-indigo-600 tab-active:bg-indigo-600 p-4 flex flex-col gap-2 tablink active"
              data-tab="tabs-with-background-1"
              role="tab"
            >
              <div className="flex gap-2 pointer-events-none ">
                {/* SVG removed */}
                <h4 className="text-gray-500 group-hover:text-white tab-active:text-white transition-all duration-700 ease-in-out text-xl font-medium leading-8">
                  General
                </h4>
              </div>
              <p className="pointer-events-none text-start text-gray-400 group-hover:text-gray-200 tab-active:text-gray-200 transition-all duration-700 ease-in-out text-xs font-normal leading-normal">
                Welcome to the General section, where you can find essential
                information and resources to help you navigate our services.
              </p>
            </a>
            <a
              className="inline-block w-full text-center group transition-all duration-700 ease-in-out rounded-lg hover:bg-indigo-600 tab-active:bg-indigo-600 p-4 flex flex-col gap-2 tablink"
              data-tab="tabs-with-background-2"
              role="tab"
            >
              <div className="flex gap-2 pointer-events-none">
                {/* SVG removed */}
                <h4 className="text-gray-500 group-hover:text-white tab-active:text-white transition-all duration-700 ease-in-out text-xl font-medium leading-8">
                  Support
                </h4>
              </div>
              <p className="pointer-events-none text-start text-gray-400 group-hover:text-gray-200 tab-active:text-gray-200 transition-all duration-700 ease-in-out text-xs font-normal leading-normal">
                Our dedicated support team is here to assist you with any
                questions or issues you may have. We provide prompt.
              </p>
            </a>
            <a
              className="inline-block w-full text-center group transition-all duration-700 ease-in-out rounded-lg hover:bg-indigo-600 tab-active:bg-indigo-600 p-4 flex flex-col gap-2 tablink"
              data-tab="tabs-with-background-3"
              role="tab"
            >
              <div className="flex gap-2 pointer-events-none">
                {/* SVG removed */}
                <h4 className="text-gray-500 group-hover:text-white tab-active:text-white transition-all duration-700 ease-in-out text-xl font-medium leading-8">
                  Other
                </h4>
              </div>
              <p className="pointer-events-none text-start text-gray-400 group-hover:text-gray-200 tab-active:text-gray-200 transition-all duration-700 ease-in-out text-xs font-normal leading-normal">
                If you have specific needs or inquiries that don’t fall into our
                standard categories, we’re here to help.
              </p>
            </a>
          </div>
          {/*Switch End*/}
          <div className=" lg:col-span-7 col-span-12">
            {/*Grid*/}
            <div
              id="tabs-with-background-1"
              role="tabpanel"
              aria-labelledby="tabs-with-background-item-1"
              className="tabcontent"
            >
              <div
                className="accordion-group flex flex-col gap-6 lg:h-full lg:col-span-7 col-span-12"
                data-accordion="default-accordion"
              >
                <h2 className="sm:text-start text-center text-indigo-600 text-3xl font-bold leading-normal">
                  General Questions
                </h2>
                <div className="flex flex-col gap-7">
                  <div
                    className="accordion pb-8 border-b border-gray-200 active"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-lg font-normal leading-relaxed w-full transition duration-500 always-open"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I reset my password?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden active"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="text-sm font-normal text-gray-500 pt-2.5">
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion pb-8 border-b border-gray-200"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-lg font-normal leading-relaxed w-full transition duration-500"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my profile information?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-two-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="text-sm font-normal text-gray-500 pt-2.5">
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion pb-8 border-b border-gray-200"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-lg font-normal leading-relaxed w-full transition duration-500"
                      aria-controls="basic-collapse-three-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I reset my password?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-three-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="text-sm font-normal text-gray-500 pt-2.5">
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
              className="tabcontent "
            >
              <div
                className="accordion-group flex flex-col gap-6 lg:h-full lg:col-span-7 col-span-12"
                data-accordion="default-accordion"
              >
                <h2 className="sm:text-start text-center text-indigo-600 text-3xl font-bold leading-normal">
                  Support Questions
                </h2>
                <div className="flex flex-col gap-7">
                  <div
                    className="accordion pb-8 border-b border-gray-200 active"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-lg font-normal leading-relaxed w-full transition duration-500 always-open"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I reset my password?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden active"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="text-sm font-normal text-gray-500 pt-2.5">
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion pb-8 border-b border-gray-200"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-lg font-normal leading-relaxed w-full transition duration-500"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my profile information?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-two-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="text-sm font-normal text-gray-500 pt-2.5">
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion pb-8 border-b border-gray-200"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-lg font-normal leading-relaxed w-full transition duration-500"
                      aria-controls="basic-collapse-three-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I reset my password?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-three-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="text-sm font-normal text-gray-500 pt-2.5">
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
              className="tabcontent "
            >
              <div
                className="accordion-group flex flex-col gap-6 lg:h-full lg:col-span-7 col-span-12"
                data-accordion="default-accordion"
              >
                <h2 className="sm:text-start text-center text-indigo-600 text-3xl font-bold leading-normal">
                  Other Questions
                </h2>
                <div className="flex flex-col gap-7">
                  <div
                    className="accordion pb-8 border-b border-gray-200 active"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-lg font-normal leading-relaxed w-full transition duration-500 always-open"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I reset my password?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden active"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="text-sm font-normal text-gray-500 pt-2.5">
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion pb-8 border-b border-gray-200"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-lg font-normal leading-relaxed w-full transition duration-500"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How do I update my profile information?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-two-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="text-sm font-normal text-gray-500 pt-2.5">
                        Our customer support team is dedicated to providing you
                        with the assistance you need, ensuring that your
                        experience with us is as smooth and enjoyable as
                        possible.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion pb-8 border-b border-gray-200"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-lg font-normal leading-relaxed w-full transition duration-500"
                      aria-controls="basic-collapse-three-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How can I reset my password?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-three-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="text-sm font-normal text-gray-500 pt-2.5">
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
