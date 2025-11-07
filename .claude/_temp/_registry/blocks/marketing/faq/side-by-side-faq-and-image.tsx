export default function SideBySideFaqAndImage() {
  return (
    <section className="py-24">
      <div className="px-4 sm:px-6 lg:px-0 xl:pl-28 lg:pl-16">
        <div className="w-full justify-center items-center lg:gap-x-12 lg:gap-y-0 gap-y-10 grid lg:grid-cols-12 grid-cols-1">
          <div className="lg:col-span-7 col-span-12 w-full flex-col justify-start items-start lg:gap-16 gap-12 inline-flex">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-2 flex">
              <h5 className="text-gray-500 text-lg font-medium leading-relaxed lg:text-start text-center">
                Question &amp; Answer
              </h5>
              <h2 className="text-gray-900 text-5xl font-bold font-manrope leading-tight lg:text-start text-center">
                Most Asked Question
              </h2>
            </div>
            <div
              className="accordion-group flex flex-col gap-6 h-full"
              data-accordion="default-accordion"
            >
              <div
                className="accordion border-b border-gray-200 pb-6 active"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8 always-open"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How do I update my billing information?{" "}
                  </h5>
                  <a className="w-6 h-6 accordion-active:bg-black rounded-full flex items-center justify-center pointer-events-none">
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden active"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-500 pt-4">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-6"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-left">How do I delete my account?</h5>
                  <a className="w-6 h-6 accordion-active:bg-black rounded-full flex items-center justify-center pointer-events-none">
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-500 pt-4">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-6"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How do I join a group or community?
                  </h5>
                  <a className="w-6 h-6 accordion-active:bg-black rounded-full flex items-center justify-center pointer-events-none">
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-500 pt-4">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-6"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How can I contact customer support?
                  </h5>
                  <a className="w-6 h-6 accordion-active:bg-black rounded-full flex items-center justify-center pointer-events-none">
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </a>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-500 pt-4">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
              <div
                className="accordion"
                id="basic-heading-four-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-1 items-center justify-between text-lg font-normal leading-relaxed text-gray-900 w-full transition duration-500 accordion-active:text-gray-900 accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    Which is better short term or long term?
                  </h5>
                  <a className="w-6 h-6 accordion-active:bg-black rounded-full flex items-center justify-center pointer-events-none">
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </a>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="text-sm font-normal text-gray-500 pt-4">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 col-span-12 w-full h-full sm:pl-10 pl-5 sm:pt-10 pt-5 bg-gray-100 rounded-tl-2xl rounded-bl-2xl border border-gray-200 justify-end items-center flex">
            <img
              className="rounded-xl w-full lg:h-full h-auto object-cover"
              src="https://pagedone.io/asset/uploads/1723111128.png"
              alt="faq image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
