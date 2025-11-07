export default function VerticalHowItWorksCards() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:gap-12">
          <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-gray-900">
            Begin Your Journey in Just Three Steps
          </h2>
          <div className="flex w-full flex-col items-center justify-start gap-8">
            <div className="flex w-full flex-col items-start justify-center gap-3 rounded-xl border border-gray-200 p-4 transition-all duration-700 ease-in-out hover:border-gray-400">
              <span className="text-base leading-relaxed font-medium text-gray-900">
                Process 1
              </span>
              <div className="flex w-full flex-col items-start justify-start gap-1">
                <h4 className="text-xl leading-8 font-semibold text-gray-900">
                  Explore Localities
                </h4>
                <p className="text-base leading-relaxed font-normal text-gray-400">
                  helps you discover the perfect neighborhood by providing
                  insights into amenities, community vibes, and housing options.
                  Make informed decisions about where to settle down by
                  examining factors like schools, transportation, and
                  recreational facilities.
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-start gap-3 rounded-xl border border-gray-200 p-4 transition-all duration-700 ease-in-out hover:border-gray-400">
              <div className="inline-flex flex-col items-start justify-start gap-3">
                <span className="text-base leading-relaxed font-medium text-gray-900">
                  Process 2
                </span>
                <div className="flex w-full flex-col items-start justify-start gap-1">
                  <h4 className="text-xl leading-8 font-semibold text-gray-900">
                    Quick Valuation
                  </h4>
                  <p className="text-base leading-relaxed font-normal text-gray-400">
                    offers a rapid assessment of your assets' worth, providing
                    instant insights to inform your financial decisions. With
                    our efficient process, you'll gain clarity on the value of
                    your investments in no time.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-start gap-3 rounded-xl border border-gray-200 p-4 transition-all duration-700 ease-in-out hover:border-gray-400">
              <div className="inline-flex flex-col items-start justify-start gap-3">
                <span className="text-base leading-relaxed font-medium text-gray-900">
                  Process 3
                </span>
                <div className="flex w-full flex-col items-start justify-start gap-1">
                  <h4 className="text-xl leading-8 font-semibold text-gray-900">
                    Track Property
                  </h4>
                  <p className="text-base leading-relaxed font-normal text-gray-400">
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
  )
}
