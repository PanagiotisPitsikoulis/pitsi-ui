export default function HeadingWithFourStats() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-16 rounded-2xl bg-gray-50 px-10 py-10 lg:flex-row xl:px-20 xl:py-16">
          <div className="w-full lg:w-60">
            <h2 className="font-manrope mb-4 text-center text-4xl font-bold text-gray-900 lg:text-left">
              Our Stats
            </h2>
            <p className="text-center text-sm leading-6 text-gray-500 lg:text-left">
              We help you to unleash the power within your business
            </p>
          </div>
          <div className="w-full lg:w-4/5">
            <div className="flex flex-1 flex-col gap-10 lg:flex-row lg:justify-between lg:gap-0">
              <div className="block">
                <div className="font-manrope mb-3 text-center text-4xl font-bold text-indigo-600 lg:text-left">
                  260+
                </div>
                <span className="block text-center text-gray-900 lg:text-left">
                  Expert Consultants
                </span>
              </div>
              <div className="block">
                <div className="font-manrope mb-3 text-center text-4xl font-bold text-indigo-600 lg:text-left">
                  975+
                </div>
                <span className="block text-center text-gray-900 lg:text-left">
                  Active Clients
                </span>
              </div>
              <div className="block">
                <div className="font-manrope mb-3 text-center text-4xl font-bold text-indigo-600 lg:text-left">
                  724+
                </div>
                <span className="block text-center text-gray-900 lg:text-left">
                  Projects Delivered
                </span>
              </div>
              <div className="block">
                <div className="font-manrope mb-3 text-center text-4xl font-bold text-indigo-600 lg:text-left">
                  89+
                </div>
                <span className="block text-center text-gray-900 lg:text-left">
                  Orders in Queue
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
