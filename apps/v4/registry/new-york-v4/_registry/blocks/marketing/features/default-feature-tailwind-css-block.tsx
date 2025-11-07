export default function DefaultFeatureTailwindCssBlock() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-indigo-100 px-4 py-1 text-center text-xs font-medium text-indigo-600">
            Features
          </span>
          <h2 className="py-5 text-center text-4xl font-bold text-gray-900">
            Revolutionary Features
          </h2>
          <p className="mx-auto max-w-md text-lg font-normal text-gray-500 md:max-w-2xl">
            Provides advanced features like time tracking, integrating with
            third party apps (calendar / Google drive), creating subtasks.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-8 md:flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:gap-y-0">
          <div className="group relative w-full text-center max-md:mx-auto max-md:max-w-sm md:w-2/5 lg:w-1/4">
            <div className="mx-auto mb-5 flex h-20 w-20 cursor-pointer items-center justify-center rounded-lg bg-indigo-50 transition-all duration-500 group-hover:bg-indigo-600">
              {/* SVG removed */}
            </div>
            <h4 className="mb-3 text-lg font-medium text-gray-900 capitalize">
              Revolutionary Projectview
            </h4>
            <p className="text-sm font-normal text-gray-500">
              plan and structure work how you want. Quickly organizing tasks.
            </p>
          </div>
          <div className="group relative w-full text-center max-md:mx-auto max-md:max-w-sm md:w-2/5 lg:w-1/4">
            <div className="mx-auto mb-5 flex h-20 w-20 cursor-pointer items-center justify-center rounded-lg bg-pink-50 transition-all duration-500 group-hover:bg-pink-600">
              {/* SVG removed */}
            </div>
            <h4 className="mb-3 text-lg font-medium text-gray-900 capitalize">
              App Integrations
            </h4>
            <p className="text-sm font-normal text-gray-500">
              Bring all your tools and data together. Also join with hundreds of
              other apps.
            </p>
          </div>
          <div className="group relative w-full text-center max-md:mx-auto max-md:max-w-sm md:w-2/5 lg:w-1/4">
            <div className="mx-auto mb-5 flex h-20 w-20 cursor-pointer items-center justify-center rounded-lg bg-teal-50 transition-all duration-500 group-hover:bg-teal-600">
              {/* SVG removed */}
            </div>
            <h4 className="mb-3 text-lg font-medium text-gray-900 capitalize">
              Data Reporting
            </h4>
            <p className="text-sm font-normal text-gray-500">
              Get real time insight into progress and allows teams to track
              their work habits
            </p>
          </div>
          <div className="group relative w-full text-center max-md:mx-auto max-md:max-w-sm md:w-2/5 lg:w-1/4">
            <div className="mx-auto mb-5 flex h-20 w-20 cursor-pointer items-center justify-center rounded-lg bg-orange-50 transition-all duration-500 group-hover:bg-orange-600">
              {/* SVG removed */}
            </div>
            <h4 className="mb-3 text-lg font-medium text-gray-900 capitalize">
              Workflow Builder
            </h4>
            <p className="text-sm font-normal text-gray-500">
              Automated processes to coordinate your teams and increase
              communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
