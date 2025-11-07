export default function HeadingOnlyFeatureSectionWithDarkTheme() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-base text-center text-white font-medium mb-5 block">
            OUR FEATURES
          </span>
          <h2 className="text-4xl text-center font-bold text-white mb-7">
            {" "}
            Many options that you can use in all configuration
          </h2>
          <p className="text-base text-center text-gray-400 font-normal lg:max-w-2xl mx-auto">
            We provide all the advantages that can simplify all your financial
            transactions without any further requirements{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-8 sm:grid-cols-6 md:grid-cols-5">
          <div className="relative w-full text-center sm:col-span-2 md:col-span-1">
            <div className="bg-indigo-600 w-16 h-16 rounded-lg flex items-center justify-center mb-8 mx-auto">
              {/* SVG removed */}
            </div>
            <h4 className="text-lg xl:text-xl text-white font-medium text-center">
              Lifetime Access
            </h4>
          </div>
          <div className="relative w-full text-center sm:col-span-2 md:col-span-1">
            <div className="bg-indigo-600 w-16 h-16 rounded-lg flex items-center justify-center mb-8 mx-auto">
              {/* SVG removed */}
            </div>
            <h4 className="text-lg xl:text-xl text-white font-medium text-center">
              Schedule Tracking
            </h4>
          </div>
          <div className="relative w-full text-center sm:col-span-2 md:col-span-1">
            <div className="bg-indigo-600 w-16 h-16 rounded-lg flex items-center justify-center mb-8 mx-auto">
              {/* SVG removed */}
            </div>
            <h4 className="text-lg xl:text-xl text-white font-medium text-center">
              Realtime Notification
            </h4>
          </div>
          <div className="relative w-full text-center sm:col-start-2 md:col-start-4 sm:col-span-2 md:col-span-1">
            <div className="bg-indigo-600 w-16 h-16 rounded-lg flex items-center justify-center mb-8 mx-auto">
              {/* SVG removed */}
            </div>
            <h4 className="text-lg xl:text-xl text-white font-medium text-center">
              Advisor Requests
            </h4>
          </div>
          <div className="relative w-full text-center min-[500px]:col-span-2 sm:col-span-2 md:col-span-1">
            <div className="bg-indigo-600 w-16 h-16 rounded-lg flex items-center justify-center mb-8 mx-auto">
              {/* SVG removed */}
            </div>
            <h4 className="text-lg xl:text-xl text-white font-medium text-center">
              Certification
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
