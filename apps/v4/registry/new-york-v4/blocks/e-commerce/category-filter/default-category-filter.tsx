export default function DefaultCategoryFilter() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="flex w-full flex-col justify-between max-lg:gap-4 lg:flex-row lg:items-center">
          <ul className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-12">
            <li className="group flex cursor-pointer items-center outline-none">
              <span className="mr-3 ml-2 text-lg leading-8 font-normal text-indigo-600 transition-all duration-500 group-hover:text-indigo-600">
                Finance
              </span>
              <button className="font-manrope flex aspect-square h-6 items-center justify-center rounded-full border border-indigo-600 text-base font-medium text-indigo-600 transition-all duration-500 group-hover:border-indigo-600 group-hover:text-indigo-600">
                8
              </button>
            </li>
            <li className="group flex cursor-pointer items-center outline-none">
              <span className="pr-3 pl-2 text-lg leading-8 font-normal text-black transition-all duration-500 group-hover:text-indigo-600">
                Management
              </span>
              <span className="font-manrope flex h-6 w-6 items-center justify-center rounded-full border border-gray-900 text-base font-medium text-gray-900 transition-all duration-500 group-hover:border-indigo-600 group-hover:text-indigo-600">
                3
              </span>
            </li>
            <li className="group flex cursor-pointer items-center outline-none">
              <span className="pr-3 pl-2 text-lg leading-8 font-normal text-black transition-all duration-500 group-hover:text-indigo-600">
                Today’s deal
              </span>
              <span className="font-manrope flex h-6 w-6 items-center justify-center rounded-full border border-gray-900 text-base font-medium text-gray-900 transition-all duration-500 group-hover:border-indigo-600 group-hover:text-indigo-600">
                1
              </span>
            </li>
          </ul>
          <div className="relative w-full max-w-sm">
            <select
              id="Offer"
              className="relative block h-12 w-full appearance-none rounded-full border border-gray-300 bg-white px-4 py-2.5 pl-11 text-base leading-7 font-normal text-gray-900 transition-all duration-500 focus-within:bg-gray-50 hover:border-gray-400 hover:bg-gray-50 focus:outline-none"
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
          <div className="col-span-12 w-full max-md:mx-auto max-md:max-w-md md:col-span-3">
            <div className="box w-full rounded-xl border border-gray-300 bg-white p-6 md:max-w-sm">
              <h6 className="mb-5 text-base leading-7 font-medium text-black">
                Your Workspace
              </h6>
              <div className="mb-5 flex items-center gap-1">
                <div className="relative w-full">
                  <select
                    id="FROM"
                    className="relative block h-12 w-full appearance-none rounded-full border border-gray-300 bg-white px-4 py-2.5 text-xs font-medium text-gray-900 focus:outline-none"
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
                    className="relative block h-12 w-full appearance-none rounded-full border border-gray-300 bg-white px-4 py-2.5 text-xs font-medium text-gray-900 focus:outline-none"
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
                className="mb-2 block w-full text-sm font-medium text-gray-600"
              >
                Zip Code
              </label>
              <div className="relative mb-8 w-full">
                <select
                  id="FROM"
                  className="relative block h-12 w-full appearance-none rounded-full border border-gray-300 bg-white px-4 py-2.5 text-xs font-medium text-gray-900 focus:outline-none"
                >
                  <option selected>Write code</option>
                  <option value="option 1">option 1</option>
                  <option value="option 2">option 2</option>
                  <option value="option 3">option 3</option>
                  <option value="option 4">option 4</option>
                </select>
              </div>
              <button className="flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 py-2.5 text-xs font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-200">
                Search
              </button>
            </div>
            <div className="box mt-7 w-full rounded-xl border border-gray-300 bg-white p-6 md:max-w-sm">
              <div className="mb-7 flex w-full items-center justify-between border-b border-gray-200 pb-3">
                <p className="text-base leading-7 font-medium text-black">
                  Filter Plans
                </p>
                <p className="cursor-pointer text-xs font-medium text-gray-500 transition-all duration-500 hover:text-indigo-600">
                  RESET
                </p>
              </div>
              <div className="mb-7 w-full">
                <div
                  className="accordion-group grid grid-cols-1 gap-5 sm:gap-9"
                  data-accordion="default-accordion"
                >
                  <div className="accordion" id="category-heading-one">
                    <button
                      className="accordion-toggle group accordion-active:text-indigo-600 inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600 active:text-indigo-600"
                      aria-controls="category-collapse-one"
                    >
                      <h5 className="text-sm font-medium text-gray-900">
                        Availability
                      </h5>
                    </button>
                    <div
                      id="category-collapse-one"
                      className="accordion-content max-h-0 w-full overflow-hidden px-0 pr-4"
                      aria-labelledby="category-heading-one"
                    >
                      <div className="box mt-5 flex flex-col gap-2">
                        <div className="mb-2 flex items-center">
                          <input
                            id="checkbox-option-1"
                            type="checkbox"
                            className="checkbox-white mr-1 h-5 w-5 appearance-none rounded border border-gray-500 checked:border-indigo-100 checked:bg-indigo-600 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-100 hover:bg-indigo-600"
                          />
                          <label
                            htmlFor="checkbox-option-1"
                            className="ml-1 cursor-pointer text-xs font-normal text-gray-600"
                          >
                            option-1
                          </label>
                        </div>
                        <div className="mb-2 flex items-center">
                          <input
                            id="checkbox-option-2"
                            type="checkbox"
                            className="checkbox-white mr-1 h-5 w-5 appearance-none rounded border border-gray-500 checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-100 hover:bg-indigo-600"
                          />
                          <label
                            htmlFor="checkbox-option-2"
                            className="ml-1 cursor-pointer text-xs font-normal text-gray-600"
                          >
                            option-2
                          </label>
                        </div>
                        <div className="mb-2 flex items-center">
                          <input
                            id="checkbox-option-3"
                            type="checkbox"
                            className="checkbox-white mr-1 h-5 w-5 appearance-none rounded border border-gray-500 checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-600 hover:bg-indigo-600"
                          />
                          <label
                            htmlFor="checkbox-option-3"
                            className="ml-1 cursor-pointer text-xs font-normal text-gray-600"
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
                className="mb-1 text-sm leading-6 font-medium text-gray-600"
              >
                Offer
              </label>
              <div className="relative mb-7 w-full">
                <select
                  id="Offer"
                  className="relative block h-12 w-full appearance-none rounded-full border border-gray-300 bg-white px-4 py-2.5 text-xs font-medium text-gray-900 focus:outline-none"
                >
                  <option selected>5% off upi discount</option>
                  <option value="option 1">option 1</option>
                  <option value="option 2">option 2</option>
                  <option value="option 3">option 3</option>
                  <option value="option 4">option 4</option>
                </select>
              </div>
              <p className="mb-3 text-sm leading-6 font-medium text-black">
                Discount
              </p>
              <div className="box flex flex-col gap-2">
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
          <div className="col-span-12 md:col-span-9" />
        </div>
      </div>
    </section>
  )
}
