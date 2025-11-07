export default function ImageWithFeatureList() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-2">
          <div className="inline-flex w-full flex-col items-start justify-start gap-9">
            <div className="flex w-full flex-col items-center justify-start gap-3.5 lg:items-start">
              <span className="text-base leading-relaxed font-medium text-amber-700">
                Our Palns
              </span>
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-black lg:text-start">
                Pick From Our Partnership Plus Curricular Plans:
              </h2>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-8 lg:gap-10">
              <div className="inline-flex w-full items-start justify-start gap-3 lg:gap-6">
                <div className="flex items-start justify-start gap-2.5">
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-amber-700">
                    <h3 className="font-manrope text-3xl leading-normal font-bold text-white">
                      1
                    </h3>
                  </div>
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-3">
                  <h4 className="font-manrope text-2xl leading-9 font-semibold text-black">
                    Enrichment Paln
                  </h4>
                  <p className="text-base leading-relaxed font-normal text-gray-500">
                    This description highlights the collaborative partnership
                    between and your faculty, emphasizing how works alongside
                    your institution to enhance and augment existing
                  </p>
                </div>
              </div>
              <div className="inline-flex w-full items-start justify-start gap-3 lg:gap-6">
                <div className="flex items-start justify-start gap-2.5">
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-amber-700">
                    <h3 className="font-manrope text-3xl leading-normal font-bold text-white">
                      2
                    </h3>
                  </div>
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-3">
                  <h4 className="font-manrope text-2xl leading-9 font-semibold text-black">
                    Corporate Plan
                  </h4>
                  <p className="text-base leading-relaxed font-normal text-gray-500">
                    A corporate plan serves as a comprehensive roadmap for a
                    company's future direction and growth. It typically outlines
                    the organization's mission, vision, values, and strategic
                    objectives
                  </p>
                </div>
              </div>
              <div className="inline-flex w-full items-start justify-start gap-3 lg:gap-6">
                <div className="flex items-start justify-start gap-2.5">
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-amber-700">
                    <h3 className="font-manrope text-3xl leading-normal font-bold text-white">
                      3
                    </h3>
                  </div>
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-3">
                  <h4 className="font-manrope text-2xl leading-9 font-semibold text-black">
                    Full Service Plan
                  </h4>
                  <p className="text-base leading-relaxed font-normal text-gray-500">
                    A Full Service Plan encompasses a comprehensive range of
                    offerings or solutions provided by a company or organization
                    to meet the diverse needs of its clients or customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="mx-auto h-full rounded-3xl object-cover lg:w-full"
            src="https://pagedone.io/asset/uploads/1717825194.png"
            alt="about Us image"
          />
        </div>
      </div>
    </section>
  )
}
