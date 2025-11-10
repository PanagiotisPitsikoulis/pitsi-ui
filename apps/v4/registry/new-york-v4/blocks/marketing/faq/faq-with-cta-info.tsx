export default function FaqWithCtaInfo() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-start justify-start gap-y-10 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-0 xl:gap-x-14">
          <div className="col-span-12 mx-auto inline-flex w-fit flex-col items-start justify-start gap-12 lg:col-span-5 xl:col-span-4">
            <div className="flex w-full flex-col items-start justify-start gap-3.5">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 sm:text-start">
                Frequently Asked Question
              </h2>
              <h5 className="leading-relaxed0 text-center text-lg font-normal text-gray-500 sm:text-start">
                Trusted in more than 100 countries and 5 million customers.
              </h5>
            </div>
            <div className="flex flex-col items-start justify-start gap-10 rounded-xl border border-gray-200 bg-gray-100 p-5">
              <div className="flex flex-col items-start justify-start gap-2.5">
                <div className="inline-flex items-center justify-start gap-2">
                  <div className="relative h-6 w-6">{/* SVG removed */}</div>
                  <h4 className="text-xl leading-loose font-semibold text-gray-900">
                    You have different questions?
                  </h4>
                </div>
                <p className="text-base leading-relaxed font-normal text-gray-900">
                  Our team will answer all your questions. we ensure a quick
                  response.
                </p>
              </div>
              <button className="transition-700 flex w-full items-center justify-center rounded-full bg-indigo-600 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
                {/* SVG removed */}
                <span className="px-1.5 py-px text-sm leading-snug font-medium text-white">
                  Contact Our Team
                </span>
              </button>
            </div>
          </div>
          <div
            className="accordion-group col-span-12 flex h-full flex-col gap-6 lg:col-span-7 xl:col-span-8"
            data-accordion="default-accordion"
          >
            <div
              className="accordion active border-b-2 border-gray-100 pb-6"
              id="basic-heading-one-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium always-open inline-flex w-full items-center justify-between text-xl leading-8 font-normal text-gray-900 transition duration-500 hover:text-indigo-600"
                aria-controls="basic-collapse-one-with-arrow-always-open"
              >
                <h5 className="text-left">How to create an account? </h5>
                <a className="pointer-events-none flex h-[18px] w-[18px] items-center justify-center rounded-full border border-black p-1">
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
              id="basic-heading-two-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between text-xl leading-8 font-normal text-gray-900 transition duration-500 hover:text-indigo-600"
                aria-controls="basic-collapse-two-with-arrow-always-open"
              >
                <h5 className="text-left">What is the payment process?</h5>
                <a className="pointer-events-none flex h-[18px] w-[18px] items-center justify-center rounded-full border border-black p-1">
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
                className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between text-xl leading-8 font-normal text-gray-900 transition duration-500 hover:text-indigo-600"
                aria-controls="basic-collapse-three-with-arrow-always-open"
              >
                <h5 className="text-left">How can I reset my password?</h5>
                <a className="pointer-events-none flex h-[18px] w-[18px] items-center justify-center rounded-full border border-black p-1">
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
                className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between text-xl leading-8 font-normal text-gray-900 transition duration-500 hover:text-indigo-600"
                aria-controls="basic-collapse-four-with-arrow-always-open"
              >
                <h5 className="text-left">Have any trust issue?</h5>
                <a className="pointer-events-none flex h-[18px] w-[18px] items-center justify-center rounded-full border border-black p-1">
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
  )
}
