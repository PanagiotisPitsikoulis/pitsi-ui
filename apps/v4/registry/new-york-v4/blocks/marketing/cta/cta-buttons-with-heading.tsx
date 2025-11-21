export default function CtaButtonsWithHeading() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between rounded-2xl bg-gray-50 p-10 lg:flex-row lg:p-16">
          <div className="mb-5 block text-center lg:mb-0 lg:text-left">
            <h2 className="font-manrope mb-5 text-4xl font-bold text-indigo-600 lg:mb-2">
              Start your free trial today.
            </h2>
            <p className="text-xl text-gray-500">
              Contact us with any query or any idea.
            </p>
          </div>
          <div className="mt-8 flex flex-col items-center gap-5 md:mt-0 md:flex-row">
            <a
              href="javascript:;"
              className="block cursor-pointer rounded-full border border-indigo-600 px-7 py-3.5 font-semibold text-indigo-600 transition-all duration-300 hover:bg-indigo-50"
            >
              Learn more
            </a>
            <a
              href="javascript:;"
              className="block cursor-pointer rounded-full bg-indigo-600 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-indigo-700"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
