export default function UserReviewWithStarRating() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-6">
        <div className="flex flex-col gap-9 md:gap-14 lg:gap-[72px]">
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="col-span-12 flex w-full flex-col gap-3.5 border-b border-gray-200 pb-[30px] md:border-b-0 md:pb-0 lg:col-span-4 lg:border-r lg:pr-[30px]">
              <div className="flex w-full items-center">
                <div className="flex w-9 items-center gap-0.5 py-[1px]">
                  <p className="text-lg font-medium text-black">5</p>
                  <div className="w-5"></div>
                </div>
                <p className="mr-2.5 ml-5 h-2.5 w-full rounded-lg bg-gray-50">
                  <span className="flex h-full w-[235px] rounded-[30px] bg-amber-400 lg:w-[150px] xl:w-[235px]" />
                </p>
                <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                  90%
                </p>
              </div>
              <div className="flex w-full items-center">
                <div className="flex w-9 items-center gap-0.5 py-[1px]">
                  <p className="text-lg font-medium text-black">4</p>
                  <div className="w-5"></div>
                </div>
                <p className="mr-2.5 ml-5 h-2.5 w-full rounded-lg bg-gray-50">
                  <span className="flex h-full w-[157px] rounded-[30px] bg-amber-400" />
                </p>
                <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                  60%
                </p>
              </div>
              <div className="flex w-full items-center">
                <div className="flex w-9 items-center gap-0.5 py-[1px]">
                  <p className="text-lg font-medium text-black">3</p>
                  <div className="w-5"></div>
                </div>
                <p className="mr-2.5 ml-5 h-2.5 w-full rounded-lg bg-gray-50">
                  <span className="flex h-full w-[104px] rounded-[30px] bg-amber-400" />
                </p>
                <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                  40%
                </p>
              </div>
              <div className="flex w-full items-center">
                <div className="flex w-9 items-center gap-0.5 py-[1px]">
                  <p className="text-lg font-medium text-black">2</p>
                  <div className="w-5"></div>
                </div>
                <p className="mr-2.5 ml-5 h-2.5 w-full rounded-lg bg-gray-50">
                  <span className="flex h-full w-[78px] rounded-[30px] bg-amber-400" />
                </p>
                <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                  30%
                </p>
              </div>
              <div className="flex w-full items-center">
                <div className="flex w-9 items-center gap-0.5 py-[1px]">
                  <p className="text-lg font-medium text-black">1</p>
                  <div className="w-5"></div>
                </div>
                <p className="mr-2.5 ml-5 h-2.5 w-full rounded-lg bg-gray-50">
                  <span className="flex h-full w-[26px] rounded-[30px] bg-amber-400" />
                </p>
                <p className="mr-1.5 py-[1px] text-sm font-medium text-gray-800">
                  10%
                </p>
              </div>
            </div>
            <div className="col-span-12 flex w-full flex-col md:flex-row lg:col-span-8">
              <div className="inline-flex w-full flex-col items-center justify-start gap-4 rounded-2xl border-b border-gray-200 py-8 pr-[62px] pl-8 md:border-r md:border-b-0">
                <h2 className="font-manrope text-center text-5xl leading-normal font-bold text-gray-900">
                  4.0
                </h2>
                <div className="flex flex-col items-center justify-start gap-1.5">
                  <div className="inline-flex items-start justify-center gap-3">
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                  </div>
                  <h5 className="text-center text-lg leading-8 font-normal text-gray-400">
                    46 Ratings
                  </h5>
                </div>
              </div>
              <div className="inline-flex w-full flex-col items-center justify-start gap-4 rounded-2xl p-8">
                <h2 className="font-manrope text-center text-5xl leading-normal font-bold text-gray-900">
                  4.8
                </h2>
                <div className="flex flex-col items-center justify-start gap-1.5">
                  <div className="inline-flex items-start justify-center gap-3">
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                  </div>
                  <h5 className="text-center text-lg leading-8 font-normal text-gray-400">
                    Last Month
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="inline-flex flex-col items-center justify-start gap-6 rounded-2xl border border-gray-300 p-6">
              <img
                src="https://pagedone.io/asset/uploads/1714996947.png"
                alt="Avtar image"
                className="rounded-full object-cover"
              />
              <div className="inline-flex items-start justify-start gap-2">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
              <p className="text-center text-base leading-relaxed font-normal text-gray-600">
                Sed facilisi tortor mauris in vestibulum turpis ac. Senectus dui
                ultrices sed nunc odio mattis tempus. Egestas sed id euismod
                sit.{" "}
              </p>
              <h5 className="text-center text-lg leading-8 font-medium text-gray-800">
                Metlinda Parker
              </h5>
            </div>
            <div className="inline-flex flex-col items-center justify-start gap-6 rounded-2xl border border-gray-300 p-6">
              <img
                src="https://pagedone.io/asset/uploads/1715058838.png"
                alt="Avtar image"
                className="rounded-full object-cover"
              />
              <div className="inline-flex items-start justify-start gap-2">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
              <p className="text-center text-base leading-relaxed font-normal text-gray-600">
                Mattis turpis sed nisi ullamcorper pretium. Varius elementum
                adipiscing suscipit est porttitor placerat lorem adipiscing
                urna.
              </p>
              <h5 className="text-center text-lg leading-8 font-medium text-gray-800">
                Matthew Bennett
              </h5>
            </div>
            <div className="inline-flex flex-col items-center justify-start gap-6 rounded-2xl border border-gray-300 p-6">
              <img
                src="https://pagedone.io/asset/uploads/1715058850.png"
                alt="Avtar image"
                className="rounded-full object-cover"
              />
              <div className="inline-flex items-start justify-start gap-2">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
              <p className="text-center text-base leading-relaxed font-normal text-gray-600">
                Nisl purus diam morbi rhoncus pellentesque condimentum in non.
                Velit at nibh eget tempor felis dignissim sit.
              </p>
              <h5 className="text-center text-lg leading-8 font-medium text-gray-800">
                Sophia Rodriguez
              </h5>
            </div>
            <div className="inline-flex flex-col items-center justify-start gap-6 rounded-2xl border border-gray-300 p-6">
              <img
                src="https://pagedone.io/asset/uploads/1715058876.png"
                alt="Avtar image"
                className="rounded-full object-cover"
              />
              <div className="inline-flex items-start justify-start gap-2">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
              <p className="text-center text-base leading-relaxed font-normal text-gray-600">
                Convallis viverra viverra quisque ornare egestas sit nec. Etiam
                volutpat convallis a volutpat facilisis venenatis ornare
                aliquam.
              </p>
              <h5 className="text-center text-lg leading-8 font-medium text-gray-800">
                Ava Mitchell
              </h5>
            </div>
            <div className="inline-flex flex-col items-center justify-start gap-6 rounded-2xl border border-gray-300 p-6">
              <img
                src="https://pagedone.io/asset/uploads/1715058886.png"
                alt="Avtar image"
                className="rounded-full object-cover"
              />
              <div className="inline-flex items-start justify-start gap-2">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
              <p className="text-center text-base leading-relaxed font-normal text-gray-600">
                Maecenas mauris eget venenatis consectetur posuere auctor nulla
                ullamcorper feugiat.
              </p>
              <h5 className="text-center text-lg leading-8 font-medium text-gray-800">
                Christopher Mitchell
              </h5>
            </div>
            <div className="inline-flex flex-col items-center justify-start gap-6 rounded-2xl border border-gray-300 p-6">
              <img
                src="https://pagedone.io/asset/uploads/1715058904.png"
                alt="Avtar image"
                className="rounded-full object-cover"
              />
              <div className="inline-flex items-start justify-start gap-2">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
              <p className="text-center text-base leading-relaxed font-normal text-gray-600">
                Vestibulum commodo velit justo consequat nec. Rhoncus id amet
                hendrerit vulputate vestibulum id.
              </p>
              <h5 className="text-center text-lg leading-8 font-medium text-gray-800">
                Daniel Harrison
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
