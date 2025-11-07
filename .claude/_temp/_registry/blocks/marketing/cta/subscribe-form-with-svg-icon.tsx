export default function SubscribeFormWithSvgIcon() {
  return (
    <section className="py-20 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-12"></div>
          <h2 className="font-manrope text-4xl text-gray-900 text-center font-bold mb-4">
            Subscribe
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Subscribe to our newsletter &amp; stay updates
          </p>
          <div className="relative w-fit flex items-center justify-center mx-auto flex-col gap-4 lg:flex-row">
            <div className="absolute left-4 top-4"></div>
            <input
              type="text"
              name="email"
              className="py-3 px-5 pl-12 h-14 w-full md:max-w-sm border border-gray-300 bg-transparent shadow-sm rounded-full text-lg text-gray-900 focus:outline-none placeholder:text-gray-400"
              placeholder="Enter your mail.."
            />
            <button className="h-14 py-3.5 px-7 bg-indigo-600 shadow-sm rounded-full text-white font-semibold transition-all duration-500 hover:bg-indigo-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
