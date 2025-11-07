export default function FeatureTabBlocks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-center justify-start gap-3.5 pb-10 lg:pb-12">
          <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
            Automated Marketing Solutions
          </h2>
          <p className="w-full text-center text-lg leading-relaxed font-normal text-gray-500 lg:max-w-3xl">
            Streamline your marketing efforts with AI-powered tools for campaign
            automation, personalized content, performance analytics, and lead
            nurturing.
          </p>
        </div>
        <div>
          <div className="tabs">
            <div className="flex w-full items-center justify-center overflow-auto">
              <ul className="mb-3 flex w-full flex-nowrap items-center justify-between border-gray-200 p-1 transition-all duration-700 ease-in-out lg:mb-0 lg:rounded-full lg:border">
                <li className="w-full">
                  <a
                    className="group tab-active:rounded-full tab-active:bg-indigo-50 tab-active:text-indigo-600 tablink active flex w-full items-center justify-center rounded-lg bg-white px-7 py-2 text-base leading-7 font-medium whitespace-nowrap text-gray-900 transition-all duration-700 ease-in-out hover:rounded-full hover:bg-indigo-50 hover:text-indigo-600"
                    data-tab="tabs-with-pill-1"
                    role="tab"
                  >
                    Smart Campaigns
                  </a>
                </li>
                <li className="w-full">
                  <a
                    className="group tab-active:rounded-full tab-active:bg-indigo-50 tab-active:text-indigo-600 tablink flex w-full items-center justify-center rounded-lg bg-white px-7 py-2 text-base leading-7 font-medium whitespace-nowrap text-gray-900 transition-all duration-700 ease-in-out hover:rounded-full hover:bg-indigo-50 hover:text-indigo-600"
                    data-tab="tabs-with-pill-2"
                    role="tab"
                  >
                    Personalized Content
                  </a>
                </li>
                <li className="w-full">
                  <a
                    className="group tab-active:rounded-full tab-active:bg-indigo-50 tab-active:text-indigo-600 tablink flex w-full items-center justify-center rounded-lg bg-white px-7 py-2 text-base leading-7 font-medium whitespace-nowrap text-gray-900 transition-all duration-700 ease-in-out hover:rounded-full hover:bg-indigo-50 hover:text-indigo-600"
                    data-tab="tabs-with-pill-3"
                    role="tab"
                  >
                    Performance Analytics
                  </a>
                </li>
                <li className="w-full">
                  <a
                    className="group tab-active:rounded-full tab-active:bg-indigo-50 tab-active:text-indigo-600 tablink flex w-full items-center justify-center rounded-lg bg-white px-7 py-2 text-base leading-7 font-medium whitespace-nowrap text-gray-900 transition-all duration-700 ease-in-out hover:rounded-full hover:bg-indigo-50 hover:text-indigo-600"
                    data-tab="tabs-with-pill-4"
                    role="tab"
                  >
                    Lead Nurturing
                  </a>
                </li>
              </ul>
            </div>
            <div className="pt-10">
              <div
                id="tabs-with-pill-1"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-1"
                className="tabcontent"
              >
                <div className="flex w-full flex-col items-start justify-start gap-8 lg:flex-row">
                  <img
                    className="mx-auto rounded-3xl object-cover"
                    src="https://pagedone.io/asset/uploads/1720089477.png"
                    alt="feature Marketing Solutions image"
                  />
                  <div className="flex flex-col items-start justify-start gap-6 pt-2.5">
                    <div className="flex flex-col items-start justify-start gap-4">
                      <p className="text-sm leading-normal font-normal text-gray-500">
                        Leverage AI to create, manage, and optimize marketing
                        campaigns with precision targeting. Automate campaign
                        management, real-time adjustments, and data-driven
                        decisions to maximize engagement and ROI.
                      </p>
                      <p className="text-sm leading-normal font-normal text-gray-500">
                        Enhance customer interactions with personalized content
                        and streamline workflows for better efficiency and
                        results. Gain comprehensive insights through advanced
                        analytics and continuously improve strategies with
                        machine learning.
                      </p>
                    </div>
                    <div className="grid w-full grid-cols-1 items-start justify-start gap-5 md:grid-cols-3">
                      <div className="inline-flex h-full flex-col items-start justify-start gap-1.5 rounded-2xl bg-gray-50 p-3.5">
                        <h6 className="text-base leading-relaxed font-medium text-gray-900">
                          AI-Driven Targeting
                        </h6>
                        <p className="text-sm leading-normal font-normal text-gray-500">
                          Precisely target your ideal audience using advanced AI
                          algorithms.
                        </p>
                      </div>
                      <div className="inline-flex h-full flex-col items-start justify-start gap-1.5 rounded-2xl bg-gray-50 p-3.5">
                        <h6 className="text-base leading-relaxed font-medium text-gray-900">
                          Data-Driven Insights
                        </h6>
                        <p className="text-sm leading-normal font-normal text-gray-500">
                          Gain insights and make informed decisions with
                          comprehensive analytics.
                        </p>
                      </div>
                      <div className="inline-flex h-full flex-col items-start justify-start gap-1.5 rounded-2xl bg-gray-50 p-3.5">
                        <h6 className="text-base leading-relaxed font-medium text-gray-900">
                          Real-Time Optimization
                        </h6>
                        <p className="text-sm leading-normal font-normal text-gray-500">
                          Continuously improve results with real-time
                          performance adjustments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="tabs-with-pill-2"
                className="tabcontent hidden"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-2"
              >
                <div className="flex w-full flex-col items-start justify-start gap-8 lg:flex-row">
                  <img
                    className="mx-auto rounded-3xl object-cover"
                    src="https://pagedone.io/asset/uploads/1720089477.png"
                    alt="feature Marketing Solutions image"
                  />
                  <div className="flex flex-col items-start justify-start gap-6 pt-2.5">
                    <div className="flex flex-col items-start justify-start gap-4">
                      <p className="text-sm leading-normal font-normal text-gray-500">
                        Leverage AI to create, manage, and optimize marketing
                        campaigns with precision targeting. Automate campaign
                        management, real-time adjustments, and data-driven
                        decisions to maximize engagement and ROI.
                      </p>
                      <p className="text-sm leading-normal font-normal text-gray-500">
                        Enhance customer interactions with personalized content
                        and streamline workflows for better efficiency and
                        results. Gain comprehensive insights through advanced
                        analytics and continuously improve strategies with
                        machine learning.
                      </p>
                    </div>
                    <div className="grid w-full grid-cols-1 items-start justify-start gap-5 md:grid-cols-3">
                      <div className="inline-flex h-full flex-col items-start justify-start gap-1.5 rounded-2xl bg-gray-50 p-3.5">
                        <h6 className="text-base leading-relaxed font-medium text-gray-900">
                          AI-Driven Targeting
                        </h6>
                        <p className="text-sm leading-normal font-normal text-gray-500">
                          Precisely target your ideal audience using advanced AI
                          algorithms.
                        </p>
                      </div>
                      <div className="inline-flex h-full flex-col items-start justify-start gap-1.5 rounded-2xl bg-gray-50 p-3.5">
                        <h6 className="text-base leading-relaxed font-medium text-gray-900">
                          Data-Driven Insights
                        </h6>
                        <p className="text-sm leading-normal font-normal text-gray-500">
                          Gain insights and make informed decisions with
                          comprehensive analytics.
                        </p>
                      </div>
                      <div className="inline-flex h-full flex-col items-start justify-start gap-1.5 rounded-2xl bg-gray-50 p-3.5">
                        <h6 className="text-base leading-relaxed font-medium text-gray-900">
                          Real-Time Optimization
                        </h6>
                        <p className="text-sm leading-normal font-normal text-gray-500">
                          Continuously improve results with real-time
                          performance adjustments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="tabs-with-pill-3"
                className="tabcontent hidden"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-3"
              >
                <div className="flex w-full flex-col items-start justify-start gap-8 lg:flex-row">
                  <img
                    className="mx-auto rounded-3xl object-cover"
                    src="https://pagedone.io/asset/uploads/1720089477.png"
                    alt="feature Marketing Solutions image"
                  />
                  <div className="flex flex-col items-start justify-start gap-6 pt-2.5">
                    <div className="flex flex-col items-start justify-start gap-4">
                      <p className="text-sm leading-normal font-normal text-gray-500">
                        Leverage AI to create, manage, and optimize marketing
                        campaigns with precision targeting. Automate campaign
                        management, real-time adjustments, and data-driven
                        decisions to maximize engagement and ROI.
                      </p>
                      <p className="text-sm leading-normal font-normal text-gray-500">
                        Enhance customer interactions with personalized content
                        and streamline workflows for better efficiency and
                        results. Gain comprehensive insights through advanced
                        analytics and continuously improve strategies with
                        machine learning.
                      </p>
                    </div>
                    <div className="grid w-full grid-cols-1 items-start justify-start gap-5 md:grid-cols-3">
                      <div className="inline-flex h-full flex-col items-start justify-start gap-1.5 rounded-2xl bg-gray-50 p-3.5">
                        <h6 className="text-base leading-relaxed font-medium text-gray-900">
                          AI-Driven Targeting
                        </h6>
                        <p className="text-sm leading-normal font-normal text-gray-500">
                          Precisely target your ideal audience using advanced AI
                          algorithms.
                        </p>
                      </div>
                      <div className="inline-flex h-full flex-col items-start justify-start gap-1.5 rounded-2xl bg-gray-50 p-3.5">
                        <h6 className="text-base leading-relaxed font-medium text-gray-900">
                          Data-Driven Insights
                        </h6>
                        <p className="text-sm leading-normal font-normal text-gray-500">
                          Gain insights and make informed decisions with
                          comprehensive analytics.
                        </p>
                      </div>
                      <div className="inline-flex h-full flex-col items-start justify-start gap-1.5 rounded-2xl bg-gray-50 p-3.5">
                        <h6 className="text-base leading-relaxed font-medium text-gray-900">
                          Real-Time Optimization
                        </h6>
                        <p className="text-sm leading-normal font-normal text-gray-500">
                          Continuously improve results with real-time
                          performance adjustments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="tabs-with-pill-4"
                className="tabcontent hidden"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-4"
              >
                <div className="flex w-full flex-col items-start justify-start gap-8 lg:flex-row">
                  <img
                    className="mx-auto rounded-3xl object-cover"
                    src="https://pagedone.io/asset/uploads/1720089477.png"
                    alt="feature Marketing Solutions image"
                  />
                  <div className="flex flex-col items-start justify-start gap-6 pt-2.5">
                    <div className="flex flex-col items-start justify-start gap-4">
                      <p className="text-sm leading-normal font-normal text-gray-500">
                        Leverage AI to create, manage, and optimize marketing
                        campaigns with precision targeting. Automate campaign
                        management, real-time adjustments, and data-driven
                        decisions to maximize engagement and ROI.
                      </p>
                      <p className="text-sm leading-normal font-normal text-gray-500">
                        Enhance customer interactions with personalized content
                        and streamline workflows for better efficiency and
                        results. Gain comprehensive insights through advanced
                        analytics and continuously improve strategies with
                        machine learning.
                      </p>
                    </div>
                    <div className="grid w-full grid-cols-1 items-start justify-start gap-5 md:grid-cols-3">
                      <div className="inline-flex h-full flex-col items-start justify-start gap-1.5 rounded-2xl bg-gray-50 p-3.5">
                        <h6 className="text-base leading-relaxed font-medium text-gray-900">
                          AI-Driven Targeting
                        </h6>
                        <p className="text-sm leading-normal font-normal text-gray-500">
                          Precisely target your ideal audience using advanced AI
                          algorithms.
                        </p>
                      </div>
                      <div className="inline-flex h-full flex-col items-start justify-start gap-1.5 rounded-2xl bg-gray-50 p-3.5">
                        <h6 className="text-base leading-relaxed font-medium text-gray-900">
                          Data-Driven Insights
                        </h6>
                        <p className="text-sm leading-normal font-normal text-gray-500">
                          Gain insights and make informed decisions with
                          comprehensive analytics.
                        </p>
                      </div>
                      <div className="inline-flex h-full flex-col items-start justify-start gap-1.5 rounded-2xl bg-gray-50 p-3.5">
                        <h6 className="text-base leading-relaxed font-medium text-gray-900">
                          Real-Time Optimization
                        </h6>
                        <p className="text-sm leading-normal font-normal text-gray-500">
                          Continuously improve results with real-time
                          performance adjustments.
                        </p>
                      </div>
                    </div>
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
