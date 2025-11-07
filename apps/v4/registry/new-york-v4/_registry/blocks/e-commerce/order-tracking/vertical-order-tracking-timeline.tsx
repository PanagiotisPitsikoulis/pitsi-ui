export default function VerticalOrderTrackingTimeline() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="flex w-full flex-col items-center justify-start gap-4">
            <h2 className="font-manrope w-full text-center text-3xl leading-normal font-bold text-black">
              Order Tracking
            </h2>
            <p className="w-full max-w-4xl text-center text-base leading-relaxed font-normal text-gray-500">
              Order tracking is a vital service offered by businesses,
              empowering customers to monitor the journey of their purchases
              from the moment they're ordered until they reach their doorstep.
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-3 sm:flex-row">
            <h3 className="font-manrope text-2xl leading-9 font-medium text-gray-500">
              Order ID:
              <span className="font-bold text-gray-900">#1025400025</span>
            </h3>
            <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
              <span className="px-2 py-px text-center text-base leading-relaxed font-semibold text-white">
                On Delivery
              </span>
            </button>
          </div>
          <div className="relative w-full rounded-2xl">
            <iframe
              className="rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.68689158894!2d70.73889546937228!3d22.273625026463687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1718387587122!5m2!1sen!2sin"
              width="100%"
              height={404}
            />
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-2">
            <div className="inline-flex w-full flex-col items-start justify-start gap-8">
              <h3 className="font-manrope text-2xl leading-9 font-bold text-black">
                Items From The Order
              </h3>
              <div className="flex w-full flex-col items-start justify-start gap-8">
                <div className="inline-flex w-full items-center justify-start gap-5 rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all duration-700 ease-in-out hover:border-gray-400">
                  <img
                    className="rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1718359489.png"
                    alt="Dell Laptop image"
                  />
                  <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                    <h6 className="text-base leading-relaxed font-medium text-black">
                      Dell Laptop
                    </h6>
                    <h6 className="text-xs leading-normal font-normal text-gray-500">
                      Color :<span className="text-black">White</span>
                    </h6>
                    <div className="inline-flex items-center justify-start gap-2.5">
                      <button className="rounded-full border border-transparent bg-transparent p-0.5 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                      <input
                        type="text"
                        className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-1 py-0.5 text-center text-sm leading-snug font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                      />
                      <button className="rounded-full border border-transparent bg-transparent p-0.5 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                    </div>
                  </div>
                  <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                    $150.00
                  </h3>
                </div>
                <div className="inline-flex w-full items-center justify-start gap-5 rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all duration-700 ease-in-out hover:border-gray-400">
                  <img
                    className="rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1718359500.png"
                    alt="Apple Headphone image"
                  />
                  <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                    <h6 className="text-base leading-relaxed font-medium text-gray-900">
                      Apple Headphone
                    </h6>
                    <h6 className="text-xs leading-normal font-normal text-gray-500">
                      Color :<span className="text-black">Yellow</span>
                    </h6>
                    <div className="inline-flex items-center justify-start gap-2.5">
                      <button className="rounded-full border border-transparent bg-transparent p-0.5 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                      <input
                        type="text"
                        className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-1 py-0.5 text-center text-sm leading-snug font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                      />
                      <button className="rounded-full border border-transparent bg-transparent p-0.5 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                    </div>
                  </div>
                  <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                    $30.00
                  </h3>
                </div>
                <div className="inline-flex w-full items-center justify-start gap-5 rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all duration-700 ease-in-out hover:border-gray-400">
                  <img
                    className="rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1718359509.png"
                    alt="Titan Men Watch image"
                  />
                  <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                    <h6 className="text-base leading-relaxed font-medium text-black">
                      Titan Men Watch
                    </h6>
                    <h6 className="text-xs leading-normal font-normal text-gray-500">
                      Color :<span className="text-black">Black</span>
                    </h6>
                    <div className="inline-flex items-center justify-start gap-2.5">
                      <button className="rounded-full border border-transparent bg-transparent p-0.5 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                      <input
                        type="text"
                        className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-1 py-0.5 text-center text-sm leading-snug font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                      />
                      <button className="rounded-full border border-transparent bg-transparent p-0.5 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                    </div>
                  </div>
                  <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                    $50.00
                  </h3>
                </div>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-start justify-start gap-8">
              <h3 className="font-manrope text-2xl leading-9 font-bold text-black">
                Order Tracking
              </h3>
              <div className="inline-flex w-full items-start justify-start gap-2.5 rounded-xl border border-gray-200 bg-gray-50 p-6">
                <ol className="flex w-full flex-col gap-1.5 overflow-hidden">
                  <li className="relative h-[118px] w-full after:absolute after:-bottom-0 after:left-5 after:mt-2 after:inline-block after:h-[68px] after:w-0.5 after:bg-gray-200 after:content-['']">
                    <a
                      href="https://pagedone.io/"
                      className="relative flex h-[42px] w-[42px] items-center justify-center gap-2.5 rounded-full bg-gray-200 font-medium"
                    ></a>
                    <div className="absolute top-0 left-11 block flex h-[118px] w-full flex-col gap-2 pl-4">
                      <h4 className="text-lg leading-relaxed font-medium text-gray-900">
                        Estimate Delivered in 24 Feb 2024
                      </h4>
                      <ul>
                        <h6 className="text-sm leading-normal font-normal text-gray-500">
                          Products Delivered
                        </h6>
                      </ul>
                    </div>
                  </li>
                  <li className="relative h-[118px] w-full after:absolute after:-bottom-0 after:left-5 after:mt-2 after:inline-block after:h-[68px] after:w-0.5 after:bg-gray-200 after:content-['']">
                    <a
                      href="https://pagedone.io/"
                      className="relative flex h-[42px] w-[42px] items-center justify-center gap-2.5 rounded-full bg-gray-200 font-medium"
                    ></a>
                    <div className="absolute top-0 left-11 block flex h-[118px] w-full flex-col gap-2 pl-4">
                      <h4 className="text-lg leading-relaxed font-medium text-gray-900">
                        23 Feb 2024
                      </h4>
                      <ul>
                        <h6 className="text-sm leading-normal font-normal text-gray-500">
                          Product being delivered
                        </h6>
                      </ul>
                    </div>
                  </li>
                  <li className="relative h-[118px] w-full after:absolute after:-bottom-0 after:left-5 after:mt-2 after:inline-block after:h-[68px] after:w-0.5 after:bg-gray-200 after:content-['']">
                    <a
                      href="https://pagedone.io/"
                      className="relative flex h-[42px] w-[42px] items-center justify-center gap-2.5 rounded-full bg-indigo-200 font-medium"
                    ></a>
                    <div className="absolute top-0 left-11 block flex h-[118px] w-full flex-col gap-2 pl-4">
                      <h4 className="text-lg leading-relaxed font-medium text-indigo-600">
                        23 Feb 2024, 10:30 AM
                      </h4>
                      <ul>
                        <h6 className="text-sm leading-normal font-normal text-indigo-400">
                          Products in the courier warehouse
                        </h6>
                      </ul>
                    </div>
                  </li>
                  <li className="relative h-16 w-full after:mt-2">
                    <a
                      href="https://pagedone.io/"
                      className="relative flex h-[42px] w-[42px] items-center justify-center gap-2.5 rounded-full bg-indigo-200 font-medium"
                    ></a>
                    <div className="absolute top-0 left-11 block flex w-full flex-col gap-2 pl-4">
                      <h4 className="text-lg leading-relaxed font-medium text-indigo-600">
                        22 Feb 2024, 04:00 PM
                      </h4>
                      <ul>
                        <h6 className="text-sm leading-normal font-normal text-indigo-400">
                          Product Delivered to the courier cart Express
                        </h6>
                      </ul>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
