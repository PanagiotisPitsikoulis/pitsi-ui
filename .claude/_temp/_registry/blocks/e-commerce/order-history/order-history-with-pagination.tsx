export default function OrderHistoryWithPagination() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="lg:mb-12 mb-7">
          <h2 className="w-full text-gray-900 text-3xl font-extrabold font-manrope leading-normal">
            Order List
          </h2>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto pb-4">
            <div className="block">
              <div className="overflow-x-auto w-full">
                <table className="w-full rounded-xl">
                  <tbody className="divide-y divide-gray-300 ">
                    <tr className="w-full pl-5 pr-2.5 py-2.5 rounded-lg justify-start items-center gap-10 inline-flex">
                      <td className="w-full flex-col justify-center items-start gap-2.5 inline-flex pb-6">
                        <h5 className="w-full text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Order Number
                        </h5>
                        <h5 className="w-full text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          #12526
                        </h5>
                      </td>
                      <td className="w-full flex-col justify-center items-start gap-2.5 inline-flex pb-6">
                        <h5 className="w-full text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Item
                        </h5>
                        <h5 className="w-full text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Sport Shoes
                        </h5>
                      </td>
                      <td className="w-full flex-col justify-center items-start gap-2.5 inline-flex pb-6">
                        <h5 className="w-full text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Payment
                        </h5>
                        <h5 className="w-full text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          COD
                        </h5>
                      </td>
                      <td className="w-full flex-col justify-center items-start gap-2.5 inline-flex pb-6">
                        <h5 className="w-full text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Status
                        </h5>
                        <h5 className="w-full text-amber-500 text-lg font-medium leading-8 whitespace-nowrap">
                          Pending
                        </h5>
                      </td>
                      <td className="w-full flex-col justify-center items-start gap-2.5 inline-flex pb-6">
                        <h5 className="w-full text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Total
                        </h5>
                        <h5 className="w-full text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          $20
                        </h5>
                      </td>
                      <td className="w-full justify-start items-center gap-1.5 flex cursor-pointer pb-6">
                        <h6 className="w-full text-indigo-600 text-base font-semibold leading-relaxed cursor-pointer whitespace-nowrap">
                          View Product
                        </h6>
                        <a className="w-full"></a>
                      </td>
                    </tr>
                    <tr className="w-full pl-5 pr-2.5 py-2.5 rounded-lg justify-start items-center gap-10 inline-flex">
                      <td className="w-full flex-col justify-center items-start gap-2.5 inline-flex py-6">
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Order Number
                        </h5>
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          #25658
                        </h5>
                      </td>
                      <td className="w-full flex-col justify-center items-start gap-2.5 inline-flex py-6">
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Item
                        </h5>
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Perfume
                        </h5>
                      </td>
                      <td className="w-full flex-col justify-center items-start gap-2.5 inline-flex py-6">
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Payment
                        </h5>
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Credit Card
                        </h5>
                      </td>
                      <td className="w-full flex-col justify-center items-start gap-2.5 inline-flex py-6">
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Status
                        </h5>
                        <h5 className="text-red-600 text-lg font-medium leading-8 whitespace-nowrap">
                          Cancelled
                        </h5>
                      </td>
                      <td className="w-full flex-col justify-center items-start gap-2.5 inline-flex py-6">
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Total
                        </h5>
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          $50
                        </h5>
                      </td>
                      <td className="w-full justify-start items-center gap-1.5 flex cursor-pointer py-6">
                        <h6 className="text-indigo-600 text-base font-semibold leading-relaxed cursor-pointer whitespace-nowrap">
                          View Product
                        </h6>
                        <a href="#"></a>
                      </td>
                    </tr>
                    <tr className="w-full pl-5 pr-2.5 py-2.5 rounded-lg justify-start items-center gap-10 inline-flex">
                      <td className="w-full flex-col justify-center items-start gap-2.5 inline-flex py-6">
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Order Number
                        </h5>
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          #12658
                        </h5>
                      </td>
                      <td className="w-full flex-col justify-center items-start gap-2.5 inline-flex py-6">
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Item
                        </h5>
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Hair Serum
                        </h5>
                      </td>
                      <td className="w-full flex-col justify-center items-start gap-2.5 inline-flex py-6">
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Payment
                        </h5>
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Credit Card
                        </h5>
                      </td>
                      <td className="w-full flex-col justify-center items-start gap-2.5 inline-flex py-6">
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Status
                        </h5>
                        <h5 className="text-green-600 text-lg font-medium leading-8 whitespace-nowrap">
                          Delivered
                        </h5>
                      </td>
                      <td className="w-full flex-col justify-center items-start gap-2.5 inline-flex py-6">
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Total
                        </h5>
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          $12
                        </h5>
                      </td>
                      <td className="w-full justify-start items-center gap-1.5 flex cursor-pointer py-6">
                        <h6 className="text-indigo-600 text-base font-semibold leading-relaxed cursor-pointer whitespace-nowrap">
                          View Product
                        </h6>
                        <a href="#"></a>
                      </td>
                    </tr>
                    <tr className="w-full pl-5 pr-2.5 py-2.5 rounded-lg justify-start items-center gap-10 inline-flex">
                      <td className="w-full flex-col justify-center items-start gap-2.5 inline-flex pt-6">
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Order Number
                        </h5>
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          #25641
                        </h5>
                      </td>
                      <td className="w-full flex-col justify-center items-start gap-2.5 inline-flex pt-6">
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Item
                        </h5>
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Shopping Bag
                        </h5>
                      </td>
                      <td className="w-full flex-col justify-center items-start gap-2.5 inline-flex pt-6">
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Payment
                        </h5>
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Credit Card
                        </h5>
                      </td>
                      <td className="w-full flex-col justify-center items-start gap-2.5 inline-flex pt-6">
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Status
                        </h5>
                        <h5 className="text-green-600 text-lg font-medium leading-8 whitespace-nowrap">
                          Delivered
                        </h5>
                      </td>
                      <td className="w-full flex-col justify-center items-start gap-2.5 inline-flex pt-6">
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          Total
                        </h5>
                        <h5 className="text-gray-900 text-lg font-medium leading-8 whitespace-nowrap">
                          $58.26
                        </h5>
                      </td>
                      <td className="w-full justify-start items-center gap-1.5 flex cursor-pointer pt-6">
                        <h6 className="text-indigo-600 text-base font-semibold leading-relaxed cursor-pointer whitespace-nowrap">
                          View Product
                        </h6>
                        <a href="#"></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <nav
                  className="flex items-center justify-center mt-16 "
                  aria-label="Table navigation"
                >
                  <ul className="flex items-center justify-center text-sm h-auto gap-12">
                    <li>
                      <a
                        href="javascript:;"
                        className="flex items-center justify-center gap-2 px-3 h-8 ml-0 text-gray-500 bg-white font-medium text-base leading-relaxed  hover:text-gray-700 "
                      >
                        Back{" "}
                      </a>
                    </li>
                    <li>
                      <ul className="flex items-center justify-center gap-4 h-[42px]">
                        <li>
                          <a
                            href="javascript:;"
                            className="font-normal text-base leading-7 text-gray-500 py-2.5 px-4 rounded-full bg-white transition-all duration-500 hover:bg-indigo-600 hover:text-white"
                          >
                            1
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="font-normal text-base leading-7 text-gray-500 py-2.5 px-4 rounded-full bg-white transition-all duration-500 hover:bg-indigo-600 hover:text-white"
                          >
                            2
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="font-normal text-base leading-7 text-gray-500 py-2.5 px-4 rounded-full bg-white transition-all duration-500 hover:bg-indigo-600 hover:text-white"
                          >
                            3
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="font-normal text-base leading-7 text-gray-500 py-2.5 px-4 rounded-full bg-white transition-all duration-500 hover:bg-indigo-600 hover:text-white"
                          >
                            4
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="font-normal text-base leading-7 text-gray-500 py-2.5 px-4 rounded-full bg-white transition-all duration-500 hover:bg-indigo-600 hover:text-white"
                          >
                            5
                          </a>
                        </li>
                        <li className="flex">
                          <a
                            href="javascript:;"
                            className="font-normal text-base leading-7 text-gray-500 py-2.5 px-4 rounded-full "
                          ></a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="javascript:;"
                        className="flex items-center justify-center gap-2 px-3 h-8 ml-0 text-gray-500 bg-white font-medium text-base leading-relaxed  hover:text-gray-700 "
                      >
                        {" "}
                        next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
