export default function AlternateImageWithFeatureList() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-2">
          <div className="inline-flex h-full w-full flex-col items-start justify-start gap-6 lg:gap-8">
            <div className="flex flex-col items-center justify-start gap-4 lg:items-start">
              <div className="flex flex-col items-center justify-start gap-3 lg:items-start">
                <h5 className="text-center text-lg leading-relaxed font-normal text-amber-500 lg:text-start">
                  About Us
                </h5>
                <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                  Innovative construction solutions
                </h2>
              </div>
              <p className="text-center text-lg leading-relaxed font-normal text-gray-500 lg:text-start">
                Our open, flexible workspace encourages interaction and sparks
                inspiration, while dedicated areas provide quiet reflection.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 items-center justify-start gap-5 sm:grid-cols-3 sm:gap-10">
              <div className="inline-flex w-full flex-col items-center justify-start gap-2 border-b border-gray-200 pb-5 sm:items-start sm:border-r sm:border-b-0 sm:pr-10 sm:pb-0">
                <h3 className="font-manrope text-3xl leading-normal font-bold text-amber-500">
                  20
                </h3>
                <h4 className="text-xl leading-8 font-normal text-gray-500">
                  Year of Experience
                </h4>
              </div>
              <div className="inline-flex w-full flex-col items-center justify-start gap-2 border-b border-gray-200 pb-5 sm:items-start sm:border-r sm:border-b-0 sm:pr-10 sm:pb-0">
                <h3 className="font-manrope text-3xl leading-normal font-bold text-amber-500">
                  50+
                </h3>
                <h4 className="text-xl leading-8 font-normal text-gray-500">
                  Successful Project
                </h4>
              </div>
              <div className="inline-flex w-full flex-col items-center justify-start gap-2 sm:items-start sm:pr-10">
                <h3 className="font-manrope text-3xl leading-normal font-bold text-amber-500">
                  94
                </h3>
                <h4 className="text-xl leading-8 font-normal text-gray-500">
                  Trusted Workers
                </h4>
              </div>
            </div>
            <img
              className="h-auto w-full rounded-2xl object-cover"
              src="https://pagedone.io/asset/uploads/1724826702.png"
              alt="About Us Image"
            />
          </div>
          <div className="inline-flex h-full w-full flex-col items-start justify-start gap-8 pb-3.5">
            <img
              className="h-auto w-full rounded-2xl object-cover lg:h-full"
              src="https://pagedone.io/asset/uploads/1724826714.png"
              alt="About Us Image"
            />
            <ul className="flex w-full flex-col items-start justify-start gap-4 md:gap-8">
              <li className="inline-flex items-center justify-start gap-2.5">
                {/* SVG removed */}
                <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                  Innovative Eco Power Technologies
                </h5>
              </li>
              <li className="inline-flex items-center justify-start gap-2.5">
                {/* SVG removed */}
                <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                  Regularly Maintaining and Organizing your Tools
                </h5>
              </li>
              <li className="inline-flex items-center justify-start gap-2.5">
                {/* SVG removed */}
                <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                  Experienced Construction Professional
                </h5>
              </li>
              <li className="inline-flex items-center justify-start gap-2.5">
                {/* SVG removed */}
                <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                  Mattis Fringilla Ultricies
                </h5>
              </li>
              <li className="inline-flex items-center justify-start gap-2.5">
                {/* SVG removed */}
                <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                  60 Team members are individuals
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
