export default function FaqIllustrationWithQuestions() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-2 flex">
            <span className="text-center text-indigo-600 text-lg font-medium leading-relaxed">
              FAQs
            </span>
            <h4 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Frequently asked questions
            </h4>
          </div>
          <div className="w-full justify-start items-center xl:gap-x-12 lg:gap-x-10 lg:gap-y-0 gap-y-10 grid lg:grid-cols-12 grid-cols-1">
            <div className="lg:col-span-5 col-span-12 w-full flex items-center">
              <img
                src="https://pagedone.io/asset/uploads/1723447740.png"
                alt="faq image"
                className="w-full h-auto object-cover"
              />
            </div>
            <div
              className="accordion-group flex flex-col gap-8 h-full w-full lg:col-span-7 col-span-12"
              data-accordion="default-accordion"
            >
              <div
                className="accordion flex flex-col border-b border-gray-200 pb-8 bg-white active"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-1 items-center justify-between text-gray-600 text-xl font-normal leading-8 w-full transition duration-500 accordion-active:font-medium accordion-active:text-indigo-600 always-open"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-left">How to create an account?</h5>
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
                  <p className="text-base font-normal text-gray-600 pt-3">
                    To create an account, find the "Sign up" or "Create account"
                    button, fill out the registration form with your personal
                    information, and click "Create account" or "Sign up." Verify
                    your email address if needed, and then log in to start using
                    the platform.
                  </p>
                </div>
              </div>
              <div
                className="accordion flex flex-col border-b border-gray-200 pb-8 bg-white"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-1 items-center justify-between text-gray-600 text-xl font-normal leading-8 w-full transition duration-500 accordion-active:font-medium accordion-active:text-indigo-600"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-left">Have any trust issue?</h5>
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
                  <p className="text-base font-normal text-gray-600 pt-3">
                    To create an account, find the "Sign up" or "Create account"
                    button, fill out the registration form with your personal
                    information, and click "Create account" or "Sign up." Verify
                    your email address if needed, and then log in to start using
                    the platform.
                  </p>
                </div>
              </div>
              <div
                className="accordion flex flex-col border-b border-gray-200 pb-8 bg-white"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-1 items-center justify-between text-gray-600 text-xl font-normal leading-8 w-full transition duration-500 accordion-active:font-medium accordion-active:text-indigo-600"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-left">How can I reset my password?</h5>
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
                  <p className="text-base font-normal text-gray-600 pt-3">
                    To create an account, find the "Sign up" or "Create account"
                    button, fill out the registration form with your personal
                    information, and click "Create account" or "Sign up." Verify
                    your email address if needed, and then log in to start using
                    the platform.
                  </p>
                </div>
              </div>
              <div
                className="accordion flex flex-col bg-white"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-1 items-center justify-between text-gray-600 text-xl font-normal leading-8 w-full transition duration-500 accordion-active:font-medium accordion-active:text-indigo-600"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-left">What is the payment process?</h5>
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
                  <p className="text-base font-normal text-gray-600 pt-3">
                    To create an account, find the "Sign up" or "Create account"
                    button, fill out the registration form with your personal
                    information, and click "Create account" or "Sign up." Verify
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
