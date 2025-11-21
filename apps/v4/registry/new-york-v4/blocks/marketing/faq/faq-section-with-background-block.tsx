export default function FaqSectionWithBackgroundBlock() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center gap-6 lg:flex-row lg:justify-between xl:gap-12">
          <div className="w-full lg:w-2/5">
            <div className="mb-16">
              <h6 className="mb-5 text-center text-base font-medium text-indigo-600 lg:text-left">
                Most asked queries
              </h6>
              <h2 className="mb-5 text-center text-5xl leading-[4.25rem] font-semibold text-gray-900 lg:text-left">
                Frequently asked questions
              </h2>
              <p className="text-center text-gray-500 lg:text-left">
                Trusted in more than 100 countries and 5 million customers.
              </p>
            </div>
          </div>
          <div className="w-full rounded-xl bg-white px-8 py-10 max-lg:mx-auto max-lg:max-w-2xl lg:w-3/5">
            <div className="accordion-group" data-accordion="default-accordion">
              <div
                className="accordion active border-b border-solid border-gray-200 pb-8"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:text-indigo-600 always-open inline-flex w-full items-center justify-between text-lg leading-8 text-gray-700 transition duration-500 hover:text-indigo-600"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5>How do I update my billing information?</h5>
                  {/* SVG removed */}
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content active w-full overflow-hidden px-0 pr-4"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="text-base leading-6 text-gray-600">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-solid border-gray-200 py-8"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-lg leading-8 text-gray-700 transition duration-500 hover:text-indigo-600"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5>How can I contact customer support?</h5>
                  {/* SVG removed */}
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0 pr-4"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="text-sm leading-6 text-gray-500">
                    Our focus on providing robust and user-friendly content
                    management capabilities ensures that you can manage your
                    content with confidence, and achieve your content marketing
                    goals with ease.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-solid border-gray-200 py-8"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-lg leading-8 text-gray-700 transition duration-500 hover:text-indigo-600"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5>How do I join a group or community?</h5>
                  {/* SVG removed */}
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0 pr-4"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="text-sm leading-6 text-gray-500">
                    Our focus on providing robust and user-friendly content
                    management capabilities ensures that you can manage your
                    content with confidence, and achieve your content marketing
                    goals with ease.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-solid border-gray-200 py-8"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-lg leading-8 text-gray-700 transition duration-500 hover:text-indigo-600"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5>How do I change my email address?</h5>
                  {/* SVG removed */}
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0 pr-4"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="text-sm leading-6 text-gray-500">
                    Our focus on providing robust and user-friendly content
                    management capabilities ensures that you can manage your
                    content with confidence, and achieve your content marketing
                    goals with ease.
                  </p>
                </div>
              </div>
              <div
                className="accordion pt-8 pb-1"
                id="basic-heading-five-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-lg leading-8 font-normal text-gray-700 transition duration-500 hover:text-indigo-600"
                  aria-controls="basic-collapse-five-with-arrow-always-open"
                >
                  <h5>How do I change my privacy settings?</h5>
                  {/* SVG removed */}
                </button>
                <div
                  id="basic-collapse-five-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0 pr-4"
                  aria-labelledby="basic-heading-five-with-arrow-always-open"
                >
                  <p className="text-sm leading-6 font-normal text-gray-500">
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
