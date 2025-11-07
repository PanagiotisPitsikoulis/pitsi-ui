export default function FeatureTabBlocks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center gap-3.5 flex lg:pb-12 pb-10">
          <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Automated Marketing Solutions
          </h2>
          <p className="lg:max-w-3xl w-full text-center text-gray-500 text-lg font-normal leading-relaxed">
            Streamline your marketing efforts with AI-powered tools for campaign
            automation, personalized content, performance analytics, and lead
            nurturing.
          </p>
        </div>
        <div>
          <div className="tabs">
            <div className="flex w-full items-center justify-center overflow-auto">
              <ul className="w-full p-1 flex flex-nowrap items-center justify-between transition-all duration-700 ease-in-out lg:rounded-full lg:border border-gray-200 lg:mb-0 mb-3">
                <li className="w-full">
                  <a
                    className="group w-full flex items-center justify-center py-2 px-7 bg-white rounded-lg text-base font-medium text-gray-900 leading-7 transition-all duration-700 ease-in-out w-full hover:text-indigo-600 hover:bg-indigo-50 hover:rounded-full whitespace-nowrap tab-active:rounded-full tab-active:bg-indigo-50 tab-active:text-indigo-600 tablink active"
                    data-tab="tabs-with-pill-1"
                    role="tab"
                  >
                    Smart Campaigns
                  </a>
                </li>
                <li className="w-full">
                  <a
                    className="group w-full flex items-center justify-center py-2 px-7 bg-white rounded-lg text-base font-medium text-gray-900 leading-7 transition-all duration-700 ease-in-out w-full hover:text-indigo-600 hover:bg-indigo-50 hover:rounded-full whitespace-nowrap tab-active:rounded-full tab-active:bg-indigo-50 tab-active:text-indigo-600 tablink"
                    data-tab="tabs-with-pill-2"
                    role="tab"
                  >
                    Personalized Content
                  </a>
                </li>
                <li className="w-full">
                  <a
                    className="group w-full flex items-center justify-center py-2 px-7 bg-white rounded-lg text-base font-medium text-gray-900 leading-7 transition-all duration-700 ease-in-out w-full hover:text-indigo-600 hover:bg-indigo-50 hover:rounded-full whitespace-nowrap tab-active:rounded-full tab-active:bg-indigo-50 tab-active:text-indigo-600 tablink"
                    data-tab="tabs-with-pill-3"
                    role="tab"
                  >
                    Performance Analytics
                  </a>
                </li>
                <li className="w-full">
                  <a
                    className="group w-full flex items-center justify-center py-2 px-7 bg-white rounded-lg text-base font-medium text-gray-900 leading-7 transition-all duration-700 ease-in-out w-full hover:text-indigo-600 hover:bg-indigo-50 hover:rounded-full whitespace-nowrap tab-active:rounded-full tab-active:bg-indigo-50 tab-active:text-indigo-600 tablink"
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
                <div className="w-full justify-start items-start gap-8 flex lg:flex-row flex-col">
                  <img
                    className="mx-auto rounded-3xl object-cover"
                    src="https://pagedone.io/asset/uploads/1720089477.png"
                    alt="feature Marketing Solutions image"
                  />
                  <div className="pt-2.5 flex-col justify-start items-start gap-6 flex">
                    <div className="flex-col justify-start items-start gap-4 flex">
                      <p className="text-gray-500 text-sm font-normal leading-normal">
                        Leverage AI to create, manage, and optimize marketing
                        campaigns with precision targeting. Automate campaign
                        management, real-time adjustments, and data-driven
                        decisions to maximize engagement and ROI.
                      </p>
                      <p className="text-gray-500 text-sm font-normal leading-normal">
                        Enhance customer interactions with personalized content
                        and streamline workflows for better efficiency and
                        results. Gain comprehensive insights through advanced
                        analytics and continuously improve strategies with
                        machine learning.
                      </p>
                    </div>
                    <div className="w-full justify-start items-start gap-5 grid md:grid-cols-3 grid-cols-1">
                      <div className="h-full p-3.5 bg-gray-50 rounded-2xl flex-col justify-start items-start gap-1.5 inline-flex">
                        <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                          AI-Driven Targeting
                        </h6>
                        <p className="text-gray-500 text-sm font-normal leading-normal">
                          Precisely target your ideal audience using advanced AI
                          algorithms.
                        </p>
                      </div>
                      <div className="h-full p-3.5 bg-gray-50 rounded-2xl flex-col justify-start items-start gap-1.5 inline-flex">
                        <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                          Data-Driven Insights
                        </h6>
                        <p className="text-gray-500 text-sm font-normal leading-normal">
                          Gain insights and make informed decisions with
                          comprehensive analytics.
                        </p>
                      </div>
                      <div className="h-full p-3.5 bg-gray-50 rounded-2xl flex-col justify-start items-start gap-1.5 inline-flex">
                        <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                          Real-Time Optimization
                        </h6>
                        <p className="text-gray-500 text-sm font-normal leading-normal">
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
                className="hidden tabcontent"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-2"
              >
                <div className="w-full justify-start items-start gap-8 flex lg:flex-row flex-col">
                  <img
                    className="mx-auto rounded-3xl object-cover"
                    src="https://pagedone.io/asset/uploads/1720089477.png"
                    alt="feature Marketing Solutions image"
                  />
                  <div className="pt-2.5 flex-col justify-start items-start gap-6 flex">
                    <div className="flex-col justify-start items-start gap-4 flex">
                      <p className="text-gray-500 text-sm font-normal leading-normal">
                        Leverage AI to create, manage, and optimize marketing
                        campaigns with precision targeting. Automate campaign
                        management, real-time adjustments, and data-driven
                        decisions to maximize engagement and ROI.
                      </p>
                      <p className="text-gray-500 text-sm font-normal leading-normal">
                        Enhance customer interactions with personalized content
                        and streamline workflows for better efficiency and
                        results. Gain comprehensive insights through advanced
                        analytics and continuously improve strategies with
                        machine learning.
                      </p>
                    </div>
                    <div className="w-full justify-start items-start gap-5 grid md:grid-cols-3 grid-cols-1">
                      <div className="h-full p-3.5 bg-gray-50 rounded-2xl flex-col justify-start items-start gap-1.5 inline-flex">
                        <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                          AI-Driven Targeting
                        </h6>
                        <p className="text-gray-500 text-sm font-normal leading-normal">
                          Precisely target your ideal audience using advanced AI
                          algorithms.
                        </p>
                      </div>
                      <div className="h-full p-3.5 bg-gray-50 rounded-2xl flex-col justify-start items-start gap-1.5 inline-flex">
                        <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                          Data-Driven Insights
                        </h6>
                        <p className="text-gray-500 text-sm font-normal leading-normal">
                          Gain insights and make informed decisions with
                          comprehensive analytics.
                        </p>
                      </div>
                      <div className="h-full p-3.5 bg-gray-50 rounded-2xl flex-col justify-start items-start gap-1.5 inline-flex">
                        <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                          Real-Time Optimization
                        </h6>
                        <p className="text-gray-500 text-sm font-normal leading-normal">
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
                className="hidden tabcontent"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-3"
              >
                <div className="w-full justify-start items-start gap-8 flex lg:flex-row flex-col">
                  <img
                    className="mx-auto rounded-3xl object-cover"
                    src="https://pagedone.io/asset/uploads/1720089477.png"
                    alt="feature Marketing Solutions image"
                  />
                  <div className="pt-2.5 flex-col justify-start items-start gap-6 flex">
                    <div className="flex-col justify-start items-start gap-4 flex">
                      <p className="text-gray-500 text-sm font-normal leading-normal">
                        Leverage AI to create, manage, and optimize marketing
                        campaigns with precision targeting. Automate campaign
                        management, real-time adjustments, and data-driven
                        decisions to maximize engagement and ROI.
                      </p>
                      <p className="text-gray-500 text-sm font-normal leading-normal">
                        Enhance customer interactions with personalized content
                        and streamline workflows for better efficiency and
                        results. Gain comprehensive insights through advanced
                        analytics and continuously improve strategies with
                        machine learning.
                      </p>
                    </div>
                    <div className="w-full justify-start items-start gap-5 grid md:grid-cols-3 grid-cols-1">
                      <div className="h-full p-3.5 bg-gray-50 rounded-2xl flex-col justify-start items-start gap-1.5 inline-flex">
                        <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                          AI-Driven Targeting
                        </h6>
                        <p className="text-gray-500 text-sm font-normal leading-normal">
                          Precisely target your ideal audience using advanced AI
                          algorithms.
                        </p>
                      </div>
                      <div className="h-full p-3.5 bg-gray-50 rounded-2xl flex-col justify-start items-start gap-1.5 inline-flex">
                        <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                          Data-Driven Insights
                        </h6>
                        <p className="text-gray-500 text-sm font-normal leading-normal">
                          Gain insights and make informed decisions with
                          comprehensive analytics.
                        </p>
                      </div>
                      <div className="h-full p-3.5 bg-gray-50 rounded-2xl flex-col justify-start items-start gap-1.5 inline-flex">
                        <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                          Real-Time Optimization
                        </h6>
                        <p className="text-gray-500 text-sm font-normal leading-normal">
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
                className="hidden tabcontent"
                role="tabpanel"
                aria-labelledby="tabs-with-pill-item-4"
              >
                <div className="w-full justify-start items-start gap-8 flex lg:flex-row flex-col">
                  <img
                    className="mx-auto rounded-3xl object-cover"
                    src="https://pagedone.io/asset/uploads/1720089477.png"
                    alt="feature Marketing Solutions image"
                  />
                  <div className="pt-2.5 flex-col justify-start items-start gap-6 flex">
                    <div className="flex-col justify-start items-start gap-4 flex">
                      <p className="text-gray-500 text-sm font-normal leading-normal">
                        Leverage AI to create, manage, and optimize marketing
                        campaigns with precision targeting. Automate campaign
                        management, real-time adjustments, and data-driven
                        decisions to maximize engagement and ROI.
                      </p>
                      <p className="text-gray-500 text-sm font-normal leading-normal">
                        Enhance customer interactions with personalized content
                        and streamline workflows for better efficiency and
                        results. Gain comprehensive insights through advanced
                        analytics and continuously improve strategies with
                        machine learning.
                      </p>
                    </div>
                    <div className="w-full justify-start items-start gap-5 grid md:grid-cols-3 grid-cols-1">
                      <div className="h-full p-3.5 bg-gray-50 rounded-2xl flex-col justify-start items-start gap-1.5 inline-flex">
                        <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                          AI-Driven Targeting
                        </h6>
                        <p className="text-gray-500 text-sm font-normal leading-normal">
                          Precisely target your ideal audience using advanced AI
                          algorithms.
                        </p>
                      </div>
                      <div className="h-full p-3.5 bg-gray-50 rounded-2xl flex-col justify-start items-start gap-1.5 inline-flex">
                        <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                          Data-Driven Insights
                        </h6>
                        <p className="text-gray-500 text-sm font-normal leading-normal">
                          Gain insights and make informed decisions with
                          comprehensive analytics.
                        </p>
                      </div>
                      <div className="h-full p-3.5 bg-gray-50 rounded-2xl flex-col justify-start items-start gap-1.5 inline-flex">
                        <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                          Real-Time Optimization
                        </h6>
                        <p className="text-gray-500 text-sm font-normal leading-normal">
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
  );
}
