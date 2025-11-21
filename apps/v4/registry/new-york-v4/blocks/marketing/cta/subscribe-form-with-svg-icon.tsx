export default function SubscribeFormWithSvgIcon() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-12 flex justify-center"></div>
          <h2 className="font-manrope mb-4 text-center text-4xl font-bold text-gray-900">
            Subscribe
          </h2>
          <p className="mb-8 text-lg text-gray-500">
            Subscribe to our newsletter &amp; stay updates
          </p>
          <div className="relative mx-auto flex w-fit flex-col items-center justify-center gap-4 lg:flex-row">
            <div className="absolute top-4 left-4"></div>
            <input
              type="text"
              name="email"
              className="h-14 w-full rounded-full border border-gray-300 bg-transparent px-5 py-3 pl-12 text-lg text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none md:max-w-sm"
              placeholder="Enter your mail.."
            />
            <button className="h-14 rounded-full bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-sm transition-all duration-500 hover:bg-indigo-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
