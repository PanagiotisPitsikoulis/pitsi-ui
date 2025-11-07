export default function FourColumnIntegrationCard() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center gap-10 inline-flex">
          <div className="w-full flex-col justify-center items-start gap-2.5 flex">
            <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
              Connect Your Top Apps
            </h2>
            <p className="text-gray-500 text-base font-normal leading-relaxed">
              Sync up your main apps to make your work smoother, ensuring they
              all talk to each other well and help you get stuff done faster.
            </p>
          </div>
          <div className="w-full flex-col justify-start items-center gap-6 flex">
            <div className="w-full justify-start items-center gap-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
              <div className="w-full flex-col justify-start items-center inline-flex">
                <div className="w-full p-5 bg-white rounded-tl-lg rounded-tr-lg shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 flex-col justify-center items-start gap-3.5 flex">
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
                <a className="w-full px-3.5 py-2 rounded-bl-lg rounded-br-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-l border-r border-b border-gray-200 justify-center items-center flex">
                  <div className="px-1.5 py-px justify-center items-center flex">
                    <div className="text-blue-700 text-sm font-medium leading-snug">
                      Learn More
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full flex-col justify-start items-center inline-flex">
                <div className="w-full p-5 bg-white rounded-tl-lg rounded-tr-lg shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 flex-col justify-center items-start gap-3.5 flex">
                  <div className="justify-start items-center gap-2 inline-flex">
                    {/* SVG removed */}
                    <h4 className="text-gray-900 text-lg font-medium leading-8">
                      Gmail
                    </h4>
                  </div>
                  <p className="text-gray-400 text-xs font-normal leading-5">
                    The Gmail app offers convenient access to email, allowing
                    users to manage their inbox, send messages, and integrate
                    with other Google services on the go.
                  </p>
                </div>
                <a className="w-full justify-start items-start inline-flex">
                  <div className="w-full px-3.5 py-2 rounded-bl-lg rounded-br-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-l border-r border-b border-gray-200 justify-center items-center flex">
                    <div className="px-1.5 py-px justify-center items-center flex">
                      <div className="text-blue-700 text-sm font-medium leading-snug">
                        Learn More
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full flex-col justify-start items-center inline-flex">
                <div className="w-full p-5 bg-white rounded-tl-lg rounded-tr-lg shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 flex-col justify-center items-start gap-3.5 flex">
                  <div className="justify-start items-center gap-2 inline-flex">
                    {/* SVG removed */}
                    <h4 className="text-gray-900 text-lg font-medium leading-8">
                      Amazone
                    </h4>
                  </div>
                  <p className="text-gray-400 text-xs font-normal leading-5">
                    The Amazon app enables users to shop for millions of
                    products, track orders, and access exclusive deals directly
                    from their mobile devices.
                  </p>
                </div>
                <a className="w-full justify-start items-start inline-flex">
                  <div className="w-full px-3.5 py-2 rounded-bl-lg rounded-br-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-l border-r border-b border-gray-200 justify-center items-center flex">
                    <div className="px-1.5 py-px justify-center items-center flex">
                      <div className="text-blue-700 text-sm font-medium leading-snug">
                        Learn More
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <a className="w-full flex-col justify-start items-center inline-flex">
                <div className="w-full p-5 bg-white rounded-tl-lg rounded-tr-lg shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 flex-col justify-center items-start gap-3.5 flex">
                  <div className="justify-start items-center gap-2 inline-flex">
                    {/* SVG removed */}
                    <h4 className="text-gray-900 text-lg font-medium leading-8">
                      Zapier
                    </h4>
                  </div>
                  <p className="text-gray-400 text-xs font-normal leading-5">
                    The Zapier app automates workflows by connecting your
                    favorite apps and services to streamline repetitive tasks
                    and boost productivity.
                  </p>
                </div>
                <div className="w-full justify-start items-start inline-flex">
                  <div className="w-full px-3.5 py-2 rounded-bl-lg rounded-br-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-l border-r border-b border-gray-200 justify-center items-center flex">
                    <div className="px-1.5 py-px justify-center items-center flex">
                      <div className="text-blue-700 text-sm font-medium leading-snug">
                        Learn More
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full justify-start items-center gap-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
              <div className="w-full flex-col justify-start items-center inline-flex">
                <div className="w-full p-5 bg-white rounded-tl-lg rounded-tr-lg shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 flex-col justify-center items-start gap-3.5 flex">
                  <div className="justify-start items-center gap-2 inline-flex">
                    {/* SVG removed */}
                    <h4 className="text-gray-900 text-lg font-medium leading-8">
                      Dropbox
                    </h4>
                  </div>
                  <p className="text-gray-400 text-xs font-normal leading-5">
                    The Dropbox app offers secure cloud storage and file
                    sharing, allowing users to easily access their documents
                    from any device, anywhere.
                  </p>
                </div>
                <a className="w-full justify-start items-start inline-flex">
                  <div className="w-full px-3.5 py-2 rounded-bl-lg rounded-br-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-l border-r border-b border-gray-200 justify-center items-center flex">
                    <div className="px-1.5 py-px justify-center items-center flex">
                      <div className="text-blue-700 text-sm font-medium leading-snug">
                        Learn More
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full flex-col justify-start items-center inline-flex">
                <div className="w-full p-5 bg-white rounded-tl-lg rounded-tr-lg shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 flex-col justify-center items-start gap-3.5 flex">
                  <div className="justify-start items-center gap-2 inline-flex">
                    {/* SVG removed */}
                    <h4 className="text-gray-900 text-lg font-medium leading-8">
                      Notion
                    </h4>
                  </div>
                  <p className="xl:w-56 w-full text-gray-400 text-xs font-normal leading-5">
                    The Notion app combines note-taking, project management, and
                    collaboration tools in one platform, helping teams and
                    individuals stay organized and productive.
                  </p>
                </div>
                <a className="w-full justify-start items-start inline-flex">
                  <div className="w-full px-3.5 py-2 rounded-bl-lg rounded-br-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-l border-r border-b border-gray-200 justify-center items-center flex">
                    <div className="px-1.5 py-px justify-center items-center flex">
                      <div className="text-blue-700 text-sm font-medium leading-snug">
                        Learn More
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full flex-col justify-start items-center inline-flex">
                <div className="w-full p-5 bg-white rounded-tl-lg rounded-tr-lg shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 flex-col justify-center items-start gap-3.5 flex">
                  <div className="justify-start items-center gap-2 inline-flex">
                    {/* SVG removed */}
                    <h4 className="text-gray-900 text-lg font-medium leading-8">
                      GitLab
                    </h4>
                  </div>
                  <p className="text-gray-400 text-xs font-normal leading-5">
                    The GitLab app facilitates efficient version control and
                    DevOps lifecycle management, enabling seamless collaboration
                    on code projects.
                  </p>
                </div>
                <a className="w-full justify-start items-start inline-flex">
                  <div className="w-full px-3.5 py-2 rounded-bl-lg rounded-br-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-l border-r border-b border-gray-200 justify-center items-center flex">
                    <div className="px-1.5 py-px justify-center items-center flex">
                      <div className="text-blue-700 text-sm font-medium leading-snug">
                        Learn More
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full flex-col justify-start items-center inline-flex">
                <div className="w-full p-5 bg-white rounded-tl-lg rounded-tr-lg shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 flex-col justify-center items-start gap-3.5 flex">
                  <div className="justify-start items-center gap-2 inline-flex">
                    {/* SVG removed */}
                    <h4 className="text-gray-900 text-lg font-medium leading-8">
                      GitHub
                    </h4>
                  </div>
                  <p className="text-gray-400 text-xs font-normal leading-5">
                    The GitHub app provides powerful version control and
                    collaborative coding features, streamlining project
                    management for developers.
                  </p>
                </div>
                <a className="w-full justify-start items-start inline-flex">
                  <div className="w-full px-3.5 py-2 rounded-bl-lg rounded-br-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-l border-r border-b border-gray-200 justify-center items-center flex">
                    <div className="px-1.5 py-px justify-center items-center flex">
                      <div className="text-blue-700 text-sm font-medium leading-snug">
                        Learn More
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full justify-start items-center gap-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
              <div className="w-full flex-col justify-start items-center inline-flex">
                <div className="w-full p-5 bg-white rounded-tl-lg rounded-tr-lg shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 flex-col justify-center items-start gap-3.5 flex">
                  <div className="justify-start items-center gap-2 inline-flex">
                    {/* SVG removed */}
                    <h4 className="text-gray-900 text-lg font-medium leading-8">
                      Sketch
                    </h4>
                  </div>
                  <p className="text-gray-400 text-xs font-normal leading-5">
                    The Sketch app provides powerful design tools and
                    collaborative features, making it easy to create and share
                    digital artwork and user interfaces.
                  </p>
                </div>
                <a className="w-full justify-start items-start inline-flex">
                  <div className="w-full px-3.5 py-2 rounded-bl-lg rounded-br-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-l border-r border-b border-gray-200 justify-center items-center flex">
                    <div className="px-1.5 py-px justify-center items-center flex">
                      <div className="text-blue-700 text-sm font-medium leading-snug">
                        Learn More
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full flex-col justify-start items-center inline-flex">
                <div className="w-full p-5 bg-white rounded-tl-lg rounded-tr-lg shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 flex-col justify-center items-start gap-3.5 flex">
                  <div className="justify-start items-center gap-2 inline-flex">
                    {/* SVG removed */}
                    <h4 className="text-gray-900 text-lg font-medium leading-8">
                      Discord
                    </h4>
                  </div>
                  <p className="text-gray-400 text-xs font-normal leading-5">
                    The Discord app offers voice, video, and text communication
                    for gamers and communities, fostering seamless interaction
                    and collaboration.
                  </p>
                </div>
                <a className="w-full justify-start items-start inline-flex">
                  <div className="w-full px-3.5 py-2 rounded-bl-lg rounded-br-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-l border-r border-b border-gray-200 justify-center items-center flex">
                    <div className="px-1.5 py-px justify-center items-center flex">
                      <div className="text-blue-700 text-sm font-medium leading-snug">
                        Learn More
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full flex-col justify-start items-center inline-flex">
                <div className="w-full p-5 bg-white rounded-tl-lg rounded-tr-lg shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 flex-col justify-center items-start gap-3.5 flex">
                  <div className="justify-start items-center gap-2 inline-flex">
                    {/* SVG removed */}
                    <h4 className="text-gray-900 text-lg font-medium leading-8">
                      Figma
                    </h4>
                  </div>
                  <p className="text-gray-400 text-xs font-normal leading-5">
                    The Figma app enables real-time collaboration on design
                    projects, allowing teams to create, share, and iterate on
                    interactive prototypes seamlessly.
                  </p>
                </div>
                <a className="w-full justify-start items-start inline-flex">
                  <div className="w-full px-3.5 py-2 rounded-bl-lg rounded-br-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-l border-r border-b border-gray-200 justify-center items-center flex">
                    <div className="px-1.5 py-px justify-center items-center flex">
                      <div className="text-blue-700 text-sm font-medium leading-snug">
                        Learn More
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="w-full flex-col justify-start items-center inline-flex">
                <div className="w-full p-5 bg-white rounded-tl-lg rounded-tr-lg shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 flex-col justify-center items-start gap-3.5 flex">
                  <div className="justify-start items-center gap-2 inline-flex">
                    {/* SVG removed */}
                    <h4 className="text-gray-900 text-lg font-medium leading-8">
                      Shopify
                    </h4>
                  </div>
                  <p className="text-gray-400 text-xs font-normal leading-5">
                    The Shopify app allows users to manage their online stores,
                    process orders, and track sales directly from their mobile
                    devices.
                  </p>
                </div>
                <a className="w-full justify-start items-start inline-flex">
                  <div className="w-full px-3.5 py-2 rounded-bl-lg rounded-br-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-l border-r border-b border-gray-200 justify-center items-center flex">
                    <div className="px-1.5 py-px justify-center items-center flex">
                      <div className="text-blue-700 text-sm font-medium leading-snug">
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
  );
}
