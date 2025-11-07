export default function RefundWithTable() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start gap-14 inline-flex">
          <div className="w-full justify-start items-center gap-8 flex md:flex-row flex-col">
            <h2 className="w-full text-gray-900 text-3xl font-bold font-manrope leading-normal md:text-start text-center">
              My Refunds
            </h2>
            <div className="w-full md:justify-end justify-center items-center lg:gap-12 gap-4 flex">
              <li className="w-[42px] h-[42px] hover:bg-indigo-50 transition-all duration-700 ease-in-out rounded-full justify-center items-center flex">
                <a href="#"></a>
              </li>
              <ul className="justify-start items-end gap-4 flex">
                <li>
                  <a className="w-[42px] h-[42px] px-2.5 py-2 bg-gray-50 hover:bg-indigo-50 transition-all duration-700 ease-in-out rounded-full border border-gray-200 hover:border-transparent flex-col justify-center items-center gap-1.5 inline-flex">
                    <span className="text-gray-500 text-base font-normal leading-relaxed">
                      1
                    </span>
                  </a>
                </li>
                <li>
                  <a className="w-[42px] h-[42px] px-2.5 py-2 bg-gray-50 hover:bg-indigo-50 transition-all duration-700 ease-in-out rounded-full border border-gray-200 hover:border-transparent flex-col justify-center items-center gap-1.5 inline-flex">
                    <span className="text-gray-900 text-base font-normal leading-relaxed">
                      2
                    </span>
                  </a>
                </li>
                <li>
                  <a className="w-[42px] h-[42px] px-2.5 py-2 bg-gray-50 hover:bg-indigo-50 transition-all duration-700 ease-in-out rounded-full border border-gray-200 hover:border-transparent flex-col justify-center items-center gap-1.5 inline-flex">
                    <span className="text-gray-500 text-base font-normal leading-relaxed">
                      3
                    </span>
                  </a>
                </li>
                <li>
                  <a className="w-[42px] h-[42px] px-2.5 py-2 bg-gray-50 hover:bg-indigo-50 transition-all duration-700 ease-in-out rounded-full border border-gray-200 hover:border-transparent flex-col justify-center items-center gap-1.5 inline-flex"></a>
                </li>
                <li>
                  <a className="w-[42px] h-[42px] px-2.5 py-2 bg-gray-50 hover:bg-indigo-50 transition-all duration-700 ease-in-out rounded-full border border-gray-200 hover:border-transparent flex-col justify-center items-center gap-1.5 inline-flex">
                    <span className="text-gray-500 text-base font-normal leading-relaxed">
                      10
                    </span>
                  </a>
                </li>
              </ul>
              <li className="w-[42px] h-[42px] hover:bg-indigo-50 transition-all duration-700 ease-in-out rounded-full justify-center items-center flex">
                <a href="#"></a>
              </li>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="overflow-x-auto pb-4">
              <div className="block">
                <div className="overflow-x-auto w-full rounded-xl">
                  <table className="w-full rounded-xl border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100 rounded-xl divide-gray-200 divide-x border-b border-gray-200">
                        <th
                          scope="col"
                          className="px-5 py-2 text-left text-sm leading-8 font-semibold text-gray-900 capitalize whitespace-nowrap"
                        >
                          {" "}
                          Company{" "}
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-2 text-left text-sm leading-8 font-semibold text-gray-900 capitalize whitespace-nowrap"
                        >
                          {" "}
                          User ID{" "}
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-2 text-left text-sm leading-8 font-semibold text-gray-900 capitalize whitespace-nowrap"
                        >
                          {" "}
                          Type{" "}
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-2 text-left text-sm leading-8 font-semibold text-gray-900 capitalize whitespace-nowrap"
                        >
                          {" "}
                          Industry Type{" "}
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-2 text-left text-sm leading-8 font-semibold text-gray-900 capitalize whitespace-nowrap"
                        >
                          {" "}
                          Actions{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-gray-200 divide-x divide-y rounded-b-xl">
                      <tr className="divide-gray-200 divide-x">
                        <td className="px-5 py-3.5 whitespace-nowrap text-base leading-8 font-medium text-gray-500 ">
                          {" "}
                          #2012455
                        </td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-base leading-8 font-medium text-gray-500">
                          {" "}
                          06 Jun, 2024
                        </td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-base leading-8 font-medium text-gray-500">
                          Defective Product
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap text-sm leading-8 font-medium text-indigo-600">
                          {" "}
                          Ongoing
                        </td>
                        <td className="px-5 py-3.5">
                          <a className="text-indigo-600 hover:text-indigo-800 whitespace-nowrap transition-all duration-700 ease-in-out text-base font-medium leading-8">
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr className="divide-gray-200 divide-x">
                        <td className="px-5 py-3.5 whitespace-nowrap text-base leading-8 font-medium text-gray-500 ">
                          {" "}
                          #203456
                        </td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-base leading-8 font-medium text-gray-500">
                          {" "}
                          02 Jun, 2024
                        </td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-base leading-8 font-medium text-gray-500">
                          {" "}
                          Incorrect Product
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap text-sm leading-8 font-medium text-indigo-600">
                          {" "}
                          Ongoing
                        </td>
                        <td className="px-5 py-3.5">
                          <a className="text-indigo-600 hover:text-indigo-800 whitespace-nowrap transition-all duration-700 ease-in-out text-base font-medium leading-8">
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr className="divide-gray-200 divide-x">
                        <td className="px-5 py-3.5 whitespace-nowrap text-base leading-8 font-medium text-gray-500 ">
                          {" "}
                          #864214
                        </td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-base leading-8 font-medium text-gray-500">
                          {" "}
                          20 May, 2024
                        </td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-base leading-8 font-medium text-gray-500">
                          {" "}
                          Size Issue
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap text-sm leading-8 font-medium text-emerald-600">
                          {" "}
                          Completed
                        </td>
                        <td className="px-5 py-3.5">
                          <a className="text-indigo-600 hover:text-indigo-800 whitespace-nowrap transition-all duration-700 ease-in-out text-base font-medium leading-8">
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr className="divide-gray-200 divide-x">
                        <td className="px-5 py-3.5 whitespace-nowrap text-base leading-8 font-medium text-gray-500 ">
                          {" "}
                          #201488
                        </td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-base leading-8 font-medium text-gray-500">
                          {" "}
                          01 May, 2024
                        </td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-base leading-8 font-medium text-gray-500">
                          {" "}
                          Color Variation
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap text-sm leading-8 font-medium text-emerald-600">
                          {" "}
                          Completed
                        </td>
                        <td className="px-5 py-3.5">
                          <a className="text-indigo-600 hover:text-indigo-800 whitespace-nowrap transition-all duration-700 ease-in-out text-base font-medium leading-8">
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr className="divide-gray-200 divide-x">
                        <td className="px-5 py-3.5 whitespace-nowrap text-base leading-8 font-medium text-gray-500 ">
                          {" "}
                          #202589
                        </td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-base leading-8 font-medium text-gray-500">
                          {" "}
                          24 Apr, 2024
                        </td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-base leading-8 font-medium text-gray-500">
                          {" "}
                          Quality Issue
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap text-sm leading-8 font-medium text-red-600">
                          {" "}
                          Failed
                        </td>
                        <td className="px-5 py-3.5">
                          <a className="text-indigo-600 hover:text-indigo-800 whitespace-nowrap transition-all duration-700 ease-in-out text-base font-medium leading-8">
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr className="divide-gray-200 divide-x">
                        <td className="px-5 py-3.5 whitespace-nowrap text-base leading-8 font-medium text-gray-500 ">
                          {" "}
                          #204184
                        </td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-base leading-8 font-medium text-gray-500">
                          {" "}
                          12 Apr, 2024{" "}
                        </td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-base leading-8 font-medium text-gray-500">
                          {" "}
                          Incorrect Product
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap text-sm leading-8 font-medium text-emerald-600">
                          {" "}
                          Completed
                        </td>
                        <td className="px-5 py-3.5">
                          <a className="text-indigo-600 hover:text-indigo-800 whitespace-nowrap transition-all duration-700 ease-in-out text-base font-medium leading-8">
                            View Details
                          </a>
                        </td>
                      </tr>
                      <tr className="divide-gray-200 divide-x">
                        <td className="px-5 py-3.5 whitespace-nowrap text-base leading-8 font-medium text-gray-500">
                          {" "}
                          #201858
                        </td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-base leading-8 font-medium text-gray-500">
                          01 Apr, 2024{" "}
                        </td>
                        <td className="px-5 py-3.5 whitespace-nowrap text-base leading-8 font-medium text-gray-500">
                          {" "}
                          Material not as Expected
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap text-sm leading-8 font-medium text-red-600">
                          {" "}
                          Failed
                        </td>
                        <td className="px-5 py-3.5">
                          <a className="text-indigo-600 hover:text-indigo-800 whitespace-nowrap transition-all duration-700 ease-in-out text-base font-medium leading-8">
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
  );
}
