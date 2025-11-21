export default function TailwindFaqSectionWithBorderLayout() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-manrope text-center text-4xl leading-[3.25rem] font-bold text-gray-900">
            Frequently asked questions
          </h2>
        </div>
        <div className="accordion-group" data-accordion="default-accordion">
          <div
            className="accordion accordion-active:bg-indigo-50 accordion-active:border-indigo-600 active mb-8 rounded-xl border border-solid border-gray-300 p-4 transition duration-500 lg:p-4"
            id="basic-heading-one-with-icon"
          >
            <button
              className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-lg leading-8 font-normal text-gray-900 transition duration-500 hover:text-indigo-600"
              aria-controls="basic-collapse-one-with-icon"
            >
              <h5>How can I reset my password?</h5>
              {/* SVG removed */}
              {/* SVG removed */}
            </button>
            <div
              id="basic-collapse-one-with-icon"
              className="accordion-content w-full overflow-hidden pr-4"
              aria-labelledby="basic-heading-one"
            >
              <p className="text-base leading-6 font-normal text-gray-900">
                To create an account, find the 'Sign up' or 'Create account'
                button, fill out the registration form with your personal
                information, and click 'Create account' or 'Sign up.' Verify
                your email address if needed, and then log in to start using the
                platform.
              </p>
            </div>
          </div>
          <div
            className="accordion accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 rounded-xl border border-solid border-gray-300 p-4 lg:p-4"
            id="basic-heading-two-with-icon"
          >
            <button
              className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-lg leading-8 font-normal text-gray-900 transition duration-500 hover:text-indigo-600"
              aria-controls="basic-collapse-two-with-icon"
            >
              <h5>How do I update my billing information?</h5>
              {/* SVG removed */}
              {/* SVG removed */}
            </button>
            <div
              id="basic-collapse-two-with-icon"
              className="accordion-content w-full overflow-hidden pr-4"
              aria-labelledby="basic-heading-two"
            >
              <p className="text-base leading-6 font-normal text-gray-900">
                To create an account, find the 'Sign up' or 'Create account'
                button, fill out the registration form with your personal
                information, and click 'Create account' or 'Sign up.' Verify
                your email address if needed, and then log in to start using the
                platform.
              </p>
            </div>
          </div>
          <div
            className="accordion accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 rounded-xl border border-solid border-gray-300 p-4 lg:p-4"
            id="basic-heading-three-with-icon"
          >
            <button
              className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-lg leading-8 font-normal text-gray-900 transition duration-500 hover:text-indigo-600"
              aria-controls="basic-collapse-three-with-icon"
            >
              <h5>How can I contact customer support?</h5>
              {/* SVG removed */}
              {/* SVG removed */}
            </button>
            <div
              id="basic-collapse-three-with-icon"
              className="accordion-content w-full overflow-hidden pr-4"
              aria-labelledby="basic-heading-three"
            >
              <p className="text-base leading-6 font-normal text-gray-900">
                To create an account, find the 'Sign up' or 'Create account'
                button, fill out the registration form with your personal
                information, and click 'Create account' or 'Sign up.' Verify
                your email address if needed, and then log in to start using the
                platform.
              </p>
            </div>
          </div>
          <div
            className="accordion accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 rounded-xl border border-solid border-gray-300 p-4 lg:p-4"
            id="basic-heading-three-with-icon"
          >
            <button
              className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-lg leading-8 font-normal text-gray-900 transition duration-500 hover:text-indigo-600"
              aria-controls="basic-collapse-three-with-icon"
            >
              <h5>How do I delete my account?</h5>
              {/* SVG removed */}
              {/* SVG removed */}
            </button>
            <div
              id="basic-collapse-three-with-icon"
              className="accordion-content w-full overflow-hidden pr-4"
              aria-labelledby="basic-heading-three"
            >
              <p className="text-base leading-6 font-normal text-gray-900">
                To create an account, find the 'Sign up' or 'Create account'
                button, fill out the registration form with your personal
                information, and click 'Create account' or 'Sign up.' Verify
                your email address if needed, and then log in to start using the
                platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
