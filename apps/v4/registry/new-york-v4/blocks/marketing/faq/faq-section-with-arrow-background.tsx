export default function FaqSectionWithArrowBackground() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col justify-center lg:flex-row lg:justify-between">
          <h2 className="font-manrope mb-8 text-center text-4xl leading-[3.25rem] font-bold text-gray-900 capitalize lg:mb-0">
            Frequently asked questions
          </h2>
          <button className="rounded-full bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-sm transition-all duration-500 hover:bg-indigo-700">
            Contact us
          </button>
        </div>
        <div
          className="accordion-group columns-1 gap-8 lg:columns-2"
          data-accordion="default-accordion"
        >
          <div
            className="group accordion active mb-8 rounded-xl border border-solid border-gray-300 px-6 py-5 transition-all duration-500"
            id="basic-heading-one-with-arrow"
          >
            <button
              className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-lg leading-8 font-normal text-gray-900 transition duration-500 group-hover:text-indigo-600"
              aria-controls="basic-collapse-one-with-arrow"
            >
              <h5>How can I reset my password?</h5>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 group-hover:bg-indigo-50">
                {/* SVG removed */}
              </div>
            </button>
            <div
              id="basic-collapse-one-with-arrow"
              className="accordion-content w-full overflow-hidden px-0 transition-[height] duration-300"
              aria-labelledby="basic-heading-one-with-arrow"
            >
              <p className="text-sm leading-6 text-gray-600">
                To reset your password, go to the login page and click on the
                "Forgot password" link. Enter the email address associated with
                your account, and you will receive an email with instructions on
                how to reset your password. Follow the instructions in the email
                to create a new password.
              </p>
            </div>
          </div>
          <div
            className="group accordion mb-8 rounded-xl border border-solid border-gray-300 px-6 py-5 transition-all duration-500"
            id="basic-heading-two-with-arrow"
          >
            <button
              className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-lg leading-8 font-normal text-gray-900 transition duration-500 group-hover:text-indigo-600"
              aria-controls="basic-collapse-two-with-arrow"
            >
              <h5>How can I contact customer support?</h5>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 group-hover:bg-indigo-50">
                {/* SVG removed */}
              </div>
            </button>
            <div
              id="basic-collapse-two-with-arrow"
              className="accordion-content w-full overflow-hidden px-0 transition-[height] duration-300"
              aria-labelledby="basic-heading-two-with-arrow"
            >
              <p className="text-sm leading-6 text-gray-600">
                To reset your password, go to the login page and click on the
                "Forgot password" link. Enter the email address associated with
                your account, and you will receive an email with instructions on
                how to reset your password. Follow the instructions in the email
                to create a new password.
              </p>
            </div>
          </div>
          <div
            className="group accordion mb-8 rounded-xl border border-solid border-gray-300 px-6 py-5 transition-all duration-500"
            id="basic-heading-three-with-arrow"
          >
            <button
              className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-lg leading-8 font-normal text-gray-900 transition duration-500 group-hover:text-indigo-600"
              aria-controls="basic-collapse-three-with-arrow"
            >
              <h5>How do I update my billing information?</h5>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 group-hover:bg-indigo-50">
                {/* SVG removed */}
              </div>
            </button>
            <div
              id="basic-collapse-three-with-arrow"
              className="accordion-content w-full overflow-hidden px-0 transition-[height] duration-300"
              aria-labelledby="basic-heading-three-with-arrow"
            >
              <p className="text-sm leading-6 text-gray-600">
                To reset your password, go to the login page and click on the
                "Forgot password" link. Enter the email address associated with
                your account, and you will receive an email with instructions on
                how to reset your password. Follow the instructions in the email
                to create a new password.
              </p>
            </div>
          </div>
          <div
            className="group accordion mb-8 rounded-xl border border-solid border-gray-300 px-6 py-5 transition-all duration-500"
            id="basic-heading-four-with-arrow"
          >
            <button
              className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-lg leading-8 font-normal text-gray-900 transition duration-500 group-hover:text-indigo-600"
              aria-controls="basic-collapse-four-with-arrow"
            >
              <h5>How do I update my profile information?</h5>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 group-hover:bg-indigo-50">
                {/* SVG removed */}
              </div>
            </button>
            <div
              id="basic-collapse-four-with-arrow"
              className="accordion-content w-full overflow-hidden px-0 transition-[height] duration-300"
              aria-labelledby="basic-heading-four-with-arrow"
            >
              <p className="text-sm leading-6 text-gray-600">
                To reset your password, go to the login page and click on the
                "Forgot password" link. Enter the email address associated with
                your account, and you will receive an email with instructions on
                how to reset your password. Follow the instructions in the email
                to create a new password.
              </p>
            </div>
          </div>
          <div
            className="group accordion mb-8 rounded-xl border border-solid border-gray-300 px-6 py-5 transition-all duration-500"
            id="basic-heading-five-with-arrow"
          >
            <button
              className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-lg leading-8 font-normal text-gray-900 transition duration-500 group-hover:text-indigo-600"
              aria-controls="basic-collapse-five-with-arrow"
            >
              <h5>How do I delete my account?</h5>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 group-hover:bg-indigo-50">
                {/* SVG removed */}
              </div>
            </button>
            <div
              id="basic-collapse-five-with-arrow"
              className="accordion-content w-full overflow-hidden px-0 transition-[height] duration-300"
              aria-labelledby="basic-heading-five-with-arrow"
            >
              <p className="text-sm leading-6 text-gray-600">
                To reset your password, go to the login page and click on the
                "Forgot password" link. Enter the email address associated with
                your account, and you will receive an email with instructions on
                how to reset your password. Follow the instructions in the email
                to create a new password.
              </p>
            </div>
          </div>
          <div
            className="group accordion mb-8 rounded-xl border border-solid border-gray-300 px-6 py-5 transition-all duration-500"
            id="basic-heading-six-with-arrow"
          >
            <button
              className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-lg leading-8 font-normal text-gray-900 transition duration-500 group-hover:text-indigo-600"
              aria-controls="basic-collapse-six-with-arrow"
            >
              <h5>How do I change my email address?</h5>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 group-hover:bg-indigo-50">
                {/* SVG removed */}
              </div>
            </button>
            <div
              id="basic-collapse-six-with-arrow"
              className="accordion-content w-full overflow-hidden px-0 transition-[height] duration-300"
              aria-labelledby="basic-heading-six-with-arrow"
            >
              <p className="text-sm leading-6 text-gray-600">
                To reset your password, go to the login page and click on the
                "Forgot password" link. Enter the email address associated with
                your account, and you will receive an email with instructions on
                how to reset your password. Follow the instructions in the email
                to create a new password.
              </p>
            </div>
          </div>
          <div
            className="group accordion mb-8 rounded-xl border border-solid border-gray-300 px-6 py-5 transition-all duration-500"
            id="basic-heading-seven-with-arrow"
          >
            <button
              className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-lg leading-8 font-normal text-gray-900 transition duration-500 group-hover:text-indigo-600"
              aria-controls="basic-collapse-seven-with-arrow"
            >
              <h5>How do I join a group or community?</h5>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 group-hover:bg-indigo-50">
                {/* SVG removed */}
              </div>
            </button>
            <div
              id="basic-collapse-seven-with-arrow"
              className="accordion-content w-full overflow-hidden px-0 transition-[height] duration-300"
              aria-labelledby="basic-heading-seven-with-arrow"
            >
              <p className="text-sm leading-6 text-gray-600">
                To reset your password, go to the login page and click on the
                "Forgot password" link. Enter the email address associated with
                your account, and you will receive an email with instructions on
                how to reset your password. Follow the instructions in the email
                to create a new password.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
