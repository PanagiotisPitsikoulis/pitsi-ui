export default function FeatureSectionWithCardLayout() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full justify-start items-center lg:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div className="flex-col justify-center lg:items-start items-center lg:gap-5 gap-3 inline-flex">
            <div className="justify-start lg:items-start items-center inline-flex">
              <div className="px-2.5 py-0.5 bg-lime-50 rounded-full justify-start items-center gap-1.5 flex">
                <span className="text-center text-lime-600 text-xs font-medium leading-snug">
                  Features
                </span>
              </div>
            </div>
            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
              Discover Our Key Features
            </h2>
            <p className="text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
              Provides advanced features like time tracking, integrating with
              third party apps (calendar / Google drive), creating subtasks.{" "}
            </p>
          </div>
          <div className="flex-col justify-start xl:items-end gap-5 grid sm:grid-cols-2 grid-cols-1">
            <div className="group p-3 rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-center gap-3 flex">
              <div className="flex-col justify-start items-center gap-2 flex">
                <div className="w-[30px] h-[30px] justify-center items-center inline-flex">
                  {/* SVG removed */}
                </div>
                <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                  Developer Resources
                </h5>
              </div>
              <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                Downloads and documentation for popular AI and robotics SDKs,
                APIs, libraries, and simulation environments, with integration
                guides.
              </p>
            </div>
            <div className="group px-3 pt-4 pb-3 rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-center gap-3 flex">
              <div className="flex-col justify-start items-center gap-1.5 flex">
                <div className="w-[30px] h-[30px] relative">
                  {/* SVG removed */}
                </div>
                <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                  Project Showcase
                </h5>
              </div>
              <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                Interactive demos and case studies of AI-driven robotic
                projects. Explore real-world applications and access open-source
                repositories to see the.
              </p>
            </div>
            <div className="group p-3 rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-center gap-3 flex">
              <div className="flex-col justify-start items-center gap-2 flex">
                <div className="w-[30px] h-[30px] justify-center items-center inline-flex">
                  {/* SVG removed */}
                </div>
                <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                  Community Forum
                </h5>
              </div>
              <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                Discussion boards, collaborative projects, and hackathon info.
                Connect with fellow enthusiasts, contribute to projects, and
                participate in competitions to drive innovation.
              </p>
            </div>
            <div className="group p-3 rounded-lg border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-center gap-3 flex">
              <div className="flex-col justify-start items-center gap-1.5 flex">
                <div className="w-[30px] h-[30px] justify-center items-center inline-flex">
                  {/* SVG removed */}
                </div>
                <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                  Learning Hub
                </h5>
              </div>
              <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                Tutorials, courses, and webinars on AI-powered robotics. Gain
                hands-on experience and learn from industry experts to advance
                your skills in robotics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
