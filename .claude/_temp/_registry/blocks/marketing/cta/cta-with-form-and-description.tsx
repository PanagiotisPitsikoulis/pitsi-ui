export default function CtaWithFormAndDescription() {
  return (
    <section className="py-20 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100 rounded-2xl p-8 lg:py-8 lg:px-12 xl:py-16 xl:px-24">
          <div className="flex flex-col items-center justify-between gap-12 lg:gap-24 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <span className="uppercase text-indigo-600 block mb-1 font-medium text-center lg:text-left">
                OUR FUTURE
              </span>
              <h2 className="font-manrope text-4xl font-bold text-gray-900 leading-[3.5rem] mb-5 text-center lg:text-left">
                Get professional advice for your portfolio growth.
              </h2>
              <p className="text-gray-500 leading-6  text-center lg:text-left">
                Join our community of subscribers and receive regular updates
                delivered straight to your inbox. It's quick, easy, and free
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="block">
                <span className="text-indigo-600 font-medium block mb-5 text-center lg:text-left">
                  Get started free
                </span>
                <input
                  type="text"
                  name="email"
                  className="py-3 px-5 h-14 w-full mb-5 bg-white shadow-sm rounded-full text-gray-900 focus:outline-none placeholder:text-gray-400"
                  placeholder="Email address"
                />
                <button className="h-14 py-3.5 px-8 bg-indigo-600 shadow-sm rounded-full w-full text-white font-semibold transition-all duration-500 hover:bg-indigo-700">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
