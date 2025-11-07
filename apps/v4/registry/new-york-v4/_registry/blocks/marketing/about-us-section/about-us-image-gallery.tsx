export default function AboutUsImageGallery() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-3">
            <span className="text-center text-base leading-relaxed font-medium text-gray-500">
              Get to Know Us
            </span>
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Transforming Ideas into Digital Reality
            </h2>
          </div>
          <div className="flex w-full flex-col justify-start gap-5 lg:flex-row">
            <div className="grid inline-flex w-full grid-cols-1 flex-col items-start justify-start gap-5 lg:w-auto lg:grid-rows-2">
              <div className="flex h-full w-full flex-col items-start justify-between gap-10 rounded-3xl bg-green-200 px-8 py-5 lg:px-5 xl:px-8">
                <span className="text-base leading-relaxed font-normal whitespace-nowrap text-gray-500">
                  Satisfied Customer
                </span>
                <h2 className="font-manrope text-4xl leading-normal font-bold text-gray-900">
                  50.2K+
                </h2>
              </div>
              <img
                className="h-auto w-full rounded-3xl object-cover lg:h-full lg:w-auto"
                src="https://pagedone.io/asset/uploads/1724217836.png"
                alt="About Us image"
              />
            </div>
            <div className="grid inline-flex w-full grid-cols-1 flex-col items-start justify-start gap-5 lg:w-auto lg:grid-flow-col lg:grid-rows-2">
              <div className="grid h-full w-full grid-cols-1 items-center justify-start gap-5 sm:grid-cols-2 lg:w-auto">
                <img
                  className="h-auto w-full rounded-3xl object-cover lg:h-full lg:w-auto"
                  src="https://pagedone.io/asset/uploads/1724217789.png"
                  alt="About Us image"
                />
                <img
                  className="h-auto w-full rounded-3xl object-cover lg:h-full lg:w-auto"
                  src="https://pagedone.io/asset/uploads/1724217810.png"
                  alt="About Us image"
                />
              </div>
              <div className="flex h-full w-full flex-col items-start justify-start gap-3 rounded-3xl bg-pink-200 p-6">
                <h3 className="font-manrope w-full text-2xl leading-9 font-bold text-gray-900 lg:max-w-[468px]">
                  The Journey of Our Digital Evolution and Growth
                </h3>
                <p className="w-full text-base leading-relaxed font-normal text-gray-500 lg:max-w-[468px]">
                  Our story is one of continuous innovation and transformation,
                  evolving from a small agency into a leader in digital
                  solutions. Through dedication and creativity, we've grown to
                  meet the changing needs of our clients, delivering impactful
                  results.
                </p>
              </div>
            </div>
            <div className="grid inline-flex w-full grid-cols-1 flex-col items-start justify-start gap-5 lg:w-auto lg:grid-flow-col lg:grid-rows-2">
              <img
                className="h-auto w-full rounded-3xl object-cover lg:h-full lg:w-auto"
                src="https://pagedone.io/asset/uploads/1724217824.png"
                alt="About Us image"
              />
              <div className="grid h-full w-full grid-cols-1 items-center justify-start gap-5 sm:grid-cols-2 lg:w-auto">
                <img
                  className="h-auto w-full rounded-3xl object-cover lg:h-full lg:w-auto"
                  src="https://pagedone.io/asset/uploads/1724217848.png"
                  alt="About Us image"
                />
                <div className="inline-flex h-full w-full flex-col items-start justify-between gap-10 rounded-3xl bg-violet-200 px-6 py-5 sm:gap-0 lg:w-auto">
                  <span className="text-base leading-relaxed font-normal text-gray-500">
                    Project Completed
                  </span>
                  <h2 className="font-manrope text-4xl leading-normal font-bold text-gray-900">
                    80K+
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
