export default function TailwindAboutUsSectionWithVideoLayout() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-3">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-indigo-700">
              About Us
            </h2>
            <p className="max-w-3xl text-center text-base leading-relaxed font-normal text-gray-500">
              As an IT solutions provider, we specialize in designing bespoke
              websites engineered for business growth. Elevate your business
              ambitions with our expert IT services tailored to your needs.
            </p>
          </div>
          <div className="relative inline-flex w-full items-center justify-center gap-2.5">
            <img
              src="https://pagedone.io/asset/uploads/1717755297.png"
              alt="about Us image"
              className="w-full rounded-3xl object-cover"
            />
            <a className="absolute flex items-start justify-start gap-2.5 rounded-full border border-gray-200 p-3.5">
              {/* SVG removed */}
            </a>
          </div>
          <div className="grid w-full grid-cols-2 items-center justify-between gap-7 md:grid-cols-4 lg:gap-10">
            <div className="inline-flex w-full flex-col items-center justify-start">
              <h4 className="font-manrope text-center text-4xl leading-normal font-bold text-indigo-700">
                25+
              </h4>
              <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                Years of Experience
              </h6>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start">
              <h4 className="font-manrope text-center text-4xl leading-normal font-bold text-indigo-700">
                90+
              </h4>
              <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                Team Members
              </h6>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start">
              <h4 className="font-manrope text-center text-4xl leading-normal font-bold text-indigo-700">
                64+
              </h4>
              <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                Successful Projects
              </h6>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start">
              <h4 className="font-manrope text-center text-4xl leading-normal font-bold text-indigo-700">
                60+
              </h4>
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
