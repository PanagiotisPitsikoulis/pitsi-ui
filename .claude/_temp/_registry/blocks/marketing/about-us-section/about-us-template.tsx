export default function AboutUsTemplate() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="w-full justify-center items-center lg:gap-8 gap-3 grid lg:grid-cols-2 grid-cols-1">
            <div className="flex-col justify-start lg:items-start items-center gap-3 inline-flex">
              <span className="text-indigo-600 text-base font-normal leading-relaxed lg:text-start text-center">
                About Us
              </span>
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Senior Vice President of Construction Operations
              </h2>
            </div>
            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
              This section offers straightforward, actionable advice to help you
              manage your finances effectively. From simple budgeting tips to
              practical investment guidance.
            </p>
          </div>
          <div className="w-full flex-col justify-start items-start gap-8 flex">
            <div className="w-full justify-start items-center lg:gap-x-8 lg:gap-y-0 gap-y-8 grid lg:grid-cols-12 grid-cols-1">
              <div className="lg:col-span-4 col-span-12 w-full flex-col justify-start items-start gap-8 inline-flex">
                <img
                  className="w-full h-auto rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1724842125.png"
                  alt="About Us image"
                />
                <img
                  className="w-full h-auto rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1724842140.png"
                  alt="About Us image"
                />
              </div>
              <img
                className="lg:col-span-8 col-span-12 w-full h-auto rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1724842157.png"
                alt="About Us image"
              />
            </div>
            <div className="w-full flex-col justify-start lg:items-start items-center gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Director of Construction Planning, Development.
                </h2>
                <p className="text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
                  The Director of Construction Planning and Development is a
                  senior leadership position responsible for overseeing and
                  managing all aspects of construction planning and project
                  development. This role involves strategic oversight of
                  construction projects from conception through completion,
                  ensuring they are executed efficiently, within budget, and to
                  the highest standards.
                </p>
              </div>
              <button className="sm:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="text-white text-base font-semibold leading-relaxed px-2 py-px">
                  Contact Us
                </span>
                {/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
