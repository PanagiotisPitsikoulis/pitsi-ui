export default function TailwindCssFeaturesAsTabs() {
  return (
    <section className="pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mx-auto max-w-xl py-5 text-center text-4xl leading-[3.25rem] font-bold text-gray-900">
            Make your payment transaction
            <span className="bg-gradient-to-tr from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Easy
            </span>
            and
            <span className="bg-gradient-to-tr from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Professional
            </span>
          </h2>
        </div>
        <div className="mb-16">
          <div className="tabs">
            <div className="flex w-full items-center justify-center">
              <ul className="mb-9 flex flex-nowrap items-center justify-between gap-1 overflow-x-auto transition-all duration-300 lg:mb-16">
                <li>
                  <a
                    className="group tab-active:bg-gradient-to-tr tab-active:text-white tablink active mr-5 flex w-full items-center justify-center gap-4 rounded-2xl bg-white from-indigo-600 to-violet-600 px-6 py-5 text-base font-medium whitespace-nowrap text-gray-900 transition-all duration-500 hover:bg-gradient-to-tr hover:text-white lg:mr-0 lg:w-64 lg:py-9"
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
                    className="group tab-active:bg-gradient-to-tr tab-active:text-white tablink mr-5 flex w-full items-center justify-center gap-4 rounded-2xl bg-white from-indigo-600 to-violet-600 px-6 py-5 text-base font-medium whitespace-nowrap text-gray-900 transition-all duration-500 hover:bg-gradient-to-tr hover:text-white lg:mr-0 lg:w-64 lg:py-9"
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
                    className="group tab-active:bg-gradient-to-tr tab-active:text-white tablink mr-5 flex w-full items-center justify-center gap-4 rounded-2xl bg-white from-indigo-600 to-violet-600 px-6 py-5 text-base font-medium whitespace-nowrap text-gray-900 transition-all duration-500 hover:bg-gradient-to-tr hover:text-white lg:mr-0 lg:w-64 lg:py-9"
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
                    className="group tab-active:bg-gradient-to-tr tab-active:text-white tablink mr-5 flex w-full items-center justify-center gap-4 rounded-2xl bg-white from-indigo-600 to-violet-600 px-6 py-5 text-base font-medium whitespace-nowrap text-gray-900 transition-all duration-500 hover:bg-gradient-to-tr hover:text-white lg:mr-0 lg:w-64 lg:py-9"
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
                <p className="mx-auto mb-16 max-w-lg text-center leading-6 text-gray-500">
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
                className="tabcontent hidden"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-2"
              >
                <p className="mx-auto mb-16 max-w-lg text-center leading-6 text-gray-500">
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
                className="tabcontent hidden"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-3"
              >
                <p className="mx-auto mb-16 max-w-lg text-center leading-6 text-gray-500">
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
                className="tabcontent hidden"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-4"
              >
                <p className="mx-auto mb-16 max-w-lg text-center leading-6 text-gray-500">
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
  )
}
