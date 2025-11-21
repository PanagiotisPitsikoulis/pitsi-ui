export default function FeatureBlockWithCoverImageBlock() {
  return (
    <section className="overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:gap32 grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <div className="w-full lg:col-span-6 xl:col-span-5 xl:-mx-0 2xl:-mx-5">
            <div className="relative">
              <span className="mb-1 block text-center text-base font-medium text-indigo-600 lg:text-left">
                OUR FEATURES
              </span>
              <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl sm:leading-[3.25rem] lg:text-left">
                Receive payments quickly from anywhare
              </h2>
            </div>
            <div className="mx-auto my-12 grid max-w-lg gap-8 md:max-w-2xl lg:max-w-full">
              <div className="flex gap-6">
                <div className="relative"></div>
                <div className="block">
                  <h4 className="mb-2 text-xl font-medium text-gray-900">
                    100% Secure
                  </h4>
                  <p className="text-sm leading-6 font-normal text-gray-500">
                    Our focus on providing a 100% secure platform means that you
                    can rest easy, knowing that your information is protected
                    from unauthorized access and potential cyber threats.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="relative"></div>
                <div className="block">
                  <h4 className="mb-2 text-base font-medium text-gray-900">
                    Moneyback Guarantee
                  </h4>
                  <p className="text-xs leading-6 font-normal text-gray-500">
                    Our money-back guarantee gives you the freedom to explore
                    and use our platform without worrying about the financial
                    risks typically associated with investing.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="relative"></div>
                <div className="block">
                  <h4 className="mb-2 text-base font-medium text-gray-900">
                    Notification &amp; Reminder
                  </h4>
                  <p className="text-xs leading-6 font-normal text-gray-500">
                    Get the most out of your investment experience with our
                    platform's customizable notification and reminder settings,
                    allowing you to tailor your experience to your specific
                    needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden w-full lg:col-span-6 lg:block xl:col-span-7">
            <div className="w-full sm:w-auto lg:w-[60.8125rem]">
              <img
                src="https://pagedone.io/asset/uploads/1695031065.png"
                alt="Feature tailwind section"
                className="w-full rounded-3xl object-cover lg:h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
