export default function CategoryFilterOnRightSide() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8">
          <button className="flex items-center lg:justify-start justify-center gap-2 font-semibold text-sm leading-6 text-black">
            Quick Sort
          </button>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-sm:max-w-sm max-md:mx-auto">
            <button className="flex items-center justify-center h-11 rounded-full py-3 px-3 font-semibold text-sm text-white bg-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-600 hover:text-white hover:shadow-indigo-100">
              Search
            </button>
            <button className="flex items-center justify-center h-11 rounded-full py-3 px-3 font-semibold text-sm text-gray-900 border border-gray-300 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-600 hover:text-white hover:shadow-indigo-100">
              Popular
            </button>
            <button className="flex items-center justify-center h-11 rounded-full py-3 px-3 font-semibold text-sm text-gray-900 border border-gray-300 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-600 hover:text-white hover:shadow-indigo-100 whitespace-nowrap">
              Most New
            </button>
            <select
              id="Offer"
              className="h-11 border border-gray-300 text-gray-900 text-sm font-semibold rounded-full block w-full py-2.5 px-4 relative focus:outline-none bg-white appearance-none bg-[url('https://pagedone.io/asset/uploads/1695813759.png')] bg-no-repeat bg-right bg-origin-content"
            >
              <option selected>Price</option>
              <option value="option 1">option 1</option>
              <option value="option 2">option 2</option>
              <option value="option 3">option 3</option>
              <option value="option 4">option 4</option>
            </select>
          </ul>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-9 rounded-xl border border-gray-300" />
          <div className="col-span-12 max-md:row-start-1 md:col-span-3 md:pl-4 lg:pl-7 max-lg:max-w-sm max-md:mx-auto">
            <button className="flex items-center gap-3 font-semibold text-base leading-7 text-black mb-8">
              Filter by
            </button>
            <div className="w-full mb-7">
              <div
                className="accordion-group grid grid-cols-1"
                data-accordion="default-accordion"
              >
                <div
                  className="accordion pb-6 border-b border-gray-200"
                  id="category-heading-one"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                    aria-controls="category-collapse-one"
                  >
                    <h5 className="font-medium text-sm text-gray-900">
                      Shipping Option
                    </h5>
                  </button>
                  <div
                    id="category-collapse-one"
                    className="accordion-content w-full px-0 overflow-hidden pr-4 hidden"
                    aria-labelledby="category-heading-one"
                  >
                    <div className="box flex flex-col gap-2 mt-5">
                      <div className="flex items-center">
                        <input
                          id="checkbox-default-1"
                          type="checkbox"
                          className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                        />
                        <label
                          htmlFor="checkbox-default-1"
                          className="text-xs font-normal text-gray-600 leading-4 cursor-pointer"
                        >
                          option 1
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="checkbox-default-2"
                          type="checkbox"
                          className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                        />
                        <label
                          htmlFor="checkbox-default-2"
                          className="text-xs font-normal text-gray-600 leading-4 cursor-pointer"
                        >
                          option 2
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion py-6 border-b border-gray-200"
                  id="category-heading-two"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                    aria-controls="category-collapse-tow"
                  >
                    <h5 className="font-medium text-sm text-gray-900">
                      Availability
                    </h5>
                  </button>
                  <div
                    id="category-collapse-two"
                    className="accordion-content w-full px-0 overflow-hidden pr-4 hidden"
                    aria-labelledby="category-heading-tow"
                  >
                    <div className="box flex flex-col gap-2 mt-5">
                      <div className="flex items-center">
                        <input
                          id="checkbox-default-3"
                          type="checkbox"
                          className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                        />
                        <label
                          htmlFor="checkbox-default-3"
                          className="text-xs font-normal text-gray-600 leading-4 cursor-pointer"
                        >
                          option 1
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="checkbox-default-4"
                          type="checkbox"
                          className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                        />
                        <label
                          htmlFor="checkbox-default-4"
                          className="text-xs font-normal text-gray-600 leading-4 cursor-pointer"
                        >
                          option 2
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion py-6 border-b border-gray-200"
                  id="category-heading-three"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                    aria-controls="category-collapse-three"
                  >
                    <h5 className="font-medium text-sm text-gray-900">Types</h5>
                  </button>
                  <div
                    id="category-collapse-three"
                    className="accordion-content w-full px-0 overflow-hidden pr-4 hidden"
                    aria-labelledby="category-heading-three"
                  >
                    <div className="box flex flex-col gap-2 mt-5">
                      <div className="flex items-center">
                        <input
                          id="checkbox-default"
                          type="checkbox"
                          className="w-4 h-4 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                        />
                        <label
                          htmlFor="checkbox-default"
                          className="text-xs font-normal text-gray-600 leading-4 cursor-pointer"
                        >
                          option1
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="checkbox-default"
                          type="checkbox"
                          className="w-4 h-4 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                        />
                        <label
                          htmlFor="checkbox-default"
                          className="text-xs font-normal text-gray-600 leading-4 cursor-pointer"
                        >
                          option2
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-medium text-sm leading-6 text-black mb-3">
              Discount
            </p>
            <div className="box flex flex-col gap-2 pb-6">
              <div className="flex items-center">
                <input
                  id="checkbox-discount-1"
                  type="checkbox"
                  className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                />
                <label
                  htmlFor="checkbox-discount-1"
                  className="text-xs font-normal text-gray-600 leading-4 cursor-pointer"
                >
                  20% or more
                </label>
              </div>
              <div className="flex items-center group">
                <input
                  id="checkbox-discount-2"
                  type="checkbox"
                  className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                />
                <label
                  htmlFor="checkbox-discount-2"
                  className=" font-normal text-xs leading-5 text-gray-600 transition-all duration-500 group-hover:text-gray-900"
                >
                  30% or more
                </label>
              </div>
              <div className="flex items-center group">
                <input
                  id="checkbox-discount-3"
                  type="checkbox"
                  className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                />
                <label
                  htmlFor="checkbox-discount-3"
                  className=" font-normal text-xs leading-5 text-gray-600 transition-all duration-500 group-hover:text-gray-900"
                >
                  50% or more
                </label>
              </div>
            </div>

            <p className="font-medium text-sm leading-6 pt-6 text-black mb-3">
              Category
            </p>
            <ul className="box flex flex-col gap-2 pb-6 mb-6 border-b border-gray-200">
              <li className="flex justify-between items-center">
                <div className="inline-flex">
                  <input
                    id="checkbox-grocery"
                    type="checkbox"
                    className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                  />
                  <label
                    htmlFor="checkbox-grocery"
                    className="font-normal text-xs leading-5 text-gray-600 "
                  >
                    <span>Grocery</span>
                  </label>
                </div>
                <span className="font-normal text-xs leading-5 text-gray-600">
                  42+
                </span>
              </li>
              <li className="flex justify-between items-center">
                <div className="inline-flex">
                  <input
                    id="checkbox-phone"
                    type="checkbox"
                    className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                  />
                  <label
                    htmlFor="checkbox-phone"
                    className="font-normal text-xs leading-5 text-gray-600 "
                  >
                    <span>Phone</span>
                  </label>
                </div>
                <span className="font-normal text-xs leading-5 text-gray-600">
                  32+
                </span>
              </li>
              <li className="flex justify-between items-center">
                <div className="inline-flex">
                  <input
                    id="checkbox-electronic"
                    type="checkbox"
                    className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                  />
                  <label
                    htmlFor="checkbox-electronic"
                    className="font-normal text-xs leading-5 text-gray-600 "
                  >
                    <span>Electronic</span>
                  </label>
                </div>
                <span className="font-normal text-xs leading-5 text-gray-600">
                  8+
                </span>
              </li>
              <li className="flex justify-between items-center">
                <div className="inline-flex">
                  <input
                    id="checkbox-tv"
                    type="checkbox"
                    className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                  />
                  <label
                    htmlFor="checkbox-tv"
                    className="font-normal text-xs leading-5 text-gray-600 "
                  >
                    <span>T.V. &amp; Mobile</span>
                  </label>
                </div>
                <span className="font-normal text-xs leading-5 text-gray-600">
                  11+
                </span>
              </li>
            </ul>
            <div className="w-full mb-7">
              <div
                className="accordion-group"
                data-accordion="default1-accordion"
              >
                <div className="accordion pb-6 " id="category-heading-last">
                  <button
                    className="accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                    aria-controls="category-collapse-last"
                  >
                    <h5 className="font-medium text-sm ">Year</h5>
                  </button>
                  <div
                    id="category-collapse-last"
                    className="accordion-content w-full px-0 overflow-hidden pr-4 hidden"
                    aria-labelledby="category-heading-last"
                  >
                    <div className="box flex flex-col gap-2 mt-5">
                      <div className="flex items-center">
                        <input
                          id="checkbox-default"
                          type="checkbox"
                          className="w-4 h-4 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                        />
                        <label
                          htmlFor="checkbox-default"
                          className="text-xs font-normal text-gray-600 leading-4 cursor-pointer"
                        >
                          option1
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="checkbox-default"
                          type="checkbox"
                          className="w-4 h-4 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                        />
                        <label
                          htmlFor="checkbox-default"
                          className="text-xs font-normal text-gray-600 leading-4 cursor-pointer"
                        >
                          option2
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
