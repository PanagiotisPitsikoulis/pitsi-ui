export default function CreativeAboutUsWithKeyFeatureList() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-2">
          <div className="flex h-full w-full flex-col items-start justify-start gap-8 sm:flex-row">
            <div className="flex h-full w-full items-start justify-start sm:pb-10">
              <img
                className="h-auto w-full rounded-xl object-cover sm:h-full"
                src="https://pagedone.io/asset/uploads/1717828083.png"
                alt="about Us image"
              />
            </div>
            <div className="flex h-full w-full items-start justify-start sm:pt-10">
              <img
                className="h-auto w-full rounded-xl object-cover sm:h-full"
                src="https://pagedone.io/asset/uploads/1717828098.png"
                alt="about Us image"
              />
            </div>
          </div>
          <div className="inline-flex w-full flex-col items-start justify-start gap-12">
            <div className="flex flex-col items-start justify-start gap-5">
              <div className="flex flex-col items-start justify-start gap-9">
                <div className="flex flex-col items-start justify-start gap-3.5">
                  <span className="text-base leading-relaxed font-medium text-indigo-600">
                    Who We Are
                  </span>
                  <h2 className="font-manrope text-4xl leading-normal font-bold text-black">
                    Design, Management, and Support Tailored to Your Needs
                  </h2>
                </div>
              </div>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                Whether you require expertise in coding, design, testing, or
                project management, our diverse team is equipped to meet your
                specific needs. This collaborative approach ensures that your
                projects
              </p>
            </div>
            <div className="flex flex-col items-start justify-start gap-8 sm:flex-row">
              <div className="group inline-flex flex-col items-start justify-start gap-4">
                <div className="inline-flex items-start justify-start gap-2.5 rounded-[10px] bg-indigo-600 p-[13px] transition-all duration-700 ease-in-out group-hover:bg-indigo-700">
                  {/* SVG removed */}
                </div>
                <div className="flex flex-col items-start justify-start gap-1.5">
                  <h4 className="text-xl leading-8 font-semibold text-black">
                    Our Mission
                  </h4>
                  <p className="text-sm leading-normal font-normal text-gray-500">
                    Through a dedication to continuous learning, we foster a
                    dynamic workforce capable of addressing present-day
                  </p>
                </div>
              </div>
              <div className="group inline-flex flex-col items-start justify-start gap-4">
                <div className="inline-flex items-start justify-start gap-2.5 rounded-[10px] bg-indigo-600 p-[13px] transition-all duration-700 ease-in-out group-hover:bg-indigo-700">
                  {/* SVG removed */}
                </div>
                <div className="flex flex-col items-start justify-start gap-1.5">
                  <h4 className="text-xl leading-8 font-semibold text-black">
                    Our Vision
                  </h4>
                  <p className="text-sm leading-normal font-normal text-gray-500">
                    We are committed to transforming the landscape by equipping
                    our team with the skills and knowledge needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
