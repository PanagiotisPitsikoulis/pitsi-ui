export default function IntegrationListWithDescription() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center lg:gap-24 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div className="flex-col justify-start items-start lg:gap-10 gap-8 inline-flex">
            <div className="flex-col justify-start lg:items-start items-center gap-2.5 flex">
              <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal lg:text-start text-center">
                The Synergy of Integration: Streamlining Workflows
              </h2>
              <p className="text-gray-500 text-sm font-normal leading-snug lg:text-start text-center">
                Workflow integrations automate and streamline business processes
                by connecting various tools and systems used in different stages
                of a workflow.
              </p>
            </div>
            <button className="lg:ml-0 mx-auto sm:w-fit w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
              <span className="px-2 text-white text-lg font-semibold leading-8">
                Check all app
              </span>
            </button>
          </div>
          <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
            <div className="w-full p-5 bg-white rounded-xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 flex">
              <div className="justify-start items-center gap-5 inline-flex">
                <div className="w-[62px] h-[62px] p-3 rounded-xl border border-gray-200 justify-center items-center gap-1 flex">
                  {/* SVG removed */}
                </div>
                <div className="flex-col justify-center items-start gap-1.5 inline-flex">
                  <h4 className="text-black text-lg font-medium leading-8">
                    Spotify
                  </h4>
                  <p className="text-gray-600 text-sm font-normal leading-snug">
                    Spotify is a digital music streaming service that offers
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-5 bg-white rounded-xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 flex">
              <div className="w-full justify-start items-center gap-5 inline-flex">
                <div className="w-[62px] h-[62px] p-3 rounded-xl border border-gray-200 justify-center items-center gap-1 flex">
                  {/* SVG removed */}
                </div>
                <div className="flex-col justify-center items-start gap-1.5 inline-flex">
                  <h4 className="text-black text-lg font-medium leading-8">
                    Mailchimp
                  </h4>
                  <p className="text-gray-600 text-sm font-normal leading-snug">
                    Mailchimp is a digital music streaming service that offers
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-5 bg-white rounded-xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 flex">
              <div className="w-full justify-start items-center gap-5 inline-flex">
                <div className="w-[62px] h-[62px] p-3 rounded-xl border border-gray-200 justify-center items-center gap-1 flex">
                  {/* SVG removed */}
                </div>
                <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                  <h4 className="text-black text-lg font-medium leading-8">
                    Youtube
                  </h4>
                  <p className="text-gray-600 text-sm font-normal leading-snug">
                    YouTube is the world's largest video-sharing platform,{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-5 bg-white rounded-xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 flex">
              <div className="w-full justify-start items-center gap-5 inline-flex">
                <div className="w-[62px] h-[62px] p-3 rounded-xl border border-gray-200 justify-center items-center gap-1 flex">
                  {/* SVG removed */}
                </div>
                <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                  <h4 className="text-black text-lg font-medium leading-8">
                    Google
                  </h4>
                  <p className="text-gray-600 text-sm font-normal leading-snug">
                    Google is a cloud-based video conferencing platform that
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
