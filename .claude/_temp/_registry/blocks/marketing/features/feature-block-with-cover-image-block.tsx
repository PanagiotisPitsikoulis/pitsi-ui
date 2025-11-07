export default function FeatureBlockWithCoverImageBlock() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap32 ">
          <div className="w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0">
            <div className="relative">
              <span className="text-base text-center font-medium text-indigo-600 mb-1 block lg:text-left">
                OUR FEATURES
              </span>
              <h2 className="text-3xl sm:text-4xl text-center font-bold text-gray-900 sm:leading-[3.25rem]  lg:text-left">
                Receive payments quickly from anywhare
              </h2>
            </div>
            <div className="grid gap-8 my-12 md:max-w-2xl max-w-lg mx-auto lg:max-w-full">
              <div className="flex  gap-6">
                <div className="relative"></div>
                <div className="block">
                  <h4 className="mb-2 text-xl font-medium text-gray-900">
                    100% Secure
                  </h4>
                  <p className="text-sm text-gray-500 font-normal leading-6">
                    Our focus on providing a 100% secure platform means that you
                    can rest easy, knowing that your information is protected
                    from unauthorized access and potential cyber threats.
                  </p>
                </div>
              </div>
              <div className="flex  gap-6">
                <div className="relative"></div>
                <div className="block">
                  <h4 className="mb-2 text-base font-medium text-gray-900">
                    Moneyback Guarantee
                  </h4>
                  <p className="text-xs text-gray-500 font-normal leading-6">
                    Our money-back guarantee gives you the freedom to explore
                    and use our platform without worrying about the financial
                    risks typically associated with investing.
                  </p>
                </div>
              </div>
              <div className="flex  gap-6">
                <div className="relative"></div>
                <div className="block">
                  <h4 className="mb-2 text-base font-medium text-gray-900">
                    Notification &amp; Reminder
                  </h4>
                  <p className="text-xs text-gray-500 font-normal leading-6">
                    Get the most out of your investment experience with our
                    platform's customizable notification and reminder settings,
                    allowing you to tailor your experience to your specific
                    needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:col-span-7  lg:col-span-6 hidden lg:block">
            <div className="w-full  sm:w-auto lg:w-[60.8125rem]">
              <img
                src="https://pagedone.io/asset/uploads/1695031065.png"
                alt="Feature tailwind section"
                className="w-full rounded-3xl lg:h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
