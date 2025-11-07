export default function FaqSectionWithCtaButton() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center gap-6 lg:flex-row lg:justify-between xl:gap-12">
          <div className="w-full lg:w-2/5">
            <div className="mb-16">
              <h2 className="mb-8 text-center text-4xl leading-[3.25rem] font-bold text-gray-900 lg:text-left">
                Frequently asked questions
              </h2>
              <p className="mb-12 text-center text-lg text-gray-500 lg:mb-24 lg:text-left">
                Trusted in more than 100 countries and 5 million customers.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="rounded-full bg-indigo-600 px-7 py-3 font-semibold text-white shadow-sm transition-all duration-500 hover:bg-indigo-700">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="w-full max-lg:mx-auto max-lg:max-w-3xl lg:w-3/5">
            <div className="accordion-group" data-accordion="default-accordion">
              <div
                className="accordion active border-b border-solid border-gray-200 pb-6"
                id="basic-heading-one-default"
              >
                <button
                  className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between text-xl leading-8 font-normal text-gray-600 transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                  aria-controls="basic-collapse-one-default"
                >
                  <h5>How to create an account?</h5>
                  {/* SVG removed */}
                </button>
                <div
                  id="basic-collapse-one-default"
                  className="accordion-content w-full overflow-hidden px-0 pr-4"
                  aria-labelledby="basic-heading-one-default"
                >
                  <p className="text-base leading-6 font-normal text-gray-600">
                    To create an account, find the 'Sign up' or 'Create account'
                    button, fill out the registration form with your personal
                    information, and click 'Create account' or 'Sign up.' Verify
                    your email address if needed, and then log in to start using
                    the platform.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-solid border-gray-200 py-6"
                id="basic-heading-two-default"
              >
                <button
                  className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-xl leading-8 font-normal text-gray-600 transition duration-500 hover:text-indigo-600"
                  aria-controls="basic-collapse-two-default"
                >
                  <h5>What is the payment process?</h5>
                  {/* SVG removed */}
                </button>
                <div
                  id="basic-collapse-two-default"
                  className="accordion-content w-full overflow-hidden px-0 pr-4"
                  aria-labelledby="basic-heading-two-default"
                >
                  <p className="text-base leading-6 font-normal text-gray-500">
                    Our focus on providing robust and user-friendly content
                    management capabilities ensures that you can manage your
                    content with confidence, and achieve your content marketing
                    goals with ease.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-solid border-gray-200 py-6"
                id="basic-heading-three-default"
              >
                <button
                  className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-xl leading-8 font-normal text-gray-600 transition duration-500 hover:text-indigo-600"
                  aria-controls="basic-collapse-three-default"
                >
                  <h5>How can I reset my password?</h5>
                  {/* SVG removed */}
                </button>
                <div
                  id="basic-collapse-three-default"
                  className="accordion-content w-full overflow-hidden px-0 pr-4"
                  aria-labelledby="basic-heading-three-default"
                >
                  <p className="text-base leading-6 font-normal text-gray-500">
                    Our focus on providing robust and user-friendly content
                    management capabilities ensures that you can manage your
                    content with confidence, and achieve your content marketing
                    goals with ease.
                  </p>
                </div>
              </div>
              <div className="accordion pt-6" id="basic-heading-three-default">
                <button
                  className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-xl leading-8 font-normal text-gray-600 transition duration-500 hover:text-indigo-600"
                  aria-controls="basic-collapse-three-default"
                >
                  <h5>Have any trust issue?</h5>
                  {/* SVG removed */}
                </button>
                <div
                  id="basic-collapse-three-default"
                  className="accordion-content w-full overflow-hidden px-0 pr-4"
                  aria-labelledby="basic-heading-three-default"
                >
                  <p className="text-base leading-6 font-normal text-gray-500">
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
  )
}
