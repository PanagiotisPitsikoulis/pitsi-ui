export default function CtaButtonsWithHeading() {
  return (
    <section className="py-16 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:p-16 p-10 rounded-2xl bg-gray-50 flex items-center justify-between flex-col lg:flex-row">
          <div className="block text-center mb-5 lg:text-left lg:mb-0">
            <h2 className="font-manrope text-4xl text-indigo-600 font-bold mb-5 lg:mb-2">
              Start your free trial today.
            </h2>
            <p className="text-xl text-gray-500">
              Contact us with any query or any idea.
            </p>
          </div>
          <div className="md:flex-row flex-col flex items-center gap-5 mt-8 md:mt-0">
            <a
              href="javascript:;"
              className="cursor-pointer  block py-3.5 px-7 rounded-full border border-indigo-600 text-indigo-600 font-semibold transition-all duration-300 hover:bg-indigo-50"
            >
              Learn more
            </a>
            <a
              href="javascript:;"
              className="cursor-pointer  block py-3.5 px-7 rounded-full bg-indigo-600 text-white font-semibold transition-all duration-300 hover:bg-indigo-700"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
