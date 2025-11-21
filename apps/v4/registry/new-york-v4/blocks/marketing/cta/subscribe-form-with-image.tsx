export default function SubscribeFormWithImage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center justify-between gap-14 lg:flex-row">
          <div className="w-full flex-1 rounded-2xl bg-indigo-600 p-8 md:px-8 md:py-10 lg:-mr-14 lg:w-auto lg:rounded-l-2xl lg:rounded-r-none lg:px-16 lg:py-20">
            <h2 className="font-manrope mb-4 text-center text-4xl leading-[3.5rem] font-bold text-white lg:text-left">
              Subscribe and get a reward!{" "}
            </h2>
            <p className="text-center text-lg text-indigo-200 lg:text-left">
              Join our community of subscribers and receive regular updates
              delivered straight to your inbox. It's quick, easy, and free
            </p>
            <div className="mt-14 flex flex-col items-center justify-center gap-4 md:flex-row lg:justify-start">
              <input
                type="text"
                name="email"
                className="h-14 w-full rounded-full border border-gray-300 bg-indigo-500 px-5 py-2.5 text-lg text-white shadow-sm placeholder:text-indigo-200 focus:outline-none md:max-w-xs"
                placeholder="Your mail id.."
              />
              <button className="h-14 w-full rounded-full bg-white px-8 py-3.5 font-semibold text-indigo-600 shadow-sm md:w-fit">
                Subscribe
              </button>
            </div>
          </div>
          <div className="w-full lg:w-auto">
            <div className="relative flex justify-center lg:block">
              <img
                src="	https://pagedone.io/asset/uploads/1696242043.png"
                alt="CTA tailwind section"
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
