export default function PricingWithRadioComponent() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-full flex-col items-center justify-center gap-x-16 gap-y-5 max-lg:max-w-2xl lg:flex-row lg:justify-between xl:gap-28">
          <div className="w-full lg:w-1/2">
            <img
              src="https://pagedone.io/asset/uploads/1696230182.png"
              alt="FAQ tailwind section"
              className="w-full rounded-xl object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-xl">
              <div className="mb-6 lg:mb-16">
                <h6 className="mb-2 text-center text-lg font-medium text-indigo-600 lg:text-left">
                  faqs
                </h6>
                <h2 className="mb-5 text-center text-4xl leading-[3.25rem] font-bold text-gray-900 lg:text-left">
                  Looking for answers?
                </h2>
              </div>
              <div
                className="accordion-group"
                data-accordion="default-accordion"
              >
                <div
                  className="accordion active border-b border-solid border-gray-200 pb-8"
                  id="basic-heading-one-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium always-open inline-flex w-full items-center justify-between text-xl leading-8 font-normal text-gray-600 transition duration-500 hover:text-indigo-600"
                    aria-controls="basic-collapse-one-with-arrow-always-open"
                  >
                    <h5>How to create an account?</h5>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-one-with-arrow-always-open"
                    className="accordion-content active w-full overflow-hidden px-0 pr-4"
                    aria-labelledby="basic-heading-one-with-arrow-always-open"
                  >
                    <p className="text-base font-normal text-gray-600">
                      To create an account, find the 'Sign up' or 'Create
                      account' button, fill out the registration form with your
                      personal information, and click 'Create account' or 'Sign
                      up.' Verify your email address if needed, and then log in
                      to start using the platform.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion border-b border-solid border-gray-200 py-8"
                  id="basic-heading-two-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-indigo-600 accordion-active:font-medium inline-flex w-full items-center justify-between text-xl leading-8 font-normal text-gray-600 transition duration-500 hover:text-indigo-600"
                    aria-controls="basic-collapse-two-with-arrow-always-open"
                  >
                    <h5>Have any trust issue?</h5>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-two-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0 pr-4"
                    aria-labelledby="basic-heading-two-with-arrow-always-open"
                  >
                    <p className="text-base font-normal text-gray-500">
                      Our focus on providing robust and user-friendly content
                      management capabilities ensures that you can manage your
                      content with confidence, and achieve your content
                      marketing goals with ease.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion border-b border-solid border-gray-200 py-8"
                  id="basic-heading-three-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-xl leading-8 font-normal text-gray-600 transition duration-500 hover:text-indigo-600"
                    aria-controls="basic-collapse-three-with-arrow-always-open"
                  >
                    <h5>How can I reset my password?</h5>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0 pr-4"
                    aria-labelledby="basic-heading-three-with-arrow-always-open"
                  >
                    <p className="text-base font-normal text-gray-500">
                      Our focus on providing robust and user-friendly content
                      management capabilities ensures that you can manage your
                      content with confidence, and achieve your content
                      marketing goals with ease.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion py-8"
                  id="basic-heading-four-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group accordion-active:font-medium accordion-active:text-indigo-600 inline-flex w-full items-center justify-between text-xl leading-8 font-normal text-gray-600 transition duration-500 hover:text-indigo-600"
                    aria-controls="basic-collapse-four-with-arrow-always-open"
                  >
                    <h5>What is the payment process?</h5>
                    {/* SVG removed */}
                  </button>
                  <div
                    id="basic-collapse-four-with-arrow-always-open"
                    className="accordion-content w-full overflow-hidden px-0 pr-4"
                    aria-labelledby="basic-heading-four-with-arrow-always-open"
                  >
                    <p className="text-base font-normal text-gray-500">
                      Our focus on providing robust and user-friendly content
                      management capabilities ensures that you can manage your
                      content with confidence, and achieve your content
                      marketing goals with ease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
