export default function CardWithFullDetails() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope mb-8 text-3xl leading-10 font-semibold text-black max-lg:text-center">
          Product For You.
        </h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="javascript:;"
            className="card group mx-auto w-full max-w-[280px] sm:mr-0"
          >
            <div className="img-box relative aspect-square w-full max-w-[280px] overflow-hidden">
              <img
                src="https://pagedone.io/asset/uploads/1701158126.png"
                alt="Sneakers image"
                className="relative z-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.05]"
              />
              <p className="absolute top-0 right-0 rounded-bl-md bg-indigo-600 px-2.5 py-1 text-sm font-medium text-white">
                20% Off
              </p>
            </div>
            <div className="body w-full max-w-[280px] cursor-pointer pt-5">
              <h6 className="mb-2 text-lg leading-8 font-semibold text-black">
                Kicks Sneakers
              </h6>
              <p className="mb-2 text-sm leading-6 font-normal text-gray-500">
                Kicks Sneakers is a cutting-edge footwear brand synonymous
                style.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-sm leading-6 font-semibold text-black">
                    $110
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-500 line-through">
                    {" "}
                    $180
                  </p>
                </div>
                <p className="text-sm leading-6 font-semibold text-indigo-600">
                  45% Off
                </p>
              </div>
            </div>
          </a>
          <a
            href="javascript:;"
            className="card group mx-auto w-full max-w-[280px] sm:ml-0"
          >
            <div className="img-box relative aspect-square w-full max-w-[280px] overflow-hidden">
              <img
                src="https://pagedone.io/asset/uploads/1701158139.png"
                alt="Floral Heels image"
                className="relative z-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.05]"
              />
            </div>
            <div className="body w-full max-w-[280px] cursor-pointer pt-5">
              <h6 className="mb-2 text-lg leading-8 font-semibold text-black">
                Floral Heels
              </h6>
              <p className="mb-2 text-sm leading-6 font-normal text-gray-500">
                Floral Heels embodies elegance with a touch of nature, offering
                a stunning fusion
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-sm leading-6 font-semibold text-black">
                    $110
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-500 line-through">
                    {" "}
                    $180
                  </p>
                </div>
                <p className="text-sm leading-6 font-semibold text-indigo-600">
                  45% Off
                </p>
              </div>
            </div>
          </a>
          <a
            href="javascript:;"
            className="card group mx-auto w-full max-w-[280px] sm:mr-0"
          >
            <div className="img-box relative aspect-square w-full max-w-[280px] overflow-hidden">
              <img
                src="https://pagedone.io/asset/uploads/1701158153.png"
                alt="Diamond Heels image"
                className="relative z-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.05]"
              />
              <p className="absolute top-0 right-0 rounded-bl-md bg-indigo-600 px-2.5 py-1 text-sm font-medium text-white">
                20% Off
              </p>
            </div>
            <div className="body w-full max-w-[280px] cursor-pointer pt-5">
              <h6 className="mb-2 text-lg leading-8 font-semibold text-black">
                Diamond Heels
              </h6>
              <p className="mb-2 text-sm leading-6 font-normal text-gray-500">
                Diamond Heels epitomize luxury and glamour, transforming every
                step.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-sm leading-6 font-semibold text-black">
                    $110
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-500 line-through">
                    {" "}
                    $180
                  </p>
                </div>
                <p className="text-sm leading-6 font-semibold text-indigo-600">
                  45% Off
                </p>
              </div>
            </div>
          </a>
          <a
            href="javascript:;"
            className="card group mx-auto w-full max-w-[280px] sm:ml-0"
          >
            <div className="img-box relative aspect-square w-full max-w-[280px] overflow-hidden">
              <img
                src="https://pagedone.io/asset/uploads/1701158170.png"
                alt="Oxford Shoes image"
                className="relative z-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.05]"
              />
            </div>
            <div className="body w-full max-w-[280px] cursor-pointer pt-5">
              <h6 className="mb-2 text-lg leading-8 font-semibold text-black">
                Oxford Shoes
              </h6>
              <p className="mb-2 text-sm leading-6 font-normal text-gray-500">
                Oxford Shoes epitomize classic sophistication with a timeless
                appeal.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-sm leading-6 font-semibold text-black">
                    $110
                  </p>
                  <p className="text-sm leading-6 font-normal text-gray-500 line-through">
                    {" "}
                    $180
                  </p>
                </div>
                <p className="text-sm leading-6 font-semibold text-indigo-600">
                  45% Off
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
