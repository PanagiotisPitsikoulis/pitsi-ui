export default function VerticalHowItWorksCards() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
          <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Begin Your Journey in Just Three Steps
          </h2>
          <div className="w-full flex-col justify-start items-center gap-8 flex">
            <div className="w-full p-4 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-center items-start gap-3 flex">
              <span className="text-gray-900 text-base font-medium leading-relaxed">
                Process 1
              </span>
              <div className="w-full flex-col justify-start items-start gap-1 flex">
                <h4 className="text-gray-900 text-xl font-semibold leading-8">
                  Explore Localities
                </h4>
                <p className="text-gray-400 text-base font-normal leading-relaxed">
                  helps you discover the perfect neighborhood by providing
                  insights into amenities, community vibes, and housing options.
                  Make informed decisions about where to settle down by
                  examining factors like schools, transportation, and
                  recreational facilities.
                </p>
              </div>
            </div>
            <div className="w-full p-4 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-center gap-3 flex">
              <div className="flex-col justify-start items-start gap-3 inline-flex">
                <span className="text-gray-900 text-base font-medium leading-relaxed">
                  Process 2
                </span>
                <div className="w-full flex-col justify-start items-start gap-1 flex">
                  <h4 className="text-gray-900 text-xl font-semibold leading-8">
                    Quick Valuation
                  </h4>
                  <p className="text-gray-400 text-base font-normal leading-relaxed">
                    offers a rapid assessment of your assets' worth, providing
                    instant insights to inform your financial decisions. With
                    our efficient process, you'll gain clarity on the value of
                    your investments in no time.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-4 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-center gap-3 flex">
              <div className="flex-col justify-start items-start gap-3 inline-flex">
                <span className="text-gray-900 text-base font-medium leading-relaxed">
                  Process 3
                </span>
                <div className="w-full flex-col justify-start items-start gap-1 flex">
                  <h4 className="text-gray-900 text-xl font-semibold leading-8">
                    Track Property
                  </h4>
                  <p className="text-gray-400 text-base font-normal leading-relaxed">
                    empowers you to monitor your real estate holdings with ease,
                    offering real-time updates on property values, maintenance
                    schedules, and rental income. Stay informed and in control
                    of your assets effortlessly with our intuitive tracking
                    system.
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
