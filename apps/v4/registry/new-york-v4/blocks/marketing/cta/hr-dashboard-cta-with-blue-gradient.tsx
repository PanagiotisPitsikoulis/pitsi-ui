export default function HrDashboardCtaWithBlueGradient() {
  return (
    <section className="font-inter relative overflow-hidden bg-gradient-to-b from-blue-500 to-blue-400 py-12">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="https://pagedone.io/asset/uploads/1759492135.png"
          alt="Ctarounded"
          className="rotate-slow"
        />
      </div>
      <div className="relative mx-auto w-full max-w-6xl px-4">
        <div className="relative z-10 mx-auto flex flex-col gap-3.5">
          <div className="mx-auto flex max-w-max items-center justify-center gap-2 rounded-full border px-4 py-2">
            {/* SVG removed */}
            <span className="text-center text-xs leading-5 font-medium text-white">
              Contact us
            </span>
          </div>
          <h2 className="font-manrope pt-5 text-center text-4xl font-semibold text-white sm:text-5xl">
            Let’s Try Our Dashboard Now!
          </h2>
          <p className="mx-auto w-full max-w-2xl text-center text-base leading-6 font-normal wrap-break-word text-white">
            Explore our comprehensive HR solutions designed to streamline your
            processes and empower your workforce. Join now to experience the
            difference!
          </p>
          <div className="mx-auto pt-8">
            <button className="flex w-36 items-center justify-center rounded-full bg-white px-5 py-2.5 text-base leading-7 font-semibold text-black shadow-sm transition-all duration-500 hover:bg-gray-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
