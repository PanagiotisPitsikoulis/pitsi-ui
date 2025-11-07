export default function CreativeAboutUsWithKeyFeatureList() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-start gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full h-full justify-start items-start gap-8 flex sm:flex-row flex-col">
            <div className="w-full sm:pb-10 h-full justify-start items-start flex">
              <img
                className="w-full sm:h-full h-auto object-cover rounded-xl"
                src="https://pagedone.io/asset/uploads/1717828083.png"
                alt="about Us image"
              />
            </div>
            <div className="w-full sm:pt-10 h-full justify-start items-start flex">
              <img
                className="w-full sm:h-full h-auto object-cover rounded-xl"
                src="https://pagedone.io/asset/uploads/1717828098.png"
                alt="about Us image"
              />
            </div>
          </div>
          <div className="w-full flex-col justify-start items-start gap-12 inline-flex">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="flex-col justify-start items-start gap-9 flex">
                <div className="flex-col justify-start items-start gap-3.5 flex">
                  <span className="text-indigo-600 text-base font-medium leading-relaxed">
                    Who We Are
                  </span>
                  <h2 className="text-black text-4xl font-bold font-manrope leading-normal">
                    Design, Management, and Support Tailored to Your Needs
                  </h2>
                </div>
              </div>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                Whether you require expertise in coding, design, testing, or
                project management, our diverse team is equipped to meet your
                specific needs. This collaborative approach ensures that your
                projects
              </p>
            </div>
            <div className="justify-start items-start gap-8 flex sm:flex-row flex-col">
              <div className="group flex-col justify-start items-start gap-4 inline-flex">
                <div className="p-[13px] bg-indigo-600 group-hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-[10px] justify-start items-start gap-2.5 inline-flex">
                  {/* SVG removed */}
                </div>
                <div className="flex-col justify-start items-start gap-1.5 flex">
                  <h4 className="text-black text-xl font-semibold leading-8">
                    Our Mission
                  </h4>
                  <p className="text-gray-500 text-sm font-normal leading-normal">
                    Through a dedication to continuous learning, we foster a
                    dynamic workforce capable of addressing present-day
                  </p>
                </div>
              </div>
              <div className="group flex-col justify-start items-start gap-4 inline-flex">
                <div className="p-[13px] bg-indigo-600 group-hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-[10px] justify-start items-start gap-2.5 inline-flex">
                  {/* SVG removed */}
                </div>
                <div className="flex-col justify-start items-start gap-1.5 flex">
                  <h4 className="text-black text-xl font-semibold leading-8">
                    Our Vision
                  </h4>
                  <p className="text-gray-500 text-sm font-normal leading-normal">
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
  );
}
