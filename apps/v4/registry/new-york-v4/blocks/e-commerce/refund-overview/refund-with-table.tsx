export default function RefundWithTable() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-14">
          <div className="flex w-full flex-col items-center justify-start gap-8 md:flex-row">
            <h2 className="font-manrope w-full text-center text-3xl leading-normal font-bold text-gray-900 md:text-start">
              My Refunds
            </h2>
            <div className="flex w-full items-center justify-center gap-4 md:justify-end lg:gap-12">
              <li className="flex h-[42px] w-[42px] items-center justify-center rounded-full transition-all duration-700 ease-in-out hover:bg-indigo-50">
                <a href="#"></a>
              </li>
              <ul className="flex items-end justify-start gap-4">
                <li>
                  <a className="inline-flex h-[42px] w-[42px] flex-col items-center justify-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-2 transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-50">
                    <span className="text-base leading-relaxed font-normal text-gray-500">
                      1
                    </span>
                  </a>
                </li>
                <li>
                  <a className="inline-flex h-[42px] w-[42px] flex-col items-center justify-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-2 transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-50">
                    <span className="text-base leading-relaxed font-normal text-gray-900">
                      2
                    </span>
                  </a>
                </li>
                <li>
                  <a className="inline-flex h-[42px] w-[42px] flex-col items-center justify-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-2 transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-50">
                    <span className="text-base leading-relaxed font-normal text-gray-500">
                      3
                    </span>
                  </a>
                </li>
                <li>
                  <a className="inline-flex h-[42px] w-[42px] flex-col items-center justify-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-2 transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-50"></a>
                </li>
                <li>
                  <a className="inline-flex h-[42px] w-[42px] flex-col items-center justify-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-2 transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-50">
                    <span className="text-base leading-relaxed font-normal text-gray-500">
                      10
                    </span>
                  </a>
                </li>
              </ul>
              <li className="flex h-[42px] w-[42px] items-center justify-center rounded-full transition-all duration-700 ease-in-out hover:bg-indigo-50">
                <a href="#"></a>
              </li>
            </div>
          </div>
          <div className="flex w-full flex-col">
            <div className="overflow-x-auto pb-4">
              <div className="block">
                <div className="w-full overflow-x-auto rounded-xl">
                  <table className="w-full rounded-xl border border-gray-200">
                    <thead>
                      <tr className="divide-x divide-gray-200 rounded-xl border-b border-gray-200 bg-gray-100">
                        <th
                          scope="col"
                          className="px-5 py-2 text-left text-sm leading-8 font-semibold whitespace-nowrap text-gray-900 capitalize"
                        >
                          {" "}
                          Company{" "}
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-2 text-left text-sm leading-8 font-semibold whitespace-nowrap text-gray-900 capitalize"
                        >
                          {" "}
                          User ID{" "}
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-2 text-left text-sm leading-8 font-semibold whitespace-nowrap text-gray-900 capitalize"
                        >
                          {" "}
                          Type{" "}
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-2 text-left text-sm leading-8 font-semibold whitespace-nowrap text-gray-900 capitalize"
                        >
                          {" "}
                          Industry Type{" "}
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-2 text-left text-sm leading-8 font-semibold whitespace-nowrap text-gray-900 capitalize"
                        >
                          {" "}
                          Actions{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-x divide-y divide-gray-200 rounded-b-xl">
                      <tr className="divide-x divide-gray-200">
                        <td className="px-5 py-3.5 text-base leading-8 font-medium whitespace-nowrap text-gray-500">
                          {" "}
                          #2012455
                        </td>
                        <td className="px-5 py-3.5 text-base leading-8 font-medium whitespace-nowrap text-gray-500">
                          {" "}
                          06 Jun, 2024
                        </td>
                        <td className="px-5 py-3.5 text-base leading-8 font-medium whitespace-nowrap text-gray-500">
                          Defective Product
                        </td>
                        <td className="px-5 py-4 text-sm leading-8 font-medium whitespace-nowrap text-indigo-600">
                          {" "}
                          Ongoing
                        </td>
                        <td className="px-5 py-3.5">
                          <a className="text-base leading-8 font-medium whitespace-nowrap text-indigo-600 transition-all duration-700 ease-in-out hover:text-indigo-800">
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr className="divide-x divide-gray-200">
                        <td className="px-5 py-3.5 text-base leading-8 font-medium whitespace-nowrap text-gray-500">
                          {" "}
                          #203456
                        </td>
                        <td className="px-5 py-3.5 text-base leading-8 font-medium whitespace-nowrap text-gray-500">
                          {" "}
                          02 Jun, 2024
                        </td>
                        <td className="px-5 py-3.5 text-base leading-8 font-medium whitespace-nowrap text-gray-500">
                          {" "}
                          Incorrect Product
                        </td>
                        <td className="px-5 py-4 text-sm leading-8 font-medium whitespace-nowrap text-indigo-600">
                          {" "}
                          Ongoing
                        </td>
                        <td className="px-5 py-3.5">
                          <a className="text-base leading-8 font-medium whitespace-nowrap text-indigo-600 transition-all duration-700 ease-in-out hover:text-indigo-800">
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr className="divide-x divide-gray-200">
                        <td className="px-5 py-3.5 text-base leading-8 font-medium whitespace-nowrap text-gray-500">
                          {" "}
                          #864214
                        </td>
                        <td className="px-5 py-3.5 text-base leading-8 font-medium whitespace-nowrap text-gray-500">
                          {" "}
                          20 May, 2024
                        </td>
                        <td className="px-5 py-3.5 text-base leading-8 font-medium whitespace-nowrap text-gray-500">
                          {" "}
                          Size Issue
                        </td>
                        <td className="px-5 py-4 text-sm leading-8 font-medium whitespace-nowrap text-emerald-600">
                          {" "}
                          Completed
                        </td>
                        <td className="px-5 py-3.5">
                          <a className="text-base leading-8 font-medium whitespace-nowrap text-indigo-600 transition-all duration-700 ease-in-out hover:text-indigo-800">
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr className="divide-x divide-gray-200">
                        <td className="px-5 py-3.5 text-base leading-8 font-medium whitespace-nowrap text-gray-500">
                          {" "}
                          #201488
                        </td>
                        <td className="px-5 py-3.5 text-base leading-8 font-medium whitespace-nowrap text-gray-500">
                          {" "}
                          01 May, 2024
                        </td>
                        <td className="px-5 py-3.5 text-base leading-8 font-medium whitespace-nowrap text-gray-500">
                          {" "}
                          Color Variation
                        </td>
                        <td className="px-5 py-4 text-sm leading-8 font-medium whitespace-nowrap text-emerald-600">
                          {" "}
                          Completed
                        </td>
                        <td className="px-5 py-3.5">
                          <a className="text-base leading-8 font-medium whitespace-nowrap text-indigo-600 transition-all duration-700 ease-in-out hover:text-indigo-800">
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr className="divide-x divide-gray-200">
                        <td className="px-5 py-3.5 text-base leading-8 font-medium whitespace-nowrap text-gray-500">
                          {" "}
                          #202589
                        </td>
                        <td className="px-5 py-3.5 text-base leading-8 font-medium whitespace-nowrap text-gray-500">
                          {" "}
                          24 Apr, 2024
                        </td>
                        <td className="px-5 py-3.5 text-base leading-8 font-medium whitespace-nowrap text-gray-500">
                          {" "}
                          Quality Issue
                        </td>
                        <td className="px-5 py-4 text-sm leading-8 font-medium whitespace-nowrap text-red-600">
                          {" "}
                          Failed
                        </td>
                        <td className="px-5 py-3.5">
                          <a className="text-base leading-8 font-medium whitespace-nowrap text-indigo-600 transition-all duration-700 ease-in-out hover:text-indigo-800">
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr className="divide-x divide-gray-200">
                        <td className="px-5 py-3.5 text-base leading-8 font-medium whitespace-nowrap text-gray-500">
                          {" "}
                          #204184
                        </td>
                        <td className="px-5 py-3.5 text-base leading-8 font-medium whitespace-nowrap text-gray-500">
                          {" "}
                          12 Apr, 2024{" "}
                        </td>
                        <td className="px-5 py-3.5 text-base leading-8 font-medium whitespace-nowrap text-gray-500">
                          {" "}
                          Incorrect Product
                        </td>
                        <td className="px-5 py-4 text-sm leading-8 font-medium whitespace-nowrap text-emerald-600">
                          {" "}
                          Completed
                        </td>
                        <td className="px-5 py-3.5">
                          <a className="text-base leading-8 font-medium whitespace-nowrap text-indigo-600 transition-all duration-700 ease-in-out hover:text-indigo-800">
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr className="divide-x divide-gray-200">
                        <td className="px-5 py-3.5 text-base leading-8 font-medium whitespace-nowrap text-gray-500">
                          {" "}
                          #201858
                        </td>
                        <td className="px-5 py-3.5 text-base leading-8 font-medium whitespace-nowrap text-gray-500">
                          01 Apr, 2024{" "}
                        </td>
                        <td className="px-5 py-3.5 text-base leading-8 font-medium whitespace-nowrap text-gray-500">
                          {" "}
                          Material not as Expected
                        </td>
                        <td className="px-5 py-4 text-sm leading-8 font-medium whitespace-nowrap text-red-600">
                          {" "}
                          Failed
                        </td>
                        <td className="px-5 py-3.5">
                          <a className="text-base leading-8 font-medium whitespace-nowrap text-indigo-600 transition-all duration-700 ease-in-out hover:text-indigo-800">
                            View Details
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
