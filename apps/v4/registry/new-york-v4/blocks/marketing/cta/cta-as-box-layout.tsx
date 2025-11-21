export default function CtaAsBoxLayout() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-indigo-600 p-8 text-center lg:p-11">
          <h2 className="font-manrope mb-4 text-center text-4xl font-bold text-white">
            Get 10% discount for subscribe
          </h2>
          <p className="mb-11 text-indigo-200">
            Join our community of subscribers and receive regular updates
            delivered straight to your inbox. It's quick, easy, and free
          </p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <input
              type="text"
              name="email"
              className="h-14 w-full rounded-full border border-white bg-transparent px-5 py-2.5 text-lg text-white shadow-sm placeholder:text-indigo-200 focus:outline-none md:max-w-md"
              placeholder="Your mail id.."
            />
            <button className="h-14 rounded-full bg-white px-7 py-3.5 font-semibold text-indigo-600 shadow-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
