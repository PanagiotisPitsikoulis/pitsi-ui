export default function TeamSectionWithOpacityLayout() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-center text-indigo-600 text-lg font-medium leading-7 flex items-center justify-center">
            Our Blog
          </span>
          <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-snug">
            Meet the Award-Winning Team behind ArcticFlow
          </h2>
        </div>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-14">
          <div className="bg-blue-200 justify-start items-start inline-flex">
            <img
              className="w-full object-cover"
              src="https://pagedone.io/asset/uploads/1710759789.png"
            />
          </div>
          <div className="w-full transition-all duration-700 ease-in-out flex justify-center items-center bg-orange-500 flex-col gap-2.5 px-16 md:py-0 py-24">
            <div className="flex-col justify-start items-center gap-1 flex">
              <h4 className="text-center text-white text-2xl font-semibold font-manrope leading-9">
                Michael Cannon{" "}
              </h4>
              <span className="text-center text-white text-base font-normal leading-relaxed">
                Founder
              </span>
            </div>
            <p className="text-center text-white text-sm font-normal leading-snug">
              Every step of the way, we've embraced challenges as opportunities,
              striving to surpass our limits and redefine.
            </p>
            <div className="justify-start items-start gap-3.5 inline-flex">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
          </div>
          <div className="w-full justify-center items-center bg-blue-500 flex-col gap-2.5 px-16 md:py-0 py-24 lg:hidden md:flex hidden">
            <div className="flex-col justify-start items-center gap-2.5 flex">
              <div className="flex-col justify-start items-center gap-1 flex">
                <h4 className="text-center text-white text-2xl font-semibold font-manrope leading-9">
                  Dianne Russell
                </h4>
                <span className="text-center text-white text-base font-normal leading-relaxed">
                  Sales Lead
                </span>
              </div>
              <p className="text-center text-white text-sm font-normal leading-snug">
                This venture represents not only a leap of faith but also a
                profound realization of a vision. From its inception.
              </p>
              <div className="w-28 grow shrink basis-0 justify-start items-start gap-3.5 inline-flex">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div className="bg-purple-200 justify-start items-start inline-flex">
            <img
              className="w-full object-cover"
              src="https://pagedone.io/asset/uploads/1710760563.png"
            />
          </div>
          <div className="w-full flex justify-center items-center bg-blue-500 flex-col gap-2.5 px-16 md:py-0 py-24 lg:flex md:hidden">
            <div className="flex-col justify-start items-center gap-2.5 flex">
              <div className="flex-col justify-start items-center gap-1 flex">
                <h4 className="text-center text-white text-2xl font-semibold font-manrope leading-9">
                  Dianne Russell
                </h4>
                <span className="text-center text-white text-base font-normal leading-relaxed">
                  Sales Lead
                </span>
              </div>
              <p className="text-center text-white text-sm font-normal leading-snug">
                This venture represents not only a leap of faith but also a
                profound realization of a vision. From its inception.
              </p>
              <div className="w-28 grow shrink basis-0 justify-start items-start gap-3.5 inline-flex">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div className="bg-orange-200 justify-start items-start inline-flex">
            <img
              className="w-full object-cover"
              src="https://pagedone.io/asset/uploads/1710759860.png"
            />
          </div>
          <div className="w-full relative flex justify-center items-center bg-purple-500 flex-col gap-2.5 px-16 md:py-0 py-24">
            <div className="flex-col justify-start items-center gap-2.5 flex">
              <div className="flex-col justify-start items-center gap-1 flex">
                <h4 className="text-center text-white text-2xl font-semibold font-manrope leading-9">
                  Ronald Richards
                </h4>
                <span className="text-center text-white text-base font-normal leading-relaxed">
                  Product Designer
                </span>
              </div>
              <p className="text-center text-white text-sm font-normal leading-snug">
                The journey has been marked by forging meaningful partnerships,
                navigating complex negotiations, and contributing.
              </p>
              <div className="w-28 grow shrink basis-0 justify-start items-start gap-3.5 inline-flex">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
          </div>
        </div>
        <button className="mx-auto px-7 py-3 bg-orange-500 hover:bg-orange-700 transition-all duration-700 ease-in-out rounded-full shadow justify-center items-center flex">
          <span className="px-2 text-white text-xl font-semibold leading-loose">
            Join team
          </span>
        </button>
      </div>
    </section>
  );
}
