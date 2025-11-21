export default function TailwindAboutUsSectionWithImage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="grid w-full grid-cols-1 items-start justify-start gap-4 lg:grid-cols-2 lg:gap-6 xl:gap-8">
            <div className="inline-flex w-full flex-col items-center justify-start gap-3 lg:items-start">
              <span className="text-center text-base leading-relaxed font-normal text-gray-400 lg:text-start">
                About Us
              </span>
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                Seamless Strategies to Shape Your Financial Destiny
              </h2>
            </div>
            <div className="inline-flex w-full flex-col items-start justify-start gap-4 lg:gap-6">
              <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
                Learn actionable techniques and smart approaches that simplify
                financial management and empower you to shape your destiny.
                Whether you're looking to optimize investments, streamline
                budgeting, or plan for long-term goals,
              </p>
              <div className="flex flex-col items-start justify-start gap-4 sm:flex-row sm:gap-8">
                <div className="inline-flex flex-col items-start justify-start gap-2.5">
                  <div className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-[#004046]">
                    {/* SVG removed */}
                  </div>
                  <div className="flex flex-col items-start justify-start gap-1.5">
                    <h6 className="text-base leading-relaxed font-medium text-black">
                      Our Mission
                    </h6>
                    <p className="text-xs leading-normal font-normal text-gray-500">
                      Through a dedication to continuous learning, we foster a
                      dynamic workforce capable.
                    </p>
                  </div>
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-2.5">
                  <div className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-[#004046]">
                    {/* SVG removed */}
                  </div>
                  <div className="flex flex-col items-start justify-start gap-1.5">
                    <h6 className="text-base leading-relaxed font-medium text-black">
                      Our Vision
                    </h6>
                    <p className="text-xs leading-normal font-normal text-gray-500">
                      We are committed to transforming the landscape by
                      equipping our team with the skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="h-auto rounded-2xl object-cover"
            src="https://pagedone.io/asset/uploads/1724305367.png"
            alt="About Us image"
          />
        </div>
      </div>
    </section>
  )
}
