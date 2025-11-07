export default function AboutUsWithDescriptiveCard() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-start gap-12 flex flex-col">
          <div className="w-full justify-start items-center gap-3 grid lg:grid-cols-2 grid-cols-1">
            <h2 className="lg:max-w-lg w-full text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
              Your Dedicated Property Experts
            </h2>
            <p className="w-full text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
              A modern real estate agent providing a smooth and engaging way to
              find your dream home in the heart of the city. With our expert
              guidance, your perfect home is just a step away.
            </p>
          </div>
          <div className="w-full justify-start items-start gap-5 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full h-full flex-col justify-start items-start gap-5 inline-flex">
              <div className="w-full h-full justify-start items-center gap-5 inline-flex">
                <div className="w-full h-full pl-10 pr-3.5 py-10 bg-zinc-100 hover:bg-zinc-200 transition-all duration-700 ease-in-out rounded-xl flex-col justify-center items-start gap-2 inline-flex">
                  <h3 className="text-indigo-700 text-3xl font-semibold font-manrope leading-normal">
                    20k+
                  </h3>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Satisfied Customer
                  </h6>
                </div>
                <div className="w-full h-full pl-10 pr-3.5 py-10 bg-zinc-100 hover:bg-zinc-200 transition-all duration-700 ease-in-out rounded-xl flex-col justify-center items-start gap-2 inline-flex">
                  <h3 className="text-indigo-700 text-3xl font-semibold font-manrope leading-normal">
                    28+
                  </h3>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Year of Experience
                  </h6>
                </div>
              </div>
              <div className="w-full h-full justify-start items-center gap-5 inline-flex">
                <div className="w-full h-full pl-10 pr-3.5 py-10 bg-zinc-100 hover:bg-zinc-200 transition-all duration-700 ease-in-out rounded-xl flex-col justify-center items-start gap-2 inline-flex">
                  <h3 className="text-indigo-700 text-3xl font-semibold font-manrope leading-normal">
                    10+
                  </h3>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Award Winning
                  </h6>
                </div>
                <div className="w-full h-full pl-10 pr-3.5 py-10 bg-zinc-100 hover:bg-zinc-200 transition-all duration-700 ease-in-out rounded-xl flex-col justify-center items-start gap-2 inline-flex">
                  <h3 className="text-indigo-700 text-3xl font-semibold font-manrope leading-normal">
                    42+
                  </h3>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Property Collection
                  </h6>
                </div>
              </div>
            </div>
            <div className="w-full h-full p-6 bg-gray-100 rounded-2xl justify-start items-start gap-6 sm:grid sm:grid-cols-2 grid-cols-1 flex flex-col-reverse">
              <div className="h-full flex-col lg:justify-start justify-center items-start gap-6 inline-flex">
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  We have observed the constantly changing real estate market
                  and have become a trusted partner for thousands of clients.
                  Our commitment to excellence and personalized service has
                  earned us their loyalty and confidence.
                </p>
                <button className="group py-2.5 rounded-full justify-center items-center flex">
                  <span className="group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out pr-2 py-px text-blue-700 text-base font-semibold leading-relaxed">
                    Show More
                  </span>
                  {/* SVG removed */}
                </button>
              </div>
              <img
                className="w-full sm:h-full h-auto object-cover rounded-xl"
                src="https://pagedone.io/asset/uploads/1717826634.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
