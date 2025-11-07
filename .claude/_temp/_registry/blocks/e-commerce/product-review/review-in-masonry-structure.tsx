export default function ReviewInMasonryStructure() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <h2 className="w-full text-center text-black text-4xl font-semibold font-manrope leading-normal">
          Customer Reviews
        </h2>
        <div className="w-full my-14 p-5 rounded-2xl border border-neutral-100 flex-col gap-8 inline-flex">
          <div className="flex-col  items-start gap-4 flex">
            <h3 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
              Average Rating
            </h3>
            <div className="justify-start items-center gap-4 inline-flex">
              <h3 className="text-gray-500 text-3xl font-semibold font-manrope leading-normal">
                4.5
              </h3>
              <div className="justify-start items-center gap-1.5 flex">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2.5 flex">
            <div className="flex items-center w-full">
              <p className="font-medium text-lg py-[1px] text-black">5</p>
              <p className="h-2.5 w-full rounded-[30px] bg-blue-50 ml-5 mr-2.5">
                <span className="h-full w-[90%] rounded-[30px] bg-cyan-600 flex" />
              </p>
              <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                90%
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="font-medium text-lg py-[1px] text-black">4</p>
              <p className="h-2.5 w-full rounded-[30px] bg-blue-50 ml-5 mr-2.5">
                <span className="h-full w-[60%] rounded-[30px] bg-cyan-600 flex" />
              </p>
              <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                60%
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="font-medium text-lg py-[1px] text-black">3</p>
              <p className="h-2.5 w-full rounded-[30px] bg-blue-50 ml-5 mr-2.5">
                <span className="h-full w-[20%] rounded-[30px] bg-cyan-600 flex" />
              </p>
              <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                20%
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="font-medium text-lg py-[1px] text-black">2</p>
              <p className="h-2.5 w-full rounded-[30px] bg-blue-50 ml-5 mr-2.5">
                <span className="h-full w-[40%] rounded-[30px] bg-cyan-600 flex" />
              </p>
              <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                40%
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="font-medium text-lg py-[1px] text-black">1</p>
              <p className="h-2.5 w-full rounded-[30px] bg-blue-50 ml-5 mr-2.5">
                <span className="h-full w-[3%] rounded-[30px] bg-cyan-600 flex" />
              </p>
              <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                {" "}
                3%<span className="text-transparent">0</span>
              </p>
            </div>
          </div>
          <button className="sm:w-fit w-full px-5 py-2.5 bg-cyan-600 hover:bg-cyan-800 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
            <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
              Submit Reviews
            </span>
          </button>
        </div>
        <div className="flex lg:flex-nowrap flex-wrap gap-8">
          <div className="flex flex-col gap-8">
            <div className="p-6 rounded-2xl border border-neutral-100 flex-col justify-start items-start gap-6 inline-flex">
              <p className="text-gray-400 text-base font-normal leading-relaxed">
                “Absolutely love this product! It exceeded my expectations in
                every way. The quality is outstanding, and it's incredibly
                versatile. Would highly recommend to anyone!”
              </p>
              <div className="w-full flex-col justify-start items-start gap-5 flex pt-5 border-t border-neutral-100">
                <div className="w-full flex-col justify-center items-start gap-1.5 flex">
                  <div className="w-full justify-between items-center inline-flex">
                    <h5 className="text-black text-lg font-semibold leading-8">
                      John Doe
                    </h5>
                    <div className="justify-end items-center gap-1 flex">
                      <h6 className="text-right text-black text-base font-normal leading-relaxed">
                        5.0
                      </h6>
                    </div>
                  </div>
                  <h6 className="text-black text-base font-normal leading-relaxed">
                    12 Mar, 2024
                  </h6>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-neutral-100 flex-col justify-start items-start gap-6 inline-flex">
              <p className="text-gray-400 text-base font-normal leading-relaxed">
                “This product is a game-changer, exceeding expectations with its
                durability, ease of use, and transformative impact on task.”
              </p>
              <div className="w-full flex-col justify-start items-start gap-5 flex pt-5 border-t border-neutral-100">
                <div className="w-full flex-col justify-center items-start gap-1.5 flex">
                  <div className="w-full justify-between items-center inline-flex">
                    <h5 className="text-black text-lg font-semibold leading-8">
                      Jennifer Martinez
                    </h5>
                    <div className="justify-end items-center gap-1 flex">
                      <h6 className="text-right text-black text-base font-normal leading-relaxed">
                        4.5
                      </h6>
                    </div>
                  </div>
                  <h6 className="text-black text-base font-normal leading-relaxed">
                    12 Sep, 2023
                  </h6>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-neutral-100 flex-col justify-start items-start gap-6 inline-flex">
              <p className="text-gray-400 text-base font-normal leading-relaxed">
                “I was hesitant at first, but after trying this product, I'm
                hooked! It's so easy to use, and the results speak for
                themselves. Plus, the customer service was exceptional.
                Definitely a repeat customer!”
              </p>
              <div className="w-full flex-col justify-start items-start gap-5 flex pt-5 border-t border-neutral-100">
                <div className="w-full flex-col justify-center items-start gap-1.5 flex">
                  <div className="w-full justify-between items-center inline-flex">
                    <h5 className="text-black text-lg font-semibold leading-8">
                      Robert Karmazov
                    </h5>
                    <div className="justify-end items-center gap-1 flex">
                      <h6 className="text-right text-black text-base font-normal leading-relaxed">
                        4.3
                      </h6>
                    </div>
                  </div>
                  <h6 className="text-black text-base font-normal leading-relaxed">
                    16 Feb, 2023
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="p-6 rounded-2xl border border-neutral-100 flex-col justify-start items-start gap-6 inline-flex">
              <p className="text-gray-400 text-base font-normal leading-relaxed">
                “This product is a must-have! It's made my life so much easier,
                and I can't imagine going back to the old way of doing things.
                The convenience, reliability, and performance are top-notch.
                Highly recommend giving it a try!”
              </p>
              <div className="w-full flex-col justify-start items-start gap-5 flex pt-5 border-t border-neutral-100">
                <div className="w-full flex-col justify-center items-start gap-1.5 flex">
                  <div className="w-full justify-between items-center inline-flex">
                    <h5 className="text-black text-lg font-semibold leading-8">
                      Harshita Patel
                    </h5>
                    <div className="justify-end items-center gap-1 flex">
                      <h6 className="text-right text-black text-base font-normal leading-relaxed">
                        3.0
                      </h6>
                    </div>
                  </div>
                  <h6 className="text-black text-base font-normal leading-relaxed">
                    26 Jan, 2024
                  </h6>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-neutral-100 flex-col justify-start items-start gap-6 inline-flex">
              <p className="text-gray-400 text-base font-normal leading-relaxed">
                “This product is a game-changer! I've been using it for a while
                now, and I can't imagine my life without it. It's durable,
                user-friendly, and delivers excellent results. 5 stars!”
              </p>
              <div className="w-full flex-col justify-start items-start gap-5 flex pt-5 border-t border-neutral-100">
                <div className="w-full flex-col justify-center items-start gap-1.5 flex">
                  <div className="w-full justify-between items-center inline-flex">
                    <h5 className="text-black text-lg font-semibold leading-8">
                      Sarah Davis
                    </h5>
                    <div className="justify-end items-center gap-1 flex">
                      <h6 className="text-right text-black text-base font-normal leading-relaxed">
                        3.8
                      </h6>
                    </div>
                  </div>
                  <h6 className="text-black text-base font-normal leading-relaxed">
                    28 Aug, 2023
                  </h6>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-neutral-100 flex-col justify-start items-start gap-6 inline-flex">
              <p className="text-gray-400 text-base font-normal leading-relaxed">
                “I've tried other products in the past, but none compare to this
                one. It's truly a game-changer. The customer support team was
                also incredibly helpful and responsive.”{" "}
              </p>
              <div className="w-full flex-col justify-start items-start gap-5 flex pt-5 border-t border-neutral-100">
                <div className="w-full flex-col justify-center items-start gap-1.5 flex">
                  <div className="w-full justify-between items-center inline-flex">
                    <h5 className="text-black text-lg font-semibold leading-8">
                      Jessica Taylor
                    </h5>
                    <div className="justify-end items-center gap-1 flex">
                      <h6 className="text-right text-black text-base font-normal leading-relaxed">
                        4.0
                      </h6>
                    </div>
                  </div>
                  <h6 className="text-black text-base font-normal leading-relaxed">
                    29 Dec, 2022
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="p-6 rounded-2xl border border-neutral-100 flex-col justify-start items-start gap-6 inline-flex">
              <p className="text-gray-400 text-base font-normal leading-relaxed">
                “This product is a must-have in every household! It's reliable,
                durable, and makes so much easier. I've already recommended it
                to all my friends, and they love it too!”
              </p>
              <div className="w-full flex-col justify-start items-start gap-5 flex pt-5 border-t border-neutral-100">
                <div className="w-full flex-col justify-center items-start gap-1.5 flex">
                  <div className="w-full justify-between items-center inline-flex">
                    <h5 className="text-black text-lg font-semibold leading-8">
                      Robert Garcia
                    </h5>
                    <div className="justify-end items-center gap-1 flex">
                      <h6 className="text-right text-black text-base font-normal leading-relaxed">
                        4.5
                      </h6>
                    </div>
                  </div>
                  <h6 className="text-black text-base font-normal leading-relaxed">
                    15 Oct, 2023
                  </h6>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-neutral-100 flex-col justify-start items-start gap-6 inline-flex">
              <p className="text-gray-400 text-base font-normal leading-relaxed">
                “I've tried many similar products before, but this one stands
                out from the rest. The quality is unmatched, and it's worth
                every penny. Whether you're a beginner or a pro, this product
                won't disappoint.”
              </p>
              <div className="w-full flex-col justify-start items-start gap-5 flex pt-5 border-t border-neutral-100">
                <div className="w-full flex-col justify-center items-start gap-1.5 flex">
                  <div className="w-full justify-between items-center inline-flex">
                    <h5 className="text-black text-lg font-semibold leading-8">
                      Ashley Miller
                    </h5>
                    <div className="justify-end items-center gap-1 flex">
                      <h6 className="text-right text-black text-base font-normal leading-relaxed">
                        5.0
                      </h6>
                    </div>
                  </div>
                  <h6 className="text-black text-base font-normal leading-relaxed">
                    05 Jun, 2023
                  </h6>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-neutral-100 flex-col justify-start items-start gap-6 inline-flex">
              <p className="text-gray-400 text-base font-normal leading-relaxed">
                “I've been using this product for a while now, and I'm
                consistently impressed by its performance. It's convenient,
                efficient, and has simplified my life in so many ways.
                Definitely worth every penny.”
              </p>
              <div className="w-full flex-col justify-start items-start gap-5 flex pt-5 border-t border-neutral-100">
                <div className="w-full flex-col justify-center items-start gap-1.5 flex">
                  <div className="w-full justify-between items-center inline-flex">
                    <h5 className="text-black text-lg font-semibold leading-8">
                      Emily Johnson
                    </h5>
                    <div className="justify-end items-center gap-1 flex">
                      <h6 className="text-right text-black text-base font-normal leading-relaxed">
                        5.0
                      </h6>
                    </div>
                  </div>
                  <h6 className="text-black text-base font-normal leading-relaxed">
                    20 Nov, 2022
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
