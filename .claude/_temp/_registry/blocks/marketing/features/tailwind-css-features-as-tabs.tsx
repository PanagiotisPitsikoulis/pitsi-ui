export default function TailwindCssFeaturesAsTabs() {
  return (
    <section className="pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl text-center font-bold text-gray-900 py-5 max-w-xl leading-[3.25rem] mx-auto">
            Make your payment transaction
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-violet-600">
              Easy
            </span>
            and
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-violet-600">
              Professional
            </span>
          </h2>
        </div>
        <div className="mb-16">
          <div className="tabs">
            <div className="flex w-full items-center justify-center">
              <ul className="flex flex-nowrap gap-1 items-center justify-between transition-all duration-300 overflow-x-auto mb-9 lg:mb-16">
                <li>
                  <a
                    className="group flex items-center justify-center gap-4 py-5 lg:py-9 px-6 bg-white rounded-2xl text-base font-medium text-gray-900 transition-all duration-500 w-full lg:w-64 hover:text-white hover:bg-gradient-to-tr from-indigo-600 to-violet-600 whitespace-nowrap mr-5 lg:mr-0 tab-active:bg-gradient-to-tr tab-active:text-white   tablink active"
                    data-tab="tabs-with-pill-1"
                    role="tab"
                  >
                    <span className="text-indigo-600 transition-all duration-500 group-hover:text-white group-active:text-white">
                      {/* SVG removed */}
                    </span>
                    Release Confidently
                  </a>
                </li>
                <li>
                  <a
                    className="group flex items-center justify-center gap-4 py-5 lg:py-9 px-6 bg-white rounded-2xl text-base font-medium text-gray-900 transition-all duration-500 w-full lg:w-64 hover:text-white hover:bg-gradient-to-tr from-indigo-600 to-violet-600 whitespace-nowrap mr-5 lg:mr-0 tab-active:bg-gradient-to-tr tab-active:text-white   tablink "
                    data-tab="tabs-with-pill-2"
                    role="tab"
                  >
                    <span className="text-indigo-600 transition-all duration-500 group-hover:text-white group-active:text-white">
                      {/* SVG removed */}
                    </span>
                    Powerful Analytic
                  </a>
                </li>
                <li>
                  <a
                    className="group flex items-center justify-center gap-4 py-5 lg:py-9 px-6 bg-white rounded-2xl text-base font-medium text-gray-900 transition-all duration-500 w-full lg:w-64 hover:text-white hover:bg-gradient-to-tr from-indigo-600 to-violet-600 whitespace-nowrap mr-5 lg:mr-0 tab-active:bg-gradient-to-tr tab-active:text-white   tablink "
                    data-tab="tabs-with-pill-3"
                    role="tab"
                  >
                    <span className="text-indigo-600 transition-all duration-500 group-hover:text-white group-active:text-white">
                      {/* SVG removed */}
                    </span>
                    Live Project Report
                  </a>
                </li>
                <li>
                  <a
                    className="group flex items-center justify-center gap-4 py-5 lg:py-9 px-6 bg-white rounded-2xl text-base font-medium text-gray-900 transition-all duration-500 w-full lg:w-64 hover:text-white hover:bg-gradient-to-tr from-indigo-600 to-violet-600 whitespace-nowrap mr-5 lg:mr-0 tab-active:bg-gradient-to-tr tab-active:text-white   tablink "
                    data-tab="tabs-with-pill-4"
                    role="tab"
                  >
                    <span className="text-indigo-600 transition-all duration-500 group-hover:text-white group-active:text-white">
                      {/* SVG removed */}
                    </span>
                    Case Study
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-3">
              <div
                id="tabs-with-pill-1"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-1"
                className="tabcontent"
              >
                <p className="max-w-lg mx-auto text-center text-gray-500 leading-6 mb-16">
                  Trusted in more than 10 countries and 1 million customers.
                  Transact easily and quickly with just one click.
                </p>
                <div className="flex justify-center">
                  <img
                    src="https://pagedone.io/asset/uploads/1695030960.png"
                    alt="Dashboard image"
                    className="rounded-3xl object-cover"
                  />
                </div>
              </div>
              <div
                id="tabs-with-pill-2"
                className="hidden tabcontent"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-2"
              >
                <p className="max-w-lg mx-auto text-center text-gray-500 leading-6 mb-16">
                  Trusted in more than 25 countries and 2 million customers.
                  Transact easily and quickly with just one click.
                </p>
                <div className="flex justify-center">
                  <img
                    src="https://pagedone.io/asset/uploads/1695030960.png"
                    alt="Dashboard image"
                    className="rounded-3xl object-cover"
                  />
                </div>
              </div>
              <div
                id="tabs-with-pill-3"
                className="hidden tabcontent"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-3"
              >
                <p className="max-w-lg mx-auto text-center text-gray-500 leading-6 mb-16">
                  Trusted in more than 50 countries and 4 million customers.
                  Transact easily and quickly with just one click.
                </p>
                <div className="flex justify-center">
                  <img
                    src="https://pagedone.io/asset/uploads/1695030960.png"
                    alt="Dashboard image"
                    className="rounded-3xl object-cover"
                  />
                </div>
              </div>
              <div
                id="tabs-with-pill-4"
                className="hidden tabcontent"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-4"
              >
                <p className="max-w-lg mx-auto text-center text-gray-500 leading-6 mb-16">
                  Trusted in more than 100 countries and 5 million customers.
                  Transact easily and quickly with just one click.
                </p>
                <div className="flex justify-center">
                  <img
                    src="https://pagedone.io/asset/uploads/1695030960.png"
                    alt="Dashboard image"
                    className="rounded-3xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
