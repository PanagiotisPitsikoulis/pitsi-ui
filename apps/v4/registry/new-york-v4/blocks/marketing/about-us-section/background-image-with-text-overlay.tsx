export default function BackgroundImageWithTextOverlay() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-4 lg:items-start lg:gap-5">
            <div className="inline-flex items-center justify-start gap-1.5 rounded-full border border-lime-400 px-2.5 py-0.5">
              <span className="text-center text-xs leading-normal font-medium text-lime-400">
                About Us
              </span>
            </div>
            <div className="grid grid-cols-1 items-center justify-start gap-4 lg:grid-cols-2">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                Empowering Business Success with Advanced Technology
              </h2>
              <p className="text-center text-lg leading-relaxed font-normal text-gray-500 lg:text-start">
                We empower business success by leveraging advanced technology to
                streamline operations, drive growth, and ensure a competitive
                edge. Our solutions adapt to your needs and deliver impactful
                results.
              </p>
            </div>
          </div>
          <div className="relative w-full rounded-3xl">
            <img
              src="https://pagedone.io/asset/uploads/1724839719.png"
              alt="About Us image"
              className="h-auto w-full rounded-3xl object-cover max-[600px]:h-[450px]"
            />
            <div className="absolute bottom-0 flex w-full flex-col gap-4 p-4 md:gap-6 md:p-8">
              <div className="flex w-full flex-row items-start justify-start gap-4 max-[500px]:flex-col md:gap-8">
                <div className="inline-flex flex-col items-start justify-start gap-0.5">
                  <h3 className="font-manrope text-3xl leading-normal font-bold text-lime-400">
                    26
                  </h3>
                  <h6 className="text-base leading-relaxed font-normal whitespace-nowrap text-white">
                    Year of Experience
                  </h6>
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-0.5">
                  <h3 className="font-manrope text-3xl leading-normal font-bold text-lime-400">
                    125+
                  </h3>
                  <h6 className="text-base leading-relaxed font-normal whitespace-nowrap text-white">
                    Completed Project
                  </h6>
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-0.5">
                  <h3 className="font-manrope text-3xl leading-normal font-bold text-lime-400">
                    10+
                  </h3>
                  <h6 className="text-base leading-relaxed font-normal whitespace-nowrap text-white">
                    Award Won
                  </h6>
                </div>
              </div>
              <p className="text-base leading-relaxed font-light text-gray-200">
                Our Journey began with a simple yet profound vision: to redefine
                the industry landscape through innovation, dedication and
                unwavering commitment to our client
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
