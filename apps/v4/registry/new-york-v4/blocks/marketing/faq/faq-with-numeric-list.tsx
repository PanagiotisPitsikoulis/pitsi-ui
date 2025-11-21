export default function FaqWithNumericList() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:gap-14">
          <div className="flex w-full flex-col items-center justify-start gap-2">
            <span className="text-center text-lg leading-relaxed font-medium text-indigo-600">
              FAQs
            </span>
            <h4 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Questions? We have answers.
            </h4>
          </div>
          <div
            className="accordion-group flex h-full w-full flex-col gap-8"
            data-accordion="default-accordion"
          >
            <div
              className="accordion active rounded-2xl border border-gray-200 p-4 sm:p-6"
              id="basic-heading-one-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-1.5 text-xl leading-8 font-medium text-gray-700 transition duration-500 sm:gap-5 sm:text-2xl sm:leading-9"
                aria-controls="basic-collapse-one-with-arrow-always-open"
              >
                <h5 className="flex flex-row items-center gap-5 text-start">
                  <div className="hidden h-[42px] w-[42px] items-center justify-center rounded-full bg-indigo-600 px-5 text-xl leading-8 font-medium text-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] sm:flex">
                    1
                  </div>
                  How can I contact customer support?
                </h5>
                <a className="max-h-[30px] max-w-[30px]">{/* SVG removed */}</a>
              </button>
              <div
                id="basic-collapse-one-with-arrow-always-open"
                className="accordion-content active w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-one-with-arrow-always-open"
              >
                <p className="pt-3 text-lg font-normal text-gray-500 sm:pl-16">
                  Our customer support team is dedicated to providing you with
                  the assistance you need, ensuring that your experience with us
                  is as smooth and enjoyable as possible. We offer multiple
                  convenient methods for you to reach out to us, so you can
                  choose the option that best fits your needs and preferences.
                </p>
              </div>
            </div>
            <div
              className="accordion rounded-2xl border border-gray-200 p-4 sm:p-6"
              id="basic-heading-two-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex w-full items-center justify-between gap-1.5 text-xl leading-8 font-medium text-gray-700 transition duration-500 sm:gap-5 sm:text-2xl sm:leading-9"
                aria-controls="basic-collapse-two-with-arrow-always-open"
              >
                <h5 className="flex flex-row items-center gap-5 text-start">
                  <div className="hidden h-[42px] w-[42px] items-center justify-center rounded-full bg-indigo-600 px-5 text-xl leading-8 font-medium text-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] sm:flex">
                    2
                  </div>
                  How can I contact customer support?
                </h5>
                <a className="max-h-[30px] max-w-[30px]">{/* SVG removed */}</a>
              </button>
              <div
                id="basic-collapse-two-with-arrow-always-open"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-two-with-arrow-always-open"
              >
                <p className="pt-3 text-lg font-normal text-gray-500 sm:pl-16">
                  Our customer support team is dedicated to providing you with
                  the assistance you need, ensuring that your experience with us
                  is as smooth and enjoyable as possible. We offer multiple
                  convenient methods for you to reach out to us, so you can
                  choose the option that best fits your needs and preferences.
                </p>
              </div>
            </div>
            <div
              className="accordion rounded-2xl border border-gray-200 p-4 sm:p-6"
              id="basic-heading-three-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex w-full items-center justify-between gap-1.5 text-xl leading-8 font-medium text-gray-700 transition duration-500 sm:gap-5 sm:text-2xl sm:leading-9"
                aria-controls="basic-collapse-three-with-arrow-always-open"
              >
                <h5 className="flex flex-row items-center gap-5 text-start">
                  <div className="hidden h-[42px] w-[42px] items-center justify-center rounded-full bg-indigo-600 px-5 text-xl leading-8 font-medium text-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] sm:flex">
                    3
                  </div>
                  How do I join a group or community?
                </h5>
                <a className="max-h-[30px] max-w-[30px]">{/* SVG removed */}</a>
              </button>
              <div
                id="basic-collapse-three-with-arrow-always-open"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-three-with-arrow-always-open"
              >
                <p className="pt-3 text-lg font-normal text-gray-500 sm:pl-16">
                  Our customer support team is dedicated to providing you with
                  the assistance you need, ensuring that your experience with us
                  is as smooth and enjoyable as possible. We offer multiple
                  convenient methods for you to reach out to us, so you can
                  choose the option that best fits your needs and preferences.
                </p>
              </div>
            </div>
            <div
              className="accordion rounded-2xl border border-gray-200 p-4 sm:p-6"
              id="basic-heading-four-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex w-full items-center justify-between gap-1.5 text-xl leading-8 font-medium text-gray-700 transition duration-500 sm:gap-5 sm:text-2xl sm:leading-9"
                aria-controls="basic-collapse-four-with-arrow-always-open"
              >
                <h5 className="flex flex-row items-center gap-5 text-start">
                  <div className="hidden h-[42px] w-[42px] items-center justify-center rounded-full bg-indigo-600 px-5 text-xl leading-8 font-medium text-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] sm:flex">
                    4
                  </div>
                  How do I change my email address?
                </h5>
                <a className="max-h-[30px] max-w-[30px]">{/* SVG removed */}</a>
              </button>
              <div
                id="basic-collapse-four-with-arrow-always-open"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-four-with-arrow-always-open"
              >
                <p className="pt-3 text-lg font-normal text-gray-500 sm:pl-16">
                  Our customer support team is dedicated to providing you with
                  the assistance you need, ensuring that your experience with us
                  is as smooth and enjoyable as possible. We offer multiple
                  convenient methods for you to reach out to us, so you can
                  choose the option that best fits your needs and preferences.
                </p>
              </div>
            </div>
            <div
              className="accordion rounded-2xl border border-gray-200 p-4 sm:p-6"
              id="basic-heading-four-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex w-full items-center justify-between gap-1.5 text-xl leading-8 font-medium text-gray-700 transition duration-500 sm:gap-5 sm:text-2xl sm:leading-9"
                aria-controls="basic-collapse-four-with-arrow-always-open"
              >
                <h5 className="flex flex-row items-center gap-5 text-start">
                  <div className="hidden h-[42px] w-[42px] items-center justify-center rounded-full bg-indigo-600 px-5 text-xl leading-8 font-medium text-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] sm:flex">
                    5
                  </div>
                  How do I change my privacy settings?
                </h5>
                <a className="max-h-[30px] max-w-[30px]">{/* SVG removed */}</a>
              </button>
              <div
                id="basic-collapse-four-with-arrow-always-open"
                className="accordion-content w-full overflow-hidden px-0"
                aria-labelledby="basic-heading-four-with-arrow-always-open"
              >
                <p className="pt-3 text-lg font-normal text-gray-500 sm:pl-16">
                  Our customer support team is dedicated to providing you with
                  the assistance you need, ensuring that your experience with us
                  is as smooth and enjoyable as possible. We offer multiple
                  convenient methods for you to reach out to us, so you can
                  choose the option that best fits your needs and preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
