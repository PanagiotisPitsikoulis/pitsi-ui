export default function HowItWorksCardsWithImages() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-3">
            <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-gray-900">
              How It Works
            </h2>
            <p className="w-full text-center text-base leading-relaxed font-normal text-gray-500">
              Three Steps to Get You Up and Running
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-start gap-4 lg:grid-cols-3">
            <div className="mx-auto inline-flex h-full w-fit flex-col items-center justify-start gap-3.5 rounded-xl border border-gray-200 p-4 transition-all duration-700 ease-in-out hover:border-gray-400 lg:w-full">
              <img
                className="h-auto w-full rounded-t-lg object-cover lg:h-[164px]"
                src="https://pagedone.io/asset/uploads/1718085761.png"
                alt="How It Works image"
              />
              <div className="flex w-full flex-col items-start justify-start gap-3">
                <span className="text-base leading-relaxed font-normal text-indigo-600">
                  Step 1
                </span>
                <div className="flex flex-col items-start justify-start gap-1">
                  <h4 className="text-xl leading-8 font-semibold text-gray-900">
                    Create Account to Upload
                  </h4>
                  <p className="text-base leading-relaxed font-normal text-gray-400">
                    Join to enter your data and photo for the contest.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto inline-flex h-full w-fit flex-col items-center justify-start gap-3.5 rounded-xl border border-gray-200 p-4 transition-all duration-700 ease-in-out hover:border-gray-400 lg:w-full">
              <img
                className="h-auto w-full rounded-t-lg object-cover lg:h-[164px]"
                src="https://pagedone.io/asset/uploads/1718085777.png"
                alt="How It Works image"
              />
              <div className="flex w-full flex-col items-start justify-start gap-3">
                <span className="text-base leading-relaxed font-normal text-indigo-600">
                  Step 2
                </span>
                <div className="flex flex-col items-start justify-start gap-1">
                  <h4 className="text-xl leading-8 font-semibold text-gray-900">
                    Post for Votes
                  </h4>
                  <p className="text-base leading-relaxed font-normal text-gray-400 lg:max-w-xs">
                    Publish your entry on social media to earn votes.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto inline-flex h-full w-fit flex-col items-center justify-start gap-3.5 rounded-xl border border-gray-200 p-4 transition-all duration-700 ease-in-out hover:border-gray-400 lg:w-full">
              <img
                className="h-auto w-full rounded-t-lg object-cover lg:h-[164px]"
                src="https://pagedone.io/asset/uploads/1718085789.png"
                alt="How It Works image"
              />
              <div className="flex w-full flex-col items-start justify-start gap-3">
                <span className="text-base leading-relaxed font-normal text-indigo-600">
                  Step 3
                </span>
                <div className="flex flex-col items-start justify-start gap-1">
                  <h4 className="text-xl leading-8 font-semibold text-gray-900">
                    Win Prizes
                  </h4>
                  <p className="w-auto max-w-xs text-base leading-relaxed font-normal text-gray-400 lg:max-w-sm">
                    Increases your chances of winning by getting more votes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
