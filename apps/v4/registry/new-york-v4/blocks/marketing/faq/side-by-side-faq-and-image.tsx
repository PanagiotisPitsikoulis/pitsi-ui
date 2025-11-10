export default function SideBySideFaqAndImage() {
  return (
    <section className="py-24">
      <div className="px-4 sm:px-6 lg:px-0 lg:pl-16 xl:pl-28">
        <div className="grid w-full grid-cols-1 items-center justify-center gap-y-10 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-0">
          <div className="col-span-12 inline-flex w-full flex-col items-start justify-start gap-12 lg:col-span-7 lg:gap-16">
            <div className="flex w-full flex-col items-center justify-center gap-2 lg:items-start">
              <h5 className="text-center text-lg leading-relaxed font-medium text-gray-500 lg:text-start">
                Question &amp; Answer
              </h5>
              <h2 className="font-manrope text-center text-5xl leading-tight font-bold text-gray-900 lg:text-start">
                Most Asked Question
              </h2>
            </div>
            <div
              className="accordion-group flex h-full flex-col gap-6"
              data-accordion="default-accordion"
            >
              <div
                className="accordion active border-b border-gray-200 pb-6"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group accordion-active:text-gray-900 accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8 always-open inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How do I update my billing information?{" "}
                  </h5>
                  <a className="accordion-active:bg-black pointer-events-none flex h-6 w-6 items-center justify-center rounded-full">
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content active w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="pt-4 text-sm font-normal text-gray-500">
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
                  className="accordion-toggle group accordion-active:text-gray-900 accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8 inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-left">How do I delete my account?</h5>
                  <a className="accordion-active:bg-black pointer-events-none flex h-6 w-6 items-center justify-center rounded-full">
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="pt-4 text-sm font-normal text-gray-500">
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
                  className="accordion-toggle group accordion-active:text-gray-900 accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8 inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How do I join a group or community?
                  </h5>
                  <a className="accordion-active:bg-black pointer-events-none flex h-6 w-6 items-center justify-center rounded-full">
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="pt-4 text-sm font-normal text-gray-500">
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
                  className="accordion-toggle group accordion-active:text-gray-900 accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8 inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    How can I contact customer support?
                  </h5>
                  <a className="accordion-active:bg-black pointer-events-none flex h-6 w-6 items-center justify-center rounded-full">
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </a>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="pt-4 text-sm font-normal text-gray-500">
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
                  className="accordion-toggle group accordion-active:text-gray-900 accordion-active:text-xl accordion-active:font-medium accordion-active:leading-8 inline-flex w-full items-center justify-between gap-1 text-lg leading-relaxed font-normal text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-four-with-arrow-always-open"
                >
                  <h5 className="text-left">
                    Which is better short term or long term?
                  </h5>
                  <a className="accordion-active:bg-black pointer-events-none flex h-6 w-6 items-center justify-center rounded-full">
                    {/* SVG removed */}
                    {/* SVG removed */}
                  </a>
                </button>
                <div
                  id="basic-collapse-four-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-four-with-arrow-always-open"
                >
                  <p className="pt-4 text-sm font-normal text-gray-500">
                    To update your billing information, log in and go to the
                    billing or payment page. Look for an option to "Update
                    payment method" or "Edit billing information" and follow the
                    prompts. Be sure to save your changes before exiting.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex h-full w-full items-center justify-end rounded-tl-2xl rounded-bl-2xl border border-gray-200 bg-gray-100 pt-5 pl-5 sm:pt-10 sm:pl-10 lg:col-span-5">
            <img
              className="h-auto w-full rounded-xl object-cover lg:h-full"
              src="https://pagedone.io/asset/uploads/1723111128.png"
              alt="faq image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
