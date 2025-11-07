export default function AboutUsTailwindWithVerticalImage() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-12 sm:gap-10 gap-8 inline-flex">
          <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Hello, We are TechWave Solutions
          </h2>
          <div className="justify-start items-center xl:gap-12 sm:gap-10 gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-5 inline-flex">
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Welcome to TechWave Solutions, your premier destination for
                cutting-edge IT solutions. Since 2000, we've been pioneering
                innovative technologies to drive businesses forward. Our
                tailored services span software development, cloud computing,
                cybersecurity, and IT consulting, all delivered with a
                commitment to quality and customer satisfaction. At TechWave,
                we're dedicated to transforming businesses through technology,
                ensuring unparalleled success in the digital era.
              </p>
              <div className="justify-center items-center gap-3 inline-flex">
                <h2 className="text-gray-900 text-7xl font-bold font-manrope leading-snug">
                  25
                </h2>
                <h6 className="text-gray-900 text-base font-normal leading-relaxed">
                  YEARS OF <br />
                  EXPERIENCE
                </h6>
              </div>
            </div>
            <div className="w-full flex-col justify-center items-start gap-5 inline-flex">
              <div className="w-full xl:pr-16 sm:pr-10 pr-4 flex-col justify-center items-start gap-2.5 flex">
                <img
                  className="w-full rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1717829248.png"
                  alt="about Us image"
                />
              </div>
              <div className="w-full sm:pl-9 pl-4 flex-col justify-center items-start gap-2.5 flex">
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
  );
}
