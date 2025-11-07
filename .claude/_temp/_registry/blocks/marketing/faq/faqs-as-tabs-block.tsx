export default function FaqsAsTabsBlock() {
  return (
    <section className="py-24 bg-indigo-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="tabs bg-white rounded-3xl lg:py-20 md:py-10 py-5 lg:px-28 md:px-10 px-5">
          <div className="w-full flex-col justify-start lg:items-start items-center gap-2 inline-flex lg:mb-16 mb-10">
            <span className="text-indigo-600 text-base font-medium leading-relaxed lg:text-start text-center">
              HOW TO GET STARTED
            </span>
            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
              Frequently asked questions{" "}
            </h2>
          </div>
          {/*Switch*/}
          <div className="w-full flex md:flex-row flex-col lg:gap-20 gap-10">
            <div className="w-fit flex flex-col justify-start items-start md:gap-10 gap-3 mx-auto lg:pr-20 pr-10 md:border-r border-gray-200">
              <a
                className="inline-block group w-fit text-center transition-all duration-700 ease-in-out py-3 flex flex-col gap-2 tablink active"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                <div className="flex items-center gap-2 pointer-events-none ">
                  {/* SVG removed */}
                  <h4 className="text-gray-500 group-hover:text-indigo-600 tab-active:text-indigo-600 transition-all duration-700 ease-in-out text-lg font-medium leading-relaxed">
                    General
                  </h4>
                </div>
              </a>
              <a
                className="inline-block w-fit text-center group transition-all duration-700 ease-in-out py-3 flex flex-col gap-2 tablink"
                data-tab="tabs-with-background-2"
                role="tab"
              >
                <div className="flex items-center gap-2 pointer-events-none">
                  {/* SVG removed */}
                  <h4 className="text-gray-500 group-hover:text-indigo-600 tab-active:text-indigo-600 transition-all duration-700 ease-in-out text-lg font-medium leading-relaxed">
                    Support
                  </h4>
                </div>
              </a>
              <a
                className="inline-block w-fit text-center group transition-all duration-700 ease-in-out py-3 flex flex-col gap-2 tablink"
                data-tab="tabs-with-background-3"
                role="tab"
              >
                <div className="flex items-center gap-2 pointer-events-none">
                  {/* SVG removed */}
                  <h4 className="text-gray-500 group-hover:text-indigo-600 tab-active:text-indigo-600 transition-all duration-700 ease-in-out text-lg font-medium leading-relaxed">
                    Other
                  </h4>
                </div>
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
                  className="accordion-group flex flex-col gap-12 lg:h-full"
                  data-accordion="default-accordion"
                >
                  <div
                    className="accordion active"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-lg font-medium leading-relaxed accordion-active:text-indigo-600 w-full transition duration-500 always-open"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5 className="text-start">How to create an account? </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden active"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="text-sm font-normal text-gray-500 pt-3">
                        To create an account, find the "Sign up" or "Create
                        account" button, fill out the registration form with
                        your personal information, and click "Create account" or
                        "Sign up." Verify your email address if needed, and then
                        log in to start using the platform.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-lg font-medium leading-relaxed accordion-active:text-indigo-600 w-full transition duration-500"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">Have any trust issue?</h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-two-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="text-sm font-normal text-gray-500 pt-2.5">
                        To create an account, find the "Sign up" or "Create
                        account" button, fill out the registration form with
                        your personal information, and click "Create account" or
                        "Sign up." Verify your email address if needed, and then
                        log in to start using the platform.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-lg font-medium leading-relaxed accordion-active:text-indigo-600 w-full transition duration-500"
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
                        To create an account, find the "Sign up" or "Create
                        account" button, fill out the registration form with
                        your personal information, and click "Create account" or
                        "Sign up." Verify your email address if needed, and then
                        log in to start using the platform.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion"
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-lg font-medium leading-relaxed accordion-active:text-indigo-600 w-full transition duration-500"
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        What is the payment process?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-four-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                    >
                      <p className="text-sm font-normal text-gray-500 pt-2.5">
                        To create an account, find the "Sign up" or "Create
                        account" button, fill out the registration form with
                        your personal information, and click "Create account" or
                        "Sign up." Verify your email address if needed, and then
                        log in to start using the platform.
                      </p>
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
                  className="accordion-group flex flex-col gap-12 lg:h-full"
                  data-accordion="default-accordion"
                >
                  <div
                    className="accordion active"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-lg font-medium leading-relaxed accordion-active:text-indigo-600 w-full transition duration-500 always-open"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5 className="text-start">How to create an account? </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden active"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="text-sm font-normal text-gray-500 pt-3">
                        To create an account, find the "Sign up" or "Create
                        account" button, fill out the registration form with
                        your personal information, and click "Create account" or
                        "Sign up." Verify your email address if needed, and then
                        log in to start using the platform.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-lg font-medium leading-relaxed accordion-active:text-indigo-600 w-full transition duration-500"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">Have any trust issue?</h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-two-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="text-sm font-normal text-gray-500 pt-2.5">
                        To create an account, find the "Sign up" or "Create
                        account" button, fill out the registration form with
                        your personal information, and click "Create account" or
                        "Sign up." Verify your email address if needed, and then
                        log in to start using the platform.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-lg font-medium leading-relaxed accordion-active:text-indigo-600 w-full transition duration-500"
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
                        To create an account, find the "Sign up" or "Create
                        account" button, fill out the registration form with
                        your personal information, and click "Create account" or
                        "Sign up." Verify your email address if needed, and then
                        log in to start using the platform.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion"
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-lg font-medium leading-relaxed accordion-active:text-indigo-600 w-full transition duration-500"
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        What is the payment process?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-four-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                    >
                      <p className="text-sm font-normal text-gray-500 pt-2.5">
                        To create an account, find the "Sign up" or "Create
                        account" button, fill out the registration form with
                        your personal information, and click "Create account" or
                        "Sign up." Verify your email address if needed, and then
                        log in to start using the platform.
                      </p>
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
                  className="accordion-group flex flex-col gap-12 lg:h-full"
                  data-accordion="default-accordion"
                >
                  <div
                    className="accordion active"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-lg font-medium leading-relaxed accordion-active:text-indigo-600 w-full transition duration-500 always-open"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5 className="text-start">How to create an account? </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden active"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="text-sm font-normal text-gray-500 pt-3">
                        To create an account, find the "Sign up" or "Create
                        account" button, fill out the registration form with
                        your personal information, and click "Create account" or
                        "Sign up." Verify your email address if needed, and then
                        log in to start using the platform.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-lg font-medium leading-relaxed accordion-active:text-indigo-600 w-full transition duration-500"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">Have any trust issue?</h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-two-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="text-sm font-normal text-gray-500 pt-2.5">
                        To create an account, find the "Sign up" or "Create
                        account" button, fill out the registration form with
                        your personal information, and click "Create account" or
                        "Sign up." Verify your email address if needed, and then
                        log in to start using the platform.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-lg font-medium leading-relaxed accordion-active:text-indigo-600 w-full transition duration-500"
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
                        To create an account, find the "Sign up" or "Create
                        account" button, fill out the registration form with
                        your personal information, and click "Create account" or
                        "Sign up." Verify your email address if needed, and then
                        log in to start using the platform.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion"
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-lg font-medium leading-relaxed accordion-active:text-indigo-600 w-full transition duration-500"
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        What is the payment process?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-four-with-arrow-always-open"
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                    >
                      <p className="text-sm font-normal text-gray-500 pt-2.5">
                        To create an account, find the "Sign up" or "Create
                        account" button, fill out the registration form with
                        your personal information, and click "Create account" or
                        "Sign up." Verify your email address if needed, and then
                        log in to start using the platform.
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
