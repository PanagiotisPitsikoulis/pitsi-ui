export default function DefaultCategoryFilter() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center max-lg:gap-4 justify-between w-full">
          <ul className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12">
            <li className="flex items-center cursor-pointer outline-none group">
              <span className="font-normal text-lg leading-8 text-indigo-600 ml-2 mr-3 transition-all duration-500 group-hover:text-indigo-600">
                Finance
              </span>
              <button className="flex aspect-square h-6 rounded-full border border-indigo-600  items-center justify-center font-manrope font-medium text-base text-indigo-600  transition-all duration-500 group-hover:border-indigo-600 group-hover:text-indigo-600">
                8
              </button>
            </li>
            <li className="flex items-center cursor-pointer outline-none group">
              <span className="font-normal text-lg leading-8 text-black pl-2 pr-3 transition-all duration-500 group-hover:text-indigo-600">
                Management
              </span>
              <span className="w-6 h-6 rounded-full border border-gray-900 flex items-center justify-center font-manrope font-medium text-base text-gray-900 transition-all duration-500 group-hover:border-indigo-600 group-hover:text-indigo-600">
                3
              </span>
            </li>
            <li className="flex items-center cursor-pointer outline-none group">
              <span className="font-normal text-lg leading-8 text-black pl-2 pr-3 transition-all duration-500 group-hover:text-indigo-600">
                Today’s deal
              </span>
              <span className="w-6 h-6 rounded-full border border-gray-900 flex items-center justify-center font-manrope font-medium text-base text-gray-900 transition-all duration-500 group-hover:border-indigo-600 group-hover:text-indigo-600">
                1
              </span>
            </li>
          </ul>
          <div className="relative w-full max-w-sm">
            <select
              id="Offer"
              className="h-12 border border-gray-300 text-gray-900 pl-11 text-base font-normal leading-7 rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 focus-within:bg-gray-50"
            >
              <option selected>Sort by time(high to low)</option>
              <option value="option 1">option 1</option>
              <option value="option 2">option 2</option>
              <option value="option 3">option 3</option>
              <option value="option 4">option 4</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-3 w-full max-md:max-w-md max-md:mx-auto">
            <div className="box rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm">
              <h6 className="font-medium text-base leading-7 text-black mb-5">
                Your Workspace
              </h6>
              <div className="flex items-center mb-5 gap-1">
                <div className="relative w-full">
                  <select
                    id="FROM"
                    className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
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
                    className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                  >
                    <option selected>Max</option>
                    <option value="option 1">option 1</option>
                    <option value="option 2">option 2</option>
                    <option value="option 3">option 3</option>
                    <option value="option 4">option 4</option>
                  </select>
                </div>
              </div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-600 w-full"
              >
                Zip Code
              </label>
              <div className="relative w-full mb-8">
                <select
                  id="FROM"
                  className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                >
                  <option selected>Write code</option>
                  <option value="option 1">option 1</option>
                  <option value="option 2">option 2</option>
                  <option value="option 3">option 3</option>
                  <option value="option 4">option 4</option>
                </select>
              </div>
              <button className="w-full py-2.5 flex items-center justify-center gap-2 rounded-full bg-indigo-600 text-white font-semibold text-xs shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-200  ">
                Search
              </button>
            </div>
            <div className="mt-7 box rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm">
              <div className="flex items-center justify-between w-full pb-3 border-b border-gray-200 mb-7">
                <p className="font-medium text-base leading-7 text-black ">
                  Filter Plans
                </p>
                <p className="font-medium text-xs text-gray-500 cursor-pointer transition-all duration-500 hover:text-indigo-600">
                  RESET
                </p>
              </div>
              <div className="w-full mb-7">
                <div
                  className="accordion-group grid grid-cols-1 gap-5 sm:gap-9"
                  data-accordion="default-accordion"
                >
                  <div className="accordion " id="category-heading-one">
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 inline-flex items-center justify-between leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                      aria-controls="category-collapse-one"
                    >
                      <h5 className="font-medium text-sm text-gray-900">
                        Availability
                      </h5>
                    </button>
                    <div
                      id="category-collapse-one"
                      className="accordion-content w-full px-0 overflow-hidden pr-4 max-h-0 "
                      aria-labelledby="category-heading-one"
                    >
                      <div className="box flex flex-col gap-2 mt-5">
                        <div className="flex items-center mb-2">
                          <input
                            id="checkbox-option-1"
                            type="checkbox"
                            className="checkbox-white w-5 h-5 appearance-none border border-gray-500  rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-100 checked:bg-indigo-600 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                          />
                          <label
                            htmlFor="checkbox-option-1"
                            className="ml-1 font-normal text-xs cursor-pointer  text-gray-600"
                          >
                            option-1
                          </label>
                        </div>
                        <div className="flex items-center mb-2">
                          <input
                            id="checkbox-option-2"
                            type="checkbox"
                            className="checkbox-white w-5 h-5 appearance-none border border-gray-500  rounded mr-1 hover:border-indigo-100 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                          />
                          <label
                            htmlFor="checkbox-option-2"
                            className="ml-1 font-normal text-xs cursor-pointer  text-gray-600"
                          >
                            option-2
                          </label>
                        </div>
                        <div className="flex items-center mb-2">
                          <input
                            id="checkbox-option-3"
                            type="checkbox"
                            className="checkbox-white w-5 h-5 appearance-none border border-gray-500  rounded mr-1 hover:border-indigo-600 hover:bg-indigo-600 checked:bg-no-repeat checked:bg-center checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
                          />
                          <label
                            htmlFor="checkbox-option-3"
                            className="ml-1 font-normal text-xs cursor-pointer  text-gray-600"
                          >
                            option-3
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <label
                htmlFor="Offer"
                className="font-medium text-sm leading-6 text-gray-600 mb-1"
              >
                Offer
              </label>
              <div className="relative w-full mb-7">
                <select
                  id="Offer"
                  className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                >
                  <option selected>5% off upi discount</option>
                  <option value="option 1">option 1</option>
                  <option value="option 2">option 2</option>
                  <option value="option 3">option 3</option>
                  <option value="option 4">option 4</option>
                </select>
              </div>
              <p className="font-medium text-sm leading-6 text-black mb-3">
                Discount
              </p>
              <div className="box flex flex-col gap-2">
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
          <div className="col-span-12 md:col-span-9" />
        </div>
      </div>
    </section>
  );
}
