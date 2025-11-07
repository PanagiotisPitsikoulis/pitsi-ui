export default function IntegrationWithCtaButton() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-11 gap-7 inline-flex">
          <div className="w-full justify-between items-center lg:gap-12 gap-7 flex md:flex-row flex-col">
            <div className="flex-col justify-center md:items-start items-center gap-2.5 inline-flex">
              <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
                Integrations
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed md:text-start text-center">
                Over 250 top applications can be effortlessly integrated with
                Segment.
              </p>
            </div>
            <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-800 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed whitespace-nowrap">
                ALL INTEGRATION
              </span>
              <div className="w-5 h-5 relative"></div>
            </button>
          </div>
          <div className="w-full justify-start items-center gap-6 flex md:flex-row flex-col">
            <div className="w-full p-6 rounded-2xl border border-gray-200 hover:border-indigo-600 hover:bg-blue-50 transition-all duration-700 ease-in-out flex-col justify-start items-center gap-3 inline-flex">
              <a href="#"></a>
              <h5 className="text-center text-gray-900 text-base font-semibold leading-relaxed">
                Slack
              </h5>
            </div>
            <div className="w-full p-6 rounded-2xl border border-gray-200 hover:border-indigo-600 hover:bg-blue-50 transition-all duration-700 ease-in-out flex-col justify-start items-center gap-3 inline-flex">
              <a href="#"></a>
              <h5 className="text-center text-gray-900 text-base font-semibold leading-relaxed">
                GitLab
              </h5>
            </div>
            <div className="w-full p-6 rounded-2xl border border-gray-200 hover:border-indigo-600 hover:bg-blue-50 transition-all duration-700 ease-in-out flex-col justify-start items-center gap-3 inline-flex">
              <a href="#"></a>
              <h5 className="text-center text-gray-900 text-base font-semibold leading-relaxed">
                Sketch
              </h5>
            </div>
            <div className="w-full p-6 rounded-2xl border border-gray-200 hover:border-indigo-600 hover:bg-blue-50 transition-all duration-700 ease-in-out flex-col justify-start items-center gap-3 inline-flex">
              <a href="#"></a>
              <h5 className="text-center text-gray-900 text-base font-semibold leading-relaxed">
                Zapier
              </h5>
            </div>
            <div className="w-full p-6 rounded-2xl border border-gray-200 hover:border-indigo-600 hover:bg-blue-50 transition-all duration-700 ease-in-out flex-col justify-start items-center gap-3 inline-flex">
              <a href="#"></a>
              <h5 className="text-center text-gray-900 text-base font-semibold leading-relaxed">
                Discord
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
