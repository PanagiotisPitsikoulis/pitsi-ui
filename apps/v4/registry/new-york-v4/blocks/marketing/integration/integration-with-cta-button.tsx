export default function IntegrationWithCtaButton() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-7 lg:gap-11">
          <div className="flex w-full flex-col items-center justify-between gap-7 md:flex-row lg:gap-12">
            <div className="inline-flex flex-col items-center justify-center gap-2.5 md:items-start">
              <h2 className="font-manrope text-3xl leading-normal font-bold text-gray-900">
                Integrations
              </h2>
              <p className="text-center text-base leading-relaxed font-normal text-gray-500 md:text-start">
                Over 250 top applications can be effortlessly integrated with
                Segment.
              </p>
            </div>
            <button className="flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-blue-800">
              <span className="px-2 py-px text-base leading-relaxed font-semibold whitespace-nowrap text-white">
                ALL INTEGRATION
              </span>
              <div className="relative h-5 w-5"></div>
            </button>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-6 md:flex-row">
            <div className="inline-flex w-full flex-col items-center justify-start gap-3 rounded-2xl border border-gray-200 p-6 transition-all duration-700 ease-in-out hover:border-indigo-600 hover:bg-blue-50">
              <a href="#"></a>
              <h5 className="text-center text-base leading-relaxed font-semibold text-gray-900">
                Slack
              </h5>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start gap-3 rounded-2xl border border-gray-200 p-6 transition-all duration-700 ease-in-out hover:border-indigo-600 hover:bg-blue-50">
              <a href="#"></a>
              <h5 className="text-center text-base leading-relaxed font-semibold text-gray-900">
                GitLab
              </h5>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start gap-3 rounded-2xl border border-gray-200 p-6 transition-all duration-700 ease-in-out hover:border-indigo-600 hover:bg-blue-50">
              <a href="#"></a>
              <h5 className="text-center text-base leading-relaxed font-semibold text-gray-900">
                Sketch
              </h5>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start gap-3 rounded-2xl border border-gray-200 p-6 transition-all duration-700 ease-in-out hover:border-indigo-600 hover:bg-blue-50">
              <a href="#"></a>
              <h5 className="text-center text-base leading-relaxed font-semibold text-gray-900">
                Zapier
              </h5>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start gap-3 rounded-2xl border border-gray-200 p-6 transition-all duration-700 ease-in-out hover:border-indigo-600 hover:bg-blue-50">
              <a href="#"></a>
              <h5 className="text-center text-base leading-relaxed font-semibold text-gray-900">
                Discord
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
