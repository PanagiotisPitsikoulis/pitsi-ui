export default function FaqWithCtaInfo() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full justify-start items-start xl:gap-x-14 lg:gap-x-12 lg:gap-y-0 gap-y-10 grid lg:grid-cols-12 grid-cols-1">
          <div className="xl:col-span-4 lg:col-span-5 col-span-12 w-fit mx-auto flex-col justify-start items-start gap-12 inline-flex">
            <div className="w-full flex-col justify-start items-start gap-3.5 flex">
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal sm:text-start text-center">
                Frequently Asked Question
              </h2>
              <h5 className="text-gray-500 text-lg font-normal leading-relaxed0 sm:text-start text-center">
                Trusted in more than 100 countries and 5 million customers.
              </h5>
            </div>
            <div className="p-5 bg-gray-100 rounded-xl border border-gray-200 flex-col justify-start items-start gap-10 flex">
              <div className="flex-col justify-start items-start gap-2.5 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="w-6 h-6 relative">{/* SVG removed */}</div>
                  <h4 className="text-gray-900 text-xl font-semibold leading-loose">
                    You have different questions?
                  </h4>
                </div>
                <p className="text-gray-900 text-base font-normal leading-relaxed">
                  Our team will answer all your questions. we ensure a quick
                  response.
                </p>
              </div>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-700 ease-in-out duration-700 rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                {/* SVG removed */}
                <span className="px-1.5 py-px text-white text-sm font-medium leading-snug">
                  Contact Our Team
                </span>
              </button>
            </div>
          </div>
          <div
            className="xl:col-span-8 lg:col-span-7 col-span-12 accordion-group flex flex-col gap-6 h-full"
            data-accordion="default-accordion"
          >
            <div
              className="accordion border-b-2 border-gray-100 pb-6 active"
              id="basic-heading-one-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:font-medium always-open"
                aria-controls="basic-collapse-one-with-arrow-always-open"
              >
                <h5 className="text-left">How to create an account? </h5>
                <a className="w-[18px] h-[18px] p-1 border border-black rounded-full flex items-center justify-center pointer-events-none">
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
                  To create an account, find the "Sign up" or "Create account"
                  button, fill out the registration form with your personal
                  information, and click "Create account" or "Sign up." Verify
                  your email address if needed, and then log in to start using
                  the platform.
                </p>
              </div>
            </div>
            <div
              className="accordion border-b-2 border-gray-100 pb-6 "
              id="basic-heading-two-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:font-medium"
                aria-controls="basic-collapse-two-with-arrow-always-open"
              >
                <h5 className="text-left">What is the payment process?</h5>
                <a className="w-[18px] h-[18px] p-1 border border-black rounded-full flex items-center justify-center pointer-events-none">
                  {/* SVG removed */}
                  {/* SVG removed */}
                </a>
              </button>
              <div
                id="basic-collapse-two-with-arrow-always-open"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-two-with-arrow-always-open"
              >
                <p className="text-base text-gray-900 font-normal pt-3">
                  To create an account, find the "Sign up" or "Create account"
                  button, fill out the registration form with your personal
                  information, and click "Create account" or "Sign up." Verify
                  your email address if needed, and then log in to start using
                  the platform.
                </p>
              </div>
            </div>
            <div
              className="accordion border-b-2 border-gray-100 pb-6"
              id="basic-heading-three-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:font-medium"
                aria-controls="basic-collapse-three-with-arrow-always-open"
              >
                <h5 className="text-left">How can I reset my password?</h5>
                <a className="w-[18px] h-[18px] p-1 border border-black rounded-full flex items-center justify-center pointer-events-none">
                  {/* SVG removed */}
                  {/* SVG removed */}
                </a>
              </button>
              <div
                id="basic-collapse-three-with-arrow-always-open"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-three-with-arrow-always-open"
              >
                <p className="text-base text-gray-900 font-normal pt-3">
                  To create an account, find the "Sign up" or "Create account"
                  button, fill out the registration form with your personal
                  information, and click "Create account" or "Sign up." Verify
                  your email address if needed, and then log in to start using
                  the platform.
                </p>
              </div>
            </div>
            <div
              className="accordion"
              id="basic-heading-four-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:font-medium"
                aria-controls="basic-collapse-four-with-arrow-always-open"
              >
                <h5 className="text-left">Have any trust issue?</h5>
                <a className="w-[18px] h-[18px] p-1 border border-black rounded-full flex items-center justify-center pointer-events-none">
                  {/* SVG removed */}
                  {/* SVG removed */}
                </a>
              </button>
              <div
                id="basic-collapse-four-with-arrow-always-open"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-four-with-arrow-always-open"
              >
                <p className="text-base text-gray-900 font-normal pt-3">
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
    </section>
  );
}
