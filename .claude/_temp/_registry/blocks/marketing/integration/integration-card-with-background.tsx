export default function IntegrationCardWithBackground() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center gap-10 inline-flex">
          <div className="w-full justify-center items-center gap-5 flex md:flex-row flex-col">
            <h2 className="w-full text-gray-900 text-3xl font-bold font-manrope leading-normal md:text-start text-center">
              Connect Your Core Applications
            </h2>
            <p className="w-full text-gray-500 text-base font-normal leading-relaxed md:text-right text-center">
              Integrate your core applications to foster synergy and streamline
              processes, facilitating smoother operations and empowering your
              team to achieve more.
            </p>
          </div>
          <div className="w-full flex-col justify-start items-center gap-6 flex">
            <div className="w-full justify-start items-center gap-6 grid md:grid-cols-2 grid-cols-1">
              <div className="w-full h-full p-5 bg-gray-50 rounded-xl shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-4 inline-flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  {/* SVG removed */}
                  <h4 className="text-gray-900 text-lg font-medium leading-8">
                    Slack
                  </h4>
                </div>
                <p className="text-gray-500 text-xs font-normal leading-5">
                  Empowering teams with efficient communication, collaboration,
                  and seamless integration for enhanced productivity.
                </p>
              </div>
              <div className="w-full h-full p-5 bg-gray-50 rounded-xl shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-4 inline-flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  {/* SVG removed */}
                  <h4 className="text-gray-900 text-lg font-medium leading-8">
                    Sketch
                  </h4>
                </div>
                <p className="text-gray-500 text-xs font-normal leading-5">
                  A powerful design tool for creating and collaborating on
                  digital artwork and user interfaces with ease. Streamlining
                  digital design collaboration effortlessly.
                </p>
              </div>
            </div>
            <div className="w-full justify-start items-center gap-6 grid md:grid-cols-2 grid-cols-1">
              <div className="w-full h-full p-5 bg-gray-50 rounded-xl shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-4 inline-flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  {/* SVG removed */}
                  <h4 className="text-gray-900 text-lg font-medium leading-8">
                    GitLab
                  </h4>
                </div>
                <p className="text-gray-500 text-xs font-normal leading-5">
                  Your premier platform for streamlined version control,
                  collaboration, and development lifecycle management.
                </p>
              </div>
              <div className="w-full h-full p-5 bg-gray-50 rounded-xl shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-4 inline-flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  {/* SVG removed */}
                  <h4 className="text-gray-900 text-lg font-medium leading-8">
                    Zapier
                  </h4>
                </div>
                <p className="text-gray-500 text-xs font-normal leading-5">
                  Zapier streamlines tasks by linking your preferred apps,
                  automating workflows to enhance productivity and efficiency
                  with seamless integration.{" "}
                </p>
              </div>
            </div>
            <div className="w-full justify-start items-center gap-6 grid md:grid-cols-2 grid-cols-1">
              <div className="w-full h-full p-5 bg-gray-50 rounded-xl shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-4 inline-flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  {/* SVG removed */}
                  <h4 className="text-gray-900 text-lg font-medium leading-8">
                    Discord
                  </h4>
                </div>
                <p className="text-gray-500 text-xs font-normal leading-5">
                  Discord facilitates communication for gamers and communities
                  with its voice, video, and text features, fostering seamless
                  interaction and collaboration in a user-friendly platform.
                </p>
              </div>
              <div className="w-full h-full p-5 bg-gray-50 rounded-xl shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-4 inline-flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  {/* SVG removed */}
                  <h4 className="text-gray-900 text-lg font-medium leading-8">
                    Shopify
                  </h4>
                </div>
                <p className="text-gray-500 text-xs font-normal leading-5">
                  Empowering businesses with seamless online store management
                  tools to thrive in the digital marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
