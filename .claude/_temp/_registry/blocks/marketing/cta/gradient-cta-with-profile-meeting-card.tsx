export default function GradientCtaWithProfileMeetingCard() {
  return (
    <section className="py-20 bg-cover font-inter bg-no-repeat">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 rounded-2xl">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8 transition-all duration-500">
          <div className="max-w-2xl mx-auto xl:mx-0 w-full flex flex-col gap-4">
            <h2 className="font-manrope text-4xl text-white text-center xl:text-start font-semibold">
              Professional Tactics to Boost Your Portfolio Growth
            </h2>
            <p className="text-sm font-normal leading-5 text-gray-300 font-inter text-center xl:text-start">
              Maximize your investment potential with expert strategies tailored
              to your portfolio. Our professional advisors provide insights and
              personalized plans designed to accelerate growth
            </p>
          </div>
          <div className="bg-zinc-900 rounded-full p-1.5 flex items-center justify-between gap-4 sm:gap-20 w-fit mx-auto xl:mx-0 transition-all duration-500">
            <div className="flex items-center gap-3">
              <img
                src="https://pagedone.io/asset/uploads/1759490583.png"
                alt="img"
                className="w-[68px] h-[68px]"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-medium leading-6 text-white">
                  Schedule Free Meeting
                </h3>
                <p className="text-xs font-normal leading-[18px] text-gray-200">
                  With Filip, our designer
                </p>
              </div>
            </div>
            <a className="p-5 bg-black rounded-full transition-all duration-500 hover:bg-neutral-950">
              {/* SVG removed */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
