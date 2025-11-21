export default function CategoryFilterOnRightSide() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="mb-8 flex flex-col gap-8 md:flex-row md:items-center">
          <button className="flex items-center justify-center gap-2 text-sm leading-6 font-semibold text-black lg:justify-start">
            Quick Sort
          </button>
          <ul className="grid grid-cols-2 gap-5 max-md:mx-auto max-sm:max-w-sm sm:grid-cols-4">
            <button className="flex h-11 items-center justify-center rounded-full bg-indigo-600 px-3 py-3 text-sm font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-600 hover:text-white hover:shadow-indigo-100">
              Search
            </button>
            <button className="flex h-11 items-center justify-center rounded-full border border-gray-300 px-3 py-3 text-sm font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-600 hover:text-white hover:shadow-indigo-100">
              Popular
            </button>
            <button className="flex h-11 items-center justify-center rounded-full border border-gray-300 px-3 py-3 text-sm font-semibold whitespace-nowrap text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-600 hover:text-white hover:shadow-indigo-100">
              Most New
            </button>
            <select
              id="Offer"
              className="relative block h-11 w-full appearance-none rounded-full border border-gray-300 bg-white bg-[url('https://pagedone.io/asset/uploads/1695813759.png')] bg-right bg-no-repeat bg-origin-content px-4 py-2.5 text-sm font-semibold text-gray-900 focus:outline-none"
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
          <div className="col-span-12 rounded-xl border border-gray-300 md:col-span-9" />
          <div className="col-span-12 max-lg:max-w-sm max-md:row-start-1 max-md:mx-auto md:col-span-3 md:pl-4 lg:pl-7">
            <button className="mb-8 flex items-center gap-3 text-base leading-7 font-semibold text-black">
              Filter by
            </button>
            <div className="mb-7 w-full">
              <div
                className="accordion-group grid grid-cols-1"
                data-accordion="default-accordion"
              >
                <div
                  className="accordion border-b border-gray-200 pb-6"
                  id="category-heading-one"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                    aria-controls="category-collapse-one"
                  >
                    <h5 className="text-sm font-medium text-gray-900">
                      Shipping Option
                    </h5>
                  </button>
                  <div
                    id="category-collapse-one"
                    className="accordion-content hidden w-full overflow-hidden px-0 pr-4"
                    aria-labelledby="category-heading-one"
                  >
                    <div className="box mt-5 flex flex-col gap-2">
                      <div className="flex items-center">
                        <input
                          id="checkbox-default-1"
                          type="checkbox"
                          className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                        />
                        <label
                          htmlFor="checkbox-default-1"
                          className="cursor-pointer text-xs leading-4 font-normal text-gray-600"
                        >
                          option 1
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="checkbox-default-2"
                          type="checkbox"
                          className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                        />
                        <label
                          htmlFor="checkbox-default-2"
                          className="cursor-pointer text-xs leading-4 font-normal text-gray-600"
                        >
                          option 2
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion border-b border-gray-200 py-6"
                  id="category-heading-two"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                    aria-controls="category-collapse-tow"
                  >
                    <h5 className="text-sm font-medium text-gray-900">
                      Availability
                    </h5>
                  </button>
                  <div
                    id="category-collapse-two"
                    className="accordion-content hidden w-full overflow-hidden px-0 pr-4"
                    aria-labelledby="category-heading-tow"
                  >
                    <div className="box mt-5 flex flex-col gap-2">
                      <div className="flex items-center">
                        <input
                          id="checkbox-default-3"
                          type="checkbox"
                          className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                        />
                        <label
                          htmlFor="checkbox-default-3"
                          className="cursor-pointer text-xs leading-4 font-normal text-gray-600"
                        >
                          option 1
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="checkbox-default-4"
                          type="checkbox"
                          className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                        />
                        <label
                          htmlFor="checkbox-default-4"
                          className="cursor-pointer text-xs leading-4 font-normal text-gray-600"
                        >
                          option 2
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion border-b border-gray-200 py-6"
                  id="category-heading-three"
                >
                  <button
                    className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                    aria-controls="category-collapse-three"
                  >
                    <h5 className="text-sm font-medium text-gray-900">Types</h5>
                  </button>
                  <div
                    id="category-collapse-three"
                    className="accordion-content hidden w-full overflow-hidden px-0 pr-4"
                    aria-labelledby="category-heading-three"
                  >
                    <div className="box mt-5 flex flex-col gap-2">
                      <div className="flex items-center">
                        <input
                          id="checkbox-default"
                          type="checkbox"
                          className="mr-2 h-4 w-4 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                        />
                        <label
                          htmlFor="checkbox-default"
                          className="cursor-pointer text-xs leading-4 font-normal text-gray-600"
                        >
                          option1
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="checkbox-default"
                          type="checkbox"
                          className="mr-2 h-4 w-4 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                        />
                        <label
                          htmlFor="checkbox-default"
                          className="cursor-pointer text-xs leading-4 font-normal text-gray-600"
                        >
                          option2
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mb-3 text-sm leading-6 font-medium text-black">
              Discount
            </p>
            <div className="box flex flex-col gap-2 pb-6">
              <div className="flex items-center">
                <input
                  id="checkbox-discount-1"
                  type="checkbox"
                  className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                />
                <label
                  htmlFor="checkbox-discount-1"
                  className="cursor-pointer text-xs leading-4 font-normal text-gray-600"
                >
                  20% or more
                </label>
              </div>
              <div className="group flex items-center">
                <input
                  id="checkbox-discount-2"
                  type="checkbox"
                  className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                />
                <label
                  htmlFor="checkbox-discount-2"
                  className="text-xs leading-5 font-normal text-gray-600 transition-all duration-500 group-hover:text-gray-900"
                >
                  30% or more
                </label>
              </div>
              <div className="group flex items-center">
                <input
                  id="checkbox-discount-3"
                  type="checkbox"
                  className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                />
                <label
                  htmlFor="checkbox-discount-3"
                  className="text-xs leading-5 font-normal text-gray-600 transition-all duration-500 group-hover:text-gray-900"
                >
                  50% or more
                </label>
              </div>
            </div>

            <p className="mb-3 pt-6 text-sm leading-6 font-medium text-black">
              Category
            </p>
            <ul className="box mb-6 flex flex-col gap-2 border-b border-gray-200 pb-6">
              <li className="flex items-center justify-between">
                <div className="inline-flex">
                  <input
                    id="checkbox-grocery"
                    type="checkbox"
                    className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                  />
                  <label
                    htmlFor="checkbox-grocery"
                    className="text-xs leading-5 font-normal text-gray-600"
                  >
                    <span>Grocery</span>
                  </label>
                </div>
                <span className="text-xs leading-5 font-normal text-gray-600">
                  42+
                </span>
              </li>
              <li className="flex items-center justify-between">
                <div className="inline-flex">
                  <input
                    id="checkbox-phone"
                    type="checkbox"
                    className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                  />
                  <label
                    htmlFor="checkbox-phone"
                    className="text-xs leading-5 font-normal text-gray-600"
                  >
                    <span>Phone</span>
                  </label>
                </div>
                <span className="text-xs leading-5 font-normal text-gray-600">
                  32+
                </span>
              </li>
              <li className="flex items-center justify-between">
                <div className="inline-flex">
                  <input
                    id="checkbox-electronic"
                    type="checkbox"
                    className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                  />
                  <label
                    htmlFor="checkbox-electronic"
                    className="text-xs leading-5 font-normal text-gray-600"
                  >
                    <span>Electronic</span>
                  </label>
                </div>
                <span className="text-xs leading-5 font-normal text-gray-600">
                  8+
                </span>
              </li>
              <li className="flex items-center justify-between">
                <div className="inline-flex">
                  <input
                    id="checkbox-tv"
                    type="checkbox"
                    className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                  />
                  <label
                    htmlFor="checkbox-tv"
                    className="text-xs leading-5 font-normal text-gray-600"
                  >
                    <span>T.V. &amp; Mobile</span>
                  </label>
                </div>
                <span className="text-xs leading-5 font-normal text-gray-600">
                  11+
                </span>
              </li>
            </ul>
            <div className="mb-7 w-full">
              <div
                className="accordion-group"
                data-accordion="default1-accordion"
              >
                <div className="accordion pb-6" id="category-heading-last">
                  <button
                    className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                    aria-controls="category-collapse-last"
                  >
                    <h5 className="text-sm font-medium">Year</h5>
                  </button>
                  <div
                    id="category-collapse-last"
                    className="accordion-content hidden w-full overflow-hidden px-0 pr-4"
                    aria-labelledby="category-heading-last"
                  >
                    <div className="box mt-5 flex flex-col gap-2">
                      <div className="flex items-center">
                        <input
                          id="checkbox-default"
                          type="checkbox"
                          className="mr-2 h-4 w-4 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                        />
                        <label
                          htmlFor="checkbox-default"
                          className="cursor-pointer text-xs leading-4 font-normal text-gray-600"
                        >
                          option1
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="checkbox-default"
                          type="checkbox"
                          className="mr-2 h-4 w-4 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                        />
                        <label
                          htmlFor="checkbox-default"
                          className="cursor-pointer text-xs leading-4 font-normal text-gray-600"
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
  )
}
