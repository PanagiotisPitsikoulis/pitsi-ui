export default function AlternateImageWithADarkFeatureList() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-end xl:gap-12 gap-10 inline-flex">
          <div className="flex-col justify-start items-center lg:gap-5 gap-3 flex">
            <div className="justify-center items-start inline-flex">
              <div className="px-2.5 py-0.5 bg-white rounded-full justify-start items-center gap-1.5 flex">
                <span className="text-center text-indigo-600 text-xs font-medium leading-normal">
                  Features
                </span>
              </div>
            </div>
            <h2 className="text-center text-white text-4xl font-bold font-manrope leading-normal">
              Revolutionary Features in Action
            </h2>
            <p className="text-center text-gray-300 text-lg font-normal leading-relaxed">
              This description highlights how these features revolutionize
              industries and daily life. Witness innovation unfold as these
              features enhance efficiency, elevate user experiences.
            </p>
          </div>
          <div className="w-full flex-col justify-start items-start xl:gap-20 gap-10 flex">
            <div className="w-full justify-start items-center xl:gap-12 lg:gap-9 gap-6 grid lg:grid-cols-2 grid-cols-1">
              <img
                className="w-full lg:h-full h-auto object-cover rounded-xl"
                src="https://pagedone.io/asset/uploads/1720249141.png"
              />
              <div className="w-full flex-col justify-center items-start lg:gap-11 gap-5 inline-flex">
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className="flex-col justify-start items-start gap-3 flex">
                    <h3 className="text-white text-3xl font-bold font-manrope leading-normal">
                      Seamless Transactions Across the Globe
                    </h3>
                    <p className="text-gray-300 text-base font-normal leading-relaxed">
                      This description emphasizes the fluidity and efficiency of
                      conducting transactions across international borders.
                    </p>
                  </div>
                  <ul className="flex-col justify-start items-start gap-3 flex">
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <p className="text-gray-100 text-sm font-medium leading-normal">
                        Get the most out of platform by leveraging our easy
                        login{" "}
                      </p>
                    </li>
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <p className="text-gray-100 text-sm font-medium leading-normal">
                        Stay ahead of the game with our platform's real-time
                        market{" "}
                      </p>
                    </li>
                  </ul>
                </div>
                <button className="sm:w-fit w-full px-5 py-2.5 bg-white hover:bg-gray-100 transition-all duration-700 ease-in-out rounded-xl shadow-xs justify-center items-center flex">
                  <span className="px-2 py-px text-black text-base font-semibold leading-relaxed">
                    Lets get started
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full justify-start items-center xl:gap-12 lg:gap-9 gap-6 lg:grid lg:grid-cols-2 grid-cols-1 flex flex-col-reverse">
              <div className="w-full flex-col justify-center items-start lg:gap-11 gap-5 inline-flex">
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className="flex-col justify-start items-start gap-3 flex">
                    <h3 className="lg:max-w-lg w-full text-white text-3xl font-bold font-manrope leading-normal">
                      Global Connectivity Global Financial
                    </h3>
                    <p className="text-gray-300 text-base font-normal leading-relaxed">
                      Global connectivity fosters economic integration and
                      enhances accessibility for businesses and individuals
                      alike.
                    </p>
                  </div>
                  <ul className="flex-col justify-start items-start gap-3 flex">
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <div className="text-gray-100 text-sm font-medium leading-normal">
                        Platform is designed to be flexible &amp; customizable.
                      </div>
                    </li>
                    <li className="justify-start items-center gap-4 inline-flex">
                      {/* SVG removed */}
                      <div className="text-gray-100 text-sm font-medium leading-normal">
                        Provides you multiple options of business categories.
                      </div>
                    </li>
                  </ul>
                </div>
                <button className="sm:w-fit w-full px-5 py-2.5 bg-white hover:bg-gray-100 transition-all duration-700 ease-in-out rounded-xl shadow-xs justify-center items-center flex">
                  <span className="px-2 py-px text-black text-base font-semibold leading-relaxed">
                    Lets get started
                  </span>
                </button>
              </div>
              <img
                className="w-full lg:h-full h-auto object-cover rounded-xl"
                src="https://pagedone.io/asset/uploads/1720249153.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
