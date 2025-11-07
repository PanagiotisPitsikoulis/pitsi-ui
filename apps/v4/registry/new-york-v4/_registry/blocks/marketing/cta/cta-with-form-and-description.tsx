export default function CtaWithFormAndDescription() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gray-100 p-8 lg:px-12 lg:py-8 xl:px-24 xl:py-16">
          <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-24">
            <div className="w-full lg:w-1/2">
              <span className="mb-1 block text-center font-medium text-indigo-600 uppercase lg:text-left">
                OUR FUTURE
              </span>
              <h2 className="font-manrope mb-5 text-center text-4xl leading-[3.5rem] font-bold text-gray-900 lg:text-left">
                Get professional advice for your portfolio growth.
              </h2>
              <p className="text-center leading-6 text-gray-500 lg:text-left">
                Join our community of subscribers and receive regular updates
                delivered straight to your inbox. It's quick, easy, and free
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="block">
                <span className="mb-5 block text-center font-medium text-indigo-600 lg:text-left">
                  Get started free
                </span>
                <input
                  type="text"
                  name="email"
                  className="mb-5 h-14 w-full rounded-full bg-white px-5 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none"
                  placeholder="Email address"
                />
                <button className="h-14 w-full rounded-full bg-indigo-600 px-8 py-3.5 font-semibold text-white shadow-sm transition-all duration-500 hover:bg-indigo-700">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
