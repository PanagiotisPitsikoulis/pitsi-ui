export default function VisualImageWithStats() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-center justify-start gap-8">
          <div className="flex w-full flex-col items-center justify-start gap-4">
            <div className="flex w-full flex-col items-center justify-start gap-3">
              <h5 className="text-center text-lg leading-relaxed font-normal text-orange-500">
                About Us
              </h5>
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                Projects with Unique Construction Solutions
              </h2>
            </div>
            <p className="w-full text-center text-lg leading-relaxed font-normal text-gray-500 lg:max-w-5xl lg:pr-14">
              Our projects stand out through our commitment to unique
              construction solutions. We approach each project with a fresh
              perspective, employing innovative techniques and customized
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-start gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-10">
            <div className="inline-flex w-full flex-col items-center justify-start">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-orange-500">
                25+
              </h2>
              <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                Years of Experience
              </h6>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-orange-500">
                90+
              </h2>
              <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                Team Members
              </h6>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-orange-500">
                64+
              </h2>
              <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                Successful Projects
              </h6>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-orange-500">
                60+
              </h2>
              <h6 className="text-center text-base leading-relaxed font-normal text-gray-500">
                Happy Clients
              </h6>
            </div>
          </div>
          <img
            className="h-auto w-full rounded-2xl object-cover"
            src="https://pagedone.io/asset/uploads/1724829118.png"
            alt="About Us image"
          />
        </div>
      </div>
    </section>
  )
}
