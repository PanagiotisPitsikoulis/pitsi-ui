export default function TailwindAboutUsSectionWithImage() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="w-full justify-start items-start xl:gap-8 lg:gap-6 gap-4 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 inline-flex">
              <span className="text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                About Us
              </span>
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Seamless Strategies to Shape Your Financial Destiny
              </h2>
            </div>
            <div className="w-full flex-col justify-start items-start lg:gap-6 gap-4 inline-flex">
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Learn actionable techniques and smart approaches that simplify
                financial management and empower you to shape your destiny.
                Whether you're looking to optimize investments, streamline
                budgeting, or plan for long-term goals,
              </p>
              <div className="justify-start items-start sm:gap-8 gap-4 flex sm:flex-row flex-col">
                <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="w-[50px] h-[50px] bg-[#004046] rounded-[10px] justify-center items-center inline-flex">
                    {/* SVG removed */}
                  </div>
                  <div className="flex-col justify-start items-start gap-1.5 flex">
                    <h6 className="text-black text-base font-medium leading-relaxed">
                      Our Mission
                    </h6>
                    <p className="text-gray-500 text-xs font-normal leading-normal">
                      Through a dedication to continuous learning, we foster a
                      dynamic workforce capable.
                    </p>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="w-[50px] h-[50px] bg-[#004046] rounded-[10px] justify-center items-center inline-flex">
                    {/* SVG removed */}
                  </div>
                  <div className="flex-col justify-start items-start gap-1.5 flex">
                    <h6 className="text-black text-base font-medium leading-relaxed">
                      Our Vision
                    </h6>
                    <p className="text-gray-500 text-xs font-normal leading-normal">
                      We are committed to transforming the landscape by
                      equipping our team with the skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="rounded-2xl h-auto object-cover"
            src="https://pagedone.io/asset/uploads/1724305367.png"
            alt="About Us image"
          />
        </div>
      </div>
    </section>
  );
}
