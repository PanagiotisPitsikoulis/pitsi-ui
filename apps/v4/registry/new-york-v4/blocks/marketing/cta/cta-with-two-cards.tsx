export default function CtaWithTwoCards() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-14 text-center text-4xl leading-[3.5rem] font-bold text-gray-900">
          Let’s get started. Choose an option.
        </h2>
        <div className="flex flex-col items-center justify-between gap-12 rounded-2xl bg-gray-100 p-8 md:px-14 md:py-12 lg:flex-row lg:px-24 lg:py-16">
          <div className="w-full rounded-xl bg-white p-11 text-center">
            <h4 className="mb-3 text-xl font-semibold text-gray-900">
              I have a query
            </h4>
            <p className="mb-11 text-gray-600">
              Start your free search for care in your area.
            </p>
            <a
              href="javascript:;"
              className="cursor-pointer rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-500 hover:bg-indigo-700"
            >
              Find Care
            </a>
          </div>
          <div className="w-full rounded-xl bg-white p-11 text-center">
            <h4 className="mb-3 text-xl font-semibold text-gray-900">
              I have an idea
            </h4>
            <p className="mb-11 text-gray-600">
              Start your free search for care in your area.
            </p>
            <a
              href="javascript:;"
              className="cursor-pointer rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-500 hover:bg-indigo-700"
            >
              Find Jobs
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
