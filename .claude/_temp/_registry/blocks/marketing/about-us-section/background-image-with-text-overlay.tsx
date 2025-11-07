export default function BackgroundImageWithTextOverlay() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-start lg:items-start items-center lg:gap-5 gap-4 flex">
            <div className="px-2.5 py-0.5 rounded-full border border-lime-400 justify-start items-center gap-1.5 inline-flex">
              <span className="text-center text-lime-400 text-xs font-medium leading-normal">
                About Us
              </span>
            </div>
            <div className="justify-start items-center gap-4 grid lg:grid-cols-2 grid-cols-1">
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Empowering Business Success with Advanced Technology
              </h2>
              <p className="text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
                We empower business success by leveraging advanced technology to
                streamline operations, drive growth, and ensure a competitive
                edge. Our solutions adapt to your needs and deliver impactful
                results.
              </p>
            </div>
          </div>
          <div className="w-full rounded-3xl relative">
            <img
              src="https://pagedone.io/asset/uploads/1724839719.png"
              alt="About Us image"
              className="rounded-3xl w-full h-auto object-cover max-[600px]:h-[450px]"
            />
            <div className="w-full md:p-8 p-4 md:gap-6 gap-4 flex flex-col absolute bottom-0">
              <div className="w-full justify-start items-start md:gap-8 gap-4 flex max-[500px]:flex-col flex-row">
                <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                  <h3 className="text-lime-400 text-3xl font-bold font-manrope leading-normal">
                    26
                  </h3>
                  <h6 className="text-white text-base font-normal leading-relaxed whitespace-nowrap">
                    Year of Experience
                  </h6>
                </div>
                <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                  <h3 className="text-lime-400 text-3xl font-bold font-manrope leading-normal">
                    125+
                  </h3>
                  <h6 className="text-white text-base font-normal leading-relaxed whitespace-nowrap">
                    Completed Project
                  </h6>
                </div>
                <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                  <h3 className="text-lime-400 text-3xl font-bold font-manrope leading-normal">
                    10+
                  </h3>
                  <h6 className="text-white text-base font-normal leading-relaxed whitespace-nowrap">
                    Award Won
                  </h6>
                </div>
              </div>
              <p className="text-gray-200 text-base font-light leading-relaxed">
                Our Journey began with a simple yet profound vision: to redefine
                the industry landscape through innovation, dedication and
                unwavering commitment to our client
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
