export default function FeaturesWithIllustrationImage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="grid grid-cols-1 items-center justify-start gap-4 lg:grid-cols-2 lg:gap-12 xl:gap-24">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
              Essential Features for Managing Your Crypto
            </h2>
            <div className="inline-flex flex-col items-center justify-start gap-4 lg:items-start lg:gap-5">
              <p className="text-center text-lg leading-relaxed font-normal text-gray-500 lg:text-start">
                Essential features for managing your crypto" encompass
                fundamental tools and functionalities necessary to effectively
                oversee and optimize cryptocurrency holdings and transactions.
              </p>
              <button className="group flex items-center justify-center rounded-full py-2.5">
                <span className="py-px pr-2 text-base leading-relaxed font-semibold text-indigo-600">
                  Get Started
                </span>
                {/* SVG removed */}
              </button>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-5 lg:grid-cols-3 lg:gap-8">
            <div className="flex h-full w-full items-start justify-start rounded-2xl bg-gray-50 p-5">
              <div className="inline-flex w-full flex-col items-center justify-start gap-4">
                <img
                  className="object-cover"
                  src="https://pagedone.io/asset/uploads/1720509779.png"
                  alt="Features for Managing Crypto image"
                />
                <div className="flex w-full flex-col items-center justify-start gap-4">
                  <div className="flex w-full flex-col items-center justify-start gap-3">
                    <h5 className="text-center text-lg leading-relaxed font-semibold text-gray-900">
                      Easy and Intuitive User Experience
                    </h5>
                    <p className="text-center text-sm leading-normal font-normal text-gray-500">
                      Easy and intuitive user experience" refers to the design
                      and functionality of a product, service, or interface that
                      is straightforward, seamless.
                    </p>
                  </div>
                  <button className="group flex items-center justify-center rounded-full py-1.5">
                    <span className="py-px pr-1.5 text-xs leading-normal font-medium text-indigo-600">
                      Learn More
                    </span>
                    {/* SVG removed */}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex h-full w-full items-start justify-start rounded-2xl bg-gray-50 p-5">
              <div className="inline-flex w-full flex-col items-center justify-start gap-4">
                <img
                  className="object-cover"
                  src="https://pagedone.io/asset/uploads/1720509790.png"
                  alt="Features for Managing Crypto image"
                />
                <div className="flex w-full flex-col items-center justify-start gap-4">
                  <div className="flex w-full flex-col items-center justify-start gap-3">
                    <h5 className="text-center text-lg leading-relaxed font-semibold text-gray-900">
                      Advanced Features for Peace of Mind
                    </h5>
                    <p className="text-center text-sm leading-normal font-normal text-gray-500">
                      These features are designed to go beyond basic
                      functionalities to offer robust protection, enhanced
                      performance.
                    </p>
                  </div>
                  <button className="group flex items-center justify-center rounded-full py-1.5">
                    <span className="py-px pr-1.5 text-xs leading-normal font-medium text-indigo-600">
                      Learn More
                    </span>
                    {/* SVG removed */}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex h-full w-full items-start justify-start rounded-2xl bg-gray-50 p-5">
              <div className="inline-flex w-full flex-col items-center justify-start gap-4">
                <img
                  className="object-cover"
                  src="https://pagedone.io/asset/uploads/1720509800.png"
                  alt="Features for Managing Crypto image"
                />
                <div className="flex w-full flex-col items-center justify-start gap-4">
                  <div className="flex w-full flex-col items-center justify-start gap-3">
                    <h5 className="text-center text-lg leading-relaxed font-semibold text-gray-900">
                      Maximize Rewards with Secure Staking
                    </h5>
                    <p className="text-center text-sm leading-normal font-normal text-gray-500">
                      Staking refers to the process of actively participating in
                      transaction validation on a proof-of-stake.
                    </p>
                  </div>
                  <button className="group flex items-center justify-center rounded-full py-1.5">
                    <span className="py-px pr-1.5 text-xs leading-normal font-medium text-indigo-600">
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
  )
}
