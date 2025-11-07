export default function OrderTrackingWithMapIndication() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start gap-12 inline-flex">
          <h2 className="text-gray-500 text-2xl font-semibold font-['Manrope'] leading-9">
            Order #521459
          </h2>
          <div className="w-full flex-col justify-start items-start gap-5 flex">
            <div className="w-full pb-5 border-b border-gray-200">
              <div className="w-full flex-col justify-center sm:items-center items-center lg:items-start gap-8 flex pb-2.5">
                <ol className="flex lg:flex-row flex-col justify-between items-center lg:items-start w-full gap-5">
                  <li className="flex xl:w-32 lg:w-28 relative justify-center text-green-700 text-base font-semibold lg:after:content-[''] after:content-none  lg:after:w-full after:border after:border-dashed lg:after:h-0.5   after:bg-green-700 after:inline-block after:absolute lg:after:top-12 after:top-3 xl:after:left-36 lg:after:left-32 md:after:left-24 sm:after:left-16 after:left-12">
                    <div className="xl:w-32 lg:w-28 block lg:whitespace-nowrap z-10 flex flex-col items-center text-center mr-1.5">
                      <span className="w-6 h-6 bg-green-700 text-center border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-base font-bold text-white lg:w-8 lg:h-8">
                        1
                      </span>
                      Oder Received
                      <span className="text-green-700 text-base font-normal text-center">
                        May 26, 2024
                      </span>
                    </div>
                  </li>
                  <li className="flex xl:w-32 lg:w-28 relative justify-center text-green-700 text-base font-semibold lg:after:content-[''] after:content-none  lg:after:w-full after:border after:border-dashed lg:after:h-0.5  after:bg-grey-70 text-green-700 after:inline-block after:absolute lg:after:top-12 after:top-3 xl:after:left-36 lg:after:left-32 md:after:left-24 sm:after:left-16 after:left-12">
                    <div className="xl:w-32 lg:w-28 block lg:whitespace-nowrap z-10 flex flex-col items-center text-center mx-1.5">
                      <span className="w-6 h-6 bg-gre-70 bg-green-700 rounded-full flex justify-center items-center mx-auto mb-3 text-white text-base font-bold lg:w-8 lg:h-8">
                        2
                      </span>
                      In Transit
                      <span className="text-green-700 text-base font-normal text-center">
                        May 27, 2024
                      </span>
                    </div>
                  </li>
                  <li className="flex xl:w-32 lg:w-28 relative justify-center text-black text-base font-semibold lg:after:content-[''] after:content-none after:w-full after:border after:border-dashed after:h-0.5 after:bg-green-200 after:inline-block after:absolute lg:after:top-12 after:top-3 xl:after:left-36 lg:after:left-32 md:after:left-24 sm:after:left-16 after:left-12">
                    <div className="xl:w-32 lg:w-28 block z-10 flex flex-col items-center text-center mx-1.5">
                      <span className="w-6 h-6 bg-green-50 rounded-full flex justify-center items-center mx-auto mb-3 text-green-700 text-base font-bold lg:w-8 lg:h-8">
                        3
                      </span>
                      On Shorting Center
                      <span className="text-gray-500 text-base font-normal text-center">
                        May 29, 2024
                      </span>
                    </div>
                  </li>
                  <li className="flex xl:w-32 lg:w-28 relative justify-center text-gray-500 text-base font-semibold lg:after:content-[''] after:content-none  after:w-full after:border after:border-dashed after:h-0.5 after:bg-green-200 after:inline-block after:absolute lg:after:top-12 after:top-3 xl:after:left-36 lg:after:left-32 md:after:left-24 sm:after:left-16 after:left-12">
                    <div className="xl:w-32 lg:w-28 block lg:whitespace-nowrap z-10 flex flex-col items-center text-center mx-1.5">
                      <span className="w-6 h-6 bg-white border-green-700 border rounded-full flex justify-center items-center mx-auto mb-3 text-green-700 text-base font-bold lg:w-8 lg:h-8">
                        4
                      </span>
                      On the Way
                      <span className="text-gray-500 text-base font-normal text-center">
                        May 29, 2024
                      </span>
                    </div>
                  </li>
                  <li className="flex xl:w-32 lg:w-28 relative justify-center text-gray-500 text-base font-semibold">
                    <div className="xl:w-32 lg:w-28 block lg:whitespace-nowrap z-10 flex flex-col items-center text-center ml-1.5">
                      <span className="w-6 h-6 bg-white border-green-700 border text-green-700 rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-8 lg:h-8">
                        5
                      </span>
                      Delivered
                      <span className="text-gray-500 text-base font-normal text-center">
                        June 06, 2024
                      </span>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <div className="w-full pb-5 justify-start items-start border-b border-gray-200">
              <div className="w-full pb-2.5 lg:gap-8 md:gap-5 gap-8 grid md:grid-cols-3 grid-cols-1">
                <div className="w-full flex-col justify-start items-start gap-3.5 inline-flex">
                  <div className="w-full justify-start items-center gap-1.5 inline-flex">
                    <h6 className="text-gray-500 text-base font-semibold leading-relaxed">
                      Oder Information
                    </h6>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <span className="text-gray-500 text-xs font-normal leading-normal">
                        PICKUP DATE
                      </span>
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        26 May, 2024 12:24:10 pm
                      </h6>
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <span className="text-gray-500 text-xs font-normal leading-normal">
                        ESTIMATE DROP
                      </span>
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        8 Days
                      </h6>
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <span className="text-gray-500 text-xs font-normal leading-normal">
                        RETURN AVAILABLE TIME
                      </span>
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        In 7 Days
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-3.5 inline-flex">
                  <div className="justify-start items-center gap-1.5 inline-flex">
                    <div className="w-[22px] h-[22px] justify-center items-center flex"></div>
                    <h6 className="text-gray-500 text-base font-semibold leading-relaxed">
                      Locations
                    </h6>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <span className="text-gray-500 text-xs font-normal leading-normal">
                        PICKUP LOCATION
                      </span>
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        Jane Smith
                        <br />
                        456 Maple Avenue, Brooklyn, NY 11201
                        <br />
                        United States
                      </h6>
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <span className="text-gray-500 text-xs font-normal leading-normal">
                        DROPOFF LOCATION
                      </span>
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        Michael Johnson
                        <br />
                        789 Oak Street, Los Angeles, CA 90001
                        <br />
                        United States
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-3.5 inline-flex">
                  <div className="w-full justify-start items-center gap-1.5 inline-flex">
                    <div className="w-[22px] h-[22px] justify-center items-center flex"></div>
                    <h6 className="text-gray-500 text-base font-semibold leading-relaxed">
                      Customer Details
                    </h6>
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <span className="text-gray-500 text-xs font-normal leading-normal">
                        FULL NAME
                      </span>
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        Jane Smith
                      </h6>
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <span className="text-gray-500 text-xs font-normal leading-normal">
                        E-MAIL
                      </span>
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        mail@pagedone.com
                      </h6>
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-1 flex">
                      <span className="text-gray-500 text-xs font-normal leading-normal">
                        PHONE NUMBER
                      </span>
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                        +1 369-1212
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full pb-5 flex-col justify-start items-start gap-5 flex border-b border-gray-200">
              <h4 className="text-gray-900 text-xl font-semibold leading-8">
                Item List
              </h4>
              <div className="w-full flex flex-col pb-2.5">
                <div className="w-full overflow-x-auto">
                  <div className="min-w-full inline-block align-middle">
                    <div className="overflow-hidden ">
                      <table className=" min-w-full rounded-2xl border border-gray-200">
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
                              className="p-5 text-center text-base leading-6 font-medium text-gray-900 capitalize whitespace-nowrap"
                            >
                              ITEM NAME{" "}
                            </th>
                            <th
                              scope="col"
                              className="p-5 text-center text-base leading-6 font-medium text-gray-900 capitalize whitespace-nowrap"
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
                        <tbody className="divide-y divide-gray-200 ">
                          <tr className="bg-white">
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-medium text-gray-900 ">
                              1
                            </td>
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-medium text-gray-900 flex items-center gap-3">
                              <img
                                src="https://pagedone.io/asset/uploads/1718266788.png"
                                alt="Laptop image"
                                className="rounded object-cover"
                              />
                              Laptop
                            </td>
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-medium text-gray-900 text-center">
                              $80.00
                            </td>
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-medium text-gray-900 text-center">
                              1
                            </td>
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-medium text-gray-900 text-center">
                              $80.00
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-medium text-gray-900 ">
                              2
                            </td>
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-medium text-gray-900 flex items-center gap-3">
                              <img
                                src="https://pagedone.io/asset/uploads/1715679840.png"
                                alt="Watch image"
                                className="rounded object-cover"
                              />
                              Watch
                            </td>
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-medium text-gray-900 text-center">
                              $56.00
                            </td>
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-medium text-gray-900 text-center">
                              2
                            </td>
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-medium text-gray-900 text-center">
                              $112.00
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-medium text-gray-900 ">
                              3
                            </td>
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-medium text-gray-900 flex items-center gap-3">
                              <img
                                src="https://pagedone.io/asset/uploads/1715679852.png"
                                alt="Headphone image"
                                className="rounded object-cover"
                              />
                              Headphone
                            </td>
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-medium text-gray-900 text-center">
                              $94.00
                            </td>
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-medium text-gray-900 text-center">
                              1
                            </td>
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-medium text-gray-900 text-center">
                              $94.00
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-medium text-gray-900 ">
                              4
                            </td>
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-medium text-gray-900 flex items-center gap-3">
                              <img
                                src="https://pagedone.io/asset/uploads/1715679863.png"
                                alt="Perfume image"
                                className="rounded object-cover"
                              />
                              Perfume
                            </td>
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-medium text-gray-900 text-center">
                              $83.00
                            </td>
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-medium text-gray-900 text-center">
                              1
                            </td>
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-medium text-gray-900 text-center">
                              $83.00
                            </td>
                          </tr>
                          <tr className="bg-white">
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-bold text-gray-900 ">
                              ALL TOTAL
                            </td>
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-bold text-gray-900 text-center"></td>
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-bold text-gray-900 text-center"></td>
                            <td className="p-5 whitespace-nowrap text-base leading-6 font-bold text-gray-900 text-center"></td>
                            <td className="p-5 whitespace-nowrap text-lg leading-6 font-bold text-gray-900 text-center">
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
            <div className="w-full rounded-2xl relative">
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
  );
}
