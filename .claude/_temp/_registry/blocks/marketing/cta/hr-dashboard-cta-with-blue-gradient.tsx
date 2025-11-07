export default function HrDashboardCtaWithBlueGradient() {
  return (
    <section className="py-12 font-inter bg-gradient-to-b from-blue-500 to-blue-400 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="https://pagedone.io/asset/uploads/1759492135.png"
          alt="Ctarounded"
          className="rotate-slow"
        />
      </div>
      <div className="mx-auto w-full max-w-6xl px-4 relative">
        <div className="flex flex-col gap-3.5 relative z-10 mx-auto">
          <div className="py-2 px-4 border rounded-full max-w-max flex items-center gap-2 justify-center mx-auto">
            {/* SVG removed */}
            <span className="text-xs font-medium leading-5 text-white text-center">
              Contact us
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold font-manrope text-white text-center pt-5">
            Let’s Try Our Dashboard Now!
          </h2>
          <p className="text-base font-normal leading-6 text-white w-full max-w-2xl wrap-break-word mx-auto text-center">
            Explore our comprehensive HR solutions designed to streamline your
            processes and empower your workforce. Join now to experience the
            difference!
          </p>
          <div className="mx-auto pt-8">
            <button className="px-5 py-2.5 w-36 flex items-center justify-center bg-white text-black shadow-sm rounded-full transition-all duration-500 hover:bg-gray-200 text-base font-semibold leading-7">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
