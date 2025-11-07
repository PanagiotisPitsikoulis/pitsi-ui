export default function DefaultFeatureTailwindCssBlock() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-600 text-center">
            Features
          </span>
          <h2 className="text-4xl text-center font-bold text-gray-900 py-5">
            Revolutionary Features
          </h2>
          <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
            Provides advanced features like time tracking, integrating with
            third party apps (calendar / Google drive), creating subtasks.
          </p>
        </div>
        <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
              {/* SVG removed */}
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
              Revolutionary Projectview
            </h4>
            <p className="text-sm font-normal text-gray-500">
              plan and structure work how you want. Quickly organizing tasks.
            </p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-pink-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
              {/* SVG removed */}
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
              App Integrations
            </h4>
            <p className="text-sm font-normal text-gray-500">
              Bring all your tools and data together. Also join with hundreds of
              other apps.
            </p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-teal-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-teal-600">
              {/* SVG removed */}
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
              Data Reporting
            </h4>
            <p className="text-sm font-normal text-gray-500">
              Get real time insight into progress and allows teams to track
              their work habits
            </p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-orange-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600">
              {/* SVG removed */}
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
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
  );
}
