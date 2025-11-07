export default function AppplicationShellWithBackground() {
  return (
    <div className="relative bg-indigo-600 dark:bg-gray-900">
      {/*header*/}
      <nav className="fixed top-0 z-20 w-full border-b border-solid border-indigo-400 bg-indigo-600 px-6 py-3.5 dark:border-gray-700 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-between gap-1 sm:gap-6 lg:flex-row">
          <div className="flex w-full items-center justify-between lg:w-auto">
            <a href="#" className="block">
              <img
                src="https://pagedone.io/asset/uploads/1712310504.png"
                alt="Pagedone logo image"
              />
            </a>
            <button
              id="navbar-toggle"
              className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none lg:hidden dark:hover:bg-gray-700"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div
            id="mobile-navbar"
            className="hidden w-full flex-1 flex-row rounded-xl py-4 shadow-sm lg:flex lg:bg-transparent lg:py-0 lg:shadow-none"
          >
            <ul className="flex flex-col items-center gap-2 rounded-xl p-1 text-center lg:ml-auto lg:flex lg:flex-row lg:bg-indigo-500 xl:gap-1 dark:bg-transparent">
              <li>
                <a
                  href="#"
                  className="flex justify-center rounded-lg bg-white px-5 py-2 text-xs font-semibold text-gray-900 transition-all duration-500 ease-in-out"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex justify-center rounded-lg bg-transparent px-5 py-2 text-xs font-semibold text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-gray-900"
                >
                  Employees
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex justify-center rounded-lg bg-transparent px-5 py-2 text-xs font-semibold text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-gray-900"
                >
                  Attendances
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex justify-center rounded-lg bg-transparent px-5 py-2 text-xs font-semibold text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-gray-900"
                >
                  Calendar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex justify-center rounded-lg bg-transparent px-5 py-2 text-xs font-semibold text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-gray-900"
                >
                  Leaves
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex justify-center rounded-lg bg-transparent px-5 py-2 text-xs font-semibold text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-gray-900"
                >
                  Payroll
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex justify-center rounded-lg bg-transparent px-5 py-2 text-xs font-semibold text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-gray-900"
                >
                  Document
                </a>
              </li>
            </ul>
            <div className="items-center gap-1 text-center sm:gap-4 lg:ml-auto lg:flex">
              <div className="flex items-center justify-center gap-1 sm:gap-2 lg:justify-start">
                <div className="relative w-max p-3"></div>
                <p className="font-normal text-indigo-400 dark:text-gray-700">
                  |
                </p>
                <button className="flex h-8 w-8 items-center justify-center p-3 sm:h-11 sm:w-11"></button>
              </div>
              <button className="group mx-auto flex items-center gap-1.5 rounded-lg border border-solid bg-indigo-50 px-2 py-2 text-sm font-medium whitespace-nowrap text-indigo-600 transition-all duration-300 hover:border-indigo-700 hover:bg-indigo-100 lg:mx-0 lg:pr-5 lg:pl-3.5">
                <span className="max-lg:hidden">Add Employee</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/*main content*/}
      <div className="mt-[68px] px-8 py-3.5 lg:mt-[72px]">
        <div className="block max-lg:pl-6">
          <h6 className="mb-1.5 text-sm font-semibold whitespace-nowrap text-white sm:text-lg">
            Welcome back,
            <span className="text-base font-semibold text-white sm:text-lg">
              Ronald!
            </span>
          </h6>
          <p className="text-xs font-medium text-white">Home</p>
        </div>
      </div>
      <div className="p-4">
        <div className="overflow-hidden rounded-2xl bg-white p-8">
          <div className="rounded-2xl border border-gray-200">
            <img
              src="https://pagedone.io/asset/uploads/1712309277.png"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
