export default function OrderTrackingWithMapIndication() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-12">
          <h2 className="font-['Manrope'] text-2xl leading-9 font-semibold text-gray-500">
            Order #521459
          </h2>
          <div className="flex w-full flex-col items-start justify-start gap-5">
            <div className="w-full border-b border-gray-200 pb-5">
              <div className="flex w-full flex-col items-center justify-center gap-8 pb-2.5 sm:items-center lg:items-start">
                <ol className="flex w-full flex-col items-center justify-between gap-5 lg:flex-row lg:items-start">
                  <li className="relative flex justify-center text-base font-semibold text-green-700 after:absolute after:top-3 after:left-12 after:inline-block after:border after:border-dashed after:bg-green-700 after:content-none sm:after:left-16 md:after:left-24 lg:w-28 lg:after:top-12 lg:after:left-32 lg:after:h-0.5 lg:after:w-full lg:after:content-[''] xl:w-32 xl:after:left-36">
                    <div className="z-10 mr-1.5 block flex flex-col items-center text-center lg:w-28 lg:whitespace-nowrap xl:w-32">
                      <span className="mx-auto mb-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-transparent bg-green-700 text-center text-base font-bold text-white lg:h-8 lg:w-8">
                        1
                      </span>
                      Oder Received
                      <span className="text-center text-base font-normal text-green-700">
                        May 26, 2024
                      </span>
                    </div>
                  </li>
                  <li className="after:bg-grey-70 relative flex justify-center text-base font-semibold text-green-700 after:absolute after:top-3 after:left-12 after:inline-block after:border after:border-dashed after:content-none sm:after:left-16 md:after:left-24 lg:w-28 lg:after:top-12 lg:after:left-32 lg:after:h-0.5 lg:after:w-full lg:after:content-[''] xl:w-32 xl:after:left-36">
                    <div className="z-10 mx-1.5 block flex flex-col items-center text-center lg:w-28 lg:whitespace-nowrap xl:w-32">
                      <span className="bg-gre-70 mx-auto mb-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-700 text-base font-bold text-white lg:h-8 lg:w-8">
                        2
                      </span>
                      In Transit
                      <span className="text-center text-base font-normal text-green-700">
                        May 27, 2024
                      </span>
                    </div>
                  </li>
                  <li className="relative flex justify-center text-base font-semibold text-black after:absolute after:top-3 after:left-12 after:inline-block after:h-0.5 after:w-full after:border after:border-dashed after:bg-green-200 after:content-none sm:after:left-16 md:after:left-24 lg:w-28 lg:after:top-12 lg:after:left-32 lg:after:content-[''] xl:w-32 xl:after:left-36">
                    <div className="z-10 mx-1.5 block flex flex-col items-center text-center lg:w-28 xl:w-32">
                      <span className="mx-auto mb-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-50 text-base font-bold text-green-700 lg:h-8 lg:w-8">
                        3
                      </span>
                      On Shorting Center
                      <span className="text-center text-base font-normal text-gray-500">
                        May 29, 2024
                      </span>
                    </div>
                  </li>
                  <li className="relative flex justify-center text-base font-semibold text-gray-500 after:absolute after:top-3 after:left-12 after:inline-block after:h-0.5 after:w-full after:border after:border-dashed after:bg-green-200 after:content-none sm:after:left-16 md:after:left-24 lg:w-28 lg:after:top-12 lg:after:left-32 lg:after:content-[''] xl:w-32 xl:after:left-36">
                    <div className="z-10 mx-1.5 block flex flex-col items-center text-center lg:w-28 lg:whitespace-nowrap xl:w-32">
                      <span className="mx-auto mb-3 flex h-6 w-6 items-center justify-center rounded-full border border-green-700 bg-white text-base font-bold text-green-700 lg:h-8 lg:w-8">
                        4
                      </span>
                      On the Way
                      <span className="text-center text-base font-normal text-gray-500">
                        May 29, 2024
                      </span>
                    </div>
                  </li>
                  <li className="relative flex justify-center text-base font-semibold text-gray-500 lg:w-28 xl:w-32">
                    <div className="z-10 ml-1.5 block flex flex-col items-center text-center lg:w-28 lg:whitespace-nowrap xl:w-32">
                      <span className="mx-auto mb-3 flex h-6 w-6 items-center justify-center rounded-full border border-green-700 bg-white text-sm text-green-700 lg:h-8 lg:w-8">
                        5
                      </span>
                      Delivered
                      <span className="text-center text-base font-normal text-gray-500">
                        June 06, 2024
                      </span>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <div className="w-full items-start justify-start border-b border-gray-200 pb-5">
              <div className="grid w-full grid-cols-1 gap-8 pb-2.5 md:grid-cols-3 md:gap-5 lg:gap-8">
                <div className="inline-flex w-full flex-col items-start justify-start gap-3.5">
                  <div className="inline-flex w-full items-center justify-start gap-1.5">
                    <h6 className="text-base leading-relaxed font-semibold text-gray-500">
                      Oder Information
                    </h6>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-2.5">
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <span className="text-xs leading-normal font-normal text-gray-500">
                        PICKUP DATE
                      </span>
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        26 May, 2024 12:24:10 pm
                      </h6>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <span className="text-xs leading-normal font-normal text-gray-500">
                        ESTIMATE DROP
                      </span>
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        8 Days
                      </h6>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <span className="text-xs leading-normal font-normal text-gray-500">
                        RETURN AVAILABLE TIME
                      </span>
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        In 7 Days
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="inline-flex w-full flex-col items-start justify-start gap-3.5">
                  <div className="inline-flex items-center justify-start gap-1.5">
                    <div className="flex h-[22px] w-[22px] items-center justify-center"></div>
                    <h6 className="text-base leading-relaxed font-semibold text-gray-500">
                      Locations
                    </h6>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-2.5">
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <span className="text-xs leading-normal font-normal text-gray-500">
                        PICKUP LOCATION
                      </span>
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        Jane Smith
                        <br />
                        456 Maple Avenue, Brooklyn, NY 11201
                        <br />
                        United States
                      </h6>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <span className="text-xs leading-normal font-normal text-gray-500">
                        DROPOFF LOCATION
                      </span>
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        Michael Johnson
                        <br />
                        789 Oak Street, Los Angeles, CA 90001
                        <br />
                        United States
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="inline-flex w-full flex-col items-start justify-start gap-3.5">
                  <div className="inline-flex w-full items-center justify-start gap-1.5">
                    <div className="flex h-[22px] w-[22px] items-center justify-center"></div>
                    <h6 className="text-base leading-relaxed font-semibold text-gray-500">
                      Customer Details
                    </h6>
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-2.5">
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <span className="text-xs leading-normal font-normal text-gray-500">
                        FULL NAME
                      </span>
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        Jane Smith
                      </h6>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <span className="text-xs leading-normal font-normal text-gray-500">
                        E-MAIL
                      </span>
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        mail@pagedone.com
                      </h6>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <span className="text-xs leading-normal font-normal text-gray-500">
                        PHONE NUMBER
                      </span>
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        +1 369-1212
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-5 border-b border-gray-200 pb-5">
              <h4 className="text-xl leading-8 font-semibold text-gray-900">
                Item List
              </h4>
              <div className="flex w-full flex-col pb-2.5">
                <div className="w-full overflow-x-auto">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full rounded-2xl border border-gray-200">
                        <thead>
                          <tr className="bg-gray-50">
                            <th
                              scope="col"
                              className="p-5 text-left text-base leading-6 font-medium text-gray-900 capitalize"
                            >
                              NO{" "}
                            </th>
                            <th
                              scope="col"
                              className="p-5 text-center text-base leading-6 font-medium whitespace-nowrap text-gray-900 capitalize"
                            >
                              ITEM NAME{" "}
                            </th>
                            <th
                              scope="col"
                              className="p-5 text-center text-base leading-6 font-medium whitespace-nowrap text-gray-900 capitalize"
                            >
                              BASE PRICE{" "}
                            </th>
                            <th
                              scope="col"
                              className="p-5 text-center text-base leading-6 font-medium text-gray-900 capitalize"
                            >
                              QUANTITY{" "}
                            </th>
                            <th
                              scope="col"
                              className="p-5 text-center text-base leading-6 font-medium text-gray-900 capitalize"
                            >
                              Total{" "}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr className="bg-white">
                            <td className="p-5 text-base leading-6 font-medium whitespace-nowrap text-gray-900">
                              1
                            </td>
                            <td className="flex items-center gap-3 p-5 text-base leading-6 font-medium whitespace-nowrap text-gray-900">
                              <img
                                src="https://pagedone.io/asset/uploads/1718266788.png"
                                alt="Laptop image"
                                className="rounded object-cover"
                              />
                              Laptop
                            </td>
                            <td className="p-5 text-center text-base leading-6 font-medium whitespace-nowrap text-gray-900">
                              $80.00
                            </td>
                            <td className="p-5 text-center text-base leading-6 font-medium whitespace-nowrap text-gray-900">
                              1
                            </td>
                            <td className="p-5 text-center text-base leading-6 font-medium whitespace-nowrap text-gray-900">
                              $80.00
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="p-5 text-base leading-6 font-medium whitespace-nowrap text-gray-900">
                              2
                            </td>
                            <td className="flex items-center gap-3 p-5 text-base leading-6 font-medium whitespace-nowrap text-gray-900">
                              <img
                                src="https://pagedone.io/asset/uploads/1715679840.png"
                                alt="Watch image"
                                className="rounded object-cover"
                              />
                              Watch
                            </td>
                            <td className="p-5 text-center text-base leading-6 font-medium whitespace-nowrap text-gray-900">
                              $56.00
                            </td>
                            <td className="p-5 text-center text-base leading-6 font-medium whitespace-nowrap text-gray-900">
                              2
                            </td>
                            <td className="p-5 text-center text-base leading-6 font-medium whitespace-nowrap text-gray-900">
                              $112.00
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="p-5 text-base leading-6 font-medium whitespace-nowrap text-gray-900">
                              3
                            </td>
                            <td className="flex items-center gap-3 p-5 text-base leading-6 font-medium whitespace-nowrap text-gray-900">
                              <img
                                src="https://pagedone.io/asset/uploads/1715679852.png"
                                alt="Headphone image"
                                className="rounded object-cover"
                              />
                              Headphone
                            </td>
                            <td className="p-5 text-center text-base leading-6 font-medium whitespace-nowrap text-gray-900">
                              $94.00
                            </td>
                            <td className="p-5 text-center text-base leading-6 font-medium whitespace-nowrap text-gray-900">
                              1
                            </td>
                            <td className="p-5 text-center text-base leading-6 font-medium whitespace-nowrap text-gray-900">
                              $94.00
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="p-5 text-base leading-6 font-medium whitespace-nowrap text-gray-900">
                              4
                            </td>
                            <td className="flex items-center gap-3 p-5 text-base leading-6 font-medium whitespace-nowrap text-gray-900">
                              <img
                                src="https://pagedone.io/asset/uploads/1715679863.png"
                                alt="Perfume image"
                                className="rounded object-cover"
                              />
                              Perfume
                            </td>
                            <td className="p-5 text-center text-base leading-6 font-medium whitespace-nowrap text-gray-900">
                              $83.00
                            </td>
                            <td className="p-5 text-center text-base leading-6 font-medium whitespace-nowrap text-gray-900">
                              1
                            </td>
                            <td className="p-5 text-center text-base leading-6 font-medium whitespace-nowrap text-gray-900">
                              $83.00
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="p-5 text-base leading-6 font-bold whitespace-nowrap text-gray-900">
                              ALL TOTAL
                            </td>
                            <td className="p-5 text-center text-base leading-6 font-bold whitespace-nowrap text-gray-900"></td>
                            <td className="p-5 text-center text-base leading-6 font-bold whitespace-nowrap text-gray-900"></td>
                            <td className="p-5 text-center text-base leading-6 font-bold whitespace-nowrap text-gray-900"></td>
                            <td className="p-5 text-center text-lg leading-6 font-bold whitespace-nowrap text-gray-900">
                              $369.00{" "}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full rounded-2xl">
              <iframe
                className="rounded-2xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.68689158894!2d70.73889546937228!3d22.273625026463687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1718387587122!5m2!1sen!2sin"
                width="100%"
                height={404}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
