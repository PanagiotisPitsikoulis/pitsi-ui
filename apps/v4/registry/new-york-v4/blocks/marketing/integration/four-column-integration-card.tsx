export default function FourColumnIntegrationCard() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10">
          <div className="flex w-full flex-col items-start justify-center gap-2.5">
            <h2 className="font-manrope text-3xl leading-normal font-bold text-gray-900">
              Connect Your Top Apps
            </h2>
            <p className="text-base leading-relaxed font-normal text-gray-500">
              Sync up your main apps to make your work smoother, ensuring they
              all talk to each other well and help you get stuff done faster.
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-6">
            <div className="grid w-full grid-cols-1 items-center justify-start gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="inline-flex w-full flex-col items-center justify-start">
                <div className="flex w-full flex-col items-start justify-center gap-3.5 rounded-tl-lg rounded-tr-lg border border-gray-200 bg-white p-5 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)]">
                  <div className="inline-flex items-center justify-start gap-2">
                    {/* SVG removed */}
                    <h4 className="text-lg leading-8 font-medium text-gray-900">
                      Slack
                    </h4>
                  </div>
                  <p className="text-xs leading-5 font-normal text-gray-400">
                    The Slack app enhances team collaboration by providing
                    real-time messaging, file sharing, and integration with
                    numerous tools.
                  </p>
                </div>
                <a className="flex w-full items-center justify-center rounded-br-lg rounded-bl-lg border-r border-b border-l border-gray-200 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                  <div className="flex items-center justify-center px-1.5 py-px">
                    <div className="text-sm leading-snug font-medium text-blue-700">
                      Learn More
                    </div>
                  </div>
                </a>
              </div>
              <div className="inline-flex w-full flex-col items-center justify-start">
                <div className="flex w-full flex-col items-start justify-center gap-3.5 rounded-tl-lg rounded-tr-lg border border-gray-200 bg-white p-5 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)]">
                  <div className="inline-flex items-center justify-start gap-2">
                    {/* SVG removed */}
                    <h4 className="text-lg leading-8 font-medium text-gray-900">
                      Gmail
                    </h4>
                  </div>
                  <p className="text-xs leading-5 font-normal text-gray-400">
                    The Gmail app offers convenient access to email, allowing
                    users to manage their inbox, send messages, and integrate
                    with other Google services on the go.
                  </p>
                </div>
                <a className="inline-flex w-full items-start justify-start">
                  <div className="flex w-full items-center justify-center rounded-br-lg rounded-bl-lg border-r border-b border-l border-gray-200 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <div className="flex items-center justify-center px-1.5 py-px">
                      <div className="text-sm leading-snug font-medium text-blue-700">
                        Learn More
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="inline-flex w-full flex-col items-center justify-start">
                <div className="flex w-full flex-col items-start justify-center gap-3.5 rounded-tl-lg rounded-tr-lg border border-gray-200 bg-white p-5 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)]">
                  <div className="inline-flex items-center justify-start gap-2">
                    {/* SVG removed */}
                    <h4 className="text-lg leading-8 font-medium text-gray-900">
                      Amazone
                    </h4>
                  </div>
                  <p className="text-xs leading-5 font-normal text-gray-400">
                    The Amazon app enables users to shop for millions of
                    products, track orders, and access exclusive deals directly
                    from their mobile devices.
                  </p>
                </div>
                <a className="inline-flex w-full items-start justify-start">
                  <div className="flex w-full items-center justify-center rounded-br-lg rounded-bl-lg border-r border-b border-l border-gray-200 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <div className="flex items-center justify-center px-1.5 py-px">
                      <div className="text-sm leading-snug font-medium text-blue-700">
                        Learn More
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <a className="inline-flex w-full flex-col items-center justify-start">
                <div className="flex w-full flex-col items-start justify-center gap-3.5 rounded-tl-lg rounded-tr-lg border border-gray-200 bg-white p-5 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)]">
                  <div className="inline-flex items-center justify-start gap-2">
                    {/* SVG removed */}
                    <h4 className="text-lg leading-8 font-medium text-gray-900">
                      Zapier
                    </h4>
                  </div>
                  <p className="text-xs leading-5 font-normal text-gray-400">
                    The Zapier app automates workflows by connecting your
                    favorite apps and services to streamline repetitive tasks
                    and boost productivity.
                  </p>
                </div>
                <div className="inline-flex w-full items-start justify-start">
                  <div className="flex w-full items-center justify-center rounded-br-lg rounded-bl-lg border-r border-b border-l border-gray-200 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <div className="flex items-center justify-center px-1.5 py-px">
                      <div className="text-sm leading-snug font-medium text-blue-700">
                        Learn More
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="grid w-full grid-cols-1 items-center justify-start gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="inline-flex w-full flex-col items-center justify-start">
                <div className="flex w-full flex-col items-start justify-center gap-3.5 rounded-tl-lg rounded-tr-lg border border-gray-200 bg-white p-5 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)]">
                  <div className="inline-flex items-center justify-start gap-2">
                    {/* SVG removed */}
                    <h4 className="text-lg leading-8 font-medium text-gray-900">
                      Dropbox
                    </h4>
                  </div>
                  <p className="text-xs leading-5 font-normal text-gray-400">
                    The Dropbox app offers secure cloud storage and file
                    sharing, allowing users to easily access their documents
                    from any device, anywhere.
                  </p>
                </div>
                <a className="inline-flex w-full items-start justify-start">
                  <div className="flex w-full items-center justify-center rounded-br-lg rounded-bl-lg border-r border-b border-l border-gray-200 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <div className="flex items-center justify-center px-1.5 py-px">
                      <div className="text-sm leading-snug font-medium text-blue-700">
                        Learn More
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="inline-flex w-full flex-col items-center justify-start">
                <div className="flex w-full flex-col items-start justify-center gap-3.5 rounded-tl-lg rounded-tr-lg border border-gray-200 bg-white p-5 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)]">
                  <div className="inline-flex items-center justify-start gap-2">
                    {/* SVG removed */}
                    <h4 className="text-lg leading-8 font-medium text-gray-900">
                      Notion
                    </h4>
                  </div>
                  <p className="w-full text-xs leading-5 font-normal text-gray-400 xl:w-56">
                    The Notion app combines note-taking, project management, and
                    collaboration tools in one platform, helping teams and
                    individuals stay organized and productive.
                  </p>
                </div>
                <a className="inline-flex w-full items-start justify-start">
                  <div className="flex w-full items-center justify-center rounded-br-lg rounded-bl-lg border-r border-b border-l border-gray-200 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <div className="flex items-center justify-center px-1.5 py-px">
                      <div className="text-sm leading-snug font-medium text-blue-700">
                        Learn More
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="inline-flex w-full flex-col items-center justify-start">
                <div className="flex w-full flex-col items-start justify-center gap-3.5 rounded-tl-lg rounded-tr-lg border border-gray-200 bg-white p-5 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)]">
                  <div className="inline-flex items-center justify-start gap-2">
                    {/* SVG removed */}
                    <h4 className="text-lg leading-8 font-medium text-gray-900">
                      GitLab
                    </h4>
                  </div>
                  <p className="text-xs leading-5 font-normal text-gray-400">
                    The GitLab app facilitates efficient version control and
                    DevOps lifecycle management, enabling seamless collaboration
                    on code projects.
                  </p>
                </div>
                <a className="inline-flex w-full items-start justify-start">
                  <div className="flex w-full items-center justify-center rounded-br-lg rounded-bl-lg border-r border-b border-l border-gray-200 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <div className="flex items-center justify-center px-1.5 py-px">
                      <div className="text-sm leading-snug font-medium text-blue-700">
                        Learn More
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="inline-flex w-full flex-col items-center justify-start">
                <div className="flex w-full flex-col items-start justify-center gap-3.5 rounded-tl-lg rounded-tr-lg border border-gray-200 bg-white p-5 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)]">
                  <div className="inline-flex items-center justify-start gap-2">
                    {/* SVG removed */}
                    <h4 className="text-lg leading-8 font-medium text-gray-900">
                      GitHub
                    </h4>
                  </div>
                  <p className="text-xs leading-5 font-normal text-gray-400">
                    The GitHub app provides powerful version control and
                    collaborative coding features, streamlining project
                    management for developers.
                  </p>
                </div>
                <a className="inline-flex w-full items-start justify-start">
                  <div className="flex w-full items-center justify-center rounded-br-lg rounded-bl-lg border-r border-b border-l border-gray-200 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <div className="flex items-center justify-center px-1.5 py-px">
                      <div className="text-sm leading-snug font-medium text-blue-700">
                        Learn More
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 items-center justify-start gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="inline-flex w-full flex-col items-center justify-start">
                <div className="flex w-full flex-col items-start justify-center gap-3.5 rounded-tl-lg rounded-tr-lg border border-gray-200 bg-white p-5 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)]">
                  <div className="inline-flex items-center justify-start gap-2">
                    {/* SVG removed */}
                    <h4 className="text-lg leading-8 font-medium text-gray-900">
                      Sketch
                    </h4>
                  </div>
                  <p className="text-xs leading-5 font-normal text-gray-400">
                    The Sketch app provides powerful design tools and
                    collaborative features, making it easy to create and share
                    digital artwork and user interfaces.
                  </p>
                </div>
                <a className="inline-flex w-full items-start justify-start">
                  <div className="flex w-full items-center justify-center rounded-br-lg rounded-bl-lg border-r border-b border-l border-gray-200 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <div className="flex items-center justify-center px-1.5 py-px">
                      <div className="text-sm leading-snug font-medium text-blue-700">
                        Learn More
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="inline-flex w-full flex-col items-center justify-start">
                <div className="flex w-full flex-col items-start justify-center gap-3.5 rounded-tl-lg rounded-tr-lg border border-gray-200 bg-white p-5 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)]">
                  <div className="inline-flex items-center justify-start gap-2">
                    {/* SVG removed */}
                    <h4 className="text-lg leading-8 font-medium text-gray-900">
                      Discord
                    </h4>
                  </div>
                  <p className="text-xs leading-5 font-normal text-gray-400">
                    The Discord app offers voice, video, and text communication
                    for gamers and communities, fostering seamless interaction
                    and collaboration.
                  </p>
                </div>
                <a className="inline-flex w-full items-start justify-start">
                  <div className="flex w-full items-center justify-center rounded-br-lg rounded-bl-lg border-r border-b border-l border-gray-200 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <div className="flex items-center justify-center px-1.5 py-px">
                      <div className="text-sm leading-snug font-medium text-blue-700">
                        Learn More
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="inline-flex w-full flex-col items-center justify-start">
                <div className="flex w-full flex-col items-start justify-center gap-3.5 rounded-tl-lg rounded-tr-lg border border-gray-200 bg-white p-5 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)]">
                  <div className="inline-flex items-center justify-start gap-2">
                    {/* SVG removed */}
                    <h4 className="text-lg leading-8 font-medium text-gray-900">
                      Figma
                    </h4>
                  </div>
                  <p className="text-xs leading-5 font-normal text-gray-400">
                    The Figma app enables real-time collaboration on design
                    projects, allowing teams to create, share, and iterate on
                    interactive prototypes seamlessly.
                  </p>
                </div>
                <a className="inline-flex w-full items-start justify-start">
                  <div className="flex w-full items-center justify-center rounded-br-lg rounded-bl-lg border-r border-b border-l border-gray-200 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <div className="flex items-center justify-center px-1.5 py-px">
                      <div className="text-sm leading-snug font-medium text-blue-700">
                        Learn More
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="inline-flex w-full flex-col items-center justify-start">
                <div className="flex w-full flex-col items-start justify-center gap-3.5 rounded-tl-lg rounded-tr-lg border border-gray-200 bg-white p-5 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)]">
                  <div className="inline-flex items-center justify-start gap-2">
                    {/* SVG removed */}
                    <h4 className="text-lg leading-8 font-medium text-gray-900">
                      Shopify
                    </h4>
                  </div>
                  <p className="text-xs leading-5 font-normal text-gray-400">
                    The Shopify app allows users to manage their online stores,
                    process orders, and track sales directly from their mobile
                    devices.
                  </p>
                </div>
                <a className="inline-flex w-full items-start justify-start">
                  <div className="flex w-full items-center justify-center rounded-br-lg rounded-bl-lg border-r border-b border-l border-gray-200 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                    <div className="flex items-center justify-center px-1.5 py-px">
                      <div className="text-sm leading-snug font-medium text-blue-700">
                        Learn More
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
