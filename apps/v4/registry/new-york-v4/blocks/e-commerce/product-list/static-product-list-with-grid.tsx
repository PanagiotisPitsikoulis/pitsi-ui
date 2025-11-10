export default function StaticProductListWithGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope mb-8 text-4xl font-bold text-black max-lg:text-center">
          Product list
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="javascript:;"
            className="group mx-auto cursor-pointer bg-white transition-all duration-500 sm:mr-0 lg:mx-auto"
          >
            <div>
              <img
                src="https://pagedone.io/asset/uploads/1700726158.png"
                alt="face cream image"
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </div>
            <div className="mt-5">
              <div className="flex items-center justify-between">
                <h6 className="text-xl leading-8 font-semibold text-black transition-all duration-500 group-hover:text-indigo-600">
                  Face cream
                </h6>
                <h6 className="text-xl leading-8 font-semibold text-indigo-600">
                  $100
                </h6>
              </div>
              <p className="mt-2 text-sm leading-6 font-normal text-gray-500">
                Orange &amp; Aloe Vera
              </p>
            </div>
          </a>
          <a
            href="javascript:;"
            className="group mx-auto cursor-pointer bg-white transition-all duration-500 sm:ml-0 lg:mx-auto"
          >
            <div>
              <img
                src="https://pagedone.io/asset/uploads/1700726174.png"
                alt="plastic bottle image"
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </div>
            <div className="mt-5">
              <div className="flex items-center justify-between">
                <h6 className="text-xl leading-8 font-semibold text-black transition-all duration-500 group-hover:text-indigo-600">
                  Plstic bottle
                </h6>
                <h6 className="text-xl leading-8 font-semibold text-indigo-600">
                  $40
                </h6>
              </div>
              <p className="mt-2 text-sm leading-6 font-normal text-gray-500">
                Black color
              </p>
            </div>
          </a>
          <a
            href="javascript:;"
            className="group mx-auto cursor-pointer bg-white transition-all duration-500 sm:mr-0 lg:mx-auto"
          >
            <div>
              <img
                src="https://pagedone.io/asset/uploads/1700726191.png"
                alt="cream image"
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </div>
            <div className="mt-5">
              <div className="flex items-center justify-between">
                <h6 className="text-xl leading-8 font-semibold text-black transition-all duration-500 group-hover:text-indigo-600">
                  Men cream
                </h6>
                <h6 className="text-xl leading-8 font-semibold text-indigo-600">
                  $100
                </h6>
              </div>
              <p className="mt-2 text-sm leading-6 font-normal text-gray-500">
                Aloe Vera and Neem
              </p>
            </div>
          </a>
          <a
            href="javascript:;"
            className="group mx-auto cursor-pointer bg-white transition-all duration-500 sm:ml-0 lg:mx-auto"
          >
            <div>
              <img
                src="https://pagedone.io/asset/uploads/1700726207.png"
                alt="perfume bottle image"
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </div>
            <div className="mt-5">
              <div className="flex items-center justify-between">
                <h6 className="text-xl leading-8 font-semibold text-black transition-all duration-500 group-hover:text-indigo-600">
                  Cold Perfume
                </h6>
                <h6 className="text-xl leading-8 font-semibold text-indigo-600">
                  $100
                </h6>
              </div>
              <p className="mt-2 text-sm leading-6 font-normal text-gray-500">
                White perfume
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
