export default function CategoryFilterWithSeparateHeader() {
  return (
    <section className="bg-gray-100 pb-24">
      <div className="w-full">
        <div className="mx-auto w-full bg-white pt-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-manrope text-center text-3xl leading-10 font-bold text-black">
              Pagedone Products
            </h2>
            <div className="flex flex-col justify-center gap-8 py-9 max-md:px-4 md:flex-row md:items-center">
              <button className="flex items-center gap-2 text-sm leading-6 font-semibold whitespace-nowrap text-black">
                Quick Sort{" "}
              </button>
              <div className="grid grid-cols-2 gap-5 max-sm:mx-auto max-sm:max-w-sm sm:grid-cols-4">
                <button className="flex h-11 w-full items-center justify-center rounded-lg border border-indigo-600 bg-indigo-600 px-7 py-3 text-sm font-semibold whitespace-nowrap text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-600 hover:text-white hover:shadow-indigo-200 sm:max-w-[126px]">
                  Search
                </button>
                <button className="flex h-11 w-full items-center justify-center rounded-lg border border-gray-300 px-7 py-3 text-sm font-semibold whitespace-nowrap text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-600 hover:text-white hover:shadow-indigo-200 sm:max-w-[126px]">
                  Popular
                </button>
                <button className="flex h-11 w-full items-center justify-center rounded-lg border border-gray-300 px-7 py-3 text-sm font-semibold whitespace-nowrap text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-600 hover:text-white hover:shadow-indigo-200 sm:max-w-[126px]">
                  Most New
                </button>
                <select
                  id="Offer"
                  className="relative block h-11 w-full appearance-none rounded-lg border border-gray-300 bg-white bg-[url('https://pagedone.io/asset/uploads/1695813759.png')] bg-right bg-no-repeat bg-origin-content px-4 py-2.5 text-sm font-semibold text-gray-900 focus:outline-none"
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
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <div className="mt-8 grid grid-cols-12 md:gap-8">
            <div className="col-span-12 rounded-xl bg-white py-6 max-md:mx-auto max-md:w-full max-md:max-w-sm md:col-span-4 xl:col-span-3">
              <h6 className="px-6 text-lg leading-8 font-semibold text-black">
                Filter
              </h6>

              <h6 className="mb-5 px-6 text-base leading-7 font-semibold text-black">
                Category
              </h6>
              <div className="mb-7 w-full px-7">
                <div
                  className="accordion-group grid grid-cols-1"
                  data-accordion="default-accordion"
                >
                  <div className="accordion mb-5" id="category-heading-one">
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                      aria-controls="category-collapse-one"
                    >
                      <h5 className="text-sm font-medium"> Availability </h5>
                    </button>
                  </div>
                  <div className="accordion mb-5" id="category-heading-two">
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                      aria-controls="category-collapse-tow"
                    >
                      <h5 className="text-sm font-medium"> Occasion </h5>
                    </button>
                  </div>
                  <div className="accordion mb-5" id="category-heading-three">
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                      aria-controls="category-collapse-three"
                    >
                      <h5 className="text-sm font-medium"> Discount </h5>
                    </button>
                    <div
                      id="category-collapse-three"
                      className="accordion-content w-full overflow-hidden px-0 pr-4"
                      aria-labelledby="category-heading-three"
                    >
                      <div className="box mt-3 flex flex-col gap-2">
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
                            20% or more
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
                            30% or more
                          </label>
                        </div>
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
                            50% or more
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box px-6">
                <h6 className="mb-6 text-base leading-7 font-semibold whitespace-nowrap text-black">
                  Size
                </h6>
                <div className="flex items-center justify-center gap-2 px-2.5">
                  <label
                    htmlFor="size"
                    className="w-full text-sm leading-6 font-medium whitespace-nowrap text-gray-800"
                  >
                    Select Size
                  </label>
                  <div className="relative w-full">
                    <select
                      id="FROM"
                      className="relative block h-9 w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 text-xs font-medium text-gray-900 focus:outline-none"
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
                <h6 className="mb-6 text-base leading-7 font-semibold text-black">
                  Prize
                </h6>
                <div className="mb-5 flex items-center gap-1">
                  <div className="relative w-full">
                    <select
                      id="FROM"
                      className="relative block h-9 w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-xs font-medium text-gray-900 focus:outline-none"
                    >
                      <option selected>Min</option>
                      <option value="option 1">option 1</option>
                      <option value="option 2">option 2</option>
                      <option value="option 3">option 3</option>
                      <option value="option 4">option 4</option>
                    </select>
                  </div>
                  <p className="px-1 text-sm leading-6 font-normal text-gray-600">
                    to
                  </p>
                  <div className="relative w-full">
                    <select
                      id="FROM"
                      className="relative block h-9 w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-xs font-medium text-gray-900 focus:outline-none"
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

              <h6 className="mb-6 px-6 text-base leading-7 font-semibold text-black">
                Offer
              </h6>
              <div className="mb-7 w-full px-7">
                <div
                  className="accordion-group grid grid-cols-1"
                  data-accordion="always-open-accordion"
                >
                  <div className="accordion mb-5" id="category-heading-four">
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                      aria-controls="category-collapse-four"
                    >
                      <h5 className="text-sm font-medium"> Regular Offer </h5>
                    </button>
                  </div>
                  <div className="accordion mb-5" id="category-heading-three">
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                      aria-controls="category-collapse-three"
                    >
                      <h5 className="text-sm font-medium"> Special Offer </h5>
                    </button>
                    <div
                      id="category-collapse-three"
                      className="accordion-content h-auto max-h-max w-full overflow-hidden px-0 pr-4"
                      aria-labelledby="category-heading-three"
                    >
                      <div className="box mt-3 flex flex-col gap-2">
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
                            20% or more
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
                            30% or more
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="checkbox-default-5"
                            type="checkbox"
                            className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
                          />
                          <label
                            htmlFor="checkbox-default-5"
                            className="cursor-pointer text-xs leading-4 font-normal text-gray-600"
                          >
                            50% or more
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h6 className="mb-6 px-6 text-base leading-7 font-semibold text-black">
                Rating Us
              </h6>
              <div className="flex flex-col gap-3 px-6">
                <div className="flex items-center">
                  <input
                    id="radio1"
                    type="radio"
                    name="default-radio"
                    className="peer hidden checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat"
                  />
                  <label
                    htmlFor="radio1"
                    className="flex cursor-pointer items-center text-sm font-normal text-gray-600"
                  >
                    <span className="mr-2 h-4 w-4 rounded-full border border-gray-300 peer-checked:border-indigo-500 peer-checked:bg-indigo-500 peer-checked:shadow-[inset_0_0px_0px_3.5px_#E7E7FF]" />
                    <p className="flex items-center gap-2 bg-white"></p>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="radio2"
                    type="radio"
                    name="default-radio"
                    className="hidden checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat"
                  />
                  <label
                    htmlFor="radio2"
                    className="flex cursor-pointer items-center text-sm font-normal text-gray-600"
                  >
                    <span className="mr-2 h-4 w-4 rounded-full border border-gray-300 peer-checked:border-indigo-500 peer-checked:bg-indigo-500 peer-checked:shadow-[inset_0_0px_0px_3.5px_#E7E7FF]" />
                    <p className="flex items-center gap-2 bg-white"></p>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="radio3"
                    type="radio"
                    name="default-radio"
                    className="hidden checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat"
                  />
                  <label
                    htmlFor="radio3"
                    className="flex cursor-pointer items-center text-sm font-normal text-gray-600"
                  >
                    <span className="mr-2 h-4 w-4 rounded-full border border-gray-300 peer-checked:border-indigo-500 peer-checked:bg-indigo-500 peer-checked:shadow-[inset_0_0px_0px_3.5px_#E7E7FF]" />
                    <p className="flex items-center gap-2 bg-white"></p>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="radio4"
                    type="radio"
                    name="default-radio"
                    className="hidden checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat"
                  />
                  <label
                    htmlFor="radio4"
                    className="flex cursor-pointer items-center text-sm font-normal text-gray-600"
                  >
                    <span className="mr-2 h-4 w-4 rounded-full border border-gray-300 peer-checked:border-indigo-500 peer-checked:bg-indigo-500 peer-checked:shadow-[inset_0_0px_0px_3.5px_#E7E7FF]" />
                    <p className="flex items-center gap-2 bg-white"></p>
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="radio5"
                    type="radio"
                    name="default-radio"
                    className="hidden checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat"
                  />
                  <label
                    htmlFor="radio5"
                    className="flex cursor-pointer items-center text-sm font-normal text-gray-600"
                  >
                    <span className="mr-2 h-4 w-4 rounded-full border border-gray-300 peer-checked:border-indigo-500 peer-checked:bg-indigo-500 peer-checked:shadow-[inset_0_0px_0px_3.5px_#E7E7FF]" />
                    <p className="flex items-center gap-2 bg-white"></p>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-span-12 rounded-xl bg-white md:col-span-8 lg:max-h-screen xl:col-span-9" />
          </div>
        </div>
      </div>
    </section>
  )
}
