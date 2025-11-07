export default function OrderTrackingWithLocationIndication() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-4 flex">
            <h2 className="w-full text-center text-black text-3xl font-bold font-manrope leading-normal">
              Order Tracking
            </h2>
            <p className="max-w-4xl w-full text-center text-gray-500 text-base font-normal leading-relaxed">
              Order tracking is a service provided by companies to allow
              customers to monitor the progress and location of their purchases
              from the time they are placed until they are delivered.
            </p>
          </div>
          <div className="w-full flex-col justify-start items-start gap-10 flex">
            <div className="w-full justify-between items-center flex sm:flex-row flex-col gap-3">
              <h4 className="text-gray-500 text-2xl font-medium font-manrope leading-9">
                Order ID:
                <span className="text-gray-900 font-bold">#1025400025</span>
              </h4>
              <button className="sm:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-2 py-px text-center text-white text-base font-semibold leading-relaxed">
                  On Delivery
                </span>
              </button>
            </div>
            <div className="w-full justify-start items-start gap-8 grid md:grid-cols-3 grid-cols-1">
              <div className="group w-full h-full lg:p-4 md:p-2.5 p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start inline-flex">
                <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                  <div className="w-full justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-4 flex">
                      <a className="w-[54px] p-2.5 bg-indigo-100 group-hover:bg-indigo-200 transition-all duration-700 ease-in-out rounded-lg flex-col justify-start items-start gap-2.5 inline-flex"></a>
                      <h6 className="text-gray-500 text-base font-semibold leading-relaxed">
                        Customer
                      </h6>
                    </div>
                    <a className="hover:bg-gray-100 transition-all duration-700 ease-in-out"></a>
                  </div>
                  <h4 className="text-black text-xl font-medium leading-8">
                    John Smith Asli
                  </h4>
                </div>
              </div>
              <div className="group w-full h-full lg:p-4 md:p-2.5 p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start inline-flex">
                <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                  <div className="w-full justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-4 flex">
                      <a className="w-[54px] p-2.5 bg-green-100 group-hover:bg-green-200 transition-all duration-700 ease-in-out rounded-lg flex-col justify-start items-start gap-2.5 inline-flex"></a>
                      <h6 className="text-gray-500 text-base font-semibold leading-relaxed">
                        Phone Number
                      </h6>
                    </div>
                    <a className="hover:bg-gray-100 transition-all duration-700 ease-in-out"></a>
                  </div>
                  <h4 className="text-black text-xl font-medium leading-8">
                    +71 254 125 41023
                  </h4>
                </div>
              </div>
              <div className="group w-full h-full lg:p-4 md:p-2.5 p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start inline-flex">
                <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                  <div className="w-full justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-4 flex">
                      <a className="w-[54px] p-2.5 bg-blue-100 group-hover:bg-blue-200 transition-all duration-700 ease-in-out rounded-lg flex-col justify-start items-start gap-2.5 inline-flex"></a>
                      <h6 className="text-gray-500 text-base font-semibold leading-relaxed">
                        Address
                      </h6>
                    </div>
                    <a className="hover:bg-gray-100 transition-all duration-700 ease-in-out"></a>
                  </div>
                  <h4 className="text-black text-xl font-medium leading-8">
                    718 Robbyn Meadow, S...
                  </h4>
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
          <div className="w-full flex flex-col">
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
