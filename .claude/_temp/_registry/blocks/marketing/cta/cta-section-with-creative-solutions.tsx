export default function CtaSectionWithCreativeSolutions() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8  rounded-3xl">
        <h2 className="text-4xl font-bold font-manrope text-white text-center">
          Elevate Your Success with Unique Creative Solutions
        </h2>
        <p className="mt-3 text-sm font-normal leading-5 text-white text-center font-inter max-w-3xl w-full mx-auto">
          Elevate your business to new heights with our custom creative
          solutions. We specialize in delivering innovative approaches that help
          you solve challenges, grow your brand, and achieve sustainable
          success.
        </p>
        <div className="pt-6 flex items-center flex-col sm:flex-row justify-center gap-4 sm:gap-8">
          <h4 className="text-base font-normal leading-7 font-inter text-white flex items-center gap-3">
            {/* SVG removed */}
            24*7 chat support of any time
          </h4>
          <h4 className="text-base font-normal leading-7 font-inter text-white flex items-center gap-3">
            {/* SVG removed */}
            Library of our specualist team{" "}
          </h4>
        </div>
        <div className="mt-8 sm:mt-11 flex items-center justify-center gap-5 font-inter">
          <button className="px-5 py-2.5 w-40 flex items-center justify-center bg-white shadow-xs_shadow rounded-full transition-all duration-500 hover:bg-gray-300 text-base font-semibold leading-7">
            Download app
          </button>
          <button className="px-5 py-2.5 w-36 flex items-center justify-center text-white border border-gray-300 bg-transparent rounded-full transition-all duration-500 font-semibold leading-7 hover:bg-white hover:text-black ">
            View demo
          </button>
        </div>
      </div>
    </section>
  );
}
