export default function AlternateImageWithADarkFeatureList() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-end justify-start gap-10 xl:gap-12">
          <div className="flex flex-col items-center justify-start gap-3 lg:gap-5">
            <div className="inline-flex items-start justify-center">
              <div className="flex items-center justify-start gap-1.5 rounded-full bg-white px-2.5 py-0.5">
                <span className="text-center text-xs leading-normal font-medium text-indigo-600">
                  Features
                </span>
              </div>
            </div>
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-white">
              Revolutionary Features in Action
            </h2>
            <p className="text-center text-lg leading-relaxed font-normal text-gray-300">
              This description highlights how these features revolutionize
              industries and daily life. Witness innovation unfold as these
              features enhance efficiency, elevate user experiences.
            </p>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-10 xl:gap-20">
            <div className="grid w-full grid-cols-1 items-center justify-start gap-6 lg:grid-cols-2 lg:gap-9 xl:gap-12">
              <img
                className="h-auto w-full rounded-xl object-cover lg:h-full"
                src="https://pagedone.io/asset/uploads/1720249141.png"
              />
              <div className="inline-flex w-full flex-col items-start justify-center gap-5 lg:gap-11">
                <div className="flex flex-col items-start justify-start gap-6">
                  <div className="flex flex-col items-start justify-start gap-3">
                    <h3 className="font-manrope text-3xl leading-normal font-bold text-white">
                      Seamless Transactions Across the Globe
                    </h3>
                    <p className="text-base leading-relaxed font-normal text-gray-300">
                      This description emphasizes the fluidity and efficiency of
                      conducting transactions across international borders.
                    </p>
                  </div>
                  <ul className="flex flex-col items-start justify-start gap-3">
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <p className="text-sm leading-normal font-medium text-gray-100">
                        Get the most out of platform by leveraging our easy
                        login{" "}
                      </p>
                    </li>
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <p className="text-sm leading-normal font-medium text-gray-100">
                        Stay ahead of the game with our platform's real-time
                        market{" "}
                      </p>
                    </li>
                  </ul>
                </div>
                <button className="flex w-full items-center justify-center rounded-xl bg-white px-5 py-2.5 shadow-xs transition-all duration-700 ease-in-out hover:bg-gray-100 sm:w-fit">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-black">
                    Lets get started
                  </span>
                </button>
              </div>
            </div>
            <div className="flex w-full grid-cols-1 flex-col-reverse items-center justify-start gap-6 lg:grid lg:grid-cols-2 lg:gap-9 xl:gap-12">
              <div className="inline-flex w-full flex-col items-start justify-center gap-5 lg:gap-11">
                <div className="flex flex-col items-start justify-start gap-6">
                  <div className="flex flex-col items-start justify-start gap-3">
                    <h3 className="font-manrope w-full text-3xl leading-normal font-bold text-white lg:max-w-lg">
                      Global Connectivity Global Financial
                    </h3>
                    <p className="text-base leading-relaxed font-normal text-gray-300">
                      Global connectivity fosters economic integration and
                      enhances accessibility for businesses and individuals
                      alike.
                    </p>
                  </div>
                  <ul className="flex flex-col items-start justify-start gap-3">
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <div className="text-sm leading-normal font-medium text-gray-100">
                        Platform is designed to be flexible &amp; customizable.
                      </div>
                    </li>
                    <li className="inline-flex items-center justify-start gap-4">
                      {/* SVG removed */}
                      <div className="text-sm leading-normal font-medium text-gray-100">
                        Provides you multiple options of business categories.
                      </div>
                    </li>
                  </ul>
                </div>
                <button className="flex w-full items-center justify-center rounded-xl bg-white px-5 py-2.5 shadow-xs transition-all duration-700 ease-in-out hover:bg-gray-100 sm:w-fit">
                  <span className="px-2 py-px text-base leading-relaxed font-semibold text-black">
                    Lets get started
                  </span>
                </button>
              </div>
              <img
                className="h-auto w-full rounded-xl object-cover lg:h-full"
                src="https://pagedone.io/asset/uploads/1720249153.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
