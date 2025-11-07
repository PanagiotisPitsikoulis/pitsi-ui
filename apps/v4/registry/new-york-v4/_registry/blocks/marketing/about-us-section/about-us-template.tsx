export default function AboutUsTemplate() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="grid w-full grid-cols-1 items-center justify-center gap-3 lg:grid-cols-2 lg:gap-8">
            <div className="inline-flex flex-col items-center justify-start gap-3 lg:items-start">
              <span className="text-center text-base leading-relaxed font-normal text-indigo-600 lg:text-start">
                About Us
              </span>
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                Senior Vice President of Construction Operations
              </h2>
            </div>
            <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
              This section offers straightforward, actionable advice to help you
              manage your finances effectively. From simple budgeting tips to
              practical investment guidance.
            </p>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-8">
            <div className="grid w-full grid-cols-1 items-center justify-start gap-y-8 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
              <div className="col-span-12 inline-flex w-full flex-col items-start justify-start gap-8 lg:col-span-4">
                <img
                  className="h-auto w-full rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1724842125.png"
                  alt="About Us image"
                />
                <img
                  className="h-auto w-full rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1724842140.png"
                  alt="About Us image"
                />
              </div>
              <img
                className="col-span-12 h-auto w-full rounded-xl object-cover lg:col-span-8"
                src="https://pagedone.io/asset/uploads/1724842157.png"
                alt="About Us image"
              />
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-8 lg:items-start">
              <div className="flex w-full flex-col items-center justify-start gap-3 lg:items-start">
                <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                  Director of Construction Planning, Development.
                </h2>
                <p className="text-center text-lg leading-relaxed font-normal text-gray-500 lg:text-start">
                  The Director of Construction Planning and Development is a
                  senior leadership position responsible for overseeing and
                  managing all aspects of construction planning and project
                  development. This role involves strategic oversight of
                  construction projects from conception through completion,
                  ensuring they are executed efficiently, within budget, and to
                  the highest standards.
                </p>
              </div>
              <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
                <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                  Contact Us
                </span>
                {/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
