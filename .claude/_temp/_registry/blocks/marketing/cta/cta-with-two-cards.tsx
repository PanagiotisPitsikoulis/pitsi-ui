export default function CtaWithTwoCards() {
  return (
    <section className="py-20 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-gray-900 font-bold text-center mb-14 leading-[3.5rem]">
          Let’s get started. Choose an option.
        </h2>
        <div className="bg-gray-100 rounded-2xl gap-12 p-8 md:py-12 md:px-14 lg:py-16 lg:px-24 flex flex-col items-center justify-between lg:flex-row">
          <div className="bg-white text-center rounded-xl p-11 w-full">
            <h4 className="text-xl text-gray-900 font-semibold mb-3">
              I have a query
            </h4>
            <p className="text-gray-600 mb-11">
              Start your free search for care in your area.
            </p>
            <a
              href="javascript:;"
              className="cursor-pointer  py-3 px-5 bg-indigo-600 rounded-full shadow-md text-sm text-white font-semibold transition-all duration-500 hover:bg-indigo-700"
            >
              Find Care
            </a>
          </div>
          <div className="bg-white text-center rounded-xl p-11 w-full">
            <h4 className="text-xl text-gray-900 font-semibold mb-3">
              I have an idea
            </h4>
            <p className="text-gray-600 mb-11">
              Start your free search for care in your area.
            </p>
            <a
              href="javascript:;"
              className="cursor-pointer  py-3 px-5 bg-indigo-600 rounded-full shadow-md text-sm text-white font-semibold transition-all duration-500 hover:bg-indigo-700"
            >
              Find Jobs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
