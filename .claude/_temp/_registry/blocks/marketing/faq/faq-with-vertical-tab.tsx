export default function FaqWithVerticalTab() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="tabs">
          <div className="w-full flex-col justify-start items-center lg:gap-4 gap-3 inline-flex lg:mb-20 mb-10">
            <span className="text-center text-gray-500 text-lg font-normal leading-relaxed">
              Most people ask about
            </span>
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Frequently asked questions
            </h2>
          </div>
          {/*Switch*/}
          <div className="w-full flex lg:flex-row flex-col lg:gap-28 gap-10">
            <div className="lg:max-w-[300px] lg:w-full w-fit flex flex-col justify-start items-start gap-3 mx-auto">
              <a
                className="inline-block group w-full lg:text-start text-center transition-all duration-700 ease-in-out px-6 py-5 tab-active:py-6 tab-active:rounded-xl bg-white tab-active:bg-indigo-50 text-gray-900 text-lg font-medium leading-relaxed tab-active:text-indigo-600 border-b border-gray-200 tab-active:border-transparent flex flex-col gap-2 whitespace-nowrap tablink active"
                data-tab="tabs-with-background-1"
                role="tab"
              >
                General Report
              </a>
              <a
                className="inline-block group w-full lg:text-start text-center transition-all duration-700 ease-in-out px-6 py-5 tab-active:py-6 tab-active:rounded-xl bg-white tab-active:bg-indigo-50 text-gray-900 text-lg font-medium leading-relaxed tab-active:text-indigo-600 border-b border-gray-200 tab-active:border-transparent flex flex-col gap-2 whitespace-nowrap tablink"
                data-tab="tabs-with-background-2"
                role="tab"
              >
                our service
              </a>
              <a
                className="inline-block group w-full lg:text-start text-center transition-all duration-700 ease-in-out px-6 py-5 tab-active:py-6 tab-active:rounded-xl bg-white tab-active:bg-indigo-50 text-gray-900 text-lg font-medium leading-relaxed tab-active:text-indigo-600 border-b border-gray-200 tab-active:border-transparent flex flex-col gap-2 whitespace-nowrap tablink"
                data-tab="tabs-with-background-3"
                role="tab"
              >
                Support
              </a>
              <a
                className="inline-block group w-full lg:text-start text-center transition-all duration-700 ease-in-out px-6 py-5 tab-active:py-6 tab-active:rounded-xl bg-white tab-active:bg-indigo-50 text-gray-900 text-lg font-medium leading-relaxed tab-active:text-indigo-600 flex flex-col gap-2 whitespace-nowrap tablink"
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
                    className="accordion sm:p-6 p-4 rounded-xl border border-gray-300 active"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-600 text-lg font-normal leading-relaxed accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500 always-open"
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
                      className="accordion-content w-full px-0 overflow-hidden active"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
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
                    className="accordion sm:p-6 p-4 rounded-xl border border-gray-300"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-600 text-lg font-normal leading-relaxed accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
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
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
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
                    className="accordion sm:p-6 p-4 rounded-xl border border-gray-300"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-600 text-lg font-normal leading-relaxed accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
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
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
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
                    className="accordion sm:p-6 p-4 rounded-xl border border-gray-300"
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-600 text-lg font-normal leading-relaxed accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
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
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
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
                    className="accordion sm:p-6 p-4 rounded-xl border border-gray-300"
                    id="basic-heading-five-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-600 text-lg font-normal leading-relaxed accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
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
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-five-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
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
                className="tabcontent "
              >
                <div
                  className="accordion-group flex flex-col gap-6 lg:h-full"
                  data-accordion="default-accordion"
                >
                  <div
                    className="accordion sm:p-6 p-4 rounded-xl border border-gray-300"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-600 text-lg font-normal leading-relaxed accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
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
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
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
                    className="accordion sm:p-6 p-4 rounded-xl border border-gray-300 active"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-600 text-lg font-normal leading-relaxed accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500 always-open"
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
                      className="accordion-content w-full px-0 overflow-hidden active"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
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
                    className="accordion sm:p-6 p-4 rounded-xl border border-gray-300"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-600 text-lg font-normal leading-relaxed accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
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
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
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
                    className="accordion sm:p-6 p-4 rounded-xl border border-gray-300"
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-600 text-lg font-normal leading-relaxed accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
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
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
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
                    className="accordion sm:p-6 p-4 rounded-xl border border-gray-300"
                    id="basic-heading-five-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-600 text-lg font-normal leading-relaxed accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
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
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-five-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
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
                className="tabcontent "
              >
                <div
                  className="accordion-group flex flex-col gap-6 lg:h-full"
                  data-accordion="default-accordion"
                >
                  <div
                    className="accordion sm:p-6 p-4 rounded-xl border border-gray-300 active"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-600 text-lg font-normal leading-relaxed accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500 always-open"
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
                      className="accordion-content w-full px-0 overflow-hidden active"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
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
                    className="accordion sm:p-6 p-4 rounded-xl border border-gray-300"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-600 text-lg font-normal leading-relaxed accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
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
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
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
                    className="accordion sm:p-6 p-4 rounded-xl border border-gray-300"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-600 text-lg font-normal leading-relaxed accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
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
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
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
                    className="accordion sm:p-6 p-4 rounded-xl border border-gray-300"
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-600 text-lg font-normal leading-relaxed accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
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
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
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
                    className="accordion sm:p-6 p-4 rounded-xl border border-gray-300"
                    id="basic-heading-five-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-600 text-lg font-normal leading-relaxed accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
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
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-five-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
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
                className="tabcontent "
              >
                <div
                  className="accordion-group flex flex-col gap-6 lg:h-full"
                  data-accordion="default-accordion"
                >
                  <div
                    className="accordion sm:p-6 p-4 rounded-xl border border-gray-300"
                    id="basic-heading-two-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-600 text-lg font-normal leading-relaxed accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
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
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-two-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
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
                    className="accordion sm:p-6 p-4 rounded-xl border border-gray-300 active"
                    id="basic-heading-one-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-600 text-lg font-normal leading-relaxed accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500 always-open"
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
                      className="accordion-content w-full px-0 overflow-hidden active"
                      aria-labelledby="basic-heading-one-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
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
                    className="accordion sm:p-6 p-4 rounded-xl border border-gray-300"
                    id="basic-heading-three-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-600 text-lg font-normal leading-relaxed accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
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
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-three-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
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
                    className="accordion sm:p-6 p-4 rounded-xl border border-gray-300"
                    id="basic-heading-four-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-600 text-lg font-normal leading-relaxed accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
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
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-four-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
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
                    className="accordion sm:p-6 p-4 rounded-xl border border-gray-300"
                    id="basic-heading-five-with-arrow-always-open"
                  >
                    <button
                      className="accordion-toggle group inline-flex gap-2 items-center justify-between text-gray-600 text-lg font-normal leading-relaxed accordion-active:text-indigo-600 accordion-active:font-medium w-full transition duration-500"
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
                      className="accordion-content w-full px-0 overflow-hidden"
                      aria-labelledby="basic-heading-five-with-arrow-always-open"
                    >
                      <p className="text-base font-normal text-gray-900 pt-3">
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
  );
}
