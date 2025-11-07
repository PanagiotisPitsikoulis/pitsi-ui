export default function VerticalIntegrationsList() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center gap-10 inline-flex">
          <div className="justify-start items-center lg:gap-12 gap-8 flex lg:flex-row flex-col">
            <div className="flex-col justify-center items-start gap-2.5 inline-flex">
              <h2 className="w-full text-gray-900 text-3xl font-bold font-manrope leading-normal lg:text-start text-center">
                Integrate Your Key Apps
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Integrate your essential applications seamlessly, creating a
                cohesive digital ecosystem tailored to your needs. By linking
                these key apps, you establish a unified workflow, ensuring
                smoother data exchange and enhanced collaboration among your
                preferred tools.
              </p>
            </div>
            <button className="sm:w-fit w-full px-3.5 py-2 bg-gradient-to-r from-gray-700 hover:from-gray-800 hover:to-gray-600 transition-all duration-700 ease-in-out to-gray-500 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-1.5 text-white text-sm font-medium leading-6 whitespace-nowrap">
                All Integration
              </span>
            </button>
          </div>
          <div className="w-full flex-col justify-start items-center gap-6 flex">
            <div className="w-full flex-col justify-center items-start gap-6 flex">
              <div className="group w-full p-5 bg-white hover:bg-gray-50 transition-all duration-700 ease-in-out hover:border-gray-700 rounded-xl border border-gray-200 flex-col justify-center items-start gap-3.5 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  {/* SVG removed */}
                  <h4 className="text-gray-900 text-lg font-medium leading-8">
                    Slack
                  </h4>
                </div>
                <p className="text-gray-400 group-hover:text-gray-600 transition-all duration-700 ease-in-out text-xs font-normal leading-5">
                  The Slack app enhances team collaboration by providing
                  real-time messaging, file sharing, and integration with
                  numerous tools.
                </p>
              </div>
              <div className="group w-full p-5 bg-white hover:bg-gray-50 transition-all duration-700 ease-in-out hover:border-gray-700 rounded-xl border border-gray-200 flex-col justify-center items-start gap-3.5 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  {/* SVG removed */}
                  <h4 className="text-gray-900 text-lg font-medium leading-8">
                    Gmail
                  </h4>
                </div>
                <p className="text-gray-400 group-hover:text-gray-600 transition-all duration-700 ease-in-out text-xs font-normal leading-5">
                  The Gmail app offers convenient access to email, allowing
                  users to manage their inbox, send messages, and integrate with
                  other Google services on the go.
                </p>
              </div>
              <div className="group w-full p-5 bg-white hover:bg-gray-50 transition-all duration-700 ease-in-out hover:border-gray-700 rounded-xl border border-gray-200 flex-col justify-center items-start gap-3.5 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  {/* SVG removed */}
                  <h4 className="text-gray-900 text-lg font-medium leading-8">
                    Zapier
                  </h4>
                </div>
                <p className="text-gray-400 group-hover:text-gray-600 transition-all duration-700 ease-in-out text-xs font-normal leading-5">
                  The Zapier app automates workflows by connecting your favorite
                  apps and services to streamline repetitive tasks and boost
                  productivity.
                </p>
              </div>
              <div className="group w-full p-5 bg-white hover:bg-gray-50 transition-all duration-700 ease-in-out hover:border-gray-700 rounded-xl border border-gray-200 flex-col justify-center items-start gap-3.5 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  {/* SVG removed */}
                  <h4 className="text-gray-900 text-lg font-medium leading-8">
                    Dropbox
                  </h4>
                </div>
                <p className="text-gray-400 group-hover:text-gray-600 transition-all duration-700 ease-in-out text-xs font-normal leading-5">
                  The Dropbox app offers secure cloud storage and file sharing,
                  allowing users to easily access their documents from any
                  device, anywhere.
                </p>
              </div>
              <div className="group w-full p-5 bg-white hover:bg-gray-50 transition-all duration-700 ease-in-out hover:border-gray-700 rounded-xl border border-gray-200 flex-col justify-center items-start gap-3.5 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  {/* SVG removed */}
                  <h4 className="text-gray-900 text-lg font-medium leading-8">
                    Notion
                  </h4>
                </div>
                <p className="text-gray-400 group-hover:text-gray-600 transition-all duration-700 ease-in-out text-xs font-normal leading-5">
                  The Notion app combines note-taking, project management, and
                  collaboration tools in one platform, helping teams and
                  inpiduals stay organized and productive.
                </p>
              </div>
              <div className="group w-full p-5 bg-white hover:bg-gray-50 transition-all duration-700 ease-in-out hover:border-gray-700 rounded-xl border border-gray-200 flex-col justify-center items-start gap-3.5 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  {/* SVG removed */}
                  <h4 className="text-gray-900 text-lg font-medium leading-8">
                    Amazon
                  </h4>
                </div>
                <p className="text-gray-400 group-hover:text-gray-600 transition-all duration-700 ease-in-out text-xs font-normal leading-5">
                  The Amazon app enables users to shop for millions of products,
                  track orders, and access exclusive deals directly from their
                  mobile devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
