export default function FaqInsideHorizontalTabs() {
  return (
    <section className="py-24">
      <div className="tabs mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-center justify-start pb-5 lg:pb-9">
          <div className="flex w-full flex-col items-center justify-start gap-2">
            <span className="text-center text-lg leading-relaxed font-medium text-black">
              FAQs
            </span>
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-indigo-600">
              Questions &amp; Answers
            </h2>
          </div>
        </div>
        {/*Switch*/}
        <div className="mx-auto mb-10 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-9 lg:mb-14">
          <a
            className="tab-active:text-indigo-600 tab-active:border-indigo-600 tablink active inline-block border-b border-transparent py-3 text-center text-lg font-medium whitespace-nowrap text-gray-500 transition-all duration-500 hover:border-indigo-600 hover:text-indigo-600"
            data-tab="tabs-with-background-1"
            role="tab"
          >
            General
          </a>
          <a
            className="tab-active:text-indigo-600 tab-active:border-indigo-600 tablink inline-block border-b border-transparent py-3 text-center text-lg font-medium whitespace-nowrap text-gray-500 transition-all duration-500 hover:border-indigo-600 hover:text-indigo-600"
            data-tab="tabs-with-background-2"
            role="tab"
          >
            Our service
          </a>
          <a
            className="tab-active:text-indigo-600 tab-active:border-indigo-600 tablink inline-block border-b border-transparent py-3 text-center text-lg font-medium whitespace-nowrap text-gray-500 transition-all duration-500 hover:border-indigo-600 hover:text-indigo-600"
            data-tab="tabs-with-background-3"
            role="tab"
          >
            Support
          </a>
          <a
            className="tab-active:text-indigo-600 tab-active:border-indigo-600 tablink inline-block border-b border-transparent py-3 text-center text-lg font-medium whitespace-nowrap text-gray-500 transition-all duration-500 hover:border-indigo-600 hover:text-indigo-600"
            data-tab="tabs-with-background-4"
            role="tab"
          >
            General
          </a>
          <a
            className="tab-active:text-indigo-600 tab-active:border-indigo-600 tablink inline-block border-b border-transparent py-3 text-center text-lg font-medium whitespace-nowrap text-gray-500 transition-all duration-500 hover:border-indigo-600 hover:text-indigo-600"
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
            className="accordion-group grid grid-cols-1 gap-8 lg:h-full lg:grid-cols-2"
            data-accordion="default-accordion"
          >
            <div className="flex flex-col gap-8">
              <div
                className="accordion active border-b border-gray-200 pb-8"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    How can I contact customer support?
                  </h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content active w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I reset my password?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I delete my account?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
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
                className="accordion active border-b border-gray-200 pb-8"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    How do I join a group or community?
                  </h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content active w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I delete my account?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I change my password?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
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
          className="tabcontent"
        >
          <div
            className="accordion-group grid grid-cols-1 gap-8 lg:h-full lg:grid-cols-2"
            data-accordion="default-accordion"
          >
            <div className="flex flex-col gap-8">
              <div
                className="accordion active border-b border-gray-200 pb-8"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    How can I provide feedback on the services I received?
                  </h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content active w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I reset my password?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I delete my account?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
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
                className="accordion active border-b border-gray-200 pb-8"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    Which is better short term or long term?
                  </h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content active w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I delete my account?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I change my password?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
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
          className="tabcontent"
        >
          <div
            className="accordion-group grid grid-cols-1 gap-8 lg:h-full lg:grid-cols-2"
            data-accordion="default-accordion"
          >
            <div className="flex flex-col gap-8">
              <div
                className="accordion active border-b border-gray-200 pb-8"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    How many percent return in long term?
                  </h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content active w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I reset my password?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I delete my account?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
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
                className="accordion active border-b border-gray-200 pb-8"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    How do I join a group or community?
                  </h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content active w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I delete my account?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I change my password?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
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
          className="tabcontent"
        >
          <div
            className="accordion-group grid grid-cols-1 gap-8 lg:h-full lg:grid-cols-2"
            data-accordion="default-accordion"
          >
            <div className="flex flex-col gap-8">
              <div
                className="accordion active border-b border-gray-200 pb-8"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    How can I contact customer support?
                  </h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content active w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I reset my password?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I delete my account?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
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
                className="accordion active border-b border-gray-200 pb-8"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    How do I join a group or community?
                  </h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content active w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I delete my account?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I change my password?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
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
          className="tabcontent"
        >
          <div
            className="accordion-group grid grid-cols-1 gap-8 lg:h-full lg:grid-cols-2"
            data-accordion="default-accordion"
          >
            <div className="flex flex-col gap-8">
              <div
                className="accordion active border-b border-gray-200 pb-8"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    How can I request a service appointment?
                  </h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content active w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I reset my password?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I delete my account?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
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
                className="accordion active border-b border-gray-200 pb-8"
                id="basic-heading-one-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-one-with-arrow-always-open"
                >
                  <h5 className="text-start">
                    Are there any additional fees for your services?
                  </h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-one-with-arrow-always-open"
                  className="accordion-content active w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-one-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-two-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-two-with-arrow-always-open"
                >
                  <h5 className="text-start">How do I delete my account?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-two-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-two-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
                    It may also provide information on how to find the right
                    group or community that aligns with your interests or goals,
                    and offer tips for getting started and engaging effectively
                    within the group.
                  </p>
                </div>
              </div>
              <div
                className="accordion border-b border-gray-200 pb-8"
                id="basic-heading-three-with-arrow-always-open"
              >
                <button
                  className="accordion-toggle group always-open inline-flex w-full items-center justify-between gap-5 text-2xl leading-9 font-medium text-black text-gray-900 transition duration-500"
                  aria-controls="basic-collapse-three-with-arrow-always-open"
                >
                  <h5 className="text-start">How can I change my password?</h5>
                  <a className="pointer-events-none">{/* SVG removed */}</a>
                </button>
                <div
                  id="basic-collapse-three-with-arrow-always-open"
                  className="accordion-content w-full overflow-hidden px-0"
                  aria-labelledby="basic-heading-three-with-arrow-always-open"
                >
                  <p className="pt-3 text-base font-normal text-gray-500">
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
  )
}
