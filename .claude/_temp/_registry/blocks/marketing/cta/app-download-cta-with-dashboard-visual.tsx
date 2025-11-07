export default function AppDownloadCtaWithDashboardVisual() {
  return (
    <section className="pt-24 font-inter bg-gradient-to-tl from-gray-800 to-gray-600">
      <div className="mx-auto w-full max-w-[1328px] px-4 lg:pl-4 lg:pr-0 xl:pl-4 xl:pr-0">
        <div className="flex items-center justify-center lg:justify-between gap-14 flex-col lg:flex-row ">
          <div className="flex flex-col gap-3.5">
            <h2 className="text-4xl font-bold sm:leading-[52px] text-white font-manrope text-center lg:text-start">
              Unlock Exclusive Features
            </h2>
            <p className="text-gray-300 text-base font-normal leading-6 mb-4 text-center lg:text-start">
              Empower your business with next-gen technology solutions designed
              to drive growth and efficiency. Start transforming your operations
              today and stay ahead in the digital age!
            </p>
            <button className="mx-auto lg:mx-0 w-fit px-5 py-2.5 flex items-center gap-2 text-base font-semibold leading-7 text-white rounded-full bg-indigo-600 shadow-sm transition-all duration-500 hover:bg-indigo-700">
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
  );
}
