export default function FeatureSectionWithCardLayout() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center justify-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="inline-flex flex-col items-center justify-center gap-3 lg:items-start lg:gap-5">
            <div className="inline-flex items-center justify-start lg:items-start">
              <div className="flex items-center justify-start gap-1.5 rounded-full bg-lime-50 px-2.5 py-0.5">
                <span className="text-center text-xs leading-snug font-medium text-lime-600">
                  Features
                </span>
              </div>
            </div>
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
              Discover Our Key Features
            </h2>
            <p className="text-center text-lg leading-relaxed font-normal text-gray-500 lg:text-start">
              Provides advanced features like time tracking, integrating with
              third party apps (calendar / Google drive), creating
              subtasks.{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 flex-col justify-start gap-5 sm:grid-cols-2 xl:items-end">
            <div className="group flex flex-col items-center justify-start gap-3 rounded-lg border border-gray-200 p-3 transition-all duration-700 ease-in-out hover:border-gray-400">
              <div className="flex flex-col items-center justify-start gap-2">
                <div className="inline-flex h-[30px] w-[30px] items-center justify-center">
                  {/* SVG removed */}
                </div>
                <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900">
                  Developer Resources
                </h5>
              </div>
              <p className="text-center text-sm leading-normal font-normal text-gray-500">
                Downloads and documentation for popular AI and robotics SDKs,
                APIs, libraries, and simulation environments, with integration
                guides.
              </p>
            </div>
            <div className="group flex flex-col items-center justify-start gap-3 rounded-lg border border-gray-200 px-3 pt-4 pb-3 transition-all duration-700 ease-in-out hover:border-gray-400">
              <div className="flex flex-col items-center justify-start gap-1.5">
                <div className="relative h-[30px] w-[30px]">
                  {/* SVG removed */}
                </div>
                <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900">
                  Project Showcase
                </h5>
              </div>
              <p className="text-center text-sm leading-normal font-normal text-gray-500">
                Interactive demos and case studies of AI-driven robotic
                projects. Explore real-world applications and access open-source
                repositories to see the.
              </p>
            </div>
            <div className="group flex flex-col items-center justify-start gap-3 rounded-lg border border-gray-200 p-3 transition-all duration-700 ease-in-out hover:border-gray-400">
              <div className="flex flex-col items-center justify-start gap-2">
                <div className="inline-flex h-[30px] w-[30px] items-center justify-center">
                  {/* SVG removed */}
                </div>
                <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900">
                  Community Forum
                </h5>
              </div>
              <p className="text-center text-sm leading-normal font-normal text-gray-500">
                Discussion boards, collaborative projects, and hackathon info.
                Connect with fellow enthusiasts, contribute to projects, and
                participate in competitions to drive innovation.
              </p>
            </div>
            <div className="group flex flex-col items-center justify-start gap-3 rounded-lg border border-gray-200 p-3 transition-all duration-700 ease-in-out hover:border-gray-400">
              <div className="flex flex-col items-center justify-start gap-1.5">
                <div className="inline-flex h-[30px] w-[30px] items-center justify-center">
                  {/* SVG removed */}
                </div>
                <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900">
                  Learning Hub
                </h5>
              </div>
              <p className="text-center text-sm leading-normal font-normal text-gray-500">
                Tutorials, courses, and webinars on AI-powered robotics. Gain
                hands-on experience and learn from industry experts to advance
                your skills in robotics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
