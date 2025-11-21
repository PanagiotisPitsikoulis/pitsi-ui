export default function ReviewFormWithDetailedUserReview() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-6">
        <h2 className="font-manrope w-full text-center text-4xl leading-normal font-semibold text-black">
          Customer Reviews
        </h2>
        <div className="my-14 inline-flex w-full flex-col gap-8 rounded-2xl border border-neutral-100 p-5">
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-manrope text-3xl leading-normal font-bold text-gray-900">
              Average Rating
            </h3>
            <div className="inline-flex items-center justify-start gap-4">
              <h3 className="font-manrope text-3xl leading-normal font-semibold text-gray-500">
                4.5
              </h3>
              <div className="flex items-center justify-start gap-1.5">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2.5">
            <div className="flex w-full items-center">
              <p className="py-[1px] text-lg font-medium text-black">5</p>
              <p className="mr-2.5 ml-5 h-2.5 w-full rounded-[30px] bg-blue-50">
                <span className="flex h-full w-[90%] rounded-[30px] bg-cyan-600" />
              </p>
              <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                90%
              </p>
            </div>
            <div className="flex w-full items-center">
              <p className="py-[1px] text-lg font-medium text-black">4</p>
              <p className="mr-2.5 ml-5 h-2.5 w-full rounded-[30px] bg-blue-50">
                <span className="flex h-full w-[60%] rounded-[30px] bg-cyan-600" />
              </p>
              <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                60%
              </p>
            </div>
            <div className="flex w-full items-center">
              <p className="py-[1px] text-lg font-medium text-black">3</p>
              <p className="mr-2.5 ml-5 h-2.5 w-full rounded-[30px] bg-blue-50">
                <span className="flex h-full w-[20%] rounded-[30px] bg-cyan-600" />
              </p>
              <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                20%
              </p>
            </div>
            <div className="flex w-full items-center">
              <p className="py-[1px] text-lg font-medium text-black">2</p>
              <p className="mr-2.5 ml-5 h-2.5 w-full rounded-[30px] bg-blue-50">
                <span className="flex h-full w-[40%] rounded-[30px] bg-cyan-600" />
              </p>
              <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                40%
              </p>
            </div>
            <div className="flex w-full items-center">
              <p className="py-[1px] text-lg font-medium text-black">1</p>
              <p className="mr-2.5 ml-5 h-2.5 w-full rounded-[30px] bg-blue-50">
                <span className="flex h-full w-[3%] rounded-[30px] bg-cyan-600" />
              </p>
              <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                {" "}
                3%<span className="text-transparent">0</span>
              </p>
            </div>
          </div>
          <button className="flex w-full items-center justify-center rounded-xl bg-cyan-600 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:bg-cyan-800 sm:w-fit">
            <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
              Submit Reviews
            </span>
          </button>
        </div>
        <div className="flex flex-wrap gap-8 lg:flex-nowrap">
          <div className="flex flex-col gap-8">
            <div className="inline-flex flex-col items-start justify-start gap-6 rounded-2xl border border-neutral-100 p-6">
              <p className="text-base leading-relaxed font-normal text-gray-400">
                “Absolutely love this product! It exceeded my expectations in
                every way. The quality is outstanding, and it's incredibly
                versatile. Would highly recommend to anyone!”
              </p>
              <div className="flex w-full flex-col items-start justify-start gap-5 border-t border-neutral-100 pt-5">
                <div className="flex w-full flex-col items-start justify-center gap-1.5">
                  <div className="inline-flex w-full items-center justify-between">
                    <h5 className="text-lg leading-8 font-semibold text-black">
                      John Doe
                    </h5>
                    <div className="flex items-center justify-end gap-1">
                      <h6 className="text-right text-base leading-relaxed font-normal text-black">
                        5.0
                      </h6>
                    </div>
                  </div>
                  <h6 className="text-base leading-relaxed font-normal text-black">
                    12 Mar, 2024
                  </h6>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-6 rounded-2xl border border-neutral-100 p-6">
              <p className="text-base leading-relaxed font-normal text-gray-400">
                “This product is a game-changer, exceeding expectations with its
                durability, ease of use, and transformative impact on task.”
              </p>
              <div className="flex w-full flex-col items-start justify-start gap-5 border-t border-neutral-100 pt-5">
                <div className="flex w-full flex-col items-start justify-center gap-1.5">
                  <div className="inline-flex w-full items-center justify-between">
                    <h5 className="text-lg leading-8 font-semibold text-black">
                      Jennifer Martinez
                    </h5>
                    <div className="flex items-center justify-end gap-1">
                      <h6 className="text-right text-base leading-relaxed font-normal text-black">
                        4.5
                      </h6>
                    </div>
                  </div>
                  <h6 className="text-base leading-relaxed font-normal text-black">
                    12 Sep, 2023
                  </h6>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-6 rounded-2xl border border-neutral-100 p-6">
              <p className="text-base leading-relaxed font-normal text-gray-400">
                “I was hesitant at first, but after trying this product, I'm
                hooked! It's so easy to use, and the results speak for
                themselves. Plus, the customer service was exceptional.
                Definitely a repeat customer!”
              </p>
              <div className="flex w-full flex-col items-start justify-start gap-5 border-t border-neutral-100 pt-5">
                <div className="flex w-full flex-col items-start justify-center gap-1.5">
                  <div className="inline-flex w-full items-center justify-between">
                    <h5 className="text-lg leading-8 font-semibold text-black">
                      Robert Karmazov
                    </h5>
                    <div className="flex items-center justify-end gap-1">
                      <h6 className="text-right text-base leading-relaxed font-normal text-black">
                        4.3
                      </h6>
                    </div>
                  </div>
                  <h6 className="text-base leading-relaxed font-normal text-black">
                    16 Feb, 2023
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="inline-flex flex-col items-start justify-start gap-6 rounded-2xl border border-neutral-100 p-6">
              <p className="text-base leading-relaxed font-normal text-gray-400">
                “This product is a must-have! It's made my life so much easier,
                and I can't imagine going back to the old way of doing things.
                The convenience, reliability, and performance are top-notch.
                Highly recommend giving it a try!”
              </p>
              <div className="flex w-full flex-col items-start justify-start gap-5 border-t border-neutral-100 pt-5">
                <div className="flex w-full flex-col items-start justify-center gap-1.5">
                  <div className="inline-flex w-full items-center justify-between">
                    <h5 className="text-lg leading-8 font-semibold text-black">
                      Harshita Patel
                    </h5>
                    <div className="flex items-center justify-end gap-1">
                      <h6 className="text-right text-base leading-relaxed font-normal text-black">
                        3.0
                      </h6>
                    </div>
                  </div>
                  <h6 className="text-base leading-relaxed font-normal text-black">
                    26 Jan, 2024
                  </h6>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-6 rounded-2xl border border-neutral-100 p-6">
              <p className="text-base leading-relaxed font-normal text-gray-400">
                “This product is a game-changer! I've been using it for a while
                now, and I can't imagine my life without it. It's durable,
                user-friendly, and delivers excellent results. 5 stars!”
              </p>
              <div className="flex w-full flex-col items-start justify-start gap-5 border-t border-neutral-100 pt-5">
                <div className="flex w-full flex-col items-start justify-center gap-1.5">
                  <div className="inline-flex w-full items-center justify-between">
                    <h5 className="text-lg leading-8 font-semibold text-black">
                      Sarah Davis
                    </h5>
                    <div className="flex items-center justify-end gap-1">
                      <h6 className="text-right text-base leading-relaxed font-normal text-black">
                        3.8
                      </h6>
                    </div>
                  </div>
                  <h6 className="text-base leading-relaxed font-normal text-black">
                    28 Aug, 2023
                  </h6>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-6 rounded-2xl border border-neutral-100 p-6">
              <p className="text-base leading-relaxed font-normal text-gray-400">
                “I've tried other products in the past, but none compare to this
                one. It's truly a game-changer. The customer support team was
                also incredibly helpful and responsive.”{" "}
              </p>
              <div className="flex w-full flex-col items-start justify-start gap-5 border-t border-neutral-100 pt-5">
                <div className="flex w-full flex-col items-start justify-center gap-1.5">
                  <div className="inline-flex w-full items-center justify-between">
                    <h5 className="text-lg leading-8 font-semibold text-black">
                      Jessica Taylor
                    </h5>
                    <div className="flex items-center justify-end gap-1">
                      <h6 className="text-right text-base leading-relaxed font-normal text-black">
                        4.0
                      </h6>
                    </div>
                  </div>
                  <h6 className="text-base leading-relaxed font-normal text-black">
                    29 Dec, 2022
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="inline-flex flex-col items-start justify-start gap-6 rounded-2xl border border-neutral-100 p-6">
              <p className="text-base leading-relaxed font-normal text-gray-400">
                “This product is a must-have in every household! It's reliable,
                durable, and makes so much easier. I've already recommended it
                to all my friends, and they love it too!”
              </p>
              <div className="flex w-full flex-col items-start justify-start gap-5 border-t border-neutral-100 pt-5">
                <div className="flex w-full flex-col items-start justify-center gap-1.5">
                  <div className="inline-flex w-full items-center justify-between">
                    <h5 className="text-lg leading-8 font-semibold text-black">
                      Robert Garcia
                    </h5>
                    <div className="flex items-center justify-end gap-1">
                      <h6 className="text-right text-base leading-relaxed font-normal text-black">
                        4.5
                      </h6>
                    </div>
                  </div>
                  <h6 className="text-base leading-relaxed font-normal text-black">
                    15 Oct, 2023
                  </h6>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-6 rounded-2xl border border-neutral-100 p-6">
              <p className="text-base leading-relaxed font-normal text-gray-400">
                “I've tried many similar products before, but this one stands
                out from the rest. The quality is unmatched, and it's worth
                every penny. Whether you're a beginner or a pro, this product
                won't disappoint.”
              </p>
              <div className="flex w-full flex-col items-start justify-start gap-5 border-t border-neutral-100 pt-5">
                <div className="flex w-full flex-col items-start justify-center gap-1.5">
                  <div className="inline-flex w-full items-center justify-between">
                    <h5 className="text-lg leading-8 font-semibold text-black">
                      Ashley Miller
                    </h5>
                    <div className="flex items-center justify-end gap-1">
                      <h6 className="text-right text-base leading-relaxed font-normal text-black">
                        5.0
                      </h6>
                    </div>
                  </div>
                  <h6 className="text-base leading-relaxed font-normal text-black">
                    05 Jun, 2023
                  </h6>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-6 rounded-2xl border border-neutral-100 p-6">
              <p className="text-base leading-relaxed font-normal text-gray-400">
                “I've been using this product for a while now, and I'm
                consistently impressed by its performance. It's convenient,
                efficient, and has simplified my life in so many ways.
                Definitely worth every penny.”
              </p>
              <div className="flex w-full flex-col items-start justify-start gap-5 border-t border-neutral-100 pt-5">
                <div className="flex w-full flex-col items-start justify-center gap-1.5">
                  <div className="inline-flex w-full items-center justify-between">
                    <h5 className="text-lg leading-8 font-semibold text-black">
                      Emily Johnson
                    </h5>
                    <div className="flex items-center justify-end gap-1">
                      <h6 className="text-right text-base leading-relaxed font-normal text-black">
                        5.0
                      </h6>
                    </div>
                  </div>
                  <h6 className="text-base leading-relaxed font-normal text-black">
                    20 Nov, 2022
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
