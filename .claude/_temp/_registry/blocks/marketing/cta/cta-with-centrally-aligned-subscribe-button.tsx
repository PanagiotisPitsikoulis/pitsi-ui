export default function CtaWithCentrallyAlignedSubscribeButton() {
  return (
    <section className="py-20 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-600 rounded-2xl p-8 xl:p-11">
          <h2 className="font-manrope text-4xl text-white text-center font-bold mb-4">
            Subscribe to the latest offer{" "}
          </h2>
          <p className="text-indigo-200 text-center mb-11">
            Join our community of subscribers and receive regular updates
            delivered straight to your inbox. It's quick, easy, and free
          </p>
          <div className="max-w-md mx-auto md:bg-white md:rounded-full md:h-12 md:p-1.5 md:flex-row gap-6 md:gap-0 flex-col flex items-center justify-between">
            <input
              type="text"
              name="email"
              className="py-2 px-6  bg-white rounded-full text-gray-900 placeholder:text-gray-400 focus:outline-none flex-1 w-full lg:w-auto lg:py-2 lg:px-6 lg:bg-transparent"
              placeholder="Enter your email.."
            />
            <button
              type="submit"
              className="py-2 px-5 text-sm bg-white md:bg-indigo-600 shadow-md rounded-full text-indigo-600 md:text-white font-semibold hover:bg-indigo-700"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
