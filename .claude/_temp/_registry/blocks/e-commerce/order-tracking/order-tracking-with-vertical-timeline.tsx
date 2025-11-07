export default function OrderTrackingWithVerticalTimeline() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-start gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
            <h2 className="text-black text-3xl font-bold font-manrope leading-normal">
              Items From The Order
            </h2>
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <div className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-center gap-5 inline-flex">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1718345766.png"
                  alt="Puma Ledis Purse image"
                />
                <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                  <h6 className="text-black text-base font-medium leading-relaxed">
                    Puma Ledis Purse
                  </h6>
                  <div className="w-full justify-start items-start gap-1.5 inline-flex">
                    <h6 className="text-gray-500 text-xs font-normal leading-normal">
                      Size :<span className="text-black">38</span>
                    </h6>
                  </div>
                  <div className="w-full justify-start items-start gap-1.5 inline-flex">
                    <h6 className="text-gray-500 text-xs font-normal leading-normal">
                      Color :<span className="text-black">Red</span>
                    </h6>
                  </div>
                  <div className="justify-start items-center gap-2.5 inline-flex">
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                    <input
                      type="text"
                      className="w-[22px] h-[22px] text-center focus:outline-none placeholder-gray-900 text-gray-900 text-sm font-medium leading-snug px-1 py-0.5 bg-gray-100 rounded-full border border-gray-200 justify-center items-center flex"
                    />
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                  </div>
                </div>
                <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                  $50.00
                </h3>
              </div>
              <div className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-center gap-5 inline-flex">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1718345788.png"
                  alt="Sky School Bag image"
                />
                <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                  <h6 className="text-black text-base font-medium leading-relaxed">
                    Sky School Bag
                  </h6>
                  <div className="w-full justify-start items-start gap-1.5 inline-flex">
                    <h6 className="text-gray-500 text-xs font-normal leading-normal">
                      Size :<span className="text-black">30</span>
                    </h6>
                  </div>
                  <div className="w-full justify-start items-start gap-1.5 inline-flex">
                    <h6 className="text-gray-500 text-xs font-normal leading-normal">
                      Color :<span className="text-black">Red</span>
                    </h6>
                  </div>
                  <div className="justify-start items-center gap-2.5 inline-flex">
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                    <input
                      type="text"
                      className="w-[22px] h-[22px] text-center focus:outline-none placeholder-gray-900 text-gray-900 text-sm font-medium leading-snug px-1 py-0.5 bg-gray-100 rounded-full border border-gray-200 justify-center items-center flex"
                    />
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                  </div>
                </div>
                <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                  $60.00
                </h3>
              </div>
              <div className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-center gap-5 inline-flex">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1718345798.png"
                  alt="Levis Men Pant image"
                />
                <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                  <h6 className="text-black text-base font-medium leading-relaxed">
                    Levis Men Pant
                  </h6>
                  <div className="w-full justify-start items-start gap-1.5 inline-flex">
                    <h6 className="text-gray-500 text-xs font-normal leading-normal">
                      Size :<span className="text-black">34</span>
                    </h6>
                  </div>
                  <div className="w-full justify-start items-start gap-1.5 inline-flex">
                    <h6 className="text-gray-500 text-xs font-normal leading-normal">
                      Color :<span className="text-black">Black</span>
                    </h6>
                  </div>
                  <div className="justify-start items-center gap-2.5 inline-flex">
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                    <input
                      type="text"
                      className="w-[22px] h-[22px] text-center focus:outline-none placeholder-gray-900 text-gray-900 text-sm font-medium leading-snug px-1 py-0.5 bg-gray-100 rounded-full border border-gray-200 justify-center items-center flex"
                    />
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                  </div>
                </div>
                <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                  $100.00
                </h3>
              </div>
              <div className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-center gap-5 inline-flex">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1718345809.png"
                  alt="Titan Men Watch image"
                />
                <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                  <h6 className="text-black text-base font-medium leading-relaxed">
                    Titan Men Watch
                  </h6>
                  <div className="w-full justify-start items-start gap-1.5 inline-flex">
                    <h6 className="text-gray-500 text-xs font-normal leading-normal">
                      Size :<span className="text-black">10</span>
                    </h6>
                  </div>
                  <div className="w-full justify-start items-start gap-1.5 inline-flex">
                    <h6 className="text-gray-500 text-xs font-normal leading-normal">
                      Color :<span className="text-black">Dark</span>
                    </h6>
                  </div>
                  <div className="justify-start items-center gap-2.5 inline-flex">
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                    <input
                      type="text"
                      className="w-[22px] h-[22px] text-center focus:outline-none placeholder-gray-900 text-gray-900 text-sm font-medium leading-snug px-1 py-0.5 bg-gray-100 rounded-full border border-gray-200 justify-center items-center flex"
                    />
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                  </div>
                </div>
                <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                  $70.00
                </h3>
              </div>
              <div className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out justify-start items-center gap-5 inline-flex">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1718345821.png"
                  alt=" Levis T-shirt Men image"
                />
                <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                  <h6 className="text-black text-base font-medium leading-relaxed">
                    {" "}
                    Levis T-shirt Men
                  </h6>
                  <div className="w-full justify-start items-start gap-1.5 inline-flex">
                    <h6 className="text-gray-500 text-xs font-normal leading-normal">
                      Size :<span className="text-black">XL</span>
                    </h6>
                  </div>
                  <div className="w-full justify-start items-start gap-1.5 inline-flex">
                    <h6 className="text-gray-500 text-xs font-normal leading-normal">
                      Color :<span className="text-black">White</span>
                    </h6>
                  </div>
                  <div className="justify-start items-center gap-2.5 inline-flex">
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                    <input
                      type="text"
                      className="w-[22px] h-[22px] text-center focus:outline-none placeholder-gray-900 text-gray-900 text-sm font-medium leading-snug px-1 py-0.5 bg-gray-100 rounded-full border border-gray-200 justify-center items-center flex"
                    />
                    <button className="p-1 bg-transparent rounded-full border border-transparent transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                  </div>
                </div>
                <h3 className="text-black text-2xl font-semibold font-manrope leading-9">
                  $80.00
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <h3 className="text-black text-3xl font-bold font-manrope leading-normal">
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
                          Products Delivered
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
                        22 Feb 2024, 04:00 PM
                      </h4>
                      <ul>
                        <h6 className="text-indigo-400 text-sm font-normal leading-normal">
                          Product Delivered to the courier cart Express
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
                        19 Feb 2024, 05:30 PM
                      </h4>
                      <ul>
                        <h6 className="text-indigo-400 text-sm font-normal leading-normal">
                          Order Placed - Receipt #202145
                        </h6>
                      </ul>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-4 flex">
              <h3 className="text-black text-3xl font-bold font-manrope leading-normal">
                Order Summary
              </h3>
              <div className="w-full p-5 bg-gray-50 rounded-xl border border-gray-200 flex-col justify-start items-start gap-3.5 flex">
                <div className="w-full justify-between items-center inline-flex">
                  <h5 className="text-gray-600 text-lg font-normal leading-relaxed">
                    Subtotal:
                  </h5>
                  <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                    $ 360.00
                  </h5>
                </div>
                <div className="w-full justify-between items-center inline-flex">
                  <h5 className="text-gray-600 text-lg font-normal leading-relaxed">
                    Delivery:
                  </h5>
                  <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                    Free
                  </h5>
                </div>
                <div className="pb-4 border-b border-gray-200 w-full justify-between items-center gap-6 inline-flex">
                  <h5 className="text-gray-600 text-lg font-normal leading-relaxed">
                    Tax:
                  </h5>
                  <h5 className="text-right text-gray-900 text-lg font-semibold leading-relaxed">
                    $ 20.00
                  </h5>
                </div>
                <div className="w-full justify-between items-center inline-flex">
                  <h5 className="text-gray-600 text-lg font-normal leading-relaxed">
                    Total:
                  </h5>
                  <h5 className="text-right text-indigo-600 text-lg font-semibold leading-relaxed">
                    ₹380.00
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
