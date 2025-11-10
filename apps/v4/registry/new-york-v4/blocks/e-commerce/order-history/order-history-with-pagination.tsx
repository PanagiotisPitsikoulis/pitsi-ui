export default function OrderHistoryWithPagination() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="mb-7 lg:mb-12">
          <h2 className="font-manrope w-full text-3xl leading-normal font-extrabold text-gray-900">
            Order List
          </h2>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto pb-4">
            <div className="block">
              <div className="w-full overflow-x-auto">
                <table className="w-full rounded-xl">
                  <tbody className="divide-y divide-gray-300">
                    <tr className="inline-flex w-full items-center justify-start gap-10 rounded-lg py-2.5 pr-2.5 pl-5">
                      <td className="inline-flex w-full flex-col items-start justify-center gap-2.5 pb-6">
                        <h5 className="w-full text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Order Number
                        </h5>
                        <h5 className="w-full text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          #12526
                        </h5>
                      </td>
                      <td className="inline-flex w-full flex-col items-start justify-center gap-2.5 pb-6">
                        <h5 className="w-full text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Item
                        </h5>
                        <h5 className="w-full text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Sport Shoes
                        </h5>
                      </td>
                      <td className="inline-flex w-full flex-col items-start justify-center gap-2.5 pb-6">
                        <h5 className="w-full text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Payment
                        </h5>
                        <h5 className="w-full text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          COD
                        </h5>
                      </td>
                      <td className="inline-flex w-full flex-col items-start justify-center gap-2.5 pb-6">
                        <h5 className="w-full text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Status
                        </h5>
                        <h5 className="w-full text-lg leading-8 font-medium whitespace-nowrap text-amber-500">
                          Pending
                        </h5>
                      </td>
                      <td className="inline-flex w-full flex-col items-start justify-center gap-2.5 pb-6">
                        <h5 className="w-full text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Total
                        </h5>
                        <h5 className="w-full text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          $20
                        </h5>
                      </td>
                      <td className="flex w-full cursor-pointer items-center justify-start gap-1.5 pb-6">
                        <h6 className="w-full cursor-pointer text-base leading-relaxed font-semibold whitespace-nowrap text-indigo-600">
                          View Product
                        </h6>
                        <a className="w-full"></a>
                      </td>
                    </tr>
                    <tr className="inline-flex w-full items-center justify-start gap-10 rounded-lg py-2.5 pr-2.5 pl-5">
                      <td className="inline-flex w-full flex-col items-start justify-center gap-2.5 py-6">
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Order Number
                        </h5>
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          #25658
                        </h5>
                      </td>
                      <td className="inline-flex w-full flex-col items-start justify-center gap-2.5 py-6">
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Item
                        </h5>
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Perfume
                        </h5>
                      </td>
                      <td className="inline-flex w-full flex-col items-start justify-center gap-2.5 py-6">
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Payment
                        </h5>
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Credit Card
                        </h5>
                      </td>
                      <td className="inline-flex w-full flex-col items-start justify-center gap-2.5 py-6">
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Status
                        </h5>
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-red-600">
                          Cancelled
                        </h5>
                      </td>
                      <td className="inline-flex w-full flex-col items-start justify-center gap-2.5 py-6">
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Total
                        </h5>
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          $50
                        </h5>
                      </td>
                      <td className="flex w-full cursor-pointer items-center justify-start gap-1.5 py-6">
                        <h6 className="cursor-pointer text-base leading-relaxed font-semibold whitespace-nowrap text-indigo-600">
                          View Product
                        </h6>
                        <a href="#"></a>
                      </td>
                    </tr>
                    <tr className="inline-flex w-full items-center justify-start gap-10 rounded-lg py-2.5 pr-2.5 pl-5">
                      <td className="inline-flex w-full flex-col items-start justify-center gap-2.5 py-6">
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Order Number
                        </h5>
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          #12658
                        </h5>
                      </td>
                      <td className="inline-flex w-full flex-col items-start justify-center gap-2.5 py-6">
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Item
                        </h5>
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Hair Serum
                        </h5>
                      </td>
                      <td className="inline-flex w-full flex-col items-start justify-center gap-2.5 py-6">
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Payment
                        </h5>
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Credit Card
                        </h5>
                      </td>
                      <td className="inline-flex w-full flex-col items-start justify-center gap-2.5 py-6">
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Status
                        </h5>
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-green-600">
                          Delivered
                        </h5>
                      </td>
                      <td className="inline-flex w-full flex-col items-start justify-center gap-2.5 py-6">
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Total
                        </h5>
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          $12
                        </h5>
                      </td>
                      <td className="flex w-full cursor-pointer items-center justify-start gap-1.5 py-6">
                        <h6 className="cursor-pointer text-base leading-relaxed font-semibold whitespace-nowrap text-indigo-600">
                          View Product
                        </h6>
                        <a href="#"></a>
                      </td>
                    </tr>
                    <tr className="inline-flex w-full items-center justify-start gap-10 rounded-lg py-2.5 pr-2.5 pl-5">
                      <td className="inline-flex w-full flex-col items-start justify-center gap-2.5 pt-6">
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Order Number
                        </h5>
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          #25641
                        </h5>
                      </td>
                      <td className="inline-flex w-full flex-col items-start justify-center gap-2.5 pt-6">
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Item
                        </h5>
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Shopping Bag
                        </h5>
                      </td>
                      <td className="inline-flex w-full flex-col items-start justify-center gap-2.5 pt-6">
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Payment
                        </h5>
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Credit Card
                        </h5>
                      </td>
                      <td className="inline-flex w-full flex-col items-start justify-center gap-2.5 pt-6">
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Status
                        </h5>
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-green-600">
                          Delivered
                        </h5>
                      </td>
                      <td className="inline-flex w-full flex-col items-start justify-center gap-2.5 pt-6">
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          Total
                        </h5>
                        <h5 className="text-lg leading-8 font-medium whitespace-nowrap text-gray-900">
                          $58.26
                        </h5>
                      </td>
                      <td className="flex w-full cursor-pointer items-center justify-start gap-1.5 pt-6">
                        <h6 className="cursor-pointer text-base leading-relaxed font-semibold whitespace-nowrap text-indigo-600">
                          View Product
                        </h6>
                        <a href="#"></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <nav
                  className="mt-16 flex items-center justify-center"
                  aria-label="Table navigation"
                >
                  <ul className="flex h-auto items-center justify-center gap-12 text-sm">
                    <li>
                      <a
                        href="javascript:;"
                        className="ml-0 flex h-8 items-center justify-center gap-2 bg-white px-3 text-base leading-relaxed font-medium text-gray-500 hover:text-gray-700"
                      >
                        Back{" "}
                      </a>
                    </li>
                    <li>
                      <ul className="flex h-[42px] items-center justify-center gap-4">
                        <li>
                          <a
                            href="javascript:;"
                            className="rounded-full bg-white px-4 py-2.5 text-base leading-7 font-normal text-gray-500 transition-all duration-500 hover:bg-indigo-600 hover:text-white"
                          >
                            1
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="rounded-full bg-white px-4 py-2.5 text-base leading-7 font-normal text-gray-500 transition-all duration-500 hover:bg-indigo-600 hover:text-white"
                          >
                            2
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="rounded-full bg-white px-4 py-2.5 text-base leading-7 font-normal text-gray-500 transition-all duration-500 hover:bg-indigo-600 hover:text-white"
                          >
                            3
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="rounded-full bg-white px-4 py-2.5 text-base leading-7 font-normal text-gray-500 transition-all duration-500 hover:bg-indigo-600 hover:text-white"
                          >
                            4
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            className="rounded-full bg-white px-4 py-2.5 text-base leading-7 font-normal text-gray-500 transition-all duration-500 hover:bg-indigo-600 hover:text-white"
                          >
                            5
                          </a>
                        </li>
                        <li className="flex">
                          <a
                            href="javascript:;"
                            className="rounded-full px-4 py-2.5 text-base leading-7 font-normal text-gray-500"
                          ></a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="javascript:;"
                        className="ml-0 flex h-8 items-center justify-center gap-2 bg-white px-3 text-base leading-relaxed font-medium text-gray-500 hover:text-gray-700"
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
  )
}
