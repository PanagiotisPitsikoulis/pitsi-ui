export default function CtaButtonsOnly() {
  return (
    <section className="py-20 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[url('https://pagedone.io/asset/uploads/1701756962.jpg')] p-8 lg:p-24 text-center rounded-2xl before:content[' '] before:absolute before:bg-gray-900/50 before:w-full before:h-full before:left-0 before:top-0 before:rounded-2xl">
          <h2 className="relative font-manrope text-4xl text-white text-center font-bold mb-4">
            Subscribe
          </h2>
          <p className=" relative text-white mb-16">
            Join our community of subscribers and receive regular updates
          </p>
          <div className="relative flex items-center justify-center flex-col gap-4 md:flex-row">
            <input
              type="text"
              name="email"
              className="py-2.5 px-5 h-14 w-full md:max-w-sm  bg-white shadow-sm rounded-full text-lg text-gray-900 focus:outline-none placeholder:text-gray-400"
              placeholder="Your mail id.."
            />
            <button className="h-14 py-3.5 px-7 bg-indigo-600 shadow-sm rounded-full w-full  text-white font-semibold transition-all duration-500 hover:bg-indigo-700 md:w-fit">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
