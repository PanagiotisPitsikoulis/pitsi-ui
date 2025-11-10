export default function VerticalIntegrationsList() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10">
          <div className="flex flex-col items-center justify-start gap-8 lg:flex-row lg:gap-12">
            <div className="inline-flex flex-col items-start justify-center gap-2.5">
              <h2 className="font-manrope w-full text-center text-3xl leading-normal font-bold text-gray-900 lg:text-start">
                Integrate Your Key Apps
              </h2>
              <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
                Integrate your essential applications seamlessly, creating a
                cohesive digital ecosystem tailored to your needs. By linking
                these key apps, you establish a unified workflow, ensuring
                smoother data exchange and enhanced collaboration among your
                preferred tools.
              </p>
            </div>
            <button className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-gray-700 to-gray-500 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:from-gray-800 hover:to-gray-600 sm:w-fit">
              <span className="px-1.5 text-sm leading-6 font-medium whitespace-nowrap text-white">
                All Integration
              </span>
            </button>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-6">
            <div className="flex w-full flex-col items-start justify-center gap-6">
              <div className="group flex w-full flex-col items-start justify-center gap-3.5 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-700 ease-in-out hover:border-gray-700 hover:bg-gray-50">
                <div className="inline-flex items-center justify-start gap-2">
                  {/* SVG removed */}
                  <h4 className="text-lg leading-8 font-medium text-gray-900">
                    Slack
                  </h4>
                </div>
                <p className="text-xs leading-5 font-normal text-gray-400 transition-all duration-700 ease-in-out group-hover:text-gray-600">
                  The Slack app enhances team collaboration by providing
                  real-time messaging, file sharing, and integration with
                  numerous tools.
                </p>
              </div>
              <div className="group flex w-full flex-col items-start justify-center gap-3.5 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-700 ease-in-out hover:border-gray-700 hover:bg-gray-50">
                <div className="inline-flex items-center justify-start gap-2">
                  {/* SVG removed */}
                  <h4 className="text-lg leading-8 font-medium text-gray-900">
                    Gmail
                  </h4>
                </div>
                <p className="text-xs leading-5 font-normal text-gray-400 transition-all duration-700 ease-in-out group-hover:text-gray-600">
                  The Gmail app offers convenient access to email, allowing
                  users to manage their inbox, send messages, and integrate with
                  other Google services on the go.
                </p>
              </div>
              <div className="group flex w-full flex-col items-start justify-center gap-3.5 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-700 ease-in-out hover:border-gray-700 hover:bg-gray-50">
                <div className="inline-flex items-center justify-start gap-2">
                  {/* SVG removed */}
                  <h4 className="text-lg leading-8 font-medium text-gray-900">
                    Zapier
                  </h4>
                </div>
                <p className="text-xs leading-5 font-normal text-gray-400 transition-all duration-700 ease-in-out group-hover:text-gray-600">
                  The Zapier app automates workflows by connecting your favorite
                  apps and services to streamline repetitive tasks and boost
                  productivity.
                </p>
              </div>
              <div className="group flex w-full flex-col items-start justify-center gap-3.5 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-700 ease-in-out hover:border-gray-700 hover:bg-gray-50">
                <div className="inline-flex items-center justify-start gap-2">
                  {/* SVG removed */}
                  <h4 className="text-lg leading-8 font-medium text-gray-900">
                    Dropbox
                  </h4>
                </div>
                <p className="text-xs leading-5 font-normal text-gray-400 transition-all duration-700 ease-in-out group-hover:text-gray-600">
                  The Dropbox app offers secure cloud storage and file sharing,
                  allowing users to easily access their documents from any
                  device, anywhere.
                </p>
              </div>
              <div className="group flex w-full flex-col items-start justify-center gap-3.5 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-700 ease-in-out hover:border-gray-700 hover:bg-gray-50">
                <div className="inline-flex items-center justify-start gap-2">
                  {/* SVG removed */}
                  <h4 className="text-lg leading-8 font-medium text-gray-900">
                    Notion
                  </h4>
                </div>
                <p className="text-xs leading-5 font-normal text-gray-400 transition-all duration-700 ease-in-out group-hover:text-gray-600">
                  The Notion app combines note-taking, project management, and
                  collaboration tools in one platform, helping teams and
                  inpiduals stay organized and productive.
                </p>
              </div>
              <div className="group flex w-full flex-col items-start justify-center gap-3.5 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-700 ease-in-out hover:border-gray-700 hover:bg-gray-50">
                <div className="inline-flex items-center justify-start gap-2">
                  {/* SVG removed */}
                  <h4 className="text-lg leading-8 font-medium text-gray-900">
                    Amazon
                  </h4>
                </div>
                <p className="text-xs leading-5 font-normal text-gray-400 transition-all duration-700 ease-in-out group-hover:text-gray-600">
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
  )
}
