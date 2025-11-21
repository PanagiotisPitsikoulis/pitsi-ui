export default function CtaWithNewsletterBackground() {
  return (
    <section className="bg-indigo-600 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 lg:p-14">
          <div className="mb-16">
            <h2 className="font-manrope mb-4 text-center text-4xl font-bold tracking-tight text-indigo-600 lg:tracking-wide">
              N E W S L E T T E R{" "}
            </h2>
            <p className="text-center text-gray-500">
              Join our community of subscribers and receive regular updates
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <input
              type="text"
              name="email"
              className="h-14 w-full rounded-full border border-gray-300 bg-white px-5 py-2.5 text-lg text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none md:max-w-sm"
              placeholder="Your mail id.."
            />
            <button className="h-14 rounded-full bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-sm hover:bg-indigo-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
