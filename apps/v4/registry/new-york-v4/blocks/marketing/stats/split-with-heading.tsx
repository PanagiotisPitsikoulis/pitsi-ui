export default function SplitWithHeading() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-20 lg:flex-row lg:justify-between">
          <div className="w-full xl:w-1/2">
            <h3 className="font-manrope mb-9 text-center text-3xl font-semibold text-gray-900 lg:text-left">
              Our services have a proven track record of boosting businesses
            </h3>
            <p className="mb-16 text-center text-xl text-gray-500 lg:text-left">
              We help you to unleash the power within your business
            </p>
            <button className="mx-auto flex items-center justify-center rounded-full bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 lg:mx-0">
              Lets get started
            </button>
          </div>
          <div className="w-full xl:w-1/2">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 px-10 py-16 text-center">
                <div className="font-manrope mb-2 text-6xl font-bold text-gray-900">
                  260<span className="text-indigo-600">+</span>
                </div>
                <h4 className="text-xl text-gray-500">Expert Consultants </h4>
              </div>
              <div className="rounded-2xl bg-gray-50 px-10 py-16 text-center">
                <div className="font-manrope mb-2 text-6xl font-bold text-gray-900">
                  975<span className="text-indigo-600">+</span>
                </div>
                <h4 className="text-xl text-gray-500">Active Clients</h4>
              </div>
              <div className="rounded-2xl bg-gray-50 px-10 py-16 text-center">
                <div className="font-manrope mb-2 text-6xl font-bold text-gray-900">
                  724<span className="text-indigo-600">+</span>
                </div>
                <h4 className="text-xl text-gray-500">Projects Delivered</h4>
              </div>
              <div className="rounded-2xl bg-gray-50 px-10 py-16 text-center">
                <div className="font-manrope mb-2 text-6xl font-bold text-gray-900">
                  89<span className="text-indigo-600">+</span>
                </div>
                <h4 className="text-xl text-gray-500">Orders in Queue</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
