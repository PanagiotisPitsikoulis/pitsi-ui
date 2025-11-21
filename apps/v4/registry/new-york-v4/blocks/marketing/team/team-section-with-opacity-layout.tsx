export default function TeamSectionWithOpacityLayout() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="flex items-center justify-center text-center text-lg leading-7 font-medium text-indigo-600">
            Our Blog
          </span>
          <h2 className="font-manrope text-center text-4xl leading-snug font-bold text-gray-900">
            Meet the Award-Winning Team behind ArcticFlow
          </h2>
        </div>
        <div className="mb-14 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="inline-flex items-start justify-start bg-blue-200">
            <img
              className="w-full object-cover"
              src="https://pagedone.io/asset/uploads/1710759789.png"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2.5 bg-orange-500 px-16 py-24 transition-all duration-700 ease-in-out md:py-0">
            <div className="flex flex-col items-center justify-start gap-1">
              <h4 className="font-manrope text-center text-2xl leading-9 font-semibold text-white">
                Michael Cannon{" "}
              </h4>
              <span className="text-center text-base leading-relaxed font-normal text-white">
                Founder
              </span>
            </div>
            <p className="text-center text-sm leading-snug font-normal text-white">
              Every step of the way, we've embraced challenges as opportunities,
              striving to surpass our limits and redefine.
            </p>
            <div className="inline-flex items-start justify-start gap-3.5">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
          </div>
          <div className="bg-primary hidden w-full flex-col items-center justify-center gap-2.5 px-16 py-24 md:flex md:py-0 lg:hidden">
            <div className="flex flex-col items-center justify-start gap-2.5">
              <div className="flex flex-col items-center justify-start gap-1">
                <h4 className="font-manrope text-center text-2xl leading-9 font-semibold text-white">
                  Dianne Russell
                </h4>
                <span className="text-center text-base leading-relaxed font-normal text-white">
                  Sales Lead
                </span>
              </div>
              <p className="text-center text-sm leading-snug font-normal text-white">
                This venture represents not only a leap of faith but also a
                profound realization of a vision. From its inception.
              </p>
              <div className="inline-flex w-28 shrink grow basis-0 items-start justify-start gap-3.5">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div className="inline-flex items-start justify-start bg-purple-200">
            <img
              className="w-full object-cover"
              src="https://pagedone.io/asset/uploads/1710760563.png"
            />
          </div>
          <div className="bg-primary flex w-full flex-col items-center justify-center gap-2.5 px-16 py-24 md:hidden md:py-0 lg:flex">
            <div className="flex flex-col items-center justify-start gap-2.5">
              <div className="flex flex-col items-center justify-start gap-1">
                <h4 className="font-manrope text-center text-2xl leading-9 font-semibold text-white">
                  Dianne Russell
                </h4>
                <span className="text-center text-base leading-relaxed font-normal text-white">
                  Sales Lead
                </span>
              </div>
              <p className="text-center text-sm leading-snug font-normal text-white">
                This venture represents not only a leap of faith but also a
                profound realization of a vision. From its inception.
              </p>
              <div className="inline-flex w-28 shrink grow basis-0 items-start justify-start gap-3.5">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div className="inline-flex items-start justify-start bg-orange-200">
            <img
              className="w-full object-cover"
              src="https://pagedone.io/asset/uploads/1710759860.png"
            />
          </div>
          <div className="relative flex w-full flex-col items-center justify-center gap-2.5 bg-purple-500 px-16 py-24 md:py-0">
            <div className="flex flex-col items-center justify-start gap-2.5">
              <div className="flex flex-col items-center justify-start gap-1">
                <h4 className="font-manrope text-center text-2xl leading-9 font-semibold text-white">
                  Ronald Richards
                </h4>
                <span className="text-center text-base leading-relaxed font-normal text-white">
                  Product Designer
                </span>
              </div>
              <p className="text-center text-sm leading-snug font-normal text-white">
                The journey has been marked by forging meaningful partnerships,
                navigating complex negotiations, and contributing.
              </p>
              <div className="inline-flex w-28 shrink grow basis-0 items-start justify-start gap-3.5">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
          </div>
        </div>
        <button className="mx-auto flex items-center justify-center rounded-full bg-orange-500 px-7 py-3 shadow transition-all duration-700 ease-in-out hover:bg-orange-700">
          <span className="px-2 text-xl leading-loose font-semibold text-white">
            Join team
          </span>
        </button>
      </div>
    </section>
  )
}
