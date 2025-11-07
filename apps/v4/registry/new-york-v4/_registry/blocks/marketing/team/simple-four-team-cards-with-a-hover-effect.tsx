export default function SimpleFourTeamCardsWithAHoverEffect() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:items-start lg:gap-12">
          <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
            The Team Crafting Creative Visions
          </h2>
          <div className="grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group relative inline-flex flex-col items-start justify-start rounded-2xl">
              <div className="inline-flex items-start justify-start gap-2.5 rounded-2xl bg-[#d7c7c1]">
                <img
                  className="rounded-2xl object-cover"
                  src="https://pagedone.io/asset/uploads/1722405892.png"
                  alt="Team Member Image"
                />
              </div>
              <div className="cardBox absolute bottom-0 -z-10 inline-flex w-full items-center justify-start gap-2 rounded-b-2xl px-5 pt-10 pb-5 transition-all duration-700 ease-in-out group-hover:z-10">
                <div className="relative inline-flex w-full flex-col items-start justify-between gap-0.5">
                  <h6 className="text-base leading-relaxed font-medium text-white">
                    Vikram Reddy
                  </h6>
                  <span className="text-xs leading-normal font-normal text-lime-500">
                    Marketing Manager
                  </span>
                </div>
                <button className="relative transition-all duration-700 ease-in-out hover:scale-125">
                  {/* SVG removed */}
                </button>
              </div>
            </div>
            <div className="group relative inline-flex flex-col items-start justify-start rounded-2xl">
              <div className="inline-flex items-start justify-start gap-2.5 rounded-2xl bg-[#d6d0cf]">
                <img
                  className="rounded-2xl object-cover"
                  src="https://pagedone.io/asset/uploads/1722405902.png"
                  alt="Team Member Image"
                />
              </div>
              <div className="cardBox absolute bottom-0 -z-10 inline-flex w-full items-center justify-start gap-2 rounded-b-2xl px-5 pt-10 pb-5 transition-all duration-700 ease-in-out group-hover:z-10">
                <div className="relative inline-flex w-full flex-col items-start justify-between gap-0.5">
                  <h6 className="text-base leading-relaxed font-medium text-white">
                    Kiran Saxena
                  </h6>
                  <span className="text-xs leading-normal font-normal text-lime-500">
                    Founder
                  </span>
                </div>
                <button className="relative transition-all duration-700 ease-in-out hover:scale-125">
                  {/* SVG removed */}
                </button>
              </div>
            </div>
            <div className="group relative inline-flex flex-col items-center justify-start rounded-2xl">
              <div className="inline-flex items-start justify-start gap-2.5 rounded-2xl bg-[#cfc0af]">
                <img
                  className="rounded-2xl object-cover"
                  src="https://pagedone.io/asset/uploads/1722405913.png"
                  alt="Team Member Image"
                />
              </div>
              <div className="cardBox absolute bottom-0 -z-10 inline-flex w-full items-center justify-start gap-2 rounded-b-2xl px-5 pt-10 pb-5 transition-all duration-700 ease-in-out group-hover:z-10">
                <div className="relative inline-flex w-full flex-col items-start justify-between gap-0.5">
                  <h6 className="text-base leading-relaxed font-medium text-white">
                    Amit Desai
                  </h6>
                  <span className="text-xs leading-normal font-normal text-lime-500">
                    Designer
                  </span>
                </div>
                <button className="relative transition-all duration-700 ease-in-out hover:scale-125">
                  {/* SVG removed */}
                </button>
              </div>
            </div>
            <div className="group relative inline-flex flex-col items-start justify-start rounded-2xl">
              <div className="inline-flex items-start justify-start gap-2.5 rounded-2xl bg-[#c7bcbd]">
                <img
                  className="rounded-2xl object-cover"
                  src="https://pagedone.io/asset/uploads/1722405924.png"
                  alt="Team Member Image"
                />
              </div>
              <div className="cardBox absolute bottom-0 -z-10 inline-flex w-full items-center justify-start gap-2 rounded-b-2xl px-5 pt-10 pb-5 transition-all duration-700 ease-in-out group-hover:z-10">
                <div className="relative inline-flex w-full flex-col items-start justify-between gap-0.5">
                  <h6 className="text-base leading-relaxed font-medium text-white">
                    Rohit Sharma
                  </h6>
                  <span className="text-xs leading-normal font-normal text-lime-500">
                    Project Manager
                  </span>
                </div>
                <button className="relative transition-all duration-700 ease-in-out hover:scale-125">
                  {/* SVG removed */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
