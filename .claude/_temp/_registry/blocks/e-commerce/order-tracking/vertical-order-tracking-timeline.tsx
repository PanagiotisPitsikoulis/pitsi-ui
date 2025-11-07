export default function VerticalOrderTrackingTimeline() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-4 flex">
            <h2 className="w-full text-center text-black text-3xl font-bold font-manrope leading-normal">
              Order Tracking
            </h2>
            <p className="max-w-4xl w-full text-center text-gray-500 text-base font-normal leading-relaxed">
              Order tracking is a vital service offered by businesses,
              empowering customers to monitor the journey of their purchases
              from the moment they're ordered until they reach their doorstep.
            </p>
          </div>
          <div className="w-full justify-between items-center flex sm:flex-row flex-col gap-3">
            <h3 className="text-gray-500 text-2xl font-medium font-manrope leading-9">
              Order ID:
              <span className="text-gray-900 font-bold">#1025400025</span>
            </h3>
            <button className="sm:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-2 py-px text-center text-white text-base font-semibold leading-relaxed">
                On Delivery
              </span>
            </button>
          </div>
          <div className="w-full rounded-2xl relative">
            <iframe
              className="rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.68689158894!2d70.73889546937228!3d22.273625026463687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1718387587122!5m2!1sen!2sin"
              width="100%"
              height={404}
            />
          </div>
          <div className="w-full justify-start items-start gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
              <h3 className="text-black text-2xl font-bold font-manrope leading-9">
                Items From The Order
              </h3>
              <div className="w-full flex-col justify-start items-start gap-8 flex">
                <div className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-center gap-5 inline-flex">
                  <img
                    className="rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1718359489.png"
                    alt="Dell Laptop image"
                  />
                  <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                    <h6 className="text-black text-base font-medium leading-relaxed">
                      Dell Laptop
                    </h6>
                    <h6 className="text-gray-500 text-xs font-normal leading-normal">
                      Color :<span className="text-black">White</span>
                    </h6>
                    <div className="justify-start items-center gap-2.5 inline-flex">
                      <button className="p-0.5 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                      <input
                        type="text"
                        className="w-[22px] h-[22px] text-center focus:outline-none placeholder-gray-900 text-gray-900 text-sm font-medium leading-snug px-1 py-0.5 bg-gray-100 rounded-full border border-gray-200 justify-center items-center flex"
                      />
                      <button className="p-0.5 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                    </div>
                  </div>
                  <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                    $150.00
                  </h3>
                </div>
                <div className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-center gap-5 inline-flex">
                  <img
                    className="rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1718359500.png"
                    alt="Apple Headphone image"
                  />
                  <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                    <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                      Apple Headphone
                    </h6>
                    <h6 className="text-gray-500 text-xs font-normal leading-normal">
                      Color :<span className="text-black">Yellow</span>
                    </h6>
                    <div className="justify-start items-center gap-2.5 inline-flex">
                      <button className="p-0.5 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                      <input
                        type="text"
                        className="w-[22px] h-[22px] text-center focus:outline-none placeholder-gray-900 text-gray-900 text-sm font-medium leading-snug px-1 py-0.5 bg-gray-100 rounded-full border border-gray-200 justify-center items-center flex"
                      />
                      <button className="p-0.5 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                    </div>
                  </div>
                  <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                    $30.00
                  </h3>
                </div>
                <div className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-center gap-5 inline-flex">
                  <img
                    className="rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1718359509.png"
                    alt="Titan Men Watch image"
                  />
                  <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                    <h6 className="text-black text-base font-medium leading-relaxed">
                      Titan Men Watch
                    </h6>
                    <h6 className="text-gray-500 text-xs font-normal leading-normal">
                      Color :<span className="text-black">Black</span>
                    </h6>
                    <div className="justify-start items-center gap-2.5 inline-flex">
                      <button className="p-0.5 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                      <input
                        type="text"
                        className="w-[22px] h-[22px] text-center focus:outline-none placeholder-gray-900 text-gray-900 text-sm font-medium leading-snug px-1 py-0.5 bg-gray-100 rounded-full border border-gray-200 justify-center items-center flex"
                      />
                      <button className="p-0.5 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                    </div>
                  </div>
                  <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                    $50.00
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
              <h3 className="text-black text-2xl font-bold font-manrope leading-9">
                Order Tracking
              </h3>
              <div className="w-full p-6 bg-gray-50 rounded-xl border border-gray-200 justify-start items-start gap-2.5 inline-flex">
                <ol className="w-full overflow-hidden flex flex-col gap-1.5">
                  <li className="w-full relative h-[118px] after:content-['']  after:w-0.5 after:h-[68px] after:bg-gray-200 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-5">
                    <a
                      href="https://pagedone.io/"
                      className="w-[42px] h-[42px] relative flex items-center justify-center font-medium gap-2.5 bg-gray-200 rounded-full"
                    ></a>
                    <div className="w-full block flex flex-col gap-2 pl-4 h-[118px] absolute top-0 left-11">
                      <h4 className="text-lg text-gray-900 font-medium leading-relaxed">
                        Estimate Delivered in 24 Feb 2024
                      </h4>
                      <ul>
                        <h6 className="text-gray-500 text-sm font-normal leading-normal">
                          Products Delivered
                        </h6>
                      </ul>
                    </div>
                  </li>
                  <li className="w-full relative h-[118px] after:content-['']  after:w-0.5 after:h-[68px] after:bg-gray-200 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-5">
                    <a
                      href="https://pagedone.io/"
                      className="w-[42px] h-[42px] relative flex items-center justify-center font-medium gap-2.5 bg-gray-200 rounded-full"
                    ></a>
                    <div className="w-full block flex flex-col gap-2 pl-4 h-[118px] absolute top-0 left-11">
                      <h4 className="text-lg text-gray-900 font-medium leading-relaxed">
                        23 Feb 2024
                      </h4>
                      <ul>
                        <h6 className="text-gray-500 text-sm font-normal leading-normal">
                          Product being delivered
                        </h6>
                      </ul>
                    </div>
                  </li>
                  <li className="w-full relative h-[118px] after:content-['']  after:w-0.5 after:h-[68px] after:bg-gray-200 after:inline-block after:mt-2 after:-bottom-0 after:absolute after:left-5">
                    <a
                      href="https://pagedone.io/"
                      className="w-[42px] h-[42px] relative flex items-center justify-center font-medium gap-2.5 bg-indigo-200 rounded-full"
                    ></a>
                    <div className="w-full block flex flex-col gap-2 pl-4 h-[118px] absolute top-0 left-11">
                      <h4 className="text-lg text-indigo-600 font-medium leading-relaxed">
                        23 Feb 2024, 10:30 AM
                      </h4>
                      <ul>
                        <h6 className="text-indigo-400 text-sm font-normal leading-normal">
                          Products in the courier warehouse
                        </h6>
                      </ul>
                    </div>
                  </li>
                  <li className="w-full relative h-16 after:mt-2">
                    <a
                      href="https://pagedone.io/"
                      className="w-[42px] h-[42px] relative flex items-center justify-center font-medium gap-2.5 bg-indigo-200 rounded-full"
                    ></a>
                    <div className="w-full block flex flex-col gap-2 pl-4 absolute top-0 left-11">
                      <h4 className="text-lg text-indigo-600 font-medium leading-relaxed">
                        22 Feb 2024, 04:00 PM
                      </h4>
                      <ul>
                        <h6 className="text-indigo-400 text-sm font-normal leading-normal">
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
  );
}
