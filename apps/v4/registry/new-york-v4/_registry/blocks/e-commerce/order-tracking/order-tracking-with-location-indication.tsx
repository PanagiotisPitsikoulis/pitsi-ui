export default function OrderTrackingWithLocationIndication() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="flex w-full flex-col items-center justify-start gap-4">
            <h2 className="font-manrope w-full text-center text-3xl leading-normal font-bold text-black">
              Order Tracking
            </h2>
            <p className="w-full max-w-4xl text-center text-base leading-relaxed font-normal text-gray-500">
              Order tracking is a service provided by companies to allow
              customers to monitor the progress and location of their purchases
              from the time they are placed until they are delivered.
            </p>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-10">
            <div className="flex w-full flex-col items-center justify-between gap-3 sm:flex-row">
              <h4 className="font-manrope text-2xl leading-9 font-medium text-gray-500">
                Order ID:
                <span className="font-bold text-gray-900">#1025400025</span>
              </h4>
              <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
                <span className="px-2 py-px text-center text-base leading-relaxed font-semibold text-white">
                  On Delivery
                </span>
              </button>
            </div>
            <div className="grid w-full grid-cols-1 items-start justify-start gap-8 md:grid-cols-3">
              <div className="group inline-flex h-full w-full flex-col items-start justify-start rounded-xl border border-gray-200 bg-white p-4 transition-all duration-700 ease-in-out hover:border-gray-400 md:p-2.5 lg:p-4">
                <div className="flex w-full flex-col items-start justify-start gap-3.5">
                  <div className="inline-flex w-full items-center justify-between">
                    <div className="flex items-center justify-start gap-4">
                      <a className="inline-flex w-[54px] flex-col items-start justify-start gap-2.5 rounded-lg bg-indigo-100 p-2.5 transition-all duration-700 ease-in-out group-hover:bg-indigo-200"></a>
                      <h6 className="text-base leading-relaxed font-semibold text-gray-500">
                        Customer
                      </h6>
                    </div>
                    <a className="transition-all duration-700 ease-in-out hover:bg-gray-100"></a>
                  </div>
                  <h4 className="text-xl leading-8 font-medium text-black">
                    John Smith Asli
                  </h4>
                </div>
              </div>
              <div className="group inline-flex h-full w-full flex-col items-start justify-start rounded-xl border border-gray-200 bg-white p-4 transition-all duration-700 ease-in-out hover:border-gray-400 md:p-2.5 lg:p-4">
                <div className="flex w-full flex-col items-start justify-start gap-3.5">
                  <div className="inline-flex w-full items-center justify-between">
                    <div className="flex items-center justify-start gap-4">
                      <a className="inline-flex w-[54px] flex-col items-start justify-start gap-2.5 rounded-lg bg-green-100 p-2.5 transition-all duration-700 ease-in-out group-hover:bg-green-200"></a>
                      <h6 className="text-base leading-relaxed font-semibold text-gray-500">
                        Phone Number
                      </h6>
                    </div>
                    <a className="transition-all duration-700 ease-in-out hover:bg-gray-100"></a>
                  </div>
                  <h4 className="text-xl leading-8 font-medium text-black">
                    +71 254 125 41023
                  </h4>
                </div>
              </div>
              <div className="group inline-flex h-full w-full flex-col items-start justify-start rounded-xl border border-gray-200 bg-white p-4 transition-all duration-700 ease-in-out hover:border-gray-400 md:p-2.5 lg:p-4">
                <div className="flex w-full flex-col items-start justify-start gap-3.5">
                  <div className="inline-flex w-full items-center justify-between">
                    <div className="flex items-center justify-start gap-4">
                      <a className="inline-flex w-[54px] flex-col items-start justify-start gap-2.5 rounded-lg bg-blue-100 p-2.5 transition-all duration-700 ease-in-out group-hover:bg-blue-200"></a>
                      <h6 className="text-base leading-relaxed font-semibold text-gray-500">
                        Address
                      </h6>
                    </div>
                    <a className="transition-all duration-700 ease-in-out hover:bg-gray-100"></a>
                  </div>
                  <h4 className="text-xl leading-8 font-medium text-black">
                    718 Robbyn Meadow, S...
                  </h4>
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
          <div className="flex w-full flex-col">
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
