export default function VerticalFaqListWithHeading() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full justify-start items-start lg:gap-x-12 lg:gap-y-0 gap-y-10 grid lg:grid-cols-12 grid-cols-1">
          <div className="lg:col-span-5 col-span-12 w-full flex-col justify-start lg:items-start items-center lg:gap-10 gap-5 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center lg:gap-5 gap-4 flex">
              <span className="text-indigo-600 text-base font-medium leading-relaxed lg:text-start text-center">
                Most asked queries
              </span>
              <h2 className="text-gray-900 sm:text-5xl text-4xl font-semibold font-manrope sm:leading-tight leading-tight lg:text-start text-center">
                Frequently asked questions
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Trusted in more than 100 countries and 5 million customers.
              </p>
            </div>
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-2 py-px text-white text-lg font-semibold leading-[30px]">
                Contact us
              </span>
            </button>
          </div>
          <div
            className="accordion-group flex flex-col gap-8 h-full lg:col-span-7 col-span-12 w-full "
            data-accordion="default-accordion"
          >
            <h3 className="sm:text-start text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">
              Privacy/Policy Questions
            </h3>
            <div className="accordion" id="basic-heading-one-default">
              <button
                className="accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-relaxed text-lg font-normal text-gray-700 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                aria-controls="basic-collapse-one-default"
              >
                <h5 className="text-left">How can I reset my password? </h5>
                <a className="max-w-6 max-h-6">{/* SVG removed */}</a>
              </button>
              <div
                id="basic-collapse-one-default"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-one-default"
              >
                <p className="text-sm text-gray-500 font-normal pt-3">
                  To create an account, find the 'Sign up' or 'Create account'
                  button, fill out the registration form with your personal
                  information, and click 'Create account' or 'Sign up.' Verify
                  your email address if needed, and then log in to start using
                  the platform.
                </p>
              </div>
            </div>
            <div
              className="accordion pt-6 border-t border-solid border-gray-200"
              id="basic-heading-two-default"
            >
              <button
                className="accordion-toggle group  inline-flex items-center justify-between leading-relaxed text-lg font-normal text-gray-700 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600"
                aria-controls="basic-collapse-two-default"
              >
                <h5 className="text-left">
                  {" "}
                  How do I update my profile information?{" "}
                </h5>
                <a className="max-w-6 max-h-6">{/* SVG removed */}</a>
              </button>
              <div
                id="basic-collapse-two-default"
                className="accordion-content  w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-two-default"
              >
                <p className="text-sm text-gray-500 font-normal pt-3">
                  Our focus on providing robust and user-friendly content
                  management capabilities ensures that you can manage your
                  content with confidence, and achieve your content marketing
                  goals with ease.
                </p>
              </div>
            </div>
            <div
              className="accordion pt-6 border-t border-solid border-gray-200"
              id="basic-heading-three-default"
            >
              <button
                className="accordion-toggle group  inline-flex items-center justify-between leading-relaxed text-lg font-normal text-gray-700 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600"
                aria-controls="basic-collapse-three-default"
              >
                <h5 className="text-left">
                  {" "}
                  How do I update my billing information?{" "}
                </h5>
                <a className="max-w-6 max-h-6">{/* SVG removed */}</a>
              </button>
              <div
                id="basic-collapse-three-default"
                className="accordion-content  w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-three-default"
              >
                <p className="text-sm text-gray-500 font-normal pt-3">
                  Our focus on providing robust and user-friendly content
                  management capabilities ensures that you can manage your
                  content with confidence, and achieve your content marketing
                  goals with ease.
                </p>
              </div>
            </div>
            <h3 className="sm:text-start text-center text-gray-900 text-3xl font-bold font-manrope leading-normal pt-8 border-t border-gray-200">
              Our service Questions
            </h3>
            <div className="accordion" id="basic-heading-one-default">
              <button
                className="accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-relaxed text-lg font-normal text-gray-700 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                aria-controls="basic-collapse-one-default"
              >
                <h5 className="text-left">
                  How do I upload a file or document?{" "}
                </h5>
                <a className="max-w-6 max-h-6">{/* SVG removed */}</a>
              </button>
              <div
                id="basic-collapse-one-default"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-one-default"
              >
                <p className="text-sm text-gray-500 font-normal pt-3">
                  To create an account, find the 'Sign up' or 'Create account'
                  button, fill out the registration form with your personal
                  information, and click 'Create account' or 'Sign up.' Verify
                  your email address if needed, and then log in to start using
                  the platform.
                </p>
              </div>
            </div>
            <div
              className="accordion pt-6 border-t border-solid border-gray-200"
              id="basic-heading-two-default"
            >
              <button
                className="accordion-toggle group  inline-flex items-center justify-between leading-relaxed text-lg font-normal text-gray-700 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600"
                aria-controls="basic-collapse-two-default"
              >
                <h5 className="text-left"> How do I delete my account? </h5>
                <a className="max-w-6 max-h-6">{/* SVG removed */}</a>
              </button>
              <div
                id="basic-collapse-two-default"
                className="accordion-content  w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-two-default"
              >
                <p className="text-sm text-gray-500 font-normal pt-3">
                  Our focus on providing robust and user-friendly content
                  management capabilities ensures that you can manage your
                  content with confidence, and achieve your content marketing
                  goals with ease.
                </p>
              </div>
            </div>
            <div
              className="accordion pt-6 pb-8 border-y border-solid border-gray-200"
              id="basic-heading-three-default"
            >
              <button
                className="accordion-toggle group  inline-flex items-center justify-between leading-relaxed text-lg font-normal text-gray-700 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600"
                aria-controls="basic-collapse-three-default"
              >
                <h5 className="text-left">
                  {" "}
                  How can I contact customer support?{" "}
                </h5>
                <a className="max-w-6 max-h-6">{/* SVG removed */}</a>
              </button>
              <div
                id="basic-collapse-three-default"
                className="accordion-content  w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-three-default"
              >
                <p className="text-sm text-gray-500 font-normal pt-3">
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
  );
}
