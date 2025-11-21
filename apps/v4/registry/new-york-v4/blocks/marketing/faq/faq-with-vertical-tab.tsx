export default function FaqWithVerticalTab() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="tabs">
          <div className="mb-10 inline-flex w-full flex-col items-center justify-start gap-3 lg:mb-20 lg:gap-4">
            <span className="text-center text-lg leading-relaxed font-normal text-gray-500">
              Most people ask about
            </span>
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Frequently asked questions
            </h2>
          </div>
          {/*Switch*/}
          <div className="flex w-full flex-col gap-10 lg:flex-row lg:gap-28">
            <div className="mx-auto flex w-fit flex-col items-start justify-start gap-3 lg:w-full lg:max-w-[300px]">
              <a
                className="group tab-active:py-6 tab-active:rounded-xl tab-active:bg-indigo-50 tab-active:text-indigo-600 tab-active:border-transparent tablink active flex inline-block w-full flex-col gap-2 border-b border-gray-200 bg-white px-6 py-5 text-center text-lg leading-relaxed font-medium whitespace-nowrap text-gray-900 transition-all duration-700 ease-in-out lg:text-start"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                General Report
              </a>
              <a
                className="group tab-active:py-6 tab-active:rounded-xl tab-active:bg-indigo-50 tab-active:text-indigo-600 tab-active:border-transparent tablink flex inline-block w-full flex-col gap-2 border-b border-gray-200 bg-white px-6 py-5 text-center text-lg leading-relaxed font-medium whitespace-nowrap text-gray-900 transition-all duration-700 ease-in-out lg:text-start"
                data-tab="tabs-with-background-2"
                role="tab"
              >
                our service
              </a>
              <a
                className="group tab-active:py-6 tab-active:rounded-xl tab-active:bg-indigo-50 tab-active:text-indigo-600 tab-active:border-transparent tablink flex inline-block w-full flex-col gap-2 border-b border-gray-200 bg-white px-6 py-5 text-center text-lg leading-relaxed font-medium whitespace-nowrap text-gray-900 transition-all duration-700 ease-in-out lg:text-start"
                data-tab="tabs-with-background-3"
                role="tab"
              >
                Support
              </a>
              <a
                className="group tab-active:py-6 tab-active:rounded-xl tab-active:bg-indigo-50 tab-active:text-indigo-600 tablink flex inline-block w-full flex-col gap-2 bg-white px-6 py-5 text-center text-lg leading-relaxed font-medium whitespace-nowrap text-gray-900 transition-all duration-700 ease-in-out lg:text-start"
                data-tab="tabs-with-background-4"
                role="tab"
              >
                Privacy/Policy
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
                  className="accordion-group flex flex-col gap-6 lg:h-full"
                  data-accordion="default-accordion"
                >
                  <div
                    className="accordion active rounded-xl border border-gray-300 p-4 sm:p-6"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium always-open inline-flex w-full items-center justify-between gap-2 text-lg leading-relaxed font-normal text-gray-600 transition duration-500"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
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
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content active w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To reset your password, go to the login page and click
                        on the "Forgot password" link. Enter the email address
                        associated with your account, and you will receive an
                        email with instructions on how to reset your password.
                        Follow the instructions in the email to create a new
                        password.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion rounded-xl border border-gray-300 p-4 sm:p-6"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-lg leading-relaxed font-normal text-gray-600 transition duration-500"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        Which is better short term or long term ?
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
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To reset your password, go to the login page and click
                        on the "Forgot password" link. Enter the email address
                        associated with your account, and you will receive an
                        email with instructions on how to reset your password.
                        Follow the instructions in the email to create a new
                        password.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion rounded-xl border border-gray-300 p-4 sm:p-6"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-lg leading-relaxed font-normal text-gray-600 transition duration-500"
                      aria-controls="basic-collapse-three-with-arrow-always-open"
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
                      id="basic-collapse-three-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To reset your password, go to the login page and click
                        on the "Forgot password" link. Enter the email address
                        associated with your account, and you will receive an
                        email with instructions on how to reset your password.
                        Follow the instructions in the email to create a new
                        password.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion rounded-xl border border-gray-300 p-4 sm:p-6"
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-lg leading-relaxed font-normal text-gray-600 transition duration-500"
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5 className="text-start">Which is safe investment ?</h5>
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
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To reset your password, go to the login page and click
                        on the "Forgot password" link. Enter the email address
                        associated with your account, and you will receive an
                        email with instructions on how to reset your password.
                        Follow the instructions in the email to create a new
                        password.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion rounded-xl border border-gray-300 p-4 sm:p-6"
                    id="basic-heading-five-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-lg leading-relaxed font-normal text-gray-600 transition duration-500"
                      aria-controls="basic-collapse-five-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How many percent return in long term ?
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
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To reset your password, go to the login page and click
                        on the "Forgot password" link. Enter the email address
                        associated with your account, and you will receive an
                        email with instructions on how to reset your password.
                        Follow the instructions in the email to create a new
                        password.
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
                  className="accordion-group flex flex-col gap-6 lg:h-full"
                  data-accordion="default-accordion"
                >
                  <div
                    className="accordion rounded-xl border border-gray-300 p-4 sm:p-6"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-lg leading-relaxed font-normal text-gray-600 transition duration-500"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        Which is better short term or long term ?
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
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To reset your password, go to the login page and click
                        on the "Forgot password" link. Enter the email address
                        associated with your account, and you will receive an
                        email with instructions on how to reset your password.
                        Follow the instructions in the email to create a new
                        password.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion active rounded-xl border border-gray-300 p-4 sm:p-6"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium always-open inline-flex w-full items-center justify-between gap-2 text-lg leading-relaxed font-normal text-gray-600 transition duration-500"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
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
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content active w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To reset your password, go to the login page and click
                        on the "Forgot password" link. Enter the email address
                        associated with your account, and you will receive an
                        email with instructions on how to reset your password.
                        Follow the instructions in the email to create a new
                        password.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion rounded-xl border border-gray-300 p-4 sm:p-6"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-lg leading-relaxed font-normal text-gray-600 transition duration-500"
                      aria-controls="basic-collapse-three-with-arrow-always-open"
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
                      id="basic-collapse-three-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To reset your password, go to the login page and click
                        on the "Forgot password" link. Enter the email address
                        associated with your account, and you will receive an
                        email with instructions on how to reset your password.
                        Follow the instructions in the email to create a new
                        password.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion rounded-xl border border-gray-300 p-4 sm:p-6"
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-lg leading-relaxed font-normal text-gray-600 transition duration-500"
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5 className="text-start">Which is safe investment ?</h5>
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
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To reset your password, go to the login page and click
                        on the "Forgot password" link. Enter the email address
                        associated with your account, and you will receive an
                        email with instructions on how to reset your password.
                        Follow the instructions in the email to create a new
                        password.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion rounded-xl border border-gray-300 p-4 sm:p-6"
                    id="basic-heading-five-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-lg leading-relaxed font-normal text-gray-600 transition duration-500"
                      aria-controls="basic-collapse-five-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How many percent return in long term ?
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
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To reset your password, go to the login page and click
                        on the "Forgot password" link. Enter the email address
                        associated with your account, and you will receive an
                        email with instructions on how to reset your password.
                        Follow the instructions in the email to create a new
                        password.
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
                  className="accordion-group flex flex-col gap-6 lg:h-full"
                  data-accordion="default-accordion"
                >
                  <div
                    className="accordion active rounded-xl border border-gray-300 p-4 sm:p-6"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium always-open inline-flex w-full items-center justify-between gap-2 text-lg leading-relaxed font-normal text-gray-600 transition duration-500"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
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
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content active w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To reset your password, go to the login page and click
                        on the "Forgot password" link. Enter the email address
                        associated with your account, and you will receive an
                        email with instructions on how to reset your password.
                        Follow the instructions in the email to create a new
                        password.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion rounded-xl border border-gray-300 p-4 sm:p-6"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-lg leading-relaxed font-normal text-gray-600 transition duration-500"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        Which is better short term or long term ?
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
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To reset your password, go to the login page and click
                        on the "Forgot password" link. Enter the email address
                        associated with your account, and you will receive an
                        email with instructions on how to reset your password.
                        Follow the instructions in the email to create a new
                        password.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion rounded-xl border border-gray-300 p-4 sm:p-6"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-lg leading-relaxed font-normal text-gray-600 transition duration-500"
                      aria-controls="basic-collapse-three-with-arrow-always-open"
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
                      id="basic-collapse-three-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To reset your password, go to the login page and click
                        on the "Forgot password" link. Enter the email address
                        associated with your account, and you will receive an
                        email with instructions on how to reset your password.
                        Follow the instructions in the email to create a new
                        password.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion rounded-xl border border-gray-300 p-4 sm:p-6"
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-lg leading-relaxed font-normal text-gray-600 transition duration-500"
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5 className="text-start">Which is safe investment ?</h5>
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
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To reset your password, go to the login page and click
                        on the "Forgot password" link. Enter the email address
                        associated with your account, and you will receive an
                        email with instructions on how to reset your password.
                        Follow the instructions in the email to create a new
                        password.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion rounded-xl border border-gray-300 p-4 sm:p-6"
                    id="basic-heading-five-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-lg leading-relaxed font-normal text-gray-600 transition duration-500"
                      aria-controls="basic-collapse-five-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How many percent return in long term ?
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
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To reset your password, go to the login page and click
                        on the "Forgot password" link. Enter the email address
                        associated with your account, and you will receive an
                        email with instructions on how to reset your password.
                        Follow the instructions in the email to create a new
                        password.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="tabs-with-background-4"
                role="tabpanel"
                aria-labelledby="tabs-with-background-item-4"
                className="tabcontent"
              >
                <div
                  className="accordion-group flex flex-col gap-6 lg:h-full"
                  data-accordion="default-accordion"
                >
                  <div
                    className="accordion rounded-xl border border-gray-300 p-4 sm:p-6"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-lg leading-relaxed font-normal text-gray-600 transition duration-500"
                      aria-controls="basic-collapse-two-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        Which is better short term or long term ?
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
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To reset your password, go to the login page and click
                        on the "Forgot password" link. Enter the email address
                        associated with your account, and you will receive an
                        email with instructions on how to reset your password.
                        Follow the instructions in the email to create a new
                        password.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion active rounded-xl border border-gray-300 p-4 sm:p-6"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium always-open inline-flex w-full items-center justify-between gap-2 text-lg leading-relaxed font-normal text-gray-600 transition duration-500"
                      aria-controls="basic-collapse-one-with-arrow-always-open"
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
                      id="basic-collapse-one-with-arrow-always-open"
                      className="accordion-content active w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To reset your password, go to the login page and click
                        on the "Forgot password" link. Enter the email address
                        associated with your account, and you will receive an
                        email with instructions on how to reset your password.
                        Follow the instructions in the email to create a new
                        password.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion rounded-xl border border-gray-300 p-4 sm:p-6"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-lg leading-relaxed font-normal text-gray-600 transition duration-500"
                      aria-controls="basic-collapse-three-with-arrow-always-open"
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
                      id="basic-collapse-three-with-arrow-always-open"
                      className="accordion-content w-full overflow-hidden px-0"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To reset your password, go to the login page and click
                        on the "Forgot password" link. Enter the email address
                        associated with your account, and you will receive an
                        email with instructions on how to reset your password.
                        Follow the instructions in the email to create a new
                        password.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion rounded-xl border border-gray-300 p-4 sm:p-6"
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-lg leading-relaxed font-normal text-gray-600 transition duration-500"
                      aria-controls="basic-collapse-four-with-arrow-always-open"
                    >
                      <h5 className="text-start">Which is safe investment ?</h5>
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
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To reset your password, go to the login page and click
                        on the "Forgot password" link. Enter the email address
                        associated with your account, and you will receive an
                        email with instructions on how to reset your password.
                        Follow the instructions in the email to create a new
                        password.
                      </p>
                    </div>
                  </div>
                  <div
                    className="accordion rounded-xl border border-gray-300 p-4 sm:p-6"
                    id="basic-heading-five-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between gap-2 text-lg leading-relaxed font-normal text-gray-600 transition duration-500"
                      aria-controls="basic-collapse-five-with-arrow-always-open"
                    >
                      <h5 className="text-start">
                        How many percent return in long term ?
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
                      <p className="pt-3 text-base font-normal text-gray-900">
                        To reset your password, go to the login page and click
                        on the "Forgot password" link. Enter the email address
                        associated with your account, and you will receive an
                        email with instructions on how to reset your password.
                        Follow the instructions in the email to create a new
                        password.
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
