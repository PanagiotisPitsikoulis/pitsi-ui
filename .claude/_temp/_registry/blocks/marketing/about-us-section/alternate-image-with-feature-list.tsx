export default function AlternateImageWithFeatureList() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full justify-start items-start gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full h-full flex-col justify-start items-start lg:gap-8 gap-6 inline-flex">
            <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-3 flex">
                <h5 className="text-amber-500 text-lg font-normal leading-relaxed lg:text-start text-center">
                  About Us
                </h5>
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Innovative construction solutions
                </h2>
              </div>
              <p className="text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
                Our open, flexible workspace encourages interaction and sparks
                inspiration, while dedicated areas provide quiet reflection.
              </p>
            </div>
            <div className="w-full justify-start items-center sm:gap-10 gap-5 grid sm:grid-cols-3 grid-cols-1">
              <div className="w-full flex-col justify-start sm:items-start items-center gap-2 inline-flex sm:border-r sm:border-b-0 border-b border-gray-200 sm:pr-10 sm:pb-0 pb-5">
                <h3 className="text-amber-500 text-3xl font-bold font-manrope leading-normal">
                  20
                </h3>
                <h4 className="text-gray-500 text-xl font-normal leading-8">
                  Year of Experience
                </h4>
              </div>
              <div className="w-full flex-col justify-start sm:items-start items-center gap-2 inline-flex sm:border-r sm:border-b-0 border-b border-gray-200 sm:pr-10 sm:pb-0 pb-5">
                <h3 className="text-amber-500 text-3xl font-bold font-manrope leading-normal">
                  50+
                </h3>
                <h4 className="text-gray-500 text-xl font-normal leading-8">
                  Successful Project
                </h4>
              </div>
              <div className="w-full flex-col justify-start sm:items-start items-center gap-2 inline-flex sm:pr-10">
                <h3 className="text-amber-500 text-3xl font-bold font-manrope leading-normal">
                  94
                </h3>
                <h4 className="text-gray-500 text-xl font-normal leading-8">
                  Trusted Workers
                </h4>
              </div>
            </div>
            <img
              className="w-full h-auto rounded-2xl object-cover"
              src="https://pagedone.io/asset/uploads/1724826702.png"
              alt="About Us Image"
            />
          </div>
          <div className="w-full h-full pb-3.5 flex-col justify-start items-start gap-8 inline-flex">
            <img
              className="w-full lg:h-full h-auto rounded-2xl object-cover"
              src="https://pagedone.io/asset/uploads/1724826714.png"
              alt="About Us Image"
            />
            <ul className="w-full flex-col justify-start items-start md:gap-8 gap-4 flex">
              <li className="justify-start items-center gap-2.5 inline-flex">
                {/* SVG removed */}
                <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                  Innovative Eco Power Technologies
                </h5>
              </li>
              <li className="justify-start items-center gap-2.5 inline-flex">
                {/* SVG removed */}
                <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                  Regularly Maintaining and Organizing your Tools
                </h5>
              </li>
              <li className="justify-start items-center gap-2.5 inline-flex">
                {/* SVG removed */}
                <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                  Experienced Construction Professional
                </h5>
              </li>
              <li className="justify-start items-center gap-2.5 inline-flex">
                {/* SVG removed */}
                <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                  Mattis Fringilla Ultricies
                </h5>
              </li>
              <li className="justify-start items-center gap-2.5 inline-flex">
                {/* SVG removed */}
                <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                  60 Team members are individuals
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
