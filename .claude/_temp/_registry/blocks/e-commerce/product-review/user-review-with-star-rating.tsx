export default function UserReviewWithStarRating() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <div className="flex flex-col lg:gap-[72px] md:gap-14 gap-9">
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="lg:col-span-4 col-span-12 w-full flex flex-col gap-3.5 lg:pr-[30px] md:pb-0 pb-[30px] lg:border-r md:border-b-0 border-b border-gray-200">
              <div className="flex items-center w-full">
                <div className="w-9 items-center flex gap-0.5 py-[1px]">
                  <p className="font-medium text-lg text-black">5</p>
                  <div className="w-5"></div>
                </div>
                <p className="h-2.5 w-full rounded-lg bg-gray-50 ml-5 mr-2.5">
                  <span className="h-full xl:w-[235px] lg:w-[150px] w-[235px] rounded-[30px] bg-amber-400 flex" />
                </p>
                <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                  90%
                </p>
              </div>
              <div className="flex items-center w-full">
                <div className="w-9 items-center flex gap-0.5 py-[1px]">
                  <p className="font-medium text-lg text-black">4</p>
                  <div className="w-5"></div>
                </div>
                <p className="h-2.5 w-full rounded-lg bg-gray-50 ml-5 mr-2.5">
                  <span className="h-full w-[157px] rounded-[30px] bg-amber-400 flex" />
                </p>
                <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                  60%
                </p>
              </div>
              <div className="flex items-center w-full">
                <div className="w-9 items-center flex gap-0.5 py-[1px]">
                  <p className="font-medium text-lg text-black">3</p>
                  <div className="w-5"></div>
                </div>
                <p className="h-2.5 w-full rounded-lg bg-gray-50 ml-5 mr-2.5">
                  <span className="h-full w-[104px] rounded-[30px] bg-amber-400 flex" />
                </p>
                <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                  40%
                </p>
              </div>
              <div className="flex items-center w-full">
                <div className="w-9 items-center flex gap-0.5 py-[1px]">
                  <p className="font-medium text-lg text-black">2</p>
                  <div className="w-5"></div>
                </div>
                <p className="h-2.5 w-full rounded-lg bg-gray-50 ml-5 mr-2.5">
                  <span className="h-full w-[78px] rounded-[30px] bg-amber-400 flex" />
                </p>
                <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                  30%
                </p>
              </div>
              <div className="flex items-center w-full">
                <div className="w-9 items-center flex gap-0.5 py-[1px]">
                  <p className="font-medium text-lg text-black">1</p>
                  <div className="w-5"></div>
                </div>
                <p className="h-2.5 w-full rounded-lg bg-gray-50 ml-5 mr-2.5">
                  <span className="h-full w-[26px] rounded-[30px] bg-amber-400 flex" />
                </p>
                <p className="font-medium text-sm py-[1px] text-gray-800 mr-1.5">
                  10%
                </p>
              </div>
            </div>
            <div className="lg:col-span-8 col-span-12 w-full md:flex-row flex-col flex">
              <div className="w-full py-8 pl-8 rounded-2xl flex-col justify-start items-center gap-4 pr-[62px] inline-flex md:border-r md:border-b-0 border-b border-gray-200">
                <h2 className="text-center text-gray-900 text-5xl font-bold font-manrope leading-normal">
                  4.0
                </h2>
                <div className="flex-col justify-start items-center gap-1.5 flex">
                  <div className="justify-center items-start gap-3 inline-flex">
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                  </div>
                  <h5 className="text-center text-gray-400 text-lg font-normal leading-8">
                    46 Ratings
                  </h5>
                </div>
              </div>
              <div className="w-full p-8 rounded-2xl flex-col justify-start items-center gap-4 inline-flex">
                <h2 className="text-center text-gray-900 text-5xl font-bold font-manrope leading-normal">
                  4.8
                </h2>
                <div className="flex-col justify-start items-center gap-1.5 flex">
                  <div className="justify-center items-start gap-3 inline-flex">
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                  </div>
                  <h5 className="text-center text-gray-400 text-lg font-normal leading-8">
                    Last Month
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            <div className="p-6 rounded-2xl border border-gray-300 flex-col justify-start items-center gap-6 inline-flex">
              <img
                src="https://pagedone.io/asset/uploads/1714996947.png"
                alt="Avtar image"
                className="rounded-full object-cover"
              />
              <div className="justify-start items-start gap-2 inline-flex">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
              <p className="text-center text-gray-600 text-base font-normal leading-relaxed">
                Sed facilisi tortor mauris in vestibulum turpis ac. Senectus dui
                ultrices sed nunc odio mattis tempus. Egestas sed id euismod
                sit.{" "}
              </p>
              <h5 className="text-center text-gray-800 text-lg font-medium leading-8">
                Metlinda Parker
              </h5>
            </div>
            <div className="p-6 rounded-2xl border border-gray-300 flex-col justify-start items-center gap-6 inline-flex">
              <img
                src="https://pagedone.io/asset/uploads/1715058838.png"
                alt="Avtar image"
                className="rounded-full object-cover"
              />
              <div className="justify-start items-start gap-2 inline-flex">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
              <p className="text-center text-gray-600 text-base font-normal leading-relaxed">
                Mattis turpis sed nisi ullamcorper pretium. Varius elementum
                adipiscing suscipit est porttitor placerat lorem adipiscing
                urna.
              </p>
              <h5 className="text-center text-gray-800 text-lg font-medium leading-8">
                Matthew Bennett
              </h5>
            </div>
            <div className="p-6 rounded-2xl border border-gray-300 flex-col justify-start items-center gap-6 inline-flex">
              <img
                src="https://pagedone.io/asset/uploads/1715058850.png"
                alt="Avtar image"
                className="rounded-full object-cover"
              />
              <div className="justify-start items-start gap-2 inline-flex">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
              <p className="text-center text-gray-600 text-base font-normal leading-relaxed">
                Nisl purus diam morbi rhoncus pellentesque condimentum in non.
                Velit at nibh eget tempor felis dignissim sit.
              </p>
              <h5 className="text-center text-gray-800 text-lg font-medium leading-8">
                Sophia Rodriguez
              </h5>
            </div>
            <div className="p-6 rounded-2xl border border-gray-300 flex-col justify-start items-center gap-6 inline-flex">
              <img
                src="https://pagedone.io/asset/uploads/1715058876.png"
                alt="Avtar image"
                className="rounded-full object-cover"
              />
              <div className="justify-start items-start gap-2 inline-flex">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
              <p className="text-center text-gray-600 text-base font-normal leading-relaxed">
                Convallis viverra viverra quisque ornare egestas sit nec. Etiam
                volutpat convallis a volutpat facilisis venenatis ornare
                aliquam.
              </p>
              <h5 className="text-center text-gray-800 text-lg font-medium leading-8">
                Ava Mitchell
              </h5>
            </div>
            <div className="p-6 rounded-2xl border border-gray-300 flex-col justify-start items-center gap-6 inline-flex">
              <img
                src="https://pagedone.io/asset/uploads/1715058886.png"
                alt="Avtar image"
                className="rounded-full object-cover"
              />
              <div className="justify-start items-start gap-2 inline-flex">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
              <p className="text-center text-gray-600 text-base font-normal leading-relaxed">
                Maecenas mauris eget venenatis consectetur posuere auctor nulla
                ullamcorper feugiat.
              </p>
              <h5 className="text-center text-gray-800 text-lg font-medium leading-8">
                Christopher Mitchell
              </h5>
            </div>
            <div className="p-6 rounded-2xl border border-gray-300 flex-col justify-start items-center gap-6 inline-flex">
              <img
                src="https://pagedone.io/asset/uploads/1715058904.png"
                alt="Avtar image"
                className="rounded-full object-cover"
              />
              <div className="justify-start items-start gap-2 inline-flex">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
              <p className="text-center text-gray-600 text-base font-normal leading-relaxed">
                Vestibulum commodo velit justo consequat nec. Rhoncus id amet
                hendrerit vulputate vestibulum id.
              </p>
              <h5 className="text-center text-gray-800 text-lg font-medium leading-8">
                Daniel Harrison
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
