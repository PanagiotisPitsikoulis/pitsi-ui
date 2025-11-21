export default function FaqsAsTabsBlock() {
  return (
    <section className="bg-indigo-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="tabs rounded-3xl bg-white px-5 py-5 md:px-10 md:py-10 lg:px-28 lg:py-20">
          <div className="mb-10 inline-flex w-full flex-col items-center justify-start gap-2 lg:mb-16 lg:items-start">
            <span className="text-center text-base leading-relaxed font-medium text-indigo-600 lg:text-start">
              HOW TO GET STARTED
            </span>
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
              Frequently asked questions{" "}
            </h2>
          </div>
          {/*Switch*/}
          <div className="flex w-full flex-col gap-10 md:flex-row lg:gap-20">
            <div className="mx-auto flex w-fit flex-col items-start justify-start gap-3 border-gray-200 pr-10 md:gap-10 md:border-r lg:pr-20">
              <a
                className="group tablink active flex inline-block w-fit flex-col gap-2 py-3 text-center transition-all duration-700 ease-in-out"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                <div className="pointer-events-none flex items-center gap-2">
                  {/* SVG removed */}
                  <h4 className="tab-active:text-indigo-600 text-lg leading-relaxed font-medium text-gray-500 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                    General
                  </h4>
                </div>
              </a>
              <a
                className="group tablink flex inline-block w-fit flex-col gap-2 py-3 text-center transition-all duration-700 ease-in-out"
                data-tab="tabs-with-background-2"
                role="tab"
              >
                <div className="pointer-events-none flex items-center gap-2">
                  {/* SVG removed */}
                  <h4 className="tab-active:text-indigo-600 text-lg leading-relaxed font-medium text-gray-500 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                    Support
                  </h4>
                </div>
              </a>
              <a
                className="group tablink flex inline-block w-fit flex-col gap-2 py-3 text-center transition-all duration-700 ease-in-out"
                data-tab="tabs-with-background-3"
                role="tab"
              >
                <div className="pointer-events-none flex items-center gap-2">
                  {/* SVG removed */}
                  <h4 className="tab-active:text-indigo-600 text-lg leading-relaxed font-medium text-gray-500 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
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
                      className="accordion-toggle group accordion-active:text-indigo-600 always-open inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-medium text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5 className="text-start">How to create an account? </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content active w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="pt-3 text-sm font-normal text-gray-500">
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
                      className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-medium text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">Have any trust issue?</h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-two-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="pt-2.5 text-sm font-normal text-gray-500">
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
                      className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-medium text-gray-900 transition duration-500"
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
                      className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-medium text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        What is the payment process?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-four-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                    >
                      <p className="pt-2.5 text-sm font-normal text-gray-500">
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
                      className="accordion-toggle group accordion-active:text-indigo-600 always-open inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-medium text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5 className="text-start">How to create an account? </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content active w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="pt-3 text-sm font-normal text-gray-500">
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
                      className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-medium text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">Have any trust issue?</h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-two-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="pt-2.5 text-sm font-normal text-gray-500">
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
                      className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-medium text-gray-900 transition duration-500"
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
                      className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-medium text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        What is the payment process?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-four-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                    >
                      <p className="pt-2.5 text-sm font-normal text-gray-500">
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
                      className="accordion-toggle group accordion-active:text-indigo-600 always-open inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-medium text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
                    >
                      <h5 className="text-start">How to create an account? </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content active w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="pt-3 text-sm font-normal text-gray-500">
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
                      className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-medium text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">Have any trust issue?</h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-two-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="pt-2.5 text-sm font-normal text-gray-500">
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
                      className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-medium text-gray-900 transition duration-500"
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
                      className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between gap-5 text-lg leading-relaxed font-medium text-gray-900 transition duration-500"
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        What is the payment process?
                      </h5>
                      <a className="pointer-events-none">{/* SVG removed */}</a>
                    </button>
                    <div
                      id="basic-collapse-four-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                    >
                      <p className="pt-2.5 text-sm font-normal text-gray-500">
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
  )
}
