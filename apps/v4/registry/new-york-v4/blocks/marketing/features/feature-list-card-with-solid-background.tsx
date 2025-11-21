export default function FeatureListCardWithSolidBackground() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="mb-5 text-center text-3xl font-bold text-gray-900">
            What sets us apart from others
          </h2>
          <p className="text-lg leading-7 font-normal text-gray-500 lg:mx-auto lg:max-w-2xl">
            We provide all the advantages that can simplify all your financial
            transactions without any further requirements{" "}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-8 max-md:mx-auto max-md:max-w-md md:flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:gap-y-0">
          <div className="relative w-full rounded-2xl bg-gray-50 px-9 py-16 transition-all duration-500 md:w-2/5 xl:w-1/3">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
              {/* SVG removed */}
            </div>
            <h4 className="mb-3 text-center text-xl font-medium text-gray-900 capitalize transition-all duration-500">
              Events
            </h4>
            <p className="mb-6 text-center text-sm leading-5 font-normal text-gray-500 transition-all duration-500">
              Experience the value of our events, which are designed to provide
              you with the knowledge, resources, and connections you need to
              succeed.
            </p>
            <a
              href="#"
              className="group flex items-center justify-center gap-2 text-sm font-semibold text-indigo-600 transition-all duration-500"
            >
              Read more{/* SVG removed */}
            </a>
          </div>
          <div className="relative w-full rounded-2xl bg-gray-50 px-9 py-16 transition-all duration-500 md:w-2/5 xl:w-1/3">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
              {/* SVG removed */}
            </div>
            <h4 className="mb-3 text-center text-xl font-medium text-gray-900 capitalize transition-all duration-500">
              Coaching
            </h4>
            <p className="mb-6 text-center text-sm leading-5 font-normal text-gray-500 transition-all duration-500">
              Our focus on coaching ensures that you have access to the support
              and resources you need to succeed, no matter where you are in your
              journey.
            </p>
            <a
              href="#"
              className="group flex items-center justify-center gap-2 text-sm font-semibold text-indigo-600 transition-all duration-500"
            >
              Read more{/* SVG removed */}
            </a>
          </div>
          <div className="relative w-full rounded-2xl bg-gray-50 px-9 py-16 transition-all duration-500 md:w-2/5 xl:w-1/3">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
              {/* SVG removed */}
            </div>
            <h4 className="mb-3 text-center text-xl font-medium text-gray-900 capitalize transition-all duration-500">
              Result
            </h4>
            <p className="mb-6 text-center text-sm leading-5 font-normal text-gray-500 transition-all duration-500">
              Experience the value of our platform's performance and trackable
              results, which help you make informed decisions and optimize your
              business strategy.
            </p>
            <a
              href="#"
              className="group flex items-center justify-center gap-2 text-sm font-semibold text-indigo-600 transition-all duration-500"
            >
              Read more{/* SVG removed */}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
