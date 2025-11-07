export default function VerticalFaqListWithHeading() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-start justify-start gap-y-10 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-0">
          <div className="col-span-12 inline-flex w-full flex-col items-center justify-start gap-5 lg:col-span-5 lg:items-start lg:gap-10">
            <div className="flex w-full flex-col items-center justify-start gap-4 lg:items-start lg:gap-5">
              <span className="text-center text-base leading-relaxed font-medium text-indigo-600 lg:text-start">
                Most asked queries
              </span>
              <h2 className="font-manrope text-center text-4xl leading-tight font-semibold text-gray-900 sm:text-5xl sm:leading-tight lg:text-start">
                Frequently asked questions
              </h2>
              <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
                Trusted in more than 100 countries and 5 million customers.
              </p>
            </div>
            <button className="flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800">
              <span className="px-2 py-px text-lg leading-[30px] font-semibold text-white">
                Contact us
              </span>
            </button>
          </div>
          <div
            className="accordion-group col-span-12 flex h-full w-full flex-col gap-8 lg:col-span-7"
            data-accordion="default-accordion"
          >
            <h3 className="font-manrope text-center text-3xl leading-normal font-bold text-gray-900 sm:text-start">
              Privacy/Policy Questions
            </h3>
            <div className="accordion" id="basic-heading-one-default">
              <button
                className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-700 transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                aria-controls="basic-collapse-one-default"
              >
                <h5 className="text-left">How can I reset my password? </h5>
                <a className="max-h-6 max-w-6">{/* SVG removed */}</a>
              </button>
              <div
                id="basic-collapse-one-default"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-one-default"
              >
                <p className="pt-3 text-sm font-normal text-gray-500">
                  To create an account, find the 'Sign up' or 'Create account'
                  button, fill out the registration form with your personal
                  information, and click 'Create account' or 'Sign up.' Verify
                  your email address if needed, and then log in to start using
                  the platform.
                </p>
              </div>
            </div>
            <div
              className="accordion border-t border-solid border-gray-200 pt-6"
              id="basic-heading-two-default"
            >
              <button
                className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-700 transition duration-500 hover:text-indigo-600"
                aria-controls="basic-collapse-two-default"
              >
                <h5 className="text-left">
                  {" "}
                  How do I update my profile information?{" "}
                </h5>
                <a className="max-h-6 max-w-6">{/* SVG removed */}</a>
              </button>
              <div
                id="basic-collapse-two-default"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-two-default"
              >
                <p className="pt-3 text-sm font-normal text-gray-500">
                  Our focus on providing robust and user-friendly content
                  management capabilities ensures that you can manage your
                  content with confidence, and achieve your content marketing
                  goals with ease.
                </p>
              </div>
            </div>
            <div
              className="accordion border-t border-solid border-gray-200 pt-6"
              id="basic-heading-three-default"
            >
              <button
                className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-700 transition duration-500 hover:text-indigo-600"
                aria-controls="basic-collapse-three-default"
              >
                <h5 className="text-left">
                  {" "}
                  How do I update my billing information?{" "}
                </h5>
                <a className="max-h-6 max-w-6">{/* SVG removed */}</a>
              </button>
              <div
                id="basic-collapse-three-default"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-three-default"
              >
                <p className="pt-3 text-sm font-normal text-gray-500">
                  Our focus on providing robust and user-friendly content
                  management capabilities ensures that you can manage your
                  content with confidence, and achieve your content marketing
                  goals with ease.
                </p>
              </div>
            </div>
            <h3 className="font-manrope border-t border-gray-200 pt-8 text-center text-3xl leading-normal font-bold text-gray-900 sm:text-start">
              Our service Questions
            </h3>
            <div className="accordion" id="basic-heading-one-default">
              <button
                className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-700 transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                aria-controls="basic-collapse-one-default"
              >
                <h5 className="text-left">
                  How do I upload a file or document?{" "}
                </h5>
                <a className="max-h-6 max-w-6">{/* SVG removed */}</a>
              </button>
              <div
                id="basic-collapse-one-default"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-one-default"
              >
                <p className="pt-3 text-sm font-normal text-gray-500">
                  To create an account, find the 'Sign up' or 'Create account'
                  button, fill out the registration form with your personal
                  information, and click 'Create account' or 'Sign up.' Verify
                  your email address if needed, and then log in to start using
                  the platform.
                </p>
              </div>
            </div>
            <div
              className="accordion border-t border-solid border-gray-200 pt-6"
              id="basic-heading-two-default"
            >
              <button
                className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-700 transition duration-500 hover:text-indigo-600"
                aria-controls="basic-collapse-two-default"
              >
                <h5 className="text-left"> How do I delete my account? </h5>
                <a className="max-h-6 max-w-6">{/* SVG removed */}</a>
              </button>
              <div
                id="basic-collapse-two-default"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-two-default"
              >
                <p className="pt-3 text-sm font-normal text-gray-500">
                  Our focus on providing robust and user-friendly content
                  management capabilities ensures that you can manage your
                  content with confidence, and achieve your content marketing
                  goals with ease.
                </p>
              </div>
            </div>
            <div
              className="accordion border-y border-solid border-gray-200 pt-6 pb-8"
              id="basic-heading-three-default"
            >
              <button
                className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-lg leading-relaxed font-normal text-gray-700 transition duration-500 hover:text-indigo-600"
                aria-controls="basic-collapse-three-default"
              >
                <h5 className="text-left">
                  {" "}
                  How can I contact customer support?{" "}
                </h5>
                <a className="max-h-6 max-w-6">{/* SVG removed */}</a>
              </button>
              <div
                id="basic-collapse-three-default"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-three-default"
              >
                <p className="pt-3 text-sm font-normal text-gray-500">
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
    </section>
  )
}
