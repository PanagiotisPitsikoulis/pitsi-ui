export default function SimpleFourTeamCardsWithAHoverEffect() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start lg:items-start items-center lg:gap-12 gap-10 inline-flex">
          <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
            The Team Crafting Creative Visions
          </h2>
          <div className="justify-center items-center gap-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <div className="group relative rounded-2xl flex-col justify-start items-start inline-flex">
              <div className="rounded-2xl bg-[#d7c7c1] justify-start items-start gap-2.5 inline-flex">
                <img
                  className="rounded-2xl object-cover"
                  src="https://pagedone.io/asset/uploads/1722405892.png"
                  alt="Team Member Image"
                />
              </div>
              <div className="w-full cardBox px-5 pt-10 pb-5 rounded-b-2xl justify-start items-center gap-2 inline-flex absolute bottom-0 transition-all duration-700 ease-in-out -z-10 group-hover:z-10">
                <div className="w-full flex-col justify-between items-start gap-0.5 inline-flex relative">
                  <h6 className="text-white text-base font-medium leading-relaxed">
                    Vikram Reddy
                  </h6>
                  <span className="text-lime-500 text-xs font-normal leading-normal">
                    Marketing Manager
                  </span>
                </div>
                <button className="relative hover:scale-125 transition-all duration-700 ease-in-out">
                  {/* SVG removed */}
                </button>
              </div>
            </div>
            <div className="group relative rounded-2xl flex-col justify-start items-start inline-flex">
              <div className="rounded-2xl bg-[#d6d0cf] justify-start items-start gap-2.5 inline-flex">
                <img
                  className="rounded-2xl object-cover"
                  src="https://pagedone.io/asset/uploads/1722405902.png"
                  alt="Team Member Image"
                />
              </div>
              <div className="w-full cardBox px-5 pt-10 pb-5 rounded-b-2xl justify-start items-center gap-2 inline-flex absolute bottom-0 transition-all duration-700 ease-in-out -z-10 group-hover:z-10">
                <div className="w-full flex-col justify-between items-start gap-0.5 inline-flex relative">
                  <h6 className="text-white text-base font-medium leading-relaxed">
                    Kiran Saxena
                  </h6>
                  <span className="text-lime-500 text-xs font-normal leading-normal">
                    Founder
                  </span>
                </div>
                <button className="relative hover:scale-125 transition-all duration-700 ease-in-out">
                  {/* SVG removed */}
                </button>
              </div>
            </div>
            <div className="group rounded-2xl flex-col justify-start items-center inline-flex relative">
              <div className="rounded-2xl bg-[#cfc0af] justify-start items-start gap-2.5 inline-flex">
                <img
                  className="rounded-2xl object-cover"
                  src="https://pagedone.io/asset/uploads/1722405913.png"
                  alt="Team Member Image"
                />
              </div>
              <div className="w-full cardBox px-5 pt-10 pb-5 rounded-b-2xl justify-start items-center gap-2 inline-flex absolute bottom-0 transition-all duration-700 ease-in-out -z-10 group-hover:z-10">
                <div className="w-full flex-col justify-between items-start gap-0.5 inline-flex relative">
                  <h6 className="text-white text-base font-medium leading-relaxed">
                    Amit Desai
                  </h6>
                  <span className="text-lime-500 text-xs font-normal leading-normal">
                    Designer
                  </span>
                </div>
                <button className="relative hover:scale-125 transition-all duration-700 ease-in-out">
                  {/* SVG removed */}
                </button>
              </div>
            </div>
            <div className="group relative rounded-2xl flex-col justify-start items-start inline-flex">
              <div className="rounded-2xl bg-[#c7bcbd] justify-start items-start gap-2.5 inline-flex">
                <img
                  className="rounded-2xl object-cover"
                  src="https://pagedone.io/asset/uploads/1722405924.png"
                  alt="Team Member Image"
                />
              </div>
              <div className="w-full cardBox px-5 pt-10 pb-5 rounded-b-2xl justify-start items-center gap-2 inline-flex absolute bottom-0 transition-all duration-700 ease-in-out -z-10 group-hover:z-10">
                <div className="w-full flex-col justify-between items-start gap-0.5 inline-flex relative">
                  <h6 className="text-white text-base font-medium leading-relaxed">
                    Rohit Sharma
                  </h6>
                  <span className="text-lime-500 text-xs font-normal leading-normal">
                    Project Manager
                  </span>
                </div>
                <button className="relative hover:scale-125 transition-all duration-700 ease-in-out">
                  {/* SVG removed */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
