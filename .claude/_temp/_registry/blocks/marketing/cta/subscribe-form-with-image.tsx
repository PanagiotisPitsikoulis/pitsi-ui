export default function SubscribeFormWithImage() {
  return (
    <section className="py-20 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center justify-between gap-14 lg:flex-row">
          <div className="w-full lg:w-auto p-8 md:py-10 md:px-8 lg:py-20 lg:px-16 bg-indigo-600 flex-1 lg:-mr-14 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
            <h2 className="font-manrope text-4xl font-bold text-white leading-[3.5rem] mb-4 text-center lg:text-left">
              Subscribe and get a reward!{" "}
            </h2>
            <p className="text-lg text-indigo-200 text-center lg:text-left">
              Join our community of subscribers and receive regular updates
              delivered straight to your inbox. It's quick, easy, and free
            </p>
            <div className="flex items-center flex-col gap-4 mt-14 md:flex-row lg:justify-start justify-center">
              <input
                type="text"
                name="email"
                className="py-2.5 px-5 h-14 w-full md:max-w-xs border border-gray-300 bg-indigo-500 shadow-sm rounded-full text-lg text-white focus:outline-none placeholder:text-indigo-200"
                placeholder="Your mail id.."
              />
              <button className="h-14 py-3.5 px-8 bg-white shadow-sm rounded-full text-indigo-600 font-semibold w-full md:w-fit">
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
  );
}
