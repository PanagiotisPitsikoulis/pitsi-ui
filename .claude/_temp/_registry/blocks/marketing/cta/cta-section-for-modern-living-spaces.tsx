export default function CtaSectionForModernLivingSpaces() {
  return (
    <section className="py-24 bg-cover object-cover bg-no-repeat rounded-xl">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14">
          <div className="lg:my-auto my-0">
            <h2 className="text-white font-manrope text-5xl font-semibold leading-leading62 text-center lg:text-left">
              Discover and Unlock Your Perfect Home Today
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-base font-normal font-inter leading-7 text-gray-50 text-center lg:text-left">
              Elevate your business to new heights with our custom creative
              solutions. We specialize in delivering innovative approaches that
              help you solve challenges, grow your brand, and achieve
              sustainable success.
            </p>
            <div className="flex items-start lg:justify-start md:items-center justify-center gap-5 font-inter">
              <button className="px-5 py-2.5 w-40 flex items-center justify-center bg-white shadow-xs_shadow rounded-full transition-all duration-500 hover:bg-gray-300 text-base font-semibold leading-7">
                Download app
              </button>
              <button className="px-5 py-2.5 w-36 flex items-center justify-center text-white border border-gray-300 bg-transparent rounded-full transition-all duration-500 font-semibold leading-7 hover:bg-white hover:text-black ">
                View demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
