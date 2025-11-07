export default function TailwindAboutUsCards() {
  return (
    <section className="py-24 relative">
      <div className="absolute lg:h-[398px] md:h-[450px] h-[650px] w-full top-0 bg-blue-500 -z-10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full justify-start items-center lg:gap-8 gap-4 grid lg:grid-cols-2 grid-cols-1">
          <div className="flex-col justify-start lg:items-start items-center gap-3 inline-flex">
            <span className="text-white text-base font-normal leading-relaxed lg:text-start text-center">
              About Us
            </span>
            <h2 className="text-white text-4xl font-semibold font-manrope leading-normal lg:text-start text-center">
              Exploring the Art and Science of Modern Architecture.
            </h2>
          </div>
          <div className="flex-col justify-start lg:items-start items-center lg:gap-4 gap-3 inline-flex">
            <p className="text-white text-base font-normal leading-relaxed lg:text-start text-center">
              This blog explores the principles and practices that define
              contemporary architectural design, including cutting-edge
              materials, sustainable building techniques, and aesthetic trends.
            </p>
            <button className="sm:w-fit w-full px-3.5 py-2 bg-white hover:bg-gray-100 transition-all duration-700 ease-in-out rounded-lg justify-center items-center inline-flex">
              <span className="px-1.5 text-blue-500 text-sm font-medium leading-6">
                Get Started
              </span>
            </button>
          </div>
        </div>
        <div className="w-full flex-col justify-start items-center lg:gap-14 gap-8 flex lg:mt-[60px] mt-10">
          <div className="w-full space-y-8 lg:grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 lg:space-y-0 lg:items-center">
            <img
              className="lg:w-full w-auto mx-auto h-auto rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1724317907.png"
              alt="About Us image"
            />
            <img
              className="lg:w-full w-auto mx-auto h-auto rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1724317922.png"
              alt="About Us image"
            />
            <img
              className="lg:w-full w-auto mx-auto h-auto rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1724317934.png"
              alt="About Us image"
            />
          </div>
          <div className="w-full justify-center items-center lg:gap-10 gap-5 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start items-center inline-flex">
              <h2 className="text-center text-blue-600 text-4xl font-bold font-manrope leading-normal">
                25+
              </h2>
              <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                Years of Experience
              </h6>
            </div>
            <div className="w-full flex-col justify-start items-center inline-flex">
              <h2 className="text-center text-blue-600 text-4xl font-bold font-manrope leading-normal">
                90+
              </h2>
              <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                Team Members
              </h6>
            </div>
            <div className="w-full flex-col justify-start items-center inline-flex">
              <h2 className="text-center text-blue-600 text-4xl font-bold font-manrope leading-normal">
                64+
              </h2>
              <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                Successful Projects
              </h6>
            </div>
            <div className="w-full flex-col justify-start items-center inline-flex">
              <h2 className="text-center text-blue-600 text-4xl font-bold font-manrope leading-normal">
                60+
              </h2>
              <h6 className="text-center text-gray-500 text-base font-normal leading-relaxed">
                Happy Clients
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
