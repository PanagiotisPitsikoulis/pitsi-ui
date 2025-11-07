export default function TailwindFaqSectionWithImageAndBorderLayout() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center gap-12 xl:gap-24 lg:flex-row lg:justify-between">
          <div className="w-full lg:w-2/5">
            <div className="mb-16">
              <h6 className="text-base text-center font-medium text-indigo-600 mb-1 uppercase lg:text-left">
                MOST ASKED QUESTIONS
              </h6>
              <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-4 lg:text-left">
                FAQs
              </h2>
              <p className="text-gray-500 text-center mb-7 lg:text-left">
                Trusted In More Than 100 Countries And 5 Million Customers.
                Transact Easily And Quickly With Just One Click.
              </p>
              <img
                src="https://pagedone.io/asset/uploads/1696231386.png"
                alt="Faq tailwind section"
                className="mx-auto lg:mx-0 rounded-2xl object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <div className="accordion-group" data-accordion="default-accordion">
              <div
                className="accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4 active"
                id="basic-heading-one-with-icon"
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-left text-base font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
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
                  <p className="text-base text-gray-900 leading-6">
                    To create an account, find the 'Sign up' or 'Create account'
                    button, fill out the registration form with your personal
                    information, and click 'Create account' or 'Sign up.' Verify
                    your email address if needed, and then log in to start using
                    the platform.
                  </p>
                </div>
              </div>
              <div
                className="accordion border border-solid border-gray-300 p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
                id="basic-heading-two-with-icon"
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-left text-base leading-8 font-normal text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
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
                  <p className="text-base text-gray-900 leading-6">
                    To create an account, find the 'Sign up' or 'Create account'
                    button, fill out the registration form with your personal
                    information, and click 'Create account' or 'Sign up.' Verify
                    your email address if needed, and then log in to start using
                    the platform.
                  </p>
                </div>
              </div>
              <div
                className="accordion border border-solid border-gray-300 p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
                id="basic-heading-three-with-icon"
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-left text-base leading-8 font-normal text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
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
                  <p className="text-base text-gray-900 leading-6">
                    To create an account, find the 'Sign up' or 'Create account'
                    button, fill out the registration form with your personal
                    information, and click 'Create account' or 'Sign up.' Verify
                    your email address if needed, and then log in to start using
                    the platform.
                  </p>
                </div>
              </div>
              <div
                className="accordion border border-solid border-gray-300 p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
                id="basic-heading-four-with-icon"
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-left text-base font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
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
                  <p className="text-base text-gray-900 leading-6">
                    To create an account, find the 'Sign up' or 'Create account'
                    button, fill out the registration form with your personal
                    information, and click 'Create account' or 'Sign up.' Verify
                    your email address if needed, and then log in to start using
                    the platform.
                  </p>
                </div>
              </div>
              <div
                className="accordion border border-solid border-gray-300 p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
                id="basic-heading-five-with-icon"
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-left text-base leading-8 font-normal text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
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
                  <p className="text-base text-gray-900 leading-6">
                    To create an account, find the 'Sign up' or 'Create account'
                    button, fill out the registration form with your personal
                    information, and click 'Create account' or 'Sign up.' Verify
                    your email address if needed, and then log in to start using
                    the platform.
                  </p>
                </div>
              </div>
              <div
                className="accordion border border-solid border-gray-300 p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
                id="basic-heading-six-with-icon"
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-left text-base leading-8 font-normal text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
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
                  <p className="text-base text-gray-900 leading-6">
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
  );
}
