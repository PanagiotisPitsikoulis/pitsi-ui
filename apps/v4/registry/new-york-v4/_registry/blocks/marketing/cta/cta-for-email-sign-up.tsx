export default function CtaForEmailSignUp() {
  return (
    <section className="bg-indigo-600 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope mb-14 text-center text-5xl font-bold text-white">
          Subscribe Newsletter{" "}
        </h2>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <input
            type="text"
            name="email"
            className="h-14 w-full rounded-full border border-gray-300 bg-indigo-500 px-5 py-2.5 text-lg text-white shadow-sm placeholder:text-indigo-200 focus:outline-none md:max-w-md"
            placeholder="Your mail id.."
          />
          <button className="h-14 rounded-full bg-white px-7 py-3.5 font-semibold text-indigo-600 shadow-sm">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}
