export default function CustomerReviewWithCards() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-6">
        <div className="flex w-full flex-col gap-11 border-b border-gray-100 pb-11 lg:flex-row">
          <div className="inline-flex w-full flex-col items-start justify-start gap-5 lg:w-[376px]">
            <div className="flex w-full items-center">
              <div className="flex w-9 items-center gap-0.5 py-[1px]">
                <p className="text-lg font-medium text-black">5</p>
                <div className="w-5"></div>
              </div>
              <p className="mx-5 h-2.5 w-full rounded-lg bg-indigo-100">
                <span className="flex h-full w-[92px] rounded-[30px] bg-indigo-500" />
              </p>
              <p className="w-10 py-[1px] text-right text-lg font-medium text-black">
                989
              </p>
            </div>
            <div className="flex w-full items-center">
              <div className="flex w-9 items-center gap-0.5 py-[1px]">
                <p className="text-lg font-medium text-black">4</p>
                <div className="w-5"></div>
              </div>
              <p className="mx-5 h-2.5 w-full rounded-lg bg-indigo-100">
                <span className="flex h-full w-[168px] rounded-[30px] bg-indigo-500" />
              </p>
              <p className="w-10 py-[1px] text-right text-lg font-medium text-black">
                4.5K
              </p>
            </div>
            <div className="flex w-full items-center">
              <div className="flex w-9 items-center gap-0.5 py-[1px]">
                <p className="text-lg font-medium text-black">3</p>
                <div className="w-5"></div>
              </div>
              <p className="mx-5 h-2.5 w-full rounded-lg bg-indigo-100">
                <span className="flex h-full w-[30px] rounded-[30px] bg-indigo-500" />
              </p>
              <p className="w-10 py-[1px] text-right text-lg font-medium text-black">
                50
              </p>
            </div>
            <div className="flex w-full items-center">
              <div className="flex w-9 items-center gap-0.5 py-[1px]">
                <p className="text-lg font-medium text-black">2</p>
                <div className="w-5"></div>
              </div>
              <p className="mx-5 h-2.5 w-full rounded-lg bg-indigo-100">
                <span className="flex h-full w-[16px] rounded-[30px] bg-indigo-500" />
              </p>
              <p className="w-10 py-[1px] text-right text-lg font-medium text-black">
                16
              </p>
            </div>
            <div className="flex w-full items-center">
              <div className="flex w-9 items-center gap-0.5 py-[1px]">
                <p className="text-lg font-medium text-black">1</p>
                <div className="w-5"></div>
              </div>
              <p className="mx-5 h-2.5 w-full rounded-lg bg-indigo-100">
                <span className="flex h-full w-[8px] rounded-[30px] bg-indigo-500" />
              </p>
              <p className="w-10 py-[1px] text-right text-lg font-medium text-black">
                8
              </p>
            </div>
          </div>
          <div className="inline-flex w-full flex-col items-center justify-center gap-8 lg:w-[796px]">
            <div className="flex flex-col items-start justify-center gap-4">
              <h2 className="font-manrope text-3xl leading-normal font-bold text-black">
                Customer Ratings
              </h2>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                One of the standout features of Pagedone is its intuitive and
                user-friendly interface. Navigating through the system feels
                natural, and the layout makes it easy to locate and utilize
                various design elements. This is particularly beneficial for
                designers looking to streamline their workflow.
              </p>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-6 sm:flex-row">
              <button className="flex w-full items-center justify-center rounded-full bg-indigo-600 px-6 py-3 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800">
                <span className="px-2 text-center text-lg leading-8 font-semibold text-white">
                  Leave Us Feedback
                </span>
              </button>
              <button className="flex w-full items-center justify-center rounded-full bg-indigo-50 px-6 py-3 transition-all duration-700 ease-in-out hover:bg-indigo-100">
                <span className="px-2 text-center text-lg leading-8 font-semibold text-indigo-600">
                  Read Feedbacks
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex w-full flex-col gap-8 md:flex-row lg:flex-col">
            <div className="inline-flex h-full w-full flex-col items-start justify-start gap-2.5 rounded-2xl border border-gray-300 p-6 lg:h-fit">
              <div className="flex flex-col items-start justify-start gap-6">
                <div className="inline-flex w-full items-center justify-between gap-14">
                  <div className="flex items-center justify-start gap-5">
                    <img
                      className="rounded-lg object-cover"
                      src="https://pagedone.io/asset/uploads/1714994807.png"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-0.5">
                      <h5 className="text-lg leading-8 font-semibold text-gray-900">
                        Marco MacGyver
                      </h5>
                      <h6 className="text-sm leading-snug font-normal text-gray-600">
                        12 Mar, 2024
                      </h6>
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <span className="flex items-center justify-center text-xs leading-5 font-medium text-black">
                      4.5
                    </span>
                  </div>
                </div>
                <p className="text-base leading-relaxed font-normal text-gray-600">
                  Sed facilisi tortor mauris in vestibulum turpis ac. Senectus
                  dui ultrices sed nunc odio mattis tempus. Egestas sed id
                  euismod sit. Urna ullamcorper risus sit id nulla.
                </p>
              </div>
            </div>
            <div className="inline-flex h-full w-full flex-col items-start justify-start gap-2.5 rounded-2xl border border-gray-300 p-6 lg:h-fit">
              <div className="flex flex-col items-start justify-start gap-6">
                <div className="inline-flex w-full items-center justify-between gap-14">
                  <div className="flex items-center justify-start gap-5">
                    <img
                      className="rounded-lg object-cover"
                      src="https://pagedone.io/asset/uploads/1714994930.png"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-0.5">
                      <h5 className="text-lg leading-8 font-semibold text-gray-900">
                        Emma Davis
                      </h5>
                      <h6 className="text-sm leading-snug font-normal text-gray-600">
                        05 Mar, 2024
                      </h6>
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <span className="flex items-center justify-center text-xs leading-5 font-medium text-black">
                      5.0
                    </span>
                  </div>
                </div>
                <p className="text-base leading-relaxed font-normal text-gray-600">
                  Eget sed sollicitudin congue sapien. Commodo vel aliquam ut
                  imperdiet malesuada aliquam sollicitudin at. Tincidunt nunc
                  sed integer tortor. Dictum at turpis lorem nibh enim purus
                  suspendisse in arcu.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-8 md:flex-row lg:flex-col">
            <div className="inline-flex h-full w-full flex-col items-start justify-start gap-2.5 rounded-2xl border border-gray-300 p-6 lg:h-fit">
              <div className="flex flex-col items-start justify-start gap-6">
                <div className="inline-flex w-full items-center justify-between gap-14">
                  <div className="flex items-center justify-start gap-5">
                    <img
                      className="rounded-lg object-cover"
                      src="https://pagedone.io/asset/uploads/1714994883.png"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-0.5">
                      <h5 className="text-lg leading-8 font-semibold text-gray-900">
                        Mia Thompson
                      </h5>
                      <h6 className="text-sm leading-snug font-normal text-gray-600">
                        10 Mar, 2024
                      </h6>
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <span className="flex items-center justify-center text-xs leading-5 font-medium text-black">
                      3.3
                    </span>
                  </div>
                </div>
                <p className="text-base leading-relaxed font-normal text-gray-600">
                  Vel urna scelerisque condimentum id ultrices nec morbi.
                  Ullamcorper scelerisque sit feugiat ultrices mi lorem. Tellus
                  urna urna lorem id in at at. In placerat dui egestas rhoncus
                  orci. Accumsan malesuada amet est facilisi facilisi pretium.
                </p>
              </div>
            </div>
            <div className="inline-flex h-full w-full flex-col items-start justify-start gap-2.5 rounded-2xl border border-gray-300 p-6 lg:h-fit">
              <div className="flex flex-col items-start justify-start gap-6">
                <div className="inline-flex w-full items-center justify-between gap-14">
                  <div className="flex items-center justify-start gap-5">
                    <img
                      className="rounded-lg object-cover"
                      src="https://pagedone.io/asset/uploads/1714994940.png"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-0.5">
                      <h5 className="text-lg leading-8 font-semibold text-gray-900">
                        Samuel Turner
                      </h5>
                      <h6 className="text-sm leading-snug font-normal text-gray-600">
                        20 Mar, 2024
                      </h6>
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <span className="flex items-center justify-center text-xs leading-5 font-medium text-black">
                      2.0
                    </span>
                  </div>
                </div>
                <p className="text-base leading-relaxed font-normal text-gray-600">
                  Est luctus venenatis quis neque pellentesque pharetra a sit.
                  Auctor convallis tellus est diam blandit vel imperdiet varius.
                  Semper
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-8 md:flex-row lg:flex-col">
            <div className="inline-flex h-full w-full flex-col items-start justify-start gap-2.5 rounded-2xl border border-gray-300 p-6 lg:h-fit">
              <div className="flex flex-col items-start justify-start gap-6">
                <div className="inline-flex w-full items-center justify-between gap-14">
                  <div className="flex items-center justify-start gap-5">
                    <img
                      className="rounded-lg object-cover"
                      src="https://pagedone.io/asset/uploads/1714994893.png"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-0.5">
                      <h5 className="text-lg leading-8 font-semibold text-gray-900">
                        Noah Anderson
                      </h5>
                      <h6 className="text-sm leading-snug font-normal text-gray-600">
                        15 Mar, 2024
                      </h6>
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <span className="flex items-center justify-center text-xs leading-5 font-medium text-black">
                      4.1
                    </span>
                  </div>
                </div>
                <p className="text-base leading-relaxed font-normal text-gray-600">
                  Libero pharetra malesuada phasellus eu vehicula at est. Nibh
                  placerat viverra nec et egestas vitae blandit. Scelerisque
                  tortor a sem viverra netus nascetur purus. Magna ac tincidunt
                  ut cursus integer id fames morbi{" "}
                </p>
              </div>
            </div>
            <div className="inline-flex h-full w-full flex-col items-start justify-start gap-2.5 rounded-2xl border border-gray-300 p-6 lg:h-fit">
              <div className="flex flex-col items-start justify-start gap-6">
                <div className="inline-flex w-full items-center justify-between gap-14">
                  <div className="flex items-center justify-start gap-5">
                    <img
                      className="rounded-lg object-cover"
                      src="https://pagedone.io/asset/uploads/1714994950.png"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-0.5">
                      <h5 className="text-lg leading-8 font-semibold text-gray-900">
                        Amelia Clark
                      </h5>
                      <h6 className="text-sm leading-snug font-normal text-gray-600">
                        21 Mar, 2024
                      </h6>
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <span className="flex items-center justify-center text-xs leading-5 font-medium text-black">
                      2.4
                    </span>
                  </div>
                </div>
                <p className="text-base leading-relaxed font-normal text-gray-600">
                  Libero pharetra malesuada phasellus eu vehicula at est. Nibh
                  placerat viverra nec et egestas vitae blandit. Scelerisque
                  tortor a sem viverra netus nascetur purus. Magna ac{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
