export default function HowItWorksCardsWithImages() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center gap-12 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              How It Works
            </h2>
            <p className="w-full text-center text-gray-500 text-base font-normal leading-relaxed">
              Three Steps to Get You Up and Running
            </p>
          </div>
          <div className="w-full justify-start items-center gap-4 grid lg:grid-cols-3 grid-cols-1">
            <div className="lg:w-full w-fit mx-auto h-full p-4 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-center gap-3.5 inline-flex">
              <img
                className="lg:h-[164px] h-auto object-cover w-full rounded-t-lg"
                src="https://pagedone.io/asset/uploads/1718085761.png"
                alt="How It Works image"
              />
              <div className="w-full flex-col justify-start items-start gap-3 flex">
                <span className="text-indigo-600 text-base font-normal leading-relaxed">
                  Step 1
                </span>
                <div className="flex-col justify-start items-start gap-1 flex">
                  <h4 className="text-gray-900 text-xl font-semibold leading-8">
                    Create Account to Upload
                  </h4>
                  <p className="text-gray-400 text-base font-normal leading-relaxed">
                    Join to enter your data and photo for the contest.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-full w-fit mx-auto h-full p-4 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-center gap-3.5 inline-flex">
              <img
                className="lg:h-[164px] h-auto object-cover w-full rounded-t-lg"
                src="https://pagedone.io/asset/uploads/1718085777.png"
                alt="How It Works image"
              />
              <div className="w-full flex-col justify-start items-start gap-3 flex">
                <span className="text-indigo-600 text-base font-normal leading-relaxed">
                  Step 2
                </span>
                <div className="flex-col justify-start items-start gap-1 flex">
                  <h4 className="text-gray-900 text-xl font-semibold leading-8">
                    Post for Votes
                  </h4>
                  <p className="lg:max-w-xs text-gray-400 text-base font-normal leading-relaxed">
                    Publish your entry on social media to earn votes.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-full w-fit mx-auto h-full p-4 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-center gap-3.5 inline-flex">
              <img
                className="lg:h-[164px] h-auto object-cover w-full rounded-t-lg"
                src="https://pagedone.io/asset/uploads/1718085789.png"
                alt="How It Works image"
              />
              <div className="w-full flex-col justify-start items-start gap-3 flex">
                <span className="text-indigo-600 text-base font-normal leading-relaxed">
                  Step 3
                </span>
                <div className="flex-col justify-start items-start gap-1 flex">
                  <h4 className="text-gray-900 text-xl font-semibold leading-8">
                    Win Prizes
                  </h4>
                  <p className="lg:max-w-sm max-w-xs w-auto text-gray-400 text-base font-normal leading-relaxed">
                    Increases your chances of winning by getting more votes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
