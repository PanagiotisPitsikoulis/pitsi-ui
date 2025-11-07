export default function PricingModelWithTable() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 tabs">
        <div className="w-full flex-col justify-start items-start gap-8 inline-flex pb-12">
          <div className="w-full lg:justify-between justify-center items-center lg:flex gap-4 grid lg:text-start text-center">
            <div className="flex-col lg:justify-start justify-center lg:items-start items-center gap-4 inline-flex">
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                Pay as you Grow Pricing Model
              </h2>
              <p className="text-gray-500 text-md font-normal leading-7">
                7 Days free trial. No credit card required.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-col lg:flex-row">
              {/*Switch*/}
              <div className="flex justify-center items-center bg-orange-100 rounded-full p-1.5 max-w-sm mx-auto">
                <a
                  className="text-orange-500 tab-active:text-white tab-active:bg-orange-500 tab-active:rounded-full border-none text-base font-semibold rounded-full  justify-center items-center inline-block text-center transition-all duration-500 py-3 px-7 tablink whitespace-nowrap active"
                  data-tab="tabs-with-background-1"
                  role="tab"
                >
                  Bill Yearly
                </a>
                <a
                  className="text-orange-500 tab-active:text-white tab-active:bg-orange-500 inline-block text-center text-base transition-all duration-500 rounded-full font-semibold py-3 px-7  tab-active:rounded-full tablink whitespace-nowrap"
                  data-tab="tabs-with-background-2"
                  role="tab"
                >
                  Bill Monthly
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-3.5 bg-orange-100 rounded-full flex-col justify-start items-start gap-2.5 flex">
            <div className="lg:w-[507px] w-48 h-3.5 bg-orange-600 rounded-full" />
          </div>
        </div>
        <div
          id="tabs-with-background-1"
          role="tabpanel"
          aria-labelledby="tabs-with-background-item-1"
          className="tabcontent"
        >
          <div className="hidden min-w-full align-middle overflow-x-auto flex-col justify-start items-start overflow-hidden rounded-lg lg:block border border-gray-300">
            <table className="min-w-full">
              <thead className="w-full ">
                <tr className="w-full flex">
                  <th
                    scope="col"
                    className="w-full justify-between items-center inline-flex px-8 py-9 gap-4 whitespace-nowrap"
                  >
                    <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
                      <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        Free
                      </h3>
                      <p className="text-gray-600 text-base font-normal leading-relaxed">
                        Per Month
                      </p>
                    </div>
                    <div className="w-full flex-col justify-center items-end inline-flex">
                      <span className="text-center px-6 py-2 bg-orange-50 rounded-lg  text-orange-600 text-3xl font-semibold font-manrope leading-tight">
                        $0
                      </span>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="w-full justify-between items-center inline-flex px-8 py-9 gap-4 whitespace-nowrap"
                  >
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        Advanced
                      </h3>
                      <p className="text-gray-600 text-base font-normal leading-relaxed">
                        Per Month
                      </p>
                    </div>
                    <div className="px-6 py-2 bg-orange-50 rounded-lg flex-col justify-center items-center inline-flex">
                      <span className="text-center text-orange-600 text-3xl font-semibold font-manrope leading-tight">
                        $150
                      </span>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="w-full justify-between items-center inline-flex px-8 py-9 gap-4 whitespace-nowrap border-none"
                  >
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        Team
                      </h3>
                      <p className="text-gray-600 text-base font-normal leading-relaxed">
                        Per Month
                      </p>
                    </div>
                    <div className="px-6 py-2 bg-orange-50 rounded-lg flex-col justify-center items-center inline-flex">
                      <span className="text-center text-orange-600 text-3xl font-semibold font-manrope leading-tight">
                        $180
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-6">
                    Features
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-6 text-center">
                    Free
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-6 text-center">
                    Advanced
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-6 text-center border-none">
                    Team
                  </td>
                </tr>
                <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-6">
                    User
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-6 text-center">
                    Upto 1,000
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-6 text-center">
                    Upto 1,000
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-6 text-center border-none">
                    Upto 1,000
                  </td>
                </tr>
                <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4">
                    Auto tracking
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center border-none">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4">
                    Transaction clearing
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center border-none">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-1 text-md">
                    24/7Customer support
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center border-none">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7 border-none">
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4">
                    All widget access
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center border-none">
                    {/* SVG removed */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" grid grid-cols-1 gap-6 justify-center block lg:hidden">
            <div className=" align-middle overflow-x-auto flex-col justify-start items-start overflow-hidden rounded-lg inline-flex border border-gray-300">
              <table>
                <thead className="w-full ">
                  <tr className="w-full flex">
                    <th
                      scope="col"
                      className="w-full justify-between items-center inline-flex whitespace-nowrap border-none"
                    >
                      <div className="w-full flex-col justify-start items-start gap-2 inline-flex px-8 py-9 border-r border-gray-300">
                        <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                          Free
                        </h3>
                        <p className="text-gray-600 text-base font-normal leading-relaxed">
                          Per Month
                        </p>
                      </div>
                      <div className="w-full flex-col justify-center items-center inline-flex px-8 py-9 ">
                        <span className="text-center px-6 py-2 bg-orange-50 rounded-lg text-orange-600 text-3xl font-semibold font-manrope leading-tight">
                          $0
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7 border-none">
                    <td className="w-full  py-5 lg:px-8 px-6">Features</td>
                    <td className="w-full  border-gray-300 py-5 lg:px-8 px-6 text-center border-none">
                      Free
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full  py-5 lg:px-8 px-6">User</td>
                    <td className="w-full  border-gray-300 py-5 lg:px-8 px-6 text-center border-none">
                      Upto 1,000
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full  py-5 lg:px-8 px-4">Auto tracking</td>
                    <td className="w-full  border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full  py-5 lg:px-8 px-4">
                      Transaction clearing
                    </td>
                    <td className="w-full  border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-4">
                      Transaction clearing
                    </td>
                    <td className="w-full  border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full  py-5 lg:px-8 px-4 text-md">
                      24/7 Customer support
                    </td>
                    <td className="w-full  border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full  py-5 lg:px-8 px-4">
                      All widget access
                    </td>
                    <td className="w-full  border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className=" align-middle overflow-x-auto flex-col justify-start items-start overflow-hidden rounded-lg inline-flex mt-10 border border-gray-300">
              <table>
                <thead className="w-full ">
                  <tr className="w-full flex">
                    <th
                      scope="col"
                      className="w-full justify-between items-center inline-flex whitespace-nowrap border-none"
                    >
                      <div className="w-full flex-col justify-start items-start gap-2 inline-flex px-8 py-9 border-r border-gray-300">
                        <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                          Advanced
                        </h3>
                        <p className="text-gray-600 text-base font-normal leading-relaxed">
                          Per Month
                        </p>
                      </div>
                      <div className="w-full  flex-col justify-center items-center inline-flex px-8 py-9">
                        <span className="text-center px-6 py-2 bg-orange-50 rounded-lg text-orange-600 text-3xl font-semibold font-manrope leading-tight">
                          $150
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7 border-none">
                    <td className="w-full py-5 lg:px-8 px-6">Features</td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-6 text-center border-none">
                      Advanced
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-6">User</td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-6 text-center border-none">
                      Upto 1,000
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-4">Auto tracking</td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-4">
                      Transaction clearing
                    </td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-4">
                      Transaction clearing
                    </td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-4 text-md">
                      24/7 Customer support
                    </td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-4">
                      All widget access
                    </td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className=" align-middle overflow-x-auto flex-col justify-start items-start overflow-hidden rounded-lg inline-flex mt-10 border border-gray-300">
              <table>
                <thead className="w-full ">
                  <tr className="w-full flex">
                    <th
                      scope="col"
                      className="w-full justify-between items-center inline-flex whitespace-nowrap border-none"
                    >
                      <div className="w-full flex-col justify-start items-start gap-2 inline-flex px-8 py-9 border-r border-gray-300">
                        <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                          Team
                        </h3>
                        <p className="text-gray-600 text-base font-normal leading-relaxed">
                          Per Month
                        </p>
                      </div>
                      <div className="w-full flex-col justify-center items-center inline-flex px-8 py-9">
                        <span className="text-center px-6 py-2 bg-orange-50 rounded-lg text-orange-600 text-3xl font-semibold font-manrope leading-tight">
                          $180
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7  border-none">
                    <td className="w-full py-5 lg:px-8 px-6">Features</td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-6 text-center border-none">
                      Team
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-6">User</td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-6 text-center border-none">
                      Upto 1,000
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-4">Auto tracking</td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-4">
                      Transaction clearing
                    </td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-4">
                      Transaction clearing
                    </td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-4 text-md">
                      24/7 Customer support
                    </td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-4">
                      All widget access
                    </td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          id="tabs-with-background-2"
          role="tabpanel"
          aria-labelledby="tabs-with-background-item-2"
          className="tabcontent  "
        >
          <div className="hidden min-w-full align-middle overflow-x-auto flex-col justify-start items-start overflow-hidden rounded-lg lg:block  border border-gray-300">
            <table className="min-w-full">
              <thead className="w-full ">
                <tr className="w-full flex">
                  <th
                    scope="col"
                    className="w-full justify-between items-center inline-flex px-8 py-9 gap-4 whitespace-nowrap"
                  >
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        Free
                      </h3>
                      <p className="text-gray-600 text-base font-normal leading-relaxed">
                        Per Month
                      </p>
                    </div>
                    <div className="px-6 py-2 bg-orange-50 rounded-lg flex-col justify-center items-center inline-flex">
                      <span className="text-center text-orange-600 text-3xl font-semibold font-manrope leading-tight">
                        $0
                      </span>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="w-full justify-between items-center inline-flex px-8 py-9 gap-4 whitespace-nowrap"
                  >
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        Advanced
                      </h3>
                      <p className="text-gray-600 text-base font-normal leading-relaxed">
                        Per Month
                      </p>
                    </div>
                    <div className="px-6 py-2 bg-orange-50 rounded-lg flex-col justify-center items-center inline-flex">
                      <span className="text-center text-orange-600 text-3xl font-semibold font-manrope leading-tight">
                        $390
                      </span>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="w-full justify-between items-center inline-flex px-8 py-9 gap-4 whitespace-nowrap border-none"
                  >
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                      <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        Team
                      </h3>
                      <p className="text-gray-600 text-base font-normal leading-relaxed">
                        Per Month
                      </p>
                    </div>
                    <div className="px-6 py-2 bg-orange-50 rounded-lg flex-col justify-center items-center inline-flex">
                      <span className="text-center text-orange-600 text-3xl font-semibold font-manrope leading-tight">
                        $490
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-6">
                    Features
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-6 text-center">
                    Free
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-6 text-center">
                    Advanced
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-6 text-center border-none">
                    Team
                  </td>
                </tr>
                <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-6">
                    User
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-6 text-center">
                    Upto 1,000
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-6 text-center">
                    Upto 1,000
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-6 text-center border-none">
                    Upto 1,000
                  </td>
                </tr>
                <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4">
                    Auto tracking
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center border-none">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4">
                    Transaction clearing
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center border-none">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-1 text-md">
                    24/7Customer support
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center border-none">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7 border-none">
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4">
                    All widget access
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full whitespace-nowrap py-5 lg:px-8 px-4 text-center border-none">
                    {/* SVG removed */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" grid-cols-1 gap-6 justify-center block lg:hidden ">
            <div className=" align-middle overflow-x-auto flex-col justify-start items-start overflow-hidden rounded-lg inline-flex border border-gray-300">
              <table>
                <thead className="w-full ">
                  <tr className="w-full flex">
                    <th
                      scope="col"
                      className="w-full justify-between items-center inline-flex whitespace-nowrap border-none"
                    >
                      <div className="w-full flex-col justify-start items-start gap-2 inline-flex px-8 py-9 border-r border-gray-300">
                        <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                          Free
                        </h3>
                        <p className="text-gray-600 text-base font-normal leading-relaxed">
                          Per Month
                        </p>
                      </div>
                      <div className="w-full flex-col justify-center items-center inline-flex px-8 py-9">
                        <span className="px-6 py-2 bg-orange-50 rounded-lg text-center text-orange-600 text-3xl font-semibold font-manrope leading-tight">
                          $0
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7 border-none">
                    <td className="w-full py-5 lg:px-8 px-6">Features</td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-6 text-center border-none">
                      Free
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-6">User</td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-6 text-center border-none">
                      Upto 1,000
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-4">Auto tracking</td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-4">
                      Transaction clearing
                    </td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-4">
                      Transaction clearing
                    </td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-4 text-md">
                      24/7 Customer support
                    </td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-4">
                      All widget access
                    </td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="align-middle overflow-x-auto flex-col justify-start items-start overflow-hidden rounded-lg inline-flex mt-10 border border-gray-300">
              <table>
                <thead className="w-full ">
                  <tr className="w-full flex">
                    <th
                      scope="col"
                      className="w-full justify-between items-center inline-flex whitespace-nowrap border-none"
                    >
                      <div className="w-full flex-col justify-start items-start gap-2 inline-flex px-8 py-9 border-r border-gray-300">
                        <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                          Advanced
                        </h3>
                        <p className="text-gray-600 text-base font-normal leading-relaxed">
                          Per Month
                        </p>
                      </div>
                      <div className="w-full flex-col justify-center items-center px-8 py-9 inline-flex">
                        <span className="text-center px-6 py-2 bg-orange-50 rounded-lg text-orange-600 text-3xl font-semibold font-manrope leading-tight">
                          $390
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7 border-none">
                    <td className="w-full py-5 lg:px-8 px-6">Features</td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-6 text-center border-none">
                      Advanced
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-6">User</td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-6 text-center border-none">
                      Upto 1,000
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-4">Auto tracking</td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-4">
                      Transaction clearing
                    </td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-4">
                      Transaction clearing
                    </td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-4 text-md">
                      24/7 Customer support
                    </td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full py-5 lg:px-8 px-4">
                      All widget access
                    </td>
                    <td className="w-full border-gray-300 py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className=" align-middle overflow-x-auto flex-col justify-start items-start overflow-hidden rounded-lg inline-flex mt-10 border border-gray-300">
              <table>
                <thead className="w-full">
                  <tr className="w-full flex">
                    <th
                      scope="col"
                      className="w-full justify-between items-center inline-flex whitespace-nowrap border-none"
                    >
                      <div className="w-full flex-col justify-start items-start gap-2 inline-flex px-8 py-9 border-r border-gray-300">
                        <h3 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                          Team
                        </h3>
                        <p className="text-gray-600 text-base font-normal leading-relaxed">
                          Per Month
                        </p>
                      </div>
                      <div className="w-full px-8 py-9 flex-col justify-center items-center inline-flex">
                        <span className="text-center px-6 py-2 bg-orange-50 rounded-lg text-orange-600 text-3xl font-semibold font-manrope leading-tight">
                          $490
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7 ">
                    <td className="w-full  py-5 lg:px-8 px-6">Features</td>
                    <td className="w-full   py-5 lg:px-8 px-6 text-center border-none">
                      Team
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full  py-5 lg:px-8 px-6">User</td>
                    <td className="w-full   py-5 lg:px-8 px-6 text-center border-none">
                      Upto 1,000
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full  py-5 lg:px-8 px-4">Auto tracking</td>
                    <td className="w-full   py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full  py-5 lg:px-8 px-4">
                      Transaction clearing
                    </td>
                    <td className="w-full   py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full  py-5 lg:px-8 px-4">
                      Transaction clearing
                    </td>
                    <td className="w-full   py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7">
                    <td className="w-full  py-5 lg:px-8 px-4 text-md">
                      24/7 Customer support
                    </td>
                    <td className="w-full   py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="w-full justify-center items-center inline-flex text-gray-900 text-md font-medium leading-7 border-none">
                    <td className="w-full  py-5 lg:px-8 px-4">
                      All widget access
                    </td>
                    <td className="w-full   py-5 lg:px-8 px-4 text-center border-none">
                      {/* SVG removed */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
