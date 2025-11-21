export default function CtaSectionWithCreativeSolutions() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl rounded-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-center text-4xl font-bold text-white">
          Elevate Your Success with Unique Creative Solutions
        </h2>
        <p className="font-inter mx-auto mt-3 w-full max-w-3xl text-center text-sm leading-5 font-normal text-white">
          Elevate your business to new heights with our custom creative
          solutions. We specialize in delivering innovative approaches that help
          you solve challenges, grow your brand, and achieve sustainable
          success.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row sm:gap-8">
          <h4 className="font-inter flex items-center gap-3 text-base leading-7 font-normal text-white">
            {/* SVG removed */}
            24*7 chat support of any time
          </h4>
          <h4 className="font-inter flex items-center gap-3 text-base leading-7 font-normal text-white">
            {/* SVG removed */}
            Library of our specualist team{" "}
          </h4>
        </div>
        <div className="font-inter mt-8 flex items-center justify-center gap-5 sm:mt-11">
          <button className="shadow-xs_shadow flex w-40 items-center justify-center rounded-full bg-white px-5 py-2.5 text-base leading-7 font-semibold transition-all duration-500 hover:bg-gray-300">
            Download app
          </button>
          <button className="flex w-36 items-center justify-center rounded-full border border-gray-300 bg-transparent px-5 py-2.5 leading-7 font-semibold text-white transition-all duration-500 hover:bg-white hover:text-black">
            View demo
          </button>
        </div>
      </div>
    </section>
  )
}
