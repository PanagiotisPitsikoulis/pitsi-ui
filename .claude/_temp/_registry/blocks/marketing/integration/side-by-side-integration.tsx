export default function SideBySideIntegration() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-10 gap-8 inline-flex">
          <div className="flex-col justify-center items-center gap-2.5 flex">
            <h2 className="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">
              Connect All Your Favorite Apps
            </h2>
            <p className="max-w-lg text-center text-gray-500 text-sm font-normal leading-snug">
              Bridge all your preferred applications seamlessly. Connect
              effortlessly with all your favorite apps for streamlined
              operations.
            </p>
          </div>
          <div className="w-full flex-col justify-start items-center gap-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div className="w-full p-0.5 hover:bg-gradient-to-tr rounded-2xl transition-all duration-700 ease-in-out hover:from-indigo-600 hover:to-violet-500 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 flex-col justify-center items-start gap-6 inline-flex">
              <div className="bg-white p-5 rounded-xl flex-col justify-center items-start gap-3.5 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  {/* SVG removed */}
                  <h4 className="text-gray-900 text-lg font-medium leading-8">
                    Slack
                  </h4>
                </div>
                <p className="text-gray-400 text-xs font-normal leading-5">
                  The Slack app enhances team collaboration by providing
                  real-time messaging, file sharing, and integration with
                  numerous tools.
                </p>
              </div>
            </div>
            <div className="w-full p-0.5 hover:bg-gradient-to-tr rounded-2xl transition-all duration-700 ease-in-out hover:from-indigo-600 hover:to-violet-500 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 flex-col justify-center items-start gap-6 inline-flex">
              <div className="bg-white p-5 rounded-xl flex-col justify-center items-start gap-3.5 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  {/* SVG removed */}
                  <h4 className="text-gray-900 text-lg font-medium leading-8">
                    Gmail
                  </h4>
                </div>
                <p className="text-gray-400 text-xs font-normal leading-5">
                  The Gmail app offers convenient access to email, allowing
                  users to manage their inbox, send messages, and integrate with
                  other Google services on the go.
                </p>
              </div>
            </div>
            <div className="w-full p-0.5 hover:bg-gradient-to-tr rounded-2xl transition-all duration-700 ease-in-out hover:from-indigo-600 hover:to-violet-500 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 flex-col justify-center items-start gap-6 inline-flex">
              <div className="bg-white p-5 rounded-xl flex-col justify-center items-start gap-3.5 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  {/* SVG removed */}
                  <h4 className="text-gray-900 text-lg font-medium leading-8">
                    Amazon
                  </h4>
                </div>
                <p className="text-gray-400 text-xs font-normal leading-5">
                  The Amazon app enables users to shop for millions of products,
                  track orders, and access exclusive deals directly from their
                  mobile devices.
                </p>
              </div>
            </div>
            <div className="w-full p-0.5 hover:bg-gradient-to-tr rounded-2xl transition-all duration-700 ease-in-out hover:from-indigo-600 hover:to-violet-500 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 flex-col justify-center items-start gap-6 inline-flex">
              <div className="bg-white p-5 rounded-xl flex-col justify-center items-start gap-3.5 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  {/* SVG removed */}
                  <h4 className="text-gray-900 text-lg font-medium leading-8">
                    Zapier
                  </h4>
                </div>
                <p className="text-gray-400 text-xs font-normal leading-5">
                  The Zapier app automates workflows by connecting your favorite
                  apps and services to streamline repetitive tasks and boost
                  productivity.
                </p>
              </div>
            </div>
            <div className="w-full p-0.5 hover:bg-gradient-to-tr rounded-2xl transition-all duration-700 ease-in-out hover:from-indigo-600 hover:to-violet-500 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 flex-col justify-center items-start gap-6 inline-flex">
              <div className="bg-white p-5 rounded-xl flex-col justify-center items-start gap-3.5 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  {/* SVG removed */}
                  <h4 className="text-gray-900 text-lg font-medium leading-8">
                    Dropbox
                  </h4>
                </div>
                <p className="text-gray-400 text-xs font-normal leading-5">
                  The Dropbox app offers secure cloud storage and file sharing,
                  allowing users to easily access their documents from any
                  device, anywhere.
                </p>
              </div>
            </div>
            <div className="w-full p-0.5 hover:bg-gradient-to-tr rounded-2xl transition-all duration-700 ease-in-out hover:from-indigo-600 hover:to-violet-500 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 flex-col justify-center items-start gap-6 inline-flex">
              <div className="bg-white p-5 rounded-xl flex-col justify-center items-start gap-3.5 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  {/* SVG removed */}
                  <h4 className="text-gray-900 text-lg font-medium leading-8">
                    Notion
                  </h4>
                </div>
                <p className="text-gray-400 text-xs font-normal leading-5">
                  The Notion app combines note-taking, project management, and
                  collaboration tools in one platform, helping teams and
                  inpiduals stay organized and productive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
