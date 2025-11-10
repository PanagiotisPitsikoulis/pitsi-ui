export default function CtaSectionForSubscription() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-7xl rounded-3xl bg-red-600 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 py-16 sm:px-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col gap-3.5">
            <h2 className="font-manrope text-center text-4xl leading-[52px] font-semibold text-white lg:text-left">
              Subscribe to Our Newsletter
            </h2>
            <p className="font-inter text-center text-sm leading-5 font-normal text-gray-100 lg:text-left">
              Ready to boost your productivity? Download Pagedone and
              streamline.
            </p>
          </div>
          <div className="font-inter flex flex-col items-center justify-center gap-3.5 sm:flex-row lg:justify-start">
            <input
              type="text"
              className="w-full rounded-lg bg-white px-4 py-2.5 text-base leading-7 font-normal shadow-sm outline-none placeholder:text-red-600 sm:w-[351px]"
              placeholder="Your mail id.."
            />
            <button className="w-full rounded-lg bg-white px-6 py-2.5 text-base leading-7 font-semibold text-red-600 transition-all duration-500 hover:bg-gray-200 sm:w-fit">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
