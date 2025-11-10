export default function FaqIllustrationWithQuestions() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="flex w-full flex-col items-center justify-start gap-2">
            <span className="text-center text-lg leading-relaxed font-medium text-indigo-600">
              FAQs
            </span>
            <h4 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Frequently asked questions
            </h4>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-start gap-y-10 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0 xl:gap-x-12">
            <div className="col-span-12 flex w-full items-center lg:col-span-5">
              <img
                src="https://pagedone.io/asset/uploads/1723447740.png"
                alt="faq image"
                className="h-auto w-full object-cover"
              />
            </div>
            <div
              className="accordion-group col-span-12 flex h-full w-full flex-col gap-8 lg:col-span-7"
              data-accordion="default-accordion"
            >
              <div
                className="accordion active flex flex-col border-b border-gray-200 bg-white pb-8"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 always-open inline-flex w-full items-center justify-between gap-1 text-xl leading-8 font-normal text-gray-600 transition duration-500"
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
                  className="accordion-content active w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-600">
                    To create an account, find the "Sign up" or "Create account"
                    button, fill out the registration form with your personal
                    information, and click "Create account" or "Sign up." Verify
                    your email address if needed, and then log in to start using
                    the platform.
                  </p>
                </div>
              </div>
              <div
                className="accordion flex flex-col border-b border-gray-200 bg-white pb-8"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between gap-1 text-xl leading-8 font-normal text-gray-600 transition duration-500"
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
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-600">
                    To create an account, find the "Sign up" or "Create account"
                    button, fill out the registration form with your personal
                    information, and click "Create account" or "Sign up." Verify
                    your email address if needed, and then log in to start using
                    the platform.
                  </p>
                </div>
              </div>
              <div
                className="accordion flex flex-col border-b border-gray-200 bg-white pb-8"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between gap-1 text-xl leading-8 font-normal text-gray-600 transition duration-500"
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
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-600">
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
                  className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between gap-1 text-xl leading-8 font-normal text-gray-600 transition duration-500"
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
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-600">
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
  )
}
