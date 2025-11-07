export default function DefaultRefundOverviewList() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row">
            <h2 className="font-manrope w-full text-3xl leading-normal font-bold text-gray-900">
              My Refunds
            </h2>
            <div className="flex w-full flex-col items-center justify-end gap-5 sm:flex-row">
              <div className="relative w-full lg:w-64">
                <select
                  id="countries"
                  className="inline-flex h-12 w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none lg:w-64"
                >
                  <option value={1} selected>
                    All Orders
                  </option>
                  <option value={2}>Selected Orders</option>
                  <option value={3}>Customized Orders</option>
                  <option value={4}>Other Orders</option>
                </select>
              </div>
              <button className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 lg:w-fit">
                <span className="px-2 py-px text-base leading-relaxed font-semibold whitespace-nowrap text-white">
                  Add Refund Request
                </span>
              </button>
            </div>
          </div>
          <div className="w-full overflow-x-auto">
            <table className="mb-5 w-full rounded-lg">
              <tbody>
                <tr className="bg-white">
                  <td className="flex items-center gap-3.5 pr-8 pb-5 lg:gap-8">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1718791379.png"
                      alt="Long Lasting Perfume image"
                    />
                    <div className="flex flex-col gap-1">
                      <h5 className="text-lg leading-relaxed font-medium text-gray-500">
                        #2012455
                      </h5>
                      <h5 className="text-lg leading-relaxed font-semibold text-gray-900">
                        Long Lasting Perfume
                      </h5>
                    </div>
                  </td>
                  <td className="p-8 text-base leading-relaxed font-medium whitespace-nowrap text-gray-500">
                    06 Jun, 2024 <br />
                    <span className="text-gray-900">At 02:17 PM</span>
                  </td>
                  <td className="p-8 text-base leading-relaxed font-semibold whitespace-nowrap text-gray-900">
                    Reason:
                    <span className="font-medium text-gray-500">
                      Defective Product
                    </span>
                  </td>
                  <td className="p-8">
                    <div className="mx-auto flex w-fit items-center justify-center gap-1 rounded-full bg-indigo-50 py-0.5 pr-2.5 pl-2">
                      <span className="text-center text-xs leading-normal font-medium text-indigo-600">
                        Ongoing
                      </span>
                    </div>
                  </td>
                  <td className="px-2.5 py-10">
                    <button className="group item-center flex p-2 transition-all duration-700 ease-in-out hover:bg-gray-100"></button>
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center gap-3.5 pr-8 pb-5 lg:gap-8">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1718791411.png"
                      alt="Long Lasting Perfume image"
                    />
                    <div className="flex w-60 flex-col gap-1">
                      <h5 className="text-lg leading-relaxed font-medium text-gray-500">
                        #2012455
                      </h5>
                      <div className="text-lg leading-relaxed font-semibold text-gray-900">
                        Long Lasting Perfume
                      </div>
                    </div>
                  </td>
                  <td className="p-8 text-base leading-relaxed font-medium whitespace-nowrap text-gray-500">
                    24 May, 2024 <br />
                    <span className="text-gray-900">At 04:20 PM</span>
                  </td>
                  <td className="p-8 text-base leading-relaxed font-semibold whitespace-nowrap text-gray-900">
                    Reason:
                    <span className="font-medium text-gray-500">
                      Quality Issue
                    </span>
                  </td>
                  <td className="p-8 whitespace-nowrap">
                    <div className="mx-auto flex w-fit items-center justify-center gap-1 rounded-full bg-emerald-50 py-0.5 pr-2.5 pl-2">
                      <span className="text-center text-xs leading-normal font-medium text-emerald-600">
                        Completed
                      </span>
                    </div>
                  </td>
                  <td className="px-2.5 py-10">
                    <button className="group item-center flex p-2 transition-all duration-700 ease-in-out hover:bg-gray-100"></button>
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center gap-3.5 pr-8 pb-5 lg:gap-8">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1718791426.png"
                      alt="Natural Rose Face Pack image"
                    />
                    <div className="flex flex-col gap-1">
                      <h5 className="text-lg leading-relaxed font-medium text-gray-500">
                        #2012455
                      </h5>
                      <div className="text-lg leading-relaxed font-semibold text-gray-900">
                        Natural Rose Face Pack
                      </div>
                    </div>
                  </td>
                  <td className="p-8 text-base leading-relaxed font-medium whitespace-nowrap text-gray-500">
                    21 May, 2024 <br />
                    <span className="text-gray-900">At 12:25 PM</span>
                  </td>
                  <td className="p-8 text-base leading-relaxed font-semibold whitespace-nowrap text-gray-900">
                    Reason:
                    <span className="font-medium text-gray-500">
                      Incorrect Product
                    </span>
                  </td>
                  <td className="p-8 whitespace-nowrap">
                    <div className="mx-auto flex w-fit items-center justify-center gap-1 rounded-full bg-red-50 py-0.5 pr-2.5 pl-2">
                      <span className="text-center text-xs leading-normal font-medium text-red-600">
                        Failed
                      </span>
                    </div>
                  </td>
                  <td className="px-2.5 py-10">
                    <button className="group item-center flex p-2 transition-all duration-700 ease-in-out hover:bg-gray-100"></button>
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center gap-3.5 pr-8 pb-5 lg:gap-8">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1718791449.png"
                      alt="Givenchy Gift Set of 3 image"
                    />
                    <div className="flex flex-col gap-1">
                      <h5 className="text-lg leading-relaxed font-medium text-gray-500">
                        #2012455
                      </h5>
                      <div className="text-lg leading-relaxed font-semibold text-gray-900">
                        Givenchy Gift Set of 3
                      </div>
                    </div>
                  </td>
                  <td className="p-8 text-base leading-relaxed font-medium whitespace-nowrap text-gray-500">
                    06 May, 2024 <br />
                    <span className="text-gray-900">At 10:16 PM</span>
                  </td>
                  <td className="p-8 text-base leading-relaxed font-semibold whitespace-nowrap text-gray-900">
                    Reason:
                    <span className="font-medium text-gray-500">
                      Defective Product
                    </span>
                  </td>
                  <td className="p-8 whitespace-nowrap">
                    <div className="mx-auto flex w-fit items-center justify-center gap-1 rounded-full bg-emerald-50 py-0.5 pr-2.5 pl-2">
                      <span className="text-center text-xs leading-normal font-medium text-emerald-600">
                        Completed
                      </span>
                    </div>
                  </td>
                  <td className="px-2.5 py-10">
                    <button className="group item-center flex p-2 transition-all duration-700 ease-in-out hover:bg-gray-100"></button>
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center gap-3.5 pr-8 lg:gap-8">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1718791464.png"
                      alt="Canoino Blue Silver Watch image"
                    />
                    <div className="flex flex-col gap-1">
                      <h5 className="text-lg leading-relaxed font-medium text-gray-500">
                        #2012455
                      </h5>
                      <div className="text-lg leading-relaxed font-semibold text-gray-900">
                        Canoino Blue Silver Watch
                      </div>
                    </div>
                  </td>
                  <td className="p-8 text-base leading-relaxed font-medium whitespace-nowrap text-gray-500">
                    20 May, 2024 <br />
                    <span className="text-gray-900">At 11:17 PM</span>
                  </td>
                  <td className="p-8 text-base leading-relaxed font-semibold whitespace-nowrap text-gray-900">
                    Reason:
                    <span className="font-medium text-gray-500">
                      Quality Issue
                    </span>
                  </td>
                  <td className="p-8 whitespace-nowrap">
                    <div className="mx-auto flex w-fit items-center justify-center gap-1 rounded-full bg-emerald-50 py-0.5 pr-2.5 pl-2">
                      <span className="text-center text-xs leading-normal font-medium text-emerald-600">
                        Completed
                      </span>
                    </div>
                  </td>
                  <td className="px-2.5 py-10">
                    <button className="group item-center flex p-2 transition-all duration-700 ease-in-out hover:bg-gray-100"></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav
            className="flex w-full items-center justify-center"
            aria-label="Table navigation"
          >
            <ul className="flex h-12 items-center justify-center gap-2 text-sm md:gap-12">
              <li>
                <a
                  href="javascript:;"
                  className="ml-0 flex h-8 items-center justify-center gap-2 bg-white text-base leading-7 font-medium text-gray-500 hover:text-gray-700 sm:px-3"
                >
                  Back
                </a>
              </li>
              <li>
                <ul className="flex items-center justify-center gap-1 md:gap-4">
                  <li>
                    <a
                      href="javascript:;"
                      className="rounded-full bg-white px-4 py-2 text-base leading-7 font-normal text-gray-500 transition-all duration-700 ease-in-out hover:text-indigo-600"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="rounded-full bg-white px-4 py-2 text-base leading-7 font-normal text-gray-500 transition-all duration-700 ease-in-out hover:text-indigo-600"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="rounded-full bg-white px-4 py-2 text-base leading-7 font-normal text-gray-500 transition-all duration-700 ease-in-out hover:text-indigo-600"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="rounded-full bg-white px-4 py-2 text-base leading-7 font-normal text-gray-500 transition-all duration-700 ease-in-out hover:text-indigo-600"
                    >
                      4
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="rounded-full bg-white px-4 py-2 text-base leading-7 font-normal text-gray-500 transition-all duration-700 ease-in-out hover:text-indigo-600"
                    >
                      5
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="rounded-full px-4 py-2.5 text-base leading-7 font-normal text-gray-500"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="rounded-full bg-white px-4 py-2 text-base leading-7 font-normal text-gray-500 transition-all duration-700 ease-in-out hover:text-indigo-600"
                    >
                      10
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="ml-0 flex h-8 items-center justify-center gap-2 bg-white text-base leading-7 font-medium text-gray-500 hover:text-gray-700 sm:px-3"
                >
                  next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}
