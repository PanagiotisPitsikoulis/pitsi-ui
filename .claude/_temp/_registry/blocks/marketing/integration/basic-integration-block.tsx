export default function BasicIntegrationBlock() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-11 gap-8 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-2.5 flex">
            <h2 className="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">
              Integrations
            </h2>
            <p className="max-w-4xl mx-auto text-center text-gray-500 text-lg font-normal leading-8">
              Integrations refer to the process of combining different software
              systems or components to work together seamlessly. This involves
              connecting various applications.
            </p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-start items-start gap-8">
            <div className="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex">
              <div className="flex-col justify-start items-center gap-3.5 inline-flex">
                <a href="#"></a>
                <h4 className="text-center text-gray-900 text-lg font-semibold leading-8">
                  Slack
                </h4>
                <p className="text-center text-gray-500 text-sm font-normal leading-snug">
                  Slack is a cloud-based collaboration platform designed to
                  facilitate communication
                </p>
              </div>
            </div>
            <div className="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex">
              <div className="flex-col justify-start items-center gap-3.5 inline-flex">
                <a href="#"></a>
                <h4 className="text-center text-gray-900 text-lg font-semibold leading-8">
                  GitLab
                </h4>
                <p className="text-center text-gray-500 text-sm font-normal leading-snug">
                  GitLab is a comprehensive DevOps platform that provides a
                  complete solution for the entire software{" "}
                </p>
              </div>
            </div>
            <div className="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex">
              <div className="flex-col justify-start items-center gap-3.5 inline-flex">
                <a href="#"></a>
                <h4 className="text-center text-gray-900 text-lg font-semibold leading-8">
                  Spotify
                </h4>
                <p className="text-center text-gray-500 text-sm font-normal leading-snug">
                  Spotify is a digital music streaming service that offers users
                  access to millions of songs, podcasts
                </p>
              </div>
            </div>
            <div className="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex">
              <div className="flex-col justify-start items-center gap-3.5 inline-flex">
                <a className="w-10 h-10 flex items-center justify-center">
                  {/* SVG removed */}
                </a>
                <h4 className="text-center text-gray-900 text-lg font-semibold leading-8">
                  Storybook
                </h4>
                <p className="text-center text-gray-500 text-sm font-normal leading-snug">
                  Storybook is an open-source tool for developing UI components
                  in isolation for React, Vue
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
