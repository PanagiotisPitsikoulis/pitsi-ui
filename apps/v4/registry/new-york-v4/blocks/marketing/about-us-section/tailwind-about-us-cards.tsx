export default function TailwindAboutUsCards() {
  return (
    <section className="relative py-24">
      <div className="bg-primary absolute top-0 -z-10 h-[650px] w-full md:h-[450px] lg:h-[398px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center justify-start gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="inline-flex flex-col items-center justify-start gap-3 lg:items-start">
            <span className="text-center text-base leading-relaxed font-normal text-white lg:text-start">
              About Us
            </span>
            <h2 className="font-manrope text-center text-4xl leading-normal font-semibold text-white lg:text-start">
              Exploring the Art and Science of Modern Architecture.
            </h2>
          </div>
          <div className="inline-flex flex-col items-center justify-start gap-3 lg:items-start lg:gap-4">
            <p className="text-center text-base leading-relaxed font-normal text-white lg:text-start">
              This blog explores the principles and practices that define
              contemporary architectural design, including cutting-edge
              materials, sustainable building techniques, and aesthetic trends.
            </p>
            <button className="inline-flex w-full items-center justify-center rounded-lg bg-white px-3.5 py-2 transition-all duration-700 ease-in-out hover:bg-gray-100 sm:w-fit">
              <span className="px-1.5 text-sm leading-6 font-medium text-blue-500">
                Get Started
              </span>
            </button>
          </div>
        </div>
        <div className="mt-10 flex w-full flex-col items-center justify-start gap-8 lg:mt-[60px] lg:gap-14">
          <div className="w-full gap-4 space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:items-center lg:gap-8 lg:space-y-0">
            <img
              className="mx-auto h-auto w-auto rounded-xl object-cover lg:w-full"
              src="https://pagedone.io/asset/uploads/1724317907.png"
              alt="About Us image"
            />
            <img
              className="mx-auto h-auto w-auto rounded-xl object-cover lg:w-full"
              src="https://pagedone.io/asset/uploads/1724317922.png"
              alt="About Us image"
            />
            <img
              className="mx-auto h-auto w-auto rounded-xl object-cover lg:w-full"
              src="https://pagedone.io/asset/uploads/1724317934.png"
              alt="About Us image"
            />
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-center gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            <div className="inline-flex w-full flex-col items-center justify-start">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-blue-600">
                25+
              </h2>
              <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                Years of Experience
              </h6>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-blue-600">
                90+
              </h2>
              <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                Team Members
              </h6>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-blue-600">
                64+
              </h2>
              <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                Successful Projects
              </h6>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-blue-600">
                60+
              </h2>
              <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                Happy Clients
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
