export default function DefaultRefundOverviewList() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="w-full justify-between items-center gap-8 flex lg:flex-row flex-col">
            <h2 className="w-full text-gray-900 text-3xl font-bold font-manrope leading-normal">
              My Refunds
            </h2>
            <div className="w-full justify-end items-center gap-5 flex sm:flex-row flex-col">
              <div className="relative lg:w-64 w-full ">
                <select
                  id="countries"
                  className="focus:outline-none px-4 py-2.5 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] placeholder-gray-400 text-gray-900 text-base font-normal leading-relaxed border border-gray-300 justify-start items-center gap-2 inline-flex
                      h-12 lg:w-64 w-full "
                >
                  <option value={1} selected>
                    All Orders
                  </option>
                  <option value={2}>Selected Orders</option>
                  <option value={3}>Customized Orders</option>
                  <option value={4}>Other Orders</option>
                </select>
              </div>
              <button className="lg:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-2 py-px text-white text-base font-semibold leading-relaxed whitespace-nowrap">
                  Add Refund Request
                </span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto w-full">
            <table className="w-full rounded-lg mb-5">
              <tbody>
                <tr className="bg-white">
                  <td className="pb-5 pr-8 flex items-center lg:gap-8 gap-3.5">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1718791379.png"
                      alt="Long Lasting Perfume image"
                    />
                    <div className="flex flex-col gap-1">
                      <h5 className="text-gray-500 text-lg font-medium leading-relaxed">
                        #2012455
                      </h5>
                      <h5 className="text-gray-900 text-lg font-semibold leading-relaxed">
                        Long Lasting Perfume
                      </h5>
                    </div>
                  </td>
                  <td className="p-8 whitespace-nowrap text-gray-500 text-base font-medium leading-relaxed">
                    06 Jun, 2024 <br />
                    <span className="text-gray-900">At 02:17 PM</span>
                  </td>
                  <td className="p-8 whitespace-nowrap text-gray-900 text-base font-semibold leading-relaxed ">
                    Reason:
                    <span className="text-gray-500 font-medium">
                      Defective Product
                    </span>
                  </td>
                  <td className="p-8">
                    <div className="w-fit mx-auto pl-2 pr-2.5 py-0.5 bg-indigo-50 rounded-full justify-center items-center gap-1 flex">
                      <span className="text-center text-indigo-600 text-xs font-medium leading-normal">
                        Ongoing
                      </span>
                    </div>
                  </td>
                  <td className="py-10 px-2.5">
                    <button className="p-2 hover:bg-gray-100 transition-all duration-700 ease-in-out group flex item-center"></button>
                  </td>
                </tr>
                <tr>
                  <td className="pb-5 pr-8 flex items-center lg:gap-8 gap-3.5">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1718791411.png"
                      alt="Long Lasting Perfume image"
                    />
                    <div className="w-60 flex flex-col gap-1">
                      <h5 className="text-gray-500 text-lg font-medium leading-relaxed">
                        #2012455
                      </h5>
                      <div className="text-gray-900 text-lg font-semibold leading-relaxed">
                        Long Lasting Perfume
                      </div>
                    </div>
                  </td>
                  <td className="p-8 whitespace-nowrap text-gray-500 text-base font-medium leading-relaxed">
                    24 May, 2024 <br />
                    <span className="text-gray-900">At 04:20 PM</span>
                  </td>
                  <td className="p-8 whitespace-nowrap text-gray-900 text-base font-semibold leading-relaxed">
                    Reason:
                    <span className="text-gray-500 font-medium">
                      Quality Issue
                    </span>
                  </td>
                  <td className="p-8 whitespace-nowrap ">
                    <div className="w-fit mx-auto pl-2 pr-2.5 py-0.5 bg-emerald-50 rounded-full justify-center items-center gap-1 flex">
                      <span className="text-center text-emerald-600  text-xs font-medium leading-normal">
                        Completed
                      </span>
                    </div>
                  </td>
                  <td className="py-10 px-2.5">
                    <button className="p-2 hover:bg-gray-100 transition-all duration-700 ease-in-out group flex item-center"></button>
                  </td>
                </tr>
                <tr>
                  <td className="pb-5 pr-8 flex items-center lg:gap-8 gap-3.5">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1718791426.png"
                      alt="Natural Rose Face Pack image"
                    />
                    <div className="flex flex-col gap-1">
                      <h5 className="text-gray-500 text-lg font-medium leading-relaxed">
                        #2012455
                      </h5>
                      <div className="text-gray-900 text-lg font-semibold leading-relaxed">
                        Natural Rose Face Pack
                      </div>
                    </div>
                  </td>
                  <td className="p-8 whitespace-nowrap text-gray-500 text-base font-medium leading-relaxed">
                    21 May, 2024 <br />
                    <span className="text-gray-900">At 12:25 PM</span>
                  </td>
                  <td className="p-8 whitespace-nowrap text-gray-900 text-base font-semibold leading-relaxed">
                    Reason:
                    <span className="text-gray-500 font-medium">
                      Incorrect Product
                    </span>
                  </td>
                  <td className="p-8 whitespace-nowrap ">
                    <div className="w-fit mx-auto pl-2 pr-2.5 py-0.5 bg-red-50 rounded-full justify-center items-center gap-1 flex">
                      <span className="text-center text-red-600 text-xs font-medium leading-normal">
                        Failed
                      </span>
                    </div>
                  </td>
                  <td className="py-10 px-2.5">
                    <button className="p-2 hover:bg-gray-100 transition-all duration-700 ease-in-out group flex item-center"></button>
                  </td>
                </tr>
                <tr>
                  <td className="pb-5 pr-8 flex items-center lg:gap-8 gap-3.5">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1718791449.png"
                      alt="Givenchy Gift Set of 3 image"
                    />
                    <div className="flex flex-col gap-1">
                      <h5 className="text-gray-500 text-lg font-medium leading-relaxed">
                        #2012455
                      </h5>
                      <div className="text-gray-900 text-lg font-semibold leading-relaxed">
                        Givenchy Gift Set of 3
                      </div>
                    </div>
                  </td>
                  <td className="p-8 whitespace-nowrap text-gray-500 text-base font-medium leading-relaxed">
                    06 May, 2024 <br />
                    <span className="text-gray-900">At 10:16 PM</span>
                  </td>
                  <td className="p-8 whitespace-nowrap text-gray-900 text-base font-semibold leading-relaxed">
                    Reason:
                    <span className="text-gray-500 font-medium">
                      Defective Product
                    </span>
                  </td>
                  <td className="p-8 whitespace-nowrap ">
                    <div className="w-fit mx-auto pl-2 pr-2.5 py-0.5 bg-emerald-50 rounded-full justify-center items-center gap-1 flex">
                      <span className="text-center text-emerald-600 text-xs font-medium leading-normal">
                        Completed
                      </span>
                    </div>
                  </td>
                  <td className="py-10 px-2.5">
                    <button className="p-2 hover:bg-gray-100 transition-all duration-700 ease-in-out group flex item-center"></button>
                  </td>
                </tr>
                <tr>
                  <td className="pr-8 flex items-center lg:gap-8 gap-3.5">
                    <img
                      className="rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1718791464.png"
                      alt="Canoino Blue Silver Watch image"
                    />
                    <div className="flex flex-col gap-1">
                      <h5 className="text-gray-500 text-lg font-medium leading-relaxed">
                        #2012455
                      </h5>
                      <div className="text-gray-900 text-lg font-semibold leading-relaxed">
                        Canoino Blue Silver Watch
                      </div>
                    </div>
                  </td>
                  <td className="p-8 whitespace-nowrap text-gray-500 text-base font-medium leading-relaxed">
                    20 May, 2024 <br />
                    <span className="text-gray-900">At 11:17 PM</span>
                  </td>
                  <td className="p-8 whitespace-nowrap text-gray-900 text-base font-semibold leading-relaxed">
                    Reason:
                    <span className="text-gray-500 font-medium">
                      Quality Issue
                    </span>
                  </td>
                  <td className="p-8 whitespace-nowrap ">
                    <div className="w-fit mx-auto pl-2 pr-2.5 py-0.5 bg-emerald-50 rounded-full justify-center items-center gap-1 flex">
                      <span className="text-center text-emerald-600 text-xs font-medium leading-normal">
                        Completed
                      </span>
                    </div>
                  </td>
                  <td className="py-10 px-2.5">
                    <button className="p-2 hover:bg-gray-100 transition-all duration-700 ease-in-out group flex item-center"></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav
            className="w-full flex items-center justify-center"
            aria-label="Table navigation"
          >
            <ul className="flex items-center justify-center text-sm h-12 md:gap-12 gap-2">
              <li>
                <a
                  href="javascript:;"
                  className="flex items-center justify-center gap-2 sm:px-3 h-8 ml-0 text-gray-500 bg-white font-medium text-base leading-7  hover:text-gray-700 "
                >
                  Back
                </a>
              </li>
              <li>
                <ul className="flex items-center justify-center md:gap-4 gap-1">
                  <li>
                    <a
                      href="javascript:;"
                      className="font-normal text-base leading-7 text-gray-500 py-2 px-4 rounded-full bg-white transition-all duration-700 ease-in-out hover:text-indigo-600"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="font-normal text-base leading-7 text-gray-500 py-2 px-4 rounded-full bg-white transition-all duration-700 ease-in-out hover:text-indigo-600"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="font-normal text-base leading-7 text-gray-500 py-2 px-4 rounded-full bg-white transition-all duration-700 ease-in-out hover:text-indigo-600"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="font-normal text-base leading-7 text-gray-500 py-2 px-4 rounded-full bg-white transition-all duration-700 ease-in-out hover:text-indigo-600"
                    >
                      4
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="font-normal text-base leading-7 text-gray-500 py-2 px-4 rounded-full bg-white transition-all duration-700 ease-in-out hover:text-indigo-600"
                    >
                      5
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="font-normal text-base leading-7 text-gray-500 py-2.5 px-4 rounded-full "
                    ></a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="font-normal text-base leading-7 text-gray-500 py-2 px-4 rounded-full bg-white transition-all duration-700 ease-in-out hover:text-indigo-600"
                    >
                      10
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className="flex items-center justify-center gap-2 sm:px-3 h-8 ml-0 text-gray-500 bg-white font-medium text-base leading-7  hover:text-gray-700 "
                >
                  next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
