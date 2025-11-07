export default function FaqSectionWithCtaButton() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center gap-6 xl:gap-12 lg:flex-row lg:justify-between">
          <div className="w-full lg:w-2/5">
            <div className="mb-16">
              <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-8 lg:text-left">
                Frequently asked questions
              </h2>
              <p className="text-gray-500 text-lg text-center mb-12 lg:mb-24 lg:text-left">
                Trusted in more than 100 countries and 5 million customers.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="py-3 px-7 bg-indigo-600 shadow-sm rounded-full transition-all duration-500 text-white font-semibold hover:bg-indigo-700">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/5 max-lg:max-w-3xl max-lg:mx-auto">
            <div className="accordion-group" data-accordion="default-accordion">
              <div
                className="accordion pb-6 border-b border-solid border-gray-200 active"
                id="basic-heading-one-default"
              >
                <button
                  className="accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium active:text-indigo-600"
                  aria-controls="basic-collapse-one-default"
                >
                  <h5>How to create an account?</h5>
                  {/* SVG removed */}
                </button>
                <div
                  id="basic-collapse-one-default"
                  className="accordion-content w-full px-0 overflow-hidden pr-4"
                  aria-labelledby="basic-heading-one-default"
                >
                  <p className="text-base font-normal text-gray-600 leading-6">
                    To create an account, find the 'Sign up' or 'Create account'
                    button, fill out the registration form with your personal
                    information, and click 'Create account' or 'Sign up.' Verify
                    your email address if needed, and then log in to start using
                    the platform.
                  </p>
                </div>
              </div>
              <div
                className="accordion py-6 border-b border-solid border-gray-200"
                id="basic-heading-two-default"
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                  aria-controls="basic-collapse-two-default"
                >
                  <h5>What is the payment process?</h5>
                  {/* SVG removed */}
                </button>
                <div
                  id="basic-collapse-two-default"
                  className="accordion-content w-full px-0 overflow-hidden pr-4"
                  aria-labelledby="basic-heading-two-default"
                >
                  <p className="text-base font-normal text-gray-500 leading-6">
                    Our focus on providing robust and user-friendly content
                    management capabilities ensures that you can manage your
                    content with confidence, and achieve your content marketing
                    goals with ease.
                  </p>
                </div>
              </div>
              <div
                className="accordion py-6 border-b border-solid border-gray-200"
                id="basic-heading-three-default"
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                  aria-controls="basic-collapse-three-default"
                >
                  <h5>How can I reset my password?</h5>
                  {/* SVG removed */}
                </button>
                <div
                  id="basic-collapse-three-default"
                  className="accordion-content w-full px-0 overflow-hidden pr-4"
                  aria-labelledby="basic-heading-three-default"
                >
                  <p className="text-base font-normal text-gray-500 leading-6">
                    Our focus on providing robust and user-friendly content
                    management capabilities ensures that you can manage your
                    content with confidence, and achieve your content marketing
                    goals with ease.
                  </p>
                </div>
              </div>
              <div className="accordion pt-6" id="basic-heading-three-default">
                <button
                  className="accordion-toggle group inline-flex items-center text-xl font-normal justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                  aria-controls="basic-collapse-three-default"
                >
                  <h5>Have any trust issue?</h5>
                  {/* SVG removed */}
                </button>
                <div
                  id="basic-collapse-three-default"
                  className="accordion-content w-full px-0 overflow-hidden pr-4"
                  aria-labelledby="basic-heading-three-default"
                >
                  <p className="text-base font-normal text-gray-500 leading-6">
                    Our focus on providing robust and user-friendly content
                    management capabilities ensures that you can manage your
                    content with confidence, and achieve your content marketing
                    goals with ease.
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
