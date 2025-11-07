export default function CtaAsBoxLayout() {
  return (
    <section className="py-20 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-600 p-8 lg:p-11 text-center rounded-2xl">
          <h2 className="font-manrope text-4xl text-white text-center font-bold mb-4">
            Get 10% discount for subscribe
          </h2>
          <p className="text-indigo-200 mb-11">
            Join our community of subscribers and receive regular updates
            delivered straight to your inbox. It's quick, easy, and free
          </p>
          <div className="flex items-center justify-center flex-col gap-4 md:flex-row">
            <input
              type="text"
              name="email"
              className="py-2.5 px-5 h-14 w-full md:max-w-md border border-white bg-transparent shadow-sm rounded-full text-lg text-white focus:outline-none placeholder:text-indigo-200"
              placeholder="Your mail id.."
            />
            <button className="h-14 py-3.5 px-7 bg-white shadow-sm rounded-full text-indigo-600 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
