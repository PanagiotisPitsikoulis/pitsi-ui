export default function CtaWithCentrallyAlignedSubscribeButton() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-indigo-600 p-8 xl:p-11">
          <h2 className="font-manrope mb-4 text-center text-4xl font-bold text-white">
            Subscribe to the latest offer{" "}
          </h2>
          <p className="mb-11 text-center text-indigo-200">
            Join our community of subscribers and receive regular updates
            delivered straight to your inbox. It's quick, easy, and free
          </p>
          <div className="mx-auto flex max-w-md flex-col items-center justify-between gap-6 md:h-12 md:flex-row md:gap-0 md:rounded-full md:bg-white md:p-1.5">
            <input
              type="text"
              name="email"
              className="w-full flex-1 rounded-full bg-white px-6 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none lg:w-auto lg:bg-transparent lg:px-6 lg:py-2"
              placeholder="Enter your email.."
            />
            <button
              type="submit"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-indigo-600 shadow-md hover:bg-indigo-700 md:bg-indigo-600 md:text-white"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
