export default function CtaSectionForModernLivingSpaces() {
  return (
    <section className="rounded-xl bg-cover bg-no-repeat object-cover py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:gap-14 lg:grid-cols-2">
          <div className="my-0 lg:my-auto">
            <h2 className="font-manrope leading-leading62 text-center text-5xl font-semibold text-white lg:text-left">
              Discover and Unlock Your Perfect Home Today
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <p className="font-inter text-center text-base leading-7 font-normal text-gray-50 lg:text-left">
              Elevate your business to new heights with our custom creative
              solutions. We specialize in delivering innovative approaches that
              help you solve challenges, grow your brand, and achieve
              sustainable success.
            </p>
            <div className="font-inter flex items-start justify-center gap-5 md:items-center lg:justify-start">
              <button className="shadow-xs_shadow flex w-40 items-center justify-center rounded-full bg-white px-5 py-2.5 text-base leading-7 font-semibold transition-all duration-500 hover:bg-gray-300">
                Download app
              </button>
              <button className="flex w-36 items-center justify-center rounded-full border border-gray-300 bg-transparent px-5 py-2.5 leading-7 font-semibold text-white transition-all duration-500 hover:bg-white hover:text-black">
                View demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
