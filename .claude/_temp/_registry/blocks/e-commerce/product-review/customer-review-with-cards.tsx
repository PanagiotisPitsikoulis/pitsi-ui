export default function CustomerReviewWithCards() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <div className="w-full flex lg:flex-row flex-col gap-11 pb-11 border-b border-gray-100">
          <div className="lg:w-[376px] w-full flex-col justify-start items-start gap-5 inline-flex">
            <div className="flex items-center w-full">
              <div className="w-9 items-center flex gap-0.5 py-[1px]">
                <p className="font-medium text-lg text-black">5</p>
                <div className="w-5"></div>
              </div>
              <p className="h-2.5 w-full rounded-lg bg-indigo-100 mx-5">
                <span className="h-full w-[92px] rounded-[30px] bg-indigo-500 flex" />
              </p>
              <p className="font-medium text-lg py-[1px] text-black w-10 text-right">
                989
              </p>
            </div>
            <div className="flex items-center w-full">
              <div className="w-9 items-center flex gap-0.5 py-[1px]">
                <p className="font-medium text-lg text-black">4</p>
                <div className="w-5"></div>
              </div>
              <p className="h-2.5 w-full rounded-lg bg-indigo-100 mx-5">
                <span className="h-full w-[168px] rounded-[30px] bg-indigo-500 flex" />
              </p>
              <p className="font-medium text-lg py-[1px] text-black w-10 text-right">
                4.5K
              </p>
            </div>
            <div className="flex items-center w-full">
              <div className="w-9 items-center flex gap-0.5 py-[1px]">
                <p className="font-medium text-lg text-black">3</p>
                <div className="w-5"></div>
              </div>
              <p className="h-2.5 w-full rounded-lg bg-indigo-100 mx-5">
                <span className="h-full w-[30px] rounded-[30px] bg-indigo-500 flex" />
              </p>
              <p className="font-medium text-lg py-[1px] text-black w-10 text-right">
                50
              </p>
            </div>
            <div className="flex items-center w-full">
              <div className="w-9 items-center flex gap-0.5 py-[1px]">
                <p className="font-medium text-lg text-black">2</p>
                <div className="w-5"></div>
              </div>
              <p className="h-2.5 w-full rounded-lg bg-indigo-100 mx-5">
                <span className="h-full w-[16px] rounded-[30px] bg-indigo-500 flex" />
              </p>
              <p className="font-medium text-lg py-[1px] text-black w-10 text-right">
                16
              </p>
            </div>
            <div className="flex items-center w-full">
              <div className="w-9 items-center flex gap-0.5 py-[1px]">
                <p className="font-medium text-lg text-black">1</p>
                <div className="w-5"></div>
              </div>
              <p className="h-2.5 w-full rounded-lg bg-indigo-100 mx-5">
                <span className="h-full w-[8px] rounded-[30px] bg-indigo-500 flex" />
              </p>
              <p className="font-medium text-lg py-[1px] text-black w-10 text-right">
                8
              </p>
            </div>
          </div>
          <div className="lg:w-[796px] w-full flex-col justify-center items-center gap-8 inline-flex">
            <div className="flex-col justify-center items-start gap-4 flex">
              <h2 className="text-black text-3xl font-bold font-manrope leading-normal">
                Customer Ratings
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                One of the standout features of Pagedone is its intuitive and
                user-friendly interface. Navigating through the system feels
                natural, and the layout makes it easy to locate and utilize
                various design elements. This is particularly beneficial for
                designers looking to streamline their workflow.
              </p>
            </div>
            <div className="w-full justify-start items-start gap-6 flex sm:flex-row flex-col">
              <button className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-full shadow justify-center items-center flex">
                <span className="px-2 text-center text-white text-lg font-semibold leading-8">
                  Leave Us Feedback
                </span>
              </button>
              <button className="w-full px-6 py-3 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-full justify-center items-center flex">
                <span className="px-2 text-center text-indigo-600 text-lg font-semibold leading-8">
                  Read Feedbacks
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-14">
          <div className="w-full flex lg:flex-col md:flex-row flex-col gap-8">
            <div className="w-full lg:h-fit h-full p-6 rounded-2xl border border-gray-300 flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="w-full justify-between items-center gap-14 inline-flex">
                  <div className="justify-start items-center gap-5 flex">
                    <img
                      className="rounded-lg object-cover"
                      src="https://pagedone.io/asset/uploads/1714994807.png"
                    />
                    <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                      <h5 className="text-gray-900 text-lg font-semibold leading-8">
                        Marco MacGyver
                      </h5>
                      <h6 className="text-gray-600 text-sm font-normal leading-snug">
                        12 Mar, 2024
                      </h6>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-2 flex">
                    <span className="text-black text-xs font-medium leading-5 flex items-center justify-center">
                      4.5
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-base font-normal leading-relaxed">
                  Sed facilisi tortor mauris in vestibulum turpis ac. Senectus
                  dui ultrices sed nunc odio mattis tempus. Egestas sed id
                  euismod sit. Urna ullamcorper risus sit id nulla.
                </p>
              </div>
            </div>
            <div className="w-full lg:h-fit h-full p-6 rounded-2xl border border-gray-300 flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="w-full justify-between items-center gap-14 inline-flex">
                  <div className="justify-start items-center gap-5 flex">
                    <img
                      className="rounded-lg object-cover"
                      src="https://pagedone.io/asset/uploads/1714994930.png"
                    />
                    <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                      <h5 className="text-gray-900 text-lg font-semibold leading-8">
                        Emma Davis
                      </h5>
                      <h6 className="text-gray-600 text-sm font-normal leading-snug">
                        05 Mar, 2024
                      </h6>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-2 flex">
                    <span className="text-black text-xs font-medium leading-5 flex items-center justify-center">
                      5.0
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-base font-normal leading-relaxed">
                  Eget sed sollicitudin congue sapien. Commodo vel aliquam ut
                  imperdiet malesuada aliquam sollicitudin at. Tincidunt nunc
                  sed integer tortor. Dictum at turpis lorem nibh enim purus
                  suspendisse in arcu.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex lg:flex-col md:flex-row flex-col gap-8">
            <div className="w-full lg:h-fit h-full p-6 rounded-2xl border border-gray-300 flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="w-full justify-between items-center gap-14 inline-flex">
                  <div className="justify-start items-center gap-5 flex">
                    <img
                      className="rounded-lg object-cover"
                      src="https://pagedone.io/asset/uploads/1714994883.png"
                    />
                    <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                      <h5 className="text-gray-900 text-lg font-semibold leading-8">
                        Mia Thompson
                      </h5>
                      <h6 className="text-gray-600 text-sm font-normal leading-snug">
                        10 Mar, 2024
                      </h6>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-2 flex">
                    <span className="text-black text-xs font-medium leading-5 flex items-center justify-center">
                      3.3
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-base font-normal leading-relaxed">
                  Vel urna scelerisque condimentum id ultrices nec morbi.
                  Ullamcorper scelerisque sit feugiat ultrices mi lorem. Tellus
                  urna urna lorem id in at at. In placerat dui egestas rhoncus
                  orci. Accumsan malesuada amet est facilisi facilisi pretium.
                </p>
              </div>
            </div>
            <div className="w-full lg:h-fit h-full p-6 rounded-2xl border border-gray-300 flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="w-full justify-between items-center gap-14 inline-flex">
                  <div className="justify-start items-center gap-5 flex">
                    <img
                      className="rounded-lg object-cover"
                      src="https://pagedone.io/asset/uploads/1714994940.png"
                    />
                    <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                      <h5 className="text-gray-900 text-lg font-semibold leading-8">
                        Samuel Turner
                      </h5>
                      <h6 className="text-gray-600 text-sm font-normal leading-snug">
                        20 Mar, 2024
                      </h6>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-2 flex">
                    <span className="text-black text-xs font-medium leading-5 flex items-center justify-center">
                      2.0
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-base font-normal leading-relaxed">
                  Est luctus venenatis quis neque pellentesque pharetra a sit.
                  Auctor convallis tellus est diam blandit vel imperdiet varius.
                  Semper
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex lg:flex-col md:flex-row flex-col gap-8">
            <div className="w-full lg:h-fit h-full p-6 rounded-2xl border border-gray-300 flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="w-full justify-between items-center gap-14 inline-flex">
                  <div className="justify-start items-center gap-5 flex">
                    <img
                      className="rounded-lg object-cover"
                      src="https://pagedone.io/asset/uploads/1714994893.png"
                    />
                    <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                      <h5 className="text-gray-900 text-lg font-semibold leading-8">
                        Noah Anderson
                      </h5>
                      <h6 className="text-gray-600 text-sm font-normal leading-snug">
                        15 Mar, 2024
                      </h6>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-2 flex">
                    <span className="text-black text-xs font-medium leading-5 flex items-center justify-center">
                      4.1
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-base font-normal leading-relaxed">
                  Libero pharetra malesuada phasellus eu vehicula at est. Nibh
                  placerat viverra nec et egestas vitae blandit. Scelerisque
                  tortor a sem viverra netus nascetur purus. Magna ac tincidunt
                  ut cursus integer id fames morbi{" "}
                </p>
              </div>
            </div>
            <div className="w-full lg:h-fit h-full p-6 rounded-2xl border border-gray-300 flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="w-full justify-between items-center gap-14 inline-flex">
                  <div className="justify-start items-center gap-5 flex">
                    <img
                      className="rounded-lg object-cover"
                      src="https://pagedone.io/asset/uploads/1714994950.png"
                    />
                    <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                      <h5 className="text-gray-900 text-lg font-semibold leading-8">
                        Amelia Clark
                      </h5>
                      <h6 className="text-gray-600 text-sm font-normal leading-snug">
                        21 Mar, 2024
                      </h6>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-2 flex">
                    <span className="text-black text-xs font-medium leading-5 flex items-center justify-center">
                      2.4
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-base font-normal leading-relaxed">
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
  );
}
