export default function FaqInsideHorizontalTabs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 tabs">
        <div className="w-full flex-col justify-start items-center flex lg:pb-9 pb-5">
          <div className="w-full flex-col justify-start items-center gap-2 flex">
            <span className="text-center text-black text-lg font-medium leading-relaxed">
              FAQs
            </span>
            <h2 className="text-center text-indigo-600 text-4xl font-bold font-manrope leading-normal">
              Questions &amp; Answers
            </h2>
          </div>
        </div>
        {/*Switch*/}
        <div className="flex sm:flex-row flex-col justify-center items-center sm:gap-9 gap-3 mx-auto w-full lg:mb-14 mb-10">
          <a
            className="inline-block text-center transition-all duration-500 text-gray-500 text-lg font-medium py-3 hover:text-indigo-600 tab-active:text-indigo-600 border-b border-transparent hover:border-indigo-600 tab-active:border-indigo-600 tablink whitespace-nowrap active"
            data-tab="tabs-with-background-1"
            role="tab"
          >
            General
          </a>
          <a
            className="inline-block text-center transition-all duration-500 text-gray-500 text-lg font-medium py-3 hover:text-indigo-600 tab-active:text-indigo-600 border-b border-transparent hover:border-indigo-600 tab-active:border-indigo-600 tablink whitespace-nowrap"
            data-tab="tabs-with-background-2"
            role="tab"
          >
            Our service
          </a>
          <a
            className="inline-block text-center transition-all duration-500 text-gray-500 text-lg font-medium py-3 hover:text-indigo-600 tab-active:text-indigo-600 border-b border-transparent hover:border-indigo-600 tab-active:border-indigo-600 tablink whitespace-nowrap"
            data-tab="tabs-with-background-3"
            role="tab"
          >
            Support
          </a>
          <a
            className="inline-block text-center transition-all duration-500 text-gray-500 text-lg font-medium py-3 hover:text-indigo-600 tab-active:text-indigo-600 border-b border-transparent hover:border-indigo-600 tab-active:border-indigo-600 tablink whitespace-nowrap"
            data-tab="tabs-with-background-4"
            role="tab"
          >
            General
          </a>
          <a
            className="inline-block text-center transition-all duration-500 text-gray-500 text-lg font-medium py-3 hover:text-indigo-600 tab-active:text-indigo-600 border-b border-transparent hover:border-indigo-600 tab-active:border-indigo-600 tablink whitespace-nowrap"
            data-tab="tabs-with-background-5"
            role="tab"
          >
            Shipping
          </a>
        </div>
        {/*Switch End*/}
        {/*Grid*/}
        <div
          id="tabs-with-background-1"
          role="tabpanel"
          aria-labelledby="tabs-with-background-item-1"
          className="tabcontent"
        >
          <div
            className="accordion-group grid lg:grid-cols-2 grid-cols-1 gap-8 lg:h-full"
            data-accordion="default-accordion"
          >
            <div className="flex flex-col gap-8">
              <div
                className="accordion pb-8 border-b border-gray-200 active"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    How can I contact customer support?
                  </h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden active"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
              <div
                className="accordion pb-8 border-b border-gray-200"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I reset my password?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
              <div
                className="accordion pb-8 border-b border-gray-200"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I delete my account?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div
                className="accordion pb-8 border-b border-gray-200 active"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    How do I join a group or community?
                  </h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden active"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
              <div
                className="accordion pb-8 border-b border-gray-200"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I delete my account?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
              <div
                className="accordion pb-8 border-b border-gray-200"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I change my password?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="tabs-with-background-2"
          role="tabpanel"
          aria-labelledby="tabs-with-background-item-2"
          className="tabcontent "
        >
          <div
            className="accordion-group grid lg:grid-cols-2 grid-cols-1 gap-8 lg:h-full"
            data-accordion="default-accordion"
          >
            <div className="flex flex-col gap-8">
              <div
                className="accordion pb-8 border-b border-gray-200 active"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    How can I provide feedback on the services I received?
                  </h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden active"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
              <div
                className="accordion pb-8 border-b border-gray-200"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I reset my password?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
              <div
                className="accordion pb-8 border-b border-gray-200"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I delete my account?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div
                className="accordion pb-8 border-b border-gray-200 active"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    Which is better short term or long term?
                  </h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden active"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
              <div
                className="accordion pb-8 border-b border-gray-200"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I delete my account?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
              <div
                className="accordion pb-8 border-b border-gray-200"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I change my password?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="tabs-with-background-3"
          role="tabpanel"
          aria-labelledby="tabs-with-background-item-3"
          className="tabcontent "
        >
          <div
            className="accordion-group grid lg:grid-cols-2 grid-cols-1 gap-8 lg:h-full"
            data-accordion="default-accordion"
          >
            <div className="flex flex-col gap-8">
              <div
                className="accordion pb-8 border-b border-gray-200 active"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    How many percent return in long term?
                  </h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden active"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
              <div
                className="accordion pb-8 border-b border-gray-200"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I reset my password?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
              <div
                className="accordion pb-8 border-b border-gray-200"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I delete my account?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div
                className="accordion pb-8 border-b border-gray-200 active"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    How do I join a group or community?
                  </h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden active"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
              <div
                className="accordion pb-8 border-b border-gray-200"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I delete my account?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
              <div
                className="accordion pb-8 border-b border-gray-200"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I change my password?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="tabs-with-background-4"
          role="tabpanel"
          aria-labelledby="tabs-with-background-item-4"
          className="tabcontent "
        >
          <div
            className="accordion-group grid lg:grid-cols-2 grid-cols-1 gap-8 lg:h-full"
            data-accordion="default-accordion"
          >
            <div className="flex flex-col gap-8">
              <div
                className="accordion pb-8 border-b border-gray-200 active"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    How can I contact customer support?
                  </h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden active"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
              <div
                className="accordion pb-8 border-b border-gray-200"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I reset my password?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
              <div
                className="accordion pb-8 border-b border-gray-200"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I delete my account?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div
                className="accordion pb-8 border-b border-gray-200 active"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    How do I join a group or community?
                  </h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden active"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
              <div
                className="accordion pb-8 border-b border-gray-200"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I delete my account?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
              <div
                className="accordion pb-8 border-b border-gray-200"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I change my password?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="tabs-with-background-5"
          role="tabpanel"
          aria-labelledby="tabs-with-background-item-5"
          className="tabcontent "
        >
          <div
            className="accordion-group grid lg:grid-cols-2 grid-cols-1 gap-8 lg:h-full"
            data-accordion="default-accordion"
          >
            <div className="flex flex-col gap-8">
              <div
                className="accordion pb-8 border-b border-gray-200 active"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    How can I request a service appointment?
                  </h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden active"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
              <div
                className="accordion pb-8 border-b border-gray-200"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I reset my password?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
              <div
                className="accordion pb-8 border-b border-gray-200"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I delete my account?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div
                className="accordion pb-8 border-b border-gray-200 active"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    Are there any additional fees for your services?
                  </h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden active"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
              <div
                className="accordion pb-8 border-b border-gray-200"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I delete my account?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
              <div
                className="accordion pb-8 border-b border-gray-200"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group inline-flex gap-5 items-center justify-between text-gray-900 text-2xl font-medium leading-9 text-black w-full transition duration-500 always-open"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I change my password?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="text-base font-normal text-gray-500 pt-3">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
