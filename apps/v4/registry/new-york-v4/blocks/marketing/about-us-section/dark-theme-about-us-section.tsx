export default function DarkThemeAboutUsSection() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="flex w-full flex-col items-center justify-start gap-3">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-white">
              About Us
            </h2>
            <p className="w-full text-center text-base leading-relaxed font-normal text-gray-400 lg:max-w-5xl">
              Our 'About Us' page offers a comprehensive look into our mission,
              values, and the people behind our success. Learn about our
              history, our commitment to excellence, and the vision that guides
              us.
            </p>
          </div>
          <img
            className="h-auto rounded-3xl object-cover"
            src="https://pagedone.io/asset/uploads/1724310774.png"
            alt="About Us image"
          />
          <div className="grid w-full grid-cols-1 items-center justify-start gap-4 lg:grid-cols-2 lg:gap-8">
            <h2 className="font-manrope w-full text-center text-4xl leading-normal font-semibold text-white lg:text-start">
              Balancing Work and Life Tips for Maintaining Harmony.
            </h2>
            <div className="inline-flex w-full flex-col items-center justify-start gap-4 lg:items-start">
              <p className="w-full text-center text-lg leading-relaxed font-medium text-gray-400 lg:text-start">
                This blog offers actionable strategies for managing your time
                effectively, setting boundaries, and prioritizing self-care.
                Learn how to create a fulfilling work-life balance that enhances
                productivity.
              </p>
              <button className="inline-flex w-full items-center justify-center rounded-lg bg-white px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-gray-100 sm:w-fit">
                <span className="px-1.5 text-sm leading-6 font-medium text-black">
                  Get Started
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
