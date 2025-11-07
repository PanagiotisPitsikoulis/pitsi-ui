export default function FourColumnTeamCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center lg:gap-12 gap-6 inline-flex">
          <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Meet Our Expert Team Members
          </h2>
          <div className="w-full justify-start items-center xl:gap-8 lg:gap-6 gap-10 grid lg:grid-cols-12 grid-cols-1">
            <div className="xl:col-span-6 lg:col-span-5 col-span-12 w-full flex-col justify-center lg:items-start items-center lg:gap-8 gap-4 inline-flex">
              <p className="text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
                Together, we transform ideas into reality, leveraging our
                combined talents to drive forward-thinking solutions.
              </p>
              <button className="px-5 py-2.5 bg-green-800 hover:bg-green-900 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                  Browse All Members
                </span>
              </button>
            </div>
            <div className="xl:col-span-6 lg:col-span-7 col-span-12 w-full lg:justify-end justify-center items-center gap-5 flex sm:flex-row flex-col">
              <div className="p-2.5 bg-white rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-center items-start gap-3 inline-flex">
                <div className="w-[260px] h-[260px] bg-[#d6d0cf] rounded-lg justify-start items-start gap-2.5 inline-flex">
                  <img
                    className="rounded-lg object-cover"
                    src="https://pagedone.io/asset/uploads/1722333133.png"
                    alt="Radhika Patel image"
                  />
                </div>
                <div className="w-full justify-between items-center gap-3 inline-flex">
                  <div className="flex-col justify-center items-start gap-1 inline-flex">
                    <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                      Radhika Patel
                    </h6>
                    <span className="text-green-800 text-xs font-normal leading-normal">
                      Project Manager
                    </span>
                  </div>
                  <div className="justify-start items-center gap-1.5 flex">
                    <a className="w-6 h-6 rounded-[15px] border border-transparent hover:border-gray-300 hover:rounded-none transition-all duration-700 ease-in-out justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                    <a className="w-6 h-6 pl-[3.59px] pr-[3.73px] pt-[3.59px] pb-[3.74px] rounded-[15px] border border-transparent hover:border-gray-300 hover:rounded-none transition-all duration-700 ease-in-out justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                    <a className="w-6 h-6 pl-[3.71px] pr-[3.76px] py-[3.67px] rounded-[15px] border border-transparent hover:border-gray-300 hover:rounded-none transition-all duration-700 ease-in-out justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-center items-start gap-3 inline-flex">
                <div className="w-[260px] h-[260px] bg-[#cdb5ba] rounded-lg justify-start items-start gap-2.5 inline-flex">
                  <img
                    className="rounded-lg object-cover"
                    src="https://pagedone.io/asset/uploads/1722333144.png"
                    alt="Anil Mehta image"
                  />
                </div>
                <div className="w-full justify-between items-center gap-3 inline-flex">
                  <div className="flex-col justify-center items-start gap-1 inline-flex">
                    <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                      Anil Mehta
                    </h6>
                    <span className="text-green-800 text-xs font-normal leading-normal">
                      Project Manager
                    </span>
                  </div>
                  <div className="justify-start items-center gap-1.5 flex">
                    <a className="w-6 h-6 rounded-[15px] border border-transparent hover:border-gray-300 hover:rounded-none transition-all duration-700 ease-in-out justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                    <a className="w-6 h-6 pl-[3.59px] pr-[3.73px] pt-[3.59px] pb-[3.74px] rounded-[15px] border border-transparent hover:border-gray-300 hover:rounded-none transition-all duration-700 ease-in-out justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                    <a className="w-6 h-6 pl-[3.71px] pr-[3.76px] py-[3.67px] rounded-[15px] border border-transparent hover:border-gray-300 hover:rounded-none transition-all duration-700 ease-in-out justify-center items-center flex">
                      {/* SVG removed */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
