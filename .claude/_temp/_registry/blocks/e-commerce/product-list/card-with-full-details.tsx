export default function CardWithFullDetails() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope font-semibold text-3xl leading-10 text-black mb-8 max-lg:text-center">
          Product For You.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
          <a
            href="javascript:;"
            className="card mx-auto w-full max-w-[280px] group sm:mr-0"
          >
            <div className="img-box w-full relative max-w-[280px] aspect-square overflow-hidden">
              <img
                src="https://pagedone.io/asset/uploads/1701158126.png"
                alt="Sneakers image"
                className="w-full h-full relative z-0 transition-all duration-700 group-hover:scale-[1.05] object-cover"
              />
              <p className="absolute top-0 right-0 rounded-bl-md py-1 px-2.5 bg-indigo-600 text-white font-medium text-sm ">
                20% Off
              </p>
            </div>
            <div className="body w-full max-w-[280px] pt-5 cursor-pointer">
              <h6 className="font-semibold text-lg leading-8 text-black mb-2">
                Kicks Sneakers
              </h6>
              <p className="font-normal text-sm leading-6 text-gray-500 mb-2">
                Kicks Sneakers is a cutting-edge footwear brand synonymous
                style.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm leading-6 text-black">
                    $110
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-500 line-through">
                    {" "}
                    $180
                  </p>
                </div>
                <p className="font-semibold text-sm leading-6 text-indigo-600">
                  45% Off
                </p>
              </div>
            </div>
          </a>
          <a
            href="javascript:;"
            className="card mx-auto w-full max-w-[280px] group sm:ml-0"
          >
            <div className="img-box w-full relative max-w-[280px] aspect-square overflow-hidden">
              <img
                src="https://pagedone.io/asset/uploads/1701158139.png"
                alt="Floral Heels image"
                className="w-full h-full relative z-0 transition-all duration-700 group-hover:scale-[1.05] object-cover"
              />
            </div>
            <div className="body w-full max-w-[280px] pt-5  cursor-pointer">
              <h6 className="font-semibold text-lg leading-8 text-black mb-2">
                Floral Heels
              </h6>
              <p className="font-normal text-sm leading-6 text-gray-500 mb-2">
                Floral Heels embodies elegance with a touch of nature, offering
                a stunning fusion
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm leading-6 text-black">
                    $110
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-500 line-through">
                    {" "}
                    $180
                  </p>
                </div>
                <p className="font-semibold text-sm leading-6 text-indigo-600">
                  45% Off
                </p>
              </div>
            </div>
          </a>
          <a
            href="javascript:;"
            className="card mx-auto w-full max-w-[280px] group sm:mr-0"
          >
            <div className="img-box w-full relative max-w-[280px] aspect-square overflow-hidden">
              <img
                src="https://pagedone.io/asset/uploads/1701158153.png"
                alt="Diamond Heels image"
                className="w-full h-full relative z-0 transition-all duration-700 group-hover:scale-[1.05] object-cover"
              />
              <p className="absolute top-0 right-0 rounded-bl-md py-1 px-2.5 bg-indigo-600 text-white font-medium text-sm ">
                20% Off
              </p>
            </div>
            <div className="body w-full max-w-[280px] pt-5 cursor-pointer">
              <h6 className="font-semibold text-lg leading-8 text-black mb-2">
                Diamond Heels
              </h6>
              <p className="font-normal text-sm leading-6 text-gray-500 mb-2">
                Diamond Heels epitomize luxury and glamour, transforming every
                step.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm leading-6 text-black">
                    $110
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-500 line-through">
                    {" "}
                    $180
                  </p>
                </div>
                <p className="font-semibold text-sm leading-6 text-indigo-600">
                  45% Off
                </p>
              </div>
            </div>
          </a>
          <a
            href="javascript:;"
            className="card mx-auto w-full max-w-[280px] group sm:ml-0"
          >
            <div className="img-box w-full relative max-w-[280px] aspect-square overflow-hidden">
              <img
                src="https://pagedone.io/asset/uploads/1701158170.png"
                alt="Oxford Shoes image"
                className="w-full h-full relative z-0 transition-all duration-700 group-hover:scale-[1.05] object-cover"
              />
            </div>
            <div className="body w-full max-w-[280px] pt-5 cursor-pointer">
              <h6 className="font-semibold text-lg leading-8 text-black mb-2">
                Oxford Shoes
              </h6>
              <p className="font-normal text-sm leading-6 text-gray-500 mb-2">
                Oxford Shoes epitomize classic sophistication with a timeless
                appeal.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm leading-6 text-black">
                    $110
                  </p>
                  <p className="font-normal text-sm leading-6 text-gray-500 line-through">
                    {" "}
                    $180
                  </p>
                </div>
                <p className="font-semibold text-sm leading-6 text-indigo-600">
                  45% Off
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
