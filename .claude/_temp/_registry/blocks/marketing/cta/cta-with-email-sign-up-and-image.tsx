export default function CtaWithEmailSignUpAndImage() {
  return (
    <section className="py-16 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="px-8 lg:px-24 flex flex-col items-center justify-between gap-12 lg:gap-24 lg:flex-row">
          <div className="w-full lg:w-3/5">
            <h2 className="font-manrope text-4xl font-bold text-gray-900 mb-5 text-center lg:text-left">
              Subscribe and get a reward!
            </h2>
            <p className="text-gray-500 leading-6 mb-14 text-center lg:text-left max-lg:max-w-xl max-lg:mx-auto">
              Join our community of subscribers and receive regular updates
              delivered straight to your inbox. It's quick, easy, and free
            </p>
            <div className="flex items-center  flex-col gap-4 lg:flex-row">
              <input
                type="text"
                name="email"
                className="py-2.5 px-5 h-14 w-full md:max-w-xs border border-gray-300 bg-white shadow-sm rounded-full text-lg text-gray-900 focus:outline-none placeholder:text-gray-400"
                placeholder="Your mail id.."
              />
              <button className="h-14 py-3.5 px-8 bg-indigo-600 shadow-sm rounded-full text-white font-semibold hover:bg-indigo-700">
                Subscribe
              </button>
            </div>
          </div>
          <div className="w-full lg:w-2/5 text-center max-lg:max-w-xl max-lg:mx-auto">
            <div className="grid gap-5 flex-wrap grid-cols-2">
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
  );
}
