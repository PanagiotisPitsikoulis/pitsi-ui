export default function TailwindFaqSectionWithImageAndBorderLayout() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center gap-12 lg:flex-row lg:justify-between xl:gap-24">
          <div className="w-full lg:w-2/5">
            <div className="mb-16">
              <h6 className="mb-1 text-center text-base font-medium text-indigo-600 uppercase lg:text-left">
                MOST ASKED QUESTIONS
              </h6>
              <h2 className="mb-4 text-center text-4xl leading-[3.25rem] font-bold text-gray-900 lg:text-left">
                FAQs
              </h2>
              <p className="mb-7 text-center text-gray-500 lg:text-left">
                Trusted In More Than 100 Countries And 5 Million Customers.
                Transact Easily And Quickly With Just One Click.
              </p>
              <img
                src="https://pagedone.io/asset/uploads/1696231386.png"
                alt="Faq tailwind section"
                className="mx-auto rounded-2xl object-cover lg:mx-0"
              />
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <div className="accordion-group" data-accordion="default-accordion">
              <div
                className="accordion accordion-active:bg-indigo-50 accordion-active:border-indigo-600 active mb-8 rounded-xl border border-solid border-gray-300 p-4 transition duration-500 lg:p-4"
                id="basic-heading-one-with-icon"
              >
                <button
                  className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-base leading-8 font-normal text-gray-900 transition duration-500 hover:text-indigo-600"
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
                  <p className="text-base leading-6 text-gray-900">
                    To create an account, find the 'Sign up' or 'Create account'
                    button, fill out the registration form with your personal
                    information, and click 'Create account' or 'Sign up.' Verify
                    your email address if needed, and then log in to start using
                    the platform.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 rounded-xl border border-solid border-gray-300 p-4 lg:p-4"
                id="basic-heading-two-with-icon"
              >
                <button
                  className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-base leading-8 font-normal text-gray-900 transition duration-500 hover:text-indigo-600"
                  aria-controls="basic-collapse-two-with-icon"
                >
                  <h5>Which is safe investment</h5>
                  {/* SVG removed */}
                  {/* SVG removed */}
                </button>
                <div
                  id="basic-collapse-two-with-icon"
                  className="accordion-content w-full overflow-hidden pr-4"
                  aria-labelledby="basic-heading-two"
                >
                  <p className="text-base leading-6 text-gray-900">
                    To create an account, find the 'Sign up' or 'Create account'
                    button, fill out the registration form with your personal
                    information, and click 'Create account' or 'Sign up.' Verify
                    your email address if needed, and then log in to start using
                    the platform.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 rounded-xl border border-solid border-gray-300 p-4 lg:p-4"
                id="basic-heading-three-with-icon"
              >
                <button
                  className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-base leading-8 font-normal text-gray-900 transition duration-500 hover:text-indigo-600"
                  aria-controls="basic-collapse-three-with-icon"
                >
                  <h5>Which is better short term or long term</h5>
                  {/* SVG removed */}
                  {/* SVG removed */}
                </button>
                <div
                  id="basic-collapse-three-with-icon"
                  className="accordion-content w-full overflow-hidden pr-4"
                  aria-labelledby="basic-heading-three"
                >
                  <p className="text-base leading-6 text-gray-900">
                    To create an account, find the 'Sign up' or 'Create account'
                    button, fill out the registration form with your personal
                    information, and click 'Create account' or 'Sign up.' Verify
                    your email address if needed, and then log in to start using
                    the platform.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 rounded-xl border border-solid border-gray-300 p-4 lg:p-4"
                id="basic-heading-four-with-icon"
              >
                <button
                  className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-base leading-8 font-normal text-gray-900 transition duration-500 hover:text-indigo-600"
                  aria-controls="basic-collapse-four-with-icon"
                >
                  <h5>How many percent return in long term</h5>
                  {/* SVG removed */}
                  {/* SVG removed */}
                </button>
                <div
                  id="basic-collapse-four-with-icon"
                  className="accordion-content w-full overflow-hidden pr-4"
                  aria-labelledby="basic-heading-four"
                >
                  <p className="text-base leading-6 text-gray-900">
                    To create an account, find the 'Sign up' or 'Create account'
                    button, fill out the registration form with your personal
                    information, and click 'Create account' or 'Sign up.' Verify
                    your email address if needed, and then log in to start using
                    the platform.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 rounded-xl border border-solid border-gray-300 p-4 lg:p-4"
                id="basic-heading-five-with-icon"
              >
                <button
                  className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-base leading-8 font-normal text-gray-900 transition duration-500 hover:text-indigo-600"
                  aria-controls="basic-collapse-five-with-icon"
                >
                  <h5>How many percent return in short term</h5>
                  {/* SVG removed */}
                  {/* SVG removed */}
                </button>
                <div
                  id="basic-collapse-five-with-icon"
                  className="accordion-content w-full overflow-hidden pr-4"
                  aria-labelledby="basic-heading-five"
                >
                  <p className="text-base leading-6 text-gray-900">
                    To create an account, find the 'Sign up' or 'Create account'
                    button, fill out the registration form with your personal
                    information, and click 'Create account' or 'Sign up.' Verify
                    your email address if needed, and then log in to start using
                    the platform.
                  </p>
                </div>
              </div>
              <div
                className="accordion accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 rounded-xl border border-solid border-gray-300 p-4 lg:p-4"
                id="basic-heading-six-with-icon"
              >
                <button
                  className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-left text-base leading-8 font-normal text-gray-900 transition duration-500 hover:text-indigo-600"
                  aria-controls="basic-collapse-six-with-icon"
                >
                  <h5>How do I delete my account?</h5>
                  {/* SVG removed */}
                  {/* SVG removed */}
                </button>
                <div
                  id="basic-collapse-six-with-icon"
                  className="accordion-content w-full overflow-hidden pr-4"
                  aria-labelledby="basic-heading-six"
                >
                  <p className="text-base leading-6 text-gray-900">
                    To create an account, find the 'Sign up' or 'Create account'
                    button, fill out the registration form with your personal
                    information, and click 'Create account' or 'Sign up.' Verify
                    your email address if needed, and then log in to start using
                    the platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
