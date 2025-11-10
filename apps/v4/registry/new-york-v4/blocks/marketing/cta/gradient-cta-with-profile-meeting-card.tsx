export default function GradientCtaWithProfileMeetingCard() {
  return (
    <section className="font-inter bg-cover bg-no-repeat py-20">
      <div className="mx-auto w-full max-w-7xl rounded-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 transition-all duration-500 xl:flex-row xl:items-center">
          <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 xl:mx-0">
            <h2 className="font-manrope text-center text-4xl font-semibold text-white xl:text-start">
              Professional Tactics to Boost Your Portfolio Growth
            </h2>
            <p className="font-inter text-center text-sm leading-5 font-normal text-gray-300 xl:text-start">
              Maximize your investment potential with expert strategies tailored
              to your portfolio. Our professional advisors provide insights and
              personalized plans designed to accelerate growth
            </p>
          </div>
          <div className="mx-auto flex w-fit items-center justify-between gap-4 rounded-full bg-zinc-900 p-1.5 transition-all duration-500 sm:gap-20 xl:mx-0">
            <div className="flex items-center gap-3">
              <img
                src="https://pagedone.io/asset/uploads/1759490583.png"
                alt="img"
                className="h-[68px] w-[68px]"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-base leading-6 font-medium text-white">
                  Schedule Free Meeting
                </h3>
                <p className="text-xs leading-[18px] font-normal text-gray-200">
                  With Filip, our designer
                </p>
              </div>
            </div>
            <a className="rounded-full bg-black p-5 transition-all duration-500 hover:bg-neutral-950">
              {/* SVG removed */}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
