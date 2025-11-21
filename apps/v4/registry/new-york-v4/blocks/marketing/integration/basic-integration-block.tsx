export default function BasicIntegrationBlock() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-8 lg:gap-11">
          <div className="flex w-full flex-col items-center justify-start gap-2.5">
            <h2 className="font-manrope text-center text-3xl leading-normal font-bold text-gray-900">
              Integrations
            </h2>
            <p className="mx-auto max-w-4xl text-center text-lg leading-8 font-normal text-gray-500">
              Integrations refer to the process of combining different software
              systems or components to work together seamlessly. This involves
              connecting various applications.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-start gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex w-full items-center justify-center gap-2.5 rounded-2xl border border-gray-200 px-6 py-8 transition-all duration-700 ease-in-out hover:border-indigo-600">
              <div className="inline-flex flex-col items-center justify-start gap-3.5">
                <a href="#"></a>
                <h4 className="text-center text-lg leading-8 font-semibold text-gray-900">
                  Slack
                </h4>
                <p className="text-center text-sm leading-snug font-normal text-gray-500">
                  Slack is a cloud-based collaboration platform designed to
                  facilitate communication
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center gap-2.5 rounded-2xl border border-gray-200 px-6 py-8 transition-all duration-700 ease-in-out hover:border-indigo-600">
              <div className="inline-flex flex-col items-center justify-start gap-3.5">
                <a href="#"></a>
                <h4 className="text-center text-lg leading-8 font-semibold text-gray-900">
                  GitLab
                </h4>
                <p className="text-center text-sm leading-snug font-normal text-gray-500">
                  GitLab is a comprehensive DevOps platform that provides a
                  complete solution for the entire software{" "}
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center gap-2.5 rounded-2xl border border-gray-200 px-6 py-8 transition-all duration-700 ease-in-out hover:border-indigo-600">
              <div className="inline-flex flex-col items-center justify-start gap-3.5">
                <a href="#"></a>
                <h4 className="text-center text-lg leading-8 font-semibold text-gray-900">
                  Spotify
                </h4>
                <p className="text-center text-sm leading-snug font-normal text-gray-500">
                  Spotify is a digital music streaming service that offers users
                  access to millions of songs, podcasts
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center gap-2.5 rounded-2xl border border-gray-200 px-6 py-8 transition-all duration-700 ease-in-out hover:border-indigo-600">
              <div className="inline-flex flex-col items-center justify-start gap-3.5">
                <a className="flex h-10 w-10 items-center justify-center">
                  {/* SVG removed */}
                </a>
                <h4 className="text-center text-lg leading-8 font-semibold text-gray-900">
                  Storybook
                </h4>
                <p className="text-center text-sm leading-snug font-normal text-gray-500">
                  Storybook is an open-source tool for developing UI components
                  in isolation for React, Vue
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
