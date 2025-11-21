export default function CtaWithEmailSignUpAndImage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-12 px-8 lg:flex-row lg:gap-24 lg:px-24">
          <div className="w-full lg:w-3/5">
            <h2 className="font-manrope mb-5 text-center text-4xl font-bold text-gray-900 lg:text-left">
              Subscribe and get a reward!
            </h2>
            <p className="mb-14 text-center leading-6 text-gray-500 max-lg:mx-auto max-lg:max-w-xl lg:text-left">
              Join our community of subscribers and receive regular updates
              delivered straight to your inbox. It's quick, easy, and free
            </p>
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <input
                type="text"
                name="email"
                className="h-14 w-full rounded-full border border-gray-300 bg-white px-5 py-2.5 text-lg text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none md:max-w-xs"
                placeholder="Your mail id.."
              />
              <button className="h-14 rounded-full bg-indigo-600 px-8 py-3.5 font-semibold text-white shadow-sm hover:bg-indigo-700">
                Subscribe
              </button>
            </div>
          </div>
          <div className="w-full text-center max-lg:mx-auto max-lg:max-w-xl lg:w-2/5">
            <div className="grid grid-cols-2 flex-wrap gap-5">
              <div className="col-span-2">
                <img
                  src="https://pagedone.io/asset/uploads/1696241747.png"
                  alt="CTA tailwind section"
                  className="w-full rounded-xl object-cover"
                />
              </div>
              <div>
                <img
                  src="https://pagedone.io/asset/uploads/1696241764.png"
                  alt="CTA tailwind section"
                  className="w-full rounded-xl object-cover"
                />
              </div>
              <div>
                <img
                  src="https://pagedone.io/asset/uploads/1696241779.png"
                  alt="CTA tailwind section"
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
