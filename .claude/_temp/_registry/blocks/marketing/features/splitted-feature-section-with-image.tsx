export default function SplittedFeatureSectionWithImage() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-6 lg:flex-row lg:justify-between ">
          <div className="w-full max-w-lg lg:max-w-full lg:w-1/2">
            <div className="border-b border-gray-200 pb-8 lg:pb-14 mb-8 lg:mb-14 grid gap-8">
              <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem]  lg:text-left">
                Hassle-free payment services for your investment
              </h2>
              <p className="text-base text-gray-600 font-normal">
                Trust in the accuracy and transparency of our platform's payment
                processing capabilities, which provide you with real-time
                updates and notifications on your investment transactions.
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center  gap-y-12  lg:justify-between">
              <div className="w-full lg:w-2/4">
                <div className="flex  gap-4">
                  <div className="relative"></div>
                  <div className="block">
                    <h4 className="mb-3 text-base font-medium text-gray-900">
                      Keeping Secrecy{" "}
                    </h4>
                    <p className="text-xs text-gray-500 font-normal leading-6">
                      With privacy features keep your sensitive data &amp;
                      information secret
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/4">
                <div className="flex  gap-4">
                  <div className="relative"></div>
                  <div className="block">
                    <h4 className="mb-3 text-base font-medium text-gray-900">
                      Free Transaction Fee
                    </h4>
                    <p className="text-xs text-gray-500 font-normal leading-6">
                      Free transaction fees, enabling you to save money &amp;
                      maximize your profits.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/4">
                <div className="flex  gap-4">
                  <div className="relative"></div>
                  <div className="block">
                    <h4 className="mb-3 text-base font-medium text-gray-900">
                      Security Guaranteed
                    </h4>
                    <p className="text-xs text-gray-500 font-normal leading-6">
                      Experience the peace of mind that comes with knowing your
                      data is secure
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/4">
                <div className="flex  gap-4">
                  <div className="relative"></div>
                  <div className="block">
                    <h4 className="mb-3 text-base font-medium text-gray-900">
                      All in One
                    </h4>
                    <p className="text-xs text-gray-500 font-normal leading-6">
                      All-in-one solution ensures that you can easily manage
                      your financial needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-14">
            <img
              src="https://pagedone.io/asset/uploads/1721369529.png"
              alt="image"
              className="mx-auto lg:mx-0 lg:w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
