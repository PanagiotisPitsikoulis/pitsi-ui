export default function AppDownloadCtaWithDashboardVisual() {
  return (
    <section className="font-inter bg-gradient-to-tl from-gray-800 to-gray-600 pt-24">
      <div className="mx-auto w-full max-w-[1328px] px-4 lg:pr-0 lg:pl-4 xl:pr-0 xl:pl-4">
        <div className="flex flex-col items-center justify-center gap-14 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-3.5">
            <h2 className="font-manrope text-center text-4xl font-bold text-white sm:leading-[52px] lg:text-start">
              Unlock Exclusive Features
            </h2>
            <p className="mb-4 text-center text-base leading-6 font-normal text-gray-300 lg:text-start">
              Empower your business with next-gen technology solutions designed
              to drive growth and efficiency. Start transforming your operations
              today and stay ahead in the digital age!
            </p>
            <button className="mx-auto flex w-fit items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-base leading-7 font-semibold text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 lg:mx-0">
              Download The App{/* SVG removed */}
            </button>
          </div>
          <img
            src="https://pagedone.io/asset/uploads/1759492094.png"
            alt="img"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
