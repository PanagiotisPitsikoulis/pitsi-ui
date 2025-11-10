export default function CtaButtonsOnly() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="before:content[' '] relative rounded-2xl bg-[url('https://pagedone.io/asset/uploads/1701756962.jpg')] p-8 text-center before:absolute before:top-0 before:left-0 before:h-full before:w-full before:rounded-2xl before:bg-gray-900/50 lg:p-24">
          <h2 className="font-manrope relative mb-4 text-center text-4xl font-bold text-white">
            Subscribe
          </h2>
          <p className="relative mb-16 text-white">
            Join our community of subscribers and receive regular updates
          </p>
          <div className="relative flex flex-col items-center justify-center gap-4 md:flex-row">
            <input
              type="text"
              name="email"
              className="h-14 w-full rounded-full bg-white px-5 py-2.5 text-lg text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none md:max-w-sm"
              placeholder="Your mail id.."
            />
            <button className="h-14 w-full rounded-full bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 md:w-fit">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
