export default function AboutUsImageGallery() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <span className="text-center text-gray-500 text-base font-medium leading-relaxed">
              Get to Know Us
            </span>
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Transforming Ideas into Digital Reality
            </h2>
          </div>
          <div className="w-full justify-start gap-5 flex lg:flex-row flex-col">
            <div className="grid lg:grid-rows-2 grid-cols-1 lg:w-auto w-full flex-col justify-start items-start gap-5 inline-flex">
              <div className="w-full h-full gap-10 xl:px-8 lg:px-5 px-8 py-5 bg-green-200 rounded-3xl flex-col justify-between items-start flex">
                <span className="text-gray-500 text-base font-normal leading-relaxed whitespace-nowrap">
                  Satisfied Customer
                </span>
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                  50.2K+
                </h2>
              </div>
              <img
                className="lg:w-auto w-full rounded-3xl lg:h-full h-auto object-cover"
                src="https://pagedone.io/asset/uploads/1724217836.png"
                alt="About Us image"
              />
            </div>
            <div className="grid lg:grid-rows-2 grid-cols-1 lg:grid-flow-col lg:w-auto w-full flex-col justify-start items-start gap-5 inline-flex">
              <div className="lg:w-auto w-full h-full justify-start items-center gap-5 grid sm:grid-cols-2 grid-cols-1">
                <img
                  className="rounded-3xl lg:w-auto w-full lg:h-full h-auto object-cover"
                  src="https://pagedone.io/asset/uploads/1724217789.png"
                  alt="About Us image"
                />
                <img
                  className="rounded-3xl lg:w-auto w-full lg:h-full h-auto object-cover"
                  src="https://pagedone.io/asset/uploads/1724217810.png"
                  alt="About Us image"
                />
              </div>
              <div className="w-full h-full p-6 bg-pink-200 rounded-3xl flex-col justify-start items-start gap-3 flex">
                <h3 className="lg:max-w-[468px] w-full text-gray-900 text-2xl font-bold font-manrope leading-9">
                  The Journey of Our Digital Evolution and Growth
                </h3>
                <p className="lg:max-w-[468px] w-full text-gray-500 text-base font-normal leading-relaxed">
                  Our story is one of continuous innovation and transformation,
                  evolving from a small agency into a leader in digital
                  solutions. Through dedication and creativity, we've grown to
                  meet the changing needs of our clients, delivering impactful
                  results.
                </p>
              </div>
            </div>
            <div className="grid lg:grid-rows-2 grid-cols-1 lg:grid-flow-col lg:w-auto w-full flex-col justify-start items-start gap-5 inline-flex">
              <img
                className="lg:w-auto w-full lg:h-full h-auto rounded-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1724217824.png"
                alt="About Us image"
              />
              <div className="lg:w-auto w-full h-full justify-start items-center gap-5 grid sm:grid-cols-2 grid-cols-1">
                <img
                  className="lg:w-auto w-full lg:h-full h-auto rounded-3xl object-cover"
                  src="https://pagedone.io/asset/uploads/1724217848.png"
                  alt="About Us image"
                />
                <div className="lg:w-auto w-full h-full px-6 py-5 sm:gap-0 gap-10 bg-violet-200 rounded-3xl flex-col justify-between items-start inline-flex">
                  <span className="text-gray-500 text-base font-normal leading-relaxed">
                    Project Completed
                  </span>
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    80K+
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
