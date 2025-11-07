export default function StaticProductListWithGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope font-bold text-4xl text-black mb-8 max-lg:text-center">
          Product list
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <a
            href="javascript:;"
            className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500"
          >
            <div>
              <img
                src="https://pagedone.io/asset/uploads/1700726158.png"
                alt="face cream image"
                className="w-full aspect-square rounded-2xl object-cover"
              />
            </div>
            <div className="mt-5">
              <div className="flex items-center justify-between">
                <h6 className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">
                  Face cream
                </h6>
                <h6 className="font-semibold text-xl leading-8 text-indigo-600">
                  $100
                </h6>
              </div>
              <p className="mt-2 font-normal text-sm leading-6 text-gray-500">
                Orange &amp; Aloe Vera
              </p>
            </div>
          </a>
          <a
            href="javascript:;"
            className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500"
          >
            <div>
              <img
                src="https://pagedone.io/asset/uploads/1700726174.png"
                alt="plastic bottle image"
                className="w-full aspect-square rounded-2xl object-cover"
              />
            </div>
            <div className="mt-5">
              <div className="flex items-center justify-between">
                <h6 className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">
                  Plstic bottle
                </h6>
                <h6 className="font-semibold text-xl leading-8 text-indigo-600">
                  $40
                </h6>
              </div>
              <p className="mt-2 font-normal text-sm leading-6 text-gray-500">
                Black color
              </p>
            </div>
          </a>
          <a
            href="javascript:;"
            className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500"
          >
            <div>
              <img
                src="https://pagedone.io/asset/uploads/1700726191.png"
                alt="cream image"
                className="w-full aspect-square rounded-2xl object-cover"
              />
            </div>
            <div className="mt-5">
              <div className="flex items-center justify-between">
                <h6 className="font-semibold text-xl leading-8 text-black  transition-all duration-500 group-hover:text-indigo-600">
                  Men cream
                </h6>
                <h6 className="font-semibold text-xl leading-8 text-indigo-600">
                  $100
                </h6>
              </div>
              <p className="mt-2 font-normal text-sm leading-6 text-gray-500">
                Aloe Vera and Neem
              </p>
            </div>
          </a>
          <a
            href="javascript:;"
            className="mx-auto sm:ml-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500"
          >
            <div>
              <img
                src="https://pagedone.io/asset/uploads/1700726207.png"
                alt="perfume bottle image"
                className="w-full aspect-square rounded-2xl object-cover"
              />
            </div>
            <div className="mt-5">
              <div className="flex items-center justify-between">
                <h6 className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">
                  Cold Perfume
                </h6>
                <h6 className="font-semibold text-xl leading-8 text-indigo-600">
                  $100
                </h6>
              </div>
              <p className="mt-2 font-normal text-sm leading-6 text-gray-500">
                White perfume
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
