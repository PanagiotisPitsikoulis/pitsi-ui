export default function AboutUsWithDescriptiveCard() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="flex w-full flex-col items-start justify-start gap-12">
          <div className="grid w-full grid-cols-1 items-center justify-start gap-3 lg:grid-cols-2">
            <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-gray-900 lg:max-w-lg lg:text-start">
              Your Dedicated Property Experts
            </h2>
            <p className="w-full text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
              A modern real estate agent providing a smooth and engaging way to
              find your dream home in the heart of the city. With our expert
              guidance, your perfect home is just a step away.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-5 lg:grid-cols-2">
            <div className="inline-flex h-full w-full flex-col items-start justify-start gap-5">
              <div className="inline-flex h-full w-full items-center justify-start gap-5">
                <div className="inline-flex h-full w-full flex-col items-start justify-center gap-2 rounded-xl bg-zinc-100 py-10 pr-3.5 pl-10 transition-all duration-700 ease-in-out hover:bg-zinc-200">
                  <h3 className="font-manrope text-3xl leading-normal font-semibold text-indigo-700">
                    20k+
                  </h3>
                  <h6 className="text-base leading-relaxed font-normal text-gray-500">
                    Satisfied Customer
                  </h6>
                </div>
                <div className="inline-flex h-full w-full flex-col items-start justify-center gap-2 rounded-xl bg-zinc-100 py-10 pr-3.5 pl-10 transition-all duration-700 ease-in-out hover:bg-zinc-200">
                  <h3 className="font-manrope text-3xl leading-normal font-semibold text-indigo-700">
                    28+
                  </h3>
                  <h6 className="text-base leading-relaxed font-normal text-gray-500">
                    Year of Experience
                  </h6>
                </div>
              </div>
              <div className="inline-flex h-full w-full items-center justify-start gap-5">
                <div className="inline-flex h-full w-full flex-col items-start justify-center gap-2 rounded-xl bg-zinc-100 py-10 pr-3.5 pl-10 transition-all duration-700 ease-in-out hover:bg-zinc-200">
                  <h3 className="font-manrope text-3xl leading-normal font-semibold text-indigo-700">
                    10+
                  </h3>
                  <h6 className="text-base leading-relaxed font-normal text-gray-500">
                    Award Winning
                  </h6>
                </div>
                <div className="inline-flex h-full w-full flex-col items-start justify-center gap-2 rounded-xl bg-zinc-100 py-10 pr-3.5 pl-10 transition-all duration-700 ease-in-out hover:bg-zinc-200">
                  <h3 className="font-manrope text-3xl leading-normal font-semibold text-indigo-700">
                    42+
                  </h3>
                  <h6 className="text-base leading-relaxed font-normal text-gray-500">
                    Property Collection
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex h-full w-full grid-cols-1 flex-col-reverse items-start justify-start gap-6 rounded-2xl bg-gray-100 p-6 sm:grid sm:grid-cols-2">
              <div className="inline-flex h-full flex-col items-start justify-center gap-6 lg:justify-start">
                <p className="text-base leading-relaxed font-normal text-gray-500">
                  We have observed the constantly changing real estate market
                  and have become a trusted partner for thousands of clients.
                  Our commitment to excellence and personalized service has
                  earned us their loyalty and confidence.
                </p>
                <button className="group flex items-center justify-center rounded-full py-2.5">
                  <span className="py-px pr-2 text-base leading-relaxed font-semibold text-blue-700 transition-all duration-700 ease-in-out group-hover:-translate-x-0.5">
                    Show More
                  </span>
                  {/* SVG removed */}
                </button>
              </div>
              <img
                className="h-auto w-full rounded-xl object-cover sm:h-full"
                src="https://pagedone.io/asset/uploads/1717826634.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
