export default function IntegrationListWithDescription() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="grid w-full grid-cols-1 items-center justify-start gap-10 lg:grid-cols-2 lg:gap-24">
          <div className="inline-flex flex-col items-start justify-start gap-8 lg:gap-10">
            <div className="flex flex-col items-center justify-start gap-2.5 lg:items-start">
              <h2 className="font-manrope text-center text-3xl leading-normal font-bold text-gray-900 lg:text-start">
                The Synergy of Integration: Streamlining Workflows
              </h2>
              <p className="text-center text-sm leading-snug font-normal text-gray-500 lg:text-start">
                Workflow integrations automate and streamline business processes
                by connecting various tools and systems used in different stages
                of a workflow.
              </p>
            </div>
            <button className="mx-auto flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit lg:ml-0">
              <span className="px-2 text-lg leading-8 font-semibold text-white">
                Check all app
              </span>
            </button>
          </div>
          <div className="inline-flex w-full flex-col items-start justify-start gap-8">
            <div className="flex w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-700 ease-in-out hover:border-indigo-600">
              <div className="inline-flex items-center justify-start gap-5">
                <div className="flex h-[62px] w-[62px] items-center justify-center gap-1 rounded-xl border border-gray-200 p-3">
                  {/* SVG removed */}
                </div>
                <div className="inline-flex flex-col items-start justify-center gap-1.5">
                  <h4 className="text-lg leading-8 font-medium text-black">
                    Spotify
                  </h4>
                  <p className="text-sm leading-snug font-normal text-gray-600">
                    Spotify is a digital music streaming service that offers
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-700 ease-in-out hover:border-indigo-600">
              <div className="inline-flex w-full items-center justify-start gap-5">
                <div className="flex h-[62px] w-[62px] items-center justify-center gap-1 rounded-xl border border-gray-200 p-3">
                  {/* SVG removed */}
                </div>
                <div className="inline-flex flex-col items-start justify-center gap-1.5">
                  <h4 className="text-lg leading-8 font-medium text-black">
                    Mailchimp
                  </h4>
                  <p className="text-sm leading-snug font-normal text-gray-600">
                    Mailchimp is a digital music streaming service that offers
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-700 ease-in-out hover:border-indigo-600">
              <div className="inline-flex w-full items-center justify-start gap-5">
                <div className="flex h-[62px] w-[62px] items-center justify-center gap-1 rounded-xl border border-gray-200 p-3">
                  {/* SVG removed */}
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-1.5">
                  <h4 className="text-lg leading-8 font-medium text-black">
                    Youtube
                  </h4>
                  <p className="text-sm leading-snug font-normal text-gray-600">
                    YouTube is the world's largest video-sharing platform,{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-700 ease-in-out hover:border-indigo-600">
              <div className="inline-flex w-full items-center justify-start gap-5">
                <div className="flex h-[62px] w-[62px] items-center justify-center gap-1 rounded-xl border border-gray-200 p-3">
                  {/* SVG removed */}
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-1.5">
                  <h4 className="text-lg leading-8 font-medium text-black">
                    Google
                  </h4>
                  <p className="text-sm leading-snug font-normal text-gray-600">
                    Google is a cloud-based video conferencing platform that
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
