export default function HeadingOnlyFeatureSectionWithDarkTheme() {
  return (
    <section className="bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-5 block text-center text-base font-medium text-white">
            OUR FEATURES
          </span>
          <h2 className="mb-7 text-center text-4xl font-bold text-white">
            {" "}
            Many options that you can use in all configuration
          </h2>
          <p className="mx-auto text-center text-base font-normal text-gray-400 lg:max-w-2xl">
            We provide all the advantages that can simplify all your financial
            transactions without any further requirements{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 min-[500px]:grid-cols-2 sm:grid-cols-6 md:grid-cols-5">
          <div className="relative w-full text-center sm:col-span-2 md:col-span-1">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600">
              {/* SVG removed */}
            </div>
            <h4 className="text-center text-lg font-medium text-white xl:text-xl">
              Lifetime Access
            </h4>
          </div>
          <div className="relative w-full text-center sm:col-span-2 md:col-span-1">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600">
              {/* SVG removed */}
            </div>
            <h4 className="text-center text-lg font-medium text-white xl:text-xl">
              Schedule Tracking
            </h4>
          </div>
          <div className="relative w-full text-center sm:col-span-2 md:col-span-1">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600">
              {/* SVG removed */}
            </div>
            <h4 className="text-center text-lg font-medium text-white xl:text-xl">
              Realtime Notification
            </h4>
          </div>
          <div className="relative w-full text-center sm:col-span-2 sm:col-start-2 md:col-span-1 md:col-start-4">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600">
              {/* SVG removed */}
            </div>
            <h4 className="text-center text-lg font-medium text-white xl:text-xl">
              Advisor Requests
            </h4>
          </div>
          <div className="relative w-full text-center min-[500px]:col-span-2 sm:col-span-2 md:col-span-1">
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600">
              {/* SVG removed */}
            </div>
            <h4 className="text-center text-lg font-medium text-white xl:text-xl">
              Certification
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}
