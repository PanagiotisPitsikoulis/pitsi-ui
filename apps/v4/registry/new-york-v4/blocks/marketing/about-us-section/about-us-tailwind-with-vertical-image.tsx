export default function AboutUsTailwindWithVerticalImage() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-8 sm:gap-10 lg:gap-12">
          <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-gray-900">
            Hello, We are TechWave Solutions
          </h2>
          <div className="grid grid-cols-1 items-center justify-start gap-8 sm:gap-10 lg:grid-cols-2 xl:gap-12">
            <div className="inline-flex w-full flex-col items-center justify-start gap-5 lg:items-start">
              <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
                Welcome to TechWave Solutions, your premier destination for
                cutting-edge IT solutions. Since 2000, we've been pioneering
                innovative technologies to drive businesses forward. Our
                tailored services span software development, cloud computing,
                cybersecurity, and IT consulting, all delivered with a
                commitment to quality and customer satisfaction. At TechWave,
                we're dedicated to transforming businesses through technology,
                ensuring unparalleled success in the digital era.
              </p>
              <div className="inline-flex items-center justify-center gap-3">
                <h2 className="font-manrope text-7xl leading-snug font-bold text-gray-900">
                  25
                </h2>
                <h6 className="text-base leading-relaxed font-normal text-gray-900">
                  YEARS OF <br />
                  EXPERIENCE
                </h6>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-start justify-center gap-5">
              <div className="flex w-full flex-col items-start justify-center gap-2.5 pr-4 sm:pr-10 xl:pr-16">
                <img
                  className="w-full rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1717829248.png"
                  alt="about Us image"
                />
              </div>
              <div className="flex w-full flex-col items-start justify-center gap-2.5 pl-4 sm:pl-9">
                <img
                  className="w-full rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1717829259.png"
                  alt="about Us image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
