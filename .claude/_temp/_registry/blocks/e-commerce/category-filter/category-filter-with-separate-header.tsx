export default function CategoryFilterWithSeparateHeader() {
  return (
    <section className="pb-24 bg-gray-100">
      <div className="w-full">
        <div className="w-full bg-white mx-auto pt-16">
          <div className=" max-w-4xl mx-auto">
            <h2 className="font-manrope font-bold text-3xl leading-10 text-black text-center">
              Pagedone Products
            </h2>
            <div className="flex flex-col md:flex-row md:items-center justify-center gap-8 py-9 max-md:px-4">
              <button className="flex items-center gap-2 font-semibold text-sm leading-6 text-black whitespace-nowrap">
                Quick Sort{" "}
              </button>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-sm:max-w-sm max-sm:mx-auto">
                <button className="flex items-center justify-center h-11 rounded-lg px-7 w-full sm:max-w-[126px] py-3 font-semibold text-sm shadow-sm shadow-transparent text-white bg-indigo-600 border border-indigo-600 transition-all duration-500 hover:bg-indigo-600 hover:text-white whitespace-nowrap hover:shadow-indigo-200">
                  Search
                </button>
                <button className="flex items-center justify-center h-11 rounded-lg px-7 w-full sm:max-w-[126px] py-3 font-semibold text-sm shadow-sm shadow-transparent text-gray-900 border border-gray-300  transition-all duration-500 hover:bg-indigo-600 hover:text-white whitespace-nowrap hover:shadow-indigo-200">
                  Popular
                </button>
                <button className="flex items-center justify-center h-11 rounded-lg px-7 w-full sm:max-w-[126px] py-3 font-semibold text-sm shadow-sm shadow-transparent text-gray-900 border border-gray-300  transition-all duration-500 hover:bg-indigo-600 hover:text-white whitespace-nowrap hover:shadow-indigo-200">
                  Most New
                </button>
                <select
                  id="Offer"
                  className="h-11 border border-gray-300 text-gray-900 text-sm font-semibold rounded-lg block w-full py-2.5 px-4 relative focus:outline-none bg-white appearance-none bg-[url('https://pagedone.io/asset/uploads/1695813759.png')] bg-no-repeat bg-right bg-origin-content"
                >
                  <option selected>Price</option>
                  <option value="option 1">option 1</option>
                  <option value="option 2">option 2</option>
                  <option value="option 3">option 3</option>
                  <option value="option 4">option 4</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-12 md:gap-8 mt-8">
            <div className="col-span-12 md:col-span-4 xl:col-span-3 bg-white py-6 rounded-xl max-md:w-full max-md:max-w-sm max-md:mx-auto">
              <h6 className="font-semibold text-lg leading-8 text-black px-6">
                Filter
              </h6>

              <h6 className="font-semibold text-base leading-7 text-black px-6 mb-5">
                Category
              </h6>
              <div className="w-full mb-7 px-7">
                <div
                  className="accordion-group grid grid-cols-1"
                  data-accordion="default-accordion"
                >
                  <div className="accordion mb-5" id="category-heading-one">
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                      aria-controls="category-collapse-one"
                    >
                      <h5 className="font-medium text-sm "> Availability </h5>
                    </button>
                  </div>
                  <div className="accordion mb-5" id="category-heading-two">
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                      aria-controls="category-collapse-tow"
                    >
                      <h5 className="font-medium text-sm "> Occasion </h5>
                    </button>
                  </div>
                  <div className="accordion mb-5" id="category-heading-three">
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                      aria-controls="category-collapse-three"
                    >
                      <h5 className="font-medium text-sm "> Discount </h5>
                    </button>
                    <div
                      id="category-collapse-three"
                      className="accordion-content w-full px-0 overflow-hidden pr-4 "
                      aria-labelledby="category-heading-three"
                    >
                      <div className="box flex flex-col gap-2 mt-3">
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
                            20% or more
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
                            30% or more
                          </label>
                        </div>
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
                            50% or more
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box px-6">
                <h6 className="font-semibold text-base leading-7 text-black mb-6 whitespace-nowrap">
                  Size
                </h6>
                <div className="flex items-center justify-center gap-2 px-2.5">
                  <label
                    htmlFor="size"
                    className="font-medium text-sm leading-6 text-gray-800 whitespace-nowrap w-full"
                  >
                    Select Size
                  </label>
                  <div className="relative w-full">
                    <select
                      id="FROM"
                      className="h-9 border border-gray-300 text-gray-900 text-xs font-medium rounded-lg block w-full  px-4 appearance-none relative focus:outline-none bg-white"
                    >
                      <option selected>Max</option>
                      <option value="option 1">option 1</option>
                      <option value="option 2">option 2</option>
                      <option value="option 3">option 3</option>
                      <option value="option 4">option 4</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="box px-6">
                <h6 className="font-semibold text-base leading-7 text-black mb-6">
                  Prize
                </h6>
                <div className="flex items-center mb-5 gap-1">
                  <div className="relative w-full">
                    <select
                      id="FROM"
                      className="h-9 border border-gray-300 text-gray-900 text-xs font-medium rounded-lg block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                    >
                      <option selected>Min</option>
                      <option value="option 1">option 1</option>
                      <option value="option 2">option 2</option>
                      <option value="option 3">option 3</option>
                      <option value="option 4">option 4</option>
                    </select>
                  </div>
                  <p className="px-1 font-normal text-sm leading-6 text-gray-600">
                    to
                  </p>
                  <div className="relative w-full">
                    <select
                      id="FROM"
                      className="h-9 border border-gray-300 text-gray-900 text-xs font-medium rounded-lg block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                    >
                      <option selected>Max</option>
                      <option value="option 1">option 1</option>
                      <option value="option 2">option 2</option>
                      <option value="option 3">option 3</option>
                      <option value="option 4">option 4</option>
                    </select>
                  </div>
                </div>
              </div>

              <h6 className="font-semibold text-base leading-7 text-black px-6 mb-6">
                Offer
              </h6>
              <div className="w-full mb-7 px-7">
                <div
                  className="accordion-group grid grid-cols-1"
                  data-accordion="always-open-accordion"
                >
                  <div className="accordion mb-5" id="category-heading-four">
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                      aria-controls="category-collapse-four"
                    >
                      <h5 className="font-medium text-sm "> Regular Offer </h5>
                    </button>
                  </div>
                  <div className="accordion  mb-5" id="category-heading-three">
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600 "
                      aria-controls="category-collapse-three"
                    >
                      <h5 className="font-medium text-sm "> Special Offer </h5>
                    </button>
                    <div
                      id="category-collapse-three"
                      className="accordion-content w-full px-0 overflow-hidden pr-4 h-auto max-h-max"
                      aria-labelledby="category-heading-three"
                    >
                      <div className="box flex flex-col gap-2 mt-3">
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
                            20% or more
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
                            30% or more
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="checkbox-default-5"
                            type="checkbox"
                            className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                          />
                          <label
                            htmlFor="checkbox-default-5"
                            className="text-xs font-normal text-gray-600 leading-4 cursor-pointer"
                          >
                            50% or more
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h6 className="font-semibold text-base leading-7 text-black px-6 mb-6">
                Rating Us
              </h6>
              <div className="px-6 flex flex-col gap-3">
                <div className="flex items-center">
                  <input
                    id="radio1"
                    type="radio"
                    name="default-radio"
                    className="peer hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                  />
                  <label
                    htmlFor="radio1"
                    className="flex items-center cursor-pointer text-gray-600 text-sm font-normal"
                  >
                    <span className="border border-gray-300  rounded-full mr-2 w-4 h-4 peer-checked:border-indigo-500 peer-checked:bg-indigo-500 peer-checked:shadow-[inset_0_0px_0px_3.5px_#E7E7FF]" />
                    <p className="flex items-center gap-2 bg-white"></p>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="radio2"
                    type="radio"
                    name="default-radio"
                    className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                  />
                  <label
                    htmlFor="radio2"
                    className="flex items-center cursor-pointer text-gray-600 text-sm font-normal"
                  >
                    <span className="border border-gray-300  rounded-full mr-2 w-4 h-4 peer-checked:border-indigo-500 peer-checked:bg-indigo-500 peer-checked:shadow-[inset_0_0px_0px_3.5px_#E7E7FF]" />
                    <p className="flex items-center gap-2 bg-white"></p>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="radio3"
                    type="radio"
                    name="default-radio"
                    className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                  />
                  <label
                    htmlFor="radio3"
                    className="flex items-center cursor-pointer text-gray-600 text-sm font-normal"
                  >
                    <span className="border border-gray-300  rounded-full mr-2 w-4 h-4 peer-checked:border-indigo-500 peer-checked:bg-indigo-500 peer-checked:shadow-[inset_0_0px_0px_3.5px_#E7E7FF]" />
                    <p className="flex items-center gap-2 bg-white"></p>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="radio4"
                    type="radio"
                    name="default-radio"
                    className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                  />
                  <label
                    htmlFor="radio4"
                    className="flex items-center cursor-pointer text-gray-600 text-sm font-normal"
                  >
                    <span className="border border-gray-300  rounded-full mr-2 w-4 h-4 peer-checked:border-indigo-500 peer-checked:bg-indigo-500 peer-checked:shadow-[inset_0_0px_0px_3.5px_#E7E7FF]" />
                    <p className="flex items-center gap-2 bg-white"></p>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="radio5"
                    type="radio"
                    name="default-radio"
                    className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                  />
                  <label
                    htmlFor="radio5"
                    className="flex items-center cursor-pointer text-gray-600 text-sm font-normal"
                  >
                    <span className="border border-gray-300  rounded-full mr-2 w-4 h-4 peer-checked:border-indigo-500 peer-checked:bg-indigo-500 peer-checked:shadow-[inset_0_0px_0px_3.5px_#E7E7FF]" />
                    <p className="flex items-center gap-2 bg-white"></p>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 xl:col-span-9 bg-white rounded-xl lg:max-h-screen" />
          </div>
        </div>
      </div>
    </section>
  );
}
