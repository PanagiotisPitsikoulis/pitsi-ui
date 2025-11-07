export default function PricingModelWithTable() {
  return (
    <section className="py-24">
      <div className="tabs mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-8 pb-12">
          <div className="grid w-full items-center justify-center gap-4 text-center lg:flex lg:justify-between lg:text-start">
            <div className="inline-flex flex-col items-center justify-center gap-4 lg:items-start lg:justify-start">
              <h2 className="font-manrope text-4xl leading-normal font-bold text-gray-900">
                Pay as you Grow Pricing Model
              </h2>
              <p className="text-md leading-7 font-normal text-gray-500">
                7 Days free trial. No credit card required.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 lg:flex-row">
              {/*Switch*/}
              <div className="mx-auto flex max-w-sm items-center justify-center rounded-full bg-orange-100 p-1.5">
                <a
                  className="tab-active:text-white tab-active:bg-orange-500 tab-active:rounded-full tablink active inline-block items-center justify-center rounded-full border-none px-7 py-3 text-center text-base font-semibold whitespace-nowrap text-orange-500 transition-all duration-500"
                  data-tab="tabs-with-background-1"
                  role="tab"
                >
                  Bill Yearly
                </a>
                <a
                  className="tab-active:text-white tab-active:bg-orange-500 tab-active:rounded-full tablink inline-block rounded-full px-7 py-3 text-center text-base font-semibold whitespace-nowrap text-orange-500 transition-all duration-500"
                  data-tab="tabs-with-background-2"
                  role="tab"
                >
                  Bill Monthly
                </a>
              </div>
            </div>
          </div>
          <div className="flex h-3.5 w-full flex-col items-start justify-start gap-2.5 rounded-full bg-orange-100">
            <div className="h-3.5 w-48 rounded-full bg-orange-600 lg:w-[507px]" />
          </div>
        </div>
        <div
          id="tabs-with-background-1"
          role="tabpanel"
          aria-labelledby="tabs-with-background-item-1"
          className="tabcontent"
        >
          <div className="hidden min-w-full flex-col items-start justify-start overflow-hidden overflow-x-auto rounded-lg border border-gray-300 align-middle lg:block">
            <table className="min-w-full">
              <thead className="w-full">
                <tr className="flex w-full">
                  <th
                    scope="col"
                    className="inline-flex w-full items-center justify-between gap-4 px-8 py-9 whitespace-nowrap"
                  >
                    <div className="inline-flex w-full flex-col items-start justify-start gap-2">
                      <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                        Free
                      </h3>
                      <p className="text-base leading-relaxed font-normal text-gray-600">
                        Per Month
                      </p>
                    </div>
                    <div className="inline-flex w-full flex-col items-end justify-center">
                      <span className="font-manrope rounded-lg bg-orange-50 px-6 py-2 text-center text-3xl leading-tight font-semibold text-orange-600">
                        $0
                      </span>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="inline-flex w-full items-center justify-between gap-4 px-8 py-9 whitespace-nowrap"
                  >
                    <div className="inline-flex flex-col items-start justify-start gap-2">
                      <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                        Advanced
                      </h3>
                      <p className="text-base leading-relaxed font-normal text-gray-600">
                        Per Month
                      </p>
                    </div>
                    <div className="inline-flex flex-col items-center justify-center rounded-lg bg-orange-50 px-6 py-2">
                      <span className="font-manrope text-center text-3xl leading-tight font-semibold text-orange-600">
                        $150
                      </span>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="inline-flex w-full items-center justify-between gap-4 border-none px-8 py-9 whitespace-nowrap"
                  >
                    <div className="inline-flex flex-col items-start justify-start gap-2">
                      <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                        Team
                      </h3>
                      <p className="text-base leading-relaxed font-normal text-gray-600">
                        Per Month
                      </p>
                    </div>
                    <div className="inline-flex flex-col items-center justify-center rounded-lg bg-orange-50 px-6 py-2">
                      <span className="font-manrope text-center text-3xl leading-tight font-semibold text-orange-600">
                        $180
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                  <td className="w-full px-6 py-5 whitespace-nowrap lg:px-8">
                    Features
                  </td>
                  <td className="w-full px-6 py-5 text-center whitespace-nowrap lg:px-8">
                    Free
                  </td>
                  <td className="w-full px-6 py-5 text-center whitespace-nowrap lg:px-8">
                    Advanced
                  </td>
                  <td className="w-full border-none px-6 py-5 text-center whitespace-nowrap lg:px-8">
                    Team
                  </td>
                </tr>
                <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                  <td className="w-full px-6 py-5 whitespace-nowrap lg:px-8">
                    User
                  </td>
                  <td className="w-full px-6 py-5 text-center whitespace-nowrap lg:px-8">
                    Upto 1,000
                  </td>
                  <td className="w-full px-6 py-5 text-center whitespace-nowrap lg:px-8">
                    Upto 1,000
                  </td>
                  <td className="w-full border-none px-6 py-5 text-center whitespace-nowrap lg:px-8">
                    Upto 1,000
                  </td>
                </tr>
                <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                  <td className="w-full px-4 py-5 whitespace-nowrap lg:px-8">
                    Auto tracking
                  </td>
                  <td className="w-full px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full border-none px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                  <td className="w-full px-4 py-5 whitespace-nowrap lg:px-8">
                    Transaction clearing
                  </td>
                  <td className="w-full px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full border-none px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                  <td className="text-md w-full px-1 py-5 whitespace-nowrap lg:px-8">
                    24/7Customer support
                  </td>
                  <td className="w-full px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full border-none px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="text-md inline-flex w-full items-center justify-center border-none leading-7 font-medium text-gray-900">
                  <td className="w-full px-4 py-5 whitespace-nowrap lg:px-8">
                    All widget access
                  </td>
                  <td className="w-full px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full border-none px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="block grid grid-cols-1 justify-center gap-6 lg:hidden">
            <div className="inline-flex flex-col items-start justify-start overflow-hidden overflow-x-auto rounded-lg border border-gray-300 align-middle">
              <table>
                <thead className="w-full">
                  <tr className="flex w-full">
                    <th
                      scope="col"
                      className="inline-flex w-full items-center justify-between border-none whitespace-nowrap"
                    >
                      <div className="inline-flex w-full flex-col items-start justify-start gap-2 border-r border-gray-300 px-8 py-9">
                        <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                          Free
                        </h3>
                        <p className="text-base leading-relaxed font-normal text-gray-600">
                          Per Month
                        </p>
                      </div>
                      <div className="inline-flex w-full flex-col items-center justify-center px-8 py-9">
                        <span className="font-manrope rounded-lg bg-orange-50 px-6 py-2 text-center text-3xl leading-tight font-semibold text-orange-600">
                          $0
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="text-md inline-flex w-full items-center justify-center border-none leading-7 font-medium text-gray-900">
                    <td className="w-full px-6 py-5 lg:px-8">Features</td>
                    <td className="w-full border-none border-gray-300 px-6 py-5 text-center lg:px-8">
                      Free
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-6 py-5 lg:px-8">User</td>
                    <td className="w-full border-none border-gray-300 px-6 py-5 text-center lg:px-8">
                      Upto 1,000
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">Auto tracking</td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">
                      Transaction clearing
                    </td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">
                      Transaction clearing
                    </td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="text-md w-full px-4 py-5 lg:px-8">
                      24/7 Customer support
                    </td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">
                      All widget access
                    </td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-10 inline-flex flex-col items-start justify-start overflow-hidden overflow-x-auto rounded-lg border border-gray-300 align-middle">
              <table>
                <thead className="w-full">
                  <tr className="flex w-full">
                    <th
                      scope="col"
                      className="inline-flex w-full items-center justify-between border-none whitespace-nowrap"
                    >
                      <div className="inline-flex w-full flex-col items-start justify-start gap-2 border-r border-gray-300 px-8 py-9">
                        <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                          Advanced
                        </h3>
                        <p className="text-base leading-relaxed font-normal text-gray-600">
                          Per Month
                        </p>
                      </div>
                      <div className="inline-flex w-full flex-col items-center justify-center px-8 py-9">
                        <span className="font-manrope rounded-lg bg-orange-50 px-6 py-2 text-center text-3xl leading-tight font-semibold text-orange-600">
                          $150
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="text-md inline-flex w-full items-center justify-center border-none leading-7 font-medium text-gray-900">
                    <td className="w-full px-6 py-5 lg:px-8">Features</td>
                    <td className="w-full border-none border-gray-300 px-6 py-5 text-center lg:px-8">
                      Advanced
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-6 py-5 lg:px-8">User</td>
                    <td className="w-full border-none border-gray-300 px-6 py-5 text-center lg:px-8">
                      Upto 1,000
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">Auto tracking</td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">
                      Transaction clearing
                    </td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">
                      Transaction clearing
                    </td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="text-md w-full px-4 py-5 lg:px-8">
                      24/7 Customer support
                    </td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">
                      All widget access
                    </td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-10 inline-flex flex-col items-start justify-start overflow-hidden overflow-x-auto rounded-lg border border-gray-300 align-middle">
              <table>
                <thead className="w-full">
                  <tr className="flex w-full">
                    <th
                      scope="col"
                      className="inline-flex w-full items-center justify-between border-none whitespace-nowrap"
                    >
                      <div className="inline-flex w-full flex-col items-start justify-start gap-2 border-r border-gray-300 px-8 py-9">
                        <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                          Team
                        </h3>
                        <p className="text-base leading-relaxed font-normal text-gray-600">
                          Per Month
                        </p>
                      </div>
                      <div className="inline-flex w-full flex-col items-center justify-center px-8 py-9">
                        <span className="font-manrope rounded-lg bg-orange-50 px-6 py-2 text-center text-3xl leading-tight font-semibold text-orange-600">
                          $180
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="text-md inline-flex w-full items-center justify-center border-none leading-7 font-medium text-gray-900">
                    <td className="w-full px-6 py-5 lg:px-8">Features</td>
                    <td className="w-full border-none border-gray-300 px-6 py-5 text-center lg:px-8">
                      Team
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-6 py-5 lg:px-8">User</td>
                    <td className="w-full border-none border-gray-300 px-6 py-5 text-center lg:px-8">
                      Upto 1,000
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">Auto tracking</td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">
                      Transaction clearing
                    </td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">
                      Transaction clearing
                    </td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="text-md w-full px-4 py-5 lg:px-8">
                      24/7 Customer support
                    </td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">
                      All widget access
                    </td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
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
          className="tabcontent"
        >
          <div className="hidden min-w-full flex-col items-start justify-start overflow-hidden overflow-x-auto rounded-lg border border-gray-300 align-middle lg:block">
            <table className="min-w-full">
              <thead className="w-full">
                <tr className="flex w-full">
                  <th
                    scope="col"
                    className="inline-flex w-full items-center justify-between gap-4 px-8 py-9 whitespace-nowrap"
                  >
                    <div className="inline-flex flex-col items-start justify-start gap-2">
                      <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                        Free
                      </h3>
                      <p className="text-base leading-relaxed font-normal text-gray-600">
                        Per Month
                      </p>
                    </div>
                    <div className="inline-flex flex-col items-center justify-center rounded-lg bg-orange-50 px-6 py-2">
                      <span className="font-manrope text-center text-3xl leading-tight font-semibold text-orange-600">
                        $0
                      </span>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="inline-flex w-full items-center justify-between gap-4 px-8 py-9 whitespace-nowrap"
                  >
                    <div className="inline-flex flex-col items-start justify-start gap-2">
                      <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                        Advanced
                      </h3>
                      <p className="text-base leading-relaxed font-normal text-gray-600">
                        Per Month
                      </p>
                    </div>
                    <div className="inline-flex flex-col items-center justify-center rounded-lg bg-orange-50 px-6 py-2">
                      <span className="font-manrope text-center text-3xl leading-tight font-semibold text-orange-600">
                        $390
                      </span>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="inline-flex w-full items-center justify-between gap-4 border-none px-8 py-9 whitespace-nowrap"
                  >
                    <div className="inline-flex flex-col items-start justify-start gap-2">
                      <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                        Team
                      </h3>
                      <p className="text-base leading-relaxed font-normal text-gray-600">
                        Per Month
                      </p>
                    </div>
                    <div className="inline-flex flex-col items-center justify-center rounded-lg bg-orange-50 px-6 py-2">
                      <span className="font-manrope text-center text-3xl leading-tight font-semibold text-orange-600">
                        $490
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                  <td className="w-full px-6 py-5 whitespace-nowrap lg:px-8">
                    Features
                  </td>
                  <td className="w-full px-6 py-5 text-center whitespace-nowrap lg:px-8">
                    Free
                  </td>
                  <td className="w-full px-6 py-5 text-center whitespace-nowrap lg:px-8">
                    Advanced
                  </td>
                  <td className="w-full border-none px-6 py-5 text-center whitespace-nowrap lg:px-8">
                    Team
                  </td>
                </tr>
                <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                  <td className="w-full px-6 py-5 whitespace-nowrap lg:px-8">
                    User
                  </td>
                  <td className="w-full px-6 py-5 text-center whitespace-nowrap lg:px-8">
                    Upto 1,000
                  </td>
                  <td className="w-full px-6 py-5 text-center whitespace-nowrap lg:px-8">
                    Upto 1,000
                  </td>
                  <td className="w-full border-none px-6 py-5 text-center whitespace-nowrap lg:px-8">
                    Upto 1,000
                  </td>
                </tr>
                <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                  <td className="w-full px-4 py-5 whitespace-nowrap lg:px-8">
                    Auto tracking
                  </td>
                  <td className="w-full px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full border-none px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                  <td className="w-full px-4 py-5 whitespace-nowrap lg:px-8">
                    Transaction clearing
                  </td>
                  <td className="w-full px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full border-none px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                  <td className="text-md w-full px-1 py-5 whitespace-nowrap lg:px-8">
                    24/7Customer support
                  </td>
                  <td className="w-full px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full border-none px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                </tr>
                <tr className="text-md inline-flex w-full items-center justify-center border-none leading-7 font-medium text-gray-900">
                  <td className="w-full px-4 py-5 whitespace-nowrap lg:px-8">
                    All widget access
                  </td>
                  <td className="w-full px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                  <td className="w-full border-none px-4 py-5 text-center whitespace-nowrap lg:px-8">
                    {/* SVG removed */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="block grid-cols-1 justify-center gap-6 lg:hidden">
            <div className="inline-flex flex-col items-start justify-start overflow-hidden overflow-x-auto rounded-lg border border-gray-300 align-middle">
              <table>
                <thead className="w-full">
                  <tr className="flex w-full">
                    <th
                      scope="col"
                      className="inline-flex w-full items-center justify-between border-none whitespace-nowrap"
                    >
                      <div className="inline-flex w-full flex-col items-start justify-start gap-2 border-r border-gray-300 px-8 py-9">
                        <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                          Free
                        </h3>
                        <p className="text-base leading-relaxed font-normal text-gray-600">
                          Per Month
                        </p>
                      </div>
                      <div className="inline-flex w-full flex-col items-center justify-center px-8 py-9">
                        <span className="font-manrope rounded-lg bg-orange-50 px-6 py-2 text-center text-3xl leading-tight font-semibold text-orange-600">
                          $0
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="text-md inline-flex w-full items-center justify-center border-none leading-7 font-medium text-gray-900">
                    <td className="w-full px-6 py-5 lg:px-8">Features</td>
                    <td className="w-full border-none border-gray-300 px-6 py-5 text-center lg:px-8">
                      Free
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-6 py-5 lg:px-8">User</td>
                    <td className="w-full border-none border-gray-300 px-6 py-5 text-center lg:px-8">
                      Upto 1,000
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">Auto tracking</td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">
                      Transaction clearing
                    </td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">
                      Transaction clearing
                    </td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="text-md w-full px-4 py-5 lg:px-8">
                      24/7 Customer support
                    </td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">
                      All widget access
                    </td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-10 inline-flex flex-col items-start justify-start overflow-hidden overflow-x-auto rounded-lg border border-gray-300 align-middle">
              <table>
                <thead className="w-full">
                  <tr className="flex w-full">
                    <th
                      scope="col"
                      className="inline-flex w-full items-center justify-between border-none whitespace-nowrap"
                    >
                      <div className="inline-flex w-full flex-col items-start justify-start gap-2 border-r border-gray-300 px-8 py-9">
                        <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                          Advanced
                        </h3>
                        <p className="text-base leading-relaxed font-normal text-gray-600">
                          Per Month
                        </p>
                      </div>
                      <div className="inline-flex w-full flex-col items-center justify-center px-8 py-9">
                        <span className="font-manrope rounded-lg bg-orange-50 px-6 py-2 text-center text-3xl leading-tight font-semibold text-orange-600">
                          $390
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="text-md inline-flex w-full items-center justify-center border-none leading-7 font-medium text-gray-900">
                    <td className="w-full px-6 py-5 lg:px-8">Features</td>
                    <td className="w-full border-none border-gray-300 px-6 py-5 text-center lg:px-8">
                      Advanced
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-6 py-5 lg:px-8">User</td>
                    <td className="w-full border-none border-gray-300 px-6 py-5 text-center lg:px-8">
                      Upto 1,000
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">Auto tracking</td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">
                      Transaction clearing
                    </td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">
                      Transaction clearing
                    </td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="text-md w-full px-4 py-5 lg:px-8">
                      24/7 Customer support
                    </td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">
                      All widget access
                    </td>
                    <td className="w-full border-none border-gray-300 px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-10 inline-flex flex-col items-start justify-start overflow-hidden overflow-x-auto rounded-lg border border-gray-300 align-middle">
              <table>
                <thead className="w-full">
                  <tr className="flex w-full">
                    <th
                      scope="col"
                      className="inline-flex w-full items-center justify-between border-none whitespace-nowrap"
                    >
                      <div className="inline-flex w-full flex-col items-start justify-start gap-2 border-r border-gray-300 px-8 py-9">
                        <h3 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                          Team
                        </h3>
                        <p className="text-base leading-relaxed font-normal text-gray-600">
                          Per Month
                        </p>
                      </div>
                      <div className="inline-flex w-full flex-col items-center justify-center px-8 py-9">
                        <span className="font-manrope rounded-lg bg-orange-50 px-6 py-2 text-center text-3xl leading-tight font-semibold text-orange-600">
                          $490
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-6 py-5 lg:px-8">Features</td>
                    <td className="w-full border-none px-6 py-5 text-center lg:px-8">
                      Team
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-6 py-5 lg:px-8">User</td>
                    <td className="w-full border-none px-6 py-5 text-center lg:px-8">
                      Upto 1,000
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">Auto tracking</td>
                    <td className="w-full border-none px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">
                      Transaction clearing
                    </td>
                    <td className="w-full border-none px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">
                      Transaction clearing
                    </td>
                    <td className="w-full border-none px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center leading-7 font-medium text-gray-900">
                    <td className="text-md w-full px-4 py-5 lg:px-8">
                      24/7 Customer support
                    </td>
                    <td className="w-full border-none px-4 py-5 text-center lg:px-8">
                      {/* SVG removed */}
                    </td>
                  </tr>
                  <tr className="text-md inline-flex w-full items-center justify-center border-none leading-7 font-medium text-gray-900">
                    <td className="w-full px-4 py-5 lg:px-8">
                      All widget access
                    </td>
                    <td className="w-full border-none px-4 py-5 text-center lg:px-8">
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
  )
}
