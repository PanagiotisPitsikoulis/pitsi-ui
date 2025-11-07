export default function ImageWithFeatureList() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-start gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-start items-start gap-9 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-3.5 flex">
              <span className="text-amber-700 text-base font-medium leading-relaxed">
                Our Palns
              </span>
              <h2 className="text-black text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Pick From Our Partnership Plus Curricular Plans:
              </h2>
            </div>
            <div className="w-full flex-col justify-start items-start lg:gap-10 gap-8 flex">
              <div className="w-full justify-start items-start lg:gap-6 gap-3 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <div className="w-[60px] h-[60px] flex items-center justify-center bg-amber-700 rounded-full">
                    <h3 className="text-white text-3xl font-bold font-manrope leading-normal">
                      1
                    </h3>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-3 inline-flex">
                  <h4 className="text-black text-2xl font-semibold font-manrope leading-9">
                    Enrichment Paln
                  </h4>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">
                    This description highlights the collaborative partnership
                    between and your faculty, emphasizing how works alongside
                    your institution to enhance and augment existing
                  </p>
                </div>
              </div>
              <div className="w-full justify-start items-start lg:gap-6 gap-3 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <div className="w-[60px] h-[60px] flex items-center justify-center bg-amber-700 rounded-full">
                    <h3 className="text-white text-3xl font-bold font-manrope leading-normal">
                      2
                    </h3>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-3 inline-flex">
                  <h4 className="text-black text-2xl font-semibold font-manrope leading-9">
                    Corporate Plan
                  </h4>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">
                    A corporate plan serves as a comprehensive roadmap for a
                    company's future direction and growth. It typically outlines
                    the organization's mission, vision, values, and strategic
                    objectives
                  </p>
                </div>
              </div>
              <div className="w-full justify-start items-start lg:gap-6 gap-3 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <div className="w-[60px] h-[60px] flex items-center justify-center bg-amber-700 rounded-full">
                    <h3 className="text-white text-3xl font-bold font-manrope leading-normal">
                      3
                    </h3>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-3 inline-flex">
                  <h4 className="text-black text-2xl font-semibold font-manrope leading-9">
                    Full Service Plan
                  </h4>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">
                    A Full Service Plan encompasses a comprehensive range of
                    offerings or solutions provided by a company or organization
                    to meet the diverse needs of its clients or customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="lg:w-full mx-auto h-full rounded-3xl object-cover"
            src="https://pagedone.io/asset/uploads/1717825194.png"
            alt="about Us image"
          />
        </div>
      </div>
    </section>
  );
}
