export default function FaqWithNumericList() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center lg:gap-14 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-2 flex">
            <span className="text-center text-indigo-600 text-lg font-medium leading-relaxed">
              FAQs
            </span>
            <h4 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Questions? We have answers.
            </h4>
          </div>
          <div
            className="accordion-group flex flex-col gap-8 h-full w-full"
            data-accordion="default-accordion"
          >
            <div
              className="accordion sm:p-6 p-4 rounded-2xl border border-gray-200 active"
              id="basic-heading-one-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex sm:gap-5 gap-1.5 items-center justify-between sm:text-2xl text-xl font-medium sm:leading-9 leading-8 text-gray-700 w-full transition duration-500  always-open"
                aria-controls="basic-collapse-one-with-arrow-always-open"
              >
                <h5 className="flex flex-row gap-5 items-center text-start">
                  <div className="w-[42px] h-[42px] px-5 sm:flex hidden items-center justify-center rounded-full bg-indigo-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-white text-xl font-medium leading-8">
                    1
                  </div>
                  How can I contact customer support?
                </h5>
                <a className="max-w-[30px] max-h-[30px]">{/* SVG removed */}</a>
              </button>
              <div
                id="basic-collapse-one-with-arrow-always-open"
                className="accordion-content w-full px-0 overflow-hidden active"
                aria-labelledby="basic-heading-one-with-arrow-always-open"
              >
                <p className="text-lg font-normal text-gray-500 pt-3 sm:pl-16">
                  Our customer support team is dedicated to providing you with
                  the assistance you need, ensuring that your experience with us
                  is as smooth and enjoyable as possible. We offer multiple
                  convenient methods for you to reach out to us, so you can
                  choose the option that best fits your needs and preferences.
                </p>
              </div>
            </div>
            <div
              className="accordion sm:p-6 p-4 rounded-2xl border border-gray-200"
              id="basic-heading-two-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex sm:gap-5 gap-1.5 items-center justify-between sm:text-2xl text-xl font-medium sm:leading-9 leading-8 text-gray-700 w-full transition duration-500 "
                aria-controls="basic-collapse-two-with-arrow-always-open"
              >
                <h5 className="flex flex-row gap-5 items-center text-start">
                  <div className="w-[42px] h-[42px] px-5 sm:flex hidden items-center justify-center rounded-full bg-indigo-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-white text-xl font-medium leading-8">
                    2
                  </div>
                  How can I contact customer support?
                </h5>
                <a className="max-w-[30px] max-h-[30px]">{/* SVG removed */}</a>
              </button>
              <div
                id="basic-collapse-two-with-arrow-always-open"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-two-with-arrow-always-open"
              >
                <p className="text-lg font-normal text-gray-500 pt-3 sm:pl-16">
                  Our customer support team is dedicated to providing you with
                  the assistance you need, ensuring that your experience with us
                  is as smooth and enjoyable as possible. We offer multiple
                  convenient methods for you to reach out to us, so you can
                  choose the option that best fits your needs and preferences.
                </p>
              </div>
            </div>
            <div
              className="accordion sm:p-6 p-4 rounded-2xl border border-gray-200"
              id="basic-heading-three-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex sm:gap-5 gap-1.5 items-center justify-between sm:text-2xl text-xl font-medium sm:leading-9 leading-8 text-gray-700 w-full transition duration-500 "
                aria-controls="basic-collapse-three-with-arrow-always-open"
              >
                <h5 className="flex flex-row gap-5 items-center text-start">
                  <div className="w-[42px] h-[42px] px-5 sm:flex hidden items-center justify-center rounded-full bg-indigo-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-white text-xl font-medium leading-8">
                    3
                  </div>
                  How do I join a group or community?
                </h5>
                <a className="max-w-[30px] max-h-[30px]">{/* SVG removed */}</a>
              </button>
              <div
                id="basic-collapse-three-with-arrow-always-open"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-three-with-arrow-always-open"
              >
                <p className="text-lg font-normal text-gray-500 pt-3 sm:pl-16">
                  Our customer support team is dedicated to providing you with
                  the assistance you need, ensuring that your experience with us
                  is as smooth and enjoyable as possible. We offer multiple
                  convenient methods for you to reach out to us, so you can
                  choose the option that best fits your needs and preferences.
                </p>
              </div>
            </div>
            <div
              className="accordion sm:p-6 p-4 rounded-2xl border border-gray-200"
              id="basic-heading-four-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex sm:gap-5 gap-1.5 items-center justify-between sm:text-2xl text-xl font-medium sm:leading-9 leading-8 text-gray-700 w-full transition duration-500 "
                aria-controls="basic-collapse-four-with-arrow-always-open"
              >
                <h5 className="flex flex-row gap-5 items-center text-start">
                  <div className="w-[42px] h-[42px] px-5 sm:flex hidden items-center justify-center rounded-full bg-indigo-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-white text-xl font-medium leading-8">
                    4
                  </div>
                  How do I change my email address?
                </h5>
                <a className="max-w-[30px] max-h-[30px]">{/* SVG removed */}</a>
              </button>
              <div
                id="basic-collapse-four-with-arrow-always-open"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-four-with-arrow-always-open"
              >
                <p className="text-lg font-normal text-gray-500 pt-3 sm:pl-16">
                  Our customer support team is dedicated to providing you with
                  the assistance you need, ensuring that your experience with us
                  is as smooth and enjoyable as possible. We offer multiple
                  convenient methods for you to reach out to us, so you can
                  choose the option that best fits your needs and preferences.
                </p>
              </div>
            </div>
            <div
              className="accordion sm:p-6 p-4 rounded-2xl border border-gray-200"
              id="basic-heading-four-with-arrow-always-open"
            >
              <button
                className="accordion-toggle group inline-flex sm:gap-5 gap-1.5 items-center justify-between sm:text-2xl text-xl font-medium sm:leading-9 leading-8 text-gray-700 w-full transition duration-500 "
                aria-controls="basic-collapse-four-with-arrow-always-open"
              >
                <h5 className="flex flex-row gap-5 items-center text-start">
                  <div className="w-[42px] h-[42px] px-5 sm:flex hidden items-center justify-center rounded-full bg-indigo-600 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-white text-xl font-medium leading-8">
                    5
                  </div>
                  How do I change my privacy settings?
                </h5>
                <a className="max-w-[30px] max-h-[30px]">{/* SVG removed */}</a>
              </button>
              <div
                id="basic-collapse-four-with-arrow-always-open"
                className="accordion-content w-full px-0 overflow-hidden"
                aria-labelledby="basic-heading-four-with-arrow-always-open"
              >
                <p className="text-lg font-normal text-gray-500 pt-3 sm:pl-16">
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
  );
}
