export default function OrderTrackingWithVerticalTimeline() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-2">
          <div className="inline-flex w-full flex-col items-start justify-start gap-8">
            <h2 className="font-manrope text-3xl leading-normal font-bold text-black">
              Items From The Order
            </h2>
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <div className="inline-flex w-full items-center justify-start gap-5 rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all duration-700 ease-in-out hover:border-gray-400">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1718345766.png"
                  alt="Puma Ledis Purse image"
                />
                <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                  <h6 className="text-base leading-relaxed font-medium text-black">
                    Puma Ledis Purse
                  </h6>
                  <div className="inline-flex w-full items-start justify-start gap-1.5">
                    <h6 className="text-xs leading-normal font-normal text-gray-500">
                      Size :<span className="text-black">38</span>
                    </h6>
                  </div>
                  <div className="inline-flex w-full items-start justify-start gap-1.5">
                    <h6 className="text-xs leading-normal font-normal text-gray-500">
                      Color :<span className="text-black">Red</span>
                    </h6>
                  </div>
                  <div className="inline-flex items-center justify-start gap-2.5">
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                    <input
                      type="text"
                      className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-1 py-0.5 text-center text-sm leading-snug font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                    />
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                  </div>
                </div>
                <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                  $50.00
                </h3>
              </div>
              <div className="inline-flex w-full items-center justify-start gap-5 rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all duration-700 ease-in-out hover:border-gray-400">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1718345788.png"
                  alt="Sky School Bag image"
                />
                <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                  <h6 className="text-base leading-relaxed font-medium text-black">
                    Sky School Bag
                  </h6>
                  <div className="inline-flex w-full items-start justify-start gap-1.5">
                    <h6 className="text-xs leading-normal font-normal text-gray-500">
                      Size :<span className="text-black">30</span>
                    </h6>
                  </div>
                  <div className="inline-flex w-full items-start justify-start gap-1.5">
                    <h6 className="text-xs leading-normal font-normal text-gray-500">
                      Color :<span className="text-black">Red</span>
                    </h6>
                  </div>
                  <div className="inline-flex items-center justify-start gap-2.5">
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                    <input
                      type="text"
                      className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-1 py-0.5 text-center text-sm leading-snug font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                    />
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                  </div>
                </div>
                <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                  $60.00
                </h3>
              </div>
              <div className="inline-flex w-full items-center justify-start gap-5 rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all duration-700 ease-in-out hover:border-gray-400">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1718345798.png"
                  alt="Levis Men Pant image"
                />
                <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                  <h6 className="text-base leading-relaxed font-medium text-black">
                    Levis Men Pant
                  </h6>
                  <div className="inline-flex w-full items-start justify-start gap-1.5">
                    <h6 className="text-xs leading-normal font-normal text-gray-500">
                      Size :<span className="text-black">34</span>
                    </h6>
                  </div>
                  <div className="inline-flex w-full items-start justify-start gap-1.5">
                    <h6 className="text-xs leading-normal font-normal text-gray-500">
                      Color :<span className="text-black">Black</span>
                    </h6>
                  </div>
                  <div className="inline-flex items-center justify-start gap-2.5">
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                    <input
                      type="text"
                      className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-1 py-0.5 text-center text-sm leading-snug font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                    />
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                  </div>
                </div>
                <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                  $100.00
                </h3>
              </div>
              <div className="inline-flex w-full items-center justify-start gap-5 rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all duration-700 ease-in-out hover:border-gray-400">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1718345809.png"
                  alt="Titan Men Watch image"
                />
                <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                  <h6 className="text-base leading-relaxed font-medium text-black">
                    Titan Men Watch
                  </h6>
                  <div className="inline-flex w-full items-start justify-start gap-1.5">
                    <h6 className="text-xs leading-normal font-normal text-gray-500">
                      Size :<span className="text-black">10</span>
                    </h6>
                  </div>
                  <div className="inline-flex w-full items-start justify-start gap-1.5">
                    <h6 className="text-xs leading-normal font-normal text-gray-500">
                      Color :<span className="text-black">Dark</span>
                    </h6>
                  </div>
                  <div className="inline-flex items-center justify-start gap-2.5">
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                    <input
                      type="text"
                      className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-1 py-0.5 text-center text-sm leading-snug font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                    />
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                  </div>
                </div>
                <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                  $70.00
                </h3>
              </div>
              <div className="inline-flex w-full items-center justify-start gap-5 rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all duration-700 ease-in-out hover:border-gray-400">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1718345821.png"
                  alt=" Levis T-shirt Men image"
                />
                <div className="inline-flex w-full flex-col items-start justify-start gap-1.5">
                  <h6 className="text-base leading-relaxed font-medium text-black">
                    {" "}
                    Levis T-shirt Men
                  </h6>
                  <div className="inline-flex w-full items-start justify-start gap-1.5">
                    <h6 className="text-xs leading-normal font-normal text-gray-500">
                      Size :<span className="text-black">XL</span>
                    </h6>
                  </div>
                  <div className="inline-flex w-full items-start justify-start gap-1.5">
                    <h6 className="text-xs leading-normal font-normal text-gray-500">
                      Color :<span className="text-black">White</span>
                    </h6>
                  </div>
                  <div className="inline-flex items-center justify-start gap-2.5">
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                    <input
                      type="text"
                      className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-gray-200 bg-gray-100 px-1 py-0.5 text-center text-sm leading-snug font-medium text-gray-900 placeholder-gray-900 focus:outline-none"
                    />
                    <button className="rounded-full border border-transparent bg-transparent p-1 transition-all duration-500 hover:border-gray-300 hover:bg-white"></button>
                  </div>
                </div>
                <h3 className="font-manrope text-2xl leading-9 font-semibold text-black">
                  $80.00
                </h3>
              </div>
            </div>
          </div>
          <div className="inline-flex w-full flex-col items-start justify-start gap-8">
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <h3 className="font-manrope text-3xl leading-normal font-bold text-black">
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
                          Products Delivered
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
                        22 Feb 2024, 04:00 PM
                      </h4>
                      <ul>
                        <h6 className="text-sm leading-normal font-normal text-indigo-400">
                          Product Delivered to the courier cart Express
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
                        19 Feb 2024, 05:30 PM
                      </h4>
                      <ul>
                        <h6 className="text-sm leading-normal font-normal text-indigo-400">
                          Order Placed - Receipt #202145
                        </h6>
                      </ul>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-4">
              <h3 className="font-manrope text-3xl leading-normal font-bold text-black">
                Order Summary
              </h3>
              <div className="flex w-full flex-col items-start justify-start gap-3.5 rounded-xl border border-gray-200 bg-gray-50 p-5">
                <div className="inline-flex w-full items-center justify-between">
                  <h5 className="text-lg leading-relaxed font-normal text-gray-600">
                    Subtotal:
                  </h5>
                  <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                    $ 360.00
                  </h5>
                </div>
                <div className="inline-flex w-full items-center justify-between">
                  <h5 className="text-lg leading-relaxed font-normal text-gray-600">
                    Delivery:
                  </h5>
                  <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                    Free
                  </h5>
                </div>
                <div className="inline-flex w-full items-center justify-between gap-6 border-b border-gray-200 pb-4">
                  <h5 className="text-lg leading-relaxed font-normal text-gray-600">
                    Tax:
                  </h5>
                  <h5 className="text-right text-lg leading-relaxed font-semibold text-gray-900">
                    $ 20.00
                  </h5>
                </div>
                <div className="inline-flex w-full items-center justify-between">
                  <h5 className="text-lg leading-relaxed font-normal text-gray-600">
                    Total:
                  </h5>
                  <h5 className="text-right text-lg leading-relaxed font-semibold text-indigo-600">
                    ₹380.00
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
