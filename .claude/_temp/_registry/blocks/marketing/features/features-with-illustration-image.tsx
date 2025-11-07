export default function FeaturesWithIllustrationImage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="justify-start items-center xl:gap-24 lg:gap-12 gap-4 grid lg:grid-cols-2 grid-cols-1">
            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
              Essential Features for Managing Your Crypto
            </h2>
            <div className="flex-col justify-start lg:items-start items-center lg:gap-5 gap-4 inline-flex">
              <p className="text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
                Essential features for managing your crypto" encompass
                fundamental tools and functionalities necessary to effectively
                oversee and optimize cryptocurrency holdings and transactions.
              </p>
              <button className="group py-2.5 rounded-full justify-center items-center flex">
                <span className="pr-2 py-px text-indigo-600 text-base font-semibold leading-relaxed">
                  Get Started
                </span>
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="w-full justify-start items-start lg:gap-8 gap-5 grid lg:grid-cols-3 grid-cols-1">
            <div className="w-full h-full p-5 bg-gray-50 rounded-2xl justify-start items-start flex">
              <div className="w-full flex-col justify-start items-center gap-4 inline-flex">
                <img
                  className="object-cover"
                  src="https://pagedone.io/asset/uploads/1720509779.png"
                  alt="Features for Managing Crypto image"
                />
                <div className="w-full flex-col justify-start items-center gap-4 flex">
                  <div className="w-full flex-col justify-start items-center gap-3 flex">
                    <h5 className="text-center text-gray-900 text-lg font-semibold leading-relaxed">
                      Easy and Intuitive User Experience
                    </h5>
                    <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                      Easy and intuitive user experience" refers to the design
                      and functionality of a product, service, or interface that
                      is straightforward, seamless.
                    </p>
                  </div>
                  <button className="group py-1.5 rounded-full justify-center items-center flex">
                    <span className="pr-1.5 py-px text-indigo-600 text-xs font-medium leading-normal">
                      Learn More
                    </span>
                    {/* SVG removed */}
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-full p-5 bg-gray-50 rounded-2xl justify-start items-start flex">
              <div className="w-full flex-col justify-start items-center gap-4 inline-flex">
                <img
                  className="object-cover"
                  src="https://pagedone.io/asset/uploads/1720509790.png"
                  alt="Features for Managing Crypto image"
                />
                <div className="w-full flex-col justify-start items-center gap-4 flex">
                  <div className="w-full flex-col justify-start items-center gap-3 flex">
                    <h5 className="text-center text-gray-900 text-lg font-semibold leading-relaxed">
                      Advanced Features for Peace of Mind
                    </h5>
                    <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                      These features are designed to go beyond basic
                      functionalities to offer robust protection, enhanced
                      performance.
                    </p>
                  </div>
                  <button className="group py-1.5 rounded-full justify-center items-center flex">
                    <span className="pr-1.5 py-px text-indigo-600 text-xs font-medium leading-normal">
                      Learn More
                    </span>
                    {/* SVG removed */}
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-full p-5 bg-gray-50 rounded-2xl justify-start items-start flex">
              <div className="w-full flex-col justify-start items-center gap-4 inline-flex">
                <img
                  className="object-cover"
                  src="https://pagedone.io/asset/uploads/1720509800.png"
                  alt="Features for Managing Crypto image"
                />
                <div className="w-full flex-col justify-start items-center gap-4 flex">
                  <div className="w-full flex-col justify-start items-center gap-3 flex">
                    <h5 className="text-center text-gray-900 text-lg font-semibold leading-relaxed">
                      Maximize Rewards with Secure Staking
                    </h5>
                    <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                      Staking refers to the process of actively participating in
                      transaction validation on a proof-of-stake.
                    </p>
                  </div>
                  <button className="group py-1.5 rounded-full justify-center items-center flex">
                    <span className="pr-1.5 py-px text-indigo-600 text-xs font-medium leading-normal">
                      Learn More
                    </span>
                    {/* SVG removed */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
