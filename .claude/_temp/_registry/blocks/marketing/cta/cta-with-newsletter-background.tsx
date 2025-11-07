export default function CtaWithNewsletterBackground() {
  return (
    <section className="py-16 bg-indigo-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 lg:p-14">
          <div className="mb-16">
            <h2 className="font-manrope text-4xl text-indigo-600 text-center font-bold mb-4 tracking-tight lg:tracking-wide">
              N E W S L E T T E R{" "}
            </h2>
            <p className="text-gray-500 text-center">
              Join our community of subscribers and receive regular updates
            </p>
          </div>
          <div className="flex items-center justify-center flex-col gap-4 md:flex-row">
            <input
              type="text"
              name="email"
              className="py-2.5 px-5 h-14 w-full md:max-w-sm border border-gray-300 bg-white shadow-sm rounded-full text-lg text-gray-900 focus:outline-none placeholder:text-gray-400"
              placeholder="Your mail id.."
            />
            <button className="h-14 py-3.5 px-7 bg-indigo-600 shadow-sm rounded-full text-white font-semibold hover:bg-indigo-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
