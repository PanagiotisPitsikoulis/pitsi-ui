export default function DarkThemeAboutUsSection() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <h2 className="text-center text-white text-4xl font-bold font-manrope leading-normal">
              About Us
            </h2>
            <p className="lg:max-w-5xl w-full text-center text-gray-400 text-base font-normal leading-relaxed">
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
          <div className="w-full justify-start items-center lg:gap-8 gap-4 grid lg:grid-cols-2 grid-cols-1">
            <h2 className="w-full text-white text-4xl font-semibold font-manrope leading-normal lg:text-start text-center">
              Balancing Work and Life Tips for Maintaining Harmony.
            </h2>
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 inline-flex">
              <p className="w-full text-gray-400 text-lg font-medium leading-relaxed lg:text-start text-center">
                This blog offers actionable strategies for managing your time
                effectively, setting boundaries, and prioritizing self-care.
                Learn how to create a fulfilling work-life balance that enhances
                productivity.
              </p>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-white hover:bg-gray-100 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center inline-flex">
                <span className="px-1.5 text-black text-sm font-medium leading-6">
                  Get Started
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
